export interface Theme {
  id:number;
  displayName:string;
  className: string;
}

export let Themes: Theme[] = [
  {
    id : 1,
    displayName: 'light',
    className: 'light-theme'
  },
  {
    id : 2,
    displayName: 'dark',
    className: 'dark-theme'
  }
]