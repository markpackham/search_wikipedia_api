export const buildSearchResults = (resultArray) => {
  resultArray.forEach((result) => {
    const resultItem = createResultItem(result);
    const resultContents = document.createElement("div");
    resultContents.classList.add("resultContents");
    if (result.img) {
      const resultImage = createResultImage(result);
      resultContents.appendChild(resultImage);
    }
    const resultText = createResultText(result);
    resultContents.appendChild(resultText);
    resultItem.append(resultContents);
    const searchResults = document.getElementsById("searchResults");
    searchResults.append(resultItem);
  });
};

const createResultItem = (result) => {};
