const cvx = document.createElement('canvas');
document.body.appendChild(cvx);
const ctx = cvx.getContext("2d");
cvx.height = innerHeight;
cvx.width = innerWidth;


class Quadrilateral{
   constructor(x,y,width,height,color){
           this.x = x;
           this.y = y;
           this.width = width;
           this.height = height;
           this.color = color;
            }
         draw(){
            ctx.save();
            ctx.beginPath();           
            ctx.rect(this.x,this.y,this.width,this.height );
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
            }
}
