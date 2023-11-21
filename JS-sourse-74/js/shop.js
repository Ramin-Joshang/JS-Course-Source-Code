const fetchData = async endpoint => {
    const BASE_URL = "http://localhost:3000/";
    const response = await fetch(BASE_URL + endpoint);
    const data = await response.json();
    return data;
}

// * Products list

const productsList = async () => {
    const productsWrapper = document.getElementById("shop");
    const products = await fetchData("products");

    products.map(product => {
        const div = document.createElement('div');
        div.classList.add('relative', 'overflow-hidden', 'group', 'transition-shadow', 'duration-300', 'hover:shadow-xl');

        const a = document.createElement('a');
        a.classList.add('block', 'p-8', 'bg-white', 'border');
        a.href = '../product-details.html?product=' + product.id;

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('overflow-hidden');

        const img = document.createElement('img');
        img.classList.add('mx-auto', 'transition-all', 'duration-300', 'hover:scale-125');
        img.src = product.image;
        img.alt = 'product';

        imgContainer.appendChild(img);
        a.appendChild(imgContainer);

        const h3 = document.createElement('h3');
        h3.classList.add('transition-colors', 'duration-300', 'hover:text-[#16bcdc]');
        h3.textContent = product.title;
        a.appendChild(h3);

        const ratingDiv = document.createElement('div');
        ratingDiv.classList.add('my-3');

        for (let i = 0; i < 4; i++) {
            const star = document.createElement('span');
            star.classList.add('text-yellow-400');
            star.innerHTML = '<i class="fas fa-star"></i>';
            ratingDiv.appendChild(star);
        }

        const emptyStar = document.createElement('span');
        emptyStar.classList.add('text-yellow-400');
        emptyStar.innerHTML = '<i class="far fa-star"></i>';
        ratingDiv.appendChild(emptyStar);

        a.appendChild(ratingDiv);

        const h5 = document.createElement('h5');
        h5.classList.add('text-sm');
        h5.innerHTML = `<span class="text-green-500 pl-1">${product.price}</span> تومان`;
        a.appendChild(h5);

        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('text-sm', 'text-white', 'py-3', 'px-10', 'mt-5', 'block', 'bg-[#16bcdc]', 'w-full', 'rounded-sm', 'mx-auto', 'transition-colors', 'duration-300', 'hover:bg-white', 'hover:text-black', 'hover:border');
        addToCartButton.textContent = 'افزودن به سبد';
        a.appendChild(addToCartButton);

        const quickViewButton = document.createElement('button');
        quickViewButton.classList.add('text-sm', 'text-black', 'border', 'py-3', 'px-10', 'mt-3', 'block', 'bg-white', 'w-full', 'rounded-sm', 'mx-auto', 'transition-colors', 'duration-300', 'hover:bg-[#16bcdc]', 'hover:text-white');
        quickViewButton.textContent = 'مشاهده سریع';
        a.appendChild(quickViewButton);

        const iconsContainer = document.createElement('div');
        iconsContainer.classList.add('flex', 'flex-col', 'gap-1', 'absolute', 'top-[15%]', '-left-10', 'transition-all', 'duration-300', 'group-hover:left-0');

        const eyeIcon = document.createElement('span');
        eyeIcon.classList.add('bg-[#F5F5F5]', 'text-[#42381C]', 'p-2', 'transition-all', 'duration-300', 'hover:text-white', 'hover:bg-[#16bcdc]');
        eyeIcon.innerHTML = '<i class="far fa-eye"></i>';
        iconsContainer.appendChild(eyeIcon);

        const heartIcon = document.createElement('span');
        heartIcon.classList.add('bg-[#F5F5F5]', 'text-[#42381C]', 'p-2', 'transition-all', 'duration-300', 'hover:text-white', 'hover:bg-[#16bcdc]');
        heartIcon.innerHTML = '<i class="far fa-heart"></i>';
        iconsContainer.appendChild(heartIcon);

        const layerIcon = document.createElement('span');
        layerIcon.classList.add('bg-[#F5F5F5]', 'text-[#42381C]', 'p-2', 'transition-all', 'duration-300', 'hover:text-white', 'hover:bg-[#16bcdc]');
        layerIcon.innerHTML = '<i class="fas fa-layer-group"></i>';
        iconsContainer.appendChild(layerIcon);

        a.appendChild(iconsContainer);
        div.appendChild(a);
        productsWrapper.appendChild(div);
    })

}

productsList();

