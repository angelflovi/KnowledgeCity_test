<?php

	/// Session ///// 
	session_start();
	if(isset($_SESSION['login_knolodgecity']))
	{
		$resAjax='true';
	}
	else
	{
		$resAjax='false';
	}
	
	echo json_encode($resAjax);

?>