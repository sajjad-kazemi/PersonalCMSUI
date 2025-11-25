import { Injectable, signal } from '@angular/core'

export interface Theme {
  id: string;
  primary: string;
  displayName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themes: Theme[] =[
    {
      id: 'light-theme',
      primary: '#0077b6',
      displayName: 'light'
    },
    {
      id: 'dark-theme',
      primary: '#00304A',
      displayName: 'dark'
    }
  ];
  currentTheme = signal<Theme>(this.themes[0]);

  getThemes(): Theme[] {
    return this.themes;
  }

  getCurrentTheme(): Theme{
    return this.currentTheme();
  }

  setTheme(id:string){
    let targetTheme = this.themes.find(x => x.id === id);
    if(targetTheme){
      this.currentTheme.set(targetTheme);
    }
  }
}
