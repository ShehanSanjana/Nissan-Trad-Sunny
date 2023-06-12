const draggableImage = document.getElementById('draggableImage');
let isDragging = false;
let initialY = 0;
let currentY = 0;

draggableImage.addEventListener('mousedown', startDragging);
draggableImage.addEventListener('mouseup', stopDragging);
draggableImage.addEventListener('mouseleave', stopDragging);
window.addEventListener('mousemove', dragImage);

function startDragging(event) {
    isDragging = true;
    initialY = event.clientY - currentY;
}

function stopDragging() {
    isDragging = false;
}

function dragImage(event) {
    if (isDragging) {
        event.preventDefault();
        currentY = event.clientY - initialY;
        draggableImage.style.transform = `translateY(${currentY}px)`;
    }
}
