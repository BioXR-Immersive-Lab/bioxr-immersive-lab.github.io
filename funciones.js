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

function toggleHeaderSize(reduce) {
    if (!header) return;
    if (reduce && !isHeaderReduced) {
        header.style.height = '50px';
        header.style.padding = '5px 0';
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.style.height = '35px';
            logo.style.transition = 'height 0.3s ease';
        }
        const logoText = document.querySelector('.logo-text');
        if (logoText) {
            logoText.style.transform = 'scale(0.8)';
            logoText.style.transition = 'transform 0.3s ease';
        }
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.style.padding = '6px 10px';
            link.style.fontSize = '0.85rem';
        });
        isHeaderReduced = true;
    } else if (!reduce && isHeaderReduced) {
        header.style.height = '';
        header.style.padding = '';
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.style.height = '60px';
        }
        const logoText = document.querySelector('.logo-text');
        if (logoText) {
            logoText.style.transform = '';
        }
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.style.padding = '';
            link.style.fontSize = '';
        });
        isHeaderReduced = false;
    }
}

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

const proyectos = [
    {
        id: 1,
        nombre: "Magic Mirror para Miembro Superior",
        categoria: "Educación Anatómica",
        descripcion: "Plataforma inmersiva para aprendizaje de anatomía humana mediante modelos 3D interactivos.",
        color: "#68d4f2",
    },
    {
        id: 2,
        nombre: "ARMyo Mirror: Visualizador Muscular Interactivo para Miembro Inferior con AR ",
        categoria: "Simulación Clínica",
        descripcion: "Desarrollar un sistema Magic Mirror híbrido que combine una vista mitad real (espejo con cuerpo del usuario) y mitad virtual (simulación anatómica)",
        color: "#90ee90"
    },
    {
        id: 3,
        nombre: "HoloLearn Anatomy",
        categoria: "Educacion Anatómica",
        descripcion: "HoloLearn Anatomy es una herramienta educativa inmersiva basada en realidad aumentada con HoloLens 2, diseñada para facilitar el aprendizaje activo y gamificado de la anatomía humana",
        color: "#90c8eeff"
    },
    {
        id: 4,
        nombre: "OculusLearn Anatomy",
        categoria: "Educacion Anatómica",
        descripcion: "OculusLearn Anatomy es una herramienta educativa inmersiva basada en realidad virtual con Oculus Quest 2, diseñada para facilitar el aprendizaje activo y gamificado de la anatomía humana",
        color: "#ffe364ff"
    },
    {
        id: 5,
        nombre: "AR-Body Atlas Mobile",
        categoria: "Educacion Anatómica",
        descripcion: "R-Body Atlas Mobile es una aplicación de realidad aumentada para dispositivos móviles (smartphones y tablets) que permite superponer modelos 3D de órganos del tórax y abdomen (como corazón, pulmones, hígado, estómago, riñones, intestinos) directamente sobre el cuerpo de una persona en tiempo real",
        color: "#e36a68ff"
    },
    {
        id: 6,
        nombre: "HandXplorer AR",
        categoria: "Educacion Anatómica",
        descripcion: "Desarrollar una aplicación móvil de realidad aumentada basada en tracking de imagen, que permita al usuario: Enfocar una imagen guía de una mano. Visualizar sobre ella un modelo 3D completo de la mano en RA.",
        color: "#e368caff"
    },
    {
        id: 7,
        nombre: "VR-SurgPlanQ2 — Visualizador VR para Planificación Preoperatoria",
        categoria: "Educacion Anatómica",
        descripcion: "Sistema de streaming tiempo real que conecta 3DSlicer con VR mediante OpenIGTLink, permitiendo visualización inmersiva de segmentaciones DICOM sin exportación manual. El cirujano visualiza y navega en VR mientras mantiene control de edición en 3DSlicer, con retroalimentación de puntos de referencia VR hacia el software médico.",
        color: "#8d68e3ff"
    },
    {
        id: 8,
        nombre: "Virtual Dissection Hall - VR",
        categoria: "Educacion Anatómica",
        descripcion: "El desarrollo de Virtual Anatomy Mirror (VAM), una aplicación educativa inmersiva en realidad virtual con Oculus Quest 2, inspirada en el concepto de “magic mirror” utilizado en entornos de educación anatómica avanzada.",
        color: "#fa6d6dff"
    },
    {
        id: 9,
        nombre: "Simulador Facial para Anatomía - AR",
        categoria: "Educacion Anatómica",
        descripcion: "Desarrollar una aplicación móvil de realidad aumentada que utilice MediaPipe Face Mesh para detectar 468 landmarks faciales en tiempo real y superponer capas anatómicas interactivas",
        color: "#6dc4faff"
    },
    {
        id: 10,
        nombre: "ARMyo Mirror: Visualizador Muscular Interactivo para Miembro Superior con AR",
        categoria: "Educacion Anatómica",
        descripcion: "Un sistema Magic Mirror híbrido que combine una vista mitad real (espejo con cuerpo del usuario) y mitad virtual (simulación anatómica)",
        color: "#fa6de5ff"
    },
    {
        id: 11,
        nombre: "Proyecto: ThorAX — Visor gestual de imágenes médicas (CT/MR/XR)",
        categoria: "Educacion Anatómica",
        descripcion: "Un visor interactivo de imágenes médicas para tórax y abdomen controlado con gestos usando Kinect v2",
        color: "#f5fa6dff"
    },
    {
        id: 12,
        nombre: "TransfusionVR — Simulador Clínico de Medicina Transfusional",
        categoria: "Educacion Anatómica",
        descripcion: "Un simulador clínico en realidad virtual inmersiva para la enseñanza y evaluación de competencias en medicina transfusional utilizando visores Meta Quest 3, que permita recrear un entorno hospitalario completo",
        color: "#f5fa6dff"
    },
];         

const equipo = [
    {
        id: 1,
        nombre: "Dr. Rogger ",
        rol: "Director del Laboratorio",
        bio: "PhD en Ingeniería Biomédica con 10 años de experiencia en tecnologías médicas avanzadas.",
        color: "#90ee90"
    },
    {
        id: 2,
        nombre: "Dra. ",
        rol: "Investigadora Principal",
        bio: "Especialista en simulación clínica y educación médica con múltiples publicaciones internacionales.",
        color: "#68d4f2"
    },
    {
        id: 3,
        nombre: "Ing. ",
        rol: "Desarrollador Senior VR/AR",
        bio: "5 años de experiencia en desarrollo de aplicaciones inmersivas para salud y educación médica.",
        color: "#90ee90"
    },
    {
        id: 4,
        nombre: "Est. ",
        rol: "Asistente de Investigación",
        bio: "Estudiante de Ingeniería Biomédica, becaria del laboratorio con enfoque en realidad aumentada.",
        color: "#68d4f2"
    },
    {
        id: 5,
        nombre: "Dra.ssds sd",
        rol: "Especialista en Rehabilitación",
        bio: "Especialista en terapia física y rehabilitación con enfoque en tecnologías XR para recuperación motora.",
        color: "#90ee90"
    }
];

let proyectosIndex = 0;
let equipoIndex = 0;

function cargarProyectos() {
    const track = document.getElementById('proyectos-track');
    if (!track) return;
    proyectos.forEach((proyecto, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectCard.innerHTML = `
            <div class="project-image" style="background: linear-gradient(45deg, ${proyecto.color}, ${proyecto.color}dd)">
                ${proyecto.nombre}
            </div>
            <div class="project-info">
                <h4>${proyecto.nombre}</h4>
                <p><strong>Categoría:</strong> ${proyecto.categoria}</p>
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
            <div class="member-photo" style="background: linear-gradient(45deg, ${miembro.color}, ${miembro.color}dd)">
                ${miembro.nombre.split(' ')[0].charAt(0)}${miembro.nombre.split(' ')[1].charAt(0)}
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

