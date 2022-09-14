function drawAxisTriangle(ctx){
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
}
function drawAxis(ctx){
  // Drawing axis
  ctx.strokeStyle = '#000000';
  ctx.beginPath();
  ctx.moveTo(0, 200);
  ctx.lineTo(400, 200);
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 400);
  ctx.stroke();
}
function drawQuaterCercal(ctx){
  // Drawing left-top square circle
  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.arc(200, 200, 80, Math.PI, 3*Math.PI/2, false);
  ctx.lineTo(200, 200);
  ctx.fillStyle = 'rgba(255,0,0,.5)';
  ctx.fill();
}
function drawLinesAxis(ctx){
  // Drawing major lines
  // horizontal
  ctx.beginPath();
  ctx.moveTo(center.x - 80, center.y + 5);
  ctx.lineTo(center.x - 80, center.y - 5);
  
  ctx.moveTo(center.x - 160, center.y + 5);
  ctx.lineTo(center.x - 160, center.y - 5);
  
  ctx.moveTo(center.x + 80, center.y + 5);
  ctx.lineTo(center.x + 80, center.y - 5);
  
  ctx.moveTo(center.x + 160, center.y + 5);
  ctx.lineTo(center.x + 160, center.y - 5);
  // Vertical
  ctx.moveTo(center.x + 5, center.y + 80);
  ctx.lineTo(center.x - 5, center.y + 80);
  
  ctx.moveTo(center.x + 5, center.y + 160);
  ctx.lineTo(center.x - 5, center.y + 160);
  
  ctx.moveTo(center.x + 5, center.y - 80);
  ctx.lineTo(center.x - 5, center.y - 80);
  
  ctx.moveTo(center.x + 5, center.y - 160);
  ctx.lineTo(center.x - 5, center.y - 160);
  ctx.stroke();
}

function drawRectangle(ctx){
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255,0,0,.5)'
  ctx.fillRect(200,200,80,160);
}

function drawTriangle(ctx){
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255,0,0,.5)'
  ctx.moveTo(200,200);
  ctx.lineTo(200,360);
  ctx.lineTo(120, 200);
  ctx.fill();
}

// Getting canvas object
const canvas = document.getElementById('canvas');
canvas.addEventListener('click', (e) => console.log(e));
const ctx = canvas.getContext('2d');
const center = { // Canvas center
  x: 200,
  y: 200
}
drawAxis(ctx);
drawAxisTriangle(ctx);
drawLinesAxis(ctx);
drawQuaterCercal(ctx);
drawRectangle(ctx);
drawTriangle(ctx);