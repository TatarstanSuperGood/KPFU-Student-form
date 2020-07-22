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

    let testBall = 0;

    if (document.getElementById("competitions").value == "yes"){
        testBall = testBall + 2;
    }
    if (document.getElementById("publicSpeech").value == "no"){
        testBall++;
    }

    if (document.getElementById("teamWork").value == "yes"){
        testBall++;
    }

    if (document.getElementById("spendingTime").value == "yes"){
        testBall++;
    }

    if (document.getElementById("combination").value == "yes"){
        testBall++;
    }

    if ((average > 70) && testBall > 3 ){
        console.log("Подходит, желаемая сфера - " + document.getElementById("choose").value);
        sendButton.insertAdjacentHTML("afterend","<p class='student-result'>Вы нам подходите, ваши данные будут рассмотрены.</p>");
    } else {
        console.log("Не подходит");
        if (average <= 70){
            sendButton.insertAdjacentHTML("afterend","<p class='student-result'>Необходим средний балл не менее 71. " +
                "К сожалению, вы нам не подходите</p>");
        } else sendButton.insertAdjacentHTML("afterend","<p class='student-result'>К сожалению, вы нам не подходите</p>");
    }
}

function callbackAllSave()
{
    let firstName = document.getElementById("student-name-first").value;
    let midName = document.getElementById("student-name-middle").value;
    let lastName = document.getElementById("student-name-last").value;
    let gender;
    let group = document.getElementById("student-groups").value;
    let test1 = document.getElementById('competitions').value;
    let test2 = document.getElementById("student-contents").value;
    let test3 = document.getElementById('publicSpeech').value;
    let test4 = document.getElementById('teamWork').value;
    let test5 = document.getElementById('spendingTime').value;
    let test6 =  document.getElementById('combination').value;
    let test7 = document.getElementById('choose').value;

    save_data = {
        fName: firstName,
        mName: midName,
        lName: lastName,
        group: group,
        test1: test1,
        test2: test2,
        test3: test3,
        test4: test4,
        test5: test5,
        test6: test6,
        test7: test7,
    }
    json = JSON.stringify(save_data);
    localStorage.setItem('save_data', json);

}
function callbackAllInputs()
{
    var retrievedObject = JSON.parse(localStorage.getItem('save_data'));
    console.log(retrievedObject);
    document.getElementById('student-name-first').value = retrievedObject.fName;
    document.getElementById('student-name-middle').value = retrievedObject.mName;
    document.getElementById('student-name-last').value = retrievedObject.lName;
    document.getElementById('student-groups').value = retrievedObject.group;
    document.getElementById('competitions').value = retrievedObject.test1;
    document.getElementById('student-contents').value = retrievedObject.test2;
    document.getElementById('publicSpeech').value = retrievedObject.test3;
    document.getElementById('teamWork').value = retrievedObject.test4;
    document.getElementById('spendingTime').value = retrievedObject.test5;
    document.getElementById('combination').value = retrievedObject.test6;
    document.getElementById('choose').value = retrievedObject.test7;
}
function clearAllInputs() {
    document.getElementById('student-name-first').value = '';
    document.getElementById('student-name-middle').value = '';
    document.getElementById('student-name-last').value = '';
    document.getElementById('student-groups').value = '';
    document.getElementById('student-contents').value = '';
    document.getElementById('competitions').value = '';
    document.getElementById('student-contents').value = '';
    document.getElementById('publicSpeech').value = '';
    document.getElementById('teamWork').value = '';
    document.getElementById('spendingTime').value = '';
    document.getElementById('combination').value = '';
    document.getElementById('choose').value = '';

    for (let i = 1; i <= countOfExams; i++) {
        numberOfExam = "subject" + i;
        ballOfExam = "ball" + i;
        document.getElementById(numberOfExam).remove();
        document.getElementById(ballOfExam).remove();
    }
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