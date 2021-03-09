import appComponent from './index';
import Calendar from '../calendar/index';
import LoginWindow from '../loginWindow';
import CreateEvent from '../createEvent';
describe('Check component for render', () => {
  const app = appComponent.componentsMap;
  let componentForRenderName = 'calendar';
  let returnedComponent;
  test(`Should return instance of "Calendar" for render.`, () => {
    returnedComponent = app[componentForRenderName];
    expect(returnedComponent).toBeInstanceOf(Calendar);
  });
  test(`Should return instance of "LoginWindow" for render.`, () => {
    componentForRenderName = 'loginWindow';
    returnedComponent = app[componentForRenderName];
    expect(returnedComponent).toBeInstanceOf(LoginWindow);
  });
  test(`Should return instance of "CreateEvent" for render.`, () => {
    componentForRenderName = 'createEvent';
    returnedComponent = app[componentForRenderName];
    expect(returnedComponent).toBeInstanceOf(CreateEvent);
  });
});
