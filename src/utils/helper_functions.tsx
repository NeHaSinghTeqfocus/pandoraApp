export const handleFileUpload = (event) => {
  const file = event.target.files[0];

  if (!file) {
    console.error("No file selected.");
    return;
  }

  // Check if the selected file has a .csv extension
  if (!file.name.endsWith(".csv")) {
    console.error("Selected file is not a CSV.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    const fileContents = e.target.result;

    // Parse the CSV data
    // console.log(fileContents);
    var parsedData = parseCSV(fileContents);
    const titles = Object.keys(parsedData[0]);

    // Do further processing with the parsed data
    // console.log(filterNumericColumns(parsedData));
    parsedData.pop();
    localStorage.setItem("sisa", JSON.stringify(parsedData));
  };

  reader.onerror = function (e) {
    console.error("Error reading the file:", e.target.error);
  };

  reader.readAsText(file);
};

export const parseCSV = (csvData) => {
  // Split the CSV data into rows
  const rows = csvData.split("\n");

  // Extract the header row
  const header = rows[0].split(",").map((ele) => JSON.parse(ele));

  // Initialize an array to store the parsed data
  const parsedData = [];

  // Iterate through the rows and parse the data
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(",");
    const rowData = {};

    // Create an object with column names as keys
    for (let j = 0; j < header.length; j++) {
      rowData[header[j]] = row[j];
    }

    parsedData.push(rowData);
  }

  return parsedData;
};
