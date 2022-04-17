import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../search.service';
import { XpService } from '../../xp.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  xp = this.xpServ.xp;
  searchField= "";

  onInput(){
    this.search.searchKeyword.emit(this.searchField);
  }

  constructor(private search : SearchService, private router: Router, private xpServ : XpService) { }

  ngOnInit(): void {
  }

  navigateToTeams(){
    // this.router.navigate(['teams']);
    this.router.navigateByUrl('/teams');
  }

  navigateToHome(){
    this.router.navigateByUrl('/');
  }

}
