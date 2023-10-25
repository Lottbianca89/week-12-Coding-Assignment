

  //Basic Function to GET data from the eventEndpoint
async function getData(apiEndpoint) {
  console.log("Getting Data Asynchronously...");

  await $.ajax({
    url: apiEndpoint, // This is the URL of the API
    type: "GET", // This is the HTTP method
    dataType: "json", // This is the data type of the response
    contentType: "application/json", // This is the content type of the request

    //If the GET request is successful, log the data
    success: function (data) {
      console.log("\nEvents Data:", data);
      postsApiData = data;
    },

    //If the GET request fails, log the error
    error: function (error) {
      console.log("Error getting Events from the api!", error);
    },
  });
}
  
  const apiEndpoint =  'http://localhost:3000/Calenderlist';
  let calenderEvents = [];

  

  class Calender {
    constructor(events, date) {
      this.events = events;
      this.date = [];
    }
  }


  class Events {
    constructor(date, time) {
      this.date = date;
      this.time =time;
      
    }
  }

  class Event {
    static url ='https://ancient-taige-31359.herokuapp.com/api/calender';

  static getAllEvents() {
    return $.get(this.url);
  }

  static getEvents(id) {
    return $.get(this.url + `/${id}`);
  }

  static createEvent(event) {
    return $.post(this.url, event);
  }
  static updateCalendar(event) {
    return $.ajax({
      url: `${this.url}/${event._id}`, // Make sure to use backticks for template literals
      dataType: 'json',
      data: JSON.stringify(event),
      contentType: 'application/json',
      type: 'PUT',
    });
  }

static deleteHouse(id) {
  return $.ajax({
  url: this.url + `/${id}`,
  type: 'DELETE'
  });
}

}

class DOMManager {
  static calendar;

  static getAllEvents() {
    Event.getAllEvents().then(events => this.render(houses));
    
  }

  static render(events) {
  this.events = events;
   s('#app').empty();
    for (let event of events) {
      $('#app').prepend(`
        <div id="${event._id}" class="card">
          <div class="card-header">
            <h2>${event.name}</h2>
            <button class="btn btn-danger" onclick="DOMManager.deleteEvent('${event._id}')">Delete</button>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm">
                <input type="text" id="${event._id}-event-name" class="form-control" placeholder="Event Name">
              </div>
              <div class="col-sm">
                <input type="text" id="${event._id}-event-time" class="form-control" placeholder="Event Time">
              </div>
            </div>
            <button id="${event._id}-new-event" onclick="DOMManager.addEvent('${event._id}')" class="btn btn-primary form-control">Add</button>
          </div>
        </div><br>
      `);
      for (let event of calendar.events) {
        $(`#${event._id}`).find('.card-body').append(`
          <p>
            <span id="name-${event._id}"><strong>Name: </strong> ${event.name}</span>
            <span id="time-${event._id}"><strong>Time: </strong> ${event.time}</span>
            <button class="btn btn-danger" onclick="DOMManager.deleteEvent('${event._id}')">Delete Event</button>
          </p>
        `);
      }
    }
  }
}

DOMManager.getAllEvents();