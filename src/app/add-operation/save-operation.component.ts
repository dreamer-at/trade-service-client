import {Component, OnInit} from '@angular/core';
import {Operation} from '@api/models/operation';
import {OperationService} from '@api/prod-api/services/operation-service';
import {CcyPairType, DirectionType, PayCcyType, PremiumCcyType, PremiumType, ProductType, StrategyType, StyleType} from '@api/models/types';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-operation',
  templateUrl: './save-operation.component.html',
  styleUrls: ['./save-operation.component.scss']
})
export class SaveOperationComponent implements OnInit {
  operations: Operation;
  submitted = false;

  constructor(private operationService: OperationService) {
  }


  ngOnInit(): void {
  }

  saveTOperation(): void {
    this.operationService.createOperation(this.operations)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newOperation(): void {
    this.submitted = false;
  }

}
