import { Component, OnInit, ViewChild } from '@angular/core';
import { IMensagem } from 'src/app/shared/IMensagem.';
@Component({
  selector: 'pmmg-caixa-entrada',
  templateUrl: './caixa-entrada.component.html',
  styleUrls: ['./caixa-entrada.component.css']
})
export class CaixaEntradaComponent implements OnInit {
  @ViewChild('checkAll') checkAll: any;
  mensagens: Array<IMensagem>;
  config = { wheelSpeed: 1, swipeEasing: true };

  constructor() { }

  ngOnInit() {
    this.mensagens = new Array<IMensagem>();

    for (let i = 0; i < 20; i++) {
      let isLida = false;
      // tslint:disable-next-line:max-line-length
      let mensagem = 'asd asd asd asd asd as dsadas sdasdasdasd sadasd sadasdasd asdasd asdasdasd asdasd asdasdasdasda dasd asd asd';
      if (i % 2 === 0) {
        mensagem += ' asdadas asd asd asd asd asd asdasd asd asd asd a';
      }

      if (i % 5 === 0) {
        isLida = true;
      }

      this.mensagens.push({
        id: i + '',
        nome: 'Hebert Ferreira',
        assunto: 'Qualquer ',
        mensagem: mensagem,
        horario: '00:23',
        isLida: isLida,
        checked: false
      });
    }


  }

  verMais() {
  }

  selecionarItem(event) {
    this.validarCheckAll();
  }

  private validarCheckAll() {
    const naoSelecionados = this.mensagens.filter(item => item['checked'] === false);
    if (naoSelecionados.length > 0) {
      if (naoSelecionados.length === this.mensagens.length) {
        this.checkAll.indeterminate = false;
        this.checkAll.checked = false;
      } else {
        this.checkAll.indeterminate = true;
      }
    } else {
      this.checkAll.indeterminate = false;
      this.checkAll.checked = true;
    }
  }

  selecionarTodos(event) {
    this.mensagens.forEach(mensagem => {
      mensagem.checked = event.checked;
    });

    this.checkAll.checked = event.checked;
    this.validarCheckAll();
  }

  selecionarLidas() {
    this.limparSelecao();
    this.mensagens.forEach(mensagem => {
      if (mensagem['isLida']) {
        mensagem.checked = true;
      }
    });

    this.validarCheckAll();
  }

  selecionarNaoLidas() {
    this.limparSelecao();
    this.mensagens.forEach(mensagem => {
      if (!mensagem['isLida']) {
        mensagem.checked = true;
      }
    });

    this.validarCheckAll();
  }

  limparSelecao() {
    this.mensagens.forEach(mensagem => {
      mensagem.checked = false;
    });

    this.checkAll.checked = false;
    this.validarCheckAll();
  }

}
