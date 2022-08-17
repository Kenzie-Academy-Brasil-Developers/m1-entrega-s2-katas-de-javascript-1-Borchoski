function oneThroughTwenty() {
    let contador = [];
    for (let i = 1; i <= 20; i++) {
      contador.push(i)
    }
    return contador;
}
//console.log(oneThroughTwenty())

function evensToTwenty() {
    let numerosPares = []
    for(let i = 1; i<=20; i++){
      if(i % 2 == 0){
        numerosPares.push(i)
      }
    }
    return numerosPares
}
//console.log(evensToTwenty())

function oddsToTwenty() {
  let numerosImpares = []
  for(let i = 1; i<=20; i++){
    if(i % 2 == 1){
      numerosImpares.push(i)
    }
  }
  return numerosImpares
}
//console.log(oddsToTwenty())

function multiplesOfFive() {
  let multiplosCinco = []
  for(let i = 5; i <= 100; i = i + 5){
    multiplosCinco.push(i)
  }
  return multiplosCinco
}
//console.log(multiplesOfFive())

function squareNumbers() {
  let quadradosPerfeitos = []
    for(let i = 1; i <= 100; i++){
      if(Math.sqrt(i) % 1 === 0){
        quadradosPerfeitos.push(i)
      }
    }
    return quadradosPerfeitos
}
//console.log(squareNumbers())

function countingBackwards() {
  let contador = [];
  for (let i = 20; i >= 1; i--) {
    contador.push(i)
  }
  return contador;
}
//console.log(countingBackwards())

function evenNumbersBackwards() {
  let numerosPares = []
  for(let i = 20; i>=1; i--){
    if(i % 2 == 0){
      numerosPares.push(i)
    }
  }
  return numerosPares
}
//console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
  let numerosImpares = []
  for(let i = 20; i>=1; i--){
    if(i % 2 == 1){
      numerosImpares.push(i)
    }
  }
  return numerosImpares
}
//console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
  let multiplosCinco = []
  for(let i = 100; i >= 5; i = i - 5){
    multiplosCinco.push(i)
  }
  return multiplosCinco
}
//console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
  let quadradosPerfeitos = []
  for(let i = 100; i >= 1; i--){
    if(Math.sqrt(i) % 1 === 0){
      quadradosPerfeitos.push(i)
    }
  }
  return quadradosPerfeitos
}
//console.log(squareNumbersBackwards())


