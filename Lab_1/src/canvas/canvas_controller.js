import { Vector } from '../util/vector.js';
import { table } from '../store.js';
import { get } from 'svelte/store';

export class CanvasController{
  constructor( canvasView, inputModel ){
    this._canvasView = canvasView;
    this._inputModel = inputModel;
  }

  require_data( event ){
    console.log(event);
    let vector = getPosition( event );
    console.log(vector);
    vector.fromPxToUnits( this.canvasView.canvasDimention / this.canvasView.intervalsNumber, this.canvasView.canvasDimention / 2, this.canvasView.unitR );
    console.log(vector);
    let data = this._inputModel.getData();
    console.log(data);
    if ( data.get('isOk') ){
      table.set( data.get('data') );
    } else {
      console.error('Something wrong by get data!');
    }
  }

  set canvasView ( canvasView ){
    this._canvasView = canvasView
  }

  get canvasView (){
    return this._canvasView;
  }
}

function getPosition( event ) {
  console.log(event);
  return new Vector( event.offsetX, event.offsetY );
}