// ********************
//	Johan's Portfolio
//	Copyright © 2022
// ********************

import {
    SelfCalibration,
    dollhouseImage,
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
    CPUDiagram
} from './images';
import { ACVReport, dollhousePaper, CVReport, CVPoster } from './documents';
import { dollhouseVideo } from './videos';

export default Object.freeze([
    {
        projectName: 'Exploring the Camera Self Calibration Problem',
        projectDescription:
            'For COS 529 (Advanced Computer Vision) I investigated the Camera Self Calibration problem and created an end to end pipeline for using ground truth optical flow from datasets in order to calibrate a camera without a prior calibration object, by creating a projective reconstruction of a scene one is able to solve for the Dual Absolute Quadric, an entity invariant under any metric transformation',
        projectThumbnail: SelfCalibration,
        relatedLinks: [{ Report: ACVReport }]
    },
    {
        projectName: 'Dollhouse Projection Mapping System',
        projectDescription:
            'I was the lead engineer for a project whose aim was to project patterns onto 3D printed pieces of furniture, this was done via a prespective-n-point problem using openCV which then fed data to Unity in order to project patterns onto these items',
        projectThumbnail: dollhouseImage,
        relatedLinks: [
            { 'Live Demo': dollhouseVideo },
            { 'Unsubmitted Paper Draft': dollhousePaper }
        ]
    },
    {
        projectName: 'MP3js',
        projectDescription:
            'For my final project in COS 426 (Graphics) at Princeton, my team and I created a musical runner game with a vaporwave inspired theme. (Easter eggs if you press v and if you press s+h at the same time!)',
        projectThumbnail: MP3JS,
        relatedLinks: [{ 'Live Demo': 'https://mayoyoyo.github.io/mp3js/' }]
    },
    {
        projectName:
            'Investigating the use of Synthetic Data for training machine learning models for classification tasks on rock paper scissors datasets',

        projectDescription:
            'For COS 429 (Computer Vision) at Princeton, another student and I investigated the use of synthetic CGI training as pertaining to a Support Vector Machine classifier with different feature extration methods such as Bag of Visual Words, Histogram of Oriented Gradients, and Principal Component Analysis.',
        projectThumbnail: CVRPS,
        relatedLinks: [{ Report: CVReport }, { Poster: CVPoster }]
    },
    {
        projectName: 'Hackathon Winner: Cultour',
        projectDescription:
            "I was the lead developer for this Hackathon project at the Reality, Virtually Hackathon at the MIT Media Lab, we wanted to create a multi user teaching tool to allow children connect form across the globe. By the end of the weekend we achieved just that and create an experience that people could enjoy on any platform that supports webVR. My team's weekend peaked when we got the Grand Prize for WebVR",
        projectThumbnail: Cultour,
        relatedLinks: [
            {
                'Project Video':
                    'https://www.youtube.com/watch?v=kYz9f1u4p4s&feature=youtu.be'
            },
            {
                'RVHack Winners Page':
                    'https://pastevents.realityvirtuallyhack.com/2017-winners'
            }
        ]
    },
    {
        projectName: 'Automatic Gallery Walls visualized in AR',
        projectDescription:
            "As part of the Wayfair Summer Hackathon, my team and I build an app powered Wafair's vast collection of gallery wall items. We received the accolade of Best Machine Learning hack and were invited to present this project at the PAPIs IO Conference at the Microsoft New England Research and Development center",
        projectThumbnail: GalleryWall,
        relatedLinks: [
            { 'PAPIs IO Talk': 'https://www.youtube.com/watch?v=r4d2-dT407g' },
            { 'Video Demo': 'https://www.youtube.com/watch?v=H-wX4AO8vDU' },
            {
                DEVPOST:
                    'https://devpost.com/software/automatic-gallery-wall-art-synthesis-and-visualization'
            }
        ]
    },
    {
        projectName: 'Wayfair Helio Experience for Magic Leap',
        projectDescription:
            'We were a launch partner for the secretive Mixed Reality start up: Magic Leap. I was the lead developer on the Helio Web browser experience which is a default bookmark on every consumer device. The Helio expeirence is a pure 3D web browser created specifically for the platform and leverages many exciting features for the platform.',
        projectThumbnail: Helio,
        relatedLinks: [
            { 'What is Magic Leap': 'https://www.magicleap.com/' },
            { 'Demo Video': 'https://www.youtube.com/watch?v=eVQ8ETNPmT0' },
            {
                'Wayfair Tech Blog':
                    'https://tech.wayfair.com/2018/08/the-first-ever-mixed-reality-commerce-experience/'
            }
        ]
    },
    {
        projectName: 'Wayfair - View In Room 3D for iOS/Android',
        projectDescription:
            "We created this experience from scratch, as the native renderer was the only engine supported for our usecase at the time. I worked on preprossening object materials based on propriety information in order to make the models look great on a different lighting environment. A lot of work went into understanding how Apple's scenekit renderer worked but in the end we created an intuitive experience for customers to enjoy",
        projectThumbnail: WayfairVIR,
        relatedLinks: [
            { 'Marketing Promo': 'https://www.youtube.com/watch?v=ds-BgfrEVq4' }
        ]
    },
    {
        projectName: 'Wayfair - View In Room 3D for Tango',
        projectDescription:
            'The main thing I worked on for this project was creating a custom GLSL shader for visualizing the meshing information that the Tango Phone would provide. I also worked on process stability improvements and combining this feature seamlessly into one singular app',
        projectThumbnail: TangoVIR,
        relatedLinks: [
            {
                'Business Wire Article':
                    'https://www.businesswire.com/news/home/20170803005407/en'
            }
        ]
    },
    {
        projectName: 'This Portfolio Site',
        projectDescription:
            'I wanted to drill down into CSS and Javascript... mainly because it has always been arcane to me. I also needed a personalized site so it helps out on both fronts.' +
            'I made this website from scratch using ReactJS and CSS and learned a lot about flex boxes. Its fully responsive so try to resize it!',
        projectThumbnail: PortfolioSite,
        relatedLinks: [{ 'Site Link': 'http://www.johanos.com' }]
    },
    {
        projectName: 'HoloCaptions: Real time closed captions',
        projectDescription:
            'We created a hackathon project that allowed a user to speak and have their words transformed into real time captions. We aimed to use this to help the hearing impaired and allow others to communicate.',
        projectThumbnail: HoloCaptionsImage,
        relatedLinks: [
            { 'Devpost Link': 'https://devpost.com/software/holocaptions' }
        ]
    },
    {
        projectName: 'Ventana: Holographic Interfaces for IoT Devices',
        projectDescription:
            'This is my Senior Capstone project, we partnered with the Microsoft Garage in Cambridge to create a system to control IoT devices using a Mixed Reality headset. Check out the videos to see it in action, also checkout the source code. Our original project was ran of a raspberry pi 3 running windows 10 IoT core.',
        projectThumbnail: VentanaConcept,
        relatedLinks: [
            {
                'Presentation Video':
                    'https://www.youtube.com/watch?v=cqEgTjY-mMw'
            },
            { 'Pitch Video': 'https://www.youtube.com/watch?v=srRUtxqZxpw' },
            {
                'Final Presentation':
                    'https://docs.google.com/presentation/d/1mSvdmYheNQ_K928ZmChiPnd5VuQ2ACpoaFyxTltZY4g/edit?usp=sharing'
            },
            { 'Source Code': 'https://github.com/VentanaIoT' }
        ]
    },
    {
        projectName: 'Vive Tracking for Ventana',
        projectDescription:
            'I built a custom circuit to ingest the lighthouse tracking system of the HTC Vive and connected it to my Senior Capstone project. This is meant to run on Linux as the bluetooth drivers on Windows 10 IoT Core were difficult to work with.',
        projectThumbnail: PositionalTracking,
        relatedLinks: [
            { Demo: 'https://www.youtube.com/watch?v=rb667lqzOBo' },
            { 'Source Code': 'https://github.com/VentanaIoT' }
        ]
    },
    {
        projectName: 'Neptune - Microfluidics for the Masses',
        projectDescription:
            'While working at CIDAR lab, I helped create a microfluidic design suite. Usually microfluidics require heavy start up costs and a lot of time. While not ready for projects in the millimeter scale, this suite of tools allows a user to design, print, and control a microfluidic circuit of their own. I helped choose the architecture of the UI interface as well as interface with the hardware using websockets and device drivers.',
        projectThumbnail: NeptuneLogo,
        relatedLinks: [
            { 'Wiki Page': 'http://2016.igem.org/Team:BostonU_HW' },
            {
                'Neptune Highlighted':
                    'http://blog.bantamtools.com/neptune-custom-accessible-microfluidics'
            }
        ]
    },
    {
        projectName: 'Micro-Panflute',
        projectDescription:
            "We designed a panflute using photodiodes and MSP430 Microcontrollers, The system consists of 2 MSP430's that each can play 2 Pusle Width Modulated pitches based on which 3D printed panflute holes a user lights up.",
        projectThumbnail: MicroPanFlute,
        relatedLinks: [
            {
                'Source Code':
                    'https://github.com/johanos/MSP430-Projects/tree/master/Project-Panflute'
            }
        ]
    },
    {
        projectName: 'Lazer Harp',
        projectDescription:
            'For my embedded systems class, I created a laser harp consisting of a photodiode, arduino, and gumstix board. I wrote a linux driver to read midi information and display the currently played note on a low cost LCD display.' +
            'I also created custom housing for the laser so different chords could be made by rapidly oscilating a simple stepper moter between 5 different orientations and shining a laser at those positions. A photoresistor hooked up to an ADC circuit inside of a cup was used as the finger to play the strings',
        projectThumbnail: LazerHarpHardware,
        relatedLinks: [
            { 'Source Code Link': 'https://github.com/johanos/LazerHarp' }
        ]
    },
    {
        projectName: 'Phagebook',
        projectDescription:
            'While working at CIDAR lab, this is the first undergraduate lab project I worked on. We were able to create, deploy, and present this tool for our internal lab management. The aim of this project was to stream line lab asset purchasing as well as connect to the other digital tools (Clotho, Neptune, Chello, etc..) for synthetic biology that CIDAR has ',
        projectThumbnail: Phagebook,
        relatedLinks: [
            { 'Live Site': 'http://cidarlab.org:9090/' },
            { 'CIDAR Lab': 'http://cidarlab.org/' }
        ]
    },
    {
        projectName: 'Proctor U Pentesting',
        projectDescription:
            'For my cyber security class we reached out to an electronic exam site, Proctor U, in order to perform penetration testing on their platform. We found multiple issues that cannot be shared here, but our feedback was used by the CEO and CTO to improve the product.',
        projectThumbnail: ProctorU,
        relatedLinks: [{ 'ProctorU Site': 'https://www.proctoru.com/' }]
    },
    {
        projectName: 'CPU',
        projectDescription:
            'For my computer organization class, we designed in VLSI a simple Multi-Cycle CPU that could perform math and access memory with in an acceptable clock speed.',
        projectThumbnail: CPUDiagram,
        relatedLinks: [{ 'Github Link': 'https://github.com/johanos/CPU' }]
    }
]);
