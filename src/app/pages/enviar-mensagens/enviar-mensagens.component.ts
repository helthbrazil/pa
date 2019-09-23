import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material';

export interface Fruit {
  name: string;
}

/**
 * @title Chips with input
 */
@Component({
  selector: 'pmmg-enviar-mensagens',
  templateUrl: './enviar-mensagens.component.html',
  styleUrls: ['./enviar-mensagens.component.css']
})
export class EnviarMensagensComponent {
  editorValue: string;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  showLoading = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    { name: 'Sd Lincon' },
    { name: 'Cb Jorge' },
    { name: 'Sd Marina' },
  ];

  // SCROLL
  public configScroll = {
    wheelSpeed: 1,
    swipeEasing: true
  };

  // CONFIGURAÇÃO EDITOR
  config = {
    toolbar: [

      // tslint:disable-next-line:max-line-length
      { name: 'basicstyles', groups: ['basicstyles', 'cleanup'], items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
      // tslint:disable-next-line:max-line-length
      { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'], items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
      { name: 'insert', items: ['SpecialChar', 'PageBreak'] },
      '/',
      { name: 'styles', items: ['Format', 'Font', 'FontSize'] },
      { name: 'colors', items: ['TextColor', 'BGColor'] },
      { name: 'tools', items: ['Maximize'] },
      { name: 'document', groups: ['mode', 'document', 'doctools'] }
    ]
  };
  constructor(private snackBar: MatSnackBar) {

  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  enviarMensagem() {
    this.showLoading = true;

    setTimeout(() => {
      this.showLoading = false;
      this.snackBar.open('Mensagem enviada com sucesso', undefined, { duration: 5000 });
    }, 3000);
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
