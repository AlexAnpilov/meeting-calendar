import eventEmitter from '../EventEmitter';

let store = {};

export const initStore = () => {
  store = {
    weekdays: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
    ],
    timeslots: [
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
    ],
    people: [{
      id: 1,
      name: 'Alex',
    }, {
      id: 2,
      name: 'Anastasia',
    }, {
      id: 3,
      name: 'Dmitriy',
    }],

    events: [],
    componentForRenderName: 'calendar',
    filterSelectedId: 0,
  };
  eventEmitter.emit('storeChanged');
};

export const getField = (fieldname) => store[fieldname];

export const setField = (fieldname, fieldValue) => {
  store[fieldname] = fieldValue;
  eventEmitter.emit('storeChanged');
};
