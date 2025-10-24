import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { urlFor } from './imageUrl'
import { getSanityClient } from '../sanityClient'

const BlogList = ({ limit = null }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getSanityClient().then(client => {
      const query = limit
        ? `*[_type == "post"] | order(publishedAt desc)[0...${limit}]{
            title,
            slug,
            publishedAt,
            mainImage,
            author->{ name },
            categories[]->{ title },
            body
          }`
        : `*[_type == "post"] | order(publishedAt desc){
            title,
            slug,
            publishedAt,
            mainImage,
            author->{ name },
            categories[]->{ title },
            body
          }`

      client.fetch(query)
        .then(setPosts)
        .catch(console.error)
    })
  }, [limit])

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Latest Blog Posts</h2>
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map(post => (
              <div
                key={post.slug.current}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl"
              >
                {post.mainImage && (
                  <img
                    src={urlFor(post.mainImage).width(600).url()}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Author:</strong> {post.author?.name || 'Unknown'}<br />
                  <strong>Categories:</strong> {post.categories?.map(cat => cat.title).join(', ') || 'Uncategorized'}<br />
                  <strong>Date:</strong> {new Date(post.publishedAt).toDateString()}
                </p>
                <div className="relative mb-4">
                  <p className="text-gray-700 line-clamp-3">
                    {Array.isArray(post.body) &&
                    post.body[0]?.children?.[0]?.text
                      ? post.body[0].children[0].text.slice(0, 160)
                      : 'No preview available.'}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                </div>
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read full post →
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No blog posts found.</p>
        )}
      </div>
    </div>
  )
}

export default BlogList
