//UI Logic

$(document).ready(function() {

    $("#next").click(function() {
        numberOfTeachers.push($("#teachers2").val())

        for (var i = 1; i <= numberOfTeachers[0]; i++) {
            $("#teacherInput").append('<form class="teacherDetails">' + '<label for="teachersName' + i + '" >Teacher\'s Name:</label><input type="text" class="form-control" placeholder="Teacher\'s Name" id="teachersName' + i + '>' + '<br><br>' + '<label for="teachersId' + i + '">Teacher\'s Id:</label>' + '<input type="text" class="form-control" placeholder="Teacher\'s Id" id="teachersId' + i + '">' + '</form><hr>')

        }

        numberOfSubjects.push($("#subjects2").val());

        for (var k = 1; k <= numberOfSubjects[0]; k++) {
            $("#numberOfSubjects").append('<form><label for=subjectName' + k + '>Name of Subject:</label><input type="text" class="form-control" placeholder="Name OF Subject" id="subjectName"' + k + '></form>')
        }
        $("#submitForm").show();
        $("#next").hide();
        $(".hidden").hide();
        $("#teachers").append("<h3>Please Input the names and ids of all the " + numberOfTeachers[0] + " teachers in the respective fields</h3>")
        $("#subjects").append("<h3>Please Input the names  of all the " + numberOfSubjects[0] + " subjects in the respective fields</h3>")
    });

    $("#submit").click(function() {
        $(".table-responsive").show();
        $("#forms").hide();
        $("#submitForm").hide();
    })



    for (var j = 1; j <= numberOfTeachers[0]; j++) {
        teacherNames.push($("#teachersName" + j).val());
    }





    for (var m = 1; m <= numberOfSubjects[0]; m++) {
        nameOfSubjects.push($("#subjectName" + m).val());
    }

    $(".td").each(function() {
        $(this).text(ranSubject());
    });
});