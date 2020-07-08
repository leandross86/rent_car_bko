document.getElementById('formulario').addEventListener('submit', cadastraVeiculo);

function cadastraVeiculo(e) {
    let modeloCarro = document.getElementById('modeloCarro').value;
    let placaCarro = document.getElementById('placaCarro').value;
    let time = new Date();

    carro = {
        modelo: modeloCarro,
        placa: placaCarro,
        hora: time.getHours(),
        minutos: time.getMinutes()
    }
    if (localStorage.getItem('patio2') === null) {
        let carros = []
        carros.push(carro);
        localStorage.setItem('patio2', JSON.stringify(carros));
    } else {
        let carros = JSON.parse(localStorage.getItem('patio'));
        carros.push(carro);
        localStorage.setItem('patio2', JSON.stringify(carros));
    }
    e.preventDefault();
}

function mostraPatio () {
    let carros = JSON.parse(localStorage.getItem('patio2'));
    let carrosResultado = document.getElementById('resultados');

    carrosResultado.innerHTML = '';

    for (let i = 0; i < carros.length; i++){
        let modelo = carros[i].modelo;
        let placa = carros[i].placa;
        let hora = carros[i].hora;
        let minutos = carros[i].minutos;
        
        let carrosResultado += <tr>
                                    <td> + modelo + </td>
    }
}