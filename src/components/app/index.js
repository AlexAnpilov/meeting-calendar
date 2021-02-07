import { getField } from '../../store/index';
import Calendar from '../calendar/index';
import CreateEvent from '../create-event/index';

export default class App {
    componentsMap = {
      calendar: new Calendar(),
      createEvent: new CreateEvent(),
    };

    render() {
      const component = this.componentsMap[getField('componentForRenderName')];
      if (component && component.render) {
        document.getElementById('application').innerHTML = component.render();
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
