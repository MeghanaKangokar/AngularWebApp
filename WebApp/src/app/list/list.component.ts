import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data: any[];
  @Output() selectedItem = new EventEmitter();
  @Input() searchTerm: any;
  constructor() { }

  ngOnInit(): void {}

  sendListItem(item: any) {
    this.selectedItem.emit(item);
  }
}
