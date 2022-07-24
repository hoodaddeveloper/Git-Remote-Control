const getTodos = function (url) {
  const request = new XMLHttpRequest();

  request.open("GET", url);
  request.send();

  request.onload = function () {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      console.log(data);
    } else {
      console.log("request failed");
    }
  };
};

const url = "https://jsonplaceholder.typicode.com/todos/1";

getTodos();
