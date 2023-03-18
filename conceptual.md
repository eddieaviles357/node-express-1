### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Some ways of managing asynchronous code is by calling a function when the asynchronous code is finished (callbacks). Another way is using promises, which allow for method chaining. Another way is using async await key words that are basically syntactic sugar over promises, but make your code look better and easier to manage.
- What is a Promise?
  A Promise is an Object that may produce a value some time in the future.
- What are the differences between an async function and a regular function?
  An async function is used to execute asynchronous code that may return a value in the future, it's basically a Promise Object.
- What is the difference between Node.js and Express.js?
  Node Js is a runtime environment that makes use of the Chromium V8 engine.
  Express.js is a Node web framework.
- What is the error-first callback pattern?
  The error-first callback pattern is used by using the first argument as a reserved Error Object in a callback function. The callback will either return an Error Object or anything successful.
- What is middleware?
  Middleware is a function or any logic that runs or a bridge that connects to another function, application, or process.
- What does the `next` function do?
  The next function passes execution to the next middleware or function.
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  Each request has to wait for any data to be retrieved and won't run until the previous one is completed. We can execute the code at once using Promise.all and if any request is rejected we can return an error instead of returning bad data or null data. For the naming of variables we can use one variable called users that will return an Array of objects with individual users data.

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}
```
