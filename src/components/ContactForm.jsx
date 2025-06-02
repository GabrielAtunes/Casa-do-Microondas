import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar via API futuramente
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000); // limpa o aviso após 4s
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-white py-16" id="contato">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Fale Conosco</h2>
        <p className="text-center text-gray-600 mb-10">
          Tem alguma dúvida ou precisa de um orçamento? Envie sua mensagem!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-xl shadow-md space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              required
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mensagem
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition-all"
          >
            Enviar
          </button>

          {submitted && (
            <p className="text-green-600 text-sm text-center mt-2">
              Mensagem enviada com sucesso!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
