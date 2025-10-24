import imageUrlBuilder from '@sanity/image-url'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'tlz8fh1m',
  dataset: 'production',
  apiVersion: '2023-10-14',
  useCdn: true
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
