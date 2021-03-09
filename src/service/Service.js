class Service {
  apiBase = 'http://158.101.166.74:8080/api/data/anpilov_a/';

  constructor() {
    if (Service.instance) {
      return Service.instance;
    }
    Service.instance = this;
  }

  async getEventsData(url) {
    const res = await fetch(`${this.apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    const eventsData = await res.json();
    return eventsData === null
      ? []
      : eventsData.map(({ id, data }) => ({
          id,
          data: JSON.parse(data),
        }));
  }

  async deleteEvent(url) {
    const res = await fetch(`${this.apiBase}${url}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
  }

  async setEvent(url, body) {
    const res = await fetch(`${this.apiBase}${url}`, {
      method: 'POST',
      body: JSON.stringify({ data: JSON.stringify(body) }),
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
  }
}

const service = new Service();
export default service;
