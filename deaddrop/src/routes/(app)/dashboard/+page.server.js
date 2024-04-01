import moment from 'moment-timezone'

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies}) {
    const auth = cookies.get('token')
    const pagedata = {}
    
    moment.tz.setDefault("America/Los_Angeles")
    //note: if you want to make a call from /admin/backend, the uri is http://127.0.0.1:8000/api/backend/task, as opposed to http://127.0.0.1:8000/backend/tasks/
    const tasks = await fetch('http://backend:8000/backend/taskresults/?status=PENDING', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
    })

    const comms = await fetch('http://backend:8000/backend/messages/get_global_recent_stats/',{
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
   })

   const dash_stats = await fetch('http://backend:8000/backend/dashboard/',{
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
   })
   
   const endpnts = await fetch('http://backend:8000/backend/messages/get_endpoint_stats/',{
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + auth
        },
   })

    let comms_data = await comms.json()
    pagedata['comms_chart'] = comms_chart(comms_data)
    pagedata['tasks'] = await tasks.json()
    pagedata['dash_stats'] = await dash_stats.json()
    pagedata['endpnt_chart'] = endpnt_chart(await endpnts.json())
    return {pagedata};
};

function comms_chart(data){
    let labels = []

    for(let i = 0; i <24; i++){
        labels.push(moment().subtract(i, 'hour').format('MM-DD h A'))
    }
    labels.reverse()

    let comms_chart = { // for line chart
        labels: labels,
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
            data: data 
        },
        ],
    }

    return comms_chart
}

function endpnt_chart(data){
    console.log(data)
    let labels = ['']
    let values = []
    
    labels = Object.getOwnPropertyNames(data)
    Object.keys(data).forEach(key => {
        values.push(data[key])
      });
    
    const chart = {
        labels: labels,
        datasets: [
            {
                data: values,
                backgroundColor: ['#636097', '#73a4a7', '#d7375a'],
                hoverBackgroundColor: ['#636097', '#73a4a7', '#d7375a'],
            },
        ],
    }

    return chart
}