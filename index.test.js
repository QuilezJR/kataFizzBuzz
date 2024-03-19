const fizzBuzz = require('./index');

test('Fizz buzz says:', () => {
    expect(fizzBuzz(1)).toBe(1);
});

test('Fizz buzz says:', () => {
    expect(fizzBuzz(2)).toBe(2);
});

test('Fizz buzz says:', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
});
//