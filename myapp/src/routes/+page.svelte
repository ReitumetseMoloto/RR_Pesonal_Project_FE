
<script lang="ts">

  function userLogin(event:Event){
  event.preventDefault();
  const UsernameInput = document.querySelector('input[name="username"]') as HTMLInputElement;
  const username = UsernameInput.value;
  const idNumberInput = document.querySelector('input[name="idNumber"]') as HTMLInputElement;
  const idNumber = idNumberInput.value;

  if (!idNumber && !username) {
    alert("Please enter Username and ID Number");
  }
  
  // Check if ID number is exactly 13 digits
  if (idNumber.length !== 13) {
    alert("Invalid ID Number");
    window.location.href = "/";
  }else{
    window.location.href = "/home";
  }

  }

  //Admin 
  function admin(event: Event){
  event.preventDefault();

  const passwordInput = document.querySelector('input[name="password"]') as HTMLInputElement;
  const password = passwordInput.value.trim();

  if (password === "HA@adminServices") {
    window.location.href = "/adminService";
  } else {
    alert("Invalid password");
  }
}
</script>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<body>

		<div class="login_box">
			<div class="left">
				<div class="contact">
					<form>
						<h3>WELCOME TO SECURE SERVICES</h3>
						<input type="text" name="username" placeholder="USERNAME">
						<input type="text" name="idNumber" placeholder="SA ID NUMBER">
						<button class="submit"on:click={userLogin} >LOGIN</button>
            <h4 class="OR">OR</h4>
            <h6>Login as Admin:</h6>
            <input type="password" name="password" placeholder="Enter Password">
            <button class="submit" on:click={admin}>ADMIN LOGIN</button>
					</form>
				</div>
			</div>
			<div class="right">
				<div class="right-text">
					<h2>HOME AFFAIRS</h2>
					<h5>ONLINE BOOKING SYSTEM</h5>
				</div>
				<div class="right-inductor"><img src="" alt=""></div>
			</div>
		</div>
 
</body>

  <style>
	img{
	width: 100%;
}
.login_box {
    width: 1050px;
    height: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    border-radius: 10px;
    box-shadow: 1px 4px 22px -8px #0004;
    display: flex;
    overflow: hidden;
}
.login_box .left{
  width: 41%;
  height: 100%;
  padding: 25px 25px;
  
}
.login_box .right{
  width: 59%;
  height: 100%  
}
.left .contact{
	display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    height: 100%;
    width: 73%;
    margin: auto;
}
.left h3{
  text-align: center;
  margin-bottom: 40px;
}
.left input {
    border: none;
    width: 80%;
    margin: 15px 0px;
    border-bottom: 1px solid #F89D07;
    padding: 7px 9px;
    width: 100%;
    overflow: hidden;
    background: transparent;
    font-weight: 600;
    font-size: 14px;
}
.left{
	background: linear-gradient(-45deg, #dcd7e0, #fff);
}
.submit {
    border: none;
    padding: 15px 70px;
    border-radius: 8px;
    display: block;
    margin: auto;
    margin-top: 30px;
    background: #F89D07;
    color: #fff;
    font-weight: bold;
    -webkit-box-shadow: 0px 9px 15px -11px rgba(88,54,114,1);
    -moz-box-shadow: 0px 9px 15px -11px rgba(88,54,114,1);
    box-shadow: 0px 9px 15px -11px rgba(88,54,114,1);
}

.right {
	background: linear-gradient(212.38deg, #F89D07 0%, #006636 100%),url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clinithink.com%2F&psig=AOvVaw1kd0yT1HUgd6Qjk6xP6r2q&ust=1679733419021000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJC96-eU9P0CFQAAAAAdAAAAABAS);
	color: #fff;
	position: relative;
}

.right .right-text{
  height: 100%;
  position: relative;
  transform: translate(0%, 45%);
}
.right-text h2{
  display: block;
  width: 100%;
  text-align: center;
  font-size: 50px;
  font-weight: 500;
}
.right-text h5{
  display: block;
  width: 100%;
  text-align: center;
  font-size: 19px;
  font-weight: 400;
}

.right .right-inductor{
  position: absolute;
  width: 70px;
  height: 7px;
  background: #fff0;
  left: 50%;
  bottom: 70px;
  transform: translate(-50%, 0%);
}
.OR{
  text-align: center;
  padding-top: 30px;
}
  </style>