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
      date: '',
      list_name: 'Competitive Intelligence',
      entities: 0,
      description: [
        'Bundle Technology Private Limited', 'Hector Bevarages Private Limited', 'Puma Sports India Private Limited',
        'Dewan Housing Finance Corporation Ltd.', 'Infosys Limited', 'Think and Learn Private Limited', 'Delhivery Private Limited',
        'Wow Momo Foods Private Limited', 'Rebel Foods Private Limited', 'Lendingkart Technologies Private Limited',
        'ID Fresh food private limited', 'Bharatiaasha Private Limited', 'Gala Precision Engineering Private Limited',
        'Balaji Wafers Private Limited', 'Sangeeta Mobiles Private Limited', 'Vodafone Idea Limited', 'Vakrangee Limited',
        'Bundle Technology Private Limited', 'Hector Bevarages Private Limited', 'Puma Sports India Private Limited',
        'Dewan Housing Finance Corporation Ltd.', 'Infosys Limited', 'Think and Learn Private Limited', 'Delhivery Private Limited',
        'Wow Momo Foods Private Limited', 'Rebel Foods Private Limited', 'Lendingkart Technologies Private Limited',
        'ID Fresh food private limited', 'Bharatiaasha Private Limited', 'Gala Precision Engineering Private Limited',
        'Balaji Wafers Private Limited', 'Sangeeta Mobiles Private Limited', 'Vodafone Idea Limited', 'Vakrangee Limited'
      ]
     },
     {
      date: '',
      list_name: 'My Vendors',
      entities: 0,
      description: [
        'company 2', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: '',
      list_name: 'My Customers',
      entities: 0,
      description: [
        'company 3', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 23',
      list_name: 'Test_30_results',
      entities: 28,
      description: [
        'company 4', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Jul 28',
      list_name: 'To_index',
      entities: 100,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Apr 10',
      list_name: 'KPMG Requested Companies - Listed Set_Prasad Kumar',
      entities: 34,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Mar 12',
      list_name: 'Error Case - LTB To EBITDA Blank_Prasad Kumar',
      entities: 24,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Dec 14',
      list_name: 'Two Companies',
      entities: 2,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Nov 01',
      list_name: 'Custom',
      entities: 30,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: 'Oct 29',
      list_name: 'Mumbai',
      entities: 3,
      description: [
        'company 1', 'company 1', 'company 1', 'company 1', 'company 1'
      ]
     },
     {
      date: '',
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
