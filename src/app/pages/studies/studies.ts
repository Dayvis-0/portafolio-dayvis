import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cycle } from '../../models/academic-registry';
import { AcademicRegistryService } from '../../services/academic.registry.service';
import { Certification } from '../../models/certification';
import { CertificationsService } from '../../services/certifications.service';

@Component({
  selector: 'app-studies',
  imports: [CommonModule, FormsModule],
  templateUrl: './studies.html',
  styleUrl: './studies.css'
})
export class Studies {
  academicRegistry: Cycle[] = [];
  certifications: Certification[] = [];

  constructor(
    private academicRegistryService: AcademicRegistryService,
    private certificationService: CertificationsService
  ) {}

  ngOnInit() {
    this.academicRegistry = this.academicRegistryService.getAcademicRegistry();
    this.certifications = this.certificationService.getCertifications();
  }
}
