const displayResultsBox = document.getElementById("resultBox");

function orderText() {
  let textToOrder = "";

  const userText = document.getElementById("userText").value;
  const fetchedText = document.getElementById("moviePlot").innerText;

  if (!userText) {
    textToOrder = fetchedText;
  } else {
    textToOrder = userText;
  }

  displayResultsBox.innerHTML = "";

  const wordArray = textToOrder.split(" ");

  let wordFrequency = {};

  for (let i = 0, len = wordArray.length; i < len; i++) {
    let word = wordArray[i];

    if (wordFrequency[word]) {
      wordFrequency[word]++;
    } else {
      wordFrequency[word] = 1;
    }
  }

  const wordArrayToOrder = Object.entries(wordFrequency);
  wordArrayToOrder.sort((a, b) => b[1] - a[1]);

  wordArrayToOrder.forEach((word) => {
    displayResultsBox.innerHTML =
      displayResultsBox.innerHTML +
      `<span class="badge badge-pill badge-warning badgeText card-text m-1">
      ${word[0]} <span class="badge badge-light badgeCounter">${word[1]}</span>
    </span>`;
  });
}

function clearResults() {
  displayResultsBox.innerHTML = "";
}
