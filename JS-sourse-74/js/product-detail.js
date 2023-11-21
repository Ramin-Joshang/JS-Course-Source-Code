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

function productDetailsList(n) {
    const listItem = document.getElementById("product-details-list").getElementsByTagName('li');
    const listContent = document.getElementById("product-details-list-content").getElementsByTagName("div");

    for (let i = 0; i < listItem.length; i++) {
        const element = listItem[i];
        element.classList.remove("border-b-2", "border-[#16bcdc]");
        element.classList.add("text-[#b6b6b6]");
        listContent[i].classList.add("hidden");
    }
    listItem[n - 1].classList.add("border-b-2", "border-[#16bcdc]");
    listItem[n - 1].classList.remove("text-[#b6b6b6]");
    listContent[n - 1].classList.remove("hidden");

}

const productDetails = async () => {
    const product = await fetchData("products", id);
    const mainImagePreview = document.getElementById("main-image-preview");
    const mainImage = document.getElementById("main-image");

    mainImage.src = product.image;
    mainImagePreview.src = product.image;

    const productTitle = document.getElementById("product-title");
    const productPrice = document.getElementById("product-price");
    const productInfo = document.getElementById("product-info");
    const productStock = document.getElementById("product-stock");

    productTitle.innerHTML = product.title;
    productPrice.innerHTML = product.price;
    product.attributes.forEach(attribute => {
        const li = document.createElement("li");
        li.innerHTML = attribute;
        productInfo.appendChild(li);
    })
    productStock.innerHTML = product.stock;
    const productDesc = document.getElementById("product-desc");
    product.body.forEach(content => {
        const p = document.createElement("p");
        p.classList.add("text-[#666]", "leading-8", "text-justify")
        p.innerHTML = content;
        productDesc.appendChild(p);
    })

    const pWeight = document.getElementById("p-weight");
    const pDimensions = document.getAnimations("p-dimensions");
    const pColor = document.getElementById("p-color");
    const pSize = document.getElementById("p-size");
    const pModel = document.getElementById("p-model");
    const pForwarding = document.getElementById("p-forwarding");
    const pInfo = document.getElementById("p-info");
    const pBrand = document.getElementById("p-brand");

    pWeight.innerHTML = product.technical_information.weight;
    pDimensions.innerHTML = product.technical_information.dimensions;
    pColor.innerHTML = product.technical_information.color;
    pSize.innerHTML = product.technical_information.size;
    pModel.innerHTML = product.technical_information.model;
    pForwarding.innerHTML = product.technical_information.forwarding;
    pInfo.innerHTML = product.technical_information.info;
    pBrand.innerHTML = product.technical_information.brand

}

productDetails();