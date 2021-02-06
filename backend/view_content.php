<?php
include 'connection.php';

$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$category = $obj['category'];
$placeId = $obj['placeId'];

$result = mysqli_query($link, "SELECT * FROM content WHERE place_id='$placeId' AND category='$category'");

if($result->num_rows>0) {
    while($row[] = $result->fetch_assoc()) {
        $Item=$row;
        $json = json_encode($Item);
    }
}else {
    echo 'connection error';
}

echo $json;

mysqli_close($link);
