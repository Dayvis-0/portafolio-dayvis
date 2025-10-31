import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
import { DatasService } from '../../services/datas.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
    datos: any;
  
    constructor(private dataService: DatasService) {}
  
    ngOnInit() {
      this.datos = this.dataService.getData();
      console.log(this.datos);
    }
}
