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

test('Fizz buzz says:', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
});

test('Fizz buzz says:', () => {
    expect(fizzBuzz(6)).toBe("Fizz");
});

test('Fizz buzz says:', () => {
    expect(fizzBuzz(10)).toBe("Buzz");
});

test('Fizz buzz says:', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
});

test('Fizz buzz says:', () => {
    expect(fizzBuzz(30)).toBe("FizzBuzz");
});
//