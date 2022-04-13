import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @Input() content!: TemplateRef<any> | null;
  constructor() { }

  ngOnInit(): void {
  }

}
