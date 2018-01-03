const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const text = 'Random Text';
    const from = 'Random from';
    const randomMessage = generateMessage(from, text);

    expect(randomMessage.text).toBe(text);
    expect(randomMessage.from).toBe(from);
    expect(typeof randomMessage.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const longitude = 22.72198;
    const latitude = 50.54099;
    const from = 'Admin';

    const locationMessage = generateLocationMessage('Admin', latitude, longitude);
    expect(typeof locationMessage.createdAt).toBe('number');
    expect(locationMessage.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
    expect(locationMessage.from).toBe(from);
  });
});