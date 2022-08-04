<?php
session_start();
session_regenerate_id(true);
include_once("db_connect.php");
		
/// Login POST///// 
switch ($_SERVER['REQUEST_METHOD']) 
		{ 
		case 'POST':							
			$sql = '';
			$resAjax = '';
			$resAjax='Wrong Username or Password';
						
			$username = $_POST['iduser'];
			$password = $_POST['idpassword'];
			
			$sql = "select username, password, count(1) as regs from api_users where username='$username' and password='$password'";
			$result = $conec->query($sql);
		    $res = $result -> fetch_array(MYSQLI_ASSOC);
			
			if($res['regs']==1)
			{
				if($res['username']==$username and $res['password']==$password)
				{
				  $resAjax='true';
				  $_SESSION['login_knolodgecity']=$res['username'];
				}
			}
			
			$result -> free_result();
			mysqli_close($conec);
			echo json_encode($resAjax);
		
		break;
		 
		 /// Load table and data GET///// 
		 case 'GET':
		 
		 	$tr = '';
			$trenc = '';
			
			$sql = "select * from students";
			$result = $conec->query($sql);
		    
			$table='<table id="myTable" class="stripe">
			<thead>
				<tr>
					<th></th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>';
			
			while($row = $result -> fetch_array(MYSQLI_ASSOC)){				
				$tr.='<tr>
					<td><img src="assets/check.png" width="25" height="25" /></td>
					<td><div>'.$row['number'].'</div><br>'.$row['name'].'</br></td>
					<td><div>'.".....".'</div><br>'.$row['group'].'</br></td>
					</tr>';
			}
			$table.=$tr;
			$table.='</tbody></table>';
			
			$table = utf8_encode($table);
			$resAjax['table'] = $table;
			echo json_encode($resAjax);	
		 
		 break;
		 
		 /// Log out DELETE/////
		 case 'DELETE':
		 	session_destroy();
		 	$resAjax='false';
		 	echo json_encode($resAjax);
		 break;
		 
		}

?>