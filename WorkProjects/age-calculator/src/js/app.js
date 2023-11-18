let errorMessage = {
  empty: "This field is required",
  invalidInput: {
    day: "Must be a valid day",
    month: "Must be a valid month",
    year: "Must be a valid year",
  },
}

let birthdayInfo = {
  day,
  month,
  year,
}


const inputField = document.querySelectorAll(".input-field");
const inputEl = document.querySelectorAll("input[type=number]");
const errorEl = document.querySelectorAll(".error");
const confirmBtn = document.getElementById("active-btn");
const showResult = document.querySelectorAll("#response p span");

let currentDate = new Date();
let dateObject = {
  currentDay: currentDate.getDate(),
  currentMonth: currentDate.getMonth() + 1,
  currentYear: currentDate.getFullYear  (),
}


confirmBtn.addEventListener("click", () => {
  inputEl.forEach((input, index) => {
    if (!input.value.trim()) {
      !inputField[index].classList.contains("fail") && inputField[index].classList.add("fail");
      errorEl[index].textContent = errorMessage.empty;
    }
  });


  if (parseFloat(inputEl[0].value) < 1 || parseFloat(inputEl[0].value) > 31) {
    addFail(inputField[0], errorEl[0], errorMessage.invalidInput.day);
    birthdayInfo.day = "X";
  } else if (!inputEl[0].value.trim()) {
    addFail(inputField[0], errorEl[0], errorMessage.empty);
    birthdayInfo.day = "X";
  } else {
    removeFail(inputField[0], errorEl[0], "");
    birthdayInfo.day = parseFloat(inputEl[0].value);
  }

  if (parseFloat(inputEl[1].value) < 1 || parseFloat(inputEl[1].value) > 12) {
    addFail(inputField[1], errorEl[1], errorMessage.invalidInput.month);
    birthdayInfo.month = "X";
  } else if (!inputEl[1].value.trim()) {
    addFail(inputField[1], errorEl[1], errorMessage.empty);
    birthdayInfo.month = "X";
  } else {
    removeFail(inputField[1], errorEl[1], "");
    birthdayInfo.month = parseFloat(inputEl[1].value);
  }

  if (parseFloat(inputEl[2].value) < 1 || parseFloat(inputEl[2].value) > dateObject.currentYear) {
    addFail(inputField[2], errorEl[2], errorMessage.invalidInput.year);
    birthdayInfo.year = "X";
  } else if (!inputEl[2].value.trim()) {
    addFail(inputField[2], errorEl[2], errorMessage.empty);
    birthdayInfo.year = "X";
  } else {
    removeFail(inputField[2], errorEl[2], "");
    birthdayInfo.year = parseFloat(inputEl[2].value);
  }
  console.log(birthdayInfo);


  let birthDate = new Date(birthdayInfo.year, birthdayInfo.month + 1, birthdayInfo.day); // Month is 0-indexed, so subtract 1
  // Calculate age
  let ageInMilliseconds = currentDate - birthDate;
  let ageInSeconds = ageInMilliseconds / 1000;
  let ageInMinutes = ageInSeconds / 60;
  let ageInHours = ageInMinutes / 60;
  let ageInDays = ageInHours / 24;
  let remainingDays = ageInDays % 365;

  let resultBirthday = {
    days: Math.abs(Math.floor(remainingDays % 30)),
    months: Math.abs(dateObject.currentMonth - birthdayInfo.month),
    years: Math.abs(Math.floor(dateObject.currentYear - birthdayInfo.year)),
  }
  console.log(dateObject)
  console.log(resultBirthday)


  showResult.forEach((result, index) => {
    if (!isNaN(resultBirthday[Object.keys(resultBirthday)[index]])) {
      result.textContent = resultBirthday[Object.keys(resultBirthday)[index]];
    } else {
      result.textContent = "- -";
    }
  });
})



function addFail(inputEl, errorEl, errorText) {
  !inputEl.classList.contains("fail") && inputEl.classList.add("fail");
  errorEl.textContent = errorText;
}
function removeFail(inputEl, errorEl, errorText) {
  inputEl.classList.contains("fail") && inputEl.classList.remove("fail");
  errorEl.textContent = errorText;
}


