<script>
	import { onMount } from "svelte";
  import { CanvasController } from "./canvas/canvas_controller.js";
  import { CanvasView } from "./canvas/canvas_view.js";
  import { InputModel } from './util/input_model.js';
	import { setContext } from "svelte";
	let canv = document.createElement('canvas');
	canv.height = 400;
	canv.width = 400;
	let input_model = new InputModel();
	let canvas_view = new CanvasView( canv, input_model.r );
  let canvas_controller = new CanvasController( canvas_view, input_model );
	canv.addEventListener('click', (event) => { canvas_controller.require_data(event), true } );
	
	setContext( 'canvas', {
		canvas: canv,
		canvas_view: canvas_view,
		canvas_controller: canvas_controller
	} )

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
		<Canvas/>
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
	@import "./styles/canvas.scss";
</style>