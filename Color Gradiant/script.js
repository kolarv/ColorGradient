const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const w = 500;
const h = 500;
canvas.width = w;
canvas.height = h;
const centerW = parseInt(w/2);
const centerH = parseInt(h/2);


function getPixelColor(posX,posY){
    if(posX>=0&&posX<=w&&posY>=0&&posY<=h){
        return  ctx.getImageData (posX,posY,1,1);
    }
    return 128;
}

function pixelColorOfset(posX,posY){
    var lastX = getPixelColor(posX-1,posY).data;
    var lastY = getPixelColor(posX,posY-1).data;

    var last = [(lastX[0]+lastY[0])/2,(lastX[1]+lastY[1])/2,(lastX[2]+lastY[2])/2]

    var ofsetR = Math.floor(Math.random()*25);
    if(Math.random() < 0.5){
        ofsetR *=-1;
    }
    ofsetR += last[0];
    if(ofsetR>255){ofsetR = 255}
    if(ofsetR<0){ofsetR = 0}

    var ofsetG = Math.floor(Math.random()*25);
    if(Math.random() < 0.5){
        ofsetG *=-1;
    }
    ofsetG += last[1];
    if(ofsetG>255){ofsetG = 255}
    if(ofsetG<0){ofsetG = 0}

    var ofsetB = Math.floor(Math.random()*25);
    if(Math.random() < 0.5){
        ofsetB *=-1;
    }
    ofsetB += last[2];
    if(ofsetB>255){ofsetB = 255}
    if(ofsetB<0){ofsetB = 0}
    return "RGB("+ofsetR+","+ofsetG+","+ofsetB+")";
}

function pixelColorLine(posX,posY){
    var last = getPixelColor(posX,posY).data;
    var ofsetR = Math.floor(Math.random()*5);
    if(Math.random() < 0.5){
        ofsetR *=-1;
    }
    ofsetR += last[0];
    if(ofsetR>255){ofsetR = 255}
    if(ofsetR<0){ofsetR = 0}

    var ofsetG = Math.floor(Math.random()*5);
    if(Math.random() < 0.5){
        ofsetG *=-1;
    }
    ofsetG += last[1];
    if(ofsetG>255){ofsetG = 255}
    if(ofsetG<0){ofsetG = 0}

    var ofsetB = Math.floor(Math.random()*5);
    if(Math.random() < 0.5){
        ofsetB *=-1;
    }
    ofsetB += last[02];
    if(ofsetB>255){ofsetB = 255}
    if(ofsetB<0){ofsetB = 0}
    //console.log(ofsetR+","+ofsetG+","+ofsetB)
    return "RGB("+ofsetR+","+ofsetG+","+ofsetB+")";
}

function randomStarter(){
    var red = Math.floor(Math.random()*255);
    var green = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);

    return "RGB("+red+","+green+","+blue+")";
}

function colorToText(posX,posY){
    var pixel = getPixelColor(posX,posY).data;
    console.log("r: "+pixel[0]+" g:"+pixel[1]+" b: "+pixel[2]);
}
ctx.fillStyle = randomStarter();
ctx.fillRect(0,0,1,1);
colorToText(0,0);

for(let i=1;i<=w;i++){
    ctx.fillStyle = pixelColorLine(i-1,0);
    ctx.fillRect(i,0,1,1);
}
for(let i=1;i<=h;i++){
    ctx.fillStyle = pixelColorLine(0,i-1);
    ctx.fillRect(0,i,1,1);
}

for(let i=1;i<=w;i++){
    for(let j=1;j<=h;j++){
        ctx.fillStyle = pixelColorOfset(i,j);
        ctx.fillRect(i,j,1,1);
    }
    
       
        //colorToText(i,0);
}

// console.log(getPixelColor(centerW,centerH).data);
 
