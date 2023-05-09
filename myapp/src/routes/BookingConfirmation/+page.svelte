<script lang="ts">
    //Generating a booking reference
  function generateBookingReferenceCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let bookingReferenceCode = '';
  for (let i = 0; i < 8; i++) {
    bookingReferenceCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return bookingReferenceCode;
}
 let bookingReferenceCode = generateBookingReferenceCode();
</script><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<body>
    <div class="Confirmation">
        <img src="https://www.pikpng.com/pngl/b/442-4423750_unit1mod1-south-africa-home-affairs-clipart.png" alt="logo">
        <h1 style="font-weight:bold">BOOKING CONFIRMATION</h1>
        <p>Thank you for using our Online Booking System.</p>
        <hr>
    </div>
    <div class="next">
        <h1>Next Steps...</h1>
        <div class="block">
            <p>Booking Reference</p>
            <h1>{bookingReferenceCode}</h1>
            <p>Visit the nearest Home Affairs Branch and provide the above reference.</p>
            <p>A Reminder: Bring the required documents along with you.</p>
        </div>
        <button class="home" on:click={() => window.location.href='/home'} >Back To Home</button>
    </div>

</body>

<style>
body{
    background: linear-gradient(-45deg, #dcd7e0, #fff);
    padding-top: 30px;
}
img{
		width: 50px;
		height: 60px;
	}
.Confirmation{
    text-align: center;
}
.next{
    text-align: center;

}
.home{
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
.block{
    background-color: #fbceb1;
    border-style: solid;
    border-color:#F89D07;
    text-align: center;
    width: 50%;
    margin-left: 400px;
}
</style>