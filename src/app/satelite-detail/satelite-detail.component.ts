import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-satelite-detail',
  templateUrl: './satelite-detail.component.html',
  styleUrls: ['./satelite-detail.component.scss']
})
export class SateliteDetailComponent implements OnInit {

  @Input() satData:any;
  @Input() model:any;

  @ViewChild('nombreDetSat') nombreDetSat!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.nombreDetSat.nativeElement.style.backgroundColor = this.model.controlValues.temp.color;
  }

}
