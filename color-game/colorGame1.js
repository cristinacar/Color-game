var nrIncercari=3;
var nivel=6;

function loadColors(incercari,nrDiv){
	$("#sectionForColors").html("");
	var htmlCode="";
	for(i=1;i<=nrDiv;i++){
		htmlCode+="<div id=\"box-"+i+"\" class=\"box\"  onclick=\"check("+i+")\" ></div>";

	}
	$("#sectionForColors").html(htmlCode);
	if(incercari==3){
		nivel=6;
	}
	/*	nr de incercari  */
	console.log(incercari);
	console.log("nivel"+nivel);
	nrIncercari=incercari;
	document.getElementById("news").innerHTML= "Numar incercari: " +nrIncercari;

	var rgb=generateRGB();
	document.getElementById("rgbColor").innerHTML=rgb;
	
	//var colors este un array cu toate cele 6 culori generate, printre care si cea cu care trebuie sa fie 'match'
	var colors=new Array();
	colors.push(rgb);
	var rgbNew;
	for(i=1;i<=nrDiv-1;i++){
		rgbNew=generateRGB();
		colors.push(rgbNew);
	}

	//fiindca intotdeauna 'super-culoarea' este pe prima pozitie din vector, alegem o pozitie random de la 1 la 6 pentru aceasta
	var poz=Math.floor((Math.random() * nrDiv) + 1);
	console.log("pozitia pe care se afla super-culoarea " +poz);
	setColor(poz,colors[0]);

	// vector iDs contine pozitiile pe care s-au setat culori
	var iDs =new Array();
	iDs.push(poz);
	for(i=1;i<=nrDiv-1;i++){
		//se alege o noua pozitie
		var newPoz=Math.floor((Math.random() * nrDiv) + 1);
		//daca pozitia se afla in vectorul de pozitii, se genereaza incontinuu alte pozitii pana cand nu se vor intalni in vectorul iDs	
		if(containsValue(iDs,newPoz)==1){
			while(containsValue(iDs,newPoz)==1){
				newPoz=Math.floor((Math.random() * nrDiv) + 1);
			}
		}
		setColor(newPoz,colors[i]);
		iDs.push(newPoz); 
	}	
}

function setColor(id,color){
	var divId="box-"; divId+=id;
	var div=document.getElementById(divId);
	div.style.backgroundColor = color; 
}

function generateRGB(){
	var rgb="";
	rgb+="rgb("
	for(j=1;j<=3;j++){
		var c=Math.floor((Math.random() * 255) + 0);
		rgb+=c;
		if(j==3)
			{ rgb+=")";	}
		else 
			{ rgb+=",";	}
	}
	return rgb;
}

function containsValue(array,val){
	var ok=0;
	for(i=0;i<array.length;i++){
		if(array[i]==val){
			ok=1;
			break;
		}
	}
	return ok;
}
function check(id){
	var rgb=document.getElementById("rgbColor").innerHTML;
	var string="box-";
	string+=id;
	var boxClicked=document.getElementById(string);
	var color=boxClicked.style.backgroundColor;
	if(color.replace(/ /g,"")==rgb.replace(/ /g,"")){
		document.getElementById("news").innerHTML="You guessed the color !";
		nivel=nivel+3;
		var x=Math.floor(nivel/2);
		loadColors(x,nivel);
		
	}
	else{
		nrIncercari--;
		document.getElementById("news").innerHTML="Numar incercari: "+nrIncercari;
		if(nrIncercari==0){
			if(nivel==6){
				loadColors(3,nivel);
			}
			if(nivel>6){
				nivel=nivel-3;
				var x=Math.floor(nivel/2);
				loadColors(x,nivel);
			}
			//start new game -daca nivelul e 1
			//se da cu un nivel inapoi altfel 

		}
		$("#"+string).css("transform","none");
	}
	
}
//functia nu mai este folosita
function setTransform(){
	console.log("intra");
	for(i=1;i<=6;i++){  	
        $("#box-"+i).css("transform","");
        $("#box-"+i+":hover").css("transform","rotate(45deg)");
	}
}