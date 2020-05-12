// API AUTHORITAION KEY
// xwXbJGX6tAjGGENzeF9b
// 39f91dd2
// http://www.omdbapi.com/?s=inception&apikey=39f91dd2

let imbdIDArray = [];
let displayError = false;

function handleError() {
  // let msg = new Response(
  //   JSON.stringify({
  //     code: 400,
  //     message: "Error while fetching",
  //   })
  // );
  // return msg;

  let alertPlacement = document.getElementById("searchBar");

  alertPlacement.insertAdjacentHTML(
    "beforebegin",
    `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> We couldnt find anything with that.
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
    </div>`
  );
}

function newSearch() {
  let userSearch = document.getElementById("searchText").value;

  if (!userSearch) userSearch = "War";

  for (var i = 0; i < 10; i++) {
    fetchFromApi(userSearch, i);
  }

  imbdIDArray = [];
}

async function fetchFromApi(searchValue, i) {
  let url = `http://www.omdbapi.com/?apikey=39f91dd2&s=*${searchValue}*&page=${i}`;

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.Response);

      if (data.Response == "False" && !displayError) {
        displayError = true;
        handleError();
      } else {
        !displayError;
        data.Search.forEach((movie) => imbdIDArray.push(movie.imdbID));
      }
    })
    .catch((err) => {
      console.log(err);
    });

  imbdIDArray.length > 71 ? selectMovie() : null;
}

async function selectMovie() {
  let randomNumber = Math.floor(Math.random() * 80 + 1);
  let url = `http://www.omdbapi.com/?i=${imbdIDArray[randomNumber]}&plot=full&apikey=39f91dd2`;

  let movieData = {};

  await fetch(url)
    .then((res) => res.json())
    .then((data) => (movieData = data))
    .catch((err) => {
      console.log(err);
    });

  const plotBox = document.getElementById("moviePlot");
  const titleBox = document.getElementById("movieTitle");

  plotBox.innerHTML = `<p class="card-text text-muted">${movieData.Plot}</p>`;
  titleBox.innerHTML = `<p class="card-title font-weight-bold">${movieData.Title}</p>`;
}
