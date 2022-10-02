import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-storm',
  templateUrl: './create-storm.component.html',
  styleUrls: ['./create-storm.component.scss']
})
export class CreateStormComponent implements OnInit {

  @Input() actualData:any;

  constructor() { }

  ngOnInit(): void {
  }

}
