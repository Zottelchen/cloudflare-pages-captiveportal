export async function onRequest(context) {
    return new Response(null, { 
	  status: 204,
      headers: {
		"X-NetworkManager-Status": "online",
	  },
	});
}
