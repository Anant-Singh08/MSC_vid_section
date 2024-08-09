function playVideo(videoSrc) {
    const modal = document.getElementById("video-modal");
    const modalVideo = document.getElementById("modal-video");
    
    modal.style.display = "block";
    modalVideo.src = videoSrc;
    modalVideo.play();
}

const closeModal = document.querySelector(".close");
closeModal.onclick = function() {
    const modal = document.getElementById("video-modal");
    const modalVideo = document.getElementById("modal-video");
    
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.src = "";
}

window.onclick = function(event) {
    const modal = document.getElementById("video-modal");
    if (event.target == modal) {
        const modalVideo = document.getElementById("modal-video");
        
        modal.style.display = "none";
        modalVideo.pause();
        modalVideo.src = "";
    }
}



