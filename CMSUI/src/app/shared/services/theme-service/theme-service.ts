import { Injectable, signal } from '@angular/core';
import { LocalStorageService } from '../local-strorage-service/local-storage-service';
import { Theme, Themes } from '../../types/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentThemeId = signal<number>(1);

  constructor(private localStorageService: LocalStorageService){
    let localTheme = this.localStorageService.getItem('theme') as Theme
    if(localTheme) {
      this.currentThemeId.set(localTheme.id);
    } 
    else {
      this.currentThemeId.set(1);
    }
  }
  
  getCurrentTheme(){
    return Themes.find(x => x.id == this.currentThemeId())
  }
}
