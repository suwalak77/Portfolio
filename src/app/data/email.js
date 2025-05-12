// src/app/data/email.js
import emailjs from '@emailjs/browser';

export function sendEmail(form) {
  return emailjs.sendForm(
    'service_07d00ox',   // <-- เปลี่ยนเป็นของคุณ
    'template_xiff7xl',  // <-- เปลี่ยนเป็นของคุณ
    form,
    'erGzX7nYARIaLEUgV'    // <-- เปลี่ยนเป็นของคุณ
  );
}
