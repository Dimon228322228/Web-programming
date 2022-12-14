import { canvasDrawer } from "./canvas_drawer";
import { Vector } from "../util/vector.js";
import { Dot } from "../util/dot.js";

export class CanvasView{
  constructor( canvas, tip_canvas, unitR ){
    this.canvas = canvas;
    this._tip_canvas = tip_canvas;
    this.canvasDrawer = new canvasDrawer( canvas, tip_canvas );
    this._canvasDimention = canvas.height;
    this._intervalsNumber = 1;
    this._unitR = unitR;
    this.canvasDrawer.drawBackground( this.canvasDimention/this.intervalsNumber, unitR );
  }

  clear(){
    this.canvasDrawer.clearCanvas( this.canvasDimention / this.intervalsNumber, this.unitR );
    this.canvasDrawer.drawBackground( this.canvasDimention / this.intervalsNumber, this.unitR );
  }

  drawBackground(){
    this.canvasDrawer.drawBackground( this.canvasDimention/this.intervalsNumber, this.unitR );
  }

  drawTip( dot ){
    let vector = new Vector( dot.x, dot.y);
    vector.fromUnitsToPx(this.canvasDimention / this.intervalsNumber, this.canvasDimention / 2, this.unitR);
    this.canvasDrawer.drawTip( dot, vector );
    this.tip_canvas.style.opacity = 1;
  }

  addPoint( hit_results ){
    let vector = new Vector( hit_results.x, hit_results.y );
    vector.fromUnitsToPx( this.canvasDimention / this.intervalsNumber,
              this.canvasDimention / 2, this.unitR );
    let dot;
    if ( hit_results.isHit ){
      if ( hit_results.r == this.unitR ){
        dot = new Dot( vector.x, vector.y, "rgba(0, 128, 0, 1)" );
      } else {
        dot = new Dot( vector.x, vector.y, "rgba(0, 0, 0, 0.05)" );
      }
    } else {
      if ( hit_results.r == this.unitR ){
        dot = new Dot( vector.x, vector.y, "rgba(255, 0, 0, 1)" );
      } else {
        dot = new Dot( vector.x, vector.y, "rgba(0, 0, 0, 0.05)" );
      }
    } 
    this.canvasDrawer.drawPoint( dot );
  }

  get rDot(){
    return this.canvasDrawer.radius;
  }

  get tip_canvas(){
    return this._tip_canvas;
  }

  get canvasOffset(){
    return {
      left: this.canvas.offsetLeft,
      top: this.canvas.offsetTop
    }
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

  set unitR( value ){
    this._unitR = value;
  }
}