import { canvasDrawer } from "./canvas_drawer";
import { Vector } from "../util/vector.js";
import { Dot } from "../util/dot.js";

export class CanvasView{
  constructor( canvas, unitR ){
    this.canvas = canvas;
    this.canvasDrawer = new canvasDrawer( canvas );
    this._canvasDimention = canvas.height;
    this._intervalsNumber = 3;
    this._unitR = unitR;
    this.canvasDrawer.drawBackground( this.canvasDimention/this.intervalsNumber, unitR );
  }


  clear(){
    this.canvasDrawer.clearCanvas();
    this.canvasDrawer.drawBackground( this.canvasDimention / this.intervalsNumber, this.unitR );
  }

  addPoint( hit_results ){
    let vector = new Vector( hit_results.x, hit_results.y );
    vector.fromUnitsToPx( this.canvasDimention / this.intervalsNumber,
              this.canvasDimention / 2, this.unitR );
    let dot;
    if ( hit_results.isHit ) dot = new Dot( vector.x, vector.y, "green" );
      else dot = new Dot( vector.x, vector.y, "red" );
    this.canvasDrawer.drawPoint( dot );
  }

  bindClick = (handler) => {
    this.canvas.addEventListener( "click", handler );
  }

  get canvasDimention(){
    return this._canvasDimention;
  }

  get intervalsNumber(){
    return this._intervalsNumber;
  }

  get unitR(){
    return this._unitR;
  }
}