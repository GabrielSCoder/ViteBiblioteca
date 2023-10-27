const dropArea = document.getElementById("img-drop")
const inputFile = document.getElementById("input-file")
const imgView = document.getElementById("img-view")

function uploadImage()
{
    let imgLink = URL.createObjectURL(inputFile.files[0])
    imgView.style.backgroundImage = `url(${imgLink})`
}

inputFile.addEventListener("change", uploadImage)
