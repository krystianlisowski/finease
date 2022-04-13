import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {
  @Input() content!: TemplateRef<any> | null;
}
