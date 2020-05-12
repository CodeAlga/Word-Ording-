function init() {
  let userSearch = document.getElementById("searchText").value;

  if (!userSearch) userSearch = "War";

  for (var i = 1; i < 10; i++) {
    fetchFromApi(userSearch, i);
  }

  //
  // EVENT LISTENERS FOR THE BUTTONS
  //
  document.getElementById("refreshText").addEventListener("click", selectMovie);
  document
    .getElementById("searchTextButton")
    .addEventListener("click", newSearch);
  document.getElementById("orderButton").addEventListener("click", orderText);
  document
    .getElementById("clearResults")
    .addEventListener("click", clearResults);
}

init();
