<script>
	import Canvas from "./canvas.svelte";
	import Header from "./header.svelte";
	import InputR from "./inputR.svelte";
	import InputX from "./inputX.svelte";
	import InputY from "./inputY.svelte";
	import Submit_buttom from "./submit_button.svelte";
	import Table from "./table.svelte";
	import Reset from "./reset.svelte";
</script>

<main>
	<Header/>
	<div class="main_content">
		<div class="canv"><Canvas/></div>
		<div class="right_side">
			<div class="input_data">
				<div class="x_and_r">
					<div class="r">
						<InputR/>						
					</div>
					<div class="x">
						<InputX/>
					</div>
				</div>
				<div class="y">
					<InputY/>	
				</div>
				<div class="buttons">
					<Submit_buttom/>
					<Reset/>
				</div>
			</div>
			<Table/>
		</div>
	</div>
</main>

<style lang="scss">
	@import "./styles/app.scss";
</style>