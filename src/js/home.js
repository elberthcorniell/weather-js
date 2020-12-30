import { createElement } from './utils';

const Home = (data, { measure = 'C' } = {}) => {
  const {
    last_updated: lastUpdated,
    temp_c: tempC,
    temp_f: tempF,
    feelslike_c: feelsLikeC,
    feelslike_f: feelsLikeF,
    humidity,
    name,
    country,
    condition,
  } = data;
  const className = (condition.text || '').toLowerCase().replace(' ', '-');
  const container = createElement('div', `home ${className}`);
  const title = createElement('h1', undefined, `${name}, ${country}`);
  const conditionText = createElement('h3', undefined, `<strong>${condition.text}</strong>`);
  const paragraph = createElement('p', undefined, `<em>Last time updated: ${lastUpdated}</em>`);
  const temperature = createElement('strong', 'temperature', measure === 'C' ? `${tempC} <sup>°C</sup>` : `${tempF} <sup>°F</sup>`);
  const feelslike = createElement('strong', undefined, `Feels like: ${measure === 'C' ? `${feelsLikeC} <sup>°C</sup>` : `${feelsLikeF} <sup>°F</sup>`}`);
  const humidityText = createElement('strong', undefined, `Humidity: ${humidity}`);

  const detailsContainer = createElement('div', 'column');
  detailsContainer.appendChild(feelslike);
  detailsContainer.appendChild(humidityText);

  const infoContainer = createElement('div', 'grid');
  infoContainer.appendChild(temperature);
  infoContainer.appendChild(detailsContainer);

  const search = createElement('form', 'search-bar');
  search.id = 'search';
  const input = createElement('input');
  input.type = 'text';
  input.placeholder = 'location';
  const submit = createElement('input');
  submit.type = 'submit';

  const toggle = createElement('div', 'flex', `
  <label class="switch">
    <input type="checkbox" id="measure" ${measure === 'F' ? 'checked' : ''}>
    <span class="slider round"></span>
  </label>`);
  const toggleText = createElement('strong', undefined, '°F');
  toggle.appendChild(toggleText);

  search.appendChild(input);
  search.appendChild(submit);

  container.appendChild(search);
  container.appendChild(conditionText);
  container.appendChild(title);
  container.appendChild(paragraph);
  container.appendChild(infoContainer);
  container.appendChild(toggle);

  document.getElementById('content').appendChild(container);
};

export default Home;
