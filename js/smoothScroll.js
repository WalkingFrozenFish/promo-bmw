// Заносим в переменную нужные элементы
const smoothScrollElems = document.querySelectorAll("a[href^='#']:not(a[href='#'])");

// Для каждого элемента
smoothScrollElems.forEach(link => {

    // Добавляем событие на каждый элемент
    link.addEventListener("click", (event) => {
        // Блокируем стандартное поведение браузера
        event.preventDefault();
        // Получаем айди
        const id = link.getAttribute("href").substring(1);
        // Делаем плавную прокрутку до элемента
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });

        // const id = event.target.getAttribute("href").substr(1);
        // document.querySelector(`#${id}`).scrollIntoView({
        //     behavior: "smooth"
        // })
    })

})