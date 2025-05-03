import { LightningElement, api } from 'lwc';

const CARD_VISIBLE_CLASSES = 'fade slds-show slds-col'
const CARD_HIDDEN_CLASSES = 'fade slds-hide slds-col'

const DOT_VISIBLE_CLASSES = 'dot active'
const DOT_HIDDEN_CLASSES = 'dot'

const DEFAULT_SLIDER_TIMER = 3000
const DEFAULT_SLIDER_WIDTH = 700
export default class MovieCarousel extends LightningElement {

    slides=[];
    slideIndex=1;

    @api 
    get slidesData(){
        return this.slides;
    }

    set slidesData(data){
        this.slides=data.map((item, index)=>{
            return (index === 0 || index === 1 || index === 2 ) ? {
                ...item,
                 slideIndex:index + 1,
                 cardClass:CARD_VISIBLE_CLASSES,
                 dotClass:DOT_VISIBLE_CLASSES
            }:{
                ...item,
                slideIndex:index + 1,
                cardClass:CARD_HIDDEN_CLASSES,
                dotClass:DOT_HIDDEN_CLASSES
            }
        })

    }

    connectedCallback(){
        this.timer=window.setInterval(()=>{
            this.calculateSlides(this.slideIndex+1);
        },3000)
    }

    disconnectedCallback(){
        window.clearInterval(this.timer);
    }

    

    handleClick(event){
        this.dispatchEvent(new CustomEvent('selectmovie', {
            detail:{
                movieName:event.target.dataset.movie
            }
        }));
    }

    forwardSlide(){
        let slideIndex  = this.slideIndex + 1;
        this.calculateSlides(slideIndex);
    }

    backSlide(){
        let slideIndex  = this.slideIndex - 1;
        this.calculateSlides(slideIndex);
    }

    currentSlide(event){
        let slideIndex  = Number(event.target.dataset.id)
        this.calculateSlides(slideIndex) 
    }

    calculateSlides(id){
        if(id > this.slides.length){
            this.slideIndex = 1;
        }else if(id < 1){
            this.slideIndex = this.slides.length;
        }else{
            this.slideIndex = id;
        }

        this.slides = this.slides.map((item)=>{
            return ((item.slideIndex === this.slideIndex) || 
                    (item.slideIndex === this.slideIndex + 1) || 
                    (item.slideIndex === this.slideIndex + 2))?{
                        ...item,
                         cardClass:CARD_VISIBLE_CLASSES,
                         dotClass:DOT_VISIBLE_CLASSES
            }:{
                ...item,
                 cardClass:CARD_HIDDEN_CLASSES,
                 dotClass:DOT_HIDDEN_CLASSES
            }
        })
        }
}