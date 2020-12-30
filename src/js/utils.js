let tab = 1;

export const createElement = (tag, className = '', content = '') => {
  if (tag === undefined) return false;
  const element = document.createElement(tag);
  element.className = className;
  element.innerHTML = content;
  return element;
};

export const setTab = (newTab) => {
  tab = newTab;
};

export const getTab = () => tab;