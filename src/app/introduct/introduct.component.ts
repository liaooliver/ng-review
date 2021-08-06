import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduct',
  templateUrl: './introduct.component.html',
  styleUrls: ['./introduct.component.scss']
})
export class IntroductComponent implements OnInit {

  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showContent(){
    this.isOpen = !this.isOpen
  }

}
