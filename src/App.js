import React from 'react';
import Title from './components/Title';
import Objective from './components/Objective';
import Skills from './components/Skills';
import Education from './components/Education';
import Jobs from './components/Jobs';
import Hobbies from './components/Hobbies';
import Referees from './components/Referees';


function App() {
  return (
    <div className="App">
        <Title />
        <hr className='spacing'/>
        <Objective />
        <hr className='spacing'/>
        <Skills />
        <hr className='spacing'/>
        <Education />
        <hr className='spacing'/>
        <Jobs />
        <hr className='spacing' /> 
        <Hobbies />
        <hr className='spacing' />
        <Referees />
    </div>
  );
}

export default App;
