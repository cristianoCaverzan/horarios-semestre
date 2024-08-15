function area(largura, altura) {
  if (typeof largura != "number" || typeof altura != "number") {
    return "erro";
  }
  return largura * altura;
}
exports.area = area;
