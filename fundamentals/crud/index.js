//import module
const fs = require("fs").promises;

//data json object
const employees = [
  {
    id: 1,
    name: "Merve",
    salary: 60000,
  },
  {
    id: 2,
    name: "Ekin",
    salary: 65000,
  },
];

//write file function
const createData = async () => {
  try {
    await fs.writeFile("employees.json", JSON.stringify(employees, null, 2));
  } catch (error) {
    console.log(`There was an error creating the file ${error}`);
  }
};

//read file function
const getData = async () => {
  try {
    const data = await fs.readFile("employees.json", "utf-8");
    let jsonData = JSON.parse(data);
    jsonData.map((employee) => console.log(employee.name));
  } catch (error) {
    console.log(`There was an error reading the file ${error}`);
  }
};
//update file function
const updateData = async () => {
  try {
    const data = await fs.readFile("employees.json", "utf-8");
    let jsonData = JSON.parse(data);

    jsonData = jsonData.map((employee) => {
      if (employee.id === 1) {
        employee.name = "Açelya";
      }
      return employee;
    });

    fs.writeFile("employees.json", JSON.stringify(jsonData, null, 2), "utf-8");
    console.log("Data has updated successfully");
  } catch (error) {
    console.log(`There was an error updating the file ${error}`);
  }
};

//delete file function
const deleteData = async () => {
  try {
    await fs.unlink("employees.json");
    console.log("The file has deleted successfully");
  } catch (error) {
    console.log(`There was an error deleting the file ${error}`);
  }
};

// testing functions
createData();
getData();
updateData();
deleteData();
