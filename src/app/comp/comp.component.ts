import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  constructor(private titleService : TitleService) { }
  title:string;
  serviceText=this.titleService.getTitle();
  nameA="Hello How are you";
  nameB="";
  fruits=["Apple", "Orange", "Mango", "Grapes"]
  disabled=false;
  enabled=false;
  date=new Date();
  my_favourite="Mango";
  addNameA(event)
  {
    this.nameA=event;
  }

  onNotified(object:string)
  {
    this.title=object;
  }

  addNameB(event)
  {
    this.nameB = event;
  }

  ngOnInit() {
  }

}
