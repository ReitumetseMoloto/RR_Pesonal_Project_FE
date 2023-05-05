<script lang="ts">
    import Header from '../Header.svelte';
    import Footer from '../Footer.svelte';
    import SveltyPicker from 'svelty-picker';

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
        date: ''
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

                date: postData.date
            })
        })
        .then(response => response.json())
        .then(result => {
        const message = `Dear ${result.first_Name} your booking has been confirmed! See details below:\n Date and Time: ${result.date} \n See you soon at the nearest Home Affairs Office.`;
        alert(message);});
       window.location.href = "/BookingConfirmation";
       } 
  }

</script>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
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
                <label for="gender">Gender:</label><br/>
                <input type="radio" id="male" name="Gender" value="Male" bind:group={postData.gender}>
                <label for="html">Male</label>
                <input type="radio" id="female" name="Gender" value="Female" bind:group={postData.gender}>
                <label for="css">Female</label>
                <label class="cell" for="cellphoneNumber">Cellphone Number:</label>
                <input type="text" name="cellphoneNumber" bind:value={postData.cellphone_Number}>
                <label for="civicService">Civic Service:</label><br/>
                <select name="civicService" id="civicService" bind:value={postData.civic_Service}>
                <option value="">--Please choose an option--</option>
                <option value="IDSmartCard">ID</option>
                <option value="Passport">Passport</option>
                </select><br/>
                <label for="Email">Email:</label>
                <input type="text" name="email" bind:value={postData.email}>
                <label for="DateTime">Choose Date and Time:</label>
                <!-- <input type="datetime-local" name="dateTime" bind:value={postData.dateTime}> -->
                <SveltyPicker inputClasses="form-control" format="yyyy-mm-dd hh:ii" bind:value={postData.date} placeholder='Select date and time' autoclose></SveltyPicker>

				<button class="submit" on:click={formHandler} >BOOK</button>
			</form>
          
		</div>
	</div>
</body>

<style>
body{
    background: linear-gradient(-45deg, #dcd7e0, #fff);
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
    margin-top: 20px;
}
.submit {
    border: none;
    padding: 15px 70px;
    border-radius: 8px;
    display: block;
    margin: auto;
    margin-top: 30px;
    background: linear-gradient(212.38deg, #F89D07 0%, #006636 100%),url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clinithink.com%2F&psig=AOvVaw1kd0yT1HUgd6Qjk6xP6r2q&ust=1679733419021000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJC96-eU9P0CFQAAAAAdAAAAABAS);
    color: #fff;
    font-weight: bold;
    margin-bottom: 30px;
    -webkit-box-shadow: 0px 9px 15px -11px rgba(88,54,114,1);
    -moz-box-shadow: 0px 9px 15px -11px rgba(88,54,114,1);
    box-shadow: 0px 9px 15px -11px rgba(88,54,114,1);
}
</style>