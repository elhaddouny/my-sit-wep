// main.rs - The core of your digital fortress
use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};
use serde::Serialize;

// تعريف هيكل بيانات المشروع
// The blueprint for your projects
#[derive(Serialize)]
struct Project {
    id: u32,
    title: String,
    description: String,
    image_url: String,
    model_3d_url: Option<String>, // رابط اختياري للنموذج ثلاثي الأبعاد
}

// دالة وهمية لجلب المشاريع (في الواقع ستتصل بقاعدة البيانات)
// A function to fetch your masterpieces
fn get_projects_from_db() -> Vec<Project> {
    vec![
        Project {
            id: 1,
            title: "مشروع برج السماء".to_string(),
            description: "برج سكني فاخر يلامس السحاب في قلب العاصمة.".to_string(),
            image_url: "/images/sky-tower.jpg".to_string(),
            model_3d_url: Some("/models/sky-tower.glb".to_string()),
        },
        Project {
            id: 2,
            title: "مجمع الواحة السكني".to_string(),
            description: "مجمع فلل بتصميم عصري يوفر أسلوب حياة هادئ.".to_string(),
            image_url: "/images/oasis-villas.jpg".to_string(),
            model_3d_url: None,
        },
        Project {
            id: 3,
            title: "جسر المستقبل".to_string(),
            description: "جسر معلق يمثل تحفة هندسية ويربط بين ضفتي المدينة.".to_string(),
            image_url: "/images/future-bridge.jpg".to_string(),
            model_3d_url: Some("/models/future-bridge.glb".to_string()),
        },
    ]
}

// تعريف نقطة النهاية (Endpoint) التي ستوفر بيانات المشاريع
// This is where the magic happens: serving project data
#[get("/api/projects")]
async fn fetch_projects() -> impl Responder {
    let projects = get_projects_from_db();
    HttpResponse::Ok().json(projects)
}

// الدالة الرئيسية التي تشغل الخادم
// The main engine that starts the server
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("🚀 Server starting at http://127.0.0.1:8080");

    HttpServer::new(|| {
        App::new()
            .service(fetch_projects)
            // يمكنك إضافة خدمات أخرى هنا (مثل التعامل مع نموذج الاتصال)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
