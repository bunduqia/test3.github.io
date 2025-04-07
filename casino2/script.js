document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navContainer = document.getElementById("navContainer");
    const navLinks = document.querySelectorAll(".nav-link");
    const casinoContents = document.querySelectorAll(".casino-content");

    // Функция для открытия/закрытия меню
    menuToggle.addEventListener("click", function () {
        if (navContainer.style.maxHeight && navContainer.style.maxHeight !== "0px") {
            navContainer.style.maxHeight = "0px";
            menuToggle.classList.remove("expanded");
        } else {
            navContainer.style.maxHeight = navContainer.scrollHeight + "px";
            menuToggle.classList.add("expanded");
        }
    });

    // Закрытие меню при клике на ссылку и отображение соответствующего контента
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default anchor click behavior
            const targetId = link.getAttribute("data-target");

            // Hide all content sections
            casinoContents.forEach(content => {
                content.classList.remove("active");
            });

            // Show the content section corresponding to the clicked menu item
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add("active");
            }

            // Collapse the menu
            navContainer.style.maxHeight = "0px";
            menuToggle.classList.remove("expanded");
        });
    });

    // Функция для копирования промокода
    function copyPromo(id) {
        const copyText = document.getElementById(id);
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Промокод скопирован: " + copyText.value);
    }

    // Назначаем функцию copyPromo глобально
    window.copyPromo = copyPromo;
});