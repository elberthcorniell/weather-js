export const handleData = (data) => {
  return { ...data.current, ...data.location };
}

export const createElement = (tag, className = '', content = '') => {
  if (tag === undefined) return false;
  const element = document.createElement(tag);
  element.className = className;
  element.innerHTML = content;
  return element;
};
