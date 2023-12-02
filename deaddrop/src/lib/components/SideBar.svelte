<script>
    import SidebarButton from "./SidebarButton.svelte";
</script>

<div class="sidebar-container">
  <div class = "sidebar">
    
    <div class = "header">
      <img src = "/favicon.png" alt = "deaddrop logo">
      <h2> DeadDrop </h2>
    </div>

    <div class = "body">
      <div class = "report">
        <h3> Reporting </h3>
        <SidebarButton href="/dashboard" text = "Dashboard" src="/dash.svg" alt="test icon" />
        <SidebarButton href="/example" text = "Logs" src="/logs.svg" alt="test icon" />
        <SidebarButton href="/example" text = "Reporting" src="/report.svg" alt="test icon" />
      </div>
      <div class = "payloads">
        <h3> Payloads </h3>
        <SidebarButton href="/han/agents" text = "Agents" src="/bug.svg" alt="agents icon" />
        <SidebarButton href="/example" text = "Protocols" src="/wifi.svg" alt="test icon" />
      </div>
      <div class = "operational">
        <h3> Operational </h3>
        <SidebarButton href="/example" text = "Endpoints" src="/monitor.svg" alt="test icon" />
        <SidebarButton href="/example" text = "Tasks" src="/clipboard.svg" alt="test icon" />
        <SidebarButton href="/example" text = "Files" src="/folder.svg" alt="test icon" />
        <SidebarButton href="/example" text = "Credentials" src="/key.svg" alt="test icon" />
      </div>
    </div>
    
    <div class = "foot"></div>
  </div>
</div>

<style>
    :global(body, header, div) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .sidebar-container {
      display: flex;
      height: 75vh; 
    }
  
    .sidebar {
      flex: 1;
      background-color: #a60707; 
      display: flex;
      flex-direction: column;
    }

    .header{
      color: white;
      flex: .1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .header img {
      max-width: 33%; 
      max-height: 33%; 
      object-fit: contain;
    }

    .body{
      color: white;
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-left: 12px;
      padding-right: 12px;
    }

    .report{
      flex: .325;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: 4px solid rgba(255, 255, 255, 0.5);
      margin-bottom: 20px;
    }

    h3 {
      margin-top: 0px;
      font-size: 1em;
    }

    .payloads{
      flex: .25;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: 4px solid rgba(255, 255, 255, 0.5);
      margin-bottom: 20px;
    }

    .operational{
      flex: .425;
      display: flex;
      flex-direction: column;
      align-items: center;
   
    }

    .foot {
      flex: .5;
    }

    
</style>

