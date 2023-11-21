
// * Banner Slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// * Top Product Slider
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    },
});

// * Advertising Slider
var swiper = new Swiper(".mySwiper3", {
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    freeMode: true,
    slidesPerView: 2,
    speed: 3000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
});

// * Brand Slider
var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 30,
    // centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        570: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 40,
        }
    }
});

// * Mobile Navbar

const navbar = document.getElementById("mobile-menu");
const navbarBtn = document.getElementById("mobile-menu-btn");
const navbarBtnIcons = navbarBtn.children;

let isNavbarOpen = false;

navbarBtn.addEventListener("click", () => {
    if (isNavbarOpen) {
        navbar.classList.remove("-right-0");
        navbar.classList.add("-right-[250px]");
        navbarBtnIcons[0].classList.remove("hidden");
        navbarBtnIcons[1].classList.add("hidden")
        isNavbarOpen = false;
    } else {
        navbar.classList.remove("-right-[250px]");
        navbar.classList.add("-right-0");
        navbarBtnIcons[0].classList.add("hidden");
        navbarBtnIcons[1].classList.remove("hidden")
        isNavbarOpen = true;
    }
})

document.addEventListener("click", event => {
    if (!navbar.contains(event.target) && !navbarBtn.contains(event.target)) {
        navbar.classList.remove("-right-0");
        navbar.classList.add("-right-[250px]");
        navbarBtnIcons[0].classList.remove("hidden");
        navbarBtnIcons[1].classList.add("hidden")
    }
})

// * top-products

const fetchData = async endpoint => {
    const BASE_URL = "http://localhost:3000/";
    const response = await fetch(BASE_URL + endpoint);
    const data = await response.json();
    return data;
}


const topProducts = async () => {

    const topProductsWrapper = document.getElementById("top-products-wrapper");

    const products = await fetchData("top-products");

    products.map(product => {
        const divElement = document.createElement('div');
        divElement.classList.add('swiper-slide');

        // Create the inner elements and append them to the div
        divElement.innerHTML = `
            <div class="relative overflow-hidden group">
                <a class="block rounded-2xl p-8 bg-white" href="">
                    <div class="overflow-hidden">
                        <img class="mx-auto transition-all duration-300 hover:scale-125" src="${product.image}" alt="product">
                    </div>
                    <div>
                        <h3 class="text-[#0d6efd] text-[15px]">${product.title}</h3>
                        <div class="my-3">
                            <span class="text-yellow-400"><i class="fas fa-star"></i></span>
                            <span class="text-yellow-400"><i class="fas fa-star"></i></span>
                            <span class="text-yellow-400"><i class="fas fa-star"></i></span>
                            <span class="text-yellow-400"><i class="fas fa-star"></i></span>
                            <span class="text-yellow-400"><i class="far fa-star"></i></span>
                        </div>
                        <h5 class="text-sm"><span class="text-green-500 pl-1">${product.price} </span>تومان</h5>
                    </div>
                    <div class="flex flex-col gap-1 absolute top-[15%] -left-10 transition-all duration-300 group-hover:left-0">
                        <span class="bg-[#F5F5F5] text-[#42381C] p-2 transition-all duration-300 hover:text-white hover:bg-[#16bcdc]">
                            <i class="far fa-eye"></i>
                        </span>
                        <span class="bg-[#F5F5F5] text-[#42381C] p-2 transition-all duration-300 hover:text-white hover:bg-[#16bcdc]">
                            <i class="far fa-heart"></i>
                        </span>
                        <span class="bg-[#F5F5F5] text-[#42381C] p-2 transition-all duration-300 hover:text-white hover:bg-[#16bcdc]">
                            <i class="fas fa-layer-group"></i>
                        </span>
                    </div>
                    <div class="w-full absolute right-0 bottom-20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-5">
                        <button class="block mx-auto bg-[#16bcdc] text-white py-[10px] px-10 rounded-full">
                            افزودن به سبد
                        </button>
                    </div>
                </a>
            </div>
        `;

        topProductsWrapper.append(divElement);
    })
}

topProducts();


// * Categories

const categories = async () => {

    const categoriesWrapper = document.getElementById("categories");

    const categories = await fetchData("categories");
    categories.map(category => {
        const div = document.createElement('div');
        div.classList.add('rounded-3xl', 'overflow-hidden', 'relative', 'h-36', 'group');

        const link = document.createElement('a');
        link.href = '';

        const img = document.createElement('img');
        img.classList.add('w-full', 'h-full', 'transition-all', 'duration-300', 'group-hover:scale-110');
        img.src = category.image;
        img.alt = '';

        const innerDiv = document.createElement('div');
        innerDiv.classList.add('absolute', 'right-7', 'top-10');

        const heading = document.createElement('h4');
        heading.classList.add('text-white', 'text-xl', 'transition-all', 'duration-300', 'hover:text-[#16bcdc]');
        heading.textContent = category.title;

        const paragraph = document.createElement('p');
        paragraph.classList.add('text-white', 'opacity-60', 'text-sm', 'mt-1');
        paragraph.textContent = '(7 محصول)';

        innerDiv.appendChild(heading);
        innerDiv.appendChild(paragraph);

        link.appendChild(img);
        link.appendChild(innerDiv);

        div.appendChild(link);

        categoriesWrapper.append(div)

    })
}

categories()

// * Suggested Products

const suggestedProducts = async () => {

    const topProductsWrapper = document.getElementById("suggested-products-wrapper");

    const products = await fetchData("suggested-products");

    products.map(product => {
        const divElement = document.createElement('div');
        divElement.classList.add('swiper-slide');

        // Create the inner elements and append them to the div
        divElement.innerHTML = `
            <div class="relative overflow-hidden group">
                <a class="block rounded-2xl p-8 bg-white" href="">
                    <div class="overflow-hidden">
                        <img class="mx-auto transition-all duration-300 hover:scale-125" src="${product.image}" alt="product">
                    </div>
                    <div>
                        <h3 class="text-[#0d6efd] text-[15px]">${product.title}</h3>
                        <div class="my-3">
                            <span class="text-yellow-400"><i class="fas fa-star"></i></span>
                            <span class="text-yellow-400"><i class="fas fa-star"></i></span>
                            <span class="text-yellow-400"><i class="fas fa-star"></i></span>
                            <span class="text-yellow-400"><i class="fas fa-star"></i></span>
                            <span class="text-yellow-400"><i class="far fa-star"></i></span>
                        </div>
                        <h5 class="text-sm"><span class="text-green-500 pl-1">${product.price} </span>تومان</h5>
                    </div>
                    <div class="flex flex-col gap-1 absolute top-[15%] -left-10 transition-all duration-300 group-hover:left-0">
                        <span class="bg-[#F5F5F5] text-[#42381C] p-2 transition-all duration-300 hover:text-white hover:bg-[#16bcdc]">
                            <i class="far fa-eye"></i>
                        </span>
                        <span class="bg-[#F5F5F5] text-[#42381C] p-2 transition-all duration-300 hover:text-white hover:bg-[#16bcdc]">
                            <i class="far fa-heart"></i>
                        </span>
                        <span class="bg-[#F5F5F5] text-[#42381C] p-2 transition-all duration-300 hover:text-white hover:bg-[#16bcdc]">
                            <i class="fas fa-layer-group"></i>
                        </span>
                    </div>
                    <div class="w-full absolute right-0 bottom-20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-5">
                        <button class="block mx-auto bg-[#16bcdc] text-white py-[10px] px-10 rounded-full">
                            افزودن به سبد
                        </button>
                    </div>
                </a>
            </div>
        `;

        topProductsWrapper.append(divElement);
    })
}

suggestedProducts();


const topBlogs = async () => {
    const topBlogWrapper = document.getElementById("top-blog-wrapper")

    const blogs = await fetchData("top-blogs");

    blogs.map(blog => {
        // Create the main container element
        var div = document.createElement('div');
        div.className = 'relative bg-white rounded-3xl overflow-hidden group';

        // Create the image element
        var img = document.createElement('img');
        img.className = 'w-full transition-all duration-300 group-hover:scale-110';
        img.src = blog.image;
        img.alt = 'blog';

        // Append the image element to the main container
        div.appendChild(img);

        // Create the anchor element
        var anchor = document.createElement('a');
        anchor.href = '';

        // Create the heading element
        var heading = document.createElement('h3');
        heading.className = 'text-lg transition-all duration-300 hover:text-[#16bcdc] mx-3 mt-5';
        heading.textContent = blog.title;

        // Append the heading element to the anchor element
        anchor.appendChild(heading);

        // Append the anchor element to the main container
        div.appendChild(anchor);

        // Create the author paragraph
        var author = document.createElement('p');
        author.className = 'my-3 text-sm text-[#999] mx-3';
        author.textContent = 'نویسنده : ';

        // Create the author name span
        var authorName = document.createElement('span');
        authorName.className = 'text-[#16bcdc] mx-3';
        authorName.textContent = blog.author;

        // Append the author name span to the author paragraph
        author.appendChild(authorName);

        // Append the author paragraph to the main container
        div.appendChild(author);

        // Create the description paragraph
        var description = document.createElement('p');
        description.className = 'text-[#666] mx-3';
        description.textContent = blog.body[0];

        // Append the description paragraph to the main container
        div.appendChild(description);

        // Create the horizontal rule
        var hr = document.createElement('hr');
        hr.className = 'my-4';

        // Append the horizontal rule to the main container
        div.appendChild(hr);

        // Create the link and date container
        var linkDateContainer = document.createElement('div');
        linkDateContainer.className = 'flex justify-between mx-3';

        // Create the "Read More" link
        var readMoreLink = document.createElement('a');
        readMoreLink.className = 'transition-all duration-300 hover:text-[#16bcdc] mx-3 mb-3';
        readMoreLink.href = '';
        readMoreLink.textContent = 'ادامه مطلب';

        // Append the "Read More" link to the link and date container
        linkDateContainer.appendChild(readMoreLink);

        // Create the date span
        var dateSpan = document.createElement('span');
        dateSpan.className = 'text-[#555]';
        dateSpan.textContent = blog.date;

        // Append the date span to the link and date container
        linkDateContainer.appendChild(dateSpan);

        // Append the link and date container to the main container
        div.appendChild(linkDateContainer);

        // Create the category tag
        var categoryTag = document.createElement('a');
        categoryTag.className = 'bg-[#16bcdc] text-white px-2 text-sm';
        categoryTag.href = '';
        categoryTag.textContent = blog.category;

        // Create the category tag container
        var categoryTagContainer = document.createElement('div');
        categoryTagContainer.className = 'absolute top-3 right-3';

        // Append the category tag to the category tag container
        categoryTagContainer.appendChild(categoryTag);

        // Append the category tag container to the main container
        div.appendChild(categoryTagContainer);

        // Append the main container to the desired parent element
        topBlogWrapper.appendChild(div);
    })
}


