import React, { useState, useEffect } from 'react';
import './styles.css'; // استيراد ملف CSS

// تعريف نوع البيانات للمشروع لضمان التوافق مع الواجهة الخلفية
interface Project {
    id: number;
    title: string;
    description: string;
    image_url: string;
    model_3d_url?: string; // اختياري
    location: string;
    completion_date: string;
    project_type: string;
}

// تعريف نوع البيانات لمعلومات الشركة
interface CompanyInfo {
    name: string;
    owner: string;
    phone: string;
    email: string;
    description: string;
    established_year: number;
}

const ProjectsGallery: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // جلب بيانات المشاريع
                const projectsResponse = await fetch('http://localhost:8080/api/projects');
                if (!projectsResponse.ok) {
                    throw new Error('Network response for projects was not ok');
                }
                const projectsData: Project[] = await projectsResponse.json();
                setProjects(projectsData);

                // جلب معلومات الشركة
                const companyInfoResponse = await fetch('http://localhost:8080/api/company');
                if (!companyInfoResponse.ok) {
                    throw new Error('Network response for company info was not ok');
                }
                const companyInfoData: CompanyInfo = await companyInfoResponse.json();
                setCompanyInfo(companyInfoData);

            } catch (err: any) {
                setError(`Failed to fetch data: ${err.message}. Make sure the Rust backend is running on port 8080.`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p className="loading-message">جاري تحميل روائعنا...</p>;
    if (error) return <p className="error-message">خطأ: {error}</p>;

    return (
        <div className="alhadouni-website">
            <header className="main-header">
                <div className="header-content">
                    <h1>{companyInfo?.name || 'شركة الهدوني للمقاولات'}</h1>
                    <p>{companyInfo?.description || 'بناء المستقبل بإتقان'}</p>
                    <nav className="main-nav">
                        <ul>
                            <li><a href="#about">من نحن</a></li>
                            <li><a href="#projects">مشاريعنا</a></li>
                            <li><a href="#contact">تواصل معنا</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="about" className="about-section">
                <h2>من نحن</h2>
                {companyInfo && (
                    <div className="company-details">
                        <p><strong>المالك:</strong> {companyInfo.owner}</p>
                        <p><strong>تأسست عام:</strong> {companyInfo.established_year}</p>
                        <p>{companyInfo.description}</p>
                    </div>
                )}
            </section>

            <section id="projects" className="projects-section">
                <h2>مشاريعنا</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <img src={project.image_url} alt={project.title} className="project-image" />
                            <div className="card-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <p><strong>الموقع:</strong> {project.location}</p>
                                <p><strong>تاريخ الإنجاز:</strong> {project.completion_date}</p>
                                <p><strong>النوع:</strong> {project.project_type}</p>
                                {project.model_3d_url && (
                                    <button className="view-3d-button">استكشف النموذج ثلاثي الأبعاد</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact" className="contact-section">
                <h2>تواصل معنا</h2>
                {companyInfo && (
                    <div className="contact-details">
                        <p><strong>البريد الإلكتروني:</strong> <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a></p>
                        <p><strong>الهاتف:</strong> <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a></p>
                        <p>نحن هنا للإجابة على استفساراتكم ومساعدتكم في مشاريعكم القادمة.</p>
                    </div>
                )}
            </section>

            <footer className="main-footer">
                <p>&copy; {new Date().getFullYear()} {companyInfo?.name || 'شركة الهدوني للمقاولات'}. جميع الحقوق محفوظة.</p>
            </footer>
        </div>
    );
};

export default ProjectsGallery;

