# Conversos de moedas com API
O projeto tem a função de treinar javaScript e API, fazendo um site que fará com que você digite um valor e ele ira dar algumas moedas para selecionar, em 2 diferentees espaços, e após clicar em "Converter" ele irá dizer a diferença de valor de uma para outra. Uma breve explicação do que é API: "API significa Application Programming Interface (Interface de Programação de Aplicação). No contexto de APIs, a palavra Aplicação refere-se a qualquer software com uma função distinta. A interface pode ser pensada como um contrato de serviço entre duas aplicações.". Foi feito durante as aulas de Programação Web 1 sobre a supervisão do professor Leonardo Santiago Sidon da Rocha.

## Função
O projeto possui uma interface simples, porém funcional e intuitiva. No projeto é possível ver uma caixa aonde você pode digitar um valor númerico, ou apenas selecionar um com os botões ao lado. Mais abaixo á um caixa aonde você pode selecionar um tipo de moeda, e um pouco abaixo pode selecionar também as mesmas moedas. Abaixo dessas caixas possui 3 botões, um escrito "Trocar moedas" aonde caso você clique, ele inverte as moedas selecionadas, o botão "Apagar" que ira apagar o número digitado e por último o botão "Converter", que irá dizer a diferença de valores entre as duas moedas selecionadas.
![gif](img/funciona.gif)

## Valores/ Moedas
![foto](img/valorM.png)
Aqui foi selecionado as moedas e a diferenciações que uma tem sobre a outra.

* const exchangeRates: É uma função que calcula a taxa de câmbio usadas e elimina o efeito ao calcular números de desempenho financeiro.
<br>
Fonte: https://www.investopedia.com/terms/c/constantcurrencies.asp#:~:text=Constant%20currencies%20are%20exchange%20rates,with%20optional%2C%20constant%20currency%20numbers.

## Conversão e conclusão
![foto](img/conversao.png)
Aqui é utilizado uma sequência de "Const" e outros códigos que como resultado irão fazer a conversão de uma moeda da forma correta e esperada. E no final do código é possível ver uma parte que tem a função de realizar a ação da conversão e mostra lá.
* getElementById: Tem a função de pegar o valor de uma Id.
* Const: A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída. Nesse caso são utilizados diferentes "Const".
* addEventListener: Registra uma única espera de evento em um único alvo. O alvo do evento pode ser um único elemento em um documento, o documento em si, uma janela, ou um XMLHttpRequest.
<br>
Fonte:https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById
<br>
https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener
<br>
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const

## Limpar formulário
![foto](img/limpa.png)
Aqui é usado um código simples que de forma simplificada quando você clica no botão de "Limpar" ele reconhece que tem que limpar as caixas que foi comandado no código.

## Trocar valores.
![foto](img/troca.png)
Aqui é possível ver a parte do código para o botão de "Trocar moedas". E de forma simples esse código tem a função de quando clicar no botão, os dois valores serão invertidos.


## Fontes
Fonte:https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById
<br>
https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener
<br>
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const
<br>
https://www.investopedia.com/terms/c/constantcurrencies.asp#:~:text=Constant%20currencies%20are%20exchange%20rates,with%20optional%2C%20constant%20currency%20numbers.
<br>
https://aws.amazon.com/pt/what-is/api/#:~:text=API%20significa%20Application%20Programming%20Interface,de%20servi%C3%A7o%20entre%20duas%20aplica%C3%A7%C3%B5es.

## Tecnologias utilizadas 

* ``HTML 5``
* ``CSS 3``
* ``Java Script``
* ``Github``
* ``VsCode``
* ``Microsoft Teams``
* ``Google``
## Autor
Kleyverson de Oliveira Sampaio