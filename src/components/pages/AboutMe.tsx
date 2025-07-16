import { Github, Linkedin, Mail, Code, Palette, Zap } from "lucide-react"

export function AboutMe() {
    return (
        <section className="py-20 bg-gray-50 w-screen">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                    About Me
                </h2>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                                Hello! I'm Mykyta
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                I'm a passionate frontend developer with a keen eye for design and a love for creating
                                exceptional digital experiences. With expertise in modern web technologies, I transform
                                ideas into interactive, user-friendly applications.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                                projects, or sketching out ideas for my next creative venture.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://github.com/Nik3552" target="_blank" className="border-cyan-500 text-cyan-500">
                                    <Github size={36} className="border-2 border-cyan-500 text-cyan-500 rounded-md p-2 hover:bg-gray-100 hover:cursor-pointer hover:text-black" />
                                </a>
                                <a href="https://www.linkedin.com/in/mykyta-maiboroda-929198363/" target="_blank" className="border-cyan-500 text-cyan-500">
                                    <Linkedin size={36} className="border-2 border-cyan-500 text-cyan-500 rounded-md p-2 hover:bg-gray-100 hover:cursor-pointer hover:text-black" />
                                </a>
                                <a href="#contact-form" className="border-cyan-500 text-cyan-500">
                                    <Mail size={36} className="border-2 border-cyan-500 text-cyan-500 rounded-md p-2 hover:bg-gray-100 hover:cursor-pointer hover:text-black" />
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 text-center hover:shadow-lg transition-shadow border-1 border-gray-200 rounded-md">
                                <Code className="w-8 h-8 mx-auto mb-4 text-cyan-500" />
                                <h4 className="font-semibold mb-2">Clean Code</h4>
                                <p className="text-sm text-gray-600">
                                    Writing maintainable, scalable code
                                </p>
                            </div>
                            <div className="p-6 text-center hover:shadow-lg transition-shadow border-1 border-gray-200 rounded-md">
                                <Palette className="w-8 h-8 mx-auto mb-4 text-purple-500" />
                                <h4 className="font-semibold mb-2">UI/UX Design</h4>
                                <p className="text-sm text-gray-600">
                                    Creating beautiful interfaces
                                </p>
                            </div>
                            <div className="p-6 text-center hover:shadow-lg transition-shadow border-1 border-gray-200 rounded-md">
                                <Zap className="w-8 h-8 mx-auto mb-4 text-yellow-500" />
                                <h4 className="font-semibold mb-2">Performance</h4>
                                <p className="text-sm text-gray-600">
                                    Optimized, fast applications
                                </p>
                            </div>
                            <div className="p-6 text-center hover:shadow-lg transition-shadow border-1 border-gray-200 rounded-md">
                                <span className="text-2xl block mb-4">🚀</span>
                                <h4 className="font-semibold mb-2">Innovation</h4>
                                <p className="text-sm text-gray-600">
                                    Embracing new technologies
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}