<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "test";

$table = 'project';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

 
 
$sql = "SELECT * FROM {$table}";
$result = $conn->query($sql);

$jsonData = array();
while ($array = mysqli_fetch_array($result)) {
    $jsonData[] = $array;
}
echo json_encode($jsonData);

// $row = array();

// while($row = mysql_fetch_array($sql))
// {
//    $results[] = array(
//       'title' => base64_decode($row['title']),
//       'price' => $row['price'],
//       'seller_user' => $row['user']
//    );
// }
// $json = json_encode($results);
// print $json;
 

// if ($conn->query($sql) === TRUE) {
   
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }

$conn->close();
?>