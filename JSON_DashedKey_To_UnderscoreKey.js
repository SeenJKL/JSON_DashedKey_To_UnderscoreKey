const jsonDataWithDashes =
  '{"key-with-dash": "value", "another-key": "another-value"}';

// Parse the JSON data into a JavaScript object
const parsedData = JSON.parse(jsonDataWithDashes);

// Function to replace dashes with underscores in object keys recursively
function replaceKeysWithUnderscores(obj) {
  const newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = key.replace(/-/g, "_");
      newObj[newKey] =
        typeof obj[key] === "object" && obj[key] !== null
          ? replaceKeysWithUnderscores(obj[key])
          : obj[key];
    }
  }
  return newObj;
}

// Process the parsed data to create a new object with modified keys
const parsedDataWithUnderscores = replaceKeysWithUnderscores(parsedData);

// Convert the modified object back to a JSON string
const jsonDataWithUnderscores = JSON.stringify(parsedDataWithUnderscores);
console.log(jsonDataWithUnderscores);
