const fetchData = async endpoint => {
    const BASE_URL = "http://localhost:3000/";
    const response = await fetch(BASE_URL + endpoint);
    const data = await response.json();
    return data;
}

// * Blogs list

const blogsList = async () => {
    const blogsWrapper = document.getElementById("blogs-wrapper");

    const blogs = await fetchData("blogs");

    blogs.map(article => {
        // Create the main div element
        const div = document.createElement("div");
        div.classList.add("relative", "bg-white", "rounded-3xl", "overflow-hidden", "border", "group");

        // Create the first inner div element
        const innerDiv1 = document.createElement("div");
        innerDiv1.classList.add("overflow-hidden");
        div.appendChild(innerDiv1);

        // Create the image element
        const img = document.createElement("img");
        img.classList.add("w-full", "transition-all", "duration-300", "group-hover:scale-110");
        img.src = article.image;
        img.alt = "blog";
        innerDiv1.appendChild(img);

        // Create the second inner div element
        const innerDiv2 = document.createElement("div");
        innerDiv2.classList.add("py-5", "px-7");
        div.appendChild(innerDiv2);

        // Create the anchor element
        const anchor = document.createElement("a");
        anchor.href = "./blog-details.html";
        innerDiv2.appendChild(anchor);

        // Create the heading element
        const heading = document.createElement("h3");
        heading.classList.add("text-2xl", "transition-all", "duration-300", "hover:text-[#16bcdc]");
        heading.textContent = article.title;
        anchor.appendChild(heading);

        // Create the first paragraph element
        const paragraph1 = document.createElement("p");
        paragraph1.classList.add("my-3", "text-md", "text-[#999]");
        innerDiv2.appendChild(paragraph1);

        // Create the span element inside the paragraph
        const span = document.createElement("span");
        span.classList.add("text-[#16bcdc]");
        span.textContent = article.author;
        paragraph1.innerHTML = "نویسنده : ";
        paragraph1.appendChild(span);

        // Create the second paragraph element
        const paragraph2 = document.createElement("p");
        paragraph2.classList.add("text-lg", "text-[#666]");
        paragraph2.textContent = article.body[0];
        innerDiv2.appendChild(paragraph2);

        // Create the horizontal rule element
        const hr = document.createElement("hr");
        hr.classList.add("my-4");
        innerDiv2.appendChild(hr);

        // Create the third div element
        const innerDiv3 = document.createElement("div");
        innerDiv3.classList.add("flex", "justify-between");
        innerDiv2.appendChild(innerDiv3);

        // Create the "ادامه مطلب" anchor element
        const continueLink = document.createElement("a");
        continueLink.classList.add("transition-all", "duration-300", "hover:text-[#16bcdc]");
        continueLink.href = "";
        continueLink.textContent = "ادامه مطلب";
        innerDiv3.appendChild(continueLink);

        // Create the date span element
        const dateSpan = document.createElement("span");
        dateSpan.classList.add("text-[#555]");
        dateSpan.textContent = article.date;
        innerDiv3.appendChild(dateSpan);

        // Create the fourth div element
        const innerDiv4 = document.createElement("div");
        innerDiv4.classList.add("absolute", "top-5", "right-5");
        div.appendChild(innerDiv4);

        // Create the "غذا و نوشیدنی" anchor element
        const categoryLink = document.createElement("a");
        categoryLink.classList.add("bg-[#16bcdc]", "text-white", "px-2");
        categoryLink.href = "";
        categoryLink.textContent = article.category;
        innerDiv4.appendChild(categoryLink);

        blogsWrapper.appendChild(div);
    })
}
blogsList();