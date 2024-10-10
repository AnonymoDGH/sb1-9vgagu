import React from 'react';
import { Cheese, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-yellow-50">
      <header className="bg-yellow-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Cheese className="w-10 h-10 mr-2" />
            <h1 className="text-2xl font-bold">Lácteos Maracaibo</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#inicio" className="hover:underline">Inicio</a></li>
              <li><a href="#productos" className="hover:underline">Productos</a></li>
              <li><a href="#sobre-nosotros" className="hover:underline">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="py-20 text-center bg-yellow-100">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Bienvenidos a Lácteos Maracaibo</h2>
            <p className="text-xl mb-8">Fabricamos los mejores quesos artesanales de la región</p>
            <a href="#productos" className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300">Ver Productos</a>
          </div>
        </section>

        <section id="productos" className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestros Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Queso Fresco</h3>
                <p>Delicioso queso fresco, perfecto para ensaladas y arepas.</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Queso Gouda</h3>
                <p>Nuestro queso Gouda madurado, ideal para tablas de quesos.</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Queso Mozzarella</h3>
                <p>Mozzarella fresca, perfecta para pizzas y pastas.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-nosotros" className="py-16 bg-yellow-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Sobre Nosotros</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Lácteos Maracaibo es una empresa familiar con más de 30 años de experiencia en la fabricación de quesos artesanales. 
              Nos enorgullecemos de utilizar las mejores materias primas y técnicas tradicionales para ofrecer productos de la más alta calidad.
            </p>
          </div>
        </section>

        <section id="contacto" className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
            <div className="flex flex-col md:flex-row justify-around items-start">
              <div className="mb-8 md:mb-0">
                <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>+58 261 123 4567</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>info@lacteosmaracaibo.com</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Av. Principal, Zona Industrial, Maracaibo, Venezuela</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Síguenos en Redes Sociales</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-yellow-500 hover:text-yellow-600">
                    <Facebook className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-yellow-500 hover:text-yellow-600">
                    <Instagram className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-yellow-500 hover:text-yellow-600">
                    <Twitter className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-yellow-500 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Lácteos Maracaibo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;