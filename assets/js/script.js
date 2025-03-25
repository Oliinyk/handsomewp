document.addEventListener("DOMContentLoaded", function () {
    //mobile header menu
    const mobMenu = document.querySelector(".mobmenu");
    const siteHeader = document.querySelector(".site-header");
    if (mobMenu && siteHeader) {
        mobMenu.addEventListener("click", function (event) {
            siteHeader.classList.toggle("is-active");
            event.stopPropagation();
        });
        document.addEventListener("click", function (event) {
            if (!siteHeader.contains(event.target) && !mobMenu.contains(event.target)) {
                siteHeader.classList.remove("is-active");
            }
        });
    }

    //plans
    const annuallyBtn = document.getElementById("annuallyBtn");
    const monthlyBtn = document.getElementById("monthlyBtn");
    const prices = document.querySelectorAll(".priceItemJs");
    function updatePrices(planType) {
        prices.forEach(price => {
            const newPrice = price.getAttribute(`data-${planType}`);
            price.textContent = newPrice;
        });
    }
    annuallyBtn.addEventListener("click", function () {
        annuallyBtn.classList.add("active");
        monthlyBtn.classList.remove("active");
        updatePrices("annually");
    });
    monthlyBtn.addEventListener("click", function () {
        monthlyBtn.classList.add("active");
        annuallyBtn.classList.remove("active");
        updatePrices("monthly");
    });

    //faqs
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
            item.classList.toggle("active");
        });
    });
});