import User from './User';

export default class Admin extends User {
  constructor(name, admin = true) {
    super();
    this.name = name;
    this.admin = admin;
  }
}
