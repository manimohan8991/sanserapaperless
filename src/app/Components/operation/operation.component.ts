import { Component, OnInit } from '@angular/core';



interface Operation {
  opno: number;
  macName: string;
  opDec: string;
}

const OPERATIONS: Operation[] = [
  {
    opno: 123,
    macName: 'Machine Name',
    opDec: 'Small End Drilling'
  },
  {
    opno: 124,
   
    macName: 'Machine Name',
    opDec: 'Small End Pre Bush Boring'
  },
  {
    opno: 125,

    macName: 'Machine Name',
    opDec: 'Small End Drilling'
  },
  {
    opno: 126,

    macName: 'Machine Name',
    opDec: 'Small End Pre Bush Boring'
  },
  {
    opno: 123,
    macName: 'Machine Name',
    opDec: 'Small End Drilling'
  },
  {
    opno: 124,
   
    macName: 'Machine Name',
    opDec: 'Small End Pre Bush Boring'
  },
  {
    opno: 125,

    macName: 'Machine Name',
    opDec: 'Small End Drilling'
  },
  {
    opno: 126,

    macName: 'Machine Name',
    opDec: 'Small End Pre Bush Boring'
  },
  {
    opno: 123,
    macName: 'Machine Name',
    opDec: 'Small End Drilling'
  },
  {
    opno: 124,
   
    macName: 'Machine Name',
    opDec: 'Small End Pre Bush Boring'
  },
  {
    opno: 125,

    macName: 'Machine Name',
    opDec: 'Small End Drilling'
  },
  {
    opno: 126,

    macName: 'Machine Name',
    opDec: 'Small End Pre Bush Boring'
  },
  {
    opno: 123,
    macName: 'Machine Name',
    opDec: 'Small End Drilling'
  },
  {
    opno: 124,
   
    macName: 'Machine Name',
    opDec: 'Small End Pre Bush Boring'
  },
  {
    opno: 125,

    macName: 'Machine Name',
    opDec: 'Small End Drilling'
  },
  {
    opno: 126,

    macName: 'Machine Name',
    opDec: 'Small End Pre Bush Boring'
  }
];
@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
  operations = OPERATIONS;
  constructor() { }

  ngOnInit() {
  }

}
