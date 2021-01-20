var req;
var object_JSON;
var mongodb_id;




window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);

function updateStatus(event) {

    var status_image = document.getElementById("status");
    var status_text = document.getElementById("status_info");

    if (navigator.onLine) {
        status_image.style.display = "inline";
        status_image.src="images/success.png";
        status_text.innerHTML = "You are connected to the browser.";
    } else {
        status_image.style.display = "inline";
        status_image.src="images/failure.png";
        status_text.innerHTML = "You have lost your internet connection";
    }
}