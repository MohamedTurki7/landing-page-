// src/app/components/contact/contact.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false, // Make the component standalones
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact{
  formData = {
    name: '',
    phone: '',
    message: ''
  };

  errors = {
    name: '',
    phone: '',
    message: ''
  };

  onSubmit(): void {
    this.resetErrors();

    let hasError = false;

    if (!this.formData.name.trim()) {
      this.errors.name = 'الاسم مطلوب';
      hasError = true;
    }

    if (!this.formData.phone.trim()) {
      this.errors.phone = 'رقم الهاتف مطلوب';
      hasError = true;
    } else if (!/^01[0125][0-9]{8}$/.test(this.formData.phone.replace(/\s/g, ''))) {
      this.errors.phone = 'رقم الهاتف غير صحيح (مثال: 01234567890)';
      hasError = true;
    }

    if (!this.formData.message.trim()) {
      this.errors.message = 'الرسالة مطلوبة';
      hasError = true;
    } else if (this.formData.message.length < 10) {
      this.errors.message = 'الرسالة قصيرة جدًا (10 أحرف على الأقل)';
      hasError = true;
    }

    if (hasError) return;

    alert("تم إرسال رسالتك بنجاح!\nشكرًا لتواصلك معنا، هنرد عليك في أقرب وقت 🚀");
    this.formData = { name: '', phone: '', message: '' };
  }

  private resetErrors(): void {
    this.errors = { name: '', phone: '', message: '' };
  }
}