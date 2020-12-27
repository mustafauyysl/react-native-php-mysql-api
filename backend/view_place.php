<?php
include 'connection.php';

$json = file_get_contents('php://input');

$result = mysqli_query($link, "SELECT * FROM place");

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
