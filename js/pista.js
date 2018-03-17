const carros=[];
var numCarros=0;
var avanza1=0;
var aux=0;
var aux2=0;
var aux3=0;
var aux4=0;
var aux5=0;
var aux6=0;



var auxA=0;
var auxA2=0;
var auxA3=0;
var auxA4=0;
var auxA5=0;
var auxA6=0;
var img,img2,imgAux; 
var imgA,imgA2,imgAAux; 
var pista;

function preload(){
	pista = loadImage("img/pista222.png");

	img = loadImage("Pruebas/race1.png"); 
	imgAux = loadImage("Pruebas/race2.png"); 
	img2 = loadImage("Pruebas/race1.png");
	imgA = loadImage("Pruebas/race3.png"); 
	img4 = loadImage("Pruebas/race4.png");


	imgA = loadImage("Pruebas/race1.png"); 
	imgAuxA = loadImage("Pruebas/race2.png"); 
	img2A = loadImage("Pruebas/race1.png");
	imgAA = loadImage("Pruebas/race3.png"); 
	img4A = loadImage("Pruebas/race4.png"); 


	
}
function setup() {
	 createCanvas(windowWidth,windowHeight);
	 noStroke();
     for(let i=0; i<2; i++)
	{
		
		let carrito={
			x: 240,
			y: 50,
			d: 70,
			estado: true,
			r: random(0,254),
			g: random(0,254),
			b: random(0,254),
			velocidad: random(3,8),
		}
		carros.push(carrito);
	}
}
function pista(){

	rect(120,100,700,100);
	fill('#6E6E6E');
	quad(819,100,819,200,897,426,1161,339);
	quad(1161,339,897,426,881,507,1005,582);
	quad(881,507,1005,582,851,640,518,507);
	quad(521,508,849,638,318,637,361,386);
	quad(361,386,318,637,152,440,312,254);
	quad(308,254,360,386,604,190,422,200);

}
function draw() { 
	
	
		background('#fff');
			image(pista,150,0,1100,650);
			image(img,carros[0].x, carros[0].y, carros[0].d, carros[0].d);
			image(imgA,carros[1].x, carros[1].y, carros[1].d, carros[1].d);
			
			
		 
  		 //ellipse(carros[i].x,carros[i].y,carros[i].d,carros[i].d);
  		 
		
  		 //-----------------------------------------
  		 	if(aux==0&&carros[0].x<=480){
  		 		img=img2;
  		 		carros[0].x+=Math.round(random(3,10));
  		 		console.log(carros[0].x);
  		 	}
		
			if(carros[0].x>=480&&aux==0){
				aux=1;
			}
		//-----------------------------------------
			if(aux==1&&carros[0].y<=400){
				img=imgAux;
				carros[0].y+=Math.round(random(3,10));
			}

			if(carros[0].y>=400&&aux==1){
				aux=2;
			}
		//-----------------------------------------
			if(aux==2&&carros[0].x<=960){
				img=img2;
				carros[0].x+=Math.round(random(3,10));
			}
			if(carros[0].x>=960&&aux==2){
				aux=3;
			}
		//-----------------------------------------
			if(aux==3&&carros[0].y>=190){
				img=img4;
					carros[0].y-=Math.round(random(3,10));
			}

			if(carros[0].y<=190&&aux==3){
				aux=4;
			}

		//-----------------------------------------
			if(aux==4&&carros[0].x>=629){
				img=imgA;
					carros[0].x-=Math.round(random(3,10));
			}

			if(carros[0].x<=629&&aux==4){
					aux=5;
			}
		//-----------------------------------------
			if(aux==5&&carros[0].y>=46){
				img=img4;
					carros[0].y-=Math.round(random(3,10));
			}

			if(carros[0].y<=46&&aux==5){
					aux=6;
			}
		//-----------------------------------------
			if(aux==6&&carros[0].x<=1140){
				img=img2;
					carros[0].x+=Math.round(random(3,10));
			}

			if(carros[0].x>=1140&&aux==6){
					aux=7;
			}
		//-----------------------------------------
		
			if(aux==7&&carros[0].y<=524){
				img=imgAux;
					carros[0].y+=Math.round(random(3,10));
			}

			if(carros[0].y>=524&&aux==7){
					aux=8;
			}

		//-----------------------------------------
		
			if(aux==8&&carros[0].x>=240){
				img=imgA;
					carros[0].x-=Math.round(random(3,10));
			}

			if(carros[0].x<=240&&aux==8){
					aux=9;
			}
		//------------------------------------------
			if(aux==9&&carros[0].y>=50){
				img=img4;
				carros[0].y-=Math.round(random(3,10));
			}

			if(carros[0].y<=50&&aux==9){
				aux=0;
			}
		//------------------------------------------



		//-----------------------------------------
  		 	if(aux2==0&&carros[1].x<=470){
  		 		imgA=img2A;
  		 		carros[1].x+=Math.round(random(5,10));
  		 		console.log(carros[1].x);
  		 	}
		
			if(carros[1].x>=470&&aux==0){
				aux2=1;
			}
		//-----------------------------------------
			if(aux2==1&&carros[1].y<=400){
				imgA=imgAuxA;
				carros[1].y+=Math.round(random(3,10));
			}

			if(carros[1].y>=400&&aux2==1){
				aux2=2;
			}
		//-----------------------------------------
			if(aux2==2&&carros[1].x<=960){
				imgA=img2A;
				carros[1].x+=Math.round(random(3,10));
			}
			if(carros[1].x>=960&&aux2==2){
				aux2=3;
			}
		//-----------------------------------------
			if(aux2==3&&carros[1].y>=190){
				imgA=img4A;
					carros[1].y-=Math.round(random(3,10));
			}

			if(carros[1].y<=190&&aux2==3){
				aux2=4;
			}

		//-----------------------------------------
			if(aux2==4&&carros[1].x>=629){
				imgA=imgAA;
					carros[1].x-=Math.round(random(3,10));
			}

			if(carros[1].x<=629&&aux2==4){
					aux2=5;
			}
		//-----------------------------------------
			if(aux2==5&&carros[1].y>=46){
				imgA=img4A;
					carros[1].y-=Math.round(random(3,10));
			}

			if(carros[1].y<=46&&aux2==5){
					aux2=6;
			}
		//-----------------------------------------
			if(aux2==6&&carros[1].x<=1140){
				imgA=img2A;
					carros[1].x+=Math.round(random(3,10));
			}

			if(carros[1].x>=1140&&aux2==6){
					aux2=7;
			}
		//-----------------------------------------
		
			if(aux2==7&&carros[1].y<=524){
				imgA=imgAuxA;
					carros[1].y+=Math.round(random(3,10));
			}

			if(carros[1].y>=524&&aux2==7){
					aux2=8;
			}

		//-----------------------------------------
		
			if(aux2==8&&carros[1].x>=240){
				imgA=imgAA;
					carros[1].x-=Math.round(random(3,10));
			}

			if(carros[1].x<=240&&aux2==8){
					aux2=9;
			}
		//------------------------------------------
			if(aux2==9&&carros[1].y>=50){
				imgA=img4A;
				carros[1].y-=Math.round(random(3,10));
			}

			if(carros[1].y<=50&&aux2==9){
				aux2=0;
			}
		//------------------------------------------

		
		
			
		
		
		
		
		 

		 
  		
	
  
 
}