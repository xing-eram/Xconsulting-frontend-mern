import React from 'react'
import './whatGPT3.css';
import Feature from '../feature/Feature';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id='Xsoluciones'>
      <div clasaName="gpt3___whatgpt3-feature" >
      <Feature  title="What is GPT-3" text="Lorem loremipsu"/>
        </div>
        <div className=" gpt3__whatgpt3-heading" >
          <h1 className="gradient__text"> The posibilities are beyond imagination</h1>
          <p>Explore the library</p>
        </div>
        <div className='gpt3__whatgpt3-container'>
          <Feature title="Chatbots" text="Lorem impusi"/>
          <Feature title="Chatbots" text="Lorem impusi"/>
          <Feature title="Chatbots" text="Lorem impusi"/>
        </div>
      </div>
     )   
   }

export default WhatGPT3
