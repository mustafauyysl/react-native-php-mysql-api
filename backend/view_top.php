<?php
include 'connection.php';

$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$top = 1;
$placeId = $obj['placeId'];

$result = mysqli_query($link, "SELECT * FROM content WHERE content_top='$top' AND place_id='$placeId'");

if(mysqli_num_rows($result)) {
    while($row[] = mysqli_fetch_assoc($result)) {
        $json = json_encode($row);
    }
}else {
    echo 'connection error';
}

echo $json;

mysqli_close($link);

?>