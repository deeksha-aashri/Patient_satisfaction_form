
//The validateForm function validates each field that is to ensure that all the fileds in the field have been provided the input by the user otherwise it alerts a message asking them to fill all the fields
function validateForm() {
    var name = document.forms["surveyForm"]["name"].value;
    var fileNumber = document.forms["surveyForm"]["fileNumber"].value;
    var unit = document.forms["surveyForm"]["unit"].value;
    var overallTreatment = document.forms["surveyForm"]["overallTreatment"].value;
    var medicalFacilities = document.forms["surveyForm"]["medicalFacilities"].value;

    if (name == "" || fileNumber == "" || unit == "" || overallTreatment == "" || medicalFacilities == "") {
        alert("Please fill out all required fields.");
        return false;
    }
}


//Once the user clicks Reset button the data from the fields is erased and in case the user had selected others as the hospital unit it also vanishes the textbox that might have appeared.
function resetForm() {
   
    let ele=document.getElementById("others")
    console.log(ele);
    if(ele.style.display=="block"){
        ele.style.display = "none";
    }
    document.getElementById("surveyForm").reset();
//     document.getElementById("others").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    var unitSelect = document.getElementById("unit");
    var othersInput = document.getElementById("others");

    unitSelect.addEventListener("change", function() {
        if (unitSelect.value == "Others") {
            othersInput.style.display = "block";
        } else {
            othersInput.style.display = "none";
        }
    });
});