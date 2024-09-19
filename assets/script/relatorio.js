let ctx = document.getElementsByClassName('bar-chart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Lucratividade',
            data: [-3000, 0, 10000, 0, 25000, 47000],
            backgroundColor: 'rgb(234, 29, 44)',
            base: -10000
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Lucratividade',
            }
        }
    }
});
let ctx2 = document.getElementsByClassName('doughnut-chart');

new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Aluguel', 'Impostos', 'Insumos', 'Funcionários'],
        datasets: [{
            label: 'Tipos de Despesas',
            data: [35, 10, 35, 20],
            backgroundColor: ['rgb(197, 42, 42)', 'rgb(234, 29, 44)', 'rgb(175, 6, 6)', 'rgb(	217, 217, 217)'],
            hoverOffset: 4
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Tipos de Despesas'
            }
        }
    }
});
let ctx3 = document.getElementsByClassName('pie-chart');

new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Custos Fixos', 'Custos Variáveis', 'Entradas'],
        datasets: [{
            label: 'Geral',
            data: [15, 35, 55],
            backgroundColor: ['rgb(197, 42, 42)', 'rgb(234, 29, 44)', 'rgb(175, 6, 6)', 'rgb(	217, 217, 217)'],
            hoverOffset: 4
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Geral'
            }
        }
    }
});
let ctx4 = document.getElementsByClassName('line-chart');

new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'Meta',
            data: [110000, 149000, 150500, 175000, 180000, 225000, 220000, 250000, 247000, 251000, 249500, 265000],
            fill: Boolean,
            borderColor: 'rgb(197, 42, 42, 0.5)',
            tension: 0
        },
        {
            label: 'Saídas',
            data: [120000, 112000, 125000, 153000, 149000, 208000, 250000, 246000, 225000, 210000, 175000, 225000],
            fill: Boolean,
            borderColor: 'rgb(234, 29, 44)',
            tension: 0
        },
        {
            label: 'Entradas',
            data: [100000, 112000, 130000, 175000, 210000, 230000, 256000, 225000, 180000, 210000, 240000, 251000],
            fill: Boolean,
            borderColor: 'rgb(175, 6, 6)',
            tension: 0
        }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Monitoramento de Transações'
            }
        }
    }
});