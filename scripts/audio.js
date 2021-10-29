import audio1Src from '../audio/Queen — I Want to Break Free.mp3'
let galery = document.querySelector('.gallery')

let audio = [
    { name: 'Qween — I Want to Break Free', src: audio1Src }
]

audio.forEach((song) => {
    galery.insertAdjacentHTML('beforeend',
        `<div class = "card audio_card">
            <p class ="item_data">${song.name}</p>
            <div class="audio-div">
                <audio controls class = "item_img margin" src = "${song.src}"></audio>
            </div>
        </div>
    `)
})
