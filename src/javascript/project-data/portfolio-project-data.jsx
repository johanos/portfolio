// ********************
//	Johan's Portfolio
//	Copyright © 2022
// ********************

import Ajv from 'ajv';
import { shape, string, arrayOf } from 'prop-types';
import ProjectSchema from './project-schema.json';
import {
    SelfCalibration,
    DollhouseImage,
    MP3JS,
    CVRPS,
    Cultour,
    GalleryWall,
    Helio,
    WayfairVIR,
    TangoVIR,
    PortfolioSite,
    HoloCaptionsImage,
    VentanaConcept,
    PositionalTracking,
    NeptuneLogo,
    MicroPanFlute,
    LazerHarpHardware,
    Phagebook,
    ProctorU,
    CPUDiagram,
    ModelTargetGenerator,
    CrowdflowUI
} from './images';
import {
    ACVReport,
    DollhousePaper,
    CVReport,
    CVPoster,
    MSThesis
} from './documents';
import { dollhouseVideo } from './videos';

export const LinkTypeEnum = Object.freeze({
    DOCUMENT: 'document',
    VIDEO: 'video',
    WEBSITE: 'website'
});

export const linkType = shape({
    name: string.isRequired,
    link: string.isRequired,
    type: string.isRequired,
    description: string
});

export const projectType = shape({
    name: string.isRequired,
    description: string.isRequired,
    thumbnail: string,
    relatedLinks: arrayOf(linkType)
});

const projectData = Object.freeze([
    {
        name: 'Vuforia Model Target Generator and Area Target Generator',
        description:
            'As part of my tenure at PTC I worked on the Vuforia Model Target ' +
            'Generator as well as the Area Target Generator.' +
            '\n\nMy contributions were:\n\n' +
            '1. Create an on demand rendering solution for our 3D viewer\n' +
            '2. Help the technical debt of the projects to allow for extensibility\n' +
            '3. Add workspace tools such as Eslint and Prettier with good rules to enforce code style\n' +
            '4. Reworked Guide View Image Capture pipeline of the 10.11 MTG using ThreeJS render target\n' +
            '5. Lead developer on the User Volume feature released on version 10.9 of the MTG',
        thumbnail: ModelTargetGenerator,
        relatedLinks: [
            {
                name: 'User Volume Feature Preview',
                link: 'https://www.linkedin.com/posts/patrickscheper97_ptc-vuforia-ar-activity-6963541888586891264-Yzw9',
                description: 'Feature I worked on',
                type: LinkTypeEnum.WEBSITE
            },
            {
                name: 'Vuforia Tools Download Page',
                link: 'https://developer.vuforia.com/downloads/tool',
                description: "Download page for Vuforia's CV Tools",
                type: LinkTypeEnum.WEBSITE
            }
        ]
    },
    {
        name: 'Princeton M.S Thesis: Crowdflow Pipeline',
        description:
            'For my Thesis Project at Princeton University I ' +
            'developed a method to collect high quality crowd sourced ' +
            'annotations for optical flow datasets\n' +
            'I had to create backend systems, front end ui, ' +
            'and do data analysis to come up with a pipeline to get ' +
            'results that would have a high precision at the expense of recall',
        thumbnail: CrowdflowUI,
        relatedLinks: [
            {
                name: 'Masters Thesis',
                link: MSThesis,
                description: 'Presentation slides I used to present the work',
                type: LinkTypeEnum.WEBSITE
            },
            {
                name: 'Presentation Slides',
                link: 'https://docs.google.com/presentation/d/16zHCS_mShR6Tdw762EU2h991i0fGXeItDowGrKRcXoA/edit?usp=sharing',
                description: 'Presentation slides I used to present the work',
                type: LinkTypeEnum.WEBSITE
            }
        ]
    },
    {
        name: 'Exploring the Camera Self Calibration Problem',
        description:
            'For COS 529 (Advanced Computer Vision) I ' +
            'investigated the Camera Self Calibration problem ' +
            'and created an end to end pipeline for using ' +
            'ground truth optical flow from datasets in order' +
            'to calibrate a camera without a prior calibration object, ' +
            'by creating a projective reconstruction of a scene one ' +
            'is able to solve for the Dual Absolute Quadric, an entity ' +
            'invariant under any metric transformation',
        thumbnail: SelfCalibration,
        relatedLinks: [
            {
                name: 'Report',
                link: ACVReport,
                type: LinkTypeEnum.DOCUMENT,
                description: ''
            },
            {
                name: 'Github Page',
                link: 'https://github.com/johanos/pollefeys-self-calibration-and-metric-reconstruction',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    },
    {
        name: 'Dollhouse Projection Mapping System',
        description:
            'I was the lead engineer for a project whose aim ' +
            'was to project patterns onto 3D printed pieces of furniture, ' +
            'this was done via a prespective-n-point problem using openCV ' +
            'which then fed data to Unity in order to project ' +
            'patterns onto these items',
        thumbnail: DollhouseImage,
        relatedLinks: [
            {
                name: 'Live Demo',
                link: dollhouseVideo,
                type: LinkTypeEnum.VIDEO,
                description: ''
            },
            {
                name: 'Paper',
                link: DollhousePaper,
                type: LinkTypeEnum.DOCUMENT,
                description: ''
            }
        ]
    },
    {
        name: 'MP3js',
        description:
            'For my final project in COS 426 (Graphics) at Princeton, ' +
            'my team and I created a musical runner game with a vaporware ' +
            'inspired theme. ' +
            '(Easter eggs if you press v and if you press s+h at the same time!)',
        thumbnail: MP3JS,
        relatedLinks: [
            {
                name: 'Live Demo',
                link: 'https://mayoyoyo.github.io/mp3js/',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    },
    {
        name:
            'Investigating the use of Synthetic Data for training machine ' +
            'learning models for classification tasks on rock paper scissors datasets',

        description:
            'For COS 429 (Computer Vision) at Princeton, ' +
            'another student and I investigated the use of synthetic ' +
            'CGI training as pertaining to a Support Vector Machine ' +
            'classifier with different feature extration methods such ' +
            'as Bag of Visual Words, Histogram of Oriented Gradients, ' +
            'and Principal Component Analysis.',
        thumbnail: CVRPS,
        relatedLinks: [
            {
                name: 'Report',
                link: CVReport,
                type: LinkTypeEnum.DOCUMENT,
                description: ''
            },
            {
                name: 'Poster',
                link: CVPoster,
                type: LinkTypeEnum.DOCUMENT,
                description: ''
            }
        ]
    },
    {
        name: 'Hackathon Winner: Cultour',
        description:
            'I was the lead developer for this Hackathon project at the Reality, ' +
            'Virtually Hackathon at the MIT Media Lab, we wanted to create a multi ' +
            'user teaching tool to allow children connect form across the globe. ' +
            'By the end of the weekend we achieved just that and create an ' +
            'experience that people could enjoy on any platform that supports webVR. ' +
            "My team's weekend peaked when we got the Grand Prize for WebVR",
        thumbnail: Cultour,
        relatedLinks: [
            {
                name: 'Project Video',
                link: 'https://www.youtube.com/watch?v=kYz9f1u4p4s&feature=youtu.be',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            },
            {
                name: 'RVHack Winners Page',
                link: 'https://pastevents.realityvirtuallyhack.com/2017-winners',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    },
    {
        name: 'Automatic Gallery Walls visualized in AR',
        description:
            'As part of the Wayfair Summer Hackathon, ' +
            "my team and I build an app powered Wafair's " +
            'vast collection of gallery wall items. We ' +
            'received the accolade of Best Machine Learning hack ' +
            'and were invited to present this project at the PAPIs ' +
            'IO Conference at the Microsoft New England ' +
            'Research and Development center',
        thumbnail: GalleryWall,
        relatedLinks: [
            {
                name: 'PAPIs IO Talk',
                link: 'https://www.youtube.com/watch?v=r4d2-dT407g',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            },
            {
                name: 'Video Demo',
                link: 'https://www.youtube.com/watch?v=H-wX4AO8vDU',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            },
            {
                name: 'DEVPOST',
                link: 'https://devpost.com/software/automatic-gallery-wall-art-synthesis-and-visualization',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    },
    {
        name: 'Wayfair Helio Experience for Magic Leap',
        description:
            'We were a launch partner for the secretive ' +
            'Mixed Reality start up: Magic Leap. I was the ' +
            'lead developer on the Helio Web browser experience ' +
            'which is a default bookmark on every consumer device. ' +
            'The Helio expeirence is a pure 3D web browser created ' +
            'specifically for the platform and leverages many exciting ' +
            'features for the platform.',
        thumbnail: Helio,
        relatedLinks: [
            {
                name: 'What is Magic Leap',
                link: 'https://www.magicleap.com/',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            },
            {
                name: 'Demo Video',
                link: 'https://www.youtube.com/watch?v=eVQ8ETNPmT0',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            },
            {
                name: 'Wayfair Tech Blog',
                link: 'https://tech.wayfair.com/2018/08/the-first-ever-mixed-reality-commerce-experience/',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    },
    {
        name: 'Wayfair - View In Room 3D for iOS/Android',
        description:
            "We created this experience from scratch, as the native renderer was the only engine supported for our usecase at the time. I worked on preprossening object materials based on propriety information in order to make the models look great on a different lighting environment. A lot of work went into understanding how Apple's scenekit renderer worked but in the end we created an intuitive experience for customers to enjoy",
        thumbnail: WayfairVIR,
        relatedLinks: [
            {
                name: 'Marketing Promo',
                link: 'https://www.youtube.com/watch?v=ds-BgfrEVq4',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    },
    {
        name: 'Wayfair - View In Room 3D for Tango',
        description:
            'The main thing I worked on for this project was creating a custom GLSL shader for visualizing the meshing information that the Tango Phone would provide. I also worked on process stability improvements and combining this feature seamlessly into one singular app',
        thumbnail: TangoVIR,
        relatedLinks: [
            {
                name: 'Business Wire Article',
                link: 'https://www.businesswire.com/news/home/20170803005407/en',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    },
    {
        name: 'This Portfolio Site',
        description:
            'I wanted to drill down into CSS and Javascript... mainly because ' +
            'it has always been a black box to me. I also needed a personalized ' +
            'site so it helps out on both fronts.' +
            'I made this website from scratch using ReactJS and CSS and learned a lot about flex boxes. ' +
            'Its fully responsive so try to resize it!',
        thumbnail: PortfolioSite,
        relatedLinks: [
            {
                name: 'Site Link',
                link: 'http://www.johanos.com',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    },
    {
        name: 'HoloCaptions: Real time closed captions',
        description:
            'We created a hackathon project that allowed a user to ' +
            'speak and have their words transformed into real time captions. ' +
            'We aimed to use this to help the hearing impaired and allow others ' +
            'to communicate.',
        thumbnail: HoloCaptionsImage,
        relatedLinks: [
            {
                name: 'Devpost Link',
                link: 'https://devpost.com/software/holocaptions',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    },
    {
        name: 'Ventana: Holographic Interfaces for IoT Devices',
        description:
            'This is my Senior Capstone project, we partnered with the ' +
            'Microsoft Garage in Cambridge to create a system to control ' +
            'IoT devices using a Mixed Reality headset. Check out the videos ' +
            'to see it in action, also checkout the source code. Our original ' +
            'project was ran of a raspberry pi 3 running windows 10 IoT core.',
        thumbnail: VentanaConcept,
        relatedLinks: [
            {
                name: 'Presentation Video',
                link: 'https://www.youtube.com/watch?v=cqEgTjY-mMw',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            },
            {
                name: 'Pitch Video',
                link: 'https://www.youtube.com/watch?v=srRUtxqZxpw',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            },
            {
                name: 'Final Presentation',
                link: 'https://docs.google.com/presentation/d/1mSvdmYheNQ_K928ZmChiPnd5VuQ2ACpoaFyxTltZY4g/edit?usp=sharing',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            },
            {
                name: 'Source Code',
                link: 'https://github.com/VentanaIoT',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    },
    {
        name: 'Vive Tracking for Ventana',
        description:
            'I built a custom circuit to ingest the lighthouse ' +
            'tracking system of the HTC Vive and connected it to my ' +
            'Senior Capstone project. This is meant to run on Linux ' +
            'as the bluetooth drivers on Windows 10 IoT Core were ' +
            'difficult to work with.',
        thumbnail: PositionalTracking,
        relatedLinks: [
            {
                name: 'Demo',
                link: 'https://www.youtube.com/watch?v=rb667lqzOBo',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            },
            {
                name: 'Source Code',
                link: 'https://github.com/VentanaIoT',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    },
    {
        name: 'Neptune - Microfluidics for the Masses',
        description:
            'While working at CIDAR lab, I helped create a microfluidic ' +
            'design suite. Usually microfluidics require heavy start up ' +
            'costs and a lot of time. While not ready for projects in the ' +
            'millimeter scale, this suite of tools allows a user to design, ' +
            'print, and control a microfluidic circuit of their own. I helped ' +
            'choose the architecture of the UI interface as well as interface ' +
            'with the hardware using websockets and device drivers.',
        thumbnail: NeptuneLogo,
        relatedLinks: [
            {
                name: 'Wiki Page',
                link: 'http://2016.igem.org/Team:BostonU_HW',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            },
            {
                name: 'Neptune Highlighted',
                link: 'http://blog.bantamtools.com/neptune-custom-accessible-microfluidics',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    },
    {
        name: 'Micro-Panflute',
        description:
            'We designed a pan flute using photo diodes and MSP430 Microcontrollers, ' +
            "The system consists of 2 MSP430's that each can play 2 Pulse Width Modulated " +
            'pitches based on which 3D printed pan flute holes a user lights up.',
        thumbnail: MicroPanFlute,
        relatedLinks: [
            {
                name: 'Source Code',
                link: 'https://github.com/johanos/MSP430-Projects/tree/master/Project-Panflute',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    },
    {
        name: 'Lazer Harp',
        description:
            'For my embedded systems class, I created a laser harp ' +
            'consisting of a photo diode, arduino, and gumstix board. ' +
            'I wrote a linux driver to read midi information and display ' +
            'the currently played note on a low cost LCD display.' +
            'I also created custom housing for the laser so different ' +
            'chords could be made by rapidly oscillating a simple stepper ' +
            ' motor between 5 different orientations and shining a laser at those ' +
            'positions. A photo resistor hooked up to an ADC circuit inside of a ' +
            'cup was used as the finger to play the strings',
        thumbnail: LazerHarpHardware,
        relatedLinks: [
            {
                name: 'Source Code Link',
                link: 'https://github.com/johanos/LazerHarp',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    },
    {
        name: 'Phagebook',
        description:
            'While working at CIDAR lab, this is the first undergraduate ' +
            'lab project I worked on. We were able to create, deploy, ' +
            'and present this tool for our internal lab management. ' +
            'The aim of this project was to stream line lab asset ' +
            'purchasing as well as connect to the other digital tools ' +
            '(Clotho, Neptune, Chello, etc..) for synthetic biology that CIDAR has ',
        thumbnail: Phagebook,
        relatedLinks: [
            {
                name: 'Live Site',
                link: 'http://cidarlab.org:9090/',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            },
            {
                name: 'CIDAR Lab',
                link: 'http://cidarlab.org/',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    },
    {
        name: 'Proctor U Pentesting',
        description:
            'For my cyber security class we reached out to an electronic ' +
            'exam site, Proctor U, in order to perform penetration testing ' +
            'on their platform. We found multiple issues that cannot be shared ' +
            'here, but our feedback was used by the CEO and CTO to improve the product.',
        thumbnail: ProctorU,
        relatedLinks: [
            {
                name: 'ProctorU Site',
                link: 'https://www.proctoru.com/',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    },
    {
        name: 'CPU',
        description:
            'For my computer organization class, we designed in VLSI a simple ' +
            'Multi-Cycle CPU that could perform math and access memory with ' +
            'in an acceptable clock speed.',
        thumbnail: CPUDiagram,
        relatedLinks: [
            {
                name: 'Github Link',
                link: 'https://github.com/johanos/CPU',
                type: LinkTypeEnum.WEBSITE,
                description: ''
            }
        ]
    }
]);

const ajv = new Ajv();

const validator = ajv.compile(ProjectSchema);

const valid = validator(projectData);

if (!valid) {
    // eslint-disable-next-line no-console
    console.error(validator.errors);
    throw TypeError('Project Data does not match the schema provided');
}

export default projectData;
