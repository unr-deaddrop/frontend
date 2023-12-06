export const comms_data = {
    labels: [
        '1AM', '2AM', '3AM', '4AM', '5AM', '6AM',
        '7AM', '8AM', '9AM', '10AM', '11AM', '12PM',
        '1PM', '2PM', '3PM', '4PM', '5PM', '6PM',
        '7PM', '8PM', '9PM', '10PM', '11PM',
      ],
    datasets: [
      {
        label: 'Communications',
        fill: true,
        lineTension: 0.3,
        backgroundColor: 'rgba(184, 185, 210, .3)',
        borderColor: '#a60707',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#a60707',
        pointBackgroundColor: 'rgb(255, 255, 255)',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(0, 0, 0)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [12, 45, 67, 23, 5, 34, 89, 1, 56, 78, 9, 22, 68, 31, 74, 17, 83, 41, 3, 60, 29, 51, 14]
      },
    ],
  };
  
export const endpt_comms = {
    labels: ['Direct', 'Social', 'Referral'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['#636097', '#73a4a7', '#d7375a'],
        hoverBackgroundColor: ['#636097', '#73a4a7', '#d7375a'],
      },
    ],
  };