import service from '../../Service';
import { getField, setField } from '../../store/index';
import notification from '../../Notification';

export default class Calendar {
  static adminMode = null;

  checkMode() {
    if (Calendar.adminMode === false) {
      this.modeStyle = 'display:none';
    }
    return this.modeStyle;
  }

  createFilterSelect() {
    this.checkMode();
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
        <button id="new-event" style=${this.modeStyle}>New event +</button>
            `;
  }

  getWeekdaysMarkup() {
    const weekdays = getField('weekdays');
    this.result = '<div class="time-header">Time</div>';
    weekdays.forEach((weekday) => {
      this.result += `<div class= "day">${weekday}</div> `;
    });

    return this.result;
  }

  getTimeslotsMarkup() {
    const timeslots = getField('timeslots');
    this.result = '';
    timeslots.forEach((timeslot) => {
      this.result += `<div class= "time">${timeslot}</div>`;
    });
    return this.result;
  }

  async getCalendarBodyMarkup() {
    this.checkMode();
    const events = await this.filterEvent();
    this.result = '';
    for (let i = 0; i < 9; i += 1) {
      for (let j = 0; j < 5; j += 1) {
        const event = events.find((ev) => ev.data.weekday === j && ev.data.timeslot === i);
        if (event) {
          this.result += `<div class="active-event" value="${event.data.title}"> ${event.data.title}
                    <button class="delete-button" id='${event.id}' style=${this.modeStyle}>X</button></div>`;
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
    newEventButton.addEventListener('click', () => setField('componentForRenderName', 'createEvent'));
    for (let i = 0; i < deleteEventButtons.length; i += 1) {
      deleteEventButtons[i].addEventListener('click', this.deleteEvent);
    }
    filterPeopleSelect.addEventListener('change', (event) => {
      setField('filterSelectedId', +event.target.value);
    });
  }

  async deleteEvent(browserEvent) {
    try {
      this.events = await service.getEventsData('events');
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
      сonfirmDelete.addEventListener('click', async () => {
        await service.deleteEvent(`events/${browserEvent.target.attributes.id.value}`);
        deleteEventMessage.style.display = 'none';
        setField('componentForRenderName', 'calendar');
      });
      notification.successfulResponseNotification();
    } catch (err) {
      notification.errorResponseNotification(err);
    }
  }

  async filterEvent() {
    const events = await service.getEventsData('events');
    const filterSelectedId = getField('filterSelectedId');
    if (filterSelectedId === 0) {
      return events;
    }
    this.filteredEvents = (
      events.filter((ev) => ev.data.participantsId.some((id) => id === filterSelectedId)));
    return this.filteredEvents;
  }

  async render() {
    return `
    <p class="server-notification">A connection was successfully established with the server</p>
    <div class= "calendar-component" >
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
                   ${await this.getCalendarBodyMarkup()}
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
