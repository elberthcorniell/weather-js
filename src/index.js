import Navbar from './js/navbar';
import Home from './js/home';
import Menu from './js/menu';
import Contact from './js/contact';
import { getTab, setTab } from './js/utils';

const mountTab = () => {
  document.getElementById('content').innerHTML = '';
  Navbar();
  switch (getTab()) {
    case 1:
      Home();
      break;
    case 2:
      Menu();
      break;
    case 3:
      Contact();
      break;
    default:
      Home();
  }
};

document.getElementById('home').addEventListener('click', () => { setTab(1); mountTab(); });
document.getElementById('menu').addEventListener('click', () => { setTab(2); mountTab(); });
document.getElementById('contact').addEventListener('click', () => { setTab(3); mountTab(); });

mountTab();