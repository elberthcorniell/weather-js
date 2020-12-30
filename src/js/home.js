import { createElement } from './utils';

const Home = (data, { measure = 'C' } = {}) => {
  const {
    last_updated,
    temp_c,
    temp_f,
    feelslike_c,
    feelslike_f,
    humidity,
    name,
    country,
    condition,
  } = data
  const className = (condition.text || '').toLowerCase().replace(' ', '-');
  const container = createElement('div', `home ${className}`);
  const title = createElement('h1', undefined, `${name}, ${country}`);
  const conditionText = createElement('h3', undefined, `<strong>${condition.text}</strong>`);
  const paragraph = createElement('p', undefined, `<em>Last time updated: ${last_updated}</em>`);
  const temperature = createElement('strong', 'temperature', measure == 'C' ? `${temp_c} <sup>°C</sup>` : `${temp_f} <sup>°F</sup>`);
  const feelslike = createElement('strong', undefined, `Feels like: ${measure == 'C' ? `${feelslike_c} <sup>°C</sup>` : `${feelslike_f} <sup>°F</sup>`}`);
  const humidityText = createElement('strong', undefined, `Humidity: ${humidity}`);
  
  const detailsContainer = createElement('div', 'column');
  detailsContainer.appendChild(feelslike);
  detailsContainer.appendChild(humidityText);

  const infoContainer = createElement('div', 'grid')
  infoContainer.appendChild(temperature);
  infoContainer.appendChild(detailsContainer);

  const search = createElement('form','search-bar');
  search.id = 'search';
  const input = createElement('input');
  input.type = 'text';
  input.placeholder = 'location';
  const submit = createElement('input');
  submit.type = 'submit';
  
  search.appendChild(input);
  search.appendChild(submit);

  container.appendChild(search);
  container.appendChild(conditionText);
  container.appendChild(title);
  container.appendChild(paragraph);
  container.appendChild(infoContainer);

  document.getElementById('content').appendChild(container);
};

export default Home;
