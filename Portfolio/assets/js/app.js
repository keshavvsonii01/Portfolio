//  window.onscroll = function(){
//     if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ){
//         document.getElementById('navbar').classList.add('scrolled');
//     }else{
//         document.getElementById('navbar').classList.remove('scrolled');

//     }
//  }
document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector('#navbar');

    window.onscroll = function () {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.style.backgroundColor = '#fff'; // Change the background color on scroll
        } else {
            header.style.backgroundColor = 'transparent'; // Set it back to transparent if not scrolled
        }
    };
});