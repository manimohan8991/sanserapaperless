import { Component, OnInit } from '@angular/core';



interface Operation {
  
  FileName : string;
  macName: string;
  EquipNumber: string;
  Component: string;
}

const OPERATIONS: Operation[] = [
  {
   
    FileName: 'Process Drawing',
    macName: 'DDG-1101',
    EquipNumber: 'EQ- 12547',
    Component : 'Small End Drilling'
  },
  {
   
    FileName: 'Process Drawing',
    macName: 'DDG-1101',
    EquipNumber: 'EQ- 12547',
    Component : 'Small End Drilling'
  },
  {
   
    FileName: 'Process Drawing',
    macName: 'DDG-1101',
    EquipNumber: 'EQ- 12547',
    Component : 'Small End Drilling'
  },
  {
   
    FileName: 'Process Drawing',
    macName: 'DDG-1101',
    EquipNumber: 'EQ- 12547',
    Component : 'Small End Drilling'
  },
  {
   
    FileName: 'Process Drawing',
    macName: 'DDG-1101',
    EquipNumber: 'EQ- 12547',
    Component : 'Small End Drilling'
  },
  {
   
    FileName: 'Process Drawing',
    macName: 'DDG-1101',
    EquipNumber: 'EQ- 12547',
    Component : 'Small End Drilling'
  },
  {
   
    FileName: 'Process Drawing',
    macName: 'DDG-1101',
    EquipNumber: 'EQ- 12547',
    Component : 'Small End Drilling'
  },
  {
   
    FileName: 'Process Drawing',
    macName: 'DDG-1101',
    EquipNumber: 'EQ- 12547',
    Component : 'Small End Drilling'
  },
  {
   
    FileName: 'Process Drawing',
    macName: 'DDG-1101',
    EquipNumber: 'EQ- 12547',
    Component : 'Small End Drilling'
  },
  {
   
    FileName: 'Process Drawing',
    macName: 'DDG-1101',
    EquipNumber: 'EQ- 12547',
    Component : 'Small End Drilling'
  },
  {
   
    FileName: 'Process Drawing',
    macName: 'DDG-1101',
    EquipNumber: 'EQ- 12547',
    Component : 'Small End Drilling'
  },
  {
   
    FileName: 'Process Drawing',
    macName: 'DDG-1101',
    EquipNumber: 'EQ- 12547',
    Component : 'Small End Drilling'
  },
  {
   
    FileName: 'Process Drawing',
    macName: 'DDG-1101',
    EquipNumber: 'EQ- 12547',
    Component : 'Small End Drilling'
  },
  {
   
    FileName: 'Process Drawing',
    macName: 'DDG-1101',
    EquipNumber: 'EQ- 12547',
    Component : 'Small End Drilling'
  },
  {
   
    FileName: 'Process Drawing',
    macName: 'DDG-1101',
    EquipNumber: 'EQ- 12547',
    Component : 'Small End Drilling'
  },
  {
   
    FileName: 'Process Drawing',
    macName: 'DDG-1101',
    EquipNumber: 'EQ- 12547',
    Component : 'Small End Drilling'
  }
];
@Component({
  selector: 'app-uploaddetails',
  templateUrl: './uploaddetails.component.html',
  styleUrls: ['./uploaddetails.component.scss']
})
export class UploaddetailsComponent implements OnInit {
  operations = OPERATIONS;
  constructor() { }

  ngOnInit() {
  }

}
