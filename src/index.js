import { getWeatherData } from './js/api';
import Home from './js/home';
import { handleData } from './js/utils';

const mountTab = async (location) => {
  let data = await getWeatherData(location);
  document.getElementById('content').innerHTML = '';
  data = handleData(data);
  Home(data);
  document.getElementById('search').addEventListener('submit', (e) => {
    e.preventDefault()
    const form = e.target;
    const location = form[0].value;
    mountTab(location);
  })
};

mountTab();
