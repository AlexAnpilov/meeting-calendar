import { getField, setField } from '../../store/index';

export default class Calendar {
  static adminMode = null;

  createLoginWindow() {
    const people = getField('people');
    this.options = '';
    people.forEach((human) => {
      this.options += `<option value='${human.id}'>${human.name}</option>`;
    });
    if (Calendar.adminMode !== null) {
      this.style = 'display:none;';
    }
    if (Calendar.adminMode === false) {
      const deleteEventButtons = document.querySelectorAll('.delete-button');
      deleteEventButtons.style.display = 'none';
    }

    return `
    <div id="login-window" style=${this.style}>
    <h1>Please authorise</h1>
    <select id="login-select">${this.options}</select>
    <div><button id="login-button">Confirm</button></div>
    </div>
    `;
  }

  createFilterSelect() {
    const people = getField('people');
    const filterSelectedId = getField('filterSelectedId');
    this.options = '';
    people.forEach((human) => {
      this.options += `<option ${filterSelectedId === human.id ? 'selected' : ''} value='${human.id}'>${human.name}</option>`;
    });

    return `
        <select id="participants-filter">
            <option value='0' ${filterSelectedId === 0 ? 'selected' : ''}>All members</option>
            ${this.options}
        </select>
        <button id="new-event">New event +</button>
            `;
  }

  getWeekdaysMarkup() {
    const weekdays = getField('weekdays');
    this.result = '<div class="time-header">Time</div>';
    weekdays.forEach((weekday) => {
      this.result += `<div class= "day"> ${weekday}</div> `;
    });

    return this.result;
  }

  getTimeslotsMarkup() {
    const timeslots = getField('timeslots');
    this.result = '';
    timeslots.forEach((timeslot) => {
      this.result += `<div class= "time"> ${timeslot}</div>`;
    });
    return this.result;
  }

  getCalendarBodyMarkup() {
    const events = this.filterEvent();
    this.result = '';
    for (let i = 0; i < 9; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        const event = events.find((ev) => ev.weekday === j && ev.timeslot === i);
        if (event) {
          this.result += `<div class="active-event" value="${event.title}"> ${event.title}
                    <button class="delete-button" id='${event.id}'>X</button></div>`;
        } else {
          this.result += '<div></div>';
        }
      }
    }
    return this.result;
  }

  setupPageListeners() {
    const newEventButton = document.getElementById('new-event');
    const filterPeopleSelect = document.getElementById('participants-filter');
    const deleteEventButtons = document.querySelectorAll('.delete-button');
    const loginButton = document.getElementById('login-button');
    newEventButton.addEventListener('click', () => setField('componentForRenderName', 'createEvent'));
    for (let i = 0; i < deleteEventButtons.length; i += 1) {
      deleteEventButtons[i].addEventListener('click', this.deleteEvent);
    }
    filterPeopleSelect.addEventListener('change', (event) => {
      setField('filterSelectedId', +event.target.value);
    });
    loginButton.addEventListener('click', this.loginEvent);
  }

  loginEvent() {
    this.people = getField('people');
    const loginWindow = document.getElementById('login-window');
    const selectedLoginHumanId = document.getElementById('login-select').value;
    const newEventButton = document.getElementById('new-event');
    if (!this.people.find((human) => human.id === +selectedLoginHumanId && human.admin)) {
      newEventButton.style.display = 'none';
      Calendar.adminMode = false;
    } else {
      Calendar.adminMode = true;
    }
    loginWindow.style.display = 'none';
  }

  deleteEvent(browserEvent) {
    this.events = getField('events');
    const deleteEventMessage = document.getElementById('delete-message');
    const deleteEventTitleMessage = document.getElementById('delete-title');
    const eventTitle = browserEvent.target.parentNode.attributes.value.value;
    deleteEventTitleMessage.innerHTML = eventTitle;
    deleteEventMessage.style.display = 'block';
    const cancelDelete = document.getElementById('cancel-delete');
    const сonfirmDelete = document.getElementById('confirm-delete');
    cancelDelete.addEventListener('click', () => {
      deleteEventMessage.style.display = 'none';
    });
    сonfirmDelete.addEventListener('click', () => {
      const newEvents = this.events.filter(
        (event) => event.id !== +browserEvent.target.attributes.id.value,
      );
      setField('events', newEvents);
    });
  }

  filterEvent() {
    const events = getField('events');
    const filterSelectedId = getField('filterSelectedId');
    if (filterSelectedId === 0) {
      return events;
    }
    this.filteredEvents = (
      events.filter((ev) => ev.participantsId.some((id) => id === filterSelectedId)));
    return this.filteredEvents;
  }

  render() {
    return `
<div class= "calendar-component">
    ${this.createLoginWindow()}
    <div class="header">
        <h1>Calendar</h1>
        <div class="filter">
                ${this.createFilterSelect()}
        </div>
    </div>
    <div class="calendar">
        <div class="weekdays">
                ${this.getWeekdaysMarkup()}
        </div>
        <div class="time-column">
                ${this.getTimeslotsMarkup()}
        </div>
        <div id='events-body'>
                ${this.getCalendarBodyMarkup()}
        </div>
    </div>
        <div id="delete-message">
             <p>Are you sure want to delete "<span id="delete-title"></span>" event?</p>
            <div>
                <button id="cancel-delete">No</button>
                <button id="confirm-delete">Yes</button>
            </div>
        </div>
</div>
            `;
  }
}
