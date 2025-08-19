//hobby icons-----
import music from '../public/static/images/Hobbies/music.png'
import book from  '../public/static/images/Hobbies/book.png'
import gym from  '../public/static/images/Hobbies/dumbbell.png'
import watch from  '../public/static/images/Hobbies/watch.png'
import games from  '../public/static/images/Hobbies/games.png'


//tech stack icons-------
import react from '../public/static/images/Tech/react.png'
import css from '../public/static/images/Tech/css.png'
import html from '../public/static/images/Tech/html.png'
import js from '../public/static/images/Tech/js.png'
import figma from '../public/static/images/Tech/figma.png'
import canva from '../public/static/images/Tech/canva.png'
import python from '../public/static/images/Tech/python.png'
import mysql from '../public/static/images/Tech/mysql.png'

//Educational achievements
import nueve from '../public/static/images/Achievements/nueve.png'
import rtu from '../public/static/images/Achievements/rtu.png'
import pup from '../public/static/images/Achievements/pup.png'

//projects-------
import rickverse from '../public/static/images/Projects/rick.png'
import pethub from '../public/static/images/Projects/pethub.png'
import pupafid from '../public/static/images/Projects/pupafid.png'
import airness from '../public/static/images/Projects/airness.png'

export const hobbyList =[
    {
        name:'Listening to music',
        url:music,
        color:'#009C9C'
    },
    {
        name:'Playing video games',
        url:games,
        color:'#FFDB58'
    },
    {
        name:'Reading books',
        url:book,
        color:'#FFBA80'
    },
    {
        name:'Watching movies / series',
        url:watch,
        color:'#9CB8D5'
    },
    {
        name:'Working out',
        url:gym,
        color:'#FF9168'
    },

]

export const achievementsList=[
    {
        school:'Nueve De Febrero Elementary School',
        icon: nueve,
        year:'2015',
        description:'Achieved Top 8 Overall in Graduating Class',
        level:'Elementary',
        leftSide:true
    },
    {
        school:'Rizal Technological University',
        icon: rtu,
        year:'2019',
        description:'Included in top 30 overall of the graduating class',
          level:'Junior High School'
          ,
        leftSide:false
    },
    {
        school:'Rizal Technological University',
        icon: rtu,
        year:'2021',
        description:'Graduated with High Honors',
        level:'Senior High School'
        ,
        leftSide:true
    },
    {
        school:'Polytechnic University of the Philippines',
        icon: pup,
        year:'2021 to Present',
        description:"Consistent President's / Dean's Lister",
        level:'Undergraduate College'
        ,
        leftSide:false
    },
   
]

export const techList=[
    {
        name:'React',
        icon: react
    },
    {
        name:'MySQL',
        icon: mysql
    },
    {
        name:'Python',
        icon: python
    },
    {
        name:'HTML',
        icon: html
    },
    {
        name:'CSS',
        icon: css
    },
    {
        name:'JavaScript',
        icon: js
    },
    {
        name:'Figma',
        icon: figma
    },
    {
        name:'Canva',
        icon: canva
    },
]

export const projectList = [
    {
        name:'PetHub',
        image:pethub,
        description:'PetHub is an interactive social media prototype designed using Figma. It is specifically created for pet owners and enthusiasts. It’s a platform where users can create profiles for their pets, share photos and videos, connect with other pet lovers',
        link:'https://www.figma.com/proto/zGGZ7wWYq2WBk04kK9Utt9/Pet-Hub?node-id=1-2047&starting-point-node-id=1%3A2047',
        invert: true
    },
    {
        name:'PUPAFID',
        image:pupafid,
        description:'The PUPAFID is a platform designed to facilitate the process of applying for a new identification card for the students in Polytechnic University of the Philippines. This website offers a user-friendly interface where students can easily create an account, fill out the necessary application forms, upload required documents, and track the status of their application. The goal is to simplify and speed up the ID application process, reducing the time and effort required for students to obtain their new IDs.',
        link:'https://jxsh2.github.io/Final_Project_WEBDEV_BC_PUPAFID/'
        , invert: false
    },

    {
        name:'RickVerse',
        image:rickverse,
        description:'RickVerse is a Rick and Morty wikepedia where you can view characters’ information.  With  filtering options, you can easily search for characters based on their roles, affiliations, and more.',
        link:'https://github.com/JJCayabyab/Rick-and-Morty-Wikepedia'
        , invert: true
    },

    {
        name:'Airness Airlines',
        image:airness,
        description:'The PUPAFID is a platform designed to facilitate the process of applying for a new identification card. This website offers a user-friendly interface where students can easily create an account, fill out the necessary application forms, upload required documents, and track the status of their application. The goal is to simplify and speed up the ID application process, reducing the time and effort required for students to obtain their new IDs.',
        link:'https://github.com/szy-kenn/airness-airlines'
        , invert: false
    },
    
]