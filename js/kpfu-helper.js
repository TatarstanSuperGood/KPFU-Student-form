function loadGroups() {
    this.getAllGroups(document.getElementById("student-groups"));
}

function loadSubjects() {
    this.getAllSubjects(document.getElementById("student-subjects"));
}

function getAllGroups(groups) {
    let innerHTML = groups.innerHTML;

    innerHTML += '<option value="951">951</option>';
    innerHTML += '<option value="952">952</option>';
    innerHTML += '<option value="952">953</option>';

    groups.innerHTML = innerHTML;
}

function getAllSubjects(subjects) {
    let innerHTML = subjects.innerHTML;

    innerHTML += getSubject("Математический анализ", "mathematical-analysis");

    subjects.innerHTML = innerHTML;
}

function getSubject(name, id) {
    return '<p class="student-subject">' + name + ' <input class="student-input" id="' + id + '"></p>';
}