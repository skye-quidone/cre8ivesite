let resources_list = [
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
]

let events_list = [
  {
    googleCalendarId:
      "32a86d4755571b696dd7ddd6156d76c987af26d00fc2fb406133f8895c1f1c08@group.calendar.google.com",
		color: 'red',
    eventDataTransform: function (event) {
      event.resourceId = "1-1"
      return event
    },
  },
  {
    googleCalendarId:
      "a63052a71bebc1aef8ae78aeeedcfc310ecc63aac34fdf22295575a7918b5a90@group.calendar.google.com",
    eventDataTransform: function (event) {
      event.resourceId = "1-2"
      return event
    },
  },
  {
    googleCalendarId:
      "876106358800b8bdfde0ae772a19c639c171466f48af17cf1cb10760ecccbbfd@group.calendar.google.com",
			color: 'pink',
    eventDataTransform: function (event) {
      event.resourceId = "2-1"
      return event
    },
  },
  {
    googleCalendarId:
      "39370b4d5ccdfe1a6cbe1e31c6b0fcaaf56f67f157400289ee655807e142062b@group.calendar.google.com",
			color: 'green',
    eventDataTransform: function (event) {
      event.resourceId = "2-2"
      return event
    },
  },
  {
    googleCalendarId:
      "d6427b6b16a15106098e2b7650089b5708db4bed5f48b21c489dbbe215d126ac@group.calendar.google.com",
    eventDataTransform: function (event) {
      event.resourceId = "2-3"
      return event
    },
  },
  {
    googleCalendarId:
      "1d67cf482e3e9ebdf75c4d71286ce0c1c80701c91d61480fb296552bcdeba4ab@group.calendar.google.com",
    eventDataTransform: function (event) {
      event.resourceId = "2-4"
      return event
    },
  },
  {
    googleCalendarId:
      "29c84ad49d167ef38472bfd7be3408d4cc11139908fa03905354b3a5892b88a8@group.calendar.google.com",
    eventDataTransform: function (event) {
      event.resourceId = "2-5"
      return event
    },
  },
  {
    googleCalendarId:
      "d27a16295dae7e3daa3cbc71b06ce5fe79788dea071d62eb58236f5ece7e6cb2@group.calendar.google.com",
    eventDataTransform: function (event) {
      event.resourceId = "3-1"
      return event
    },
  },
  {
    googleCalendarId:
      "0c47a4fb27e4472022d5b501584d5f45e82d0af667531ea62bbfc404256b325e@group.calendar.google.com",
    eventDataTransform: function (event) {
      event.resourceId = "3-2"
      return event
    },
  },
  {
    googleCalendarId:
      "960179b79d8ddaab868f301a1225c028022a43a4f05b4334134716cf6062c876@group.calendar.google.com",
    eventDataTransform: function (event) {
      event.resourceId = "3-3"
      return event
    },
  },
  {
    googleCalendarId:
      "77ddc347e6b01c85cf365b7ab4689baa6e1db6dba4520e1c32ee4c742b038b06@group.calendar.google.com",
    eventDataTransform: function (event) {
      event.resourceId = "3-4"
      return event
    },
  },
  {
    googleCalendarId:
      "9a13e1c81dbff766b1a852bb7a84dd816046f2c46b99642fa6d654a25510cda3@group.calendar.google.com",
    eventDataTransform: function (event) {
      event.resourceId = "4"
      return event
    },
  },
]

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

    // height: '50%',

    resources: resources_list,

    googleCalendarApiKey: "AIzaSyAVhe0xGByoaqET-3AP5duh1NuQdlJzaWY",
    eventSources: events_list,

    eventClick: function (event) {
      event.jsEvent.preventDefault()
      var new_title = prompt("Event Title:", event.title, {
        buttons: { Ok: true, Cancel: false },
      })
      event.event.setProp("title", new_title)
    },
  })

  calendar.render()
})
