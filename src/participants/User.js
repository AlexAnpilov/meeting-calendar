export default class User {
  static counterId = 1;

  constructor(name) {
    User.counterId += 1;
    this.id = User.counterId;
    this.name = name;
  }
}
