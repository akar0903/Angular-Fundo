import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../../Services/Noteservice/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent implements OnInit{
  @Output() refresharchive=new EventEmitter<string>()
  archievList:any
  constructor(private notes:NoteService){}
  ngOnInit(): void {
    this.onSubmit()
    
  }
  onSubmit(){
    this.notes.getNotes().subscribe((response:any)=>{
      this.archievList=response.data
      this.archievList=this.archievList.filter((object:any)=>{
        return object.isArchive==true && object.isTrash==false;
      })
      console.log(this.archievList)
      this.refresharchive.emit(response)
    })
  }  
}
