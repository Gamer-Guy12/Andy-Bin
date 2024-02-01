import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarModule } from './topbar/topbar.module';
import { UtilModule } from './util/util.module';
import { AuthModule } from './auth/auth.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'andybin';
}
