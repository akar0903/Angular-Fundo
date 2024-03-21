import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private httpClient:HttpClient ) { }
  postService(url:string,reqdata:any,token: boolean=false,httpOptions:any={}){
    return this.httpClient.post(url,reqdata,token&&httpOptions);
  }
  postServiceReset(url:string,reqdata:any,token: boolean=true,httpOptions:any={}){
    return this.httpClient.post(url,reqdata,token&&httpOptions);
  }
  getService(url:string,token:boolean=true,httpOptions:any={}){
    return this.httpClient.get(url,token&&httpOptions);
  }
  putService(url:string,reqdata:any,token: boolean=true,httpOptions:any={}){
    return this.httpClient.put(url,reqdata,token&&httpOptions);
  }
  putMethod(url: string, reqData: any, token: boolean=true, httpOptions: any={})
  { return this.httpClient.put( url,reqData, token && httpOptions)
    
  }
}
