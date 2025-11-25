import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'
import { ThemeService } from './shared/services/theme.service';
import { MatToolbar } from "../../node_modules/@angular/material/toolbar/index";
import { MatMenuItem } from "../../node_modules/@angular/material/menu/index";

@Component({
  selector: 'app-root',
  imports: [RouterModule, MatButtonModule, MatMenuModule, MatToolbar, MatMenuItem],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private themeService:ThemeService) {
  }
  protected title = 'CMSUI';

}
