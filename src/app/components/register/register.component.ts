import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { REGISTER_BUTTON_TEXT, LOGIN_TEXT } from '../../constants/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('usernameBoxSelect', {static: true}) usernameBoxSelect: ElementRef;
  public REGISTER_BUTTON_TEXT = REGISTER_BUTTON_TEXT;
  public LOGIN_TEXT = LOGIN_TEXT;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.usernameBoxSelect.nativeElement.focus();
  }

  public registerUser(): void {
    this.router.navigateByUrl('login');
  }

}
