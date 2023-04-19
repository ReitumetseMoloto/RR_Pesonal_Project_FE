<script lang="ts">
    import Header from '../Header.svelte';
    import Footer from '../Footer.svelte';
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

    function formHandler(event: Event){
        event.preventDefault()

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
        const message = `Dear ${result.first_Name} your booking has been confirmed! See details below:\n Date and Time: ${result.dateTime} \n See you soon at the nearest Home Affairs Office.`;
        alert(message);});

    }
</script>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<body>
	<Header />	
    <div class="left">
		<div class="contact">
			<form class="bookingForm">
				<h3>BOOKING FOR ID SMART CARD</h3>
                <label for="first_Name">First Name:</label>
				<input type="text" name="name" bind:value={postData.first_Name}>
                <label for="last_Name">Last Name:</label>
				<input type="text" name="surname" bind:value={postData.last_Name}>
                <label for="id_Number">ID Number:</label>
                <input type="text" name="idNumber" bind:value={postData.id_Number}>
                <label for="gender">Gender:</label>
                <input type="radio" id="male" name="Gender" value="Male" bind:group={postData.gender}>
                <label for="html">Male</label><br>
                <input type="radio" id="female" name="Gender" value="Female" bind:group={postData.gender}>
                <label for="css">Female</label><br>
                <input type="radio" id="other" name="Gender" value="Other" bind:group={postData.gender}>
                <label for="javascript">Other</label><br>
                <label for="cellphoneNumber">Cellphone Number:</label>
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
                <input type="datetime-local" name="dateTime" bind:value={postData.dateTime}>

				<button class="submit" on:click={formHandler} >BOOK</button>
			</form>
          
		</div>
	</div>
    <Footer/>
</body>

<style>
body{
    background: linear-gradient(-45deg, #dcd7e0, #fff);
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
  margin-top: 30px;
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
    border: 0.5px solid #F89D07;
    outline-style:dashed;
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
    background: #F89D07;
    color: #fff;
    font-weight: bold;
    margin-bottom: 30px;
    -webkit-box-shadow: 0px 9px 15px -11px rgba(88,54,114,1);
    -moz-box-shadow: 0px 9px 15px -11px rgba(88,54,114,1);
    box-shadow: 0px 9px 15px -11px rgba(88,54,114,1);
}
</style>