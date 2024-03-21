import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../Services/Noteservice/note.service';

@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrl: './getnote.component.scss'
})
export class GetnoteComponent implements OnInit{
  notesArray:any
  constructor(private notes:NoteService){}
  ngOnInit(): void {
      this.NoteSubmit()
  }
  NoteSubmit(){
    this.notes.getNotes().subscribe((response:any)=>{
      console.log(response);
      this.notesArray=response.data;
      console.log("Stored to array variable");
      console.log(this.notesArray);
    })
  }

}
