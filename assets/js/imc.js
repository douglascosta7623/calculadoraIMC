const calcular = document.getElementById('calcular')

function imc() {
  const nome = document.getElementById('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')

  if (nome !== '' && altura !== '' && peso !== '') {
    const valorImc = (peso / (altura * altura)).toFixed(1)
    let classImc = ''
    if (valorImc < 18.5) {
      classImc = 'abaixo do peso'
    } else if (valorImc < 25) {
      classImc = 'com peso normal. Parabéns!'
    } else if (valorImc < 30) {
      classImc = 'um pouco acima do peso. Atenção'
    } else if (valorImc < 35) {
      classImc = 'Obesidade Grau I'
    } else if (valorImc < 40) {
      classImc = 'Obesidade Grau II'
    } else {
      classImc = 'Obesidade Grau III ou Mórbida'
    }
    resultado.textContent = `${nome} seu IMC é: ${valorImc} e você está ${classImc}`
  } else {
    resultado.textContent = `Preencha todos os campos!`
  }
}

calcular.addEventListener('click', imc)
