const { verifyWords, sanitize, shuffle } = require("./services");

test("limpar acentos", () => {
  expect(sanitize("açafrão")).toBe("acafrao");
  expect(sanitize("áéíóú")).toBe("aeiou");
});

test("aleatório", () => {
  expect(shuffle([1, 2, 3, 4, 5])).not.toBe([1, 2, 3, 4, 5]);
  expect(shuffle([6, 7, 8])).toContain(6);
  expect(shuffle([6, 7, 8])).toContain(7);
  expect(shuffle([6, 7, 8])).toContain(8);
});
