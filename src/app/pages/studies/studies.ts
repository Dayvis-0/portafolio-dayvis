import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cycle } from '../../models/academic-registry';
import { AcademicRegistryService } from '../../services/academic.registry.service';
import { Certification } from '../../models/certification';
import { CertificationsService } from '../../services/certifications.service';
import { SkillProgress } from '../../models/skill-progress';
import { SkillProgressService } from '../../services/skill.progress.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-studies',
  imports: [CommonModule, FormsModule],
  templateUrl: './studies.html',
  styleUrl: './studies.css'
})
export class Studies {
  academicRegistry: Cycle[] = [];
  certifications: Certification[] = [];
  skillsPorgress: SkillProgress[] =  [];

  constructor(
    private academicRegistryService: AcademicRegistryService,
    private certificationService: CertificationsService,
    private skillProgressService: SkillProgressService,
  ) {}

  ngOnInit() {
    this.academicRegistry = this.academicRegistryService.getAcademicRegistry();
    this.certifications = this.certificationService.getCertifications();
    this.skillsPorgress = this.skillProgressService.getSkillsProgress();
  }
}
