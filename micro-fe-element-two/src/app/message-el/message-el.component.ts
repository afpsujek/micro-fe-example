import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-el',
  templateUrl: './message-el.component.html',
  styleUrls: ['./message-el.component.scss']
})
export class MessageElComponent implements OnInit {

  @Input() message: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
