import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
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
  @Output() refreshEventIcons=new EventEmitter<string>()
  constructor(private Notes:NoteService){}
  onDelete(){
    let reqData={
      noteId:this.notesObject.noteId,
    }
    console.log(reqData)
    this.Notes.trashnotes(reqData).subscribe((res:any)=>{
      console.log("Note Trashed Successfully",res)
      this.refreshEventIcons.emit(res)
    })
  }
  onArchiev(){
    let reqData={
      noteId: this.notesObject.noteId
    }
    console.log(reqData)
    this.Notes.ArchievNotes(reqData).subscribe((response:any)=>{
      console.log(response)
      this.refreshEventIcons.emit(response)

    })
  }
  colorArray:Array<any>=[
    {code:'#ffffff',name:'white'},
    {code:'#ff6347',name:'Tomato'},
    {code:'#ff4500',name:'OrangeRed'},
    {code:'#ffff00',name:'yellow'},
    {code:'#adff2f',name:'greenyellow'},
    {code:'#b0c4de',name:'LightSteelBlue'},
    {code:'#eee8aa',name:'PaleGoldenRod'},
    {code:'#d3d3d3',name:'grey'},
  ];
  selectColor(colour:any){
    let reqData={
      colour:colour.name,
      noteId:this.notesObject.noteId
    }
    this.Notes.notesColor(reqData).subscribe((response:any)=>{
      console.log(response);
      this.refreshEventIcons.emit(response)
    })
  }
  refresharchivenotes($event:any){
    console.log("Archive noted"+$event);
    this.onArchiev()
  }
}
