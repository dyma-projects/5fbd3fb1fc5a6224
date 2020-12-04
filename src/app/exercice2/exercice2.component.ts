import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;

  @ViewChild('inputValue') public el : ElementRef; 

  constructor() { }

  ngOnInit() {
  }

  public update() :void{
    this.valeur = this.el.nativeElement.value;
  }

}
