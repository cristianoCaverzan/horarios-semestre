const parede = require("../model/parede");

test("espero que area 3x2 tenha 6m2", () => {
  const area = parede.area(3, 2);
  expect(area).toEqual(6);
});
test("espero que area 'test'x2 seja erro", () => {
  const area = parede.area("test", 2);
  expect(area).toEqual("erro");
});
test("espero que area 3x'string' seja erro", () => {
  const area = parede.area(3, "string");
  expect(area).toEqual("erro");
});
