<script>
    // import { comms_data, tasks} from '$lib/components/data';
    export let data;
    let {comms_data, endpt_comms, tasks } = data;
    import LineChart from '$lib/components/LineChart.svelte';
    import Pagination from '$lib/components/Pagination.svelte';
    // server log data is how many communications between c2 server and user
    // agent log data is how many communications between c2 server and user
    // tasks is ID, endpoitn, user, starttime from django

    // for tasks - we want to yoink this data straight from django in the load function
    // for comms_data - we can't do this yet or i don't know how to
    // this comms_data may just be a calculation of all logs filtered by the time. 
    // this will be the implementation in the load function at least. by implementing this in the load function, we are able to easily change as needed
    let {log_list, log_rows} = data;
    //console.log(log_list) // you can yoink the name from here
    //console.log((log_rows)) // you can yoink the endpoint counts from here

    //This is differentiating the types of logs, I'm not sure that agent versus server falls into category but this is what we will work with for now
    function compile_log_data(log_list, type){
        let logs = []
        let x_axis = []
        let times = []
        let freq = []

        //separate into log by server or agent
        if(type == 's'){ 
            for (let i= 0; i < log_list.length; i++){
                if (log_list[i].category == 'server'){logs.push(log_list[i])}
            }
        }
        if(type == 'a'){ 
            for (let i= 0; i < log_list.length; i++){
                if (log_list[i].category == 'agent'){logs.push(log_list[i])}
            }
        }

        //collect timestamps into an array for the x-axis
        for (let i=0; i < logs.length; i++){
            times.push(logs[i].timestamp)
        }
        x_axis = times.filter((value, index, self) => self.indexOf(value) === index);
    
        //determine frequency for each timestamp
        for (let i = 0; i < x_axis.length; i++){
            let count = 0
            for(let j = 0; j < times.length; j++){
                if(x_axis[i] == times[j]){count++}
            }
            freq.push(count)
        }
      
        //create compiled data for graphs
        let log_data = {
            labels: x_axis,
            datasets: [{
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
            data: freq // the only important data point - corresponds to labels
            }],
        }

        return log_data
    }

    let agent_log_data = compile_log_data(log_list, 'a')
    let server_log_data = compile_log_data(log_list, 's')
</script>

<div class = "container">
    <div class ="upper_body">  
        <div class = "section">
            <h2> Logs </h2>
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Server-generated logs </span>
                </div> 
                <div class = "tab_content">
                    <LineChart data = {server_log_data}/>
                </div>    
            </div>
        </div>
        <div class = "section">
            <h2 style = "color: #e6e6e6">.</h2>
            <div class = "tab_body"> 
                <div class = "tab_head">
                    <span> Agent-generated logs </span>
                </div> 
                <div class = "tab_content">
                    <LineChart data = {agent_log_data}/>
                </div>    
            </div>
        </div>
        
    </div>
    <div class= "lower_body">
        <div class = "tab_body"> 
            <div class = "tab_head">
                <span> Logs</span>
            </div> 
            <div class = "tab_content">
                <Pagination data = {tasks}/>
            </div>    
        </div>
    </div>
</div>

<style>
    .container {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 125vh;

    }

    .upper_body {
        flex: 1;
        display: flex;
        flex-direction: row;
    }

    .lower_body {
        flex: 1;
        display: flex;
        
    }
</style>