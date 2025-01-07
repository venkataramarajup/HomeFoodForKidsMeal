import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-popup-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-model.component.html',
  styleUrl: './popup-model.component.scss'
})
export class PopupModelComponent implements OnInit {
  @Input() vegetable: any
  @Output() closemodal: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.vegetable);
    this.vegetable = this.vegetable;
  }

  closepopup() {
    this.closemodal.emit({ close: true });
  }

}
