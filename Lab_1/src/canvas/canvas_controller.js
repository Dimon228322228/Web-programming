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