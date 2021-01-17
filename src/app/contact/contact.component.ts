import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  message: string;

  constructor() { }

  ngOnInit(): void {
  }
  appendMailTo(){
    this.name = this.name;
    this.message = this.message;
  }
}
