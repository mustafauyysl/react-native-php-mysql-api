<?php
    $link = mysqli_connect('localhost', 'dbname', 'password','username');
	
    if(!$link) {
        echo "connection error";
    }
