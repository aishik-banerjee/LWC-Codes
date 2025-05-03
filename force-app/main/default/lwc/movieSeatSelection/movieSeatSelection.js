import { LightningElement } from 'lwc';

export default class MovieSeatSelection extends LightningElement {

 seatsLayout = [];
 selectedCount = 0;
 totalPrice = 0;
 seatPrice = 10;

  connectedCallback() {
    const occupiedSeats = new Set(['1-3', '1-4','1-5','1-6','1-7','2-1','2-2', '2-6', '2-7', '4-3', '4-4', '4-5',
        '4-6', '4-7', '5-3', '5-4', '5-5', '5-6', '6-7', '6-8', '7-1', '7-2', '7-3', '7-4', '7-5', 
        '7-6', '7-7', '7-8', '7-9', '7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '7-16', '7-17', '7-18', '7-19',
        '7-20', '7-21', '7-22', '7-23', '7-24', '7-25', '7-26', '7-27', '7-28', '7-29']);
    const layout = [];

    for (let i = 0; i < 15; i++) {
      const row = [];
      for (let j = 0; j < 30; j++) {
        const key = `${i}-${j}`;
        row.push({
          seatIndex:key,
          class: occupiedSeats.has(key) ? 'seat occupied' : 'seat'
        });
      }
      layout.push({rowIndex:i,rows:row});
    }

    this.seatsLayout = layout;
    console.log('seatsLayout ', JSON.stringify(this.seatsLayout));
  }

  handleSeatClick(event){
    if( event.target.classList.contains('seat') && !event.target.classList.contains('occupied')){
        event.target.classList.toggle('selected');
        this.updateSelectedCount();
    }
  }

  updateSelectedCount(){
    const selectedSeats = this.template.querySelectorAll('.row .seat.selected');
    this.selectedCount = selectedSeats.length;
    this.totalPrice = this.selectedCount * this.seatPrice;
  }
}