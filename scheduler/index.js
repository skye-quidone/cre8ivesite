document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar")

  var calendar = new FullCalendar.Calendar(calendarEl, {
    schedulerLicenseKey: "CC-Attribution-NonCommercial-NoDerivatives",
    expandRows: true,
		allDaySlot: false,
		displayEventTime: false,
    initialView: "resourceTimeGridDay",

    slotMinTime: "08:00:00",
    slotMaxTime: "22:00:00",

    resources: [
      { id: "1-1", title: "Space 1-1" },
      { id: "1-2", title: "Space 1-2" },
      { id: "2-1", title: "Space 2-1" },
      { id: "2-2", title: "Space 2-2" },
      { id: "2-3", title: "Space 2-3" },
      { id: "2-4", title: "Space 2-4" },
      { id: "2-5", title: "Space 2-5" },
      { id: "3-1", title: "Space 3-1" },
      { id: "3-2", title: "Space 3-2" },
      { id: "3-3", title: "Space 3-3" },
      { id: "3-4", title: "Space 3-4" },
      { id: "4", title: "Space 4" },
    ],

    googleCalendarApiKey: "AIzaSyAVhe0xGByoaqET-3AP5duh1NuQdlJzaWY",
    eventSources: [
      {
        googleCalendarId:
          "32a86d4755571b696dd7ddd6156d76c987af26d00fc2fb406133f8895c1f1c08@group.calendar.google.com",
        eventDataTransform: function (event) {
          event.resourceId = "1-1"
          return event
        },
      },
      {
        googleCalendarId: "a63052a71bebc1aef8ae78aeeedcfc310ecc63aac34fdf22295575a7918b5a90@group.calendar.google.com",
        eventDataTransform: function (event) {
          event.resourceId = "1-2"
          return event
        },
      },
    ],
  })

  calendar.render()
})
