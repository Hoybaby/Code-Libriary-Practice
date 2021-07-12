const getData = async () => {
    try {
        const response = await fetch('https://api-to-call.com/endpoint')
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } throw new Error('Request failed!')

    }

    catch (error) {
        // Generally, developers create a more sophisticated way of handling the error, 
        // like redirecting their users to another page, but logging is fine for us at the moment.
        console.log(error)
    }
}

// another way ti simply use fetch to get data from api
let users = [];
fetch(`https://randomuser.me/api/?results=10`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);
  });