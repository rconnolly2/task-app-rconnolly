import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-class-dialog',
  template: `
    <div>
      <h2 mat-dialog-title>Add Class</h2>
      <div class="dialog-content" mat-dialog-content>
        <mat-form-field appearance="fill">
          <mat-label>Module ID</mat-label>
          <input matInput [(ngModel)]="moduleId" type="number" />
        </mat-form-field>
      </div>
      <div class="btn-dialog" mat-dialog-actions>
        <button mat-button (click)="onCancel()">Cancel</button>
        <button mat-button (click)="onSave()">Save</button>
      </div>
    </div>
  `,
  styleUrls: ['./add-class-dialog.component.css'],
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class AddClassDialogComponent {
  moduleId: number | undefined;

  constructor(
    public dialogRef: MatDialogRef<AddClassDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { moduleId?: number }
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.moduleId != null) {
      this.dialogRef.close(this.moduleId);
    }
  }
}