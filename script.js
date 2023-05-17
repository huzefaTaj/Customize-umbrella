const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");

const imageContainer = document.getElementById("image");
const loader = document.getElementById("loader");
const uploadButton = document.getElementById("uploadBtn");
const logo = document.getElementById("logo");

button1.addEventListener("click", function () {
  showLoader();
  loadImage("/assets/Blue umbrella.png");
});
button2.addEventListener("click", function () {
  showLoader();
  loadImage("/assets/Pink umbrella.png");
});
button3.addEventListener("click", function () {
  showLoader();
  loadImage("/assets/Yellow umbrella.png");
});

// Print file name
function showFileName() {
  const fileInput = document.getElementById("uploadBtn");
  const fileNameSpan = document.getElementById("fileName");
  fileNameSpan.textContent = fileInput.files[0].name;
}

// upload file on umbrealla
uploadButton.addEventListener("change", function (e) {
  showLoader();
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    logo.style.backgroundImage = `url('${event.target.result}')`;
    const tempImage = new Image();
    tempImage.onload = hideLoader;
    tempImage.src = event.target.result; // Trigger the tempImage.onload event
  };
  reader.readAsDataURL(file);
});

// show loader image
function showLoader() {
  loader.style.display = "block";
}

// hide loder imeage
function hideLoader() {
  loader.style.display = "none";
}

function loadImage(src) {
  const tempImage = new Image();
  tempImage.onload = function () {
    imageContainer.style.backgroundImage = `url('${src}')`;
    hideLoader();
  };
  tempImage.src = src;
}
