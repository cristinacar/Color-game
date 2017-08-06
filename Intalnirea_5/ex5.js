$(document).ready(function(){
	$('#patrat').draggable({axis: "x"});
	$('.dragg').draggable({ containment: [0,0, 250, 24] });
    // $('.dragg').draggable({ containment: 'parent' });
});


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
   
}

function drop(ev) {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
}
