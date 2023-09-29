 const changeState = ()=>
{
    const fas=document.getElementById('fas');
    fas.classList.toggle('fa-thumbs-down');
    alert("hello");
}

var settingsmenu = document.querySelector(".settings-menu");
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}