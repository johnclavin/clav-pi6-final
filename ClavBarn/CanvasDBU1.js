// Canvas Development Backup 1 - John Clavin Nov 19, 2021

import React, { useRef, useEffect } from 'react';

function Canvas(props) {
  const canvasRef = useRef(null);

  function draw(ctx) {
    ctx.fillStyle = '#d9d9d9';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let colorArr1 = [
      '#A52A2A','#DEB887','#D2691E','#FF7F50','#DC143C','#FF8C00','#E9967A','#B22222',
      '#DAA520','#CD5C5C','#FFA500','#FF4500','#FA8072','#FF6347','#FF4500','#EE82EE'
      ];
    let colorArr2 = [
      '#7FFFD4','#556B2F','#BDB76B','#006400','#8FBC8F','#228B22','#008000','#7CFC00',
      '#90EE90','#20B2AA','#32CD32','#66CDAA','#3CB371','#808000','#6B8E23','#9ACD32'
      ];
    let colorArr3 = [
      '#00FFFF','#0000FF','#5F9EA0','#6495ED','#00FFFF','#A9A9A9','#483D8B','#00BFFF',
      '#1E90FF','#DCDCDC','#F8F8FF','#ADD8E6','#87CEFA','#B0C4DE','#0000CD','#4169E1'
      ];  
    let jcolors = [];
    let colorIndex = Math.floor(Math.random() * 16);
    let rcolor = colorArr1[colorIndex];
    jcolors.push(rcolor);
    colorIndex = Math.floor(Math.random() * 16);
    rcolor = colorArr2[colorIndex];
    jcolors.push(rcolor);
    colorIndex = Math.floor(Math.random() * 16);
    rcolor = colorArr3[colorIndex];
    jcolors.push(rcolor);
    for (let i = 0; i < 1300; i++) {
      let jselect = Math.floor(Math.random() * 4);
      let jcolor = jcolors[jselect];
      ctx.fillStyle = jcolor;
      ctx.beginPath();
      let rx = Math.random() * 328 + 16;
      let ry = Math.random() * 328 + 16;
      ctx.arc(rx, ry, 12, 0, 2 * Math.PI);
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'black';
      ctx.stroke();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    draw(context);
  });

  return <canvas ref={canvasRef} width={360} height={360} style={{border:'6px solid #666666'}} />;
}

export default Canvas;
