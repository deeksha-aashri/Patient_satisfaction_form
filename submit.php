<?php
// Set up database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "patient_survey";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST["name"];
$fileNumber = $_POST["fileNumber"];
$unit = $_POST["unit"];
$overallTreatment = $_POST["overallTreatment"];
$medicalFacilities = $_POST["medicalFacilities"];
$comments = $_POST["comments"];

// Insert data into database
$sql = "INSERT INTO patientdetails (name, file_number, unit, overall_treatment, medical_facilities, comments)
        VALUES ('$name', '$fileNumber', '$unit', '$overallTreatment', '$medicalFacilities', '$comments')";

if ($conn->query($sql) === TRUE) {
    echo "Survey submitted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
