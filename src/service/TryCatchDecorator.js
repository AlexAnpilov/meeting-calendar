import notification from './Notification';

export default function TryCatchDecorator(target, key, descriptor) {
  const fn = descriptor.value;

  descriptor.value = async function (...args) {
    try {
      const result = await fn.apply(this, args);
      notification.successfulResponseNotification();
      return result;
    } catch (err) {
      return notification.errorResponseNotification(err);
    }
  };

  return descriptor;
}
