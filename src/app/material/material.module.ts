import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatTabsModule,
    MatSidenavModule, MatListModule, MatTooltipModule, MatMenuModule,
    MatFormFieldModule, MatSelectModule, MatInputModule, MatBadgeModule,
    MatChipsModule, MatSnackBarModule, MatProgressBarModule
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatTabsModule,
    MatSidenavModule, MatListModule, MatTooltipModule, MatMenuModule,
    MatFormFieldModule, MatSelectModule, MatInputModule, MatBadgeModule,
    MatChipsModule, MatSnackBarModule, MatProgressBarModule
  ],
  declarations: []
})
export class MaterialModule { }
