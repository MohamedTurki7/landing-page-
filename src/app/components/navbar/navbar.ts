import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar implements OnInit, OnDestroy {
  mobileMenuOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setupScrollEffect();
    this.setupSmoothScroll();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // التعامل مع التمرير لتغيير لون الخلفية
  private handleScroll = () => {
    const navbar = document.querySelector('nav.navbar');
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  };

  private setupScrollEffect(): void {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  // Smooth scroll لجميع الأقسام
  private setupSmoothScroll(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          const yOffset = -80; // تعويض ارتفاع النافبار
          const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          this.mobileMenuOpen = false; // غلق القائمة على الموبايل
        }
      });
    });
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  freeTrial(): void {
    alert("تم إرسال طلب التجربة المجانية!\nسيتم التواصل معك خلال 24 ساعة");
  }
}
