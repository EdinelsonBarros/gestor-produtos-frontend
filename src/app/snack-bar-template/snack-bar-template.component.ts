import { Component, Inject, inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-template',
  template: `
  <div [ngClass]="data.class">
    <span class="example-pizza-party" matSnackBarLabel>
      {{data.message}}
    </span>
    <span >
    <mat-icon >{{data.icon}}</mat-icon>
    </span>
  </div>
  `,
  styleUrl: './snack-bar-template.component.scss'
})
export class SnackBarTemplateComponent {
  
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
