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
