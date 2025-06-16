import React from 'react';
import styles from '../styles/TeamMemberCard.module.css';

const TeamMemberCard = ({ member }) => {
  const { name, role, description, motto, image, socials } = member;

  return (
    <div className={styles.teamCard}>
      <div className={styles.teamImage}>
        <img src={image} alt={name} />
      </div>
      <h3 className={styles.teamName}>{name}</h3>
      <p className={styles.teamRole}>{role}</p>
      <p className={styles.teamDescription}>{description}</p>
      <blockquote className={styles.teamMotto}>“{motto}”</blockquote>
      <div className={styles.teamSocials}>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default TeamMemberCard;