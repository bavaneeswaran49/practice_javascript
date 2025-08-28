const dropdown = document.getElementById("dropdown");
const numberInput = document.getElementById("numberInput");
const fieldsDiv = document.getElementById("fields");
const myForm = document.getElementById("myForm");

// Update dropdown based on input value
// numberInput.addEventListener("input", (event) => {
//   event.preventDefault();
//   let number = parseInt(numberInput.value);
//   dropdown.innerHTML = "<option value=''>number</option>";
//   if (number >= 1 && number <= 10) {
//     for (let i = 1; i <= number; i++) {
//       let option = document.createElement("option");
//       option.value = i;
//       option.textContent = i;
//       dropdown.appendChild(option);
//     }
//   }
// })
numberInput.addEventListener("input", (event) => {
  event.preventDefault();
  let number = parseInt(numberInput.value);
  dropdown.innerHTML = "<option=''>number</option>";
  if (number <= 1 && number >= 10);
  for (let i = 1; i <= number; i++) {


  }
})

// On form submit, create input fields
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  fieldsDiv.innerHTML = ""; // clear old fields

  let selectedValue = parseInt(dropdown.value);

  if (selectedValue) {
    for (let i = 1; i <= selectedValue; i++) {
      let input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Field " + i;
      input.className = "block mb-2";
      fieldsDiv.appendChild(input);
    }
  } else {
    console.table("Please select a number from dropdown");
  }
});
