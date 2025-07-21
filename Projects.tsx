// Projects.tsx - The beautiful face of your empire
import React, { useState, useEffect } from 'react';

// تعريف نوع البيانات للمشروع لضمان التوافق مع الواجهة الخلفية
// Defining the data type to ensure harmony with the backend
interface Project {
    id: number;
    title: string;
    description: string;
    image_url: string;
}

const ProjectsGallery: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // جلب البيانات من الخادم المكتوب بلغة Rust
        // Fetching data from our powerful Rust server
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Project[] = await response.json();
                setProjects(data);
            } catch (err) {
                setError('Failed to fetch projects. The server might be sleeping.');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return <p>Loading masterpieces...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="projects-container">
            <h2>Our Legacy in Concrete and Steel</h2>
            <div className="gallery">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image_url} alt={project.title} />
                        <div className="card-overlay">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <button>Explore 3D Model</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsGallery;
