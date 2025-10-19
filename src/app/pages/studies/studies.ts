import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cycle } from '../models/academic-registry';
import { AcademicRegistryService } from '../services/academic.registry.service';

@Component({
  selector: 'app-studies',
  imports: [CommonModule, FormsModule],
  templateUrl: './studies.html',
  styleUrl: './studies.css'
})
export class Studies {
  academicRegistry: Cycle[] = [];

  constructor(private academicRegistryService: AcademicRegistryService) {}

  ngOnInit() {
    this.academicRegistry = this.academicRegistryService.getAcademicRegistry();
  }
}
