// ===========================================================
// İDEMA — header behaviour
// ===========================================================
(function () {
  let currentLang = 'tr';
  const header = document.getElementById('siteHeader');
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');

  function updateHeaderState() {
    if (!header) return;
    if (window.scrollY > 12) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const translations = {
    en: {
      home: 'HOME',
      about: 'ABOUT US',
      factory: 'FACTORY',
      why: 'WHY İDEMA?',
      products: 'PRODUCT SHOWCASE',
      contact: 'CONTACT US',
      factoryEyebrow: 'FACILITY / SAMSUN, TR',
      factoryHeading: 'Precision-built production, from raw panel to finished module',
      whyEyebrow: 'WHY İDEMA',
      whyHeading: 'What partners get from day one',
      contactEyebrow: 'GET IN TOUCH',
      contactHeading: "İdema Mobilya began its manufacturing journey with these three mottos: Idea, Intelligent and Impact.",
      contactAddressLabel: 'ADDRESS',
      contactEmailLabel: 'EMAIL',
      contactPhoneLabel: 'PHONE',
      contactCoordsLabel: 'OUR SOCIAL MEDIA ACCOUNTS',
      contactMessageLabel: 'MESSAGE',
      contactMessagePlaceholder: 'Tell us about volumes, product type and target market...',
      contactSend: 'SEND MESSAGE',
      contactSending: 'SENDING...',
      contactSuccess: "Thanks — we'll get back to you within one business day.",
      contactError: 'Please fill in a valid email before sending.',
      heroEyebrow: 'Manufacturing Partner',
      heroTagline: 'Your modular furniture manufacturing partner',
      heroStats: '14 years · 900+ projects · 150,000+ units delivered',

      aboutHeading: 'Manufacturing is a long-term partnership, not a transaction',
      aboutP1: 'For 14 years, İDEMA has been serving national and international markets through scalable and reliable manufacturing.We support our distributors, retail customers, and project-based businesses with manufacturing capabilities that adapt to their specific models and technical requirements.',
      aboutP2: '',
      aboutList1Title: 'Custom modular solutions',
      aboutList1Desc: "Tailored modular systems designed around your brand's exact dimensions, materials and use case.",
      aboutList2Title: 'Flat-pack furniture systems',
      aboutList2Desc: 'Space-efficient, easy-to-ship flat-pack designs engineered for fast, tool-light assembly.',
      aboutList3Title: 'Panel furniture production',
      aboutList3Desc: 'High-volume panel manufacturing with consistent quality across every batch.',
      aboutCardFacility: 'FACILITY / SAMSUN, TR',
      aboutCardPhase: 'PHASE 01',
      aboutCardArea: '4,000 M² · PHASE 1',
      aboutCardCapacity: '3–5K UNITS / MO',

      factoryFeat1Title: 'CNC cutting technology',
      factoryFeat1Desc: 'Advanced CNC lines hold panel tolerances consistent across every production run, regardless of order size.',
      factoryFeat2Title: 'Automated production lines',
      factoryFeat2Desc: 'Dedicated, automated sections move raw panel to finished module with minimal manual handling.',
      factoryFeat3Title: 'In-house engineering',
      factoryFeat3Desc: 'Our engineering team manages every stage internally — from technical drawing to final assembly spec.',
      factoryFeat4Title: 'Quality control systems',
      factoryFeat4Desc: 'Professional QC checkpoints ensure consistency, precision and long-term product reliability.',

      whyItem1: '<strong>Flexible production structure</strong> —  Adapts to your business model, technical requirements, and customer needs.',
      whyItem2: '<strong>Scalable capacity</strong> — 15,000 to 23,000 units a month, for standard collections and custom projects alike.',
      whyItem3: '<strong>Transparent communication</strong> — structured planning and on-time delivery, treated as a standing commitment.',
      whyItem4: '<strong>End-to-end in-house control</strong> — engineering, cutting, assembly and QC under one roof.',

      productsHeading: 'Crafted <em>Interiors</em>, Delivered at Scale',

      contactAddressValue: 'Toybelen Mah. 1172. Sk. No:49<br>İlkadım / Samsun, Türkiye',
      
    },
    tr: {
      home: 'ANA SAYFA',
      about: 'HAKKIMIZDA',
      factory: 'FABRİKA',
      why: 'NEDEN İDEMA?',
      products: 'ÜRÜNLER',
      contact: 'İLETİŞİM',
      factoryEyebrow: 'TESİS / SAMSUN, TR',
      factoryHeading: 'Ham panelden bitmiş modüle, hassas üretim',
      whyEyebrow: 'NEDEN İDEMA',
      whyHeading: 'Partnerlerimiz ilk günden neler kazanıyor',
      contactEyebrow: 'BİZE ULAŞIN',
      contactHeading: 'İdema Mobilya üretim hayatına şu 3 motto ile başlamıştır: Idea, Intelligent and Impact',
      contactAddressLabel: 'ADRES',
      contactEmailLabel: 'E-POSTA',
      contactPhoneLabel: 'TELEFON',
      contactCoordsLabel: 'SOSYAL MEDYA HESAPLARIMIZ',
      contactMessageLabel: 'MESAJ',
      contactMessagePlaceholder: 'Hacim, ürün tipi ve hedef pazarınızdan bahsedin...',
      contactSend: 'MESAJ GÖNDER',
      contactSending: 'GÖNDERİLİYOR...',
      contactSuccess: 'Teşekkürler — bir iş günü içinde size dönüş yapacağız.',
      contactError: 'Göndermeden önce geçerli bir e-posta girin.',
      heroEyebrow: 'Üretim Ortağı',
      heroTagline: 'Modüler mobilya üretim ortağınız',
      heroStats: '14 yıl · 900+ proje · 150.000+ ünite teslim edildi',

      aboutHeading: 'Üretim, tek seferlik bir işlem değil uzun soluklu bir ortaklıktır',
      aboutP1: 'İDEMA, 14 yıldır ölçeklenebilir ve güvenilir üretimle ulusal ve uluslararası pazarlara hizmet veriyor. Distribütörleri, perakende müşteri ve proje bazlı işletmeleri, kendi modellerine ve teknik gereksinimlerine  destekliyoruz.',
      aboutP2: "",
      aboutList1Title: 'Özel modüler çözümler',
      aboutList1Desc: 'Markanızın tam ölçülerine, malzemelerine ve kullanım amacına göre tasarlanmış modüler sistemler.',
      aboutList2Title: 'Flat-pack mobilya sistemleri',
      aboutList2Desc: 'Hızlı ve az araçla kurulum için tasarlanmış, alandan tasarruf sağlayan, kolay sevkiyat edilebilir flat-pack tasarımlar.',
      aboutList3Title: 'Panel mobilya üretimi',
      aboutList3Desc: 'Her partide tutarlı kalite sunan yüksek hacimli panel üretimi.',
      aboutCardFacility: 'TESİS / SAMSUN, TR',
      aboutCardPhase: 'FAZ 01',
      aboutCardArea: '4.000 M² · FAZ 1',
      aboutCardCapacity: 'AYDA 3–5K ÜNİTE',

      factoryFeat1Title: 'CNC kesim teknolojisi',
      factoryFeat1Desc: 'Gelişmiş CNC hatları, sipariş büyüklüğünden bağımsız olarak her üretimde panel toleranslarını tutarlı tutar.',
      factoryFeat2Title: 'Otomatik üretim hatları',
      factoryFeat2Desc: 'Özel, otomatik bölümler ham paneli minimum manuel müdahaleyle bitmiş modüle dönüştürür.',
      factoryFeat3Title: 'Bünyemizde mühendislik',
      factoryFeat3Desc: 'Mühendislik ekibimiz teknik çizimden nihai montaj şartnamesine kadar her aşamayı kendi bünyemizde yönetir.',
      factoryFeat4Title: 'Kalite kontrol sistemleri',
      factoryFeat4Desc: 'Profesyonel KK kontrol noktaları, tutarlılığı, hassasiyeti ve uzun ömürlü ürün güvenilirliğini garanti eder.',

      whyItem1: '<strong>Esnek üretim yapısı</strong> — 1-İş modelinize , teknik ihtiyaçlara ve müşteri isteklerine uyum sağlar',
      whyItem2: '<strong>Ölçeklenebilir kapasite</strong> — hem standart koleksiyonlar hem de özel projeler için ayda 15.000 ila 23.000 ünite.',
      whyItem3: '<strong>Şeffaf iletişim</strong> — yapılandırılmış planlama ve zamanında teslimat, sürekli bir taahhüt olarak ele alınır.',
      whyItem4: '<strong>Uçtan uca kendi bünyemizde kontrol</strong> — mühendislik, kesim, montaj ve KK tek çatı altında.',

      productsHeading: 'Ölçekte Üretilen <em>İç Mekanlar</em>',

      contactAddressValue: 'Toybelen Mah. 1172. Sk. No:49<br>İlkadım / Samsun, Türkiye',
    }
  
  };

  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    const langButtons = langSwitch.querySelectorAll('.lang-btn');

    function setLanguage(lang) {
      const dict = translations[lang];
      if (!dict) return;
      currentLang = lang;  

      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
      });

      document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key]) el.innerHTML = dict[key];
      });
      langButtons.forEach((btn) => {
        btn.classList.toggle('is-active', btn.dataset.lang === lang);
      });

      document.documentElement.setAttribute('lang', lang);
    }

    langButtons.forEach((btn) => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    setLanguage(currentLang);
  }
  
const heroSlides = document.querySelectorAll('.hero-bg-slide');
if (heroSlides.length > 1) {
  let activeIndex = 0;
  setInterval(() => {
    heroSlides[activeIndex].classList.remove('is-active');
    activeIndex = (activeIndex + 1) % heroSlides.length;
    heroSlides[activeIndex].classList.add('is-active');
  }, 3000); 
}

const factoryGallery = document.getElementById('factoryGallery');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');

if (factoryGallery && galleryPrev && galleryNext) {
  const scrollAmount = () => factoryGallery.querySelector('.gallery-item').offsetWidth + 14;

  galleryPrev.addEventListener('click', () => {
    factoryGallery.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });
  galleryNext.addEventListener('click', () => {
    factoryGallery.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

if (lightbox && lightboxImg && factoryGallery) {
  factoryGallery.querySelectorAll('.gallery-item img').forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('is-open');
    });
  });

  const closeLightbox = () => lightbox.classList.remove('is-open');
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

const whyHeadingBlock = document.querySelector('.why-heading-block');
if (whyHeadingBlock) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          whyHeadingBlock.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(whyHeadingBlock);
}

const productsGrid = document.getElementById('productsGrid');
if (lightbox && lightboxImg && productsGrid) {
  productsGrid.querySelectorAll('.product-item img').forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('is-open');
    });
  });
}

const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');
const btnSend = document.getElementById('btnSend');

if (contactForm && contactStatus && btnSend) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const dict = translations[currentLang] || translations.en;
    const emailField = document.getElementById('contactEmail');
    const emailValid = emailField && emailField.checkValidity() && emailField.value.trim() !== '';

    if (!emailValid) {
      contactStatus.textContent = dict.contactError;
      contactStatus.style.color = '#BE5B2C';
      emailField.focus();
      return;
    }

    const originalLabel = btnSend.textContent;
    btnSend.disabled = true;
    btnSend.textContent = dict.contactSending;
    contactStatus.textContent = '';

    const formData = new FormData(contactForm);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    })
      .then((res) => res.json())
      .then((data) => {
        btnSend.disabled = false;
        btnSend.textContent = originalLabel;
        if (data.success) {
          contactStatus.textContent = dict.contactSuccess;
          contactStatus.style.color = '#5B6B4A';
          contactForm.reset();
        } else {
          contactStatus.textContent = dict.contactError;
          contactStatus.style.color = '#BE5B2C';
        }
      })
      .catch(() => {
        btnSend.disabled = false;
        btnSend.textContent = originalLabel;
        contactStatus.textContent = dict.contactError;
        contactStatus.style.color = '#BE5B2C';
      });
  });
}

})();

