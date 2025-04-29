import { LightningElement, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import resumeResource from '@salesforce/resourceUrl/Resume';
export default class PortfolioUserDetailsandStats extends LightningElement {

    userRank
    @api userEmail
    @api userNumber
    @api userAddress
    @api userBadges
    @api userPoints
    @api userTrails
    @api RankLogo = 'Double star ranger';

    renderedCallback(){
        if(this.RankLogo){
            let url = `${PortfolioAssets}/PortfolioAssets/Ranks/${this.RankLogo}.png`;
            this.userRank = url;
        }
    }

    downloadPdf(){
        console.log('downloadPDF');
        console.log('resumeResource', resumeResource);
        try{
            const link = document.createElement('a');
         link.href = `${resumeResource}`;
         link.download = 'Aishik_Resume.pdf';
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
        }catch(error){
            console.log('error', JSON.stringify(error));
        }
    }
}