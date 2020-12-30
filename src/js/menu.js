import { createElement } from './utils';

const Menu = () => {
  const container = createElement('div', 'home');
  const titleContainer = createElement('div', 'home-title');
  const title = createElement('h1', undefined, 'Welcome To Our Menu');
  const paragraph = createElement('p', undefined, '<strong>Delicious food made by Dominicans served at your doorstep.</strong>');
  const listItems = ['Fresh food', 'Made at order', 'Fast service', 'Nice guys'];
  const list = document.createElement('ul');
  listItems.map(item => {
    const listItem = createElement('li', undefined, item);
    list.appendChild(listItem);
    return true;
  });

  titleContainer.appendChild(title);
  titleContainer.appendChild(paragraph);
  titleContainer.appendChild(list);

  container.appendChild(titleContainer);

  document.getElementById('content').appendChild(container);
};

export default Menu;
