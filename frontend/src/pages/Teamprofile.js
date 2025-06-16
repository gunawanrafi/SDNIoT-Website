import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';
import styles from '../styles/Teamprofile.module.css';

// Data anggota tim
const teamMembers = [
  {
    name: 'Mary Brown',
    role: 'Creative Leader',
    description: 'Expert in design thinking and creative problem solving.',
    motto: 'Creativity is intelligence having fun.',
    image: 'https://via.placeholder.com/150', // Ganti dengan URL gambar asli
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Ann Richmond',
    role: 'Project Manager',
    description: 'Specialist in agile methodologies and team coordination.',
    motto: 'Success is best when shared.',
    image: 'https://via.placeholder.com/150', // Ganti dengan URL gambar asli
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Bob Greenfield',
    role: 'Programming Guru',
    description: 'Master in software development and IoT integration.',
    motto: 'Code is like humor. When you have to explain it, it’s bad.',
    image: 'https://via.placeholder.com/150', // Ganti dengan URL gambar asli
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
];

const Teamprofile = () => {
  return (
    <div className={styles.teamProfilePage}>
      <h1 className={styles.teamTitle}>Meet The Team</h1>
      <p className={styles.teamSubtitle}>Our talented team members who make everything possible.</p>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Teamprofile;