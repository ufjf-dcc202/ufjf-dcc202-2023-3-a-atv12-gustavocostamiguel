document.entrada.addEventListener('submit',leFormulario);
const olJoao = document.querySelector('#olJoao');
const olJoao = document.querySelector('#olMaria');

function leFormulario(event)
{
   event.preventDefault(); 
const fruta = document.entrada.fruta.value;
const quantidade = document.entrada.quantidade.value;

console.log(`fruta: ${fruta} qtd ${quantidade}`);
document.entrada.submit();
}