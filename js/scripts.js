//UI Logic

$(document).ready(function() {

    $("#next").click(function() {
        numberOfTeachers.push($("#teachers2").val())

        for (var i = 1; i <= numberOfTeachers[0]; i++) {
            $("#teacherInput").append('<div class=" form-group teacherDetails">' + '<label for="teachersName' + i + '" >Teacher\'s Name:</label><input type="text" class="form-control" placeholder="Teacher\'s Name" id="teachersName' + i + '>' + '<br><br>' + '<label for="teachersId' + i + '">Teacher\'s Id:</label>' + '<input type="text" class="form-control" placeholder="Teacher\'s Id" id="teachersId' + i + '">' + '</div><hr>')

        }

        numberOfSubjects.push($("#subjects2").val());

        for (var k = 1; k <= numberOfSubjects[0]; k++) {
            $("#numberOfSubjects").append('<div class="form-group" ><label for=subjectName' + k + '>Name of Subject:</label><input type="text" class="form-control" placeholder="Name OF Subject" id="subjectName' + k + '"</div>')
        }
        $("#submitForm").show();
        $("#next").hide();
        $(".hidden").hide();
        $("#teachers").append("<h3>Please Input the names and ids of all the " + numberOfTeachers[0] + " teachers in the respective fields</h3>")
        $("#subjects").append("<h3>Please Input the names  of all the " + numberOfSubjects[0] + " subjects in the respective fields</h3>")
    });

    $("#submit").click(function() {

        event.preventDefault();

        for (var j = 1; j <= numberOfTeachers[0]; j++) {
            teacherNames.push($("#teachersName" + j).val());
        }


        for (var m = 1; m <= numberOfSubjects[0]; m++) {
            subjectName.push($("input#subjectName" + m).val());
        }


        $("#subjectName7").css("color", "yellow");

        $(".td").each(function() {
            $(this).text(ranSubject());
        });

        $(".table-responsive").show();
        $("#forms").hide();
        $("#submitForm").hide();
        $("#print").show();

    });


});

function printTable() {
    var divToPrint = document.getElementById("printableTable");
    newWin = window.open("");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
}