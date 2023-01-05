
const mario = document.querySelector('.mario'); /*pega o elemento da imagem do mario query passa seletor css*/
const pipe = document.querySelector('.pipe');

const jump = () =>{
   mario.classList.add('jump'); /* passa a classe que fez a animação do css*/

   setTimeout(()=>{

    mario.classList.remove('jump');  /*estou removendo o tempo para usar novamente a animação*/ 

   },500 );
}

const loop = setInterval(()=>{
 
  const pipePosition = pipe.offsetLeft; /*determina colisão entre objetos*/
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');/*e a linha que converto uma string e numeros para calcular o pulo*/
   
  console.log(marioPosition);

  if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){/* comando e condição para o mario passar pelo tubo*/

    pipe.style.animation= 'mone';/* se a posição do cano for menor que 120 para o jogo*/
    pipe.style.left = `${pipePosition}px`;/*para aanimção e siguinifica que ele bateu no cano*/
    
    mario.style.animation= 'mone';/* bloco de comando para manter o mario parado onde encostou no cano*/
    mario.style.bottom = `${marioPosition}px`;
    
    mario.src = './img/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft ='50px';
   
    

    clearInterval(loop);/* serve para para o loop*/

  }

},10);/* meu loop que vê se perdi ou não passo um paramentro vazio onde vai calcular o final de jogo*/ 

document.addEventListener('keydown',jump) /*logica para o mario pular chamando função jump qualquer tecla*/