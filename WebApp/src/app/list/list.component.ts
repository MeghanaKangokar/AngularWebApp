import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data = [];
  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
      date: 'Jul 22',
      list_name: 'Vendor',
      entities: 0,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 22',
      list_name: 'Vendor',
      entities: 1,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 22',
      list_name: 'Vendor',
      entities: 0,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 22',
      list_name: 'Vendor',
      entities: 90,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 22',
      list_name: 'Vendor',
      entities: 0,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 22',
      list_name: 'Vendor',
      entities: 0,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 22',
      list_name: 'Vendor',
      entities: 0,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 22',
      list_name: 'Vendor',
      entities: 0,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 22',
      list_name: 'Vendor',
      entities: 1,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 22',
      list_name: 'Vendor',
      entities: 22,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 22',
      list_name: 'Vendor',
      entities: 0,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 22',
      list_name: 'Vendor',
      entities: 2,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 22',
      list_name: 'Vendor',
      entities: 54,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
    ];
  }
}
