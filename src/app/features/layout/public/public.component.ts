import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  @Input() content!: TemplateRef<any> | null;
  constructor() { }

  ngOnInit(): void {
  }

}
