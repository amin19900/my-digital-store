// الترجمة الديناميكية
const translations = {
  ar: {
    welcome: "مرحبا بك في متجرنا الرقمي!",
    addToCart: "أضف إلى السلة",
  },
  en: {
    welcome: "Welcome to our digital store!",
    addToCart: "Add to Cart",
  },
  fr: {
    welcome: "Bienvenue dans notre boutique numérique!",
    addToCart: "Ajouter au panier",
  },
};

// تغيير اللغة حسب الزر
function setLanguage(lang) {
  const welcomeElement = document.getElementById("welcome-msg");
  const buttons = document.querySelectorAll(".btn");

  if (welcomeElement) {
    welcomeElement.innerText = translations[lang].welcome;
  }

  buttons.forEach(btn => {
    btn.innerText = translations[lang].addToCart;
  });
}

// بيانات رمزية للمنتوجات
const sampleProducts = [
  {
    id: 1,
    name: "سماعات بلوتوث",
    price: "199 درهم",
    image: "https://via.placeholder.com/200x200?text=سماعات"
  },
  {
    id: 2,
    name: "حاسوب محمول",
    price: "4999 درهم",
    image: "https://via.placeholder.com/200x200?text=حاسوب"
  },
  {
    id: 3,
    name: "ساعة ذكية",
    price: "349 درهم",
    image: "https://via.placeholder.com/200x200?text=ساعة"
  },
  {
    id: 4,
    name: "هاتف ذكي",
    price: "2999 درهم",
    image: "https://via.placeholder.com/200x200?text=هاتف"
  },
  {
    id: 5,
    name: "كاميرا رقمية",
    price: "1499 درهم",
    image: "https://via.placeholder.com/200x200?text=كاميرا"
  }
];

// عرض المنتوجات
function displayProducts() {
  const container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = "";

  sampleProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius: 8px;" />
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button class="btn">أضف إلى السلة</button>
    `;
    container.appendChild(div);
  });
}

// عند تحميل الصفحة
window.onload = () => {
  displayProducts();

  // لغة افتراضية: عربية
  setLanguage("ar");

  // أحداث الأزرار لتغيير اللغة
  document.getElementById("btn-ar")?.addEventListener("click", () => setLanguage("ar"));
  document.getElementById("btn-en")?.addEventListener("click", () => setLanguage("en"));
  document.getElementById("btn-fr")?.addEventListener("click", () => setLanguage("fr"));
};
