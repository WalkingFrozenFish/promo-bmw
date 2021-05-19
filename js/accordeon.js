document.addEventListener("DOMContentLoaded", () => {

    const featureLinkElems = document.querySelectorAll(".feature__link");
    const featureSubElems = document.querySelectorAll(".feature-sub");

    // Проходимся по всем элементам массива
    featureLinkElems.forEach((elem, index) => {

        // Добавляем событие клик на каждый элемент
        elem.addEventListener("click", () => {

            // Если элемент содержит активный класс, то
            if (elem.classList.contains("feature__link_active")) {

                // Для начала прячем все элементы
                for (let i = 0; i < 4; i++) {
                    featureLinkElems[i].classList.remove("feature__link_active");
                    featureSubElems[i].classList.add("hidden");
                }

                // Добавляем класс для скрытия элемента
                elem.classList.remove("feature__link_active");
                featureSubElems[index].classList.add("hidden");
            // Иначе
            } else {

                // Для начала прячем все элементы
                for (let i = 0; i < 4; i++) {
                    featureLinkElems[i].classList.remove("feature__link_active");
                    featureSubElems[i].classList.add("hidden");
                }

                // Добавляем класс для показа элемента
                elem.classList.add("feature__link_active");
                featureSubElems[index].classList.remove("hidden");
            }

        })
    })

});