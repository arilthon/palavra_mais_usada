const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados')

const simbolo = [
  '.','?','-','"','♪',
  '_','<i>','</i>','\r','[',']',
  '(',')'
]





fn.lerDiretorio(caminho)
  .then(fn.elementosTerminadosCom('.srt'))
  .then(fn.lerArquivos)
  .then(fn.mesclarElementos)
  .then(fn.separarTextoPor('\n'))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeIncluir('-->'))
  .then(fn.removerElementosSeApenasNumero)
  .then(fn.removerSimbolos(simbolo))
  .then(fn.mesclarElementos)  
  .then(fn.separarTextoPor(' '))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeApenasNumero)
  .then(fn.agruparElementos)
  .then(fn.ordenarPorAtributoNumerio('qtde','desc'))  
  .then(console.log)
  