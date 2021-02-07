export default class CalendarEvent {
  static counterId = 0;

  constructor(title, timeslot, weekday, participantsId) {
    CalendarEvent.counterId += 1;
    this.id = CalendarEvent.counterId;
    this.title = title;
    this.timeslot = timeslot;
    this.weekday = weekday;
    this.participantsId = participantsId;
  }
}
