function loadGroups() {
    document.getElementById("student-groups").innerHTML = this.getAllGroups();
}

function loadSubjects() {
    document.getElementById("student-subjects").innerHTML = this.getAllSubjects(document.getElementById("student-subjects").innerHTML);
}

function getAllGroups() {
    var groups = "";

    groups += '<option value="951">951</option>';
    groups += '<option value="952">953</option>';
    groups += '<option value="952">953</option>';

    return groups;
}

function getAllSubjects(subjects) {
    subjects += getSubject("Математический анализ", "mathematical-analysis");

    return subjects;
}

function getSubject(name, id) {
    return '<p class="student-subject">' + name + ' <input class="student-input" id="' + id + '"></p>';
}