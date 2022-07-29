var timeDisplayEl = $("#time-display");
var scheduleDisplayEl = document.getElementById("schedule-display");
var eventInputEl = document.getElementById("event-input");
var hours = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var millitaryTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var currentHour = moment().hour();
var userText = $("textarea");
userText = [""];
// handle displaying the time
function displayTime() {
  var currentDay = moment().format("dddd, MMMM Do");
  timeDisplayEl.text(currentDay);
}
displayTime();

function createPlannerDisplay() {
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
    <div class="col-10 event"><textarea class="form-control ${statusTime}" name="" id="${i}" cols="30" rows="3"></textarea></div>
    <div class="col-1 submit text-left"><button class="saveBtn" data-id="${i}">Save</button></div>
    </div>`;
  }
  scheduleDisplayEl.innerHTML = timeBlock;
  var saveBtn = document.querySelectorAll(".saveBtn");
  for (var i = 0; i < saveBtn.length; i++) {
    var textBox = document.getElementById(i);
    if (localStorage.getItem(i)) {
      textBox.value = localStorage.getItem(i);
    }
    saveBtn[i].addEventListener("click", save);
  }
}
function save() {
  var id = this.getAttribute("data-id")
  var textBox = document.getElementById(id)

  localStorage.setItem(id, textBox.value)
}
createPlannerDisplay();