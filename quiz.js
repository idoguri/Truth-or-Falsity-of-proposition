let questions = [
    { "question": "命題「もし数が3の倍数であれば、その数は3で割り切れる。」は真か偽か。", "options": ["真", "偽"], "answer": "真" },
    { "question": "命題「もし数が偶数であれば、その数は2で割り切れる。」は真か偽か。", "options": ["真", "偽"], "answer": "真" },
    {
        "question": "命題「もし数が4で割り切れれば、その数は2で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が正の整数であれば、その数は0より大きい。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が素数であれば、その数は2で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし三角形が直角三角形であれば、その三角形の内角の和は180度である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が負の数であれば、その数は0より小さい。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が2の倍数であれば、その数は奇数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし四角形が長方形であれば、その四角形の内角の和は360度である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が10で割り切れるならば、その数は2で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が正の整数であれば、その数は偶数または奇数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし三角形が正三角形であれば、その三角形の各角度は60度である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が6で割り切れるならば、その数は2で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が5で割り切れるならば、その数は3で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし四角形が正方形であれば、その四角形の対角線は等しい。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が8で割り切れるならば、その数は4で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が3の倍数であれば、その数は偶数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし数が0で割り切れるならば、その数は0である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし数が素数であれば、その数は1とその数自身以外に約数がない。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし円が正円であれば、その円の半径は正である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が2の倍数であれば、その数は奇数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし三角形の内角が180度であれば、その形は三角形である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が負の整数であれば、その数は整数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし正方形が長方形であれば、その正方形の全ての角は直角である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が3の倍数であれば、その数は5の倍数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし数が正であれば、その数は0より大きい。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が整数であれば、その数は実数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし三角形の1つの角が90度であれば、その三角形は直角三角形である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし正方形が長方形であれば、その正方形の対角線は異なる長さである。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし数が2の倍数であれば、その数は4の倍数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし数が4で割り切れるならば、その数は2で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし三角形が正三角形であれば、その三角形の全ての辺の長さは等しい。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が3で割り切れるならば、その数は6で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし四角形が長方形であれば、その四角形の対角線は等しい。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし円が正円であれば、その円の直径は常に一定である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が負であれば、その数は0で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし数が整数であれば、その数は自然数または負の整数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし三角形が鋭角三角形であれば、その三角形の内角の和は180度である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし四角形が正方形であれば、その四角形の対角線の長さは異なる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし数が7で割り切れるならば、その数は7の倍数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が10の倍数であれば、その数は5で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が8で割り切れるならば、その数は2で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が偶数であれば、その数は3で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし三角形が直角三角形であれば、その三角形の1つの角が90度である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし正方形が長方形であれば、その正方形の全ての角度は直角である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が整数であれば、その数は小数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし数が自然数であれば、その数は正の整数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし四角形が平行四辺形であれば、その四角形の対角線は交わる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし三角形が鈍角三角形であれば、その三角形の1つの角が90度より大きい。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が6の倍数であれば、その数は2で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし円が正円であれば、その円の半径は0である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし数が奇数であれば、その数は2で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし数が10で割り切れるならば、その数は2で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし三角形が二等辺三角形であれば、その三角形には2つの角が等しい。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が3で割り切れるならば、その数は6で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし数が1で割り切れるならば、その数は1で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が2の倍数であれば、その数は3の倍数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし数が8の倍数であれば、その数は4の倍数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が1で割り切れるならば、その数は2で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし四角形が長方形であれば、その四角形の対角線は等しい。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし三角形が鈍角三角形であれば、その三角形の1つの角が90度未満である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし数が正の整数であれば、その数は自然数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし三角形が直角三角形であれば、その三角形の1つの角が60度である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし数が6で割り切れるならば、その数は3で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が3で割り切れるならば、その数は5で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし数が正であれば、その数は実数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が偶数であれば、その数は3で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし正方形が長方形であれば、その正方形の角度はすべて90度である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が負であれば、その数は正である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし数が4で割り切れるならば、その数は2で割り切れる。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし数が素数であれば、その数は正の整数である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「自然数mが12の約数ならば、mは24の約数でもある。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし三角形ABCが正三角形であれば、三角形ABCは二等辺三角形である。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "真"
    },
    {
        "question": "命題「もし(x-y)x=0であれば、x=yである。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    },
    {
        "question": "命題「もし三角形が鈍角三角形であれば、その三角形の各角度は90度より小さい。」は真か偽か。",
        "options": ["真", "偽"],
        "answer": "偽"
    }    
    // 追加の問題
];

let selectedQuestions = [];
let userAnswers = [];
let currentQuestionIndex = 0;

function startQuiz() {
    selectedQuestions = getRandomQuestions(questions, 5);
    currentQuestionIndex = 0;
    userAnswers = [];
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('quizHeading').style.display = 'block';
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('resultContainer').style.display = 'none';
    displayQuestion(selectedQuestions[currentQuestionIndex]);
}

function getRandomQuestions(questions, num) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function displayQuestion(questionObj) {
    document.getElementById('questionText').innerText = questionObj.question;
    const optionsHtml = questionObj.options.map(option => 
        `<button class="optionButton" onclick="submitAnswer('${option}')">${option}</button>`
    ).join('');
    document.getElementById('options').innerHTML = optionsHtml;
}

function submitAnswer(answer) {
    userAnswers.push({
        question: selectedQuestions[currentQuestionIndex].question,
        selectedAnswer: answer,
        correctAnswer: selectedQuestions[currentQuestionIndex].answer
    });
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion(selectedQuestions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    const score = userAnswers.filter(answer => answer.selectedAnswer === answer.correctAnswer).length;
    const totalQuestions = selectedQuestions.length;

    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'block';
    document.getElementById('quizHeading').style.display = 'none';
    
    const resultHtml = userAnswers.map((answer) => 
        `<div>
            <p><strong>問題:</strong> ${answer.question}</p>
            <p><strong>結果:</strong> ${answer.selectedAnswer === answer.correctAnswer ? '⭕️' : '❌'}</p>
            <p><strong>あなたの解答:</strong> ${answer.selectedAnswer}</p>
            <p><strong>正答:</strong> ${answer.correctAnswer}</p>
        </div>`
    ).join('');

    document.getElementById('resultList').innerHTML = resultHtml;
    document.getElementById('score').innerText = `得点: ${score} / ${totalQuestions}`;
}

function restartQuiz() {
    startQuiz();
    document.getElementById('resultContainer').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('quizHeading').style.display = 'block';
}