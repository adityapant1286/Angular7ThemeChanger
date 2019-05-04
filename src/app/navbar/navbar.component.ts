import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    // localStorage.removeItem('currentTheme');
  }

  constructor() { }

  ngOnInit() {
    // console.log('refreshed');
    // let ct = localStorage.getItem('currentTheme');
    // console.log(ct);
    // if (ct) {
    //   window['changeTheme'](ct);
    // } else {
    //   window['changeTheme']('materia');
    // }
  }

  setTheme(theme: string) {
    window['changeTheme'](theme);
    localStorage.setItem('currentTheme', theme);
  }

}
