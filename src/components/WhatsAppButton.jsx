import { businessInfo } from "../data/config";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-12 right-8 z-40 flex items-center justify-center w-10 h-10 bg-cyan-600 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-float"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="bi bi-chat text-xl text-white"></i>
    </a>
  );
}
