const faq_button = document.querySelector('.faq__button');
const req_button = document.querySelector('.faq__button-srq');

function reqButtonHandler() {
    req_button.classList.toggle('faq__button-srq_enabled');
    faq_button.classList.toggle('faq__button_enabled');
    req_button.getAttribute('disabled');
    faq_button.removeAttribute('disabled');
    console.log('req')
};

function faqButtonHandler() {
    faq_button.classList.toggle('faq__button_enabled');
    faq_button.classList.toggle('faq__button-srq_enabled');

    console.log('req')
};


console.log(faq_button, req_button);

faq_button.addEventListener('click', faqButtonHandler);
req_button.addEventListener('click', reqButtonHandler);



