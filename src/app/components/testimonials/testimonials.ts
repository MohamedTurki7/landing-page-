// src/app/components/testimonials/testimonials.component.ts
import { Component } from '@angular/core';

interface Testimonial {
  name: string;
  city: string;
  text: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.html',
  standalone: false,
  styleUrls: ['./testimonials.scss']
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
    name: 'أحمد السيد',
    city: 'القاهرة',
    text: 'موقع الفلترة وفّر عليا ساعات طويلة في متابعة كل الطلبات والموردين، كل شيء واضح وسهل الاستخدام.'
  },
  {
    name: 'محمد علي',
    city: 'الإسكندرية',
    text: 'من خلال التنبيهات اللحظية ومتابعة المخزون، قدرت أتخذ قرارات أسرع وأنظم شغلي بشكل احترافي.'
  },
  {
    name: 'فاطمة حسن',
    city: 'الجيزة',
    text: 'واجهة الموقع سهلة ومليانة كل التفاصيل اللي أحتاجها لمتابعة العملاء والمنتجات بشكل كامل.'
  }
  ];
}