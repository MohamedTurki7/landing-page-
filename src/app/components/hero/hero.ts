// src/app/components/hero/hero.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  standalone: false,

  styleUrls: ['./hero.scss'],
})
export class Hero {
  constructor(private router: Router) {}

  freeTrial(): void {
    alert('تم إرسال طلب التجربة المجانية!\nسيتم التواصل معك خلال 24 ساعة');
  }

  loginUrl = 'http://localhost:5173/login';

  login(): void {
    window.location.href = this.loginUrl;
  }
}
