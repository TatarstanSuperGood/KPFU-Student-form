var countOfExams = 0;

function addExam() {
    countOfExams++;
    numberOfExam = "subject" + countOfExams;
    ballOfExam = "ball" + countOfExams;
    addEx.insertAdjacentHTML("beforebegin", "" +
        "<p></p>\n" +
        "    <select class='student-choose' id='" + numberOfExam + "' >\n" +
        "        <option value>Не выбрано</option>\n" +
        "        <option value=\"информатика\"> Информатика </option>\n" +
        "        <option value=\"математический анализ\"> Математический анализ </option>\n" +
        "        <option value=\"операционные системы и сети\"> ОСИС </option>\n" +
        "        <option value=\"теория вычислительных процессов\"> ТВП </option>\n" +
        "        <option value=\"дискретная математика\"> Дискретная математика </option>\n" +
        "        <option value=\"английский язык\"> Английский язык </option>\n" +
        "    </select>\n" +
        "    <input class='student-input-ball' placeholder='Балл' id='" + ballOfExam + "'>" +
        "</p>")
}

function sendForm() {
    alert("Вы уверены, что хотите отправить форму?")

    let firstName = document.getElementById("student-name-first").value;
    let midName = document.getElementById("student-name-middle").value;
    let lastName = document.getElementById("student-name-last").value;
    let gender;
    let group = document.getElementById("student-groups").value;
    let events = document.getElementById("student-contents").value;

    if (document.getElementById("student-gender-male").checked){
        gender = "мужской";
    } else if (document.getElementById("student-gender-female").checked){
        gender = "женский";
    }
    console.log(lastName + " " + firstName + " " + midName + ". Пол - " + gender + ". Группа - " + group);
    console.log("Мероприятия: " + events);

    let average = 0;
    for (let i = 1; i <= countOfExams; i++) {
        numberOfExam = "subject" + i;
        ballOfExam = "ball" + i;
        let subjet = new Subjet();
        subjet.setSubjName(document.getElementById(numberOfExam).value);
        subjet.setSubjBall(document.getElementById(ballOfExam).value);
        average = average + parseInt(document.getElementById(ballOfExam).value);
        console.log(subjet.subjName + " - " + subjet.ball);
    }
    average = average/countOfExams;
    console.log("Средний балл за экзамены = " + average);
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