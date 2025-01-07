import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menuValue:boolean=false;
 menu_icon :string ='bi bi-list';


 constructor(private router: Router) { }

 ngOnInit(): void {
 }
 
 openMenu(){
    this.menuValue =! this.menuValue ;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }
   closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }

  redirectToCatalog() {
    this.router.navigate(['/homefood/catalog']);
  }

  redirectToHomePage() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    this.router.navigate(['/homefood']);
  }

}
