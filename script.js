const videos = [
  { id: '7Tt8UJc52VA', title: 'Pulse / 01', category: 'Edit + rhythm' },
  { id: 'Lfnhl-CejII', title: 'Afterlight / 02', category: 'Visual story' },
  { id: 'bc5iZhZ_4nw', title: 'Still moving / 03', category: 'Motion study' },
  { id: 'zNVi_a9K4FY', title: 'Frequency / 04', category: 'Short form' },
  { id: 'MZIEGxQmINQ', title: 'In focus / 05', category: 'Visual story' },
  { id: 'tKtx3azYqsw', title: 'Drift / 06', category: 'Edit + rhythm' },
  { id: '-85ig-Aa78I', title: 'Electric / 07', category: 'Motion study' },
  { id: '7ojWBSV7v3w', title: 'The cut / 08', category: 'Short form' }
];

const translations = {
  en: {
    navWork:'Work', navAbout:'About', navServices:'Services', navContact:'Contact', eyebrow:'Independent visual storyteller', heroLineOne:'Frames with', heroAccent:'feeling.', heroLineTwo:'Motion with purpose.', heroText:'I’m Abderrahmane, a video editor and motion designer helping ambitious people and brands turn ideas into visuals that stay with you.', viewWork:'View selected work', startProject:'Start a project', years:'years experience', disciplines:'creative disciplines', pointOfView:'point of view', available:'Available for freelance projects', selectedWork:'Selected work', workTitle:'A few things<br><em>in motion.</em>', workIntro:'Short-form edits, visual experiments, and stories built frame by frame.', aboutEyebrow:'The person behind the cut', aboutTitle:'Good work feels<br><em>like something.</em>', aboutText:'With four years behind the timeline, I care about the details people feel before they notice: the rhythm of a cut, the weight of a pause, the colour that makes a moment land.', aboutTextTwo:'Whether it is a social film, a kinetic title sequence, or a quiet portrait, I bring a precise eye and a human point of view to every frame.', letsTalk:'Let’s talk about yours', servicesEyebrow:'What I do', servicesTitle:'From first idea<br><em>to final frame.</em>', serviceOneTitle:'Video editing', serviceOneText:'Story-led cuts for social, campaigns, reels, and long-form content.', serviceTwoTitle:'Motion design', serviceTwoText:'Kinetic typography, transitions, and animated worlds that move with intention.', serviceThreeTitle:'Graphic design', serviceThreeText:'Visual systems and assets that make the idea recognisable at a glance.', serviceFourTitle:'Photography', serviceFourText:'Character, atmosphere, and honest images with a strong visual point of view.', contactEyebrow:'Have a project in mind?', contactTitle:'Let’s make<br><em>something move.</em>', contactText:'Tell me what you are building, what it should feel like, and where it needs to go.', callMe:'Call me', footerText:'Video editor · Motion designer · Visual storyteller'
  },
  fr: {
    navWork:'Projets', navAbout:'À propos', navServices:'Services', navContact:'Contact', eyebrow:'Conteur visuel indépendant', heroLineOne:'Des images avec', heroAccent:'du feeling.', heroLineTwo:'Du mouvement, du sens.', heroText:'Je suis Abderrahmane, monteur vidéo et motion designer. J’aide les personnes et les marques ambitieuses à transformer leurs idées en images qui restent.', viewWork:'Voir mes projets', startProject:'Démarrer un projet', years:'ans d’expérience', disciplines:'disciplines créatives', pointOfView:'vision singulière', available:'Disponible pour des projets freelance', selectedWork:'Projets sélectionnés', workTitle:'Quelques images<br><em>en mouvement.</em>', workIntro:'Montages courts, expériences visuelles et histoires construites image par image.', aboutEyebrow:'Derrière le montage', aboutTitle:'Un bon projet<br><em>se ressent.</em>', aboutText:'Avec quatre années derrière la timeline, je travaille les détails que l’on ressent avant de les remarquer : le rythme d’une coupe, le poids d’un silence, la couleur qui donne vie à un instant.', aboutTextTwo:'Film social, générique animé ou portrait intime : j’apporte à chaque image un regard précis et profondément humain.', letsTalk:'Parlons de votre projet', servicesEyebrow:'Mon savoir-faire', servicesTitle:'De la première idée<br><em>à la dernière image.</em>', serviceOneTitle:'Montage vidéo', serviceOneText:'Des montages pensés pour les réseaux, les campagnes, les reels et les formats longs.', serviceTwoTitle:'Motion design', serviceTwoText:'Typographie animée, transitions et univers graphiques en mouvement.', serviceThreeTitle:'Design graphique', serviceThreeText:'Des systèmes visuels qui rendent votre idée immédiatement reconnaissable.', serviceFourTitle:'Photographie', serviceFourText:'Des images sincères, avec du caractère et un regard visuel affirmé.', contactEyebrow:'Un projet en tête ?', contactTitle:'Faisons bouger<br><em>les idées.</em>', contactText:'Parlez-moi de ce que vous construisez, de ce que cela doit faire ressentir et de sa destination.', callMe:'M’appeler', footerText:'Monteur vidéo · Motion designer · Conteur visuel'
  },
  ar: {
    navWork:'الأعمال', navAbout:'عني', navServices:'الخدمات', navContact:'تواصل', eyebrow:'صانع قصص بصرية مستقل', heroLineOne:'إطارات مليئة', heroAccent:'بالإحساس.', heroLineTwo:'وحركة لها معنى.', heroText:'أنا عبد الرحمان، محرر فيديو ومصمم موشن أساعد الأشخاص والعلامات الطموحة على تحويل أفكارهم إلى صور تبقى في الذاكرة.', viewWork:'شاهد أعمالي', startProject:'ابدأ مشروعاً', years:'سنوات خبرة', disciplines:'تخصصات إبداعية', pointOfView:'رؤية خاصة', available:'متاح للمشاريع المستقلة', selectedWork:'أعمال مختارة', workTitle:'بعض الأشياء<br><em>في حركة.</em>', workIntro:'مونتاجات قصيرة وتجارب بصرية وقصص تُبنى إطاراً بعد إطار.', aboutEyebrow:'الشخص خلف المونتاج', aboutTitle:'العمل الجيد<br><em>يشعرك بشيء.</em>', aboutText:'بعد أربع سنوات خلف خط الزمن، أهتم بالتفاصيل التي يشعر بها الناس قبل أن يلاحظوها: إيقاع القطع، ثقل الصمت، واللون الذي يمنح اللحظة قوتها.', aboutTextTwo:'سواء كان فيلماً اجتماعياً أو عناوين متحركة أو صورة هادئة، أضع نظرة دقيقة ولمسة إنسانية في كل إطار.', letsTalk:'لنتحدث عن مشروعك', servicesEyebrow:'ماذا أقدم', servicesTitle:'من الفكرة الأولى<br><em>إلى الإطار الأخير.</em>', serviceOneTitle:'تحرير الفيديو', serviceOneText:'مونتاج قصصي للمحتوى الاجتماعي والحملات والمقاطع القصيرة والطويلة.', serviceTwoTitle:'تصميم الحركة', serviceTwoText:'نصوص متحركة وانتقالات وعوالم بصرية تتحرك بقصد.', serviceThreeTitle:'التصميم الجرافيكي', serviceThreeText:'أنظمة وعناصر بصرية تجعل فكرتك واضحة من النظرة الأولى.', serviceFourTitle:'التصوير الفوتوغرافي', serviceFourText:'صور صادقة تحمل الشخصية والأجواء ونظرة بصرية واضحة.', contactEyebrow:'لديك مشروع في ذهنك؟', contactTitle:'لنجعل<br><em>شيئاً يتحرك.</em>', contactText:'أخبرني بما تبنيه، وما الإحساس الذي تريده، وإلى أين يجب أن يصل.', callMe:'اتصل بي', footerText:'محرر فيديو · مصمم حركة · صانع قصص بصرية'
  }
};

const projectGrid = document.querySelector('#projectGrid');
const modal = document.querySelector('#videoModal');
const frame = document.querySelector('#videoFrame');
const modalTitle = document.querySelector('#modalTitle');
const youtubeLink = document.querySelector('#youtubeLink');

function renderProjects() {
  projectGrid.innerHTML = videos.map((video, index) => `
    <article class="project-card" data-video="${video.id}" data-title="${video.title}">
      <img src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg" alt="${video.title} portfolio preview" loading="lazy">
      <span class="play-icon">▶</span>
      <div class="project-info"><div class="project-number">0${index + 1}</div><h3 class="project-title">${video.title}</h3><div class="project-category">${video.category}</div></div>
    </article>`).join('');
  document.querySelectorAll('.project-card').forEach(card => card.addEventListener('click', () => openVideo(card.dataset.video, card.dataset.title)));
}

function openVideo(id, title) {
  frame.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  modalTitle.textContent = title;
  youtubeLink.href = `https://youtu.be/${id}`;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeVideo() {
  frame.src = '';
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-close-modal]').forEach(element => element.addEventListener('click', closeVideo));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeVideo(); });

document.querySelectorAll('.theme-btn').forEach(button => button.addEventListener('click', () => {
  document.documentElement.dataset.theme = button.dataset.theme;
  document.querySelectorAll('.theme-btn').forEach(item => item.classList.toggle('is-active', item === button));
}));

document.querySelectorAll('.lang-btn').forEach(button => button.addEventListener('click', () => {
  const language = button.dataset.lang;
  const direction = language === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = language;
  document.documentElement.dir = direction;
  document.body.dir = direction;
  document.querySelectorAll('[data-i18n]').forEach(element => { element.innerHTML = translations[language][element.dataset.i18n]; });
  document.querySelectorAll('.lang-btn').forEach(item => item.classList.toggle('is-active', item === button));
}));

renderProjects();
