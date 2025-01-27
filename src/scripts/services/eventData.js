import { baseUrl, getQuantity } from "./variables.js"

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${getQuantity}`)
    return await response.json()
}

export { getEvents }