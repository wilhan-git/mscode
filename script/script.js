var header =document.getElementById('header');
var navigationHeader = document.getElementById('navgation_head');
var content= document.getElementById('content');

var showSidebar = false;

function toggleSidebar (){
    showSidebar = !showSidebar;
    if(showSidebar){
        navigationHeader.style.marginLeft= '-10vw';
        navigationHeader.style.animation ='showSidebar';
    } else{
        navigationHeader.style.marginLeft= '-100vw';
        navigationHeader.style.animation ='';
    }
}