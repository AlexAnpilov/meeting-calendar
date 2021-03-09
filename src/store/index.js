import eventEmitter from '../EventEmitter';
import Admin from '../participants/Admin';
import User from '../participants/User';

const participants = [
  new Admin('Alex'),
  new User('Anastasia'),
  new User('Dmitriy'),
];

let store = {};
export const initStore = () => {
  store = {
    weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
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
    people: [...participants],
    componentForRenderName: 'loginWindow',
    filterSelectedId: 0,
  };
  eventEmitter.emit('storeChanged');
};

export const getField = (fieldname) => store[fieldname];

export const setField = (fieldname, fieldValue) => {
  store[fieldname] = fieldValue;
  eventEmitter.emit('storeChanged');
};
