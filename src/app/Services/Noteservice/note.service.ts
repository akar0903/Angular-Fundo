import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;
  constructor(private httpService: HttpService) { this.token = localStorage.getItem('token')}
  addNotes(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postServiceReset('https://localhost:44355/api/Note/api/Note/note-creation',reqData,true,header);
  }
  getNotes(){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:44355/api/Note/all',true,header);
  }
  updateNotes(reqData:any,noteId:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json', 
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:44355/api/Note/update?noteId='+noteId,reqData,true,header);
  }
  ArchievNotes(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+this.token
      
      })
    
    }
    return this.httpService.putMethod('https://localhost:44355/api/Note/archieve?notesId='+reqData.noteId,{},true, header);
  }
  notesColor(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+this.token
      }) 
    }
    return this.httpService.putService("https://localhost:44355/api/Note/addColor?colour="+reqData.colour+"&notesId="+reqData.noteId,{},true,header);
  }
  trashnotes(reqData:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:44355/api/Note/Trash?notesId='+reqData.noteId,{},true,header)
  }
}


