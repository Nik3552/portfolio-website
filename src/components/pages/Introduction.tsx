import { Download } from "lucide-react"

export function Intro() {
    return (
        <section className="min-h-screen min-w-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="mb-8 animate-fade-in">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-1">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            <span className="text-4xl">👨‍💻</span>
                        </div>
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
                    Maiboroda Mykyta
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 mb-6 animate-fade-in">
                    Frontend Developer & Creative Coder
                </p>

                <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto animate-fade-in">
                    Exploring ideas. Building experiences. Crafting digital solutions that make a difference.
                </p>

                <div className="flex gap-4 justify-center animate-fade-in">
                    <a href="https://github.com/Nik3552" target="_blank" className="p-2 bg-cyan-500 rounded-md hover:bg-cyan-600 text-white transition-all">
                        View My Work
                    </a>
                    <a href="/public/Maiboroda_Mykyta_CV.docx" download={true} className="flex flex-row items-center gap-3 border-cyan-500 border-1 rounded-md p-2 text-cyan-500 hover:bg-cyan-50 hover:text-black transition-all">
                        Download CV <Download size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}