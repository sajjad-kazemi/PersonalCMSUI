import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatFormFieldModule,MatInputModule,MatSelectModule,MatRadioModule,MatToolbarModule,MatIconModule,MatIconButton,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  currentTheme: string = '';
  constructor() {
  }
  onThemeChange(e:any){
    
  }
}
