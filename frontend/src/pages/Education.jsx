import AnimatedSection from '../components/AnimatedSection';
import '../styles/Education.css';

const Education = () => {
    const educationData = [
        {
            level: "Bachelor's Degree",
            degree: "BS Computer Science",
            institution: "Kohat University of Science and Technology",
            location: "Kohat, Pakistan",
            duration: "2022 – 2026",
            metrics: [
                { label: "CGPA", value: "3.55/4.00" },
                { label: "Grade", value: "A" }
            ],
            icon: "🎓"
        },
        {
            level: "F.Sc Pre-Engineering",
            degree: "F.Sc Pre-Engineering",
            institution: "Paradise Children Academy & Model College Hangu",
            location: "Hangu, Pakistan",
            duration: "2020 – 2022",
            metrics: [
                { label: "Marks", value: "953/1100" },
                { label: "Grade", value: "A" }
            ],
            icon: "🎓"
        },
        {
            level: "Matric (Science)",
            degree: "Matric (Science)",
            institution: "Paradise Children Academy & Model College Hangu",
            location: "Hangu, Pakistan",
            duration: "2018 – 2020",
            metrics: [
                { label: "Marks", value: "911 / 1100" },
                { label: "Grade", value: "A" }
            ],
            icon: "🎓"
        }
    ];

    return (
        <div className="education-page__container">
            <section className="home__section">
                <AnimatedSection className="home__section-inner">
                    <div className="education__header">
                        <div className="home-section__badge" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
                            <div className="home-section__badge-line"></div>
                            <span className="home-section__badge-text">Education</span>
                            <div className="home-section__badge-line"></div>
                        </div>
                        <h1 className="education__title">My Academic <span className="text-primary">Journey</span></h1>
                        <p className="education__subtitle">A timeline of my educational qualifications.</p>
                    </div>

                    <div className="education__timeline">
                        {educationData.map((edu, index) => (
                            <div key={index} className="education__card-wrapper">
                                <div className="education__timeline-dot"></div>
                                <div className="education__card">
                                    <div className="education__card-icon">{edu.icon}</div>
                                    <h2 className="education__card-title">{edu.degree}</h2>
                                    <h3 className="education__card-inst">{edu.institution}</h3>
                                    <div className="education__card-year">{edu.duration}</div>
                                    
                                    <div className="education__card-details">
                                        {edu.metrics.map((metric, mIndex) => (
                                            <div key={mIndex} className="education__detail-item">
                                                <span className="education__detail-label">{metric.label}</span>
                                                <span className="education__detail-value">{metric.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
};

export default Education;
