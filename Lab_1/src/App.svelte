<script>
	import Canvas from "./canvas.svelte";
	import Header from "./header.svelte";
	import InputR from "./inputR.svelte";
	import InputX from "./inputX.svelte";
	import InputY from "./inputY.svelte";
	import Submit_buttom from "./submit_button.svelte";
	import Table from "./table.svelte";
</script>

<main>
	<Header/>
	<div class="main_content">
		<div class="canv"><Canvas/></div>
		<div class="inputs_results">
			<div class="x_r">
				<InputR/>
				<InputX/>
			</div>
			<InputY/>	
			<Submit_buttom/>
			<Table/>
		</div>
	</div>
</main>

<style lang="scss">
	main {
		text-align: center;	
		max-width: 240px;
		margin: 0 auto;
		background-color: burlywood;
		.main_content{
			display: flex;
			justify-content: space-evenly;
			.x_r{
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 20px 0;
			}
		}
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>