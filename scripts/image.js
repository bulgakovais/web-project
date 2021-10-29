import img1Src from '../img/img1.jpeg'
import img7Src from '../img/img7.jpeg'
// import img3Src from '../img/img3.jpeg'
import img4Src from '../img/img4.jpeg'
import img9Src from '../img/img9.jpeg'

let galery = document.querySelector('.gallery')

let items = [
    { name: 'What??', src: img1Src },
    { name: 'Love', src: img7Src },
    // { name: 'Relax&Fun', src: img3Src },
    { name: 'City ​​Life', src: img4Src },
    { name: 'Holiday', src: img9Src },
];

items.forEach((item) => {
    galery.insertAdjacentHTML('beforeend',
        `<div class = "card">
            <p class="item_data">${item.name}</p>
            <img class = "img_width" src = "${item.src}">
        </div>
    `)
})