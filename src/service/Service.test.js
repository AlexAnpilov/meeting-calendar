import service from './Service';

describe(`Service: test CRUD operations`, () => {
  const eventData = {
    data: {
      title: 'Create test',
      timeslot: 0,
      weekday: 0,
      participantsId: [0],
    },
    id: 'ca736071-225f-4d6f-88f0-9a822242d04b',
  };
  const url = 'events/';
  beforeEach(() => {
    fetch.resetMocks();
  });
  test(`Service: 'GET'. Should return event data and id`, async () => {
    fetch.mockResponseOnce(
      JSON.stringify([
        { id: eventData.id, data: JSON.stringify(eventData.data) },
      ])
    );
    const res = await service.getEventsData(url);
    expect(res).toEqual([{ id: eventData.id, data: eventData.data }]);
  });

  test(`Service: 'POST'. Should have been called once with following arguments`, () => {
    fetch.mockResponseOnce(null);
    service.setEvent(url, eventData);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${service.apiBase}${url}`, {
      method: 'POST',
      body: JSON.stringify({ data: JSON.stringify(eventData) }),
    });
  });

  test(`Service: 'DELETE'. Should have been called once with following arguments`, async () => {
    fetch.mockResponseOnce(null);
    service.deleteEvent(`${url}${eventData.id}`);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `${service.apiBase}${url}${eventData.id}`,
      {
        method: 'DELETE',
      }
    );
  });
});
