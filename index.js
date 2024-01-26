const textInput = document.getElementById('textInput');
const criptografar = document.getElementById('criptografar');
const descriptografar = document.getElementById('descriptografar');
const mensagemCode = document.getElementById('mensagemCode');


function criptoText(text){
    text = text.replace(/imes/g, 'i').replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/o/g, 'ober').replace(/u/g, 'ufat');    
    icon = document.getElementById('nenhuma-mensagem');    
    nomsg = document.getElementById('no-msg');
    if(nomsg != null)
        {
            nomsg.hidden = true;
        }
    icon.innerHTML = `<h3 class=newMsg>${text}</h3>`;

    
}

function decriptoText(text) {
        icon = document.getElementById('nenhuma-mensagem');
        icon.innerHTML = `<h3 class=newMsg>${text.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u')}</h3>`
        
        
}
    
    
    
    
descriptografar.addEventListener('click', function()
    {        
        {            
            const curText = textInput.value;
            decriptoText(curText);
        }        
    }
)
        
    




criptografar.addEventListener('click',function(){    
    criptoText(textInput.value);    
})



