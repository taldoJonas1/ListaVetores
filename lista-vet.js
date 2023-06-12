function exe1(){
    let vet = []
    let i

    for(i = 0; i < 6; i++){
        vet[i] = prompt(`Informe o ${i+1}º número: `)
    }
    let pares = []; let impares = [];
    let iPares = 0; let iImpares = 0

    for(i = 0; i < 6; i++){
        if (vet[i] % 2 == 0){
            pares[iPares] = vet[i]
            iPares++
        }
        else {
            impares[iImpares] = vet[i]
            iImpares++
        }
    }
    alert(`${pares.length} nros pares; São eles: ${pares}`)
    alert(`${impares.length} nros pares; São eles: ${impares}`)
}
//vetor.lenght --> imprime o tamanho do vetor

function exe2(){
    let vet = []; let mult2 = []; let mult3 = []; let mult23 = []

    for(let i=0; i<7; i++){
        vet[i] = prompt(`Informe o ${i+1}º número: `)
        if((vet[i] % 2 == 0) && (vet[i] % 3 == 0)){
            mult2.push(vet[i]); mult3.push(vet[i]);  mult23.push(vet[i])
        }
        else if(vet[i] % 2 == 0){
            mult2.push(vet[i])
        }
        else if(vet[i] % 3 == 0){
            mult3.push(vet[i])
        }
    }
    alert(`Múltiplos de 2: ${mult2}`)
    alert(`Múltiplos de 3: ${mult3}`)
    alert(`Múltiplos de 2 e de 3: ${mult23}`)
}
//vetor.push(elemento) --> para empurrar para a ultima posição

function exe3(){
    let cod = []
    let est = []
    let achou = false

    for(let i = 0; i < 5; i++){
        cod[i] = Number(prompt(`Informe o código do produto ${i + 1}: `))
        est[i] = Number(prompt(`Informe o estoque do produto ${i + 1}: `))
    }
    let cliente = Number(prompt('Informe o código do cliente'))
    while(cliente != 0){
    let codigo = Number(prompt('Qual o código do produto pra comprar'))
    let qtd = Number(prompt('Qual a quantidade do produto no estoque'))

    for(let i = 0; i < 5; i++){
        if(codigo == cod[i]){
            achou = true
            if(est[i] >= qtd){
            est[i] = est[i] - qtd
            }
            else {
                alert('Estoque insuficiente')
            }
        }
    }
    if(!achou){
        alert('Produto não existe')
    }
    }
    alert(est)
}
//let achou = false --> cria uma variavel que verifica se há um elemento no vetor

function exe4(){

}

function exe5(){
    let log = []
    let ling = []

    for(let i = 0; i < 10; i++){
        log[i] = Number(prompt('Informe alunos que fazem Lógica.'))
    }
    for(let i = 0; i < 10; i++){
        ling[i] = Number(prompt('Informe alunos que fazem Linguagem.'))
    }
    let msm = []
    for(let i = 0; i < 10; i++){
        if(ling.includes(log[i])){
            msm.push(log[i])
        }
    }
    alert(`Alunos que fazem ambas as matérias: ${msm}`)
}
//vetor.includes(elemento) --> verifica se o elemento está contido no vetor

function exe6(){
    let salario = []; let nome = []; let menor = salario[0]; let maior = salario[0]
    
    let i

    for(i = 0; i < 10; i++){
        nome[i] = prompt('Informe o nome.')
        salario[i] = Number(prompt('Informe o salários.'))
    }
    for(i = 0; i < 10; i++){
        if(salario[i] > maior){
            maior = salario[i] // atualiza maior
        }
        if(salario[i] > menor){
            menor = salario[i] // atualiza menor
        }
    }
    let nMaior = nome[salario.indexOf(maior)]
    let nMenor = nome[salario.indexOf(menor)]

    alert(`${nMaior} vai receber o maior salario, que é ${maior}\n
    ${nMenor} vai receber o maior salario, que é ${menor}`)
}
//vetor.indexOf('elemento') --> imprime a posição do elemento dentro do vetor

function exe7(){
    let nros = []; let i; let neg = 0; let pos = 0

    for(i = 0; i < 10; i++){
        nros[i] = Number(prompt('Informe um número (positivo ou negativo).'))
        if(nros[i] < 0){
            neg++
        }
        if(nros[i] >= 0){
            pos += nros[i] // += mesma coisa q pos = pos + nros[i]
        }
    }
    alert(`Quantidade de nros negativos: ${neg}\nSoma dos nros positivos: ${pos}`)
}

function exe8(){
    let nome = []; let media = []; let i; let maior; let nmaiornota; let aprov

    for(i = 0; i < 7; i++){
        nome[i] = prompt('Informe o nome do aluno:')
        media[i] = Number(prompt('Informe a média final do aluno:'))
        if(media[i] > maior){
            maior.pull(media[i])
            nmaiornota.pull(nome[i])
        }
        if(media[i] < 7){
            aprov = (media[i]/4) + 2.5
            alert(`O aluno precisa tirar pelo menos ${aprov} no exame final para ser aprovado.`)
        }
    }
    alert(`O aluno com a maior média teve nota ${media[1]} e foi o ${nome[1]}`)
}

function exe9(){
    let nome = []; let cod = []; let prc = []; let i; let novoprc = []

    for(i = 0; i < 10; i++){
        nome[i] = prompt('Insira o nome do produto.')
        cod[i] = Number(prompt('Insira o código do produto.'))
        prc[i] = Number(prompt('Insira o preço do produto.'))
        if((cod[i] % 2 == 0) && (prc[i] > 1000)){
            novoprc[i] = prc[i] * 1.2
        }
        else if(cod[i] % 2 == 0){
            novoprc[i] = prc[i] * 1.15
        }
        else if(prc[i] > 1000){
            novoprc[i] = prc[i] * 1.1
        }
        else{
            novoprc[i] = "Não mudou."
        }
        
        }
    for(i = 0; i < 10; i++){
        alert(`Nome do produto: ${nome[i]}\nCódigo do produto: ${cod[i]}\nPreço do produto: ${prc[i]}\nNovo preço do produto: ${novoprc[i]}`)
    } 
}

function exSala1(){
    let nome = []; let cod = []; let i;

    for(i = 0; i < 5; i++){
        let aux = Number(prompt('Informe o código do aluno '+ (i + 1) +' : '))
        while(cod.includes(aux)){
            aux = prompt('Código já existente, insira um novo.')
        }
        cod[i] = aux
        nome[i] = prompt('Informe o nome do aluno ' + (i + 1) +' : ')
    }
    alert(`Códigos: ${cod} \nNomes: ${nome} `)
}
