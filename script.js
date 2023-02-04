let pacientes = []


pacientes = [
    {
        nome:"Renato",
        nota1:6,
        nota2:8
    },

    {
        nome:"Rafael",
        nota1:6,
        nota2:8
    },

    {
        nome:"Jonas",
        nota1:1,
        nota2:8
    },

    {
        nome:"Luan",
        nota1:3,
        nota2:2
    }
]

function CalcularMedia (n1, n2){
   let resultado = (n1 + n2) / 2
   return resultado
}

for (const paciente of pacientes) {
    let media = CalcularMedia(paciente.nota1, paciente.nota2)

    if(media >= 7){
        alert(`Parabens ${paciente.nome}, voce conseguiu passar de ano, sua média foi de: ${media}`)
    }else {
        alert(`Sinto muito mesmo ${paciente.nome}, mas dessa vez não deu, sua média foi de: ${media}`)
    }
}