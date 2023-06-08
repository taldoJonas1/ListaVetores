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
