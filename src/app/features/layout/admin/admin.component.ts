import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Input() content!: TemplateRef<any> | null;

  constructor() { }

  ngOnInit(): void {
  }

}
