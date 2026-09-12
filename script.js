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
      whyHeading: 'What do our project partners gain from day one',
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
      heroTagline: ' Your furniture manufacturing partner for your projects',
      heroStats: '15 years · 900+ projects · 150,000+ units delivered',

      aboutHeading: 'We are here to bring a professional approach and aesthetic touches to your projects',
      aboutP1: 'Operating in Samsun for 15 years, Idema Mobilya has been the preferred choice for the regions premier projects. With a 4,000 m² factory featuring automation and AI-supported production infrastructure, the company operates at the highest level of manufacturing standards. It provides comprehensive support throughout your project—from inception to completion—leveraging its in-house team of interior architects.',
      aboutP2: '',
      aboutList1Title: 'Customized solutions for your projects',
      aboutList1Desc: "Tailored modular systems designed around your brand's exact dimensions, materials and use case.",
      aboutList2Title: 'Top-tier production quality',
      aboutList2Desc: 'Long-lasting service that maintains the same precision and durability in every production run.',
      aboutList3Title: 'architectural support',
      aboutList3Desc: 'Support team from product manufacturing to assembly',
      aboutCardFacility: 'FACILITY / SAMSUN, TR',
      aboutCardPhase: 'PHASE 01',
      aboutCardArea: '4,000 M² · PHASE 1',
      aboutCardCapacity: '3–5K UNITS / MO',

      factoryFeat1Title: 'CNC cutting technology',
      factoryFeat1Desc: 'Advanced CNC lines hold panel tolerances consistent across every production run, regardless of order size.',
      factoryFeat2Title: 'Automated production lines',
      factoryFeat2Desc: 'Dedicated, automated sections move raw panel to finished module with minimal manual handling.',
      factoryFeat3Title: 'in-house architecture',
      factoryFeat3Desc: 'Our architectural team manages every stage in-house, from technical drawings to final installation',
      factoryFeat4Title: 'Quality control systems',
      factoryFeat4Desc: 'Professional QC checkpoints ensure consistency, precision and long-term product reliability.',

      whyItem1: '<strong>Flexible production structure</strong> — It adapts to technical requirements and customer requests in your project.',
      whyItem2: '<strong>Transparent communication</strong> — The process proceeds transparently, from the initial stages of production through to final assembly.',
      whyItem4: '<strong>After-sales services</strong> — The support team is by your side at all times after the project is completed.',

      productsHeading: 'Spaces <em>Custom</em>, Built your Project',

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
      whyHeading: 'Proje ortaklarımız ilk günden itibaren ne kazanıyor',
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
      heroTagline: 'Projelerinizde mobilya üretim ortağınız',
      heroStats: '15 yıl · 900+ proje · 150.000+ ünite teslim edildi',

      aboutHeading: 'Projelerinizde profesyonel yaklaşım ve estetik dokunuşlar için buradayız',
      aboutP1: '15 yıldır Samsun`da faaliyet gösteren İDEMA mobilya bölgenin en iyi projelerinde tercih edilmiştir. 4000 m² fabrika alanı otomasyon ve yapay zeka destekli üretim alt yapısıyla üretim standartlarında üst düzey noktadadır. Bünyesinde bulunan iç mimarları ile projenizin en başından en sonuna kadar size destek vermektedir.',
      aboutP2: "",
      aboutList1Title: 'Projelerinizde özel çözümler',
      aboutList1Desc: 'Markanızın tam ölçülerine, malzemelerine ve kullanım amacına göre tasarlanmış modüler sistemler.',
      aboutList2Title: 'Üst düzey üretim kalitesi ',
      aboutList2Desc: 'Her üretimde aynı hassasiyeti ve dayanıklılığı koruyan uzun ömürlü hizmet.',
      aboutList3Title: 'Mimari destek',
      aboutList3Desc: 'Ürün üretiminden montajına kadar destek ekibi.',
      aboutCardFacility: 'TESİS / SAMSUN, TR',
      aboutCardPhase: 'FAZ 01',
      aboutCardArea: '4.000 M² · FAZ 1',
      aboutCardCapacity: 'AYDA 3–5K ÜNİTE',

      factoryFeat1Title: 'CNC kesim teknolojisi',
      factoryFeat1Desc: 'Gelişmiş CNC hatları, sipariş büyüklüğünden bağımsız olarak her üretimde panel toleranslarını tutarlı tutar.',
      factoryFeat2Title: 'Otomatik üretim hatları',
      factoryFeat2Desc: 'Özel, otomatik bölümler ham paneli minimum manuel müdahaleyle bitmiş modüle dönüştürür.',
      factoryFeat3Title: 'Bünyemizde mimarlık',
      factoryFeat3Desc: 'Mimar ekibimiz teknik çizimden nihai montaja kadar her aşamayı kendi bünyemizde yönetir.',
      factoryFeat4Title: 'Kalite kontrol sistemleri',
      factoryFeat4Desc: 'Profesyonel KK kontrol noktaları, tutarlılığı, hassasiyeti ve uzun ömürlü ürün güvenilirliğini garanti eder.',

      whyItem1: '<strong>Esnek üretim yapısı</strong> — Projenizde teknik ihtiyaçlara ve müşteri isteklerine uyum sağlar.',
      whyItem2: '<strong>Şeffaf iletişim</strong> — Ürünlerin üretiminin ilk başından montaj sonuna kadar süreç şeffaf bir şekilde devam eder.',
      whyItem4: '<strong>Satış sonrası hizmetler</strong> —  Proje bitiminden itibaren her an destek ekibi yanınızda.',

      productsHeading: 'Projenize Uyumlu Üretilen <em> Mekanlar</em>',

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

