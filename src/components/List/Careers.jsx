import React from 'react';
import ListCareers from './ListCareer/ListCareers';
import ShowProgramBtn from '../buttons/ShowProgramBtn';

import '../../styles/careers.scss';

import picCareer from '../../images/icon_education_type.png'

const Careers = () => {
  return (
    <>
    <div className='careers'>
      <div className='career__block'>
        <img src={picCareer} alt="picCareer" />
        Careers
      </div>
        <div className='line'></div>
      <ListCareers />
      <ShowProgramBtn />
    </div>
    <div className='cards'></div>
    </>
  )
}

export default Careers;