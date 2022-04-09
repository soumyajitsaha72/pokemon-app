import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() toggle = new EventEmitter<boolean>();
  
  onClick(){
    this.toggle.emit(true);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
