const priceBlocks = document.querySelectorAll('.card-price__block-price');

const createSpan = (tag, className) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.setAttribute('aria-hidden', 'true');

  return element;
};

const price = createSpan('span', 'card-price-span');

const renderSpan = () => {

  for (let i = 0; i <= priceBlocks.length - 1; i++) {
    const block = priceBlocks[i];
    const clone = price.cloneNode(true);
    block.append(clone);
    clone.textContent = block.textContent;
  }
};

export { renderSpan };
