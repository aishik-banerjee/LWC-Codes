import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {

height = '';
weight = '';
bmiValue = ''
result = ''

handleChange(event) {
    const{name,value} = event.target;
    this[name] = value;
    console.log(this.height);
    console.log(this.weight);
}

submitHandler(event) {
    event.preventDefault();
    console.log("height", this.height)
    console.log("weight", this.weight)
    this.calculate();
}

calculate(){
    //BMI = weight in KG / (height in m * height in m)
    let height = Number(this.height)/100;
    let bmi = Number(this.weight) /(height*height);
    
    this.bmiValue = Number(bmi.toFixed(2));

    if(this.bmiValue <18.5){
      this.result = "Underweight"
    } else if(this.bmiValue >=18.5 && this.bmiValue <25){
      this.result = "Healthy"
    } else if(this.bmiValue >=25 && this.bmiValue <30){
      this.result = "Overweight"
    } else {
      this.result = "Obese"
    }

    console.log("BMI Value is : ", this.bmiValue)
    console.log("Result is : ", this.result)
  }

  recalculate(){
    this.height = ''
    this.weight = ''
    this.bmiValue = ''
    this.result = ''
  }

}