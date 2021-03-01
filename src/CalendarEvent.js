export default class CalendarEvent {
  constructor(title, timeslot, weekday, participantsId) {
    this.title = title;
    this.timeslot = timeslot;
    this.weekday = weekday;
    this.participantsId = participantsId;
  }
}
