const API = "https://6190968ff6bf450017484c42.mockapi.io/api/test/test"
const data = { name:"a", BookName: "book" }

fetch(API)
    .then((response) => response.json())
    .then((data) => console.log(data.results[4].question))
    .catch((error) => console.log(error))



fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);
    });


fetch(API, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});