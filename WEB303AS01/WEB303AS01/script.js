/*
	WEB 303 Assignment 1 - jQuery
	Sahithi Vasireddy
*/

$(document).ready(function () {
  const $salaryInput = $("#yearly-salary");
  const $percentInput = $("#percent");

  function calculateAmount() {
    const salary = $salaryInput.val();
    const percent = $percentInput.val();
    const total = salary * (percent / 100);
    const rounded = total.toFixed(2);

    $("#amount").text("$" + rounded);
  }

  // for both the input fields add a key up eventlistener
  $salaryInput.on("keyup", calculateAmount);
  $percentInput.on("keyup", calculateAmount);
});

// keyup  - The keyup event occurs when a keyboard key is released
// change - The change event occurs when the input field loses focus after the content is changed
