let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
const quizArray = [
    {
        id: "0",
        question: "Panimalar Engineering College Located In?",
        options: ["Poonamalle", "Silukuvarpatti", "Madurai", "Coimbatore"],
        correct: "Poonamalle",
    },
    {
        id: "1",
        question: "Panimalar Engineering College Known As?",
        options: ["Mortury", "Hell", "Jail", "All Of The Above"],
        correct: "All Of The Above",
    },
    {
        id: "2",
        question: "Who Is K.MANI In Panimalar Engineering College?",
        options: ["Professor", "PT Sir", "Principal", "Circus Man"],
        correct: "Principal",
    },
    {
        id: "3",
        question: "Do Girls Boys Can Talk In Panimalar Engineering College?",
        options: ["Vaipuilla Raja😂", "Definitely No", "No", "Absoultly No"],
        correct: "Vaipuilla Raja😂",
    },
    {
        id: "4",
        question: "Who Said Entry Is Not Important Exit Is Important?",
        options: ["Muthu Novv", "Anbu Novv", "Guna Novv", "Jeppiar Bro"],
        correct: "Jeppiar Bro",
    },
    {
        id: "5",
        question: "Students Scared By Seeing In Panimalar Engineering College?",
        options: ["Principal", "Attender", "Walkie Talkie and Scooter🤬", "Teachers"],
        correct: "Walkie Talkie and Scooter🤬",
    }, {
        id: "6",
        question: "Which Transport Allowed Inside The College Campus?",
        options: ["SubMarine", "SportsBike", "SuperCar", "None Of The Above"],
        correct: "None Of The Above",
    },
    {
        id: "7",
        question: "How Many Canteens Are There In Campus",
        options: ["7", "5", "2", "0"],
        correct: "0",
    },
    {
        id: "8",
        question: "What Is The Dress Code Of Panimalar Engineering College?",
        options: ["Jeans Shirt And Pants", "Formals", "Lungi And Saree", "Vesti Sattai"],
        correct: "Formals",
    },
    {
        id: "9",
        question: "How The College Life Would Be For The Students?",
        options: ["Neraga Valkai", "Man Vs Wild", "Kallu Vodaikura Jailuu", "All Of The Above"],
        correct: "All Of The Above",
    },
    {
        id: "10",
        question: "Mindset Of Students After Joing College?",
        options: ["Mudichi Vitinga Ponga", "Enna Elavu Daa Idhuu", "Notitu Pochi Thambi", "All Of The Above",],
        correct: "All Of The Above",
    },


    {
        id: "11",
        question: "Panimalar Is The Best Engineering College In Tamil Nadu?",
        options: [

            "True",
            "False"

        ],
        correct: "False",

    },

    {
        id: "12",
        question: "Which Culturals Will Be Celebrated In Panimalar Engineeing College?",
        options: [

            "See Next Option",
            "See Next Option",
            "Adhula Onum Illa Potruu😂",

        ],
        correct: "Adhula Onum Illa Potruu😂",

    },
    {
        id: "13",
        question: "When Panimalar Engineering College Established?",
        options: [
            "100 BC",
            "400 BC",
            "2000",

        ],
        correct: "2000",

    },
    {
        id: "14", 
        question: "How Many Minutes Is Faster Than Normal Speed In Panimalar Engineering College?",
        options: [

            "20", 
            "25",
            "30",
            "45",

        ],
        correct: "30",

    },
    {
        id: "15",
        question: "Which Natural Living Being In Panimalar Enginneering College Is Most?",
        options: [

            "Birds(Bats,Pigeons,Crows)",
            "Snakes(Friends,Enemies)",
            "Dogs(Attenders,Watchmen,Wardens)",
            "All of the above."

        ],
        correct: "All of the above.",

    },
    {
        id: "16",
        question: "How Was The Faculty Teaching?",
        options: [

            "Explaing PPT",
            "Sending PDF",
            "Teaching Until The Semester Ends",
            "All A,B,C Are Correct"
        

        ],
        correct: "All A,B,C Are Correct",

    },
    {
        id: "17",
        question: "How Much Distance Is From Arch To The Classes In College?",
        options: [

            "After Seven Seas",
            "Distance From Earth To Moon",
            "Dho Kilometer Bhaiya",
            "800KM"

        ],
        correct: "Dho Kilometer Bhaiya",

    },
    {
        id: "18",
        question: "Is Panimalar Engineering College Is A Best College According To The Parents?",
        options: [

            "true",
            "false"

        ],
        correct: "True",

    },
    {
        id: "19",
        question: "Why You Joined This College Among The Lot Of Best College In Chennai?",
        options: [

            "Parents Sethu Vitanga",
            "Pudichiruku Avolodhan",
            "Sapadu Nalla Irukum Sonnaga(Foodie)"

        ],
        correct: "Sapadu Nalla Irukum Sonnaga(Foodie)",

    },
    {
        id: "20",
        question: "which Department Is Enjoying The College Life Perfectly?",
        options: [

            "Computer Science And Engineering(CSE)😭",
            "Artificial Intelligence And Data Science(AIDS)😬",
            "Electrical And Electronics Engineering(EEE)🕺💃",
            "Electronics And Communication Engineering(ECE)😳"

        ],
        correct: "Electrical And Electroncis Engineering(EEE)🕺💃",

    },
    {
        id: "21",
        question: "What Is The Timing Of Panimalar Engineering(including bus and hostel)?",
        options: [

            "5.00 AM to 5.00 PM(BUS)🤬",
            "6.00 AM to 3.30 PM(HOSTEL)😁",
            "Both A and B"

        ],
        correct: "Both A and B",

    },
    {
        id: "22",
        question: "One Emoji After The Lunch Break Bell Rang?",
        options: [

            "🥵",
            "🕺💃",
            "🤩",
            "🫢"

        ],
        correct: "🕺💃",

    },
    {
        id: "23",
        question: "How Could You Survive In Panimalar Engineering College",
        options: [

            "Thaa Pathukalam",
            "Ellam En Thala Eluthuu",
            "Pora Pokkula Poga Vendiyathu Dhan"

        ],
        correct: "Thaa Pathukalam",

    },
    {
        id: "24",
        question: "If You Have A Chance To Join Your GrandSon In This College,Can You?",
        options: [

            "No🙅",
            "Yes"

        ],
        correct: "No🙅",

    }
];
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});
nextBtn.addEventListener(
    "click",
    (displayNext = () => {

        questionCount += 1;

        if (questionCount == quizArray.length) {

            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");

            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {

            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";

            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });

    quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {

    quizArray.sort(() => Math.random() - 0.5);

    for (let i of quizArray) {

        i.options.sort(() => Math.random() - 0.5);

        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");

        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    clearInterval(countdown);

    options.forEach((element) => {
        element.disabled = true;
    });
}

function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};