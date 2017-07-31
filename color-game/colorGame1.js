function loadColors(){
	// var rgb=document.getElementById("rgbColor").innerHTML;
	// Genereaza culoare rgb noua
	setTransform();
	document.getElementById("news").innerHTML="Good luck !";
	var rgb="";
		rgb+="rgb("
		for(j=1;j<=3;j++){
			var c=Math.floor((Math.random() * 255) + 0);
			rgb+=c;
			if(j==3)
			{
				rgb+=")"
			}
			else {rgb+=","}
		}
	document.getElementById("rgbColor").innerHTML=rgb;
	
	var colors=new Array();
	colors.push(rgb);
	for(i=1;i<=5;i++){
		var rgbNew="";
		rgbNew+="rgb("
		for(j=1;j<=3;j++){
			var c=Math.floor((Math.random() * 255) + 0);
			rgbNew+=c;
			if(j==3)
			{
				rgbNew+=")"
			}
			else {rgbNew+=","}
		}
		//alert(rgbNew);
		colors.push(rgbNew);
	}
	// alert(colors);
	var rightColor=Math.floor((Math.random() * 6) + 1);
	var divId="box-"; divId+=rightColor;
	var div=document.getElementById(divId);
	div.style.backgroundColor = colors[0]; 
	var iDs =new Array();
	iDs.push(rightColor);
	for(i=1;i<=5;i++){
		var newColor=Math.floor((Math.random() * 6) + 1);
		// alert("firstTime "+newColor);
		if(containsValue(iDs,newColor)==1){
			// alert("intra dupa verificare");
			while(containsValue(iDs,newColor)==1){
				 newColor=Math.floor((Math.random() * 6) + 1);
				 // alert("NextTime "+ newColor);
			}
			var divId="box-"; divId+=newColor;
			var div=document.getElementById(divId);
			div.style.backgroundColor = colors[i];
			iDs.push(newColor); 
		}
		else {
		var divId="box-"; divId+=newColor;
		var div=document.getElementById(divId);
		div.style.backgroundColor = colors[i];
		iDs.push(newColor); }

	}	
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
	// console.log(rgb);
	// console.log(color);
	// console.log(color.replace(/ /g,""));
	if(color.replace(/ /g,"")==rgb.replace(/ /g,"")){
		// alert("intra");
		document.getElementById("news").innerHTML="You guessed the color !";

	}
	else{
		document.getElementById("news").innerHTML="Try again !";
		$("#"+string).css("transform","none");
		//document.getElementById(string).contentEditable=false;
	}
	
}
function setTransform(){
	// for(i=1;i<=6;i++){
	// 	$("#box-"+i).mouseover(function(){
 //  			 $("#box-"+i).css("transform","rotate(45deg)");
	// 		});
		
	// }

for(i=1;i<=6;i++){
    //$("#box-"+i).hover(function()
    	//{
    		console.log("hover",i);
        $("#box-"+i).css("transform","");
        $("#box-"+i+":hover").css("transform","rotate(45deg)");
        
   // });

	}
}