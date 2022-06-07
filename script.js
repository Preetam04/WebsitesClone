'strict mode';
//Drop down menu
const arrQuestions = document.querySelectorAll('.faq-list');
const arrAnswers = document.querySelectorAll('.faq-answer');
const arrAnswerPara = document.querySelectorAll('.faq-para');
const cross = document.querySelectorAll('.cross');
let isOpen = false;

arrQuestions.forEach((ele, i) => {
  ele.addEventListener('click', e => {
    const answer = arrAnswers[i];

    arrAnswers.forEach((ele, i) => {
      ele.classList.remove('faq-answer2');
      cross[i].classList.remove('rotate-[0]');
    });
    if (!isOpen) {
      answer.classList.add('faq-answer2');
      cross[i].classList.add('rotate-[0]');
      isOpen = true;
    } else {
      isOpen = false;
    }
  });
});
