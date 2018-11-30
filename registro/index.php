<!DOCTYPE html>
<html lang="es">
<head>
	<title>AOM Subscription Manager</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="../favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="../assets/css/registro/style.css">
<!--===============================================================================================-->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
<!--===============================================================================================-->
</head>
<body>
<div class="limitador">
		<div class="todo">
			<div class="caja">	
			<form class="formulario" action="" method="post" >
					<span class="titulo">Registro</span> 
					<span class="sub-titulo">AOM Subscription Manager</span>
				 <span class="sub-titulo"></span>
				 <div class="input" >
						<input class="caja-input" type="text" id="nombre" name="nombre" autocomplete="new-password" placeholder="Nombre"  required>
						<span class="icono">
							<i class="fa fa-user-circle" aria-hidden="true"></i>
						</span>
					</div>
					<div class="input" >
						<input class="caja-input" type="text" id="apellidos" name="apellidos" autocomplete="new-password" placeholder="Apellidos"  required>
						<span class="icono">
							<i class="fa fa-user-circle" aria-hidden="true"></i>
						</span>
					</div>
					<div class="input" >
						<input class="caja-input" type="date" id="edad" name="edad" autocomplete="new-password" placeholder="Fecha nacimiento"  required>
						<span class="icono">
						<i class="fas fa-birthday-cake"></i>
						</span>
					</div>
					
					<div class="input" >
						<input class="caja-input" type="text" id="email" name="email" autocomplete="new-password" placeholder="Email"  required>
						<span class="icono">
						<i class="fas fa-envelope"></i>
						</span>
					</div>
					<div class="input" >
						<input class="caja-input" type="password" id="password" name="password" autocomplete="new-password" placeholder="Contraseña" required>						
						<span class="icono">
						<i class="fas fa-lock-open"></i>
						</span>
					</div>
					<div class="input" >
						<input class="caja-input" type="password" id="password2" name="password2" autocomplete="new-password" placeholder="Repite la contraseña" required>						
						<span class="icono">
						<i class="fas fa-lock-open"></i>
						</span>
					</div>

					<div class="input" >
					<div class="todo-form-btn">
						<button type="submit" class="caja-titulo-btn">
				COMPLETAR
						</button>
					</div><br>
				
				<?php
			
				?>
					<div class="text-center">
						
						  <a class="txt4" href="../">
						  <i class="fas fa-arrow-left"></i> Iniciar Sesión 
						  </a><br><br>
					
						</div>
				</form>
			</div>
		</div>
		<div id="footerRedesSocialesPermanente">
			<div class="flotanteIzquierdaFooter">
				<a >AOM Team</a>
			</div>
			<div class="flotanteDerechaFooter">
				<a href="#"> © Copyright 2018</a>
			</div>
		</div>
</body>
</html>