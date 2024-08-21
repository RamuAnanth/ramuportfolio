import React from 'react';
import './AchievementsPage.css';
import html from './images/HTML-certificate.png'

const achievements = [
    {
        title: 'Machine Learning',
        description: 'Completed Intrenship in spypro company in Vijayawada',
        date: 'April 2023',
        image: 'link-to-image-2',
      },
       {
    title: 'Coding Contest',
    description: 'Internal coding contest in my College',
    date: 'April 2024',
    image: 'link-to-image-1', // Add the actual link to the achievement image
  },
  {
    title: 'HTML Course Completion',
    description: 'This certificate exam consist of all kind of questions in html',
    date: 'may 2024',
    image: html,
  },
  {
    title: 'JCoding Contest',
    description: 'This contest was conducted by rvrjc college in andhra pradesh.',
    date: 'March 2024',
    image: 'link-to-image-2',
  },
 

  // Add more achievements as needed
];

export default function AchievementsPage() {
  return (
    <div className="achievements-page">
      <h1 className="title">My Achievements</h1>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            <img src={achievement.image} alt={achievement.title} className="achievement-image" />
            <div className="achievement-content">
              <h2 className="achievement-title">{achievement.title}</h2>
              <p className="achievement-description">{achievement.description}</p>
              <p className="achievement-date">{achievement.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
