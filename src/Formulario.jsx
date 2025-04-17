import React, { useState } from 'react';

const Formulario = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();

    const alturaMetros = parseFloat(altura);
    const pesoKg = parseFloat(peso);

    if (!alturaMetros || !pesoKg) {
      setResultado('Preencha os campos corretamente');
      return;
    }

    const imc = pesoKg / (alturaMetros * alturaMetros);

    let classificacao = '';
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      classificacao = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
      classificacao = 'Obesidade grau 2';
    } else {
      classificacao = 'Obesidade grau 3';
    }

    setResultado(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
  };

  return (
    <div>
      <form onSubmit={calcularIMC}>
        <label htmlFor="altura">Altura (em metros): </label>
        <input
          id="altura"
          type="number"
          step="0.01"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <br />

        <label htmlFor="peso">Peso (em kg): </label>
        <input
          id="peso"
          type="number"
          step="0.1"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <br />

        <button type="submit">Calcular IMC</button>
      </form>
      <div>
        <h3>Resultado:</h3>
        <p>{resultado}</p>
      </div>
    </div>
  );
};

export default Formulario;
