let lastScrollTop = 0;
let header = document.querySelector('.site-header');
let isHeaderReduced = false;
const headerHeight = 80;
const currentLanguage = document.documentElement.lang === 'en' ? 'en' : 'es';

const categoryTranslations = {
    "Educación Anatómica": "Anatomy Education",
    "Cirugía": "Surgery",
    "Biomecánica": "Biomechanics",
    "Simulación Clínica": "Clinical Simulation",
    "Rehabilitación": "Rehabilitation",
    "Salud Animal / Veterinaria": "Animal Health / Veterinary Medicine",
    "Telemedicina": "Telemedicine",
    "Instrumentación Biomédica": "Biomedical Instrumentation"
};

document.addEventListener('DOMContentLoaded', function() {
    header = document.querySelector('.site-header');
    if (header) {
        header.style.transition = 'height 0.3s ease, padding 0.3s ease';
    }
    cargarProyectos();
    cargarEquipo();
    iniciarHeroCarousel();
    ajustarPaddingBody();
    setInterval(() => {
        moveCarousel('proyectos', 1);
    }, 5000);
    
    setInterval(() => {
        moveCarousel('equipo', 1);
    }, 6000);
});

let heroCarouselIndex = 0;

function iniciarHeroCarousel() {
    const imgs = document.querySelectorAll('#hero-carousel .hero-carousel-img');
    if (imgs.length < 2) return;
    setInterval(() => {
        imgs[heroCarouselIndex].classList.remove('active');
        heroCarouselIndex = (heroCarouselIndex + 1) % imgs.length;
        imgs[heroCarouselIndex].classList.add('active');
    }, 4000);
}

function ajustarPaddingBody() {
    if (!header) return;
    document.body.style.paddingTop = header.offsetHeight + 'px';
}

function toggleHeaderSize(reduce) {
    if (!header) return;
    if (reduce && !isHeaderReduced) {
        header.classList.add('header-reducido');
        isHeaderReduced = true;
    } else if (!reduce && isHeaderReduced) {
        header.classList.remove('header-reducido');
        isHeaderReduced = false;
    }
    ajustarPaddingBody();
}

window.addEventListener('resize', ajustarPaddingBody);

window.addEventListener('scroll', function() {
    if (!header) return;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 200) {
        toggleHeaderSize(true);
    } else {
        toggleHeaderSize(false);
    }
    if (scrollTop > lastScrollTop && scrollTop > 300) {
        header.style.transform = 'translateY(-100%)';
    } else {         
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const coloresCategoria = {
    "Educación Anatómica": "#68d4f2",
    "Cirugía": "#90ee90",
    "Biomecánica": "#ffa94d",
    "Simulación Clínica": "#fa6de5",
    "Rehabilitación": "#32cd32",
    "Salud Animal / Veterinaria": "#d9a066",
    "Telemedicina": "#8d68e3",
    "Instrumentación Biomédica": "#f5fa6d"
};

const proyectos = [
    {
        id: 1,
        nombre: "Magic Mirror – Miembro Superior",
        nombreEn: "Magic Mirror – Upper Limb",
        categoria: "Educación Anatómica",
        descripcion: "Adapta la ventana AR del espejo mágico al movimiento completo del miembro superior.",
        descripcionEn: "Adapts the augmented-reality window of the magic mirror to the full movement of the upper limb.",
    },
    {
        id: 2,
        nombre: "ARMyo Mirror – Miembro Inferior",
        nombreEn: "ARMyo Mirror – Lower Limb",
        categoria: "Biomecánica",
        descripcion: "Vista híbrida real/virtual que anima la contracción muscular de rodilla, cadera y pie.",
        descripcionEn: "A hybrid real/virtual view that animates muscle contraction in the knee, hip and foot.",
    },
    {
        id: 3,
        nombre: "HoloLearn Anatomy",
        nombreEn: "HoloLearn Anatomy",
        categoria: "Educación Anatómica",
        descripcion: "Exploración gamificada de anatomía 3D en HoloLens 2, con modo libre y serious game.",
        descripcionEn: "Gamified exploration of 3D anatomy on HoloLens 2, with free-exploration and serious-game modes.",
    },
    {
        id: 4,
        nombre: "OculusLearn Anatomy",
        nombreEn: "OculusLearn Anatomy",
        categoria: "Educación Anatómica",
        descripcion: "La misma experiencia gamificada de anatomía, adaptada a Oculus Quest 2 en VR.",
        descripcionEn: "The same gamified anatomy experience adapted to Oculus Quest 2 in virtual reality.",
    },
    {
        id: 5,
        nombre: "AR-Body Atlas Mobile",
        nombreEn: "AR-Body Atlas Mobile",
        categoria: "Educación Anatómica",
        descripcion: "Superpone órganos del tórax y abdomen sobre el cuerpo usando solo un smartphone.",
        descripcionEn: "Overlays thoracic and abdominal organs on the body using only a smartphone.",
    },
    {
        id: 6,
        nombre: "HandXplorer AR",
        nombreEn: "HandXplorer AR",
        categoria: "Educación Anatómica",
        descripcion: "Explora huesos de la mano en RA, aislando y ampliando cada estructura con XREAL.",
        descripcionEn: "Explore hand bones in augmented reality, isolating and enlarging each structure with XREAL.",
    },
    {
        id: 7,
        nombre: "NeuroPlan AR — Planificación Preoperatoria en Neurocirugía",
        nombreEn: "NeuroPlan AR — Preoperative Planning in Neurosurgery",
        categoria: "Cirugía",
        descripcion: "Sistema de RA con HoloLens 2 para navegar MRI, medir y planificar el abordaje quirúrgico sobre modelos 3D del cerebro.",
        descripcionEn: "An AR system with HoloLens 2 for MRI navigation, measurement and surgical approach planning on 3D brain models.",
    },
    {
        id: 8,
        nombre: "Virtual Dissection Hall (VAM)",
        nombreEn: "Virtual Dissection Hall (VAM)",
        categoria: "Educación Anatómica",
        descripcion: "Anfiteatro virtual con cadáver digital a escala real, explorable por sistemas anatómicos.",
        descripcionEn: "A virtual anatomy hall with a life-size digital cadaver that can be explored by anatomical system.",
    },
    {
        id: 9,
        nombre: "Simulador Facial para Anatomía",
        nombreEn: "Facial Anatomy Simulator",
        categoria: "Educación Anatómica",
        descripcion: "Detecta 468 puntos faciales y muestra la activación muscular y nerviosa en tiempo real.",
        descripcionEn: "Detects 468 facial landmarks and displays muscle and nerve activation in real time.",
    },
    {
        id: 10,
        nombre: "ARMyo Mirror – Miembro Superior",
        nombreEn: "ARMyo Mirror – Upper Limb",
        categoria: "Biomecánica",
        descripcion: "Vista híbrida real/virtual que anima la contracción muscular de brazo y antebrazo.",
        descripcionEn: "A hybrid real/virtual view that animates muscle contraction in the arm and forearm.",
    },
    {
        id: 11,
        nombre: "ThorAX",
        nombreEn: "ThorAX",
        categoria: "Educación Anatómica",
        descripcion: "Visor gestual de CT/MR/RX de tórax y abdomen, controlado con las manos vía Kinect v2.",
        descripcionEn: "A gesture-controlled CT/MR/X-ray viewer for the thorax and abdomen using Kinect v2.",
    },
    {
        id: 12,
        nombre: "TransfusionVR",
        nombreEn: "TransfusionVR",
        categoria: "Simulación Clínica",
        descripcion: "Simulador hospitalario en VR para practicar procedimientos de medicina transfusional en equipo.",
        descripcionEn: "A hospital VR simulator for team-based practice of transfusion medicine procedures.",
    },
    {
        id: 13,
        nombre: "Neuromotion VR",
        nombreEn: "Neuromotion VR",
        categoria: "Rehabilitación",
        descripcion: "Controla un avatar en VR mediante imaginación motora captada por EEG (BCI).",
        descripcionEn: "Controls a virtual-reality avatar through motor imagery captured by EEG in a BCI.",
    },
    {
        id: 14,
        nombre: "KinectCalib",
        nombreEn: "KinectCalib",
        categoria: "Rehabilitación",
        descripcion: "Mejora la precisión del esqueleto de Kinect para alinear modelos 3D con el cuerpo real.",
        descripcionEn: "Improves Kinect skeletal accuracy to align 3D models with the real body.",
    },
    {
        id: 15,
        nombre: "VetSim: Anestesia y Cirugía Canina",
        nombreEn: "VetSim: Canine Anesthesia and Surgery",
        categoria: "Salud Animal / Veterinaria",
        descripcion: "Simula el uso de máquina de anestesia y bomba de infusión en cirugía canina.",
        descripcionEn: "Simulates the use of an anesthesia machine and infusion pump in canine surgery.",
    },
    {
        id: 16,
        nombre: "LaparoView VST",
        nombreEn: "LaparoView VST",
        categoria: "Cirugía",
        descripcion: "Muestra el video laparoscópico en una pantalla virtual gigante dentro del visor Meta Quest 3.",
        descripcionEn: "Displays laparoscopic video on a large virtual screen inside a Meta Quest 3 headset.",
    },
    {
        id: 17,
        nombre: "LaparoView OST",
        nombreEn: "LaparoView OST",
        categoria: "Cirugía",
        descripcion: "La misma visualización laparoscópica aumentada, en HoloLens con lentes ópticas transparentes.",
        descripcionEn: "Provides the same augmented laparoscopic visualization on HoloLens with optical see-through lenses.",
    },
    {
        id: 18,
        nombre: "KineMind",
        nombreEn: "KineMind",
        categoria: "Rehabilitación",
        descripcion: "Combina VR y retroalimentación háptica para entrenar memoria y coordinación motora.",
        descripcionEn: "Combines VR and haptic feedback to train memory and motor coordination.",
    },
    {
        id: 19,
        nombre: "Vib-AR",
        nombreEn: "Vib-AR",
        categoria: "Rehabilitación",
        descripcion: "Usa RA y vibración para aliviar el dolor del miembro fantasma mediante ilusión visual de movimiento.",
        descripcionEn: "Uses AR and vibration to reduce phantom-limb pain through a visual movement illusion.",
    },
    {
        id: 20,
        nombre: "BYMAX",
        nombreEn: "BYMAX",
        categoria: "Instrumentación Biomédica",
        descripcion: "Monitorea ECG, SpO2 y temperatura de adultos mayores con IRA en zonas de difícil acceso de Loreto.",
        descripcionEn: "Monitors ECG, SpO2 and temperature in older adults with acute respiratory infections in hard-to-reach areas of Loreto.",
    },
    {
        id: 21,
        nombre: "SONQO",
        nombreEn: "SONQO",
        categoria: "Instrumentación Biomédica",
        descripcion: "Monitorea ECG y SpO2 para prevenir el sobreesfuerzo cardiovascular en rehabilitación post-angioplastía.",
        descripcionEn: "Monitors ECG and SpO2 to prevent cardiovascular overexertion during post-angioplasty rehabilitation.",
    },
    {
        id: 22,
        nombre: "VIVAS",
        nombreEn: "VIVAS",
        categoria: "Instrumentación Biomédica",
        descripcion: "Wearable con ECG, PPG e IMU que detecta estados presincopales y emite alertas preventivas.",
        descripcionEn: "A wearable with ECG, PPG and IMU that detects presyncope states and issues preventive alerts.",
    },
    {
        id: 23,
        nombre: "SAMIWALK",
        nombreEn: "SAMIWALK",
        categoria: "Instrumentación Biomédica",
        descripcion: "Mide el costo fisiológico de la marcha en adultos mayores durante la prueba de caminata de 6 minutos.",
        descripcionEn: "Measures the physiological cost of walking in older adults during the six-minute walk test.",
    },
    {
        id: 24,
        nombre: "S-REHAB",
        nombreEn: "S-REHAB",
        categoria: "Instrumentación Biomédica",
        descripcion: "Wearable con IMU y sEMG que objetiva la rehabilitación del hombro en tiempo real.",
        descripcionEn: "A wearable with IMU and sEMG that objectively assesses shoulder rehabilitation in real time.",
    },
    {
        id: 25,
        nombre: "SpiroApp",
        nombreEn: "SpiroApp",
        categoria: "Instrumentación Biomédica",
        descripcion: "Dispositivo portátil con biofeedback que guía el entrenamiento inspiratorio en rehabilitación pulmonar domiciliaria.",
        descripcionEn: "A portable biofeedback device that guides inspiratory muscle training during home-based pulmonary rehabilitation.",
    },
];

const equipo = [
    {
        id: 1,
        nombre: "M.Sc. Miguel Rogger Hoyos Alvitez",
        iniciales: "RH",
        foto: "https://www.image2url.com/r2/default/images/1784963580476-99180e72-f27d-4e3e-9c43-65dc2fdb5f16.png",
        rol: "Fundador del Laboratorio BioXR Immersive Lab",
        rolEn: "Founder of BioXR Immersive Lab",
        bio: "Docente de la carrera de Ingeniería Biomédica en la Universidad Peruana Cayetano Heredia. Ingeniero biomédico con maestría en Biomédica Computacional por la Universidad Técnica de Múnich (TUM), y más de 7 años de experiencia en tecnologías de Realidad Extendida (XR) aplicadas a la medicina.",
        bioEn: "Faculty member in the Biomedical Engineering program at Universidad Peruana Cayetano Heredia. Biomedical engineer with a master’s degree in Biomedical Computing from the Technical University of Munich (TUM) and more than seven years of experience in Extended Reality (XR) technologies applied to medicine.",
        color: "#68d4f2"
    }
];

let proyectosIndex = 0;
let equipoIndex = 0;

function cargarProyectos() {
    const track = document.getElementById('proyectos-track');
    if (!track) return;
    proyectos.forEach((proyecto, index) => {
        const color = coloresCategoria[proyecto.categoria] || "#68d4f2";
        const projectName = currentLanguage === 'en' && proyecto.nombreEn ? proyecto.nombreEn : proyecto.nombre;
        const projectDescription = currentLanguage === 'en' && proyecto.descripcionEn ? proyecto.descripcionEn : proyecto.descripcion;
        const projectCategory = currentLanguage === 'en'
            ? (categoryTranslations[proyecto.categoria] || proyecto.categoria)
            : proyecto.categoria;
        const idPadded = String(proyecto.id).padStart(2, '0');
        const projectCard = document.createElement('a');
        projectCard.className = 'project-card';
        projectCard.href = currentLanguage === 'en' ? `proyectos/proyecto-${idPadded}-en.html` : `proyectos/proyecto-${idPadded}.html`;
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectCard.innerHTML = `
            <div class="project-image" style="background: linear-gradient(45deg, ${color}, ${color}dd)">
                ${projectName}
            </div>
            <div class="project-info">
                <span class="category-badge" style="color: ${color}; border-color: ${color}; background: ${color}22;">${projectCategory}</span>
                <p>${projectDescription}</p>
            </div>
        `;
        track.appendChild(projectCard);
    });
}

function cargarEquipo() {
    const track = document.getElementById('equipo-track');
    if (!track) return;
    equipo.forEach((miembro, index) => {
        const memberRole = currentLanguage === 'en' && miembro.rolEn ? miembro.rolEn : miembro.rol;
        const memberBio = currentLanguage === 'en' && miembro.bioEn ? miembro.bioEn : miembro.bio;
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        teamCard.style.animationDelay = `${index * 0.1}s`;
        teamCard.innerHTML = `
            <div class="member-photo" style="${miembro.foto ? `background-image: url('${miembro.foto}'); background-size: cover; background-position: center;` : `background: linear-gradient(45deg, ${miembro.color}, ${miembro.color}dd)`}">
                ${miembro.foto ? '' : (miembro.iniciales ? miembro.iniciales : miembro.nombre.split(' ')[0].charAt(0) + miembro.nombre.split(' ')[1].charAt(0))}
            </div>
            <div class="member-info">
                <h4>${miembro.nombre}</h4>
                <p class="member-role">${memberRole}</p>
                <p class="member-bio">${memberBio}</p>
            </div>
        `;
        track.appendChild(teamCard);
    });
}

function moveCarousel(tipo, direction) {
    let track;
    let index;   
    if (tipo === 'proyectos') {
        track = document.getElementById('proyectos-track');
        index = proyectosIndex;
        proyectosIndex += direction;
        if (proyectosIndex < 0) proyectosIndex = proyectos.length - 3;
        if (proyectosIndex > proyectos.length - 3) proyectosIndex = 0;
        index = proyectosIndex;
    } else if (tipo === 'equipo') {
        if (equipo.length <= 3) return;
        track = document.getElementById('equipo-track');
        index = equipoIndex;
        equipoIndex += direction;        
        if (equipoIndex < 0) equipoIndex = equipo.length - 3;
        if (equipoIndex > equipo.length - 3) equipoIndex = 0;
        index = equipoIndex;
    } else {
        return; 
    }
    if (!track) return;
    const cardWidth = 350;
    const translateX = -(index * cardWidth);
    track.style.transform = `translateX(${translateX}px)`;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - (isHeaderReduced ? 50 : 80),
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('mouseover', function(e) {
    const card = e.target.closest('.project-card, .team-card, .mission-card, .contact-card');
    if (card) {
        card.style.zIndex = '5';
    }
});

document.addEventListener('mouseout', function(e) {
    const card = e.target.closest('.project-card, .team-card, .mission-card, .contact-card');
    if (card) {
        card.style.zIndex = '1';
    }
});

setInterval(() => {
    const titles = document.querySelectorAll('.retro-title, .section-title, .slogan');
    if (titles.length > 0) {
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
        if (Math.random() > 0.8) {
            randomTitle.classList.add('glitch-effect');
            setTimeout(() => {
                randomTitle.classList.remove('glitch-effect');
            }, 300);
        }
    }
}, 3000);
