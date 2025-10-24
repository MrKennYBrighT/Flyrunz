export async function getSanityClient() {
  const { createClient } = await import('@sanity/client')

  return createClient({
    projectId: 'tlz8fh1m',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-10-14'
  })
}
