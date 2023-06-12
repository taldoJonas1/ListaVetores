function exe(){
    let titulo = []; let descricao = []; let autor = []; let qtd = []; let i; let mudanca; let mud = 0; let autores;
    let tituloMaior=0, descricaoMaior=0, autorMaior=0, qtdMaior=0, tituloMenor=0, autorMenor=0, descricaoMenor=0, qtdMenor=0

    for(i = 0; i < 10; i++){
        titulo[i] = prompt(`Informe o título do ${i+1}° post.`)
        descricao[i] = prompt(`Faça a descrição do ${i+1}° post.`)
        autor[i] = prompt(`Entre com o nome de usuário do autor do ${i+1}° post.`)
        qtd[i] = Number(prompt(`Informe a quantidade de likes do ${i+1}° post.`))
        let posicao = autor.indexOf(autor[i])
        if(posicao != -1){
            alert('Entre com um autor diferente.')
        }
        if(qtd < 0){
            alert('Quantidade de likes negativa.')
        }
    }
    for(i = 0; i < 10; i++){
        if(qtd[i] > qtdMaior){
            tituloMaior = titulo[i]
            descricaoMaior = descricao[i]
            autorMaior = autor[i]
            qtdMaior = qtd[i]
        }
        if(qtd[i] < qtdMenor){
            tituloMenor = titulo[i]
            descricaoMenor = descricao[i]
            autorMenor = autor[i]
            qtdMenor = qtd[i]
        }
    }
    mudanca = prompt(`Dados salvos! Você pode fazer até 5 mudanças. \nPara fazer uma mudança digite 1, para encerrar o programa digite 0.`)
    if(mudanca == 0){
        alert('Programa encerrado.')
    }
    if(mudanca == 1){
        while(mud <= 5){
            autores = prompt('Informe o autor do post que será mudado.')
            let posicao2 = autor.indexOf(autores)
            if (posicao2 == -1){
                alert('Mudança cancelada.')
            }
            else {
                let aoud = (prompt('Insira A se for aumentar a quantidade de likes ou D se for diminuir'))
                if(aoud == A){
                    let a = prompt('Qual a nova quantidade de likes?')
                    mud++
                    alert('Alteração salva.')
                }
                if(aoud == D){
                    let d = prompt('Qual a nova quantidade de likes?')
                    if(d < 0){
                        alert('Quantidade negativa, entre com um numero positivo.')
                    }
                    else{
                        mud++
                        alert('Alteração salva.')
                    }
                }
            }
        }
    }
    alert(`POST COM MAIOR QUANTIDADE DE LIKES\NTitulo: ${tituloMaior} \nDescrição: ${descricaoMaior} \nAutor: ${autorMaior} \nQtd De Likes: ${qtdMaior}`)
    alert(`POST COM MENOR QUANTIDADE DE LIKES\NTitulo: ${tituloMenor} \nDescrição: ${descricaoMenor} \nAutor: ${autorMenor} \nQtd De Likes: ${qtdMenor}`)
}
