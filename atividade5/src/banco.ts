export class Cliente {
  constructor(public cpf: string, public nome: string) {}
}

export class Conta {
  constructor(
    public numero: string,
    public cliente: Cliente | null,
    public saldo: number = 0
  ) {}

  sacar(valor: number): boolean {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  transferir(contaDestino: Conta, valor: number): boolean {
    if (this.sacar(valor)) {
      contaDestino.depositar(valor);
      return true;
    }
    return false;
  }
}

export class Banco {
  private contas: Conta[] = [];
  private clientes: Cliente[] = [];

  consultarConta(numero: string): Conta | undefined {
    return this.contas.find((c) => c.numero === numero);
  }

  consultarCliente(cpf: string): Cliente | undefined {
    return this.clientes.find((c) => c.cpf === cpf);
  }

  carregarDados(): void {
    console.log("Carregando dados iniciais...");
    let c1 = new Cliente("111", "Ana");
    let c2 = new Cliente("222", "Bruno");
    let c3 = new Cliente("333", "Carla");
    let c4 = new Cliente("444", "Daniel");
    let c5 = new Cliente("555", "Elisa");

    this.inserirCliente(c1);
    this.inserirCliente(c2);
    this.inserirCliente(c3);
    this.inserirCliente(c4);
    this.inserirCliente(c5);

    let conta1 = new Conta("001", c1, 100);
    let conta2 = new Conta("002", c2, 500);
    let conta3 = new Conta("003", c3, 0);
    let conta4 = new Conta("004", c4, 1000);
    let conta5 = new Conta("005", null, 50);

    this.inserirConta(conta1);
    this.inserirConta(conta2);
    this.inserirConta(conta3);
    this.inserirConta(conta4);
    this.inserirConta(conta5);
  }

  inserirConta(conta: Conta): void {
    if (!this.consultarConta(conta.numero)) {
      this.contas.push(conta);
    } else {
      console.error(`Erro: Conta ${conta.numero} já existe.`);
    }
  }

  inserirCliente(cliente: Cliente): void {
    if (!this.consultarCliente(cliente.cpf)) {
      this.clientes.push(cliente);
    } else {
      console.error(`Erro: Cliente ${cliente.cpf} já existe.`);
    }
  }

  depositar(numero: string, valor: number): void {
    let conta = this.consultarConta(numero);
    if (conta) {
      conta.depositar(valor);
    } else {
      console.error("Conta não encontrada.");
    }
  }

  sacar(numero: string, valor: number): boolean {
    let conta = this.consultarConta(numero);
    if (conta) {
      return conta.sacar(valor);
    }
    console.error("Conta não encontrada.");
    return false;
  }

  transferir(numOrigem: string, numDestino: string, valor: number): boolean {
    let contaOrigem = this.consultarConta(numOrigem);
    let contaDestino = this.consultarConta(numDestino);

    if (contaOrigem && contaDestino) {
      return contaOrigem.transferir(contaDestino, valor);
    }
    console.error("Conta de origem ou destino não encontrada.");
    return false;
  }

  realizarTransferenciasMultiplas(
    numOrigem: string,
    numsDestino: string[],
    valor: number
  ): void {
    let contaOrigem = this.consultarConta(numOrigem);
    if (!contaOrigem) {
      console.error("Conta de origem não encontrada.");
      return;
    }

    for (const numDest of numsDestino) {
      let contaDestino = this.consultarConta(numDest);
      if (contaDestino) {
        const sucesso = contaOrigem.transferir(contaDestino, valor);
        if (sucesso) {
          console.log(
            `Transferência de ${valor} para ${numDest} bem-sucedida.`
          );
        } else {
          console.log(
            `Falha na transferência para ${numDest} (saldo insuficiente).`
          );
        }
      } else {
        console.log(`Conta destino ${numDest} não encontrada.`);
      }
    }
  }

  getTotalContas(): number {
    return this.contas.length;
  }

  getTotalSaldo(): number {
    return this.contas.reduce((total, conta) => total + conta.saldo, 0);
  }

  getMediaSaldo(): number {
    if (this.getTotalContas() === 0) {
      return 0;
    }
    return this.getTotalSaldo() / this.getTotalContas();
  }

  mudarTitularidade(numeroConta: string, cpfNovoCliente: string): boolean {
    let conta = this.consultarConta(numeroConta);
    let novoCliente = this.consultarCliente(cpfNovoCliente);

    if (conta && novoCliente) {
      conta.cliente = novoCliente;
      return true;
    }
    console.error("Conta ou Cliente não encontrado.");
    return false;
  }

  excluirCliente(cpf: string): boolean {
    let clienteIndex = this.clientes.findIndex((c) => c.cpf === cpf);
    if (clienteIndex === -1) {
      console.error("Cliente não encontrado.");
      return false;
    }

    this.contas.forEach((conta) => {
      if (conta.cliente?.cpf === cpf) {
        conta.cliente = null;
      }
    });

    this.clientes.splice(clienteIndex, 1);
    return true;
  }

  excluirConta(numero: string): boolean {
    let contaIndex = this.contas.findIndex((c) => c.numero === numero);
    if (contaIndex === -1) {
      console.error("Conta não encontrada.");
      return false;
    }

    this.contas.splice(contaIndex, 1);
    return true;
  }

  listarContasSemTitular(): Conta[] {
    return this.contas.filter((c) => c.cliente === null);
  }
}
