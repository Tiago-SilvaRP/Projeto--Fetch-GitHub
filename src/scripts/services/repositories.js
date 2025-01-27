import { baseUrl, getQuantity } from './variables.js'

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${getQuantity}`)
    return await response.json()
    
}

export { getRepositories }