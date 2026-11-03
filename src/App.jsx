import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, Phone, Hexagon, Star } from 'lucide-react';

// Обновленные ссылки на оригинальные изображения в высоком качестве
const portfolioItems = [
  { id: 1, category: 'Логотип', title: 'Brand 1', imageUrl: 'https://static.tildacdn.com/tild3537-6461-4761-b336-393139376161/Untitled-2-01.png' },
  { id: 2, category: 'Брендинг', title: 'Brand 2', imageUrl: 'https://static.tildacdn.com/tild6535-3933-4236-a536-323464613432/Untitled-2.png' },
  { id: 3, category: 'Логобук', title: 'Brand 3', imageUrl: 'https://static.tildacdn.com/tild3565-3131-4432-b134-373232353365/Untitled-2-03.png' },
  { id: 4, category: 'Логотип', title: 'Brand 4', imageUrl: 'https://static.tildacdn.com/tild3061-6562-4537-b462-623131636637/Untitled-2-04.png' },
  { id: 5, category: 'Брендинг', title: 'Brand 5', imageUrl: 'https://static.tildacdn.com/tild6336-6536-4932-b765-373064636133/Untitled-2-02.png' },
  { id: 6, category: 'Логобук', title: 'Brand 6', imageUrl: 'https://static.tildacdn.com/tild3361-6665-4339-b033-643064343132/Untitled-2.png' },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F0D] text-[#D9C7A3] font-sans selection:bg-[#8CA98C] selection:text-[#0B0F0D]">
      
      {/* Навигация */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B0F0D]/90 backdrop-blur-md py-4 shadow-lg shadow-[#1F2A1F]/50' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold tracking-widest text-[#fcffff] uppercase">
              KLAVDI<span className="text-[#D9C7A3]">MOS</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Услуги', 'Портфолио', 'Обо мне', 'Контакты'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-[#8CA98C] hover:text-[#D9C7A3] transition-colors text-sm uppercase tracking-wider font-medium">
                  {item}
                </a>
              ))}
            </div>

            <button className="md:hidden text-[#D9C7A3]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0F0D] flex flex-col justify-center items-center space-y-8 md:hidden">
          {['Услуги', 'Портфолио', 'Обо мне', 'Контакты'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-[#8CA98C] hover:text-[#D9C7A3] transition-colors uppercase tracking-widest">
              {item}
            </a>
          ))}
        </div>
      )}

      {/* Главный экран */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1F2A1F]/40 via-[#0B0F0D] to-[#0B0F0D] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-[#fcffff]">
            ЭСТЕТИКА <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CA98C] to-[#D9C7A3]">
              ВЫСОКОГО УРОВНЯ
            </span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-[#8CA98C] max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Стратегический подход и визуал, который подчёркивает статус вашего бизнеса.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#контакты" className="px-8 py-4 bg-gradient-to-r from-[#3E5A3F] to-[#1F2A1F] text-[#fcffff] rounded-full font-medium tracking-wide hover:shadow-[0_0_20px_rgba(217,199,163,0.3)] transition-all flex items-center gap-2 border border-[#8CA98C]/30">
              Обсудить проект <ArrowRight size={20} />
            </a>
            <a href="#услуги" className="px-8 py-4 bg-transparent border-2 border-[#1F2A1F] text-[#D9C7A3] rounded-full font-medium tracking-wide hover:bg-[#1F2A1F] transition-all">
              Смотреть услуги
            </a>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="услуги" className="py-24 bg-[#0B0F0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#fcffff] mb-4">Мои услуги</h2>
            <div className="w-20 h-1 bg-[#D9C7A3]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1F2A1F] p-10 rounded-2xl border border-[#3E5A3F]/30 hover:border-[#D9C7A3]/50 transition-all group">
              <div className="w-14 h-14 bg-[#0B0F0D] rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-[#8CA98C]/20">
                <Hexagon className="text-[#D9C7A3]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#fcffff] mb-4">Создание логотипа</h3>
              <p className="text-[#8CA98C] leading-relaxed">
                Уникальный знак, который станет сильным фундаментом вашего визуального образа.
              </p>
            </div>
            
            <div className="bg-[#1F2A1F] p-10 rounded-2xl border border-[#3E5A3F]/30 hover:border-[#D9C7A3]/50 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#D9C7A3] text-[#0B0F0D] text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <div className="w-14 h-14 bg-[#0B0F0D] rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-[#8CA98C]/20">
                <Star className="text-[#D9C7A3]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#fcffff] mb-4">Логобуки</h3>
              <p className="text-[#8CA98C] leading-relaxed">
                Подробное руководство по использованию логотипа, фирменных цветов и шрифтов.
              </p>
            </div>

            <div className="bg-[#1F2A1F] p-10 rounded-2xl border border-[#3E5A3F]/30 hover:border-[#D9C7A3]/50 transition-all group">
              <div className="w-14 h-14 bg-[#0B0F0D] rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-[#8CA98C]/20">
                <Hexagon className="text-[#D9C7A3]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#fcffff] mb-4">Брендинг</h3>
              <p className="text-[#8CA98C] leading-relaxed">
                Комплексная разработка айдентики: от стратегии до полного набора носителей.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Портфолио */}
      <section id="портфолио" className="py-24 bg-[#1F2A1F]/30 border-y border-[#3E5A3F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#fcffff] mb-4">Мне доверяют</h2>
              <div className="w-20 h-1 bg-[#D9C7A3]"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-[#1F2A1F] border border-[#3E5A3F]/40 hover:border-[#D9C7A3] hover:shadow-[0_0_30px_rgba(217,199,163,0.15)] transition-all duration-500 flex items-center justify-center p-8">
                
                {/* Исправленные настройки картинки */}
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[#8CA98C] text-sm uppercase tracking-widest font-bold mb-2 block">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="контакты" className="py-24 bg-[#0B0F0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#fcffff] mb-8">Готовы создать сильный бренд?</h2>
          <p className="text-[#8CA98C] text-xl mb-12 max-w-2xl mx-auto">
            Свяжитесь со мной, чтобы обсудить вашу задачу и получить бесплатную консультацию.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
            <a href="tel:+79151969600" className="flex items-center gap-4 text-2xl font-bold text-[#fcffff] hover:text-[#D9C7A3] transition-colors">
              <Phone size={32} className="text-[#8CA98C]" /> +7 915 196 96 00
            </a>
            <a href="mailto:klavdimos@yandex.ru" className="flex items-center gap-4 text-2xl font-bold text-[#fcffff] hover:text-[#D9C7A3] transition-colors">
              <Mail size={32} className="text-[#8CA98C]" /> klavdimos@yandex.ru
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="https://wa.me/79151969600" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full bg-[#1F2A1F] flex items-center justify-center text-[#D9C7A3] hover:bg-[#D9C7A3] hover:text-[#0B0F0D] transition-colors border border-[#3E5A3F]">
              <Phone size={28} />
            </a>
            <a href="https://vk.com/klavmos" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full bg-[#1F2A1F] flex items-center justify-center text-[#D9C7A3] hover:bg-[#D9C7A3] hover:text-[#0B0F0D] transition-colors border border-[#3E5A3F]">
              <span className="text-2xl font-bold">VK</span>
            </a>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#0B0F0D] border-t border-[#1F2A1F] py-8 text-center text-[#8CA98C] text-sm">
        <p>© {new Date().getFullYear()} KLAVDIMOS. Своя в дизайне. Все права защищены.</p>
      </footer>
    </div>
  );
}