const dadosEstudante = require('./dadosEstudante');

test('Exibir mensagem correta com nome e RA', () => {
  const nome = "Gabriel Quintanilha";
  const RA = "061808";
  const expectedMessage = `Dados recebidos - Nome: ${nome}, RA: ${RA}`;
  expect(dadosEstudante(nome, RA)).toBe(expectedMessage);
});

test('Lançar erro se nome ou RA forem omitidos', () => {
  expect(() => {
    dadosEstudante(); // Aqui omitimos o nome e RA
  }).toThrow("Nome e RA são obrigatórios."); // Espera-se que essa exceção seja lançada
});
