// Get Async Call API Button Element
const getAsyncBtn = document.getElementById("call");
// Add Event Listener
getAsyncBtn.addEventListener("click", getDataAsync);

const apiURL = "http://localhost:3000/api/fruits";

async function getDataAsync() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    // Generate Table According to the JSON field
    function generateTable(data) {
      let tableHTML =
        '<table class="table table-striped"><thead><tr><th>Name</th><th>Color</th><th>Size(cm)</th><th>Origin</th></tr></thead><tbody>';

      for (const element of data) {
        tableHTML += `<tr><td>${element.Name}</td><td>${element.Color}</td><td>${element["Size(cm)"]}</td><td>${element.Origin}</td></tr>`;
      }

      tableHTML += "</tbody></table>";
      return tableHTML;
    }

    const tableContent = generateTable(data);
    document.getElementById("result").innerHTML = tableContent;
  } catch (error) {
    // Handling any errors that occurred during the fetch operation
    console.error("There has been an error with the fetch operation:", error);
  }
}
