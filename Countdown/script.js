//the code works fine even if the .getTime() object is not used. 
var countdownDate = new Date('feb 24, 2024 00:00:00');

// In your code, `new Date('sep 24, 2024 00:00:00')` creates a JavaScript `Date` object representing the date and time you've specified. 

//The `.getTime()` method is then called on this object to obtain the Unix timestamp (the number of milliseconds since January 1, 1970) for that date and time. This timestamp can be used for various time calculations, such as creating countdown timers or comparing dates.

// The `.getTime()` method is a built-in method in JavaScript's `Date` object. It is used to retrieve the timestamp of a `Date` object. The timestamp is represented as the number of milliseconds that have elapsed since midnight on January 1, 1970 (Coordinated Universal Time, UTC).

// Here's how you use the `.getTime()` method:
// const date = new Date(); // Create a Date object representing the current date and time
// const timestamp = date.getTime(); // Get the timestamp in milliseconds

// In the example above, we first create a `Date` object that represents the current date and time. Then, we call the `.getTime()` method on that object to get the timestamp, which is stored in the `timestamp` variable.

// The timestamp is a numeric value, which makes it easy to perform various date and time calculations. You can use it to calculate time differences, set future or past dates, create countdown timers, and more.

// For example, if you want to find the time difference between two dates, you can obtain the timestamps for both dates and then subtract them. This will give you the time difference in milliseconds.

// const date1 = new Date('2023-05-01');
// const date2 = new Date('2023-06-01');
// const timeDifference = date2.getTime() - date1.getTime();
// // timeDifference will be the time difference in milliseconds

// Keep in mind that the timestamp is always based on UTC time, so if you're working with local time zones, you may need to account for the offset.

// You can certainly perform calculations on `Date` objects without explicitly using the `.getTime()` method. In JavaScript, `Date` objects are designed to support various operations related to date and time. You can perform arithmetic with `Date` objects, and the methods and operators are designed to work with date and time units.

// Here are some common operations you can perform on `Date` objects without manually using `.getTime()`:

// 1. **Date Arithmetic:**
//    You can perform basic arithmetic with `Date` objects using standard operators.

//    ```javascript
//    const date1 = new Date('2023-05-01');
//    const date2 = new Date('2023-06-01');
//    const timeDifference = date2 - date1;
//    // timeDifference is the time difference in milliseconds
//    ```

// 2. **Adding/Subtracting Time Intervals:**
//    You can add or subtract time intervals directly.

//    ```javascript
//    const now = new Date();
//    const tomorrow = new Date(now);
//    tomorrow.setDate(now.getDate() + 1); // Adding one day
//    ```

// 3. **Comparison:**
//    You can compare `Date` objects using comparison operators.

//    ```javascript
//    const date1 = new Date('2023-05-01');
//    const date2 = new Date('2023-06-01');
//    if (date1 < date2) {
//      console.log('date1 is before date2');
//    }
//    ```

// 4. **Formatting:**
//    You can format dates using `Date` object methods like `.toLocaleString()`, `.toDateString()`, and more.

//    ```javascript
//    const date = new Date();
//    console.log(date.toLocaleString());
//    ```

// While `.getTime()` is useful for getting timestamps explicitly, you can often work with `Date` objects directly to perform date and time calculations, comparisons, and formatting as needed.


var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;


}, 1000)
