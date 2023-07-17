<script lang="ts">
	import Footer from "../Footer.svelte";
  import Header from "../Header.svelte";

  function scrollToAbout(): void {
  const aboutSection = document.querySelector<HTMLElement>('#about');
  if (aboutSection !== null) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-highway.css">
<style>
body,h3{font-family: "Raleway", sans-serif}

body{
  height: 100%;
  line-height: 1.8;
  scroll-behavior: smooth;
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


#user{
	margin-top: 30px;
}

#booking{
	text-align: center;
	width: 100%;
}
#image{
  height: 450px;
}
.aboutbutton{
  background-color:#FB9646;
  border-radius: 20px;
  size: 20px;
  margin-top: 25px;
  border: none;
  color: white;
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
}

#welcome{
  margin-top: 100px;
}
#stats{
	background: linear-gradient(212.38deg, #FB9646 0%, #006636 100%),url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clinithink.com%2F&psig=AOvVaw1kd0yT1HUgd6Qjk6xP6r2q&ust=1679733419021000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJC96-eU9P0CFQAAAAAdAAAAABAS);
}

div {
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }

  div:target {
    opacity: 1;
  }

#about {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}
#transition{
  transition: 1s;
  cursor: pointer;
}
#transition:hover{
  transform: scale(1,1);
}
body {
    scroll-behavior: smooth;
  }

</style>

<body>

<!-- Navbar (sit on top) -->
<Header/>

<!-- Header with full-height image -->
<header>
<!-- Promo Section - "We know design" -->
<div class="w3-container w3-white" style="padding:128px 16px; height:800px" id="header">
	<div class="w3-row-padding">
	  <div class="w3-col m6" id="welcome">
		<h2>WELCOME TO e-HOME AFFAIRS</h2>
		<p>The Department of Home Affairs is waging a war against long queues. As such we are introducing the Branch Appointment Booking System or BABS.</p>
		<p>Citizens are encouraged to make use of the online booking system because in the near future, selected Home Affairs offices will process smart ID and passport applications only for clients who have booked an appointment through the Branch Appointment System.</p>
		<!-- <a href="#about" class="w3-bar-item w3-button w3-orange" id="learnMore"> Learn More</a> -->
    <button class="aboutbutton" on:click={scrollToAbout}>Read More Below</button>
	  </div>
	  <div class="w3-col m6" >
		<img class="w3-image w3-round-large" id="image" src="https://img.freepik.com/free-vector/digital-device-users-spending-time-together_74855-5234.jpg?w=1380&t=st=1683473053~exp=1683473653~hmac=c3d580977998ed883b205d34053f581921c1bcf495bd3a27743b75ed89d1718c" alt="Home_Image" width="700" height="100">
	  </div>
	</div>
  </div>
</header>

<!-- About Section -->
<div class="w3-container" style="padding:128px 16px" id="about">
  <h3 class="w3-center">ABOUT US</h3>
  <p class="w3-center w3-large">Key features of the Department of Home Affairs</p>
  <div class="w3-row-padding w3-center" style="margin-top:64px">
    <div class="w3-quarter">
      <i class="fa fa-home w3-margin-bottom w3-jumbo w3-center"></i>
      <p class="w3-large">What We Do</p>
      <p>The Department of Home Affairs offers a multitude of services to the citizens of South Africa, as well as foreigners who wish to visit, work or stay in South Africa.</p>
    </div>
    <div class="w3-quarter">
      <i class="fa fa-eye w3-margin-bottom w3-jumbo"></i>
      <p class="w3-large">Vision</p>
      <p>A safe, secure South Africa where all of its people are proud of, and value, their identity and citizenship.</p>
    </div>
    <div class="w3-quarter">
      <i class="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
      <p class="w3-large">Mission</p>
      <p>The efficient determination and safeguarding of the identity and status of citizens and the regulation of migration to ensure security, promote development and fulfil our international obligation.</p>
    </div>
    <div class="w3-quarter">
      <i class="fa fa-group w3-margin-bottom w3-jumbo"></i>
      <p class="w3-large">Values</p>
      <p>People-centred and caring,
		Patriotic,
		Professional and having integrity,
		Corruption free and ethical,
		Efficient and innovative</p>
    </div>
  </div>
</div>

<!-- Section "Statistics" -->
<div class="w3-container w3-row w3-center w3-orange w3-padding-64" id="stats">
	<div class="w3-quarter">
	  <span class="w3-xxlarge">60 579+</span>
	  <br>Unabridged Certificates Issued
	</div>
	<div class="w3-quarter">
	  <span class="w3-xxlarge">50 699+</span>
	  <br>Passports Issued
	</div>
	<div class="w3-quarter">
	  <span class="w3-xxlarge">1M+</span>
	  <br>ID Smart Cards Issued
	</div>
	<div class="w3-quarter">
	  <span class="w3-xxlarge">412+</span>
	  <br>Home Affairs Branches
	</div>
  </div>

<!-- Booking Section -->
<div class="w3-container" style="padding:128px 16px" id="booking">
  <h3 class="w3-center">ONLINE BOOKING</h3>
  <p class="w3-center w3-large">Easy to Use, Convenient, and Just a Click Away</p>
  <div class="w3-row-padding w3-grayscale " style="margin-top:64px;margin-left:400px;width:100%">
    <div class="w3-col l3 m6 w3-margin-bottom ">
      <div class="w3-card">
        <i class="fa fa-address-card  w3-margin-bottom w3-jumbo" id="user" ></i> 
        <div class="w3-container">
          <h3>Smart Card</h3>
          <p class="w3-opacity">Smart Card</p>
          <p>Click on the button below to Book a slot for an ID Smart Card</p>
          <p><button class="w3-button w3-orange w3-block" on:click={() => window.location.href='/booking'}>Book</button></p>
        </div>
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-card">
        <i class="fa fa-address-card w3-margin-bottom w3-jumbo" id="user"></i> 
        <div class="w3-container">
          <h3>Passport</h3>
          <p class="w3-opacity">Passport</p>
          <p>Click on the button below Book a Slot for a Passport</p>
          <p><button class="w3-button w3-orange w3-block" on:click={() => window.location.href='/booking'}> Book</button></p>
        </div>
      </div>
    </div>
  </div>
</div>



<!-- Work Section -->
<div class="w3-container" style="padding:128px 16px" id="work">
  <h3 class="w3-center">Civic Services</h3>
  <p class="w3-center w3-large">Services offered at any Home Affairs Branch</p>
</div>

<div class="w3-container w3-light-grey w3-padding-64">
  <div class="w3-row-padding">
    <div class="w3-col m6">
      <h3>The Department's core Civic duties are</h3>
      <p>Maintaining the National Population Register</p>
	  <p>Managing the birth, marriage and death records</p>
	  <p>Determining and granting citizenship</p>
	  <p>Issuing travel documents and passports</p>
	  <p>Issuing identity documents</p><br/>
		
    </div>
    <div class="w3-col m6">
      <p class="w3-wide"><i class="fa fa-id-card-o w3-margin-right"></i>Identity Documents and Identification</p>
      <div class="w3-grey">
        <div class="w3-container w3-dark-grey w3-center" style="width:90%">90%</div>
      </div>
      <p class="w3-wide"><i class="fa fa-id-card-o w3-margin-right"></i>Travel Documents and Passports</p>
      <div class="w3-grey">
        <div class="w3-container w3-dark-grey w3-center" style="width:85%">85%</div>
      </div>
      <p class="w3-wide"><i class="fa fa-id-card-o w3-margin-right"></i>Citizenship</p>
      <div class="w3-grey">
        <div class="w3-container w3-dark-grey w3-center" style="width:75%">75%</div>
      </div>
    </div>
  </div>
  <p style="font-weight: bold; text-align:center"><i class="fa fa-info-circle" style="font-size:24px ;color:red; padding-right:10px"></i>A branch visit is mandatory to capture and\or verify your biometric details, i.e.
    fingerprints and signature.<br/> You can also finalise your application at any Home Affairs office once you have booked a slot.</p>
</div>

<!-- Pricing Section -->
<div class="w3-container w3-center w3-dark-grey" style="padding:128px 16px" id="pricing">
  <h3>GENERAL INFORMATION</h3>
  <div class="w3-row-padding" style="margin-top:64px">
    <div class="w3-third w3-section" id="transition">
      <ul class="w3-ul w3-white w3-hover-shadow">
        <li class="w3-orange w3-xlarge w3-padding-32">Identity Documents</li>
        <li class="w3-padding-16">An Identity document is important to get as soon as you are eligible which is from 16 years of age as it proves your identity</li>
        <li class="w3-padding-16">When applying for an ID, bring a certified copy of your Birth certificate or reference book  or a copy of the old Transkei, Bophutatswana, Venda or Ciskei homelands identity or travel documents </li>
        <li class="w3-padding-16">Two identical, colour photographs which may NOT be needed at smartcard offices as ID images are captured digitally however colour photographs are still needed for temporary IDs</li>
        <li class="w3-padding-16">Your fingerprints will be taken by a Home Affairs official and imprinted on Form DHA-9. </li>
	</ul>
    </div>
    <div class="w3-third" id="transition">
      <ul class="w3-ul w3-white w3-hover-shadow">
        <li class="w3-highway-green w3-xlarge w3-padding-32">Birth Certificates</li>
        <li class="w3-padding-16">All children born in South Africa must be registered within 30 days of their birth in terms of the Births and Deaths Registration Act, 1992.</li>
        <li class="w3-padding-16">A parent, parents, guardian or any other person legally responsible for the child must complete Form BI-24 and it must be submitted to the nearest office of the Department of Home Affairs</li>
        <li class="w3-padding-16">Once the child's birth has been registered, an unabridged birth certificate is issued free of charge, usually a day or so after the registration application has been submitted.</li>
        <li class="w3-padding-16">Only South African citizens, whether in the Republic or outside the Republic, including persons who are not South African citizens but who sojourn permanently or temporarily in the Republic will be issued birth certificates</li>
        <li class="w3-padding-16">
      </ul>
    </div>
    <div class="w3-third w3-section" id="transition">
      <ul class="w3-ul w3-white w3-hover-shadow">
        <li class="w3-orange w3-xlarge w3-padding-32">Passports</li>
        <li class="w3-padding-16">A passport is a document issued by a national government for international travel and it certifies the identity and nationality of the holder.</li>
        <li class="w3-padding-16">Applicants should note that In terms of section 26B of the South African Citizenship Act, 1995, it is a punishable offence for a South African citizen of 18 years and older to leave or enter South Africa on a foreign passport.</li>
        <li class="w3-padding-16">Permanent South African passports  and travel documents are printed only in Pretoria, South Africa, from where they are dispatched to the offices of application. Applications made within South African borders can
			 be submitted to any office of the Department of Home Affairs; applications made outside of the country can be submitted to your nearest South Africa embassy or mission.</li>
      </ul>
    </div>
  </div>
</div>

<!-- Contact Section -->
<div class="w3-container w3-light-grey" style="padding:128px 16px" id="contact">
  <h3 class="w3-center">CONTACT US</h3>
  <p class="w3-center w3-large">Lets get in touch. Send us a message:</p>
  <div style="margin-top:48px">
    <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>Home Affairs Branch</p>
    <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: 0800 60 11 90</p>
    <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: hacc@dha.gov.za </p>
	<p><i class="fa fa-clock-o fa-fw w3-xxlarge w3-margin-right"> </i> Office Hours: Monday to Friday: 8:00 to 15:30- Every last Wednesday of the month: 9:00 to 15:30 </p>
  </div>
</div>

<!-- Footer -->
<Footer/>
 
<script>
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}
</script>

</body>