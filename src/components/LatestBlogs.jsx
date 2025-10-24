import { useEffect, useState } from 'react'
import { urlFor } from '../utils/imageUrl'
import { getSanityClient } from '../sanityClient'

export default function LatestBlogs() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getSanityClient().then(client => {
      client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...3]{
        title,
        slug,
        publishedAt,
        author->{ name },
        categories[]->{ title },
        body,
        mainImage
      }`).then(setPosts).catch(console.error)
    })
  }, [])

  return (
    <div>
      <h2>Latest Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        posts.map(post => (
          <div key={post.slug.current} style={{ marginBottom: '2rem' }}>
            {post.mainImage && (
              <img
                src={urlFor(post.mainImage).width(600).url()}
                alt={post.title}
                loading="lazy"
                style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}
              />
            )}
            <h3>{post.title}</h3>
            <p><strong>Author:</strong> {post.author?.name}</p>
            <p><strong>Date:</strong> {new Date(post.publishedAt).toDateString()}</p>
            <p>{post.body[0]?.children[0]?.text || 'Read more...'}</p>
            <a href={`/blog/${post.slug.current}`}>Read full post</a>
          </div>
        ))
      )}
    </div>
  )
}
