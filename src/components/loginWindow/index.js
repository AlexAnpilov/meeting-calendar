import { getField, setField } from '../../store/index';
import Calendar from '../calendar/index';

export default class LoginWindow {
  createLoginWindow() {
    const people = getField('people');
    this.options = '';
    people.forEach((human) => {
      this.options += `<option value='${human.id}'>${human.name}</option>`;
    });

    return `
    <div id="login-window">
    <h1>Please authorise</h1>
    <select id="login-select">${this.options}</select>
    <div><button id="login-button">Confirm</button></div>
    </div>
    `;
  }

  setupPageListeners() {
    const loginButton = document.getElementById('login-button');
    loginButton.addEventListener('click', this.loginEvent);
  }

  loginEvent() {
    this.people = getField('people');
    const selectedLoginHumanId = document.getElementById('login-select').value;
    if (!this.people.find((human) => human.id === +selectedLoginHumanId && human.admin)) {
      Calendar.adminMode = false;
    } else {
      Calendar.adminMode = true;
    }
    setField('componentForRenderName', 'calendar');
  }

  render() {
    return `
    ${this.createLoginWindow()}
`;
  }
}
