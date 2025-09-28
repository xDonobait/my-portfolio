"use client"

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, Download } from 'lucide-react';
import CircularText from './circular-text';
import GooeyNav from './goey-nav';
import Beams from './Beams';

// Componente Portfolio Principal
const Portfolio = () => {
    const skills = [
        'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
        'MongoDB', 'PostgreSQL', 'Angular', 'AWS', 'Git', 'Figma'
    ];

    const projects = [
        {
            title: "Tiendana Home",
            description: "Landing Page de Tiendana S.A.S " +
                "Creacion de herramientas, Langinds personalizadas y Centro de Ayuda",
            tech: ["React", "Next.js", "SCSS", "Strapi"],
            github: "https://www.tiendana.com/",
            demo: "https://www.tiendana.com/"
        },
        {
            title: "Python Collection",
            description: "Conjunto de codigos hechos para practicas y tareas asiganadas en la Universidad",
            tech: ["Python"],
            github: "https://github.com/xDonobait/Python-Practice",
            demo: ""
        },
        {
            title: "Yani´s Kitchen",
            description: "Yani's Kitchen es una aplicación web de un restaurante. Este proyecto está enfocado en mejorar la experiencia para los clientes.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/xDonobait/xDonobait.github.io",
            demo: "https://xdonobait.github.io/"
        }
    ];

    // Configuración del nav
    const navItems = [
        { label: "Inicio", href: "#home" },
        { label: "Sobre mí", href: "#about" },
        { label: "Proyectos", href: "#projects" },
    ];

    return (
        <div className="min-h-screen text-white relative overflow-hidden">
            {/* Beams Background */}
            <div className="fixed inset-0 z-0">
                <Beams
                    beamWidth={2}
                    beamHeight={15}
                    beamNumber={12}
                    lightColor="#ffffff"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={0}
                />
            </div>

            {/* Overlay oscuro para mejorar legibilidad */}
            <div className="fixed inset-0 z-1 bg-black/60"></div>

            {/* Navigation con GooeyNav */}
            <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/20">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                        Donoban Peralta
                    </h1>
                    <div className="hidden md:block">
                        <GooeyNav
                            items={navItems}
                            particleCount={15}
                            particleDistances={[90, 10]}
                            particleR={100}
                            initialActiveIndex={0}
                            animationTime={600}
                            timeVariance={300}
                            colors={[1, 2, 3, 4]}
                        />
                    </div>
                    {/* Navegación móvil simple */}
                    <div className="md:hidden flex space-x-4">
                        <a href="#about" className="hover:text-white transition-colors text-sm text-gray-200">Sobre mí</a>
                        <a href="#projects" className="hover:text-white transition-colors text-sm text-gray-200">Proyectos</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="mb-8">
                        <div className="w-48 h-48 mx-auto mb-6 relative">
                            <CircularText
                                text="FRONTEND*DEVELOPER*"
                                onHover="speedUp"
                                spinDuration={20}
                                className="text-white hover:text-gray-200 transition-colors duration-300"
                            />
                        </div>
                    </div>

                    <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
                        Construyo experiencias digitales excepcionales con tecnologías modernas.
                        <br />
                        Aprendiendo React, Next.js, Angular y mucho más.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 border border-white/20">
                            <Download size={20} />
                            Descargar CV
                        </button>
                        <button className="border border-white/40 hover:border-white px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:bg-white/10 flex items-center gap-2">
                            <Mail size={20} />
                            Contactar
                        </button>
                    </div>

                    <div className="flex justify-center space-x-6 mt-12">
                        <a href="https://github.com/xDonobait" className="text-gray-200 hover:text-white transition-colors transform hover:scale-110">
                            <Github size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/donoban-peralta/" className="text-gray-200 hover:text-white transition-colors transform hover:scale-110">
                            <Linkedin size={28} />
                        </a>
                        <a href="#" className="text-gray-200 hover:text-white transition-colors transform hover:scale-110">
                            <Mail size={28} />
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section con fondo más oscuro para visibilidad */}
            <section id="about" className="py-20 px-6 relative z-10">
                {/* Overlay específico para esta sección */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

                <div className="max-w-6xl mx-auto relative z-20">
                    <h2 className="text-4xl font-bold text-center mb-16 text-white">
                        Sobre Mí
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                            <p className="text-lg text-gray-100 mb-6 leading-relaxed">
                                Tengo <span className="font-semibold text-white">19 años</span> y actualmente estudio
                                <span className="font-semibold text-white"> Ingeniería de Sistemas</span>.
                                Desde junio de 2025 trabajo en
                                <span className="font-semibold text-white"> Tiendana S.A.S</span>,
                                donde participo en el desarrollo de soluciones digitales innovadoras.
                            </p>
                            <p className="text-lg text-gray-100 mb-6 leading-relaxed">
                                Me apasiona el <span className="text-white">fútbol</span>, los
                                <span className="text-white"> diseños atractivos</span> y explotar mi imaginación para crear interfaces únicas.
                                Mi meta es diseñar todas esas páginas increíbles que alguna vez soñé con construir.
                            </p>
                            <div className="flex items-center gap-2 text-white">
                                <Code size={20} />
                                <span className="font-semibold">Siempre codificando, siempre aprendiendo</span>
                            </div>
                        </div>

                        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-semibold mb-6 text-white">Habilidades Técnicas</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {skills.map((skill, index) => (
                                    <div
                                        key={skill}
                                        className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 text-center hover:border-white/50 transition-all duration-300 hover:bg-white/20"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <span className="text-sm font-medium text-white">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-white">
                        Proyectos Destacados
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={project.title}
                                className="bg-black/70 backdrop-blur-md border border-white/30 rounded-xl p-6 hover:border-white/50 transition-all duration-300 hover:transform hover:scale-105 hover:bg-black/80"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <Briefcase className="text-white" size={24} />
                                    <div className="flex space-x-2">
                                        <a
                                            href={project.github}
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.demo}
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                                <p className="text-gray-200 mb-4 text-sm leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-white/20 text-white px-2 py-1 rounded-md text-xs font-medium border border-white/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-white/30 relative z-10 bg-black/40 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-gray-200">
                        © 2025 Donoban Andres Peralta Gutierrez.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;