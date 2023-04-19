<script lang="ts">
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
</script>
<main>
	<!--HOME PAGE-->
   <Header/>
	<div class="welcome">
		<h2 class="welcome-h2">WELCOME TO e-HOME AFFAIRS</h2>
		<p class="welcome-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa lacus,
			 lobortis et posuere ac, faucibus sed metus. Sed efficitur dignissim purus. Pellentesque 
			 sed varius metus, et malesuada leo.</p>
		<button class="welcome-button">LEARN MORE</button>	 
	</div>

		<h2 class="slogan">EASY TO USE, CONVENIENT, AND JUST A CLICK AWAY</h2>
    <!--ID Smart Card-->
		<div class="id">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="/src/Logo.png" class="logo"/>
			<h3>ID SMART CARD</h3>
			<p>Click on the button below to Book a slot for an ID Smart Card</p>
			<button class="id-button" on:click={() => window.location.href='/booking'}>APPLY</button>

		</div>
    <!--Passport-->
		<div>
			<!-- svelte-ignore a11y-missing-attribute -->
			<img src="/src/Logo.png" class="logo"/>
			<h3>PASSPORT</h3>
			<p>Click on the button below Book a Slot for a Passport</p>
			<button class="passport-button">APPLY</button>

		</div>

	<!---======Note=======-->	
	<div class="note">
		<h4 class="note-h4">NOTE:</h4>
		<p class="note-p">A branch visit is mandatory to capture and\or verify your biometric details, i.e.
			fingerprints and signature. You can also finalise your application at any Home Affairs office once you have booked a slot .</p>
	</div>

	<!---======Footer=======-->
	<Footer/>
</main>

<style>
	/*=====Welcome=====*/
	.welcome{
		background-color: #006636;
	}
	.welcome-h2{
		padding-left: 30px;
		padding-top: 40px;
		color: white;
	}
	.welcome-p{
		padding-left: 30px;
		color: white;
	}
	.welcome-button{
		background-color: #d8eed9;
		border-radius: 8px;
		margin-left: 4%;
		margin-bottom: 6%;
	}

	/*=====Application options=====*/
	.slogan{
		text-align: center;
	}
	
	/*=====Home Boxes=====*/
	.id{
		border-color: #F89D07 ;
		box-sizing: border-box;
	}
	.id-button{
		background-color: #F89D07;
		border-radius: 8px;
	}
	.passport-button{
		background-color: #F89D07;
		border-radius: 8px;
	}
	.collect-button{
		background-color: #F89D07;
		border-radius: 8px;
	}

	/*=====NOTE=====*/
	.note{
		background-color: #F89D07;
	}
	.note-h4{
		padding-left: 30px;
		padding-top: 20px;
	}
	.note-p{
		padding-left: 30px;
		padding-bottom: 30px;
	}

	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		font-family:"Arial";
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>