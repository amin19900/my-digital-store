const translations = {
  en: {
    site_title: "My Digital Store",
    site_name: "My Digital Store",
    nav_home: "Home",
    nav_shop: "Shop",
    nav_contact: "Contact",
    welcome_title: "Welcome to the best store!",
    welcome_msg: "We offer the best products at the best prices.",
    btn_shop_now: "Shop Now"
  },
  fr: {
    site_title: "Ma Boutique Digitale",
    site_name: "Ma Boutique Digitale",
    nav_home: "Accueil",
    nav_shop: "Boutique",
    nav_contact: "Contact",
    welcome_title: "Bienvenue dans la meilleure boutique !",
    welcome_msg: "Nous offrons les meilleurs produits aux meilleurs prix.",
    btn_shop_now: "Acheter maintenant"
  },
  ar: {
    site_title: "متجري الرقمي",
    site_name: "متجري الرقمي",
    nav_home: "الرئيسية",
    nav_shop: "المتجر",
    nav_contact: "اتصل بنا",
    welcome_title: "مرحبا بكم في أفضل متجر!",
    welcome_msg: "نحن نقدم أفضل المنتجات بأفضل الأسعار.",
    btn_shop_now: "تسوق الآن"
  }
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
    if (key === 'site_title') {
      document.title = translations[lang][key];
    }
  });
}

// تعيين اللغة الافتراضية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  changeLanguage('en');  // أو يمكنك تغييرها للعربية 'ar' أو الفرنسية 'fr'
});
