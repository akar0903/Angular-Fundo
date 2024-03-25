import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteService } from '../../Services/Noteservice/note.service';
@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrl: './updatenote.component.scss'
})
export class UpdatenoteComponent implements OnInit{
  title:any;
  description:any;
  id:any
  colour:any 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogbox:MatDialogRef<UpdatenoteComponent>,
    private notes:NoteService){
      console.log(data);
      this.title=data.title,
      this.description=data.description,
      this.id=data.noteId
      this.colour=data.colour

    }
    ngOnInit(): void {   
    }
    closeDialog(){
      let reqdata={
        title:this.title,
        description:this.description,
        addColor:this.colour
      }
      this.notes.updateNotes(reqdata,this.id).subscribe((response:any)=>{
        console.log(response);
        this.dialogbox.close();
      });
    }
}
