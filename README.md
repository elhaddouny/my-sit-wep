# مشروع موقع شركة الهدوني للمقاولات العالمية

هذا المشروع يمثل موقعاً إلكترونياً متطوراً لشركة الهدوني للمقاولات، مبني على بنية قوية تجمع بين الأداء العالي والأمان.

## المكونات التقنية:

-   **الواجهة الخلفية (Backend):** Rust مع إطار العمل Actix Web.
-   **الواجهة الأمامية (Frontend):** React مع TypeScript.

## هيكل المشروع:

```
alhadouni_global_website/
├── backend_rust/       # يحتوي على كود الواجهة الخلفية بـ Rust
│   ├── Cargo.toml
│   └── src/
│       └── main.rs
├── frontend/           # يحتوي على كود الواجهة الأمامية بـ React و TypeScript
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProjectsGallery.tsx
│   │   │   └── styles.css
│   │   └── App.tsx
│   └── package.json
└── README.md
```

## كيفية التشغيل:

لتشغيل هذا المشروع، ستحتاج إلى تثبيت Rust و Node.js (مع npm أو yarn).

### 1. تشغيل الواجهة الخلفية (Rust Backend)

1.  **انتقل إلى مجلد الواجهة الخلفية:**
    ```bash
    cd alhadouni_global_website/backend_rust
    ```
2.  **تثبيت التبعيات:**
    تأكد من أن ملف `Cargo.toml` يحتوي على التبعيات التالية:
    ```toml
    [dependencies]
    actix-web = "4.4"
    serde = { version = "1.0", features = ["derive"] }
    tokio = { version = "1.0", features = ["full"] }
    actix-cors = "0.6"
    env_logger = "0.11" # أضف هذا السطر إذا لم يكن موجوداً
    ```
    ثم قم بتثبيت التبعيات:
    ```bash
    cargo build
    ```
3.  **تشغيل الخادم:**
    ```bash
    cargo run
    ```
    سيتم تشغيل الخادم على `http://127.0.0.1:8080`.

### 2. تشغيل الواجهة الأمامية (React Frontend)

1.  **انتقل إلى مجلد الواجهة الأمامية:**
    ```bash
    cd alhadouni_global_website/frontend
    ```
2.  **تثبيت التبعيات:**
    ```bash
    npm install
    # أو إذا كنت تستخدم yarn:
    # yarn install
    ```
3.  **تشغيل تطبيق React:**
    ```bash
    npm start
    # أو إذا كنت تستخدم yarn:
    # yarn start
    ```
    سيتم فتح التطبيق في متصفحك الافتراضي على `http://localhost:3000` (عادةً).

### ملاحظات هامة:

*   تأكد من أن الواجهة الخلفية (Rust) تعمل قبل تشغيل الواجهة الأمامية (React)، حيث أن الواجهة الأمامية تعتمد على البيانات المقدمة من الواجهة الخلفية.
*   يمكنك تعديل البيانات الوهمية للمشاريع ومعلومات الشركة في ملف `backend_rust/src/main.rs`.
*   لإضافة صور المشاريع، ضعها في مجلد `public` داخل مجلد `frontend` (مثال: `frontend/public/images/sky-tower.jpg`) وتأكد من تحديث المسارات في كود Rust لتطابقها.

أتمنى لك تجربة ممتعة في استكشاف هذا المشروع المتقدم!

