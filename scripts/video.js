import mediaSrc1 from '../media/video/sample-15s.mp4'

let galery = document.querySelector('.gallery')

let clips = [
    { name: 'Park', src: mediaSrc1 }
]

clips.forEach((clip) => {
    galery.insertAdjacentHTML('beforeend',
        `<div class = "card audio_card">
        <p class ="item_data">${clip.name}</p>
        <div class="video-div">
            <video controls class = "item_img" src = "${clip.src}"></video>
        </div>
    </div>
    `)
})
