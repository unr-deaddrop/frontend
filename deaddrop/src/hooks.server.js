export async function handleFetch({ request, fetch }) {
    request = new Request(`http://backend:8000${request.url.split("8000")[1]}`, request);
    return fetch(request);
}