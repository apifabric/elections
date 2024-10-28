import { MenuRootItem } from 'ontimize-web-ngx';

import { CampaignEventCardComponent } from './CampaignEvent-card/CampaignEvent-card.component';

import { CandidateCardComponent } from './Candidate-card/Candidate-card.component';

import { DebateCardComponent } from './Debate-card/Debate-card.component';

import { DebateParticipantCardComponent } from './DebateParticipant-card/DebateParticipant-card.component';

import { DistrictCardComponent } from './District-card/District-card.component';

import { ElectionCardComponent } from './Election-card/Election-card.component';

import { ElectionResultCardComponent } from './ElectionResult-card/ElectionResult-card.component';

import { MediaAppearanceCardComponent } from './MediaAppearance-card/MediaAppearance-card.component';

import { PartyCardComponent } from './Party-card/Party-card.component';

import { SponsorshipCardComponent } from './Sponsorship-card/Sponsorship-card.component';

import { VoteCardComponent } from './Vote-card/Vote-card.component';

import { VoterCardComponent } from './Voter-card/Voter-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'CampaignEvent', name: 'CAMPAIGNEVENT', icon: 'view_list', route: '/main/CampaignEvent' }
    
        ,{ id: 'Candidate', name: 'CANDIDATE', icon: 'view_list', route: '/main/Candidate' }
    
        ,{ id: 'Debate', name: 'DEBATE', icon: 'view_list', route: '/main/Debate' }
    
        ,{ id: 'DebateParticipant', name: 'DEBATEPARTICIPANT', icon: 'view_list', route: '/main/DebateParticipant' }
    
        ,{ id: 'District', name: 'DISTRICT', icon: 'view_list', route: '/main/District' }
    
        ,{ id: 'Election', name: 'ELECTION', icon: 'view_list', route: '/main/Election' }
    
        ,{ id: 'ElectionResult', name: 'ELECTIONRESULT', icon: 'view_list', route: '/main/ElectionResult' }
    
        ,{ id: 'MediaAppearance', name: 'MEDIAAPPEARANCE', icon: 'view_list', route: '/main/MediaAppearance' }
    
        ,{ id: 'Party', name: 'PARTY', icon: 'view_list', route: '/main/Party' }
    
        ,{ id: 'Sponsorship', name: 'SPONSORSHIP', icon: 'view_list', route: '/main/Sponsorship' }
    
        ,{ id: 'Vote', name: 'VOTE', icon: 'view_list', route: '/main/Vote' }
    
        ,{ id: 'Voter', name: 'VOTER', icon: 'view_list', route: '/main/Voter' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CampaignEventCardComponent

    ,CandidateCardComponent

    ,DebateCardComponent

    ,DebateParticipantCardComponent

    ,DistrictCardComponent

    ,ElectionCardComponent

    ,ElectionResultCardComponent

    ,MediaAppearanceCardComponent

    ,PartyCardComponent

    ,SponsorshipCardComponent

    ,VoteCardComponent

    ,VoterCardComponent

];