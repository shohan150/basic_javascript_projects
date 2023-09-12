let userInput = document.getElementById('date');
// This line of code retrieves a reference to an HTML input element with the id "date" and stores it in the variable userInput.This allows you to access and manipulate the properties and attributes of this input element.
userInput.max = new Date().toISOString().split('T')[0];
// This line sets the max attribute of the userInput element.The max attribute defines the maximum date value that can be selected or entered in the input field.

// new Date(): This creates a new Date object representing / passing value of the current date and time.

// .toISOString(): The toISOString method converts the Date object into an ISO 8601 formatted string.This string includes both the date and time in the format "YYYY-MM-DDTHH:mm:ss.sssZ," where "T" separates the date and time, and "Z" represents the UTC time zone.

// .split('T')[0]: The split method is used to split the ISO string at the "T" character, resulting in an array. [0] then extracts the first element of that array, which is the date portion of the string in the format "YYYY-MM-DD."

// So, the userInput.max is set to today's date in the format "YYYY-MM-DD," which means that the user won't be able to select a date beyond today in the date input field.This is a common use case when you want to restrict date selection to past or current dates, such as in date pickers for booking forms or events.

const result = document.getElementById('result');

function calculateAge() {
    let birthDate = new Date(userInput.value); //user j input dilo seta pathabe
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth();
    let y1 = birthDate.getFullYear();


    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();


    let d3, m3, y3;
    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    console.log(y1, m1, d1);
    console.log(y2, m2, d2);
    console.log(y3, m3, d3);

    result.innerHTML = `You are ${y3} years, ${m3} months, ${d3} days old.`;

}

const temp = document.querySelector('.submit');
temp.addEventListener('click', function abc() {
    calculateAge();
})


function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();

    // This line creates a Date object representing the last day of the specified month. The year and month parameters are used to set the year and month, and the day is set to 0. Setting the day to 0 effectively means the last day of the previous month, which gives us the last day of the specified month.
    // .getDate(): This method is called on the Date object to retrieve the day of the month, which corresponds to the number of days in the specified month.

    // const year = 2023; // The year for which you want to get the number of days
    // const month = 2;   // The month (0-based, where 0 is January, 1 is February, etc.)
    // const daysInMonth = getDaysInMonth(year, month);
    // console.log(`There are ${daysInMonth} days in month ${month + 1} of ${year}.`);

    // In this example, we're calling getDaysInMonth with the year 2023 and the month 2 (which corresponds to March, since months are 0-based). The function will return the number of days in March 2023, and we're logging that information to the console.

}
