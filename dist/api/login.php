<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "test";

$table = 'Profiles';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$user = $_POST['username'];
$pass = $_POST['password'];

$sql = "SELECT * FROM Profiles WHERE username = '$user' AND password = '$pass'";

$result = $conn->query($sql);

$jsonData =  mysqli_fetch_assoc($result);

if( is_null($jsonData) ) {
	$data = [ 'success' => false, 'message' => "Incorrect Username or Password", 'results' => [] ];
	echo json_encode($data);
} else {
	$data = [ 'success' => true, 'message' => "Success", 'results' => $jsonData];
	echo json_encode($data);
}

$conn->close();
?>