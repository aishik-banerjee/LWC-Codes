import { LightningElement, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import PlatformDev from '@salesforce/resourceUrl/PlatformDev';
import AIAssociate from '@salesforce/resourceUrl/AIAssociate';
import AISpecialist from '@salesforce/resourceUrl/AISpecialist';
import Administrator from '@salesforce/resourceUrl/Administrator';
import Associate from '@salesforce/resourceUrl/Associate';
import AppBuilder from '@salesforce/resourceUrl/AppBuilder';

const columns = [
    { label: 'Education', fieldName: 'education', type: 'text' },
    { label: 'Institution Name', fieldName: 'institution', type: 'text' },
    { label: 'Grade', fieldName: 'grade', type: 'text' },
    { label: 'Passing Year', fieldName: 'passingYear', type: 'text' },
];

const data = [
    {
        Id: 'a',
        education: 'B.Tech- Mechanical Engineering',
        institution: 'SRM Institute of Science and Technology, Kattankulathur',
        grade: '90.47%',
        passingYear: '2020',
    },
    {
        Id: 'b',
        education: 'XII, ISC Board, Science',
        institution: 'National Gems Higher Secondary School, Kolkata',
        grade: '93.75%',
        passingYear: '2016',
    },
    {
        Id: 'c',
        education: 'X, ICSE Board, Science',
        institution: 'National Gems Higher Secondary School, Kolkata',
        grade: '95.60%',
        passingYear: '2014',
    },
];


export default class PortfolioTabsWrapper extends LightningElement {

    bmiCalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`;

    associate = Associate;
    administrator = Administrator;
    pd1 = PlatformDev;
    aiSpecialist = AISpecialist;
    aiAssociate = AIAssociate;
    appBuilder = AppBuilder

    @api techSkills;
    @api toolsandSoftwareSkills;
    @api methodologies;
    @api softSkills;

    technicalSkillsArray
    toolsandSoftwareSkillsArray
    methodologiesArray
    softSkillsArray

    data = data;
    columns = columns;

    certs = [
        {
            name: 'Salesforce Certified Platform Developer 1',
            image: this.pd1,
            link: 'https://trailhead.salesforce.com/en/credentials/verification/',
        },
        {
            name: 'Salesforce Certified AI Specialist',
            image: this.aiSpecialist,
            link: 'https://trailhead.salesforce.com/en/credentials/verification/',
        },
        {
            name: 'Salesforce Certified AI Associate',
            image: this.aiAssociate,
            link: 'https://trailhead.salesforce.com/en/credentials/verification/',
        },
        {
            name: 'Salesforce Certified Associate',
            image: this.associate,
            link: 'https://trailhead.salesforce.com/en/credentials/verification/',
        },
        {
            name: 'Salesforce Certified Administrator',
            image: this.administrator,
            link: 'https://trailhead.salesforce.com/en/credentials/verification/',
        },
        {
            name: 'Salesforce Certified Platform App Builder',
            image: this.appBuilder,
            link: 'https://trailhead.salesforce.com/en/credentials/verification/',
        },
    ]
    

    projects=[
        {
            name: 'BMI Calculator ',
            image: this.bmiCalculator,
            link:"https://aishik-projects-dev-ed.develop.my.site.com/bmi-calculator"}
    ]

    connectedCallback(){

        this.technicalSkillsArray = this.techSkills.split(',');
        this.toolsandSoftwareSkillsArray = this.toolsandSoftwareSkills.split(',');
        this.methodologiesArray = this.methodologies.split(',');
        this.softSkillsArray = this.softSkills.split(',');
    }
}