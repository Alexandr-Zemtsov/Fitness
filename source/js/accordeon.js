const accordeons = document.querySelectorAll('.accordeon-faq__item');

const makeAccordeon = () => {
  accordeons.forEach((element) => {
    const btnAccordeon = element.querySelector('.accordeon-faq__button');
    const questionAccordeon = element.querySelector('h3');
    const answerAccordeon = element.querySelector('.accordeon-faq__block-body');

    btnAccordeon.addEventListener('click', () => {
      element.classList.toggle('accordeon-faq__item--active');
      btnAccordeon.classList.toggle('accordeon-faq__button--open');

      if(element.classList.contains('accordeon-faq__item--active')) {
        answerAccordeon.setAttribute('aria-hidden', 'false');
        btnAccordeon.setAttribute('aria-expanded', 'true');
      } else if(!element.classList.contains('accordeon-faq__item--active')) {
        answerAccordeon.setAttribute('aria-hidden', 'true');
        btnAccordeon.setAttribute('aria-expanded', 'false');
      }
    });

    questionAccordeon.addEventListener('click', () => {
      element.classList.toggle('accordeon-faq__item--active');
      btnAccordeon.classList.toggle('accordeon-faq__button--open');

      if(element.classList.contains('accordeon-faq__item--active')) {
        answerAccordeon.setAttribute('aria-hidden', 'false');
        btnAccordeon.setAttribute('aria-expanded', 'true');
      } else if(!element.classList.contains('accordeon-faq__item--active')) {
        answerAccordeon.setAttribute('aria-hidden', 'true');
        btnAccordeon.setAttribute('aria-expanded', 'false');
      }
    });
  });

};

export { makeAccordeon };
