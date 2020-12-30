import Navbar from './js/navbar';
import Home from './js/home';
import { getTab, setTab } from './js/utils';

const mountTab = () => {
  document.getElementById('content').innerHTML = '';
  Navbar();
  Home();
};

mountTab();