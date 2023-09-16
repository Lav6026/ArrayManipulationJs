const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper()
 {  for (const person of data) {
  if (person.profession === "developer") {
    console.log(person.name);
  }
}
}

// 2. Add Data
function addData() {
  const name = prompt("Enter name:");
  const age = parseInt(prompt("Enter age:"));
  const profession = prompt("Enter profession:");
  const newData = { name, age, profession };
  data.push(newData);
}

// 3. Remove Admins
function removeAdmin() {
  const filteredData = data.filter((person) => person.profession !== "admin");
  data.length = 0;
  data.push(...filteredData);
}

// 4. Concatenate Array
function concatenateArray() {
  const arr1 = [{ name: "Mahesh", age: 26, profession: "developer" },
  { name: "Krishna", age: 29, profession: "admin" }];
  const arr2 = [{ name: "Om", age: 24, profession: "developer" },
  { name: "Vishnu", age: 27, profession: "manager" },];
  const concatenatedArray = arr1.concat(arr2);
  console.log("Concatenated Array:", concatenatedArray);
}

// 5. Average Age
function averageAge() {
  let totalAge = 0;
  for (const person of data) {
    totalAge += person.age;
  }
  const avgAge = totalAge / data.length;
  console.log("Average Age:", avgAge);
}

// 6. Age Check
function checkAgeAbove25() {
  for (const person of data) {
    if (person.age > 25) {
      console.log("There is at least one person above 25.");
      return;
    }
  }
  console.log("No one is above 25.");
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [];
  for (const person of data) {
    if (!professions.includes(person.profession)) {
      professions.push(person.profession);
    }
  }
  console.log("Unique Professions:", professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
}

// 9. Update Profession
function updateJohnsProfession() {
  for (const person of data) {
    if (person.name === "john") {
      person.profession = "manager";
      break; // Assuming there is only one "john"
    }
  }
}

// 10. Profession Count
function getTotalProfessions() {
  let developerCount = 0;
  let adminCount = 0;
  for (const person of data) {
    if (person.profession === "developer") {
      developerCount++;
    } else if (person.profession === "admin") {
      adminCount++;
    }
  }
  console.log("Developer Count:", developerCount);
  console.log("Admin Count:", adminCount);
}
