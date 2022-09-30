export function drawing ( canvas ){
  const ctx = canvas.getContext('2d');
  const center = { // Canvas center
    x: 200,
    y: 200
  }
  // Drawing Triange axis
  ctx.fillStyle = '#000000'
  ctx.beginPath();
  ctx.moveTo(200, 0);
  ctx.lineTo(205, 10);
  ctx.lineTo(195, 10); 
  
  ctx.moveTo(400, 200);
  ctx.lineTo(390, 195);
  ctx.lineTo(390, 205);
  ctx.fill();

  // Drawing axis
  ctx.strokeStyle = '#000000';
  ctx.beginPath();
  ctx.moveTo(0, 200);
  ctx.lineTo(400, 200);
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 400);
  ctx.stroke();

  // Drawing left-top square circle
  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.arc(200, 200, 80, Math.PI, 3*Math.PI/2, false);
  ctx.lineTo(200, 200);
  ctx.fillStyle = 'rgba(255,0,0,.5)';
  ctx.fill();

  // Drawing major lines
   // horizontal
   ctx.font = "14px serif";
   ctx.fillStyle = '#000';

   ctx.beginPath();
   ctx.moveTo(center.x - 80, center.y + 5);
   ctx.lineTo(center.x - 80, center.y - 5);
   ctx.fillText("-R/2", center.x - 93, center.y - 10);

   ctx.moveTo(center.x - 160, center.y + 5);
   ctx.lineTo(center.x - 160, center.y - 5);
   ctx.fillText("-R", center.x - 167, center.y - 10);

   ctx.moveTo(center.x + 80, center.y + 5);
   ctx.lineTo(center.x + 80, center.y - 5);
   ctx.fillText("R/2", center.x + 70, center.y - 10);

   ctx.moveTo(center.x + 160, center.y + 5);
   ctx.lineTo(center.x + 160, center.y - 5);
   ctx.fillText("R", center.x + 156, center.y - 10);

   // Vertical
   ctx.moveTo(center.x + 5, center.y + 80);
   ctx.lineTo(center.x - 5, center.y + 80);
   ctx.fillText("-R/2", center.x + 8, center.y + 84);

   ctx.moveTo(center.x + 5, center.y + 160);
   ctx.lineTo(center.x - 5, center.y + 160);
   ctx.fillText("-R", center.x + 8, center.y + 164);
   
   ctx.moveTo(center.x + 5, center.y - 80);
   ctx.lineTo(center.x - 5, center.y - 80);
   ctx.fillText("R/2", center.x + 8, center.y - 76);
   
   ctx.moveTo(center.x + 5, center.y - 160);
   ctx.lineTo(center.x - 5, center.y - 160);
   ctx.fillText("R", center.x + 8, center.y - 156);

   ctx.fillText("X", 2*center.y - 10, center.y - 10);
   ctx.fillText("Y", center.x + 8, 10);

   ctx.stroke();
// Drawing rectangle
   ctx.beginPath();
   ctx.fillStyle = 'rgba(255,0,0,.5)'
   ctx.fillRect(200,200,80,160);
// Drawing triangle
   ctx.beginPath();
   ctx.fillStyle = 'rgba(255,0,0,.5)'
   ctx.moveTo(200,200);
   ctx.lineTo(200,360);
   ctx.lineTo(120, 200);
   ctx.fill();
}