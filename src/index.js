import { getWeatherData } from './js/api';
import Home from './js/home';
import { handleData } from './js/utils';

const mountTab = async (location) => {
  document.getElementById('content').innerHTML = '';
  let data = await getWeatherData(location);
  data = handleData(data);
  Home(data);
};

mountTab();