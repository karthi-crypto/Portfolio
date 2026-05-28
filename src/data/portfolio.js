import {
  FaAws,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiExpress,
  SiGeeksforgeeks,
  SiLeetcode,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from 'react-icons/si';
import { TbApi, TbAutomation, TbBrandGit, TbBrandVscode, TbCloud, TbCpu, TbSparkles } from 'react-icons/tb';

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const roles = ['Full Stack Developer', 'AI Enthusiast', 'Problem Solver', 'Backend Developer'];

export const stats = [
  { value: '4+', label: 'Projects' },
  { value: '500+', label: 'Problems Solved' },
  { value: '5+', label: 'Certifications' },
];

export const interests = [
  { label: 'Full stack development', icon: FaCode },
  { label: 'Generative AI', icon: TbSparkles },
  { label: 'Automation systems', icon: TbAutomation },
  { label: 'Cloud technologies', icon: TbCloud },
  { label: 'Backend architecture', icon: TbCpu },
  { label: 'Modern UI/UX', icon: FaReact },
];

export const skillGroups = [
  {
    title: 'Programming Languages',
    accent: 'from-primary to-secondary',
    skills: [
      { name: 'Java', icon: FaJava },
      { name: 'C++', icon: SiCplusplus },
      { name: 'JavaScript', icon: FaJs },
      { name: 'Python', icon: FaPython },
    ],
  },
  {
    title: 'Frontend',
    accent: 'from-secondary to-accent',
    skills: [
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'React', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    accent: 'from-accent to-primary',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: TbApi },
    ],
  },
  {
    title: 'Database',
    accent: 'from-primary to-accent',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'SQL', icon: FaDatabase },
    ],
  },
  {
    title: 'Tools & Platforms',
    accent: 'from-secondary to-primary',
    skills: [
      { name: 'Git', icon: TbBrandGit },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: TbBrandVscode },
      { name: 'Linux', icon: FaLinux },
      { name: 'AWS Basics', icon: FaAws },
    ],
  },
];

export const projects = [
  {
    title: 'Intelligent Safety Companion for Mines',
    description:
      'Developed a centralized mine safety monitoring system with real-time ML risk analysis, alert generation, and environmental data dashboard to improve emergency response.',
    tech: ['React', 'Spring Boot', 'MySQL', 'Machine Learning'],
    signal: 'Safety Monitor',
  },
  {
    title: 'Novexira Web Technologies',
    description:
      'A professional full stack software company platform featuring a services showcase, dynamic careers portal, user authentication, and admin dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'MongoDB'],
    signal: 'Company Portal',
  },
  {
    title: 'Personal Budget Tracker',
    description:
      'Full-stack finance management application with transaction tracking, category analytics, and real-time updates.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL'],
    signal: 'Finance OS',
  },
  {
    title: 'Farmer Resource Support',
    description:
      'A platform connecting farmers with vehicle rentals and agricultural helpers for efficient farming operations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    signal: 'Agri Network',
  },
];

export const cpProfiles = [
  {
    platform: 'LeetCode',
    label: 'miraculous_88',
    href: 'https://leetcode.com/u/miraculous_88/',
    icon: SiLeetcode,
    metric: 'Algorithmic thinking',
  },
  {
    platform: 'GeeksforGeeks',
    label: 'karthik0ap9',
    href: 'https://geeksforgeeks.org/user/karthik0ap9/',
    icon: SiGeeksforgeeks,
    metric: 'DSA practice',
  },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/karthi-crypto', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/karthik-r-a15547292', icon: FaLinkedin },
  { label: 'LeetCode', href: 'https://leetcode.com/u/miraculous_88/', icon: SiLeetcode },
  { label: 'GeeksforGeeks', href: 'https://geeksforgeeks.org/user/karthik0ap9/', icon: SiGeeksforgeeks },
];
