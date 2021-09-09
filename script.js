const openMenu = () => {
    let menu = document.querySelector('.menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else menu.style.display = 'none';
}
const letters = () => {
    let letter = document.querySelector('#letters');
    letter.style.display = 'block';
    let number = document.querySelector('#numbers')
    number.style.display = 'none';
    openMenu();
}
const numbers = () => {
    let number = document.querySelector('#numbers')
    number.style.display = 'block';
    let letter = document.querySelector('#letters');
    letter.style.display = 'none';
    openMenu();
}
