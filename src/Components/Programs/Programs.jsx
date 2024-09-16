import React from 'react';
import './Programs.css';
import face_det from '../../Assets/222.jpeg'
import face_sec from '../../Assets/555.jpeg'
import face_repo from '../../Assets/333.jpeg'
import { FaSmile, FaRegClock, FaChartLine } from 'react-icons/fa'; // Correct icon import

const Programs = () => {
  return (
    <div className="programs" id='programs'>
      <div className="program">
        <img
          src={face_det}
          alt="Liveness Detection"
        />
        <div className="caption">
          <FaChartLine size={60} />
          <p>Digital Marketing</p>
        </div>
      </div>

      <div className="program">
        <img
          src={face_sec}
          alt="Real-time Attendance"
        />
        <div className="caption">
          <FaRegClock size={60} />
          <p>IELTS/TOEFL Preperation</p>
        </div>
      </div>

      <div className="program">
        <img
          src={face_repo}
          alt="Detailed Reporting"
        />
        <div className="caption">
          <FaSmile size={60} /> 
          <p>Generative AI</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;