<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "test";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$user = $_POST['username'];
$pass = $_POST['password'];

if ( empty($user) || empty($pass) || empty($lastname) || empty($firstname) ) {
	echo "IS this working";
} else {

	$sql = " INSERT INTO `test`.`Profiles` (`username`, `password`, `firstname`, `lastname`) VALUES ('$user', '$pass', '$firstname', '$lastname') ";

	if ( $conn->query( $sql ) === TRUE ) {
		$data = [ 'name' => $username, 'success' => true ];
		echo json_encode($data);
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
}

$conn->close();
?>