import CalendarEvent from '../../CalendarEvent';
import service from '../../Service';
import { getField, setField } from '../../store/index';
import notification from '../../Notification';

export default class CreateEvent {
  createToast() {
    this.result = `
        <p class="toast">Failed to create an event. Time slot is already booked.<button class="toast-close">X</button></p>
      `;
    return this.result;
  }

  createInput() {
    this.result = `
    <label for="event-name">Name of the event:</label>
    <input id="event-name" type="text" maxlength="40" ><br>
    `;
    return this.result;
  }

  createPeopleSelect() {
    const people = getField('people');
    this.options = '';
    people.forEach((human) => {
      this.options += `<option value='${human.id}'>${human.name}</option>`;
    });
    return `
        <label for="participants">Participants:</label>
        <select id="participants" multiple>
            <option value='0'selected>All members</option>
            ${this.options}
        </select><br>`;
  }

  createWeekdaySelect() {
    const weekdays = getField('weekdays');
    this.options = '';
    for (let i = 0; i < weekdays.length; i += 1) {
      this.options += `<option value=${i}>${weekdays[i]}</option>`;
    }
    return `
        <label for="select-day">Day:</label>
        <select id ="select-day">
        ${this.options}
        </select><br>`;
  }

  createTimeSelect() {
    const timeslots = getField('timeslots');
    this.options = '';
    for (let i = 0; i < timeslots.length; i += 1) {
      this.options += `<option value=${i}>${timeslots[i]}</option>`;
    }
    return `
        <label for="select-time">Time:</label>
        <select id="select-time">
        ${this.options}
        </select><br>`;
  }

  createButtons() {
    this.result = `
        <div class="buttons">
        <button id="cancel">Cancel</button>
        <button id="create">Create</button>
        </div>`;
    return this.result;
  }

  setupPageListeners() {
    const closeToastButton = document.querySelector('.toast-close');
    const createEventButton = document.getElementById('create');
    const cancelEventButton = document.getElementById('cancel');
    closeToastButton.addEventListener('click', () => this.hideToast());
    createEventButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.settingNewEvent();
    });
    cancelEventButton.addEventListener('click', (event) => {
      event.preventDefault();
      setField('componentForRenderName', 'calendar');
    });
  }

  async settingNewEvent() {
    this.eventObj = {};
    const eventTitle = document.getElementById('event-name').value;
    const eventParticipants = document.getElementById('participants').children;
    const eventParticipantId = [];
    for (let i = 0; i < eventParticipants.length; i += 1) {
      if (eventParticipants[i].selected) {
        eventParticipantId.push(+eventParticipants[i].attributes.value.value);
      }
    }

    const eventDays = document.getElementById('select-day').children;
    let eventWeekdayValue = '';
    for (let i = 0; i < eventDays.length; i += 1) {
      if (eventDays[i].selected) {
        eventWeekdayValue = +eventDays[i].attributes.value.value;
      }
    }
    const eventTimes = document.getElementById('select-time').children;
    let eventTimeValue = '';
    for (let i = 0; i < eventTimes.length; i += 1) {
      if (eventTimes[i].selected) {
        eventTimeValue = +eventTimes[i].attributes.value.value;
      }
    }
    try {
      const events = await service.getEventsData('events/');
      const event = (
      events.find((e) => e.data.weekday === eventWeekdayValue && e.data.timeslot === eventTimeValue)
      );
      if (event) {
        const toast = document.querySelector('.toast');
        toast.style.visibility = 'visible';
      } else if (!eventTitle) {
        const eventTitleInput = document.getElementById('event-name');
        eventTitleInput.setAttribute('placeholder', 'Required field');
        eventTitleInput.classList.add('empty-field');
      } else {
        this.eventObj = new CalendarEvent(eventTitle, eventTimeValue,
          eventWeekdayValue, eventParticipantId);
        await service.setEvent('events', this.eventObj);
        setField('componentForRenderName', 'calendar');
      }
      notification.successfulResponseNotification();
    } catch (err) {
      notification.errorResponseNotification(err);
    }
  }

  hideToast() {
    this.toast = document.querySelector('.toast');
    this.toast.style.visibility = 'hidden';
  }

  render() {
    return `
    <p class="server-notification">A connection was successfully established with the server</p>
    <div class="create-event">
       ${this.createToast()}
      <form>
        ${this.createInput()}
        ${this.createPeopleSelect()}
        ${this.createWeekdaySelect()}
        ${this.createTimeSelect()}
        ${this.createButtons()}
      </form>
    </div>
        `;
  }
}
