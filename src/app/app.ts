import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { Services } from './components/Services/services';
import { User } from './components/user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatToolbarModule, MatIconModule, MatButtonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  http = inject(HttpClient)
  protected readonly title = signal('students-details-pwa');
}
