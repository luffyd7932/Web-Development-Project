let questionCount=0;
let questionNumb=1;
let userScore=0;

const nxtBtn=document.querySelector('.nxtbtn');
    nxtBtn.onclick = () =>{
        if(questionCount<questions.length  ){
        
        showQuestion(questionCount);
        questionCount++;
        
        questionCounter(questionNumb);
        questionNumb++;
        }
        else{
            showResult();  
        }
    }

optionList=document.querySelector('.optl');
function showQuestion(index){
    const questionText=document.querySelector(".question-list");
    questionText.textContent= `${questions[index].numb} .${questions[index].question}`;

    let optionTag= `<div class="option"><span> ${questions[index].options[0]}</span></div>
    <div class="option"><span> ${questions[index].options[1]}</span></div>
    <div class="option"><span> ${questions[index].options[2]}</span></div>
    <div class="option"><span> ${questions[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag;

    const option=document.querySelectorAll('.option');
    for(let i = 0;i<option.length;i++)
    {
        option[i].setAttribute('onclick','optionSelected(this)');

    }
}
function optionSelected(answers){
    let userAnswer=answers.textContent;
    let correctAnswer=questions[questionCount-1].answers;
    let allOptions=optionList.children.length;
        //  console.log(userAnswer);
        // console.log(correctAnswer);
      if(userAnswer == correctAnswer){
            // console.log("answer is correct ")
             answers.classList.add('correct');
             userScore+=1;
             headScore(); 
          }
      else{
         // console.log("answer is wrong")
          answers.classList.add('incorrect');
          for(let i=0;i<allOptions;i++){
            if(optionList.children[i].textContent==correctAnswer){
                optionList.children[i].setAttribute('class','option correct');
            }
          }
          }
          for(let i=0;i<allOptions;i++){
            optionList.children[i].classList.add('dissabled')
          }
}
function questionCounter(index){
    const questionTotal=document.querySelector('.QNO');
    questionTotal.textContent=`${index } of 5`
}
function headScore() {
    const headScoreText=document.querySelector('.score');
    headScoreText.textContent=`Score: ${userScore} / 5`;
}
const resultBox=document.querySelector('.result-box');
const restxt=document.querySelector(".score-text");
const resqb=document.querySelector('.qb')
function showResult(){
    restxt.textContent=`${userScore} out of 5`
    resqb.classList.add('active')
    resultBox.classList.add('active');
}
 let questions = [ 
    {
        numb: 1,
        question:"Which movie has won the maximum awards?",
        answers:" The Lord Of The Rings",
            options:[ "The Lord Of The Rings",
             "Titanic",
             "Lagaan",
            "Avengers-The End Game"
        ]
    },
    
    {
        numb: 2,
        question:"Madhuri Dixit's name in N Chandra's 'Tezaab' was ...?",
        answers:" Mohini",
            options: [ "Sunandha",
             "Mohini",
             "Priya",
             "Radha"
        ]
    },
    {
        numb: 3,
        question:"Oscar Wining short documentary film 'Smile Pinki'(2008) was directed by....",
        answers:" Megan Mylan",
            options: [ "Megan Mylan",
             "Michael Curtiz",
             "Charlie Chaplin",
             "Alfred Hitchcock"
        ]
    },
    {
        numb: 4,
        question:"Aishwarya Rai was crowned Miss World in which year?",
        answers:" 1994",
            options: [ "1995",
                         "1994",
                        "1993",
                         "1996"
                    ]
    },
    {
        numb: 5,
        question:"Which Indian movie won The OSCAR Award in year 2023?",
        answers:" RRR",
         options: [ "RRR",
                    "Brahmastra",
                    "Sooryavanshyam",
                    "Boys 3"
                 ]
    },
];