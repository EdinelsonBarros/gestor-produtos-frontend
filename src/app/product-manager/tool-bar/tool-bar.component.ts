import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent {
 
  constructor(private router: Router){}

  navegar(destino: string){
    this.router.navigate([`product/${destino}`])
  }
}
