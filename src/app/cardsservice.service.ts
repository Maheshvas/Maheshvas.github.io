import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsserviceService {

  public cardsData:any[] = []



  constructor() {
    let todo:any = []
    let inprogress:any = []
    let completed:any = [] 

    this.cardsData.push(todo)
    this.cardsData.push(inprogress)
    this.cardsData.push(completed)

  }


  addCard(data:any){
    if(data["option"] =="todo"){
      this.cardsData[0].push(data)
    }else if(data["option"] =="inprogress"){
      this.cardsData[1].push(data)
    }else{
      this.cardsData[2].push(data)
    }
  }

  getCards(){
    return this.cardsData
  }
}
