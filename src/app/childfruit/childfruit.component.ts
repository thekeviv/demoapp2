import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childfruit',
  templateUrl: './childfruit.component.html',
  styleUrls: ['./childfruit.component.css']
})
export class ChildfruitComponent implements OnInit {

  constructor() { }
  @Input()fruit:string;

  @Output()notify: EventEmitter<string>= new EventEmitter<string>();

  onClicked()
  {
    this.notify.emit(this.fruit+" was clicked");
  }

  ngOnInit() {
  }

}
