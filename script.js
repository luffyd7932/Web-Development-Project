const startbtn = document.querySelector(".start-btn");
const popup = document.querySelector(".popup");
const exitbtn = document.querySelector(".ebtn");
const main = document.querySelector(".main");
const cont=document.querySelector(".contbtn");
const quizSection=document.querySelector(".qs");


startbtn.onclick = () => {
    popup.classList.add('active');
    main.classList.add('active');

}
exitbtn.onclick = () => {
    popup.classList.remove('active');
    main.classList.remove('active')
}
 
contbtn.onclick=() =>{
    quizSection.classList.add('active');
    showQuestion(0);
    headScore();
}