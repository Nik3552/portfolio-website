import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Mail } from "lucide-react"
import { Github } from "lucide-react"
import { Linkedin } from "lucide-react"
import axios from "axios"

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email(),
    message: z.string().min(1, "Message is required")
})

type contactFormFields = z.infer<typeof contactSchema>

export function ContactForm() {

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<contactFormFields>({
        resolver: zodResolver(contactSchema)
    })

    const onSubmit: SubmitHandler<contactFormFields> = async (data) => {
        try {
            await axios.post(
                "https://getform.io/f/bkknzrnb",
                data,
                { headers: { 'Accept': 'application/json' } }
            )
            reset()
        } catch (err) {
            setError("root", {
                message: "An error occurred while trying to submit your form"
            })
            console.log(err)
        }
    }

    return (
        <section id="contact-form" className="min-h-screen-screen w-screen flex flex-col justify-center items-center py-10">
            <div className="flex flex-col container mx-10 items-center gap-8" id="contact-me-form">
                <h3 className="text-4xl font-bold text-wrap text-center">Let's Work Together</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="w-10/12 flex flex-col gap-5 items-start border-2 rounded-xl border-gray-200 p-8">
                    <input {...register("name")} className="w-full border-2 rounded-md p-3 border-gray-200 " placeholder="Your Name" />
                    {errors.name && (
                        <div className="text-red-500">{errors.name.message}</div>
                    )}
                    <input {...register("email")} className="w-full border-2 rounded-md p-3 border-gray-200 " placeholder="Your Email" />
                    {errors.email && (
                        <div className="text-red-500">{errors.email.message}</div>
                    )}
                    <textarea {...register("message")} className="w-full min-h-13 border-2 rounded-md p-3 border-gray-200 " placeholder="Your Message" />
                    {errors.message && (
                        <div className="text-red-500">{errors.message.message}</div>
                    )}
                    <button disabled={isSubmitting} className="w-full rounded-md bg-blue-400 hover:bg-blue-500 text-white py-3 disabled:bg-blue-500 disabled:cursor-not-allowed">Send Message</button>
                </form>
                {errors.root && (
                    <div className="text-red-500">{errors.root.message}</div>
                )}
            </div>
            <div className="text-center pt-8" id="social-links">
                <h3 className="text-gray-900">Or reach out directly:</h3>
                <div className="flex flex-row gap-5 justify-center items-center pt-3">
                    <a href="#contact-form">
                        <Mail size={36} className="border-2 border-cyan-500 text-cyan-500 rounded-md p-2 hover:bg-gray-100 hover:cursor-pointer hover:text-black" />
                    </a>
                    <a href="https://github.com/Nik3552" target="_blank">
                        <Github size={36} className="border-2 border-cyan-500 text-cyan-500 rounded-md p-2 hover:bg-gray-100 hover:cursor-pointer hover:text-black" />
                    </a>
                    <a href="https://www.linkedin.com/in/mykyta-maiboroda-929198363/" target="_blank">
                        <Linkedin size={36} className="border-2 border-cyan-500 text-cyan-500 rounded-md p-2 hover:bg-gray-100 hover:cursor-pointer hover:text-black" />
                    </a>
                </div>
            </div>
        </section>
    )
}