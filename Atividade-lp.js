// considere a quantidade de alunos presentes na sala, percorra do zero até o número de alunos e retornar os seguuintes resultados.

// se o número for par, escreva "par" e o número corresponente.
// se o número for ímpar, escreva "ímpar" e o número correspondente.
// se o número for zero, escreva "zero" e o numero correspondente.

for (let aluno = 0; aluno <= 20; aluno++) {
  if (aluno == 0) {
    console.log(`Zero: ${aluno}`)
  } else if (aluno % 2 == 0) {
    console.log(`Par: ${aluno}`)
  } else {
    console.log(`Ìmpar: ${aluno}`)
  }
}