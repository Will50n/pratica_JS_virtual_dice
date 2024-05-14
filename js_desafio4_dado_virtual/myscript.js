let resultado = document.querySelector("#resultado")
let btnSortear = document.querySelector("#btnSortear")
let p = document.querySelector('#p')

btnSortear.addEventListener('click', function (){

   p.style.display = 'none'
   btnSortear.style.display = 'none'

   setTimeout (function() {
      resultado.textContent = "Sorteando..."
   }, 150)
   setTimeout (function() {
      resultado.textContent = "Sorteando.."
   }, 300)
   setTimeout (function() {
      resultado.textContent = "Sorteando."
   }, 450)
   setTimeout (function() {
      resultado.textContent = "Sorteando"
   }, 600)
   setTimeout (function() {
      resultado.textContent = "Sorteando."
   }, 750)
   setTimeout (function() {
      resultado.textContent = "Sorteando.."
   }, 900)
   setTimeout (function() {
      resultado.textContent = "Sorteando..."
   }, 1050)

let x = Math.floor((Math.random() * 6) + 1);

console.log(x)

setTimeout(() => {
   resultado.textContent = "Resultado: " + x
   p.style.display = 'block'
   btnSortear.style.display = 'block'
}, 1150);

})