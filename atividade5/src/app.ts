import prompt from "prompt-sync";
import { Conta, Cliente, Banco } from "./banco";

class App {
  private _numero: string;
  private _saldo: number;

  constructor() {
    this._numero = input("Digite o número da conta: ");
    this._saldo = parseFloat(input("Digite o saldo inicial da conta: "));
  }

  menu(): void {
    b.carregarDados();
    let opcao: string = "";

    do {
      console.log("\nBem-vindo! Escolha uma opção:");
      console.log("Contas:");
      console.log("01 - Inserir       02 - Consultar  03 - Sacar");
      console.log("04 - Depositar     05 - Excluir  06 - Transferir");
      console.log("07 - Totalizações  08 - Realizar ordem bancária");
      console.log("09 - Transferir Titularidade  10 - Contas sem clientes");
      console.log("Clientes:");
      console.log("20 - Inserir    21 - Consultar   22 - Associar ");
      console.log("23 - Total aplicado por cliente  24 - Listar contas");
      console.log("0 - Sair");
      opcao = input("Opção: ");
      switch (opcao) {
        case "01":
          this.inserirConta();
          break;
        case "02":
          this.consultarConta();
          break;
        case "03":
          this.sacar();
          break;
        case "04":
          this.depositar();
          break;
        case "05":
          this.excluirConta();
          break;
        case "06":
          this.transferir();
          break;
        case "07":
          this.totalizacoes();
          break;
        case "08":
          this.realizarOrdemBancaria();
          break;
        case "09":
          this.transferirTitularidade();
          break;

        case "10":
          this.listarContasSemClientes();
          break;
        case "20":
          this.inserirCliente();
          break;

        case "21":
          this.consultarCliente();
          break;
        case "22":
          this.associarContaCliente();
          break;
        case "23":
          this.totalizarSaldoCliente();
          break;
        case "24":
          this.listarContasCliente();
          break;
        case "0":
          console.log("Saindo...");
          break;
        default:
          console.log("Opção inválida!");
      }
      input("Operação finalizada. Pressione <Enter> para continuar.");
    } while (opcao != "0");

    console.log("Aplicação encerrada.");
  }

  inserirConta(): void {
    console.log("\nCadastrar conta:");
    let conta: Conta = new Conta(this._numero, this._saldo); // Cliente será associado posteriormente
    b.inserirConta(conta);
    console.log("Conta cadastrada com sucesso!");
  }

  sacar(): void {
    console.log("\nSaque:");
    let valor: number = parseFloat(input("Digite o valor do saque: "));
    b.sacar(this._numero, valor);
    console.log("Saque realizado.");
    this.exibirExtrato(this._numero);
  }

  depositar(): void {
    console.log("\nDepósito:");
    let valor: number = parseFloat(input("Digite o valor do depósito: "));
    b.depositar(this._numero, valor);
    console.log("Depósito realizado.");
    this.exibirExtrato(this._numero);
  }

  transferir(): void {
    console.log("\nTransferência:");
    let numeroOrigem: string = input("Digite o número da conta de origem: ");
    let numeroDestino: string = input("Digite o número da conta de destino: ");
    let valor: number = parseFloat(input("Digite o valor da transferência: "));
    b.transferir(numeroOrigem, numeroDestino, valor);
    console.log("Transferência realizada.");
    console.log("\nExtrato da conta de origem:");
    this.exibirExtrato(numeroOrigem);
    console.log("\nExtrato da conta de destino:");
    this.exibirExtrato(numeroDestino);
  }

  consultarConta(): void {
    console.log("\nConsultar conta:");
    this.exibirExtrato(this._numero);
  }

  exibirExtrato(numero: string): void {
    const conta = b.consultarConta(numero);
    if (conta) {
      const cliente = conta.cliente;
      console.log("\n=== Extrato da Conta ===");
      console.log(`ID: ${conta.id}`);
      console.log(`Número da conta: ${conta.numero}`);
      console.log(`Saldo: ${conta.saldo}`);
      if (cliente) {
        console.log("\n=== Dados do Cliente ===");
        console.log(`ID: ${cliente.id}`);
        console.log(`Nome: ${cliente.nome}`);
        console.log(`CPF: ${cliente.cpf}`);
        /*
                console.log("Contas associadas:");
                cliente.contas.forEach((c) =>
                    console.log(`- Conta: ${c.numero}, Saldo: ${c.saldo}`)
                );
                */
      } else {
        console.log("Cliente: Não associado.");
      }
      console.log("=========================\n");
    } else {
      console.log("Conta não encontrada para exibir extrato.");
    }
  }

  excluirConta(): void {
    console.log("\nExcluir conta:");
    b.excluirConta(this._numero);
    console.log("Conta excluída com sucesso.");
  }

  totalizacoes(): void {
    console.log("\nTotalizações:");
    console.log(`Quantidade de contas: ${b.obterQuantidadeDeContas()}`);
    console.log(
      `Total depositado no banco: ${b.obterTotalDinheiroDepositado()}`
    );
    console.log(`Média de saldo das contas: ${b.calcularMediaSaldoContas()}`);
  }

  inserirCliente(): void {
    console.log("\nCadastrar cliente:");
    let nome: string = input("Digite o nome do cliente: ");
    let cpf: string = input("Digite o CPF do cliente: ");
    let dataNascimento: Date = new Date(
      input("Digite a data de nascimento (AAAA-MM-DD): ")
    );
    let cliente: Cliente = new Cliente(nome, cpf, dataNascimento);
    b.inserirCliente(cliente);
    console.log("Cliente cadastrado com sucesso");
  }

  consultarCliente(): void {
    console.log("\nConsultar cliente:");
    let cpf: string = input("Digite o CPF do cliente: ");
    let cliente = b.consultarCliente(cpf);
    if (cliente) {
      console.log(
        `Cliente encontrado: ID ${cliente.id}, Nome: ${cliente.nome}, CPF: ${cliente.cpf}`
      );
    } else {
      console.log("Cliente não encontrado.");
    }
  }

  associarContaCliente(): void {
    console.log("\nAssociar conta a cliente:");
    let cpfCliente: string = input("Digite o CPF do cliente: ");
    b.associarContaCliente(this._numero, cpfCliente);
    console.log("Conta associada ao cliente com sucesso");
  }

  totalizarSaldoCliente(): void {
    console.log("Totalizar saldo por cliente:");
    let cpfCliente: string = input("Digite o CPF do cliente: ");
    let total = b.totalizarSaldoCliente(cpfCliente);
    console.log("Total: " + total);
  }

  realizarOrdemBancaria() {
    console.log("Realizar ordem bancária");
    let numeroConta: string = input("Digite o número da conta de origem: ");
    let valor: number = Number(
      input("Valor a ser transferido para cada conta: ")
    );
    let numeros: string[] = input(
      "Digite os números das contas separadas por espaço: "
    ).split(" ");
    b.realizarOrdemBancaria(numeroConta, numeros, valor);
    console.log(numeros);

    console.log("Conta de origem");
    this.exibirExtrato(numeroConta);
    console.log("Contas de destino");
    for (let numero of numeros) {
      this.exibirExtrato(numero);
    }

    console.log("Ordem bancária realizada com sucesso.");
  }
  transferirTitularidade() {
    console.log("Transferir titularidade de conta");
    let cpfCliente: string = input("Digite o CPF do cliente: ");
    b.transferirTitularidade(this._numero, cpfCliente);
    this.exibirExtrato(this._numero);
    console.log("Transferência de titularidade realizada com sucesso");
  }

  listarContasSemClientes() {
    console.log("Listar contas sem clientes");
    let contas: Conta[] = b.listarContasSemCliente();

    for (let conta of contas) {
      this.exibirExtrato(conta.numero);
    }
  }

  listarContasCliente() {
    let cpfCliente: string = input("Digite o CPF do cliente: ");
    let contas: Conta[] = b.listarContasCliente(cpfCliente);
    for (let conta of contas) {
      this.exibirExtrato(conta.numero);
    }
  }
}

let app: App = new App();
let input = prompt();
let b: Banco = new Banco();

app.menu();
