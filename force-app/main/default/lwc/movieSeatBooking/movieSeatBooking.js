import { LightningElement } from 'lwc';
import RAID from '@salesforce/resourceUrl/raid';
import BHOOL from '@salesforce/resourceUrl/bhool';
import MISSION from '@salesforce/resourceUrl/mission';
import JAAT from '@salesforce/resourceUrl/jaat';
import KESARI from '@salesforce/resourceUrl/kesari';
import SIKANDAR from '@salesforce/resourceUrl/sikandar';
export default class MovieSeatBooking extends LightningElement {

    raid= RAID;
    bhool=BHOOL;
    mission=MISSION;
    jaat=JAAT;
    kesari=KESARI;
    sikandar=SIKANDAR;
    movieSelected=false;

    slides= [
        {
            image:this.raid,
            heading:'Raid 2',
            description:'You can add description of first slide here'
        },
        {
            image:this.bhool,
            heading:'Bhool Chuj Maaf',
            description:'You can add description of second slide here'
        },
        {
            image:this.mission,
            heading:'Mission Impossible Final Reckoning',
            description:'You can add description of third slide here'
        },
        {
            image:this.jaat,
            heading:'Jaat',
            description:'You can add description of third slide here'
        },
        {
            image:this.kesari,
            heading:'Kesari 2',
            description:'You can add description of third slide here'
        },
        {
            image:this.sikandar,
            heading:'Sikandar',
            description:'You can add description of third slide here'
        }
    ]

    handleSelectMovie(){
        this.movieSelected=true;
    }
}