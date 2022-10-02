import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-solar-wind-detail',
  templateUrl: './solar-wind-detail.component.html',
  styleUrls: ['./solar-wind-detail.component.scss']
})
export class SolarWindDetailComponent implements OnInit {

  @Input() model:any;
  @ViewChild('popuptitle') popuptitle!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.popuptitle.nativeElement.style.backgroundColor = this.model.controlValues.temp.color;
  }

}
