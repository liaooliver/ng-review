import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit {

  toggleBar: boolean = false;
  toggleClass: string = 'w-16';

  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }

  toggle(): void {
    this.toggleBar = !this.toggleBar
    if (this.toggleBar){
      this.toggleClass = 'w-60'
    }else{
      this.toggleClass = 'w-16'
    }
  }

}
