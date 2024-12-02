const faq = document.querySelector('.faq');

const createTabsFaq = () => {

  const tabNav = faq.querySelectorAll('.faq__button-tabs');
  const tabContent = faq.querySelectorAll('.faq__tabs-content-item');

  tabNav.forEach((element) => {
    element.addEventListener('click', (event) => {
      const tabNavTarget = event.target.getAttribute('data-tab-name');
      tabNav.forEach((el) => {
        el.classList.remove('faq__button-tabs--active');
      });

      tabContent.forEach((el) => {
        el.classList.remove('faq__tabs-content-item--active');
      });

      element.classList.add('faq__button-tabs--active');
      const tabContentCurrent = document.getElementById(tabNavTarget);
      tabContentCurrent.classList.add('faq__tabs-content-item--active');
    });
  });
};

export { createTabsFaq };
