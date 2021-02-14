import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {CommonResponse, Operation, SavedOperation} from '@api/models';
import { Observable } from 'rxjs';
import { operationsRouts } from '@api/endpoints';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  constructor(private http: HttpClient) {}

  createOperation(operation: Operation): Observable<Operation> {
    return this.http.post<Operation>(operationsRouts.createOperation(), operation);
  }

  deleteOperation(id: number): Observable<any> {
    return this.http.delete(operationsRouts.deleteOperation(id));
  }

  getOperation(id: number): Observable<SavedOperation> {
    return this.http.get<SavedOperation>(operationsRouts.getOperation(id));
  }

  getFilters(page = 0, size = 100): Observable<CommonResponse<SavedOperation[]>> {
    const params = new HttpParams().append('page', page.toString()).append('size', size.toString());

    return this.http.get<CommonResponse<SavedOperation[]>>(operationsRouts.getOperations(), { params });
  }

  updateOperation(operation: SavedOperation & { id: number }): Observable<SavedOperation> {
    return this.http.patch<SavedOperation>(operationsRouts.updateOperation(operation.id), operation);
  }
}
