function showInfo(card) {
    const popupId = `popup${card.split(' ')[1]}`;
    const popup = document.getElementById(popupId);
    popup.style.display = 'block';
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
}


function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "block";
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
}