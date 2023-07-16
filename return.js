function verificar(dados){

    if(typeof dados === 'string'){
        console.log('este dado e uma string')

    }else if( typeof dados === "number"){
console.log('este dado e um numero')

    }else if(typeof dados ==="boolean"){
        console.log('este dado e uma boolean')
    }
}

verificar(true);
verificar(5);
verificar("joao");
