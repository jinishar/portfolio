import React, { useState } from 'react';
import {
    FaReact, FaNode, FaPython, FaJava, FaDatabase, FaGitAlt,
    FaCode, FaChartBar, FaUsers, FaLightbulb, FaTrophy,
    FaGraduationCap, FaBriefcase, FaEnvelope, FaLinkedin,
    FaGithub, FaExternalLinkAlt, FaStar, FaAward, FaBrain, FaTable
} from 'react-icons/fa';
import {
    SiJavascript, SiTypescript, SiExpress, SiMysql, SiPostgresql,
    SiFlutter, SiSupabase, SiFastapi, SiTailwindcss, SiAndroid,
    SiPandas, SiNumpy
} from 'react-icons/si';
import Button from '../components/Button';
import Card from '../components/Card';
import styles from './Portfolio.module.css';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('all');

    const skills = {
        frontend: [
            { icon: <FaReact />, name: 'React.js' },
            { icon: <SiJavascript />, name: 'JavaScript' },
            { icon: <SiTypescript />, name: 'TypeScript' },
            { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
        ],
        backend: [
            { icon: <FaNode />, name: 'Node.js' },
            { icon: <SiExpress />, name: 'Express.js' },
            { icon: <SiFastapi />, name: 'FastAPI' },
            { icon: <FaPython />, name: 'Python' },
        ],
        mobile: [
            { icon: <SiFlutter />, name: 'Flutter' },
            { icon: <SiAndroid />, name: 'Android (XML)' },
            { icon: <SiAndroid />, name: 'Jetpack Compose' },
        ],
        database: [
            { icon: <SiMysql />, name: 'MySQL' },
            { icon: <SiPostgresql />, name: 'PostgreSQL' },
            { icon: <SiSupabase />, name: 'Supabase' },
        ],
        data: [
            { icon: <FaChartBar />, name: 'Power BI' },
            { icon: <SiPandas />, name: 'Pandas' },
            { icon: <SiNumpy />, name: 'NumPy' },
            { icon: <FaTable />, name: 'SQL Analytics' },
        ],
        other: [
            { icon: <FaGitAlt />, name: 'Git' },
            { icon: <FaJava />, name: 'Java (OOP)' },
            { icon: <FaBrain />, name: 'Problem Solving' },
        ]
    };

    const projects = [
        {
            title: 'Prospera',
            description: 'Financial investment recommendation system using React and Node.js to suggest optimal investment options. Designed a user-friendly interface and implemented efficient data management to optimize financial decision-making.',
            tech: ['React.js', 'Node.js', 'REST APIs'],
            category: 'fullstack',
            highlights: ['User-friendly interface', 'Efficient data management', 'Investment optimization']
        },
        {
            title: 'Morsels',
            description: 'Role-based surplus food redistribution platform connecting food providers, organizations, and delivery partners to reduce food waste through real-time coordination. Cross-platform mobile application using Flutter and Supabase.',
            tech: ['Flutter', 'Supabase', 'PostgreSQL', 'Real-time sync'],
            category: 'mobile',
            highlights: ['Real-time coordination', 'Role-based access', 'Food waste reduction'],
            github: 'https://github.com/itcodehery/TeamPulse-CodeSprint26'
        },
        {
            title: 'AdminFlow',
            description: 'Role-based workflow management system with audit logging and state-driven approvals using FastAPI, PostgreSQL, JWT authentication, and a React frontend with Vite and Tailwind CSS.',
            tech: ['FastAPI', 'PostgreSQL', 'React', 'Tailwind CSS', 'JWT'],
            category: 'fullstack',
            highlights: ['Audit logging', 'State-driven approvals', 'JWT authentication'],
            github: 'https://github.com/jinishar/adminflow-workflow-system'
        },
        {
            title: 'Student Feedback & Performance Dashboard',
            description: 'Interactive Streamlit dashboard that integrates student academic data with NLP-powered feedback sentiment analysis. Surfaces at-risk students, course improvement areas, and the relationship between student satisfaction and academic performance — all in one place.',
            tech: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'NLTK', 'WordCloud', 'Matplotlib'],
            category: 'data',
            highlights: ['VADER Sentiment Analysis on feedback', 'At-risk student detection', 'Sentiment vs. performance insights', 'Word cloud & keyword extraction'],
            github: 'https://github.com/jinishar/jStudentperformance_feedbackAnalysis',
            demo: 'https://jstudentperformancefeedbackanalysis.streamlit.app/'
        }
    ];

    const achievements = [
        {
            icon: <FaUsers />,
            title: 'Registration Committee Member',
            organization: 'Christ University IT Event',
            year: '2025',
            description: 'Collaborated with organizing teams to manage event registrations and coordinate with participants for offline and online sessions.'
        },
        {
            icon: <FaBriefcase />,
            title: 'Content Contributor',
            organization: 'Christ Online Education',
            year: '2025',
            description: 'Created and uploaded educational content for online learning modules, improving accessibility for distance education students.'
        },
        {
            icon: <FaTrophy />,
            title: 'Event Head - Econovanza',
            organization: 'National Level Economic Fest',
            year: '2024',
            description: 'Designed, coordinated, and executed events with cross-functional teams, demonstrating strong leadership and event management skills.'
        },
        {
            icon: <FaAward />,
            title: '2nd Place - Tech-It-Out IT Quiz',
            organization: 'St. Aloysius College',
            year: '2023',
            description: 'Secured second place in a competitive inter-college IT quiz, showcasing technical knowledge and problem-solving ability.'
        }
    ];

    const education = [
        {
            degree: 'Masters of Computer Application',
            institution: 'Christ University',
            location: 'Bengaluru, India',
            period: 'June 2025 – Present',
            icon: <FaGraduationCap />
        },
        {
            degree: 'Bachelors of Computer Application',
            institution: 'St. Aloysius University',
            location: 'Mangaluru, India',
            period: 'July 2022 – May 2025',
            cgpa: '7.53',
            icon: <FaGraduationCap />
        },
        {
            degree: 'BSBA (Basic Mathematics, Statistics, Business Studies, Accountancy)',
            institution: 'St. Aloysius PU College',
            location: 'Mangaluru, India',
            period: 'August 2020 – June 2022',
            percentage: '82.67%',
            icon: <FaGraduationCap />
        }
    ];

    const courses = [
        {
            title: 'Intermediate React and TypeScript Development',
            description: 'Self-paced course focused on advanced hooks, Context API, and TypeScript integration for building scalable UIs.',
            provider: 'Self-paced'
        },
        {
            title: 'Python for Data Analysis',
            description: 'Comprehensive course covering Python fundamentals, NumPy, Pandas, and data manipulation techniques for real-world analytics.',
            provider: 'Udemy - Krish Naik'
        },
        {
            title: 'Power BI for Business Intelligence',
            description: 'Hands-on training in building interactive dashboards, DAX formulas, and data visualization best practices.',
            provider: 'Self-paced'
        },
        {
            title: 'Sparkle: Animation and Multimedia',
            description: 'National-level seminar on Animation and Multimedia organized by the Department of Computer Science.',
            provider: 'St. Aloysius College'
        }
    ];

    const languages = [
        'English', 'Hindi', 'Kannada', 'Malayalam', 'Konkani', 'Tulu'
    ];

    const roleTagline = 'Frontend Developer · Data Enthusiast';

    const filteredProjects = activeTab === 'all'
        ? projects
        : projects.filter(p => p.category === activeTab);

    return (
        <div className={styles.portfolio}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <div className={styles.heroText}>
                            <div className={styles.roleTagline}>{roleTagline}</div>
                            <h1 className={styles.heroTitle}>
                                Hi, I'm <span className="text-gradient">Jinisha Leema Rosario</span>
                            </h1>
                            <h2 className={styles.heroSubtitle}>
                                Building Beautiful UIs · Exploring Data
                            </h2>
                            <p className={styles.heroDescription}>
                                MCA student specializing in Frontend Development with React.js and TypeScript.
                                Driven by a growing curiosity for data — from SQL analytics to Power BI dashboards.
                                I love crafting user experiences that look great <em>and</em> tell a story.
                            </p>
                            <div className={styles.heroCTA}>
                                <Button href="#projects" variant="primary" size="large">
                                    View My Work
                                </Button>
                                <Button href="#contact" variant="secondary" size="large">
                                    Get In Touch
                                </Button>
                            </div>
                            <div className={styles.socialLinks}>
                                <a href="mailto:rosariojinisha@gmail.com" className={styles.socialIcon}>
                                    <FaEnvelope />
                                </a>
                                <a href="https://www.linkedin.com/in/jinisha-leema-rosario-14124a2b0" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/jinishar" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                        <div className={styles.heroImage}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.glowEffect}></div>
                                <div className={styles.profilePlaceholder}>
                                    <FaCode className={styles.profileIcon} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section" id="about">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>About Me</h2>
                        <p className={styles.sectionSubtext}>
                            Passionate developer with a results-driven mindset
                        </p>
                    </div>
                    <div className={styles.aboutContent}>
                        <p>
                            I'm Jinisha Leema Rosario, an MCA student at Christ University, Bengaluru. My core strength
                            lies in <strong>Frontend Development</strong> — crafting polished, responsive, and performant
                            user interfaces using React.js, TypeScript, and modern CSS. I believe great UI is not just about
                            looks, but about the experience it delivers.
                        </p>
                        <p>
                            Alongside my frontend focus, I'm actively exploring the <strong>data side of technology</strong>.
                            From writing analytical SQL queries and building Power BI dashboards to experimenting with
                            Pandas and NumPy in Python, I'm learning to bridge the gap between visual storytelling and
                            data-driven insights — a combination I find incredibly powerful.
                        </p>
                        <p>
                            Beyond code, I bring strong communication and leadership abilities — demonstrated through
                            roles like Event Head for Econovanza and committee work at university events. I thrive
                            in collaborative environments and am always eager to grow, contribute, and push creative
                            boundaries with technology.
                        </p>
                        <div className={styles.languagesSection}>
                            <h3>Languages I Speak</h3>
                            <div className={styles.languagesList}>
                                {languages.map((lang, index) => (
                                    <span key={index} className={styles.languageTag}>{lang}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className={`section ${styles.skillsSection}`} id="skills">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Technical Skills</h2>
                        <p className={styles.sectionSubtext}>
                            Technologies and tools I work with
                        </p>
                    </div>

                    <div className={styles.skillsCategory}>
                        <h3>Frontend Development</h3>
                        <div className={styles.skillsGrid}>
                            {skills.frontend.map((skill, index) => (
                                <Card key={index} variant="skill" icon={skill.icon} title={skill.name} />
                            ))}
                        </div>
                    </div>

                    <div className={styles.skillsCategory}>
                        <h3>Backend Development</h3>
                        <div className={styles.skillsGrid}>
                            {skills.backend.map((skill, index) => (
                                <Card key={index} variant="skill" icon={skill.icon} title={skill.name} />
                            ))}
                        </div>
                    </div>

                    <div className={styles.skillsCategory}>
                        <h3>Mobile Development</h3>
                        <div className={styles.skillsGrid}>
                            {skills.mobile.map((skill, index) => (
                                <Card key={index} variant="skill" icon={skill.icon} title={skill.name} />
                            ))}
                        </div>
                    </div>

                    <div className={styles.skillsCategory}>
                        <h3>Database &amp; Backend</h3>
                        <div className={styles.skillsGrid}>
                            {skills.database.map((skill, index) => (
                                <Card key={index} variant="skill" icon={skill.icon} title={skill.name} />
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.skillsCategory} ${styles.dataCategory}`}>
                        <h3>Data &amp; Analytics <span className={styles.interestBadge}>Exploring</span></h3>
                        <div className={styles.skillsGrid}>
                            {skills.data.map((skill, index) => (
                                <Card key={index} variant="skill" icon={skill.icon} title={skill.name} />
                            ))}
                        </div>
                    </div>

                    <div className={styles.skillsCategory}>
                        <h3>Tools &amp; Other</h3>
                        <div className={styles.skillsGrid}>
                            {skills.other.map((skill, index) => (
                                <Card key={index} variant="skill" icon={skill.icon} title={skill.name} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section" id="projects">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Featured Projects</h2>
                        <p className={styles.sectionSubtext}>
                            Real-world applications I've built
                        </p>
                    </div>

                    <div className={styles.projectFilters}>
                        <button
                            className={`${styles.filterBtn} ${activeTab === 'all' ? styles.active : ''}`}
                            onClick={() => setActiveTab('all')}
                        >
                            All Projects
                        </button>
                        <button
                            className={`${styles.filterBtn} ${activeTab === 'fullstack' ? styles.active : ''}`}
                            onClick={() => setActiveTab('fullstack')}
                        >
                            Full-Stack
                        </button>
                        <button
                            className={`${styles.filterBtn} ${activeTab === 'mobile' ? styles.active : ''}`}
                            onClick={() => setActiveTab('mobile')}
                        >
                            Mobile
                        </button>
                        <button
                            className={`${styles.filterBtn} ${activeTab === 'data' ? styles.active : ''}`}
                            onClick={() => setActiveTab('data')}
                        >
                            Data Analytics
                        </button>
                    </div>

                    <div className={styles.projectsGrid}>
                        {filteredProjects.map((project, index) => (
                            <div key={index} className={styles.projectCard}>
                                <Card variant="project">
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDescription}>{project.description}</p>

                                    <div className={styles.projectHighlights}>
                                        {project.highlights.map((highlight, idx) => (
                                            <div key={idx} className={styles.highlight}>
                                                <FaStar className={styles.highlightIcon} />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className={styles.techStack}>
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} className={styles.techTag}>{tech}</span>
                                        ))}
                                    </div>

                                    {(project.github || project.demo) && (
                                        <div className={styles.projectLinks}>
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                                    <FaGithub /> Source Code
                                                </a>
                                            )}
                                            {project.demo && (
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`${styles.projectLink} ${styles.projectLinkDemo}`}>
                                                    <FaExternalLinkAlt /> Live Demo
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className={`section ${styles.educationSection}`} id="education">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Education</h2>
                        <p className={styles.sectionSubtext}>
                            My academic journey
                        </p>
                    </div>
                    <div className={styles.timeline}>
                        {education.map((edu, index) => (
                            <div key={index} className={styles.timelineItem}>
                                <div className={styles.timelineIcon}>{edu.icon}</div>
                                <div className={styles.timelineContent}>
                                    <h3>{edu.degree}</h3>
                                    <h4>{edu.institution}</h4>
                                    <p className={styles.timelineLocation}>{edu.location}</p>
                                    <p className={styles.timelinePeriod}>{edu.period}</p>
                                    {edu.cgpa && <p className={styles.timelineScore}>CGPA: {edu.cgpa}</p>}
                                    {edu.percentage && <p className={styles.timelineScore}>Percentage: {edu.percentage}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="section" id="achievements">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Leadership & Achievements</h2>
                        <p className={styles.sectionSubtext}>
                            Recognition and contributions
                        </p>
                    </div>
                    <div className={styles.achievementsGrid}>
                        {achievements.map((achievement, index) => (
                            <Card key={index} variant="achievement" icon={achievement.icon}>
                                <h3 className={styles.achievementTitle}>{achievement.title}</h3>
                                <h4 className={styles.achievementOrg}>{achievement.organization}</h4>
                                <p className={styles.achievementYear}>{achievement.year}</p>
                                <p className={styles.achievementDesc}>{achievement.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className={`section ${styles.coursesSection}`} id="courses">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Courses & Workshops</h2>
                        <p className={styles.sectionSubtext}>
                            Continuous learning and development
                        </p>
                    </div>
                    <div className={styles.coursesGrid}>
                        {courses.map((course, index) => (
                            <Card key={index}>
                                <h3 className={styles.courseTitle}>{course.title}</h3>
                                <p className={styles.courseDescription}>{course.description}</p>
                                <p className={styles.courseProvider}>
                                    <FaLightbulb className={styles.providerIcon} />
                                    {course.provider}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.contactSection} id="contact">
                <div className="container">
                    <div className={styles.contactContent}>
                        <h2>Let's Work Together</h2>
                        <p>
                            I'm currently looking for opportunities to apply my technical expertise and
                            contribute to impactful technology solutions. Let's connect!
                        </p>
                        <div className={styles.contactButtons}>
                            <Button href="mailto:rosariojinisha@gmail.com" variant="primary" size="large">
                                <FaEnvelope /> Send Email
                            </Button>
                            <Button href="https://www.linkedin.com/in/jinisha-leema-rosario-14124a2b0" variant="secondary" size="large">
                                <FaLinkedin /> LinkedIn Profile
                            </Button>
                            <Button href="https://github.com/jinishar" variant="outline" size="large">
                                <FaGithub /> GitHub
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className="container">
                    <p>&copy; 2026 Jinisha Leema Rosario. Built with React &amp; a love for great design.</p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
