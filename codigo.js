const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const IDparrafo = document.getElementById('IDparrafo')
const classparrafo = document.getElementsByClassName('parrafo')
const input = document.querySelector('input')
const body = document.querySelector('body')

console.log(input.value);

console.log(
    {
        h1,
        p,
        IDparrafo,
        classparrafo,
        input,
    }
);

h1.innerText = 'Patito <br> Feo' // Convierte directamente a texto lo que escribamos
//h1.innerHTML = 'Patito <br> Feo' // Convierte en html lo que escribamos
console.log(h1.getAttribute('pantalla')) //Sirve para leer atributos, clases y ID
//h1.setAttribute('class', 'verde');  Cambia el valor de un atributo 
h1.classList.add('verde') //Función exclusiva para clases, permite agregar una clase
h1.classList.remove('rojo') //Función exclusiva clases, permite agregar una clase
//h1.classList.toggle('verde')//Función exclusiva clases, si está el parámetro lo borra, si no está lo agrega

input.value = 'valor'//Agrega un value al elemento

const img = document.createElement('img')
img.setAttribute('src', 'https://estaciongrafica.co/wp-content/uploads/2021/02/sublimacion-textil.jpg')
console.log(img);

IDparrafo.innerHTML = ""
IDparrafo.append(img);