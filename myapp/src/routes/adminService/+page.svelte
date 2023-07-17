<script lang="ts">
  import { onMount } from 'svelte';

  import LineGraphCard from '../components/LineGraphCard.svelte';
  if (typeof document !== "undefined") {
  const sidebar = document.querySelector(".sidebar") as HTMLElement;
  const sidebarBtn = document.querySelector(".sidebarBtn") as HTMLElement;

  sidebarBtn.onclick = function() {
    sidebar.classList.toggle("active");
    if(sidebar.classList.contains("active")){
      sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
    } else {
      sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }
}
  

  let booking: any[];
  let errorMessage: string;

  onMount(async () => {
    try {
      const response = await fetch('http://localhost:3000/bookings/get');
      const result = await response.json();

      if (Array.isArray(result)) {
        booking = result;
      } else {
        throw new Error('Invalid data received');
      }
    } catch (error) {
      console.error(error);
      errorMessage = 'Failed to fetch data';
    }
  });

  function sortBookings(): void {
  booking = booking.sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
}


</script>

<link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<body>
  <div class="sidebar">
    <div class="logo-details">
      <span class="logo_name">Admin Service</span>
    </div>
      <ul class="nav-links">
        <li>
          <a href="/adminService" class="active">
            <i class='bx bx-grid-alt' ></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/adminService">
            <i class='bx bx-box' ></i>
            <span class="links_name">Reports and Analytics</span>
          </a>
        </li>
        <li>
          <a href="#bookings">
            <i class='bx bx-calendar' ></i>
            <span class="links_name">Bookings</span>
          </a>
        </li>
        <li>
          <a href="#team">
            <i class='bx bx-user' ></i>
            <span class="links_name">Team</span>
          </a>
        </li>
      </ul>
      <img src="https://www.pikpng.com/pngl/b/442-4423750_unit1mod1-south-africa-home-affairs-clipart.png" alt="logo" class="logo">
  </div>
  <section class="home-section">
    <nav>
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn'></i>
        <span class="dashboard">Dashboard</span>
      </div>
      <div class="profile-details">
        
        <span class="admin_name">Administrator</span>
        <i class='bx bx-chevron-down' ></i>
      </div>
      <div class="logout">
        <a href="/">
          <i class='bx bx-log-out'></i>
        </a>
      </div>
    </nav>

   
<!--GET Bookings-->
    <div class="home-content">
      <div class="cards">
      <div class="stats1">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAATtJREFUSEvtlsFtAjEQRR8VgJS0gUQJpIPcEwlOXAkSnCEVJHQACO50AFRARCVQAehH9sqySFhsaxck5uidnf//zN/xVigpKiXh8gAurPN+q0dAF6glZrAHvoFPW9cFbgKrxIB+uRdgrUMXWGqHJjNjloiIW1c4fwKndvvREXQ/wB9AH3gGZkDnijEEK64DOw+oZ5yq4zbQ8p5PgYk5CwZ+A+Ze4QXwbs5cY9o0GfR3nkAwcB7FUu2G1EYrVkHNeAA8FTnjK3x0NjW41a9mlWq7KX6AJTAGtA4VDeDLgY02l+bkO9bWFwGtQYH7KzfKXFKxvdBnqdb8lauLwEaUuc59Jj6PjVH7H7/gGZdmrsKA7caJBbTv23qZ4W7iR0DsxEwOraaSauocjOOzTqa+8HPzfQDnblVsYmmtPgEUO1sf/uvFbAAAAABJRU5ErkJggg=="/>
        <h3>60 579+</h3>
        <p>Unabridged Certificates Issued</p>
      </div>
      <div class="stats2">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAATtJREFUSEvtlsFtAjEQRR8VgJS0gUQJpIPcEwlOXAkSnCEVJHQACO50AFRARCVQAehH9sqySFhsaxck5uidnf//zN/xVigpKiXh8gAurPN+q0dAF6glZrAHvoFPW9cFbgKrxIB+uRdgrUMXWGqHJjNjloiIW1c4fwKndvvREXQ/wB9AH3gGZkDnijEEK64DOw+oZ5yq4zbQ8p5PgYk5CwZ+A+Ze4QXwbs5cY9o0GfR3nkAwcB7FUu2G1EYrVkHNeAA8FTnjK3x0NjW41a9mlWq7KX6AJTAGtA4VDeDLgY02l+bkO9bWFwGtQYH7KzfKXFKxvdBnqdb8lauLwEaUuc59Jj6PjVH7H7/gGZdmrsKA7caJBbTv23qZ4W7iR0DsxEwOraaSauocjOOzTqa+8HPzfQDnblVsYmmtPgEUO1sf/uvFbAAAAABJRU5ErkJggg=="/>
        <h3>50 699+</h3>
        <p>Passports Issued</p>
      </div>
      <div class="stats3">
         <!-- svelte-ignore a11y-missing-attribute -->
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAATtJREFUSEvtlsFtAjEQRR8VgJS0gUQJpIPcEwlOXAkSnCEVJHQACO50AFRARCVQAehH9sqySFhsaxck5uidnf//zN/xVigpKiXh8gAurPN+q0dAF6glZrAHvoFPW9cFbgKrxIB+uRdgrUMXWGqHJjNjloiIW1c4fwKndvvREXQ/wB9AH3gGZkDnijEEK64DOw+oZ5yq4zbQ8p5PgYk5CwZ+A+Ze4QXwbs5cY9o0GfR3nkAwcB7FUu2G1EYrVkHNeAA8FTnjK3x0NjW41a9mlWq7KX6AJTAGtA4VDeDLgY02l+bkO9bWFwGtQYH7KzfKXFKxvdBnqdb8lauLwEaUuc59Jj6PjVH7H7/gGZdmrsKA7caJBbTv23qZ4W7iR0DsxEwOraaSauocjOOzTqa+8HPzfQDnblVsYmmtPgEUO1sf/uvFbAAAAABJRU5ErkJggg=="/>
         <h3>1M+</h3>
         <p>ID Smart Cards Issued</p>
      </div>
      <div class="stats4">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAUpJREFUSEvtlusNwjAMhK8TwAgwAYwAG7ABYgOYhBVgBCaADYANGAE2QIfiKlhpc31IFRL51zT2Fz9iu8BAqxiIiybgFYBZi4veAJy8nAo+AFi3gJoI5TexvAKeA7h2gJroFMDDPhTwAsA5CCwBXBpcolL258CTKObH4MLUXu8WpxSqe59ItXW1CundYjW/fg88Dk+Jb5mLVYhP6pkwubfk8lBjVcHVuNcml4feA9VqdQreGZyCUikXq1Yd3EdATq4qqMWU/5vAJXAOatZUwblvHcyqmQTeAthHvrKGQIXmXsaa1scKKbILGe+biQTmk6EbR64T5ZLmFS5iHqO4XVoCUyAHySp02dUJTEviAuJdXdejO4FTdVkdDv7gcmzy/dg/E7X9Kee+csGD+5ooUxfJTpkc3C2LFUuUMxxrOVuXSxl9FMWNzwwGfgM9zZgfCv1kRgAAAABJRU5ErkJggg=="/>
        <h3>412M+</h3>
        <p>Home Affairs Branches</p>
     </div>
    </div>
    
    <div class="table" id="bookings">
      <div class="titleSort">
      <h3>Booking Details</h3>
      <button class="sort" on:click={sortBookings}>Sort by Date</button>
      </div>
      <table>
          <th>Name</th>
          <th>Surname</th>
          <th>ID Number</th>
          <th>Gender</th>
          <th>Cellphone</th>
          <th>Email</th>
          <th>Civic Service</th>
          <th>Date & Time</th>
        {#if errorMessage}
          <h2>{errorMessage}</h2>
          {:else}
          {#if booking && booking.length > 0}
          {#each booking as bookings }
        <tr>
          <td>{bookings.first_Name}</td>
          <td>{bookings.last_Name}</td>
          <td>{bookings.id_Number}</td>
          <td>{bookings.gender}</td>
          <td>{bookings.cellphone_Number}</td>
          <td>{bookings.email}</td>
          <td>{bookings.civic_Service}</td>
          <td>{bookings.dateTime}</td>
        </tr><br/>
        {/each}
          {:else if booking}
            <h2>No bookings found</h2>
          {:else}
            <h2>Loading...</h2>
          {/if}
          {/if}
      </table>
    </div>
    
    </div>

    <!-- Team -->
    <div class="Team" id="team">
      <h3 class="teamTitle">Members of the Team</h3>
    <br>

<div class="row">
  <div class="column">
    <div class="card">
      <img src="https://img.freepik.com/free-photo/portrait-outgoing-good-looking-african-american-guy-with-bristle-blue-turtleneck_176420-33783.jpg?w=996&t=st=1683626693~exp=1683627293~hmac=95db650878a6b426c4bf7b7cdab6ad1af1e5af5e413c0c8fcec43b665a47657c" alt="John" style="width:350px; border-radius:20px">
      <div class="container">
        <h2>John Peterson</h2>
        <p class="title">Admin Manager</p>
        <p>johnp@homeaffairs.ac.za</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://img.freepik.com/free-photo/cheerful-curly-girl-keeps-thumbs-up-expresses-like-positive-feedback-approves-supports-plan-praises-store-sale-wears-casual-t-shirt-isolated-white-backgound-celebrates-good-result_273609-56257.jpg?w=996&t=st=1683627563~exp=1683628163~hmac=e87eee4510146fa6ca9b6ab6de358cc17c3c432e1b365906f21dd971c2030a9b" alt="Kate" style="width:350px;  border-radius:20px">
      <div class="container">
        <h2>Kate Ross</h2>
        <p class="title">Administrator</p>
        <p>kater@homeaffairs.ac.za</p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src="https://img.freepik.com/free-photo/inside-portrait-confident-young-man-white-clothes-posing-with-charming-smile-isolated-wall_291650-95.jpg?w=996&t=st=1683628851~exp=1683629451~hmac=ae7aceb05dab0abd46ed731de002c82c8e66617a8cac94404cd45297c2877c74" alt="John" style="width:350px;  border-radius:20px">
      <div class="container">
        <h2>Luke Hamilton</h2>
        <p class="title">Data Analyst</p>
        <p>lukeh@homeaffairs.ac.za</p>
      </div>
    </div>
  </div>
</div>
</div>
<p class="footer-company-name">Department of Home Affairs © 2023</p>
  </section>
</body>
  
<style>
  /* Googlefont Poppins CDN Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
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
.teamTitle{
  padding-top: 25px;
}

.Team{
  background-color: white;
  margin-top: 20px;
  margin-left: 20px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

.card {
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  text-align: center;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.logo{
		width: 100px;
		height: 110px;
    margin-left: 60px;
    margin-top: 350px;
	}
.titleSort{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.sort{
  float: right;
  background-color:#FB9646;
  size: 10px;
  margin-right: 10px;
  margin-top: 10px;
  border: none;
  color: white;
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
}
.sort:hover{
  background-color:#006636;
  cursor: pointer;
}
.footer-company-name{
  text-align: center;
  margin-top: 30px;
}
.table{
  background-color: white;
  margin-left: 20px;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin-left: 20px;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tr:hover {background-color:lightgray;}
img{
  margin-top: 20px;
  margin-left: 20px;
}
h3{
  margin-top: 25px;
  margin-left: 20px;
  color: #FB9646;
}
p{
  margin-left: 20px;
  margin-right: 20px;

}
.stats1{
  margin-left: 20px;
  background: white;
  height: 150px;
  width: 300px;
  border-radius:6px ;
  border-color: #FB9646;
  border-style: solid;
}
.stats2{
  margin-left: 20px;
  height: 150px;
  width: 300px;
  border-radius:6px ;
  border-color: #FB9646;
  border-style: solid;
  background: white;
}
.stats3{
  margin-left: 20px;
  height: 150px;
  width: 300px;
  border-radius:6px ;
  border-color: #FB9646;
  border-style: solid;
  background: white;
}
.stats4{
  margin-left: 20px;
  height: 150px;
  width: 300px;
  border-radius:6px ;
  border-color: #FB9646;
  border-style: solid;
  background: white;
}

.cards{
  display: flex;
  justify-content: space-between;
  height: 200px;
  align-items: center;
}
.logout{
  display: flex;
  align-items: center;
  background: #F5F6FA;
  border: 2px solid #EFEEF1;
  border-radius: 6px;
  height: 50px;
  min-width: 50px;
  padding: 0 15px 0 2px;
  margin-right: 10px;
  
}
.logout:hover{
  background:#FB9646;
    cursor: pointer;
}
.logout a{
  font-size: 25px;
  font-weight: 500;
  color: #333;
  margin: 0 10px;
  white-space: nowrap;
}
.sidebar{
  position: fixed;
  height: 100%;
  width: 240px;
  background: linear-gradient(212.38deg, #FB9646 0%, #006636 100%),url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clinithink.com%2F&psig=AOvVaw1kd0yT1HUgd6Qjk6xP6r2q&ust=1679733419021000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJC96-eU9P0CFQAAAAAdAAAAABAS);
  transition: all 0.5s ease;
}
.sidebar .logo-details{
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.sidebar .logo-details i{
  font-size: 28px;
  font-weight: 500;
  color: #fff;
  min-width: 60px;
  text-align: center
}
.sidebar .logo-details .logo_name{
  color: #fff;
  font-size: 24px;
  font-weight: 500;
}
.sidebar .nav-links{
  margin-top: 10px;
}
.sidebar .nav-links li{
  position: relative;
  list-style: none;
  height: 50px;
}
.sidebar .nav-links li a{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li a.active{
  background: #006636;
}
.sidebar .nav-links li a:hover{
  background-color: #FB9646;
}
.sidebar .nav-links li i{
  min-width: 60px;
  text-align: center;
  font-size: 18px;
  color: #fff;
}
.sidebar .nav-links li a .links_name{
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
}
.home-section{
  position: relative;
  background: #f5f5f5;
  min-height: 100vh;
  width: calc(100% - 250px);
  left: 240px;
  transition: all 0.5s ease;
}
.home-section nav{
  margin-left: 15px;
  display: flex;
  justify-content: space-between;
  height: 80px;
  background: #fff;
  display: flex;
  align-items: center;
  position: fixed;
  width: calc(100% - 240px);
  left: 240px;
  z-index: 100;
  padding: 0 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}
.sidebar.active ~ .home-section nav{
  left: 60px;
  width: calc(100% - 60px);
}
.home-section nav .sidebar-button{
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
}
nav .sidebar-button i{
  font-size: 35px;
  margin-right: 10px;
}

.home-section nav .profile-details{
  display: flex;
  align-items: center;
  background: #F5F6FA;
  border: 2px solid #EFEEF1;
  border-radius: 6px;
  height: 50px;
  min-width: 190px;
  padding: 0 15px 0 2px;
  margin-left: 860px;
}
nav .profile-details .admin_name{
  font-size: 15px;
  font-weight: 500;
  color: #333;
  margin: 0 10px;
  white-space: nowrap;
}
nav .profile-details i{
  font-size: 25px;
  color: #333;
}
.home-section .home-content{
  position: relative;
  padding-top: 104px;
}

/* left box */

.sales-boxes .sales-details li a{
  font-size: 18px;
  color: #333;
  font-size: 400;
  text-decoration: none;
}

.sales-boxes .bookings li a{
  font-size: 18px;
  color: #333;
  font-size: 400;
  text-decoration: none;

}



/* Right box */

.sales-boxes .top-sales li a{
  display: flex;
  align-items: center;
  text-decoration: none;
}

/* Responsive Media Query */
@media (max-width: 1240px) {
  .sidebar{
    width: 60px;
  }
 
  .home-section{
    width: calc(100% - 60px);
    left: 60px;
  }
 
  .home-section nav{
    width: calc(100% - 60px);
    left: 60px;
  }
  .sidebar.active ~ .home-section nav{
    width: calc(100% - 220px);
    left: 220px;
  }
}

@media (max-width: 700px) {
  nav .sidebar-button .dashboard,
  nav .profile-details .admin_name,
  nav .profile-details i{
    display: none;
  }
  .home-section nav .profile-details{
    height: 50px;
    min-width: 40px;
  }
 
}
@media (max-width: 550px) {

  .sidebar.active ~ .home-section nav .profile-details{
    display: none;
  }
}
  @media (max-width: 400px) {
  .sidebar{
    width: 0;
  }
 
  .home-section nav{
    width: 100%;
    left: 0;
  }
  .sidebar.active ~ .home-section nav{
    left: 60px;
    width: calc(100% - 60px);
  }
}


</style>



