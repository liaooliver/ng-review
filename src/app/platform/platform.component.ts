import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss'],
})
export class PlatformComponent implements OnInit {
  toggleBar: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggle(event): void {
    this.toggleBar = event;
  }
}
