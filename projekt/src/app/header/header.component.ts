import { Component, OnInit } from '@angular/core';
import * as users from '../../data/user.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public users = users;
  
  constructor() { }

  ngOnInit() {
    const userName = this.users.users[0].name;
  }

}
