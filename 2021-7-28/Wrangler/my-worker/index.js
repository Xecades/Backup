const host = "www.youtube.com";

async function handleRequest(request) {
	const url = request.url.replace(new URL(request.url).host, host);

	return await fetch(url);
}

addEventListener("fetch", event => {
	return event.respondWith(handleRequest(event.request))
})
