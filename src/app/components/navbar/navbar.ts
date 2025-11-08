// src/app/components/navbar/navbar.component.ts
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

  private handleScroll = () => {
    const navbar = document.querySelector('nav');
    const navbarBg = document.getElementById('navbar-bg');
    
    if (window.scrollY > 50) {
      navbar?.classList.add('bg-white', 'shadow-xl', 'border-bottom', 'border-light-subtle');
      navbarBg?.classList.replace('opacity-0', 'opacity-100');
    } else {
      navbar?.classList.remove('bg-white', 'shadow-xl', 'border-bottom', 'border-light-subtle');
      navbarBg?.classList.replace('opacity-100', 'opacity-0');
    }
  };

  private setupScrollEffect(): void {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Call once on load
  }

  private setupSmoothScroll(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href!);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          this.mobileMenuOpen = false;
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