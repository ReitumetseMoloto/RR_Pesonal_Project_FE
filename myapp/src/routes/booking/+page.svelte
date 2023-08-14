<script lang="ts">
    import Header from '../Header.svelte';
    import Footer from '../Footer.svelte';
    import SveltyPicker from 'svelty-picker';
    import { onMount } from "svelte";
    import Popup from "./Popup.svelte";

   let showPopup = false;
   let popupMessage = "";

   function handlePopupClose() {
    showPopup = false;
    window.location.href = "/BookingConfirmation";
   }
    //fomrat date and time
    let booking: any[] = [];

    const formatDateTime = (dateTimeString: string | number | Date) => {
    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${formattedDate} at ${formattedTime}`;
  };
    const postData = {
        first_Name: '',
        last_Name: '',
        id_Number: '',
        gender: '',
        cellphone_Number: '',
        email: '',
        civic_Service: '',
        dateTime: ''
    }
    //form validation and API calls
    function formHandler(event: Event){
        event.preventDefault()

        const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
        const name = nameInput.value;
        const surnameInput = document.querySelector('input[name="surname"]') as HTMLInputElement;
        const surname = surnameInput.value;
        const idInput = document.querySelector('input[name="idNumber"]') as HTMLInputElement;
        const idNumber = idInput.value;
        const cellInput = document.querySelector('input[name="cellphoneNumber"]') as HTMLInputElement;
        const cellphoneNo = cellInput.value;
        const emailInput = document.querySelector('input[name="email"]') as HTMLInputElement;
        const email = emailInput.value;

        if (!name && !surname) {
       alert("Please enter all the fields");
        }else if(!idNumber){
            alert("Please enter all the fields");

        }
       else if(!cellphoneNo){
            alert("Please enter all the fields");

        }
        else if(!email){
            alert("Please enter all the fields");

        }else if(idNumber.length !== 13){
            alert("Invalid ID number");

        }else if(cellphoneNo.length !== 10){
            alert("Invalid cellpone number");
        }
       else{
        fetch('http://localhost:3000/bookings/post',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_Name: postData.first_Name,

                last_Name: postData.last_Name,

                id_Number: postData.id_Number,

                gender: postData.gender,

                cellphone_Number: postData.cellphone_Number,

                email: postData.email,

                civic_Service: postData.civic_Service,

                dateTime: postData.dateTime
            })
        })
        .then(response => response.json())
        .then(result => {
        const message = `Dear ${result.first_Name} your booking has been confirmed! \n See you soon at the nearest Home Affairs Office.`;
        popupMessage = message;
        showPopup = true;
    });
    } 
        // Redirect after popup is closed
  onMount(() => {
    function redirectAfterPopupClose() {
      if (!showPopup) {
        window.location.href = "/BookingConfirmation";
      }
    }
    document.addEventListener("click", redirectAfterPopupClose);
    return () => document.removeEventListener("click", redirectAfterPopupClose);
  });
    }

</script>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-highway.css">
<body>

    <div class="left">
        
		<div class="contact">
           
			<form class="bookingForm">
                <h1>BOOK A SLOT HERE</h1>

                <label for="first_Name">First Name:</label>
				<input type="text" name="name"  bind:value={postData.first_Name}>
                <label for="last_Name">Last Name:</label>
				<input type="text" name="surname"  bind:value={postData.last_Name}>
                <label for="id_Number">ID Number:</label>
                <input type="text" name="idNumber" bind:value={postData.id_Number}>
                <label class="cell" for="cellphoneNumber">Cellphone Number:</label>
                <input type="text" name="cellphoneNumber" bind:value={postData.cellphone_Number}>
                <label for="Email">Email:</label>
                <input type="text" name="email" bind:value={postData.email}>
                <label for="gender">Gender:</label><br/>
                
                <label for="html" class="male">Male</label>
                <input type="radio" id="male" name="Gender" value="Male" bind:group={postData.gender}>
                
                <label for="css" class="female">Female</label><br/>
                <input type="radio" id="female" name="Gender" value="Female" bind:group={postData.gender}>
                <hr class="custom-horizontal-line">

                <label for="civicService" class="civic">Civic Service:</label>
                <label for="html" class="id">ID</label>
                <input type="radio" id="id" name="id" value="ID" bind:group={postData.civic_Service}>
                
                <label for="css" class="passport">Passport</label><br/>
                <input type="radio" id="passport" name="passport" value="Passport" bind:group={postData.civic_Service}>
                
                <label for="DateTime">Choose Date and Time:</label>
                 <SveltyPicker inputClasses="form-control" format="yyyy-mm-dd hh:ii" bind:value={postData.dateTime} placeholder='Select date and time' autoclose></SveltyPicker>

				<button class="submit" on:click={formHandler} >BOOK</button>
                {#if showPopup}
                <Popup message={popupMessage} onClose={handlePopupClose} />
                {/if}
			</form>
          
		</div>
	</div>
    <header class="home-header">
        <div class="w3-top">
        <div class="w3-bar w3-white w3-card" id="myNavbar">
            <img src="https://www.pikpng.com/pngl/b/442-4423750_unit1mod1-south-africa-home-affairs-clipart.png" alt="logo">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a>HOME AFFAIRS</a>
          <div class="w3-right w3-hide-small" id="nav">
            <a href="/home" class="w3-bar-item w3-button">HOME</a>
            <a href="/" class="w3-bar-item w3-button" id="logout">
                <i class='bx bx-log-out'></i>
                <span class="links_name" >Log out</span>
              </a>
          </div>
        </div>
        </div>
    </header>
</body>

<style>
body{
    background: linear-gradient(-45deg, #dcd7e0, #fff);
}
body::-webkit-scrollbar {
  width: 1em;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  background: linear-gradient(212.38deg, #FB9646 0%, #006636 100%),url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clinithink.com%2F&psig=AOvVaw1kd0yT1HUgd6Qjk6xP6r2q&ust=1679733419021000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJC96-eU9P0CFQAAAAAdAAAAABAS);
  outline: 1px solid #FB9646;
}
.custom-horizontal-line {
  border: none; 
  border-top: 1px solid #F89D07; 
}
.male{
  margin-left: 285px;
}
.female{
  margin-left: 280px;
}
.id{
    margin-left: 185px;
}
.passport{
    margin-left: 270px;
}
.civic{
    padding-top: 30px;
    padding-bottom: 20px;
}
#civicService{
    margin-left: 75px;
    margin-bottom: 30px;
}
img{
    margin-left: 20px;
	margin-top: 10px;
	margin-bottom: 5px;
	width: 40px;
	height: 50px;
	}
#nav{
		padding-top: 10px;
		padding-right: 5px;
}

.home-header{
		width:100%;
		height:100%;
		position: fixed;
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
#civicService {
    font-size: 15px;
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
.left input {
    border: none;
    width: 30%;
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
	background: white;
    width: 50%;
    margin: auto;
    outline-color: #F89D07;
    margin-top: 60px;
}
.submit {
    border: none;
    padding: 15px 70px;
    border-radius: 8px;
    display: block;
    margin: auto;
    margin-top: 30px;
    background: linear-gradient(212.38deg, #FB9646 0%, #006636 100%),url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clinithink.com%2F&psig=AOvVaw1kd0yT1HUgd6Qjk6xP6r2q&ust=1679733419021000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJC96-eU9P0CFQAAAAAdAAAAABAS);
    color: #fff;
    font-weight: bold;
    margin-bottom: 30px;
    -webkit-box-shadow: 0px 9px 15px -11px rgba(88,54,114,1);
    -moz-box-shadow: 0px 9px 15px -11px rgba(88,54,114,1);
    box-shadow: 0px 9px 15px -11px rgba(88,54,114,1);
}
.submit:hover{
    background: #006636;
    cursor: pointer;
}
</style>