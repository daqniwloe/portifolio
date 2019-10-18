let btnmenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containermenu = document.querySelector('.menu');
let activador = true;

// Menu de navegação

btnmenu.addEventListener('click', function(){

    //Seleciona o btn menu i e Troca o ícone para o de um X
    document.querySelector('.btn-menu i').classList.toggle('fa-times');

    if(activador){
        menu.style.left = "0";
        menu.style.transition = "0.5s";

        activador = false;
    }else{
        activador = false;
        menu.style.left = "-100%";
        menu.style.transition = "0.5s";
        
        activador = true;
    }
});


//Intercalar a classe Active
let link = document.querySelectorAll('.lists li a');

link.forEach((element) => {

    element.addEventListener('click', function(event){

        link.forEach((link) => {
            link.classList.remove('active');
        });

        event.target.classList.add('active');

    });

});

// Efeito Scroll

let prevScroll = window.pageYOffset;
let gotop = document.querySelector('.go-top');

window.onscroll = () =>{

    let currentScroll = window.pageYOffset; // mede a distancia do topo em PX
    
    //Mostrar e Ocultar Menu

    if(prevScroll > currentScroll){
        containermenu.style.top = "0";
        containermenu.style.transition = "0.5s";

    }else{
        containermenu.style.top = "-60px";
        containermenu.style.transition = "0.5s";
    }

    prevScroll = currentScroll;

    //Mostrar e ocultar Scroll estilos

let acima = window.pageYOffset;

if(acima <= 600){
    containermenu.style.borderBottom = "none";


    gotop.style.right = "-100%";
    
}else{

    containermenu.style.borderBottom = "3px solid #fc7978";


    gotop.style.right = "0";  
    gotop.style.transition = "0.5s";  
}

}

//Scroll
gotop.addEventListener('click', function(){
    document.documentElement.scrollTop = 0;
});

let abaixo = document.querySelector('#abaixo');

abaixo.addEventListener('click', function(){
    document.documentElement.scrollTop = 600;
    
});



function NumeroCaracteres(){
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var comentario = document.getElementById('comentario').value;

    var status = document.getElementById('status')
    status.innerHTML = "";

    var img = document.createElement('img');

    if(nome.length > 2){
         img.src = 'img/check.png'
       //var b = document.getElementById('nome').value = document.getElementById('nome').value + a;
       
    } else if(nome == ""){
        status.innerHTML = "";
    } else{
        img.src = 'img/remove.jpg';
    }

    
    

    
    //nome.appendChild(img);
    status.appendChild(img);



}


