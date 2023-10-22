

$(document).ready(function() {
  // Initialize an empty array to store events
  let events = [];

  // Function to render events on the calendar
  function renderEvents() {
    const calendar = $('#calendar');
    calendar.empty();

    events.forEach(function(event) {
      const eventCard = $('<div class="card mt-3">');
      const cardBody = $('<div class="card-body">');
      const eventName = $(`<h5 class="card-title">${event.name}</h5>`);
      const eventDate = $(`<p class="card-text">${event.date}</p>`);
      const deleteButton = $('<button class="btn btn-danger">Delete</button>');

      deleteButton.on('click', function() {
        // Remove the event from the array and re-render
        events = events.filter(e => e !== event);
        renderEvents();
      });

      cardBody.append(eventName, eventDate, deleteButton);
      eventCard.append(cardBody);
      calendar.append(eventCard);
    });
  }

  // Handle event creation
  $('#create-new-event').on('click', function() {
    const eventName = $('#event-name').val();
    const eventDate = $('#event-date').val();

    if (eventName && eventDate) {
      // Create an event object and add it to the array
      const event = { name: eventName, date: eventDate };
      events.push(event);

      // Clear input fields and re-render the events
      $('#event-name').val('');
      $('#event-date').val('');
      renderEvents();
    }
  });
});
