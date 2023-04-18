<header class="home-header">
	<nav class="nav-container">
		<div>
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="/src/Logo.png" class="logo"/>
		</div>
		
		<ul class="nav-ul">

			<input type="checkbox" id="checkbox_toggle" />
			<label for="checkbox_toggle" class="hamburger">&#9776;</label>
		<div class="menu">
				<li class="nav-li"><a href='./home' class="nav-a">HOME</a></li>
				<li class="nav-cs"><a href="#CIVIC SERVICES" class="nav-a">ABOUT</a>
				<li class="nav-li"><a href="#FAQs" class="nav-a">Ts AND Cs</a></li>
				<li class="nav-li"><a href="#FAQs" class="nav-a">CONTACT US</a></li>
				<button class="submit" on:click={() => window.location.href='/'}>LOGOUT</button>
			
		</div>
		</ul>
	</nav>
</header>

<style>
		/*=====Header=====*/
	.home-header{
		width:100%;
		height:100%;
		position: relative;
		top: 0;
		left: 0;
		z-index: black;
	}

	.nav-container{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		background-color: white;

	}
    .nav-ul {
       list-style-type: none;
       margin: 0;
       padding: 0;
    }
	.nav-a {
	  text-decoration: none;
	  color: black;
	}
	.nav-li {
		list-style: none;
	}
	.menu{
		display: flex;
		gap:1em;
		font-size: 18px;
	}
	.menu li:hover{
		background-color:#F89D07;
		border-radius: 8px ;

	}
	.menu li {
		padding: 5px 14px;

   }

/* DROPDOWN MENU */

   .nav-cs{
	position: relative; 
  }

   /* .dropdown {
	padding: 1em 0;
	position: absolute;
	display: none;
	border-radius: 8px;
	top: 35px;
  }

  .dropdown li + li {
	margin-top: 10px;
  }

  .dropdown li {
	padding: 0.5em 1em;
	width: 8em;
	text-align: center;
  }

  .dropdown li:hover {
	background-color:#F89D07;

  }

  .nav-cs:hover .dropdown {
	display: block;

  } */
  input[type=checkbox]{
	display: none;

  } 

/*HAMBURGER MENU*/

.hamburger {
	display: none;
	font-size: 24px;
	user-select: none;

}
</style>
