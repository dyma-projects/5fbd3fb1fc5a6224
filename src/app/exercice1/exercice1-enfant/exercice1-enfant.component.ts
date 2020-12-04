import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output() public actionBouton : EventEmitter<number> = new EventEmitter<number>();
  @Input('r') public compteur : number; 

  constructor() { }

  ngOnInit() {
  }

  public getAction(num : number) : void {
    this.actionBouton.emit(num);
  }

}
