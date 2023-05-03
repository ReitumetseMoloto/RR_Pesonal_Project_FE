let bookingsData: any[] = [];

fetch('http://localhost:3000/bookings/getMonth')
  .then(response => response.json())
  .then(data => {
    bookingsData = data;
  })
  .catch(error => console.error(error));
  
export const data = {
    labels: bookingsData.map(booking => booking.month),
    datasets: [
      {
        label: '% of Bookings',
        data: bookingsData.map(booking => booking.count),
        backgroundColor: [
          'rgba(255, 134,159,0.4)',

        ],
        borderWidth: 2,
        borderColor: [
          'rgba(255, 134, 159, 1)',

        ],
      },
    ],
  };