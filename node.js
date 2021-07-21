// variables for malenames, femalenames and weekdays
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// a function that takes in variables used in the calculation of birthday
function validatorFunction() {
    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value);
    const date = parseInt(document.getElementById("date").value);
    const male = document.getElementById("male");
    const female = document.getElementById("female");


    if (year <=1800 || year >= 2022) {
        alert("Enter valid year");
    } else if (month <1 || month >12) {
        alert("Please enter a valid Month");
    } else if (date < 1 || date >31) {
        alert("Incorect date. please enter a correct one");
    } else if (year !== year) {
        alert("Please fill the form");
    }

//method calculating the day of the week.
    const a = Math.floor((14 - month) / 12)
    const y = year - a
    const m = month + 12 * a - 2
    const d = (date + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;

//conditional statement that prints out the name and the day of the week.
    if (male.checked == true) {
        ("You were born on " + weekDays[d] + " your Akan name is: " + maleNames[d]);
        document.getElementById('name').innerHTML = "You were born on " + weekDays[d] + " and your Akan name is: " + maleNames[d];
    } else if (female.checked == true) {
        ("You were born on " + weekDays[d] + " your Akan name is: " + femaleNames[d]);
        document.getElementById('name').innerHTML = "You were born on " + weekDays[d] + " and your Akan name is: " + femaleNames[d];
    }
}
   