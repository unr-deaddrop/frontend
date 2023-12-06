<script>
    import { Pie } from 'svelte-chartjs';
    export let data;
    
    import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'
    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)
</script>
  
  <Pie data = {data} options={{ plugins: { legend: { display: true, position: 'bottom' } } }} />
  