let resposta = document.getElementById('resposta')
let btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch('http://localhost:3000/pacientes')
    .then(res => res.json())
    .then(dados =>{
        console.log(dados)
        resposta.innerHTML = ''  // apaga a escrita anterrior
        resposta.innerHTML += `
            <table>
                ${thead()}
                ${tbody(dados)}
            </table>
        `
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar o paciente',err)
    })
})


function thead(){
    let cabTabela = `
    <thead>
        <tr>
            <th>Número</th>
            <th>Nome</th>
            <th>Peso</th>
            <th>Altura</th>
        </tr>
    </thead>    
    `
    return cabTabela
}

function tbody(dados){
    let tabela = `<tbody>`
    dados.forEach(el => {
        tabela +=`
        <tr>        
            <td>${el.codPaciente}</td>
            <td>${el.nome}</td>
            <td>${el.peso}</td>
            <td>${el.altura}</td>
        </tr>
        `
    })
    tabela += `</tbody>`
    return tabela
}

/*

<table>
    <thead>
        <tr>
            <th>Número</th>
            <th>Nome</th>
            <th>Peso</th>
            <th>Altura</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Moisés</td>
            <td>90</td>
            <td>80</td>
        </tr>
    </tbody>
</table>

*/