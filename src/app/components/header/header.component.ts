import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import {Task} from '../../Task' ; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
  }

}
