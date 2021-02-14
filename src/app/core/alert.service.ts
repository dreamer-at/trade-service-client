import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WINDOW } from './core.module';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alertId = 0;

  events = new BehaviorSubject<string | null>(null);

  constructor(@Inject(WINDOW) private window: Window) {}

  showAlert(text: string): void {
    this.events.next(text);

    this.timeoutHide(1000 * 5);
  }

  eventStreams(): Observable<string | null> {
    return this.events.asObservable();
  }

  private timeoutHide(time: number) {
    this.window.setTimeout(() => {
      this.events.next(null);
    }, time);
  }
}
