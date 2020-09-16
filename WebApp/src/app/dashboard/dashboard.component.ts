import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() searchTerm: any;
  data = [];
  description: any[];
  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
      date: 'Jul 22',
      list_name: 'Megna',
      entities: 0,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1',
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1',
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1',
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 22',
      list_name: 'Test1',
      entities: 1,
      description: [
        'company 2', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 22',
      list_name: 'Test12',
      entities: 0,
      description: [
        'company 3', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 22',
      list_name: 'Vendor',
      entities: 90,
      description: [
        'company 4', 'company 1', 'company 1', 'company 1', 'company 1'
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

  selectedData(item: any){
    this.description = item.description;
  }

}
