import { Component, OnInit } from '@angular/core';

@Component({ // Decorator torna o mesmo em componente.
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
