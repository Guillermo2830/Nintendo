let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {
        listElement.classList.toggle('arrow');
        
        let menu = listElement.nextElementSibling;
        let list = document.querySelector('.list');
        let nav = document.querySelector('.nav');
        
        if (menu.style.height === '0px' || menu.style.height === '') {
            menu.style.height = `${menu.scrollHeight}px`;
            list.style.height = `${30 + menu.scrollHeight}px`; // Ajusta la altura del contenedor
            nav.style.height = `${300 - (menu.scrollHeight * 0.5)}px`;
        } else {
            menu.style.height = '0px';
            list.style.height = '80px'; // Restablece la altura fija del contenedor
            nav.style.height = '100px';
        }
    });
});