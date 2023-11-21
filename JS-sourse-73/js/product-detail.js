console.log(window.location.href);

const id = window.location.href.split("=")[1];

const fetchData = async (endpoint, id) => {
    const BASE_URL = "http://localhost:3000/";
    const response = await fetch(BASE_URL + endpoint + "/" + id);
    const data = await response.json();
    return data;
}


function productDetailsSlide(n) {
    const images = document.getElementById("product-details-img").getElementsByTagName("img");
    const imagesWrapper = document.getElementById("product-details-img").getElementsByTagName("div")
    const previewImages = document.getElementById("product-details-img-preview").getElementsByTagName('img');
    for (let i = 0; i < previewImages.length; i++) {
        previewImages[i].classList.add("hidden");
        imagesWrapper[i].classList.remove("border-[#16bcdc]");
    }
    previewImages[n - 1].classList.remove("hidden");
    imagesWrapper[n - 1].classList.add("border-[#16bcdc]");
}

const productDetails = async () => {
    const product = await fetchData("products", id);
    const mainImagePreview = document.getElementById("main-image-preview");
    const mainImage = document.getElementById("main-image");
    mainImage.src = product.image;
    mainImagePreview.src = product.image;
}

productDetails();