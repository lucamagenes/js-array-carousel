//creare un gruppo di valori che corrisponda a ciascuna immagine e testi

/*

assegnare ai bottoni le funzioni per selezionare le immagini
- creare un eventlistener
- creare un loop for
- freccia GIU seleziona l'immagine sottostante
- freccia SU seleziona l'immagine soprastante

*/



/*

se la miniatura viene selezionata:
- viene aggiunto un bordo alla miniatura
- l'immagine viene visualizata nell'anteprima
    - vengono selezionati i testi relativi all'immagine selezionata

altrimenti le miniature non selezionate:
- risultano oscurate

*/


const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


let select = 0;

document.getElementsByClassName("slide_wrapper")[select].classList.add("active");

document.getElementsByClassName("mini")[select].classList.add("active");



const up = document.querySelector(".btn_up");

up.addEventListener('click', function () {
    --select;
    console.log(select);
})

const down = document.querySelector(".btn_down");

down.addEventListener('click', function () {
    ++select;
    console.log(select);
})