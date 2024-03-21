import { Component,Input, OnInit } from '@angular/core';
import { NoteService } from '../../Services/Noteservice/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent implements OnInit{
  
  ngOnInit(): void {
   
  }
  @Input() notesObject:any;
  constructor(private Notes:NoteService){}
  onArchiev(){
    let reqData={
      noteId: this.notesObject.noteId
    }
    console.log(reqData)
    this.Notes.ArchievNotes(reqData).subscribe((response:any)=>{
      console.log(response)
      
    })
  }
  

}
