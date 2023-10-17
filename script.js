const apiUrl = 'https://v2.jokeapi.dev/joke/Any';
const jokeContainer = document.querySelector('#joke');
const jokeButton = document.querySelector('#btn');

async function getRandomJoke() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch joke');
    }

    // Log entire response
    // console.log('Response:', response);

    const data = await response.json();

    // Log parsed data
    // console.log('Parsed Data:', data);
    jokeContainer.classList.add('fade');

    if (data.type === 'single') {
      jokeContainer.textContent = data.joke; // change to .textContent
    } else {
      jokeContainer.textContent = `${data.setup} ${data.delivery}`;
    }
  } catch (error) {
    console.error('An Error occured:', error);
    jokeContainer.textContent = 'Error:' + error;
  }
}

// Event Listener
jokeButton.addEventListener('click', getRandomJoke);
