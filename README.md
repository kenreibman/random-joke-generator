# random-joke-generator

Live site: https://kenreibman.github.io/random-joke-generator/

Using Random Joke Generator API, I learned more in-depth on async functions and try-catch blocks. 
The code is used with a try-catch block that handles errors. 

    You should use a try-catch block when you expect that an operation within your async function may produce errors, and you want to handle them gracefully.

    If an error would lead to a crash or unexpected behavior in your application, using a try-catch block is recommended.

    However, not every async function requires error handling. If an error in a particular function can safely bubble up to a higher-level error handler (e.g., a global error handler for your application), you may choose not to use a try-catch block within the function itself.

    In cases where you want to propagate errors without handling them locally, you can simply let the error propagate by not using a try-catch block in the async function. This can be useful when you want a higher-level error handler to deal with all errors.

In summary, you should use a try-catch block in an async function when you need to handle errors locally, prevent unhandled rejections, and provide graceful error handling. However, the decision to use it should be based on your specific error-handling strategy and the requirements of your application.

I also learned a more simplified version without try-catch blocks. 
```
const response = await fetch('https://v2.jokeapi.dev/joke/Any');
  const data = await response.json();

  if (data.type === 'single') {
    jokeContainer.textContent = data.joke;
  } else {
    jokeContainer.textContent = `${data.setup} ${data.delivery}`;
  }
}
```
