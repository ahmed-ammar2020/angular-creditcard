import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() control: any = "";
  @Input() label = "";
  @Input() mask = "";
  constructor() { }

  ngOnInit(): void {
  }

  showErrors() {
    const {dirty, errors, touched} = this.control;
    return dirty && errors && touched;
  }

}
