import { getHeightText } from "../util/calc_height.js";

export class canvasDrawer{

  constructor( canvas, tip_canv ){
    this.canvas = canvas;
    this.tip_canvas = tip_canv;
    this.ctx = canvas.getContext('2d');
    this.tip_ctx = this.tip_canvas.getContext('2d');
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this._radius = 5;
  }

  get radius() {
    return this._radius;
  }

  drawPoint( dot ) {
    let dotCircle = new Path2D();
    dotCircle.arc( dot.x, dot.y, this._radius, 0, 2 * Math.PI );
    this.ctx.fillStyle = dot.color;
    this.ctx.fill(dotCircle);
  }

  drawTip( dot, vector ){
    this.tip_canvas.style.left = (vector.x) + "px";
    this.tip_canvas.style.top = (vector.y - 20) + "px";
    this.tip_ctx.clearRect(0, 0, this.tip_canvas.width, this.tip_canvas.height);
    this.tip_ctx.font = "14px sans-serif";
    this.tip_ctx.fillStyle=`rgb(${185/4}, ${95/4}, ${11*10})`;
    this.tip_ctx.fillText(` X: ${dot.x}; Y: ${dot.y}; R: ${dot.r}; `, 5, 20);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawBackground( unitRSizePx, unitR ) {
    this.drawAxises();
    this.drawLeftTopSquareCircle( unitRSizePx );
    this.drawRectangle( unitRSizePx );
    this.drawTriangle( unitRSizePx );
    this.drawText( unitRSizePx, unitR );
  }

  drawAxises(){
    this.ctx.strokeStyle = '#000';
    this.ctx.fillStyle = '#000';
    let x_axis = new Path2D();
    let y_axis = new Path2D();
    let axis_triangles = new Path2D();

    x_axis.moveTo( 0, this.height / 2 );
    x_axis.lineTo( this.width, this.height / 2 );
    y_axis.moveTo( this.width / 2, 0 );
    y_axis.lineTo( this.width / 2, this.height );
    y_axis.addPath(x_axis);
    this.ctx.stroke(y_axis);

    axis_triangles.moveTo( this.width, this.height / 2 );
    axis_triangles.lineTo( this.width - 10, (this.height / 2) - 5 );
    axis_triangles.lineTo( this.width - 10, (this.height / 2) + 5 );
    axis_triangles.closePath();
    axis_triangles.moveTo( this.width / 2, 0 );
    axis_triangles.lineTo( (this.width / 2) + 5, 10 );
    axis_triangles.lineTo( (this.width / 2) - 5, 10 );
    this.ctx.fill(axis_triangles);
  }

  drawLeftTopSquareCircle( unitRSizePx ){
    this.ctx.fillStyle = 'rgba(240,240,60,.4)';
    let path = new Path2D();
    path.moveTo( this.width / 2, this.height / 2 );
    path.arc( this.width / 2, this.height / 2, unitRSizePx / 2, Math.PI, 3*Math.PI/2, false );
    path.closePath();
    this.ctx.fill(path); 
  }

  drawRectangle( unitRSizePx ){
    let path = new Path2D();
    this.ctx.fillStyle = 'rgba(240,240,60,.4)';
    path.rect( this.width / 2 - unitRSizePx / 2, this.height / 2, unitRSizePx / 2, unitRSizePx );
    this.ctx.fill(path);
  }

  drawTriangle( unitRSizePx ){
    let path = new Path2D();  
    this.ctx.fillStyle = 'rgba(240,240,60,.4)';
    path.moveTo( this.width / 2, this.height / 2 );
    path.lineTo( this.width / 2, (this.height / 2) - unitRSizePx / 2 );
    path.lineTo( (this.width / 2) + unitRSizePx, this.height / 2 );
    this.ctx.fill( path );
  }

  drawText( unitRSizePx, unitR ){
    this.ctx.font = "14px sans-serif";
    this.ctx.fillStyle = '#000';
    let dashes = new Path2D();
    dashes.moveTo( (this.width / 2) - (unitRSizePx / 2), (this.height / 2) + 5 );
    dashes.lineTo( (this.width / 2) - (unitRSizePx / 2), (this.height / 2) - 5 ); 
    dashes.moveTo( (this.width / 2) - unitRSizePx, (this.height / 2) + 5 );
    dashes.lineTo( (this.width / 2) - unitRSizePx, (this.height / 2) - 5 );
    dashes.moveTo( (this.width / 2) + (unitRSizePx / 2), (this.height / 2) + 5 );
    dashes.lineTo( (this.width / 2) + (unitRSizePx / 2), (this.height / 2) - 5 ); 
    dashes.moveTo( (this.width / 2) + unitRSizePx, (this.height / 2) + 5 );
    dashes.lineTo( (this.width / 2) + unitRSizePx, (this.height / 2) - 5 );
    dashes.moveTo( (this.width / 2) + 5, (this.height / 2) + (unitRSizePx / 2) );
    dashes.lineTo( (this.width / 2) - 5, (this.height / 2) + (unitRSizePx / 2) ); 
    dashes.moveTo( (this.width / 2) + 5, (this.height / 2) + unitRSizePx );
    dashes.lineTo( (this.width / 2) - 5, (this.height / 2) + unitRSizePx );
    dashes.moveTo( (this.width / 2) + 5, (this.height / 2) - (unitRSizePx / 2) );
    dashes.lineTo( (this.width / 2) - 5, (this.height / 2) - (unitRSizePx / 2) ); 
    dashes.moveTo( (this.width / 2) + 5, (this.height / 2) - unitRSizePx );
    dashes.lineTo( (this.width / 2) - 5, (this.height / 2) - unitRSizePx );
    this.ctx.stroke(dashes);

    let unsign_strR = `${ unitR }`;
    let sign_strR = `${ - unitR }`;
    let half_unsign_strR = `${ unitR / 2 }`;
    let half_sign_strR = `${ - unitR / 2 }`;
    let height_text = getHeightText(unsign_strR).height;
    this.ctx.textBaseLine = 'top';
    this.ctx.textAlign = 'center';
    this.ctx.fillText( half_sign_strR, (this.width / 2) - (unitRSizePx / 2), (this.height / 2) - height_text / 2 - 1);
    this.ctx.fillText( sign_strR, (this.width / 2) - unitRSizePx, (this.height / 2) - height_text / 2 - 1 );
    this.ctx.fillText( half_unsign_strR, (this.width / 2) + (unitRSizePx / 2), (this.height / 2) - height_text / 2 - 1 );
    this.ctx.fillText( unsign_strR, (this.width / 2) + unitRSizePx , (this.height / 2) - height_text / 2 - 1 );
    this.ctx.fillText( half_sign_strR,
        (this.width / 2) + this.ctx.measureText(half_sign_strR).width,
        (this.height / 2) + (unitRSizePx / 2) + (height_text / 4) );
    this.ctx.fillText( sign_strR,
        (this.width / 2) + this.ctx.measureText(sign_strR).width * 1.2,
        (this.height / 2) + unitRSizePx + (height_text / 4) );
    this.ctx.fillText( half_unsign_strR,
        (this.width / 2) + this.ctx.measureText(half_unsign_strR + " ").width,
        (this.height / 2) - (unitRSizePx / 2) + (height_text / 4) );
    this.ctx.fillText( unsign_strR,
        (this.width / 2) + this.ctx.measureText(unsign_strR + " ").width,
        (this.height / 2) - unitRSizePx + (height_text / 4) );
    this.ctx.fillText( "X",  this.width - this.ctx.measureText("X").width / 2, (this.height / 2) - 10 );
    this.ctx.fillText( "Y", (this.width / 2) + this.ctx.measureText("X").width, 10 );    
  }
}