const price = document.querySelector('.price');

const createTabsPrice = () => {

  const tabNav = price.querySelectorAll('.price__button-nav');
  const tabContent = price.querySelectorAll('.price__item');

  tabNav.forEach((element) => {
    element.addEventListener('click', (event) => {
      const tabNavTarget = event.target.getAttribute('data-tab-name');
      tabNav.forEach((el) =>{
        el.classList.remove('price__button-nav--active');
      });

      tabContent.forEach((el) => {
        el.classList.remove('price__item--active');
      });

      element.classList.add('price__button-nav--active');
      const tabContentCurrent = document.getElementById(tabNavTarget);
      tabContentCurrent.classList.add('price__item--active');
    });
  });
};

export { createTabsPrice };
