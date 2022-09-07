const users = ['Jacek', 'Tomek', 'Adam'];

it('Add two values', () => {
  expect(users).toContain('Adam');
  expect(users).not.toContain('apple');
});
