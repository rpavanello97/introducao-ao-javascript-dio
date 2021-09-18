function Pessoa(customProperties) {
    return {
        name: "Rafael",
        lastName:"Pavanello",
        ...customProperties
    }
}

const p = Pessoa({name:"Rafael Novo", age: 24});
console.log(p);