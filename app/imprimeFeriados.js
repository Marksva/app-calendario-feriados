
const imprimirFeriados = (arrayFeriado) => {

    arrayFeriado.forEach(feriado => {
        const nome = feriado.nome; 
        const diaSemana = feriado.diaSemana;
        const data = feriado.data

        console.log(`${nome} cairá em : ${diaSemana}, ${data}`);

    })

}

export default imprimirFeriados; 