<script>
	import SidebarButton from './SidebarButton.svelte';
</script>

<div class="sidebar-container">
	<div class="sidebar">
		<div class="header">
			<img src="/bird.svg" alt="deaddrop logo" />
			<h2>DeadDrop</h2>
		</div>

		<div class="body">
			<div class="sidebar-section">
				<h3>Reporting</h3>
				<SidebarButton href="/dashboard" text="Dashboard" src="/dash.svg" alt="dashboard icon" />
				<SidebarButton href="/logs" text="Logs" src="/logs.svg" alt="logs icon" />
				<!-- <SidebarButton href="/reporting" text = "Reporting" src="/report.svg" alt="report icon" /> -->
			</div>
			<div class="sidebar-section">
				<h3>Payloads</h3>
				<SidebarButton href="/agents" text="Agents" src="/bug.svg" alt="agents icon" />
			</div>
			<div class="sidebar-section">
				<h3>Operational</h3>
				<SidebarButton href="/endpoints" text="Endpoints" src="/monitor.svg" alt="test icon" />
				<SidebarButton href="/tasks" text="Tasks" src="/clipboard.svg" alt="test icon" />
				<SidebarButton href="/files" text="Files" src="/folder.svg" alt="test icon" />
				<SidebarButton href="/credentials" text="Credentials" src="/key.svg" alt="test icon" />
			</div>
			<div class="sidebar-last">
				<SidebarButton href="/" text="Log Out" src="/log_out.svg" alt="test icon" />
			</div>
		</div>

		<div class="foot" />
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
		height: 100vh;
	}

	.sidebar {
		flex: 1;
		background-color: #a60707;
		display: flex;
		flex-direction: column;
	}

	.header {
		color: white;
		flex: 0.1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header img {
		max-width: 33%;
		max-height: 33%;
		object-fit: contain;
	}

	.body {
		color: white;
		flex: 1;
		display: flex;
		flex-direction: column;
		padding-left: 12px;
		padding-right: 12px;
	}

	h3 {
		margin-top: 0px;
    margin-bottom: 5px;
		font-size: 1em;
	}

  .sidebar-section{
    /* flex: 0.325; */
    display: flex;
		flex-direction: column;
		align-items: center;
		border-bottom: 4px solid rgba(255, 255, 255, 0.5);
		margin-bottom: 20px;
  }

  .sidebar-last{
    flex: 0.325;
    display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 20px;
  }

	.foot {
		flex: 0.5;
	}
</style>
