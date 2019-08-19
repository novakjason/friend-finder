$("#submit-survey").on("click", function() {

    function validate() {
        var isValid = true;
        $(".form-control").each(function() {
            if ($(this).val() === "") {
                isValid = false;
            }
        });
        return isValid;
    }

    if (validate()) {

        let userData = {
            name: $("#name").val(),
            photo: $("#imageURL").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val(),
                $("#q11").val(),
                $("#q12").val(),
                $("#q13").val(),
                $("#q14").val(),
                $("#q15").val(),
                $("#q16").val(),
                $("#q17").val(),
                $("#q18").val(),
                $("#q19").val(),
                $("#q20").val()
            ]
        };

        let currentURL = window.location.origin;

        $.post(currentURL + "/api/friends", userData, function(data) {

            $("#matchName").text(data.name);
            $("#matchImage").attr("src", data.photo);

            $("#results").modal("toggle");
        });
    } else {
        alert("Please fill out all fields!");
    }
    return false;
});