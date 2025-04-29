import { LightningElement, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import Picture from '@salesforce/resourceUrl/Picture';
export default class PortfolioBanner extends LightningElement {

    userImage = Picture;

    @api linkedinUrl
    @api twitterUrl 
    @api githubUrl 
    @api youtubeUrl 
    @api trailheadUrl 
    @api blogUrl
    @api userName
    @api userDesignation
    @api userLocation

    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`
    blog = `${PortfolioAssets}/PortfolioAssets/Social/blogger.svg`
}