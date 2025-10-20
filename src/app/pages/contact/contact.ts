import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  messageSent = false;

  sendMessage() {
    console.log('Datos del formulario: ' , this.contact);
    this.messageSent = true;

    setTimeout(() => {
      this.messageSent = false;
      this.contact = { name: '', email: '', subject: '', message: ''};
    }, 3000);
  }
}
