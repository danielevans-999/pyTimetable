//UI Logic
numberOfTeachers.push(8);

for (var i = 1; i <= numberOfTeachers[0]; i++) {
    $("#one").append('<form class="teacherDetails">' + '<label for="teachersName' + i + '" >Teacher\'s Name:</label><input type="text" class="form-control" placeholder="Teacher\'s Name" id="teachersName' + i + '>' + '<br><br>' + '<label for="teachersId' + i + '">Teacher\'s Id:</label>' + '<input type="text" class="form-control" placeholder="Teacher\'s Id" id="teachersId' + i + '">' + '</form><hr>')

}