// window.alert('hello');
// console.log('log');
var hamburger = document.getElementById("hamburger");
var horizontal_list = document.getElementById('navUl');

// hamburger.addEventListner('click',() =>{
//     horizontal_list.classList.toggle('show');
// });
var list_open = false;
hamburger.addEventListener('click', function(){
	if(list_open == false){
	window.alert('button presses');
	horizontal_list.style.visibility = 'visible';
	list_open = true;
}
else{
	 horizontal_list.style.visibility = 'hidden';
	 list_open = false;
}
})


///hamburger- relative
//vert-list = absolute
// //z-index=2;

// SMOOTH SCROLL

// var navMenuAnchorTags = document.querySelectorAll("#navUl a");
// for(var i=0;i<navMenuAnchorTags.length;i++){
// 	navMenuAnchorTags[i].addEventListener("click",function(event){
//           event.preventDefault();

//           var targetSectionID = this.textContent.trim().toLowerCase();
//           console.log(targetSectionID);
//           var targetSection=document.getElementById(targetSectionID);
//           console.log(targetSection);

          
//           var interval=setInterval(function(){
//                var targetSectionCoordinates=targetSection.getBoundingClientRect();
//                if(targetSectionCoordinates.top<=0){
//                	clearInterval(interval);
//                	return;
//                }
//                window.scrollBy(0,20);
//           },20);
// 	})
// }















