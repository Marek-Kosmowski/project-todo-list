import '../styles/style.css'
import logo from '../assets/todo-logo.png'
import plusSign from '../assets/plus.svg'
import removeSign from '../assets/remove.svg'
// const modal = document.querySelector('.modal');
const logoImage = document.querySelector('.header-logo');
logoImage.src = logo;
const crateProjectBtn = document.querySelector('.project-create-button');
crateProjectBtn.src = plusSign;
const removeSymbol = document.querySelector('.project-remove-button');
removeSymbol.src = removeSign;

// crateProjectBtn.addEventListener('click', () => {
//     modal.style.display = 'block';
// })