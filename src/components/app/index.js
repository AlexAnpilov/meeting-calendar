import { getField } from '../../store/index';
import Calendar from '../calendar/index';
import CreateEvent from '../createEvent/index';
import LoginWindow from '../loginWindow/index';
import notification from '../../Notification';

export default class App {
    componentsMap = {
      calendar: new Calendar(),
      createEvent: new CreateEvent(),
      loginWindow: new LoginWindow(),
    };

    async render() {
      const component = this.componentsMap[getField('componentForRenderName')];

      if (component instanceof Calendar) {
        try {
          document.getElementById('application').innerHTML = await component.render();
          notification.successfulResponseNotification();
        } catch (err) {
          notification.errorResponseNotification(err);
        }
      } else if (component && component.render) {
        document.getElementById('application').innerHTML = await component.render();
      }

      return '<div>Sorry, something went wrong!</div>';
    }

    setupPageListeners() {
      const component = this.componentsMap[getField('componentForRenderName')];
      if (component && component.setupPageListeners) {
        component.setupPageListeners();
      }
    }
}
