import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoadingComponent } from './shared/components/loading.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
