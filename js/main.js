var countOfExams = 0;

function addExam() {
    countOfExams++;
    numberOfExam = "subject" + countOfExams;
    ballOfExam = "ball" + countOfExams;
    addEx.insertAdjacentHTML("beforebegin", "" +
        "<p></p>\n" +
        "    <select class='student-choose' id='" + numberOfExam + "' >\n" +
        "        <option value>Не выбрано</option>\n" +
        "        <option value=\"inf\"> Информатика </option>\n" +
        "        <option value=\"matan\"> Математический анализ </option>\n" +
        "        <option value=\"osis\"> ОСИС </option>\n" +
        "        <option value=\"tvp\"> ТВП </option>\n" +
        "        <option value=\"ekon\"> Экономика </option>\n" +
        "        <option value=\"angl\"> Английский язык </option>\n" +
        "    </select>\n" +
        "    <input class='student-input-ball' placeholder='Балл' id='" + ballOfExam + "'>" +
        "</p>")
}

function sendForm() {
    alert("Вы уверены, что хотите отправить форму?")

    let firstName = document.getElementById("student-name-first").value;
    let midName = document.getElementById("student-name-middle").value;
    let lastName = document.getElementById("student-name-last").value;
    //let gender =

    console.log(lastName + " " + firstName + " " + midName);
}

class Subjet {
    constructor() {
    }
    setSubjName(name){
        this.subjName = name;
    }

    setSubjBall(ball){
        this.ball = ball;
    }
}