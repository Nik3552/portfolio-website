export function Skills() {
    const skills = [
        { name: "JavaScript", level: 95, icon: "⚡" },
        { name: "React", level: 90, icon: "⚛️" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "n8n", level: 80, icon: "🤖" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "CSS/Tailwind", level: 95, icon: "🎨" },
    ];
    return (
        <section className="py-20 w-screen">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                    Skills & Technologies
                </h2>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {skills.map((skill) => (
                            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-center mb-4">
                                    <span className="text-2xl mr-3">{skill.icon}</span>
                                    <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                                    <span className="ml-auto text-cyan-500 font-semibold">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}