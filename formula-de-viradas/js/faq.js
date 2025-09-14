(function(){

const question = document.querySelectorAll("#faq .question");
const questionParagraphs = document.querySelectorAll("#faq .question p");

question.forEach(q =>{
  q.classList.add("close");
  questionParagraphs.forEach(p =>{
    p.style.height = `0px`;
  })
});

question.forEach((q, i) => {
  q.addEventListener("click", function openOrClose(){

  const haveClass = q.classList.value.includes("close");

  if(haveClass){
      question[i].classList.remove("close");
      question[i].classList.add("open");
      questionParagraphs[i].style.height = `${questionParagraphs[i].scrollHeight}px`;
    }else{
    questionParagraphs[i].style.height = `0px`;
      question[i].classList.remove("open");
      question[i].classList.add("close");
  }
  });
});

})();