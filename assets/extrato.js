function formatCurrency(value) {
    return parseFloat(value.replace('R$', '').replace('.', '').replace(',', '.')).toFixed(2);
}

function applyStyles() {
    const table = document.getElementById('financeTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    for (let row of rows) {
        const entradas = row.cells[2].innerText;
        const saidas = row.cells[3].innerText;
        const saldoFinal = row.cells[4].innerText;

        if (entradas !== 'R$00,00') {
            console.log(entradas.replace('R$', '').replace(",",".") > 0);
            row.cells[2].classList.add(entradas.replace('R$', '').replace(".","").replace(",",".") > 0 ? 'green' : 'gray');
        } else {
            row.cells[2].classList.add('gray');
        }

        if (saidas !== 'R$00,00') {
            row.cells[3].classList.add(saidas.replace('R$', '').replace(".","").replace(",",".") > 0 ? 'red' : 'gray');
        } else {
            row.cells[3].classList.add('gray');
        }

        if (saldoFinal !== 'R$00,00') {
            row.cells[4].classList.add(saldoFinal.replace('R$', '').replace(".","").replace(",",".") > 0 ? 'bold-green' : 'gray');
        } else {
            row.cells[4].classList.add('gray');
        }
    }
}

document.addEventListener('DOMContentLoaded', applyStyles);
