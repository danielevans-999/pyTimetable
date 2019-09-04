//UI Logic
numberOfTeachers.push(8);

for (var i = 1; i <= numberOfTeachers[0]; i++) {
    $("#one").append('<form class="teacherDetails">' + '<label for="teachersName' + i + '" >Teacher\'s Name:</label><input type="text" class="form-control" placeholder="Teacher\'s Name" id="teachersName' + i + '>' + '<br><br>' + '<label for="teachersId' + i + '">Teacher\'s Id:</label>' + '<input type="text" class="form-control" placeholder="Teacher\'s Id" id="teachersId' + i + '">' + '</form><hr>')

}

for (var j = 1; j <= numberOfTeachers[0]; j++) {
    teacherNames.push($("#teachersName" + j).val());
}

numberOfSubjects.push(5);

for (var k = 1; k <= numberOfSubjects[0]; k++) {
    $("#two").append('<form><label for=subjectName' + k + '>Name of Subject:</label><input type="text" class="form-group" placeholder="Name OF Subject" id="subjectName"' + k + '></form>')
}

for (var m = 1; m <= numberOfSubjects[0]; m++) {
    nameOfSubjects.push($("#subjectName" + m).val());
}