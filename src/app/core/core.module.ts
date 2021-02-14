import { NgModule, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export const WINDOW = new InjectionToken('window');
export const LOCAL_STORAGE = new InjectionToken('localStorage');

@NgModule({
  imports: [],
  providers: [
    {
      provide: WINDOW,
      useFactory: (document: Document): Window => {
        if (document.defaultView == null) {
          throw new Error('window not found');
        }

        return document.defaultView;
      },
      deps: [DOCUMENT],
    },
    {
      provide: LOCAL_STORAGE,
      useFactory: (window: Window): Storage => window.localStorage,
      deps: [WINDOW],
    },
  ],
})
export class CoreModule {}
