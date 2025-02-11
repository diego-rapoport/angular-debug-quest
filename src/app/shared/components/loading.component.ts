import { AsyncPipe } from '@angular/common';
import { Component, effect } from '@angular/core';
import { loadingService } from '../interceptors/loading.interceptor';

@Component({
  selector: 'app-loading',
  template: `
    @if(loading$ | async) {
    <div class="flex justify-center items-center h-screen absolute w-full bg-gray-500/40">
      <div
        class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
      ></div>
    </div>
    }
  `,
  standalone: true,
  imports: [
    AsyncPipe,
  ],
})
export class LoadingComponent {
  loading$ = loadingService.loading$

  constructor() {
    effect(() => {
      this.loading$.subscribe((res) => {
        console.log(res);
      })

    })
  }
}
