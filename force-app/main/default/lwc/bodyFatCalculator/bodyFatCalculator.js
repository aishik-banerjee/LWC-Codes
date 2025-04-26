import { LightningElement } from 'lwc';

export default class BodyFatCalculator extends LightningElement {

    result='';
    height = '';
    weight = '';
    gender = '';
    age = '';
    bmiValue = '';
    fitnessCategory = '';
    fitnessRange = '';
    resultAct = '';


    handleChange(event) {
        const{name,value} = event.target;
        this[name] = value;
        console.log("height", this.height);
        console.log("weight", this.weight);
        console.log("gender", this.gender);
        console.log("age", this.age);
    }

    handleSubmit(event){
        event.preventDefault();
        this.bmiValue = this.calculateBmi();
        console.log('bmi ',this.bmiValue);
        if(this.gender == 'male'){
            this.resultAct = (1.20 * this.bmiValue) + (0.23 * this.age) - 16.2;
            this.result = Number(this.resultAct.toFixed(2));
        }
        else {
            this.resultAct = (1.20 * this.bmiValue) + (0.23 * this.age) - 5.4;
            this.result = Number(this.resultAct.toFixed(2));
        }

        let resultRounded = Math.round(this.result);
        if(resultRounded >= 2 && resultRounded <= 5){
            this.fitnessCategory = 'Essential Fat';
            this.fitnessRange = '2-5%';
        }else if(resultRounded >= 6 && resultRounded <= 13){
            this.fitnessCategory = 'Athletes';
            this.fitnessRange = '6-13%';
        }
        else if(resultRounded >= 14 && resultRounded <= 17){
            this.fitnessCategory = 'Fitness';
            this.fitnessRange = '14-17%';
        }else if(resultRounded >= 18 && resultRounded <= 24){
            this.fitnessCategory = 'Average';
            this.fitnessRange = '18-24%';
        }else if(resultRounded >= 25){
            this.fitnessCategory = 'Obese';
            this.fitnessRange = '25% or higher';
        }else{
            console.log('Wrong Data');
        }
    }

    calculateBmi(){
        let height = Number(this.height)/100;
        let bmi = Number(this.weight) / (height * height);
        return Number(bmi.toFixed(2));
    }

    recalculate(){
        this.height = ''
        this.weight = ''
        this.gender = ''
        this.age = ''
        this.bmiValue = ''
        this.result = ''
        this.fitnessCategory = ''
        this.fitnessRange = ''
    }
}