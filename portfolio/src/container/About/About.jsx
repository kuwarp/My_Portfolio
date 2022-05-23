import React from 'react';
import { motion } from 'framer-motion';
import Images from '../../constants/Images';

import { AppWrap, MotionWrap } from '../../wrapper/index';
import './About.scss';
const abouts=[
  {
    title:'frontend-projects',description:'there is some  front-end project',imgUrl:Images.about01
  ,link:'https://github.com/'},{
    title:'backend-projects',description:'there is some backend-project',imgUrl:Images.about02
  },{
    title:'practice notes',description:'learning ',imgUrl:Images.about03
  },
  {
    title:'React-projects',description:'projects based on react',imgUrl:Images.about04
  }
]

const About = () => {
 


  return (
    <>
     
    <h2 className='head-text'> About <span >Section</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 40 }}><a href={about.link} rel='noreferrer' target='blank'>{about.title}</a></h2>
            <p className="p-text" style={{ marginTop: 20 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);

