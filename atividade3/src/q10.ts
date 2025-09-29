class Autenticacao {
    usuario: string;
    senha: string;

    constructor(usuario: string, senha: string){
        this.usuario = usuario;
        this.senha = senha;
    }

    validar(): boolean {
        return this.usuario == 'admin' && this.senha == '1234';
    }
}

let pessoa1 = new Autenticacao('admininisttrador', '1234');
let pessoa2 = new Autenticacao('admin', '1234');

console.log(pessoa1.validar())
console.log(pessoa2.validar())