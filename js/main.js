import { setSearchFocus, showClearTextButton } from "./searchBar.js";
import {
  deleteSearchResults,
  buildSearchResults,
  clearStatsLine,
  setStatsLine,
} from "./searchResults.js";
import { getSearchTerm, retrieveSearchResults } from "./dataFunctions.js";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState == "complete") {
    initApp();
  }
});

const initApp = () => {
  setSearchFocus();

  // 3 listeners clear text
  const search = document.getElementById("search");
  search.addEventListener("input", showClearTextButton);

  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
};

// procedural "workflow" function (calls functions in specific order)
const submitTheSearch = (event) => {
  event.preventDefault();
  deleteSearchResults();
  processTheSearch();
  setSearchFocus();
};

// Procedural
const processTheSearch = async () => {
  clearStatsLine();
  const searchTerm = getSearchTerm();
  if (searchTerm === "") return;
  const resultArray = await retrieveSearchResults(searchTerm);
  // build search results
  if (resultArray.length) {
    buildSearchResults(resultArray);
  }
  setStatsLine(resultArray.length);
};
