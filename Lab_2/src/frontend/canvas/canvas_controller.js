import { Vector } from '../util/vector.js';
export class CanvasController{
  constructor( canvasView, inputModel ){
    this._canvasView = canvasView;
    this._inputModel = inputModel;
  }

  request_data( event ){
    let vector = getPosition( event );
    vector.fromPxToUnits( this.canvasView.canvasDimention / this.canvasView.intervalsNumber, this.canvasView.canvasDimention / 2, this.canvasView.unitR );
    let callback = this.redraw_canvas.bind( this );
    this._inputModel.requestData( vector, callback );
  }

  handleMouseMove( event ){
    let mouseX = event.offsetX;
    let mouseY = event.offsetY;
    for (let i = 0; i < this._inputModel.table.length; i++) {
        let dot = this._inputModel.table[i];
        let vector = new Vector( dot.x, dot.y );
        vector.fromUnitsToPx( this.canvasView.canvasDimention / this.canvasView.intervalsNumber, this.canvasView.canvasDimention / 2, this.canvasView.unitR );
        let dx = mouseX - vector.x;
        let dy = mouseY - vector.y;
        if (dx * dx + dy * dy < this._canvasView.rDot) {
            this._canvasView.drawTip( dot );
            let hide_tip = this.hide_tip.bind(this);
            setTimeout( hide_tip , 3000);
        }
    }
  }

  hide_tip(){
    this._canvasView.tip_canvas.style.left = '-200px';
    this._canvasView.tip_canvas.style.opacity = 0;
  }

  _redraw_canvas( canvasView, table ){
    canvasView.clear();
    let callback = canvasView.addPoint.bind(canvasView);
    table.forEach(item => { callback(item) });
  }

  redraw_canvas( table ){
    let callback = this._redraw_canvas.bind( null, this._canvasView );
    callback( table );
  }

  update_scale(){
    this.canvasView.unitR = this._inputModel.r;
    this.canvasView.drawBackground();
    this.redraw_canvas( this._inputModel.table );
  }

  set canvasView ( canvasView ){
    this._canvasView = canvasView
  }

  get canvasView (){
    return this._canvasView;
  }
}

function getPosition( event ) {
  return new Vector( event.offsetX, event.offsetY );
}