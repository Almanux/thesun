import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-misions-info',
  templateUrl: './misions-info.component.html',
  styleUrls: ['./misions-info.component.scss']
})
export class MisionsInfoComponent implements OnInit {

  @Input() model:any;

  constructor() { }

  ngOnInit(): void {
  }

}
