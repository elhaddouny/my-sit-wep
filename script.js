document.addEventListener('DOMContentLoaded', function() {
    // بيانات وهمية لصور المشاريع
    // في موقع حقيقي، سيتم جلب هذه البيانات من الواجهة الخلفية (Backend)
    const projects = [
        { imageUrl: 'https://images.unsplash.com/photo-1511064329936-5c6331de65a8?q=80&w=1935&auto=format&fit=crop', alt: 'مشروع بناء فيلا' },
        { imageUrl: 'https://images.unsplash.com/photo-1581092446347-a56c5b3a9e8b?q=80&w=2070&auto=format&fit=crop', alt: 'مشروع بنية تحتية' },
        { imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6164a83639?q=80&w=2070&auto=format&fit=crop', alt: 'مشروع تصميم داخلي' },
        { imageUrl: 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=1974&auto=format&fit=crop', alt: 'مشروع تجاري' },
        { imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', alt: 'مشروع برج سكني' },
        { imageUrl: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=2071&auto=format&fit=crop', alt: 'مشروع جسر' }
    ];

    const gallery = document.querySelector('.project-gallery');

    // إضافة الصور إلى معرض المشاريع
    projects.forEach(project => {
        const imgElement = document.createElement('img');
        imgElement.src = project.imageUrl;
        imgElement.alt = project.alt;
        gallery.appendChild(imgElement);
    });

    // تأثير التمرير السلس للروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
