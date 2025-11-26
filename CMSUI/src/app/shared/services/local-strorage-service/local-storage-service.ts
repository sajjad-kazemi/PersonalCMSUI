import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService{
    getItem(key:string){
        let item = localStorage.getItem(key)
        if(item){
            return JSON.parse(item);
        }
        return null;
    }

    setItem(key:string,value:any):void{
        let stringifiedValue = JSON.stringify(value);
        localStorage.setItem(key,stringifiedValue);
    }

    length(){
        return localStorage.length;
    }
}