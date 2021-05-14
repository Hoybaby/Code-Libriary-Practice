// the https is This first argument which determines the endpoint of the request.

fetch('https://api-to-call.com/endpoint').then(response => {
    if (response.ok) {
        return response.json()
    }
    throw new Error('Request failed!');
},
    networkError => { console.log(networkError.message) }
    // the second .then() wont trigger if the first .then has an error or falsy
).then(jsonResponse => {
    return jsonResponse
})