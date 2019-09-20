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
      this.snackBar.open('Mensagem enviada com sucesso', 'Cancelar Envio', { duration: 5000 });
    }, 3000);
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
