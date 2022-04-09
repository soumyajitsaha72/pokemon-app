import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() toggle = new EventEmitter<boolean>();
  
  onClick(){
    this.toggle.emit(false);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
