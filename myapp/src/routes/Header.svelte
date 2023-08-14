<script lang="ts">
</script>

<header class="home-header">
	<!-- Navbar (sit on top) -->
    <div class="w3-top">
	<div class="w3-bar w3-white w3-card" id="myNavbar">
		<img src="https://www.pikpng.com/pngl/b/442-4423750_unit1mod1-south-africa-home-affairs-clipart.png" alt="logo">
	  <!-- svelte-ignore a11y-missing-attribute -->
	  <a>HOME AFFAIRS</a>
	  <!-- Right-sided navbar links -->
	  <div class="w3-right w3-hide-small" id="nav">
		<a href="#header" class="w3-bar-item w3-button"><i class="fa fa-home"></i>HOME</a>
		<a href="#about" class="w3-bar-item w3-button"><i class="fa fa-book"></i>ABOUT</a>
		<a href="#booking" class="w3-bar-item w3-button"><i class="fa fa-user"></i> BOOKING</a>
		<a href="#work" class="w3-bar-item w3-button"><i class="fa fa-th"></i>CIVIC SERVICES</a>
		<a href="#contact" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> CONTACT</a>
		<a href="/" class="w3-bar-item w3-button" id="logout">
			<i class='bx bx-log-out'></i>
			<span class="links_name" >Log out</span>
		  </a>
	  </div>
	</div>
    </div>
</header>

<style>
	img{
		margin-left: 20px;
		margin-top: 10px;
		margin-bottom: 10px;
		width: 40px;
		height: 50px;
	}
		/*=====Header=====*/
	.home-header{
		width:100%;
		height:100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: black;
	}
	a{
		font-size: medium;
		size: 50px;
	}
	#logout{
		background-color: #FB9646;
	}
	#nav{
		padding-top: 13px;
		padding-right: 5px;
	}

</style>
