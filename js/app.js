// import {Draggable} from "../libs/Draggable.min";

window.onload = function () {
    setTimeout(function () {

        document.body.classList.add('loaded')

        Draggable.create('.gallery', {
            bounds: '.page',
            inertia: true
        })
        
    })

}