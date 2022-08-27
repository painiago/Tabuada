
function tabuada (){
    var num = parseInt(document.getElementById("num").value);
    var resultado  = document.getElementById('resultado');
    var tabuada = 'Tabuada: ' +num+ "<br>" ;


    for(var count=0; count <=10; count++)
    tabuada += num+" x "+count+" = "+ num*count + "<br>"; 
    
    resultado.innerHTML = tabuada;
}


// Limpar tela resultado
function clean(){
    document.getElementById('resultado').innerHTML = '';
      
  }




