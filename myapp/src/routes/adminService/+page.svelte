<script lang="ts">
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
  import { onMount } from 'svelte';

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

  function deletebyID(IDNumber: any) {
    fetch(`http://localhost:3000/bookings/${IDNumber}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          alert("Deleted succeffully");
        } else {
          throw new Error('Invalid data received');
        }
      })
      .catch(error => {
      console.error(error);
      errorMessage = 'Failed to fetch data';
      });
  }
</script>

<!-- 
      <h2>({bookings.first_Name}) {bookings.last_Name}</h2>
      <p>{bookings.email}</p>
      <hr> -->


<link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
<body>
  <div class="sidebar">
    <div class="logo-details">
      <span class="logo_name">Admin Service</span>
    </div>
      <ul class="nav-links">
        <li>
          <a href="@" class="active">
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
        <li class="log_out">
          <a href="/">
            <i class='bx bx-log-out'></i>
            <span class="links_name" >Log out</span>
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
      <div class="search-box">
        <input type="text" placeholder="Search...">
        <i class='bx bx-search' ></i>
      </div>
      <div class="profile-details">
        <span class="admin_name">Administrator</span>
        <i class='bx bx-chevron-down' ></i>
      </div>
    </nav>
<!--GET Bookings-->
{#if errorMessage}
  <h2>{errorMessage}</h2>
{:else}
  {#if booking && booking.length > 0}
    {#each booking as bookings }
    <div class="home-content">
      <div class="sales-boxes">
        <div class="recent-sales box">
          <!-- <div class="title">Bookings</div> -->
          <div class="sales-details">
            
            <ul class="details">
              <li class="topic">First Name</li>
              <li><a href="@">{bookings.first_Name}</a></li>
            </ul>
            
            <ul class="details">
            <li class="topic">Last Name</li>
            <li><a href="@">{bookings.last_Name}</a></li>
          </ul>

          <ul class="details">
            <li class="topic">ID Number</li>
            <li><a href="@">{bookings.id_Number}</a></li>
          </ul>

          <ul class="details">
            <li class="topic">Gender</li>
            <li><a href="@">{bookings.gender}</a></li>
          </ul>

          <ul class="details">
            <li class="topic">Cellphone Number</li>
            <li><a href="@">{bookings.cellphone_Number}</a></li>
          </ul>

          <ul class="details">
            <li class="topic">Email</li>
            <li><a href="@">{bookings.email}</a></li>
          </ul>

          <ul class="details">
            <li class="topic">Civic Service</li>
            <li><a href="@">{bookings.civic_Service}</a></li>
          </ul>

          <ul class="details">
            <li class="topic">Date & Time</li>
            <li><a href="@">{bookings.dateTime}</a></li>
          </ul>

          </div>
          <div class="button">
            <button on:click={() => deletebyID(bookings.IDNumber)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
    {/each}
    {:else if booking}
      <h2>No bookings found</h2>
    {:else}
      <h2>Loading...</h2>
    {/if}
  {/if}
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
.sidebar{
  position: fixed;
  height: 100%;
  width: 240px;
  background: #006636;
  transition: all 0.5s ease;
}
.sidebar .logo-details{
  height: 80px;
  display: flex;
  align-items: center;
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
  background: #006636;
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
}
.home-content .sales-boxes .sales-details{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sales-boxes .box .title{
  font-size: 24px;
  font-weight: 500;
  /* margin-bottom: 10px; */
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

</style>



