const expect = require('expect');

const { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const text = 'Random Text';
    const from = 'Random from';
    const randomMessage = generateMessage(from, text);

    expect(randomMessage.text).toBe(text);
    expect(randomMessage.from).toBe(from);
    expect(randomMessage.createdAt).toBeA('number');
  });
});
