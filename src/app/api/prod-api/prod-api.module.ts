import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationService } from './services/operation-service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    OperationService,
  ],
})
export class ApiModule {}
