import { Banco, Conta, Cliente } from "./banco";
import prompt = require("prompt-sync");

class App {
  private banco: Banco = new Banco();
  private input = prompt();

  constructor() {
    this.banco.carregarDados();
  }

  menu(): void {
    let opcao: string;
    do {
      console.log("\n--- BEM-VINDO AO BANCO ---\n");
      console.log("--- CONTAS ---\n");
      console.log("01: Inserir Conta     02: Consultar Conta   03: Depositar");
      console.log(
        "04: Sacar             05: Transferir        06: Excluir Conta"
      );
      console.log("07: Mudar Titular     08: Listar/Atribuir");
      console.log("\n--- CLIENTES ---\n");
      console.log(
        "20: Inserir Cliente   21: Consultar Cliente 22: Excluir Cliente"
      );
      console.log("\n--- TOTALIZAÇÕES ---\n");
      console.log(
        "30: Total Contas      31: Total Saldo       32: Média Saldo"
      );
      console.log("\n--- OPERAÇÕES AVANÇADAS ---\n");
      console.log("40: Ordem Bancária (Transf. Múltipla)");
      console.log("0: Sair");

      opcao = this.input("Escolha uma opção: ");

      switch (opcao) {
        case "01":
          this.inserirConta();
          break;
        case "02":
          this.consultarConta();
          break;
        case "03":
          this.depositar();
          break;
        case "04":
          this.sacar();
          break;
        case "05":
          this.transferir();
          break;
        case "06":
          this.excluirConta();
          break;
        case "07":
          this.mudarTitularidade();
          break;
        case "08":
          this.listarEAtribuirSemTitular();
          break;

        case "20":
          this.inserirCliente();
          break;
        case "21":
          this.consultarCliente();
          break;
        case "22":
          this.excluirCliente();
          break;

        case "30":
          this.exibirTotalContas();
          break;
        case "31":
          this.exibirTotalSaldo();
          break;
        case "32":
          this.exibirMediaSaldo();
          break;

        case "40":
          this.realizarOrdemBancaria();
          break;

        case "0":
          console.log("\nAplicação encerrada.");
          break;
        default:
          console.log("\nOpção inválida.");
      }
      if (opcao != "0") {
        this.input("Operação finalizada. Digite <enter> para continuar");
      }
    } while (opcao != "0");
  }

  private inserirConta(): void {
    console.log("\n--- Cadastrar Conta ---\n");
    let numero = this.input("Digite o número da nova conta: ");
    let cpf = this.input("Digite o CPF do titular (ou deixe em branco): ");

    let cliente = cpf ? this.banco.consultarCliente(cpf) : null;

    if (cpf && !cliente) {
      console.log(
        "Cliente não encontrado. Cadastre o cliente primeiro ou deixe em branco."
      );
      return;
    }

    let conta = new Conta(numero, cliente, 0);
    this.banco.inserirConta(conta);
    console.log("Conta cadastrada com sucesso.");
  }

  private consultarConta(): void {
    console.log("\n--- Consultar Conta ---\n");
    let numero = this.input("Digite o número da conta: ");
    let conta = this.banco.consultarConta(numero);
    if (conta) {
      console.log(`Número: ${conta.numero}`);
      console.log(`Titular: ${conta.cliente?.nome || "Sem titular"}`);
      console.log(`Saldo: R$ ${conta.saldo.toFixed(2)}`);
    } else {
      console.log("Conta não encontrada.");
    }
  }

  private depositar(): void {
    console.log("\n--- Depositar ---\n");
    let numero = this.input("Digite o número da conta: ");
    let valorStr = this.input("Digite o valor do depósito: ");
    let valor = parseFloat(valorStr);
    this.banco.depositar(numero, valor);
    console.log("Depósito realizado (se a conta existir).");
  }

  private sacar(): void {
    console.log("\n--- Sacar ---\n");
    let numero = this.input("Digite o número da conta: ");
    let valorStr = this.input("Digite o valor do saque: ");
    let valor = parseFloat(valorStr);
    let sucesso = this.banco.sacar(numero, valor);
    if (sucesso) {
      console.log("Saque realizado com sucesso.");
    } else {
      console.log(
        "Falha no saque (conta não encontrada ou saldo insuficiente)."
      );
    }
  }

  private transferir(): void {
    console.log("\n--- Transferir ---\n");
    let numOrigem = this.input("Digite o número da conta de ORIGEM: ");
    let numDestino = this.input("Digite o número da conta de DESTINO: ");
    let valorStr = this.input("Digite o valor da transferência: ");
    let valor = parseFloat(valorStr);
    let sucesso = this.banco.transferir(numOrigem, numDestino, valor);
    if (sucesso) {
      console.log("Transferência realizada com sucesso.");
    } else {
      console.log("Falha na transferência.");
    }
  }

  private excluirConta(): void {
    console.log("\n--- Excluir Conta ---\n");
    let numero = this.input("Digite o número da conta a ser excluída: ");
    let sucesso = this.banco.excluirConta(numero);
    if (sucesso) {
      console.log("Conta excluída com sucesso.");
    } else {
      console.log("Falha ao excluir conta.");
    }
  }

  private mudarTitularidade(): void {
    console.log("\n--- Mudar Titularidade da Conta ---\n");
    let numeroConta = this.input("Digite o número da conta: ");
    let cpfNovoCliente = this.input("Digite o CPF do NOVO titular: ");
    let sucesso = this.banco.mudarTitularidade(numeroConta, cpfNovoCliente);
    if (sucesso) {
      console.log("Titularidade alterada com sucesso.");
    } else {
      console.log(
        "Falha ao alterar titularidade (conta ou cliente não encontrado)."
      );
    }
  }

  private listarEAtribuirSemTitular(): void {
    console.log("\n--- Contas Sem Titular ---");
    let contasSem = this.banco.listarContasSemTitular();

    if (contasSem.length === 0) {
      console.log("Não há contas sem titular.");
      return;
    }

    contasSem.forEach((c) =>
      console.log(`Conta: ${c.numero}, Saldo: ${c.saldo}`)
    );

    let resposta = this.input(
      "Deseja atribuir titular a uma dessas contas? (s/n): "
    );
    if (resposta.toLowerCase() === "s") {
      this.mudarTitularidade();
    }
  }

  private inserirCliente(): void {
    console.log("\n--- Cadastrar Cliente ---");
    let cpf = this.input("Digite o CPF do novo cliente: ");
    let nome = this.input("Digite o NOME do novo cliente: ");

    let cliente = new Cliente(cpf, nome);
    this.banco.inserirCliente(cliente);
    console.log("Cliente cadastrado com sucesso.");
  }

  private consultarCliente(): void {
    console.log("\n--- Consultar Cliente ---");
    let cpf = this.input("Digite o CPF do cliente: ");
    let cliente = this.banco.consultarCliente(cpf);
    if (cliente) {
      console.log(`CPF: ${cliente.cpf}`);
      console.log(`Nome: ${cliente.nome}`);
    } else {
      console.log("Cliente não encontrado.");
    }
  }

  private excluirCliente(): void {
    console.log("\n--- Excluir Cliente ---");
    console.log(
      "Atenção: Ao excluir um cliente, suas contas ficarão 'sem titular'."
    );
    let cpf = this.input("Digite o CPF do cliente a ser excluído: ");
    let sucesso = this.banco.excluirCliente(cpf);
    if (sucesso) {
      console.log("Cliente excluído com sucesso.");
    } else {
      console.log("Falha ao excluir cliente (não encontrado).");
    }
  }

  private exibirTotalContas(): void {
    console.log(`\nTotal de Contas no Banco: ${this.banco.getTotalContas()}`);
  }

  private exibirTotalSaldo(): void {
    console.log(
      `\nSaldo Total Depositado: R$ ${this.banco.getTotalSaldo().toFixed(2)}`
    );
  }

  private exibirMediaSaldo(): void {
    console.log(
      `\nMédia de Saldo por Conta: R$ ${this.banco.getMediaSaldo().toFixed(2)}`
    );
  }

  private realizarOrdemBancaria(): void {
    console.log("\n--- Ordem Bancária (Múltiplas Transferências) ---");
    let numOrigem = this.input("Digite a conta de ORIGEM dos fundos: ");
    let valorStr = this.input("Digite o valor a ser enviado para CADA conta: ");
    let valor = parseFloat(valorStr);

    let contasDestinoStr = this.input(
      "Digite os números das contas de destino (separados por vírgula): "
    );
    let contasDestino = contasDestinoStr.split(",").map((num) => num.trim());

    this.banco.realizarTransferenciasMultiplas(numOrigem, contasDestino, valor);
  }
}

let app = new App();
app.menu();
