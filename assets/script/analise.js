const dataVendas = [40000, 70000, 15000, 30000, 120000, 50000, 45000, 35000, 30000];
const bairros = ['Jd. Flamboyant', 'Cambuí', 'Vila Lobos', 'Jardins', 'Alphaville', 'Figueiras', 'Trianon', 'Vila Gilda'];

const maxVenda = Math.max(...dataVendas); // Acha o valor máximo para destacar

// Configurando o gráfico
const graficoLocalMaisVendas = new Chart(document.getElementById('graficoLocalMaisVendas'), {
    type: 'bar',
    data: {
        labels: bairros,
        datasets: [{
            label: 'R$',
            data: dataVendas,
            backgroundColor: dataVendas.map(venda => venda === maxVenda ? 'rgba(255, 215, 0, 0.8)' : '#EA1D2C'),
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        onClick: (event, elements) => {
            if (elements.length) {
                const barIndex = elements[0].index;
                if (dataVendas[barIndex] === maxVenda) {
                    const bar = elements[0];
                    const chartArea = graficoLocalMaisVendas;
                }
            }
        }
    }
});
//Gráfico de Prospecção
new Chart(document.getElementsByClassName('graficoProspeccaoRendimento'), {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Dados Históricos',
            data: [131000, 132000, 142000, 145000, 152000, 160000],
            fill: Boolean,
            backgroundColor:"#38b000",
            fill: false,
            showLine: false
        },
        {
            label: 'Previsão',
            data: [132000, 134000, 144000, 148000, 154000, 163000],
            fill: Boolean,
            borderColor:"#EA1D2C",
            backgroundColor:"#EA1D2C",
            fill: false,
        },
    ]
},
});
