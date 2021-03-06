import appComponent from './components/app/index';

class EventEmitter {
  constructor() {
    this.callbacks = {};
  }

  on(event, cb) {
    if (!this.callbacks[event]) this.callbacks[event] = [];
    this.callbacks[event].push(cb);
  }

  emit(event, data) {
    const cbs = this.callbacks[event];
    if (cbs) {
      cbs.forEach((cb) => cb(data));
    }
  }
}

const eventEmitter = new EventEmitter();

// setup our listeners for event Emitter
eventEmitter.on('storeChanged', async () => {
  await appComponent.checkComponentForRender();
  setTimeout(appComponent.setupPageListeners.call(appComponent), 1);
});

export default eventEmitter;
