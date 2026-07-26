let lastScrollTop = 0;
let header = document.querySelector('.site-header');
let isHeaderReduced = false;
const headerHeight = 80;

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
        categoria: "Educación Anatómica",
        descripcion: "Adapta la ventana AR del espejo mágico al movimiento completo del miembro superior.",
    },
    {
        id: 2,
        nombre: "ARMyo Mirror – Miembro Inferior",
        categoria: "Biomecánica",
        descripcion: "Vista híbrida real/virtual que anima la contracción muscular de rodilla, cadera y pie.",
    },
    {
        id: 3,
        nombre: "HoloLearn Anatomy",
        categoria: "Educación Anatómica",
        descripcion: "Exploración gamificada de anatomía 3D en HoloLens 2, con modo libre y serious game.",
    },
    {
        id: 4,
        nombre: "OculusLearn Anatomy",
        categoria: "Educación Anatómica",
        descripcion: "La misma experiencia gamificada de anatomía, adaptada a Oculus Quest 2 en VR.",
    },
    {
        id: 5,
        nombre: "AR-Body Atlas Mobile",
        categoria: "Educación Anatómica",
        descripcion: "Superpone órganos del tórax y abdomen sobre el cuerpo usando solo un smartphone.",
    },
    {
        id: 6,
        nombre: "HandXplorer AR",
        categoria: "Educación Anatómica",
        descripcion: "Explora huesos de la mano en RA, aislando y ampliando cada estructura con XREAL.",
    },
    {
        id: 7,
        nombre: "NeuroPlan AR — Planificación Preoperatoria en Neurocirugía",
        categoria: "Cirugía",
        descripcion: "Sistema de RA con HoloLens 2 para navegar MRI, medir y planificar el abordaje quirúrgico sobre modelos 3D del cerebro.",
    },
    {
        id: 8,
        nombre: "Virtual Dissection Hall (VAM)",
        categoria: "Educación Anatómica",
        descripcion: "Anfiteatro virtual con cadáver digital a escala real, explorable por sistemas anatómicos.",
    },
    {
        id: 9,
        nombre: "Simulador Facial para Anatomía",
        categoria: "Educación Anatómica",
        descripcion: "Detecta 468 puntos faciales y muestra la activación muscular y nerviosa en tiempo real.",
    },
    {
        id: 10,
        nombre: "ARMyo Mirror – Miembro Superior",
        categoria: "Biomecánica",
        descripcion: "Vista híbrida real/virtual que anima la contracción muscular de brazo y antebrazo.",
    },
    {
        id: 11,
        nombre: "ThorAX",
        categoria: "Educación Anatómica",
        descripcion: "Visor gestual de CT/MR/RX de tórax y abdomen, controlado con las manos vía Kinect v2.",
    },
    {
        id: 12,
        nombre: "TransfusionVR",
        categoria: "Simulación Clínica",
        descripcion: "Simulador hospitalario en VR para practicar procedimientos de medicina transfusional en equipo.",
    },
    {
        id: 13,
        nombre: "Neuromotion VR",
        categoria: "Rehabilitación",
        descripcion: "Controla un avatar en VR mediante imaginación motora captada por EEG (BCI).",
    },
    {
        id: 14,
        nombre: "KinectCalib",
        categoria: "Rehabilitación",
        descripcion: "Mejora la precisión del esqueleto de Kinect para alinear modelos 3D con el cuerpo real.",
    },
    {
        id: 15,
        nombre: "VetSim: Anestesia y Cirugía Canina",
        categoria: "Salud Animal / Veterinaria",
        descripcion: "Simula el uso de máquina de anestesia y bomba de infusión en cirugía canina.",
    },
    {
        id: 16,
        nombre: "LaparoView VST",
        categoria: "Cirugía",
        descripcion: "Muestra el video laparoscópico en una pantalla virtual gigante dentro del visor Meta Quest 3.",
    },
    {
        id: 17,
        nombre: "LaparoView OST",
        categoria: "Cirugía",
        descripcion: "La misma visualización laparoscópica aumentada, en HoloLens con lentes ópticas transparentes.",
    },
    {
        id: 18,
        nombre: "KineMind",
        categoria: "Rehabilitación",
        descripcion: "Combina VR y retroalimentación háptica para entrenar memoria y coordinación motora.",
    },
    {
        id: 19,
        nombre: "Vib-AR",
        categoria: "Rehabilitación",
        descripcion: "Usa RA y vibración para aliviar el dolor del miembro fantasma mediante ilusión visual de movimiento.",
    },
    {
        id: 20,
        nombre: "BYMAX",
        categoria: "Instrumentación Biomédica",
        descripcion: "Monitorea ECG, SpO2 y temperatura de adultos mayores con IRA en zonas de difícil acceso de Loreto.",
    },
    {
        id: 21,
        nombre: "SONQO",
        categoria: "Instrumentación Biomédica",
        descripcion: "Monitorea ECG y SpO2 para prevenir el sobreesfuerzo cardiovascular en rehabilitación post-angioplastía.",
    },
    {
        id: 22,
        nombre: "VIVAS",
        categoria: "Instrumentación Biomédica",
        descripcion: "Wearable con ECG, PPG e IMU que detecta estados presincopales y emite alertas preventivas.",
    },
    {
        id: 23,
        nombre: "SAMIWALK",
        categoria: "Instrumentación Biomédica",
        descripcion: "Mide el costo fisiológico de la marcha en adultos mayores durante la prueba de caminata de 6 minutos.",
    },
    {
        id: 24,
        nombre: "S-REHAB",
        categoria: "Instrumentación Biomédica",
        descripcion: "Wearable con IMU y sEMG que objetiva la rehabilitación del hombro en tiempo real.",
    },
];

const equipo = [
    {
        id: 1,
        nombre: "M.Sc. Miguel Rogger Hoyos Alvitez",
        iniciales: "RH",
        foto: "https://www.image2url.com/r2/default/images/1784963580476-99180e72-f27d-4e3e-9c43-65dc2fdb5f16.png",
        rol: "Fundador del Laboratorio BioXR Immersive Lab",
        bio: "Docente de la carrera de Ingeniería Biomédica en la Universidad Peruana Cayetano Heredia. Ingeniero biomédico con maestría en Biomédica Computacional por la Universidad Técnica de Múnich (TUM), y más de 7 años de experiencia en tecnologías de Realidad Extendida (XR) aplicadas a la medicina.",
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
        const idPadded = String(proyecto.id).padStart(2, '0');
        const projectCard = document.createElement('a');
        projectCard.className = 'project-card';
        projectCard.href = `proyectos/proyecto-${idPadded}.html`;
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectCard.innerHTML = `
            <div class="project-image" style="background: linear-gradient(45deg, ${color}, ${color}dd)">
                ${proyecto.nombre}
            </div>
            <div class="project-info">
                <span class="category-badge" style="color: ${color}; border-color: ${color}; background: ${color}22;">${proyecto.categoria}</span>
                <p>${proyecto.descripcion}</p>
            </div>
        `;
        track.appendChild(projectCard);
    });
}

function cargarEquipo() {
    const track = document.getElementById('equipo-track');
    if (!track) return;
    equipo.forEach((miembro, index) => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        teamCard.style.animationDelay = `${index * 0.1}s`;
        teamCard.innerHTML = `
            <div class="member-photo" style="${miembro.foto ? `background-image: url('${miembro.foto}'); background-size: cover; background-position: center;` : `background: linear-gradient(45deg, ${miembro.color}, ${miembro.color}dd)`}">
                ${miembro.foto ? '' : (miembro.iniciales ? miembro.iniciales : miembro.nombre.split(' ')[0].charAt(0) + miembro.nombre.split(' ')[1].charAt(0))}
            </div>
            <div class="member-info">
                <h4>${miembro.nombre}</h4>
                <p class="member-role">${miembro.rol}</p>
                <p class="member-bio">${miembro.bio}</p>
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
