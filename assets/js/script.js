var timeDisplayEl = $("#time-display");
var scheduleDisplayEl = document.getElementById("schedule-display");
var eventInputEl = document.getElementById("event-input");
var hours = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var millitaryTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var currentHour = moment().hour();
var userText = $("textarea");

// handle displaying the time
function displayTime() {
  var currentDay = moment().format("dddd, MMMM Do");
  timeDisplayEl.text(currentDay);
}
displayTime();

function createPlannerDisplay() {
  //     var rowEl = document.createElement("<row>")
  //     var eventHourEl = document.createElement("<col-1>").addClass("hour").text(hour);
  //     var eventDetailEL = document.createElement("<col-10>").addClass("event").text(event);
  //     var eventSubmitEl = document.createElement("<col-1>").addClass("event button").text(submit);

  // rowEl.append(
  //     eventHourEl,
  //     eventDetailEL,
  //     eventSubmitEl
  // );

  // scheduleDisplayEl.append(rowEl);
  var timeBlock = "";

  for (var i = 0; i < hours.length; i++) {
    var statusTime = "";
    if (currentHour === millitaryTime[i]) {
      statusTime = "present";
    } else if (currentHour > millitaryTime[i]) {
      statusTime = "past";
    } else {
      statusTime = "future";
    }
    timeBlock =
      timeBlock +
      `<div class="row">
    <div class="col-1 hour text-right">${hours[i]}</div>
    <div class="col-10 event"><textarea class="form-control ${statusTime}" name="" id="" cols="30" rows="3"></textarea></div>
    <div class="col-1 submit text-left"><button class="saveBtn">Save</button></div>
    </div>`;
  }
  scheduleDisplayEl.innerHTML = timeBlock;
  var saveBtn = document.querySelectorAll(".saveBtn");
  for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", save);
  }
}
function save() {
    JSON.parse.localStorage.setItem(hours[i], userText);
}

createPlannerDisplay();

// Timeblocks are color coded: events in the past are gray, current hour is red, new event is green

// When a user clicks into the timeblock they can enter an event
// eventInputEl.on('click', function () {

// });

// When a user clicks the save button, the event is stored into local storage

// When page is refreshed saved event persists

// on cliick local
