//update profile
var profile = document.getElementById('profile')
var input_file = document.getElementById('input-file')

input_file.onchange = function(){
    profile.src = URL.createObjectURL(input_file.files[0]);
}
//add more button
var btn = document.getElementById("btn")
var cuurentitem = 1;
btn.onclick =()=>{
    var boxes = document.getElementById('container');
    for(var i=0; i< cuurentitem +1; i++){
        boxes[i].style.display = 'inline-block';
    }
}