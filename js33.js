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
        question : "What does HTML stand for?",
        answers:" Hyper Text Markup Language",
            options:[ "Hyper Text Markup Language",
             "Hyper Text Makeup Language",
             "Hyperlinks and Texts Markup Language",
            "All of the above"
        ]
    },
    {
        numb: 2,
        question:"Who is making the Web standards?",
        answers:" The World Wide Web Consortium",
            options: [ "Google",
             "Mozilla",
             "The World Wide Web Consortium",
             "Microsoft"
        ]
    },
    {
        numb: 3,
        question:"Where in an HTML document is the correct place to refer to an external style sheet?",
        answers:" in the head section",
            options: [ "in the body section",
             "in the main section",
             "in the meta tag",
             "in the head section"
        ]
    },
    {
        numb: 4,
        question:"Which HTML tag is used to define an internal style sheet?",
        answers:" style",
            options: [ "script",
                         "style",
                        "css",
                         "design"
                    ]
    },
    {
        numb: 5,
        question:"How do you create a funtion in Javascript?",
        answers:" function myfunction()",
         options: [ "function = myfunction()",
                    "function myfunction()",
                    "function.myfunction",
                    "myfunction()"
                 ]
    },
];