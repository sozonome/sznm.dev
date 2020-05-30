import React from 'react';

export default function ProjectCard({ title, img, link }) {
  return (
    <div className={'projectCard'}>
      <h2>{title}</h2>
      <img src={img} width={100} />
      <h4>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button>Visit</button>
        </a>
      </h4>
    </div>
  );
}
