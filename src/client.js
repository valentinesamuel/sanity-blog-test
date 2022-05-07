import client from '@sanity/client'

export default client({
    projectId: "b8s6pmvd",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-05-07"
})

