function login() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (username === "" || email === "" || password === "") {
    alert("الرجاء ملء جميع الحقول");
  } else {
    alert("تم تسجيل الدخول بنجاح!");
    // تغيير هذه الصفحة حسب المكان الذي تريد تحويل المستخدم إليه
    window.location.href = "index_ar.html";
  }
}

function changeLang(lang) {
  if (lang === 'ar') {
    window.location.href = "index_ar.html";
  } else if (lang === 'fr') {
    window.location.href = "index_fr.html";
  } else if (lang === 'en') {
    window.location.href = "index_en.html";
  }
}
