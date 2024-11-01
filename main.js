function criarCartao(pergunta,reposta){
console.log("pergunta,resposta")
let conteudo=document.getElementById("conteudo")
let cartao = document.createElement('article')
cartao.classList = 'cartao'

cartao.innerHTML =`<div class="cartao--conteudo">
            <div class="cartão--pergunta">É possível gerar energia para
                outras residências com apenas
                uma usina solar?</div>
                <div class="cartão--reposta">A “geração compartilhada” neste contexto significa que duas ou mais residências, apartamentos, empresas ou propriedades em geral podem se beneficiar da mesma energia solar gerada por uma única unidade geradora</div>
            </div>`

            conteudo.appendChild(cartao)
}
criarCartao(1,2)