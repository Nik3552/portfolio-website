import { Github, ExternalLink } from "lucide-react";

export function Projects() {
    const projects = [
        {
            title: "Flappy Bird Clone",
            description: "A classic Flappy Bird game clone built with HTML, CSS, and JavaScript, utilizing jQuery for smooth event handling and animations.",
            image: "https://media.wired.com/photos/593271fc52d99d6b984de831/master/pass/i_photo_3.jpg",
            technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
            github: "https://github.com/Nik3552/Flappy-Bird",
            live: "https://nik3552.github.io/Flappy-Bird/"
        },
        {
            title: "LLM & Gen",
            description: "Customizable desktop application built with Python and customtkinter, enabling users to interact with multiple powerful LLMs and generate AI-powered images.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
            technologies: ["Python", "CustomTkinter", "Fast API"],
            github: "https://github.com/Nik3552/LLM-Gen",
        },
        {
            title: "Color Scheme Generator",
            description: "The Color-Scheme-Generator is a simple yet powerful web tool that helps you create beautiful color palettes for your projects.",
            image: "/color-sheme-generator.jpg",
            technologies: ["HTML", "CSS", "JavaScript", "API"],
            github: "https://github.com/Nik3552/Color-Scheme-Generator.git",
        },
        {
            title: "Portfolio Website",
            description: "Responsive portfolio showcase with smooth animations and modern design",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
            technologies: ["React", "Tailwind CSS"],
            github: "#",
        }
    ];

    return (
        <section className="py-20 bg-gray-50 w-screen">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                    Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-md">
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-4 flex gap-2">
                                        <a href={project.github} target="_blank" className="bg-white/20 backdrop-blur-sm hover:bg-white/80 flex flex-row items-center p-2 rounded-md hover:cursor-pointer">
                                            <Github className="w-4 h-4 mr-2" />
                                            Code
                                        </a>
                                        {project.live ? <a href={project.live} target="_blank" className="bg-white/20 backdrop-blur-sm hover:bg-white/80 flex flex-row items-center p-2 rounded-md hover:cursor-pointer">
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Live
                                        </a> : ""}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}