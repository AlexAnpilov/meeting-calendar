class Notification {
  async successfulResponseNotification() {
    this.responseNotification = document.querySelector('.server-notification');
    this.responseNotification.style.visibility = 'visible';
    setTimeout(() => {
      this.responseNotification.style.visibility = 'hidden';
    }, 2000);
  }

  async errorResponseNotification(err) {
    this.responseNotification = document.querySelector('.server-notification');
    this.responseNotification.classList.add('err');
    this.responseNotification.innerText = err.message;
    setTimeout(() => {
      this.responseNotification.style.visibility = 'hidden';
    }, 2000);
  }
}

const notification = new Notification();
export default notification;
