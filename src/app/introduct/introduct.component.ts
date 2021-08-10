import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-introduct',
  templateUrl: './introduct.component.html',
  styleUrls: ['./introduct.component.scss']
})
export class IntroductComponent implements OnInit {

  isOpen: boolean = false;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this._route.data.subscribe(data => {
    //   console.log(data.Resolver_data_name)
    // })
  }

  showContent(){
    this.isOpen = !this.isOpen
  }

}
