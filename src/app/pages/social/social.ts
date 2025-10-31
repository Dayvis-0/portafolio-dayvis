import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatasService } from '../../services/datas.service';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './social.html',
  styleUrl: './social.css'
})
export class Social {
  datos: any;

  constructor(private dataService: DatasService) {}

  ngOnInit() {
    this.datos = this.dataService.getData();
    console.log(this.datos);
  }

  sumLikes() {
    this.datos.like += 1;
  }
}