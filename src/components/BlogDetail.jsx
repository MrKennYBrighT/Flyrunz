// BlogDetail.jsx
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { PortableText } from '@portabletext/react'
import { urlFor } from '../components/imageUrl'
import client from '../sanityClient'

export default function BlogDetail() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })
      .then(setPost)
  }, [slug])

  if (!post) return <p>Loading...</p>

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <img src={urlFor(post.mainImage).width(800).url()} alt={post.title} className="rounded-lg mb-6" />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-2">By {post.author?.name} on {new Date(post.publishedAt).toDateString()}</p>
      <div className="prose prose-blue">
        <PortableText value={post.body} />
      </div>
    </div>
  )
}
