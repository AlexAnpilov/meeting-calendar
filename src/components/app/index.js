import { getField } from '../../store/index';
import Calendar from '../calendar/index';
import CreateEvent from '../createEvent/index';
import LoginWindow from '../loginWindow/index';
import TryCatchDecorator from '../../service/TryCatchDecorator';

class App {
  componentsMap = {
    calendar: new Calendar(),
    createEvent: new CreateEvent(),
    loginWindow: new LoginWindow(),
  };

  checkComponentForRender() {
    const component = this.componentsMap[getField('componentForRenderName')];
    if (component instanceof Calendar) {
      return this.calendarRender();
    }
    if (component && component.render) {
      document.getElementById('application').innerHTML = component.render();
    }
    return '<div>Sorry something went wrong</div>';
  }

  @TryCatchDecorator
  async calendarRender() {
    const component = this.componentsMap[getField('componentForRenderName')];
    document.getElementById('application').innerHTML = await component.render();
  }

  setupPageListeners() {
    const component = this.componentsMap[getField('componentForRenderName')];
    if (component && component.setupPageListeners) {
      component.setupPageListeners();
    }
  }
}

const appComponent = new App();
export default appComponent;
