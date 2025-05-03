import { LightningElement } from 'lwc';

export default class InfiniteScrolling extends LightningElement {

    limit = 5;
    page = 1;
    listingArray=[];
    fullList = [];
    searchText='';

    connectedCallback() {
        window.addEventListener('scroll', ()=>{
            this.handleScroll();
        });
        this.makeCallout();
    }

    handleChange(event){
        this.searchText = event.target.value;
        console.log(this.searchText);
        this.listingArray = this.fullList.filter(item=>{
            return item.title.toLowerCase().includes(this.searchText.toLowerCase()) 
            || item.body.toLowerCase().includes(this.searchText.toLowerCase());
        })
    }

    handleScroll(){
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            this.page = this.page + 1;
            this.makeCallout();
        }
    }

    makeCallout(){
        const endpoint = `https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`;

        try{
        fetch(endpoint)
         .then(response => response.json())
         .then(data => {
           console.log('@@@ data'+JSON.stringify(data));
            if(data){
                this.fullList = [...this.fullList, ...data];
                this.listingArray = [...this.fullList];
            }else{
                console.log("data not returned");
            }
          });
      
       } catch(error){
           console.log("error occured due to"+JSON.stringify(error));
        }
    
   }
}