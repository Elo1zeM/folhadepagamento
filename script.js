const listaFuncionarios = [
    {id: 1, nome: 'Kemmily Carvalho', setor: 'TI', salario: 7000, bonus: true},
    {id: 2, nome: 'Isabelly Oliveira', setor: 'TI', salario: 12000, bonus: false},
    {id: 3, nome: 'Maria Eduarda Dias ', setor: 'TI', salario: 10000, bonus: true},
    {id: 4, nome: 'Ana Laura Paulino', setor: 'TI', salario: 12000, bonus: false},
    {id: 5, nome: 'Isabella Rosa', setor: 'TI', salario: 7000, bonus: true},
]

// ///////FILTER
 const funcionariosBonus = listaFuncionarios.filter(funcionarios => funcionarios.bonus);
console.log(funcionariosBonus);

// ///////MAP: aplicar bonus de 500
const funcionariosComBonus = funcionariosBonus.map(funcionarios => {
    return {
        ...funcionarios,
        salarioFinal: funcionarios.salario + 500
    }
})
console.log(funcionariosComBonus)

// ///////REDUCE
const totalSetor = funcionariosComBonus.reduce((acumulador, item) =>{
    return acumulador + item.salarioFinal;
}, 0);
console.log(`R$ ${totalSetor.toFixed(2)}`);

console.log(`--- FOLHA DE PAGAMENTO ---`);
console.log(`Funcionários com bônus de performance : ${funcionariosComBonus.length}`);
console.log(`Soma total da folha do setor: R$ ${totalSetor.toFixed(2)}`);