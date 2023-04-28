// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bikeMi = [{
    name: 'RedBike',
    weight: 6
},
{
    name: 'GreenBike',
    weight: 2
},
{
    name: 'BlueBike',
    weight: 3
}
];


let bike = bikeMi[0]
bikeclassHTML = document.getElementById('bikeClass');

bikeMi.forEach((element) => {
    if (element.weight < bike.weight) {
        bike = element
    }
})

console.log(bike)

const { name, weight } = bike

bikeclassHTML.innerHTML = `The lightest bike is ${name}, with a wieght of ${weight} kg`



// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const teams = [
    {
        name: 'AC Milan',
        points: 0,
        faulSuffered: 0
    },
    {
        name: 'Inter Fc',
        points: 0,
        faulSuffered: 0
    },
    {
        name: 'Liverpool FC',
        points: 0,
        faulSuffered: 0
    },
    {
        name: 'Real Madrid FC',
        points: 0,
        faulSuffered: 0
    }
]

function randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

teams.forEach((element) => {
    element.points = randomNumber(1, 100)
    element.faulSuffered = randomNumber(1, 100)

    console.log(element.points, element.faulSuffered)
})

let arrayData = teams.map(({ name, faulSuffered }) => ({ name, faulSuffered }))

console.log(arrayData)






// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
// se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const arrayNumby = []
const arrayNames = ['Gabriele', 'Luca', 'Leonardo', 'Giovanna', 'Lucilla', 'Ilenia', 'Lavinia', 'MariaElena', 'James', 'Eleonire']

let number = document.getElementById('numbers')
let subIt = document.getElementById('submitIt')
let min = parsInt()

subIt.addEventListener('click', function () {

    pushing();

})

//console.log(arrayNumby)

function pushing() {

    for (let i = 0; i <= 2; i++) {
        let number = 

        if (number % 2 == 0 && arrayNumby.length <= 2 && number <= arrayNames.length) {
            arrayNumby.push(number)
        }
    }

    console.log("arrayNumby" + arrayNumby);
}
