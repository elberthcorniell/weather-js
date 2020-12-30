import { getWeatherData } from './js/api';
import Home from './js/home';
import { getTab, setTab } from './js/utils';

const mountTab = () => {
  getWeatherData();
  document.getElementById('content').innerHTML = '';
  Home();
};

mountTab();