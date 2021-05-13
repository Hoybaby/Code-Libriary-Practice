// below is the boiler plate for get requests in XHR

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  // purpose of this conditional is to check to see if the request has finished.
  if(xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response
  }
}

// the .open creates a new request and the arugments passed in deteremine the type and URL of the request.
xhr.open('GET', url);
xhr.send()