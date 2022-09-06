import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CardComponent } from './card/card.component';
import { CardsserviceService } from './cardsservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dotproduct';
  opened:boolean = false;

  cardsData:any;

  todo:any[] = []
  progress:any[] = []
  completed:any[] = []

  constructor(private dialog: MatDialog,private cardService:CardsserviceService){
    console.log("constructor is calling")
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    console.log("on init is calling")

    this.cardsData = this.cardService.getCards()
    this.todo = this.cardsData[0]

    this.progress = this.cardsData[1]
    this.completed = this.cardsData[2]

    
  }


  addCard(){
    console.log("adding card")
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "400px";
    let dialogRef = this.dialog.open(CardComponent, dialogConfig);
  
    dialogRef.afterClosed().subscribe(result => {
      //pass
    });
  }

  deleteCard(index:any, type:any){
    if(type =="todo"){
      this.todo.splice(index, 1);
    }else if(type =="inprogress"){
      this.progress.splice(index, 1);
    }else{
      this.completed.splice(index, 1);
    }
  }
}
