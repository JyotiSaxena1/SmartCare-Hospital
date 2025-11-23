let drop = document.getElementById("drop");
let fileInput = document.getElementById("file");
let preview = document.getElementById("preview");

drop.onclick = () => fileInput.click();
drop.ondragover = e => e.preventDefault();
drop.ondrop = e => {
    e.preventDefault();
    fileInput.files = e.dataTransfer.files;
    showPreview();
};

fileInput.onchange = showPreview;

function showPreview() {
    let file = fileInput.files[0];
    if (!file) return;
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
}

function predict() {
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML =
        "<b>Prediction:</b> Mild NPDR<br><br><b>Advice:</b> Visit retina specialist in 2–4 weeks.";
}