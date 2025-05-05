import JigsawCompanyId from '@salesforce/schema/Account.JigsawCompanyId';
import { LightningElement } from 'lwc';

export default class ArrayMethodsDemo extends LightningElement {

    fullList=[];
    listingArray=[];
    originalArray=[];
    nextId = 2;
    totalAge;
    showTotal=false;

    connectedCallback(){

        this.makeCallout();
    }

    handleSort() {
        const sortedList = [...this.fullList].sort((a,b) => a.age - b.age);
        this.fullList = sortedList;
        console.log('sort ', JSON.stringify(this.fullList));
        this.showTotal = false;
    }

    handleAddRow(){
        this.showTotal = false;
        this.makeCallout();
    }

    handleFilter(){
        this.showTotal = false;
        this.fullList = this.fullList.filter(item => item.age > 40);
    }

    handleReduce(){
        this.totalAge = this.fullList.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.age;
        }, 0)
        this.showTotal = true;
    }

    handleMap(){
        this.showTotal = false;
        this.fullList = this.fullList.map(item => {
            return {
                ...item,
                age:item.age + 1,
            }
        })
    }

    makeCallout(){

        try{
        fetch(`https://randomuser.me/api`)
         .then(response => response.json())
         .then(data => {
           console.log('@@@ data'+JSON.stringify(data));
            if(data){
               
                this.listingArray = data.results.map((item)=>{
                     return {
                         firstName: item.name.first,
                         lastName: item.name.last,
                         gender: item.name.gender,
                         age: item.dob.age,
                         email:item.email,
                         image:item.thumbnail,
                         username:item.login.username,
                         id:item.id.value,
                         phone:item.phone,
                         selected:false,
                     }
                });
                this.fullList = [...this.fullList , ...this.listingArray];
                this.originalArray = [...this.fullList];
                console.log('this.fullList ', JSON.stringify(this.fullList));
            }else{
                console.log("data not returned");
            }
          });
      
       } catch(error){
           console.log("error occured due to"+JSON.stringify(error));
        }
    
   }

   get allSelected(){
     return this.fullList.length > 0 && this.fullList.every(item => item.selected === true);
   }

   handleRowCheckboxChange(event){

    const userid = event.target.dataset.id;
    const selected = event.target.checked;

    this.fullList = this.fullList.map((item) => {
        if(item.id === userid){
            item.selected = selected;
        }
        return item;
    })
   }

   handleSelectAll(event){
    this.fullList = this.fullList.map((item)=>{
        return {...item, selected:event.target.checked};
    })
   }

//    handleAddRow(){
//     const newUser = {
//         id: String(this.nextId++),
//         firstName: '',
//         lastName: '',
//         age: 0,
//         phone: '',
//         email: '',
//         username: 'newuser' + this.nextId,
//         selected: false
//     };
//     this.fullList = [...this.fullList, newUser];
//    }

   handleDeleteRow(){
    this.showTotal = false;
    this.fullList = this.fullList.filter(item => !item.selected);
   }

}