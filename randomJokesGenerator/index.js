

fetch("jokes.json")
  .then(response => response.json())
  .then(jokes => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const jokeObj = jokes[randomIndex];

    // Combine setup + punchline
    const jokeHtml = `
      <p><strong>Setup:</strong> ${jokeObj.setup}</p>
      <p><strong>Punchline:</strong> ${jokeObj.punchline}</p>
    `;

    document.getElementById("jokeBox").innerHTML = jokeHtml;
  })
  .catch(error => {
    console.error("Error loading jokes:", error);
    document.getElementById("jokeBox").innerHTML = "Failed to load jokes.";
  });
