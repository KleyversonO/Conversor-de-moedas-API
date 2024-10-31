// Selecionando os elementos do formulário e da página
const form = document.getElementById('currency-form');
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency'); 
const toCurrency = document.getElementById('to-currency');
const resultDiv = document.getElementById('result');
const resetButton = document.getElementById('reset'); 
function getConversionRate(from, to) {
    // API que é responsável por indicar e atualizar os valores das moedas. 
    const url = `https://economia.awesomeapi.com.br/last/${from}-${to}`;
    return fetch(url) 
        .then(response => response.json())
        .then(data => {
            //Função que seleciona o valor de cotação de uma moeda para outra.
            const conversionKey = `${from}${to}`; 
            return data[conversionKey].bid; 
        })
        // Esse API em alguns momentos pode dar erro, esse código serve para informar caso isso ocorra
        .catch(error => {
            console.error('Erro ao buscar dados da API:', error);
            resultDiv.innerHTML = 'Ocorreu um erro ao buscar dados. Tente novamente depois.';
        }); 
}
// Função que realiza a conversão
function convertCurrency(event) {
    event.preventDefault();
    //Pega o valor dos campos de entrada
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    // Faz o cálculo de conversão e mostra o resultado
    if (isNaN(amount) || amount <= 0) {
        resultDiv.innerHTML = 'Por favor, insira um valor válido.';
        return;
    }
    getConversionRate(from, to).then(rate => {
        if (rate) {
            const convertedAmount = (amount * rate).toFixed(2); 
            resultDiv.innerHTML = `<p>${amount} ${from} = ${convertedAmount} ${to}</p>`; 
        }
    });
}
// Essa sesão é responsável por fazer a limpeza do valor quando se clica no botão "Limpar"
function resetForm() {
    form.reset();
    resultDiv.innerHTML = '';
}
form.addEventListener('submit', convertCurrency); 
resetButton.addEventListener('click', resetForm); 

// Adiciona um ouvinte de eventos para o botão de troca de moedas
document.getElementById('swap-currencies').addEventListener('click', function() {
    // Obtém os valores selecionados das moedas
    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');
    
    // Troca os valores selecionados
    const temp = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = temp;
});
