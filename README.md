# 🏛️ Altaysel.az — Architectural Bureau Website

🔗 [Visit Live Site](https://altaysel.az/)  
🎨 UI design by [Lali Bagrationi](https://www.behance.net/ebb49210) · Built by [Daker.site](https://daker.site)

**Altaysel.az** is a professionally designed and developed Laravel-based website for a historical architectural bureau founded in the 1960s. The platform allows the team to showcase their rich portfolio of architectural projects across Azerbaijan, categorized by year, region, and project type.

---

## ✨ Key Features

- 🗺️ **Interactive Map**  
  Custom-built map allows users to browse architectural projects geographically, by region.

- 🧰 **Admin Dashboard**  
  Admins can:
  - Add/edit architectural projects
  - Upload project media
  - Assign projects to regions and years
  - Manage services and news
  - Preview live project updates instantly

- 📰 **News Module**  
  Add and manage news about company activity and industry insights.

- 📆 **Project Archive by Year**  
  Since the bureau has been active since the 1960s, projects are structured historically and filterable by year.

- 📤 **Social Media Sharing**  
  Each project page can be shared directly to social media platforms (Facebook, Twitter, WhatsApp, Telegram, etc.)

- 🌐 **Multi-language Ready**  
  Website architecture is prepared for internationalization.

---

## ⚙️ Tech Stack

| Layer           | Technology            |
|----------------|------------------------|
| **Backend**     | Laravel (PHP)          |
| **Frontend**    | Blade templates + JS   |
| **Database**    | MySQL                  |
| **Styling**     | Tailwind CSS           |
| **Map**         | Custom interactive JS map (geo-linked projects) |
| **Routing**     | Laravel routes/web.php |
| **SEO**         | Metadata, sharing-ready links |

---

## 📸 Screenshots

> _You can add screenshots later:_  
> - Interactive map UI  
> - Project detail page  
> - Admin dashboard (project editor)  
> - Social share preview

---

## 🚀 Installation (Local Dev)

```bash
git clone https://github.com/dakerdenis/altaysel.az.git
cd altaysel.az

composer install
npm install && npm run build

cp .env.example .env
php artisan key:generate
php artisan migrate
# altaysel-architect
