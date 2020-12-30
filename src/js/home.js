import { createElement } from './utils';

const Home = (data) => {
  const {
    last_updated,
    temp_c,
    temp_f,
    feelslike_c,
    feelslike_f,
    humidity,
    is_day,
    lat,
    lon,
    name,
    country,
    condition,
  } = data
  const className = (condition.text || '').toLowerCase().replace(' ', '-');
  const container = createElement('div', `home ${className}`);
  const title = createElement('h1', undefined, `${name}, ${country}`);
  const conditionText = createElement('h3', undefined, `<strong>${condition.text}</strong>`);
  const paragraph = createElement('p', undefined, `Last time updated: ${last_updated}`);

  const search = createElement('form','search-bar');
  search.name = 'search';
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

  document.getElementById('content').appendChild(container);
};

export default Home;
