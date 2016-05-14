export class FlikerItem {
    value:number;
    changeDirection:number;
    changeDirectionImage:string;
    constructor(value:number){
       this.value = value;
       this.changeDirection = 0;
       this.changeDirectionImage = '../app/pricing/market/down.png';
     }
setFlicketValue(newValue: number)
{
  this.updateChangeValue(this.value,newValue);
  this.value = newValue;
}

  updateChangeValue(oldValue: number, newValue: number)
  {
    if(oldValue<newValue)
    {
        this.changeDirection = 0;
        this.changeDirectionImage = '../app/pricing/market/down.png';
    }

    else if (oldValue>newValue)
    {
        this.changeDirection = 1;
          this.changeDirectionImage = '../app/pricing/market/up.png';
    }

  }

}
