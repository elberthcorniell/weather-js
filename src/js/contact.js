import { createElement } from './utils';

const Contact = () => {
  const container = createElement('div', 'home');
  const titleContainer = createElement('div', 'home-title');
  const title = createElement('h1', undefined, 'Contact Us');
  const paragraph = createElement('p', undefined, '<strong>Delicious food made by Dominicans served at your doorstep.</strong>');
  const listItems = ['email', 'text', 'submit'];
  const list = document.createElement('form');
  listItems.map(item => {
    const listItem = createElement('input', undefined, item);
    listItem.type = item;
    listItem.placeholder = item;
    list.appendChild(listItem);
    return true;
  });

  titleContainer.appendChild(title);
  titleContainer.appendChild(paragraph);
  titleContainer.appendChild(list);

  container.appendChild(titleContainer);

  document.getElementById('content').appendChild(container);
};

export default Contact;
