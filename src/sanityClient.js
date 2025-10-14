import { createClient } from '@sanity/client'

export default createClient({
  projectId: 'tlz8fh1m',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-10-14' // ✅ Add this line
})
