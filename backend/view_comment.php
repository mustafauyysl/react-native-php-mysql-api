<?php
include 'connection.php';

$json = file_get_contents('php://input');
$obj = json_decode($json,true);
$contentId = $obj['contentId'];

$result = mysqli_query($link, "SELECT * FROM comment WHERE content_id='$contentId'");

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
