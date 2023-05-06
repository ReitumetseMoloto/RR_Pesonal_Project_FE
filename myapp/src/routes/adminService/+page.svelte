<script lang="ts">
  import { onMount } from 'svelte';

 // filter gender
  // let genderStats = {};

  // async function getGenderStats() {
  //   try {
  //     const response = await fetch('http://localhost:3000/bookings/total-gender');
  //     const data = await response.json();
  //     genderStats = data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // onMount(getGenderStats);

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
            <span class="links_name">Bookings</span>
          </a>
        </li>
        <li>
          <a href="@">
            <i class='bx bx-box' ></i>
            <span class="links_name">Reports and Analytics</span>
          </a>
        </li>
        <li>
          <a href="@">
            <i class='bx bx-user' ></i>
            <span class="links_name">Team</span>
          </a>
        </li>
      </ul>
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
    
    <div class="table">
      <h3>Booking Details</h3>
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
        </tr>
        {/each}
          {:else if booking}
            <h2>No bookings found</h2>
          {:else}
            <h2>Loading...</h2>
          {/if}
          {/if}
      </table>
    </div>
  
          <div class="button">
            <!-- <button on:click={() => deletebyID(bookings.IDNumber)}>Delete</button> -->
          </div>
    </div>
 
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
}
p{
  margin-left: 20px;
  margin-right: 20px;

}
.stats1{
  margin-left: 20px;
  background: linear-gradient(212.38deg, rgb(124, 225, 144) 0%, #d7c34d 100%),url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clinithink.com%2F&psig=AOvVaw1kd0yT1HUgd6Qjk6xP6r2q&ust=1679733419021000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJC96-eU9P0CFQAAAAAdAAAAABAS);
  height: 150px;
  width: 300px;
  border-radius:6px ;
}
.stats2{
  margin-left: 20px;
  background: linear-gradient(212.38deg, rgb(124, 225, 144) 0%, #84e9ed 100%),url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clinithink.com%2F&psig=AOvVaw1kd0yT1HUgd6Qjk6xP6r2q&ust=1679733419021000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJC96-eU9P0CFQAAAAAdAAAAABAS);
  height: 150px;
  width: 300px;
  border-radius:6px ;
}
.stats3{
  margin-left: 20px;
  background: linear-gradient(212.38deg, rgb(124, 225, 144) 0%, #e884ed 100%),url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clinithink.com%2F&psig=AOvVaw1kd0yT1HUgd6Qjk6xP6r2q&ust=1679733419021000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJC96-eU9P0CFQAAAAAdAAAAABAS);
  height: 150px;
  width: 300px;
  border-radius:6px ;
}
.stats4{
  margin-left: 20px;
  background: linear-gradient(212.38deg, rgb(124, 225, 144) 0%, #ed8484 100%),url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clinithink.com%2F&psig=AOvVaw1kd0yT1HUgd6Qjk6xP6r2q&ust=1679733419021000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJC96-eU9P0CFQAAAAAdAAAAABAS);
  height: 150px;
  width: 300px;
  border-radius:6px ;
}

.cards{
  display: flex;
  justify-content: space-between;
  height: 200px;
  align-items: center;
  /* position: fixed;
  width: calc(100% - 240px);
  left: 240px;
  z-index: 100;
  padding: 0 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease; */
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
  background: linear-gradient(212.38deg, #F89D07 0%, #006636 100%),url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clinithink.com%2F&psig=AOvVaw1kd0yT1HUgd6Qjk6xP6r2q&ust=1679733419021000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJC96-eU9P0CFQAAAAAdAAAAABAS);
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
  background-color: #F89D07;
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
.sidebar .nav-links .log_out{
  position: absolute;
  bottom: 0;
  width: 100%;
}
.home-section{
  position: relative;
  background: #f5f5f5;
  min-height: 100vh;
  width: calc(100% - 240px);
  left: 240px;
  transition: all 0.5s ease;
}
.home-section nav{
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
.home-section nav .search-box{
  position: relative;
  height: 50px;
  max-width: 550px;
  width: 100%;
  margin: 0 20px;
}
nav .search-box input{
  height: 100%;
  width: 100%;
  outline: none;
  background: #F5F6FA;
  border: 2px solid #EFEEF1;
  border-radius: 6px;
  font-size: 18px;
  padding: 0 15px;
}
nav .search-box .bx-search{
  position: absolute;
  height: 40px;
  width: 40px;
  background: #F89D07;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 4px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  transition: all 0.4 ease;
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

.home-content .sales-boxes{
  display: flex;
  justify-content: space-between;
  /* padding: 0 20px; */
}

/* left box */
.home-content .sales-boxes .recent-sales{
  width: 100%;
  background: #fff;
  padding: 20px 30px;
  margin: 0 20px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  align-content: normal;
}
.home-content .sales-boxes .sales-details{
  display: flex;
  justify-content: space-between;
}

.sales-boxes .sales-details li.topic{
  font-size: 20px;
  font-weight: 500;
}
.sales-boxes .sales-details li{
  list-style: none;
  margin: 8px 0;
}
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
.sales-boxes .bookings li{
  list-style: none;
  margin: 15px 0;
  align-items:center

}
.home-content .sales-boxes .bookings{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sales-boxes .box .button{
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.sales-boxes .box .button a{
  color: #fff;
  background: #006636;
  padding: 4px 12px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.sales-boxes .box .button a:hover{
  background:  #006636;
}

/* Right box */
.sales-boxes .top-sales li{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}

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
@media (max-width: 1150px) {
  .home-content .sales-boxes{
    flex-direction: column;
  }
  .home-content .sales-boxes .box{
    width: 100%;
    overflow-x: scroll;
    margin-bottom: 30px;
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
  .home-content .sales-boxes .sales-details{
    width: 560px;
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
.LineGraph{
  padding-top: 20px;
  background: #fff;
}

</style>



