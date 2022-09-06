import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardsserviceService } from '../cardsservice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  title:any;
  options = ["todo", "inporgress", "done"]

  constructor(public dialogRef: MatDialogRef<CardComponent>,public  cardService:CardsserviceService) { }

  ngOnInit(): void {
  }
  onCancel(){
    this.dialogRef.close();
  }

  addCard(data:any){
    var cardsData = {"title":data.title, "description":data.description, "option":data.option}
    this.cardService.addCard(cardsData)
    this.onCancel()
  }


}
