<?php
	/// mysql database connection
	
	$servername = "localhost";
	$username = "user_dbmysql";
	$password = "N1d3l0c0t3l4d0y.08";
	$dbname = "test";
	
	$conec = mysqli_connect($servername, $username, $password, $dbname);

	if (!$conec) {
		echo "Error: No conection to MySQL." . PHP_EOL;
		echo "errno depuration: " . mysqli_connect_errno() . PHP_EOL;
		exit;
		}
?>