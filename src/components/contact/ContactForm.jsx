import { toast } from "sonner";



export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Form not set up", {
        description: "Form submission is not yet set up.",
        duration: 4000,
      });
  }
  return (
    <form className="w-full space-y-6" action="https://formspree.io/f/YOUR_ID" method="POST" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <input type="text" placeholder="Name" className="w-full p-4 border border-slate-200 rounded-xl" required />
        <input type="email" placeholder="Email" className="w-full p-4 border border-slate-200 rounded-xl" required />
      </div>
      <textarea placeholder="Message" rows="4" className="w-full p-4 border border-slate-200 rounded-xl resize-none" required />
      <button className="w-fit block mx-auto bg-brand-gold text-white font-bold py-3 px-6 cursor-pointer text-sm rounded-full hover:opacity-90 transition">
        Send Message
      </button>
    </form>
  );
}