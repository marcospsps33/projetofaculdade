
import React, { useState } from 'react';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulário enviado!');
  };

  return (
    <div className="flex flex-col items-center bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <img src="BATS_Collab_Logo.png" alt="Logo BATS Collab" className="h-16" />
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center text-center py-10 px-4">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">
          Destaque-se no mercado com a ajuda da BATS COLLAB!
        </h1>
        <p className="text-lg mb-6">
          A BATS Collab tem as ferramentas necessárias para te ajudar a chegar onde você precisa.
        </p>
        <div className="flex flex-wrap justify-center">
          <img src="batman.png" alt="Batman" className="w-24 h-24 mx-2" />
          <img src="character1.png" alt="Character 1" className="w-24 h-24 mx-2" />
          <img src="character2.png" alt="Character 2" className="w-24 h-24 mx-2" />
          <img src="character3.png" alt="Character 3" className="w-24 h-24 mx-2" />
        </div>
      </main>

      {/* Quem Somos Section */}
      <section className="max-w-6xl mx-auto py-10 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Quem Somos</h2>
        <p className="text-lg">
          A BATS Collab possui um conjunto de profissionais preparados para ajudar a elaborar e planejar seu negócio.
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="max-w-6xl mx-auto py-10 text-center">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">Portfólio</h2>
        <p className="text-lg mb-4">Confira alguns dos nossos projetos anteriores!</p>
        {/* Aqui você pode adicionar imagens ou descrições dos projetos */}
      </section>

      {/* Partners Section */}
      <section className="max-w-6xl mx-auto py-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Parceiros</h2>
        <div className="flex justify-center space-x-4">
          <img src="partner1.png" alt="Partner 1" className="h-16" />
          <img src="partner2.png" alt="Partner 2" className="h-16" />
          <img src="partner3.png" alt="Partner 3" className="h-16" />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-6xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Como Podemos Ajudar?</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="serviceType">Tipo de Serviço</label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            >
              <option value="" disabled>Selecione o tipo de serviço</option>
              <option value="design">Design</option>
              <option value="development">Desenvolvimento</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600 transition">
            Mandar sinal
          </button>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;
