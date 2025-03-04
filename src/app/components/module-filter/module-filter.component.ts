import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ModuleService } from '../../services/module.service';
import { Module } from '../../interfaces/module';  
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-module-filter',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  template: `
    <div class="module-filter">
      <mat-chip-listbox class="mat-mdc-chip-set-stacked" aria-label="Select Modules">
        <mat-chip *ngFor="let module of modules"
                  [ngClass]="{'selected': selectedModules.includes(module)}"
                  (click)="toggleSelection(module)">
          {{ module.name }}
        </mat-chip>
      </mat-chip-listbox>
    </div>
  `,
  styleUrls: ['./module-filter.component.css']
})
export class ModuleFilterComponent implements OnInit {
  @Input() selectedModules: Module[] = [];
  @Output() modulesUpdated = new EventEmitter<Module[]>();
  modules: Module[] = [];

  constructor(private moduleService: ModuleService) { }

  ngOnInit(): void {
    this.modules = this.moduleService.getAllModules();
    this.selectedModules = [...this.modules];
    this.modulesUpdated.emit(this.selectedModules);
  }

  toggleSelection(module: Module): void {
    const index = this.selectedModules.indexOf(module);
    if (index > -1) {
      this.selectedModules.splice(index, 1);
    } else {
      this.selectedModules.push(module);
    }
    this.modulesUpdated.emit(this.selectedModules);
  }
}