import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, Phone, Hexagon, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioItems = [
  { id: 1, category: 'Логотип', title: 'Brand 1', imageUrl: 'https://static.tildacdn.com/tild3537-6461-4761-b336-393139376161/Untitled-2-01.png' },
  { id: 2, category: 'Брендинг', title: 'Brand 2', imageUrl: 'https://static.tildacdn.com/tild6535-3933-4236-a536-323464613432/Untitled-2.png' },
  { id: 3, category: 'Логобук', title: 'Brand 3', imageUrl: 'https://static.tildacdn.com/tild3565-3131-4432-b134-373232353365/Untitled-2-03.png' },
  { id: 4, category: 'Логотип', title: 'Brand 4', imageUrl: 'https://static.tildacdn.com/tild3061-6562-4537-b462-623131636637/Untitled-2-04.png' },
  { id: 5, category: 'Брендинг', title: 'Brand 5', imageUrl: 'https://static.tildacdn.com/tild6336-6536-4932-b765-373064636133/Untitled-2-02.png' },
  { id: 6, category: 'Логобук', title: 'Brand 6', imageUrl: 'https://static.tildacdn.com/tild3361-6665-4339-b033-643064343132/Untitled-2.png' },
];

// Теперь вместо imageUrl мы используем массив images: [...]
const logoPortfolioItems = [
  { 
    id: 1, 
    title: 'Сеть магазинов "ХалВей"', 
    location: 'г. Москва', 
    // Пример проекта с ТРЕМЯ фотографиями
    images: ['/logos/halvey-1.png', '/logos/halvey-2.png', '/logos/halvey-3.png'] 
  },
  { 
    id: 2, 
    title: 'Мадина Тагирова', 
    location: 'Личный бренд', 
    // Если фото одно, оно просто указывается в массиве одним элементом
    images: ['/logos/madina-1.png'] 
  },
  { id: 3, title: 'Halal Cosmetics', location: 'г. Махачкала', images: ['/logos/halal-1.png'] },
  { id: 4, title: 'КСК "Altis"', location: 'г. Зеленоград', images: ['/logos/altis-1.png'] },
  { id: 5, title: 'Последний путь', location: 'г. Москва', images: ['/logos/put-1.png'] },
  { id: 6, title: 'Шефова Юлия', location: 'Доктор гинеколог', images: ['/logos/shefova-1.png'] },
  { id: 7, title: 'Battalov D. Hadj Umar', location: 'Личный бренд', images: ['/logos/battalov-1.png'] },
  { id: 8, title: 'Кондитерская "Калач"', location: 'Бизнес', images: ['/logos/kalach-1.png'] },
  { id: 9, title: 'ЦСА "GRATUS"', location: 'Адаптация и реабилитация', images: ['/logos/gratus-1.png'] },
  { id: 10, title: 'Школа Юрия Гончара', location: 'Эстрадное искусство', images: ['/logos/gonchar-1.png'] },
  { id: 11, title: 'Мужская цирюльня "Столыпин"', location: 'Барбершоп', images: ['/logos/stolypin-1.png'] },
  { id: 12, title: 'Цирковая студия "Колибри"', location: 'Детская студия', images: ['/logos/kolibri-1.png'] },
];

// Новый компонент: Умная карточка с перелистыванием фото
function LogoCard({ item }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  return (
    <div className="bg-[#1F2A1F] rounded-2xl border border-[#3E5A3F]/40 overflow-hidden group">
      <div className="aspect-[4/3] w-full bg-[#0B0F0D] relative overflow-hidden flex items-center justify-center p-8">
        <img 
          src={item.images[currentIndex]} 
          alt={item.title} 
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Показываем стрелочки и точки только если фотографий больше одной */}
        {item.images.length > 1 && (
          <>
            <button 
              onClick={prevImg}
              className="absolute left-2 w-8 h-8 rounded-full bg-[#1F2A1F]/90 flex items-center justify-center text-[#D9C7A3] hover:bg-[#D9C7A3] hover:text-[#0B0F0D] transition-colors border border-[#3E5A3F] opacity-0 group-hover:opacity-100 shadow-lg z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImg}
              className="absolute right-2 w-8 h-8 rounded-full bg-[#1F2A1F]/90 flex items-center justify-center text-[#D9C7A3] hover:bg-[#D9C7A3] hover:text-[#0B0F0D] transition-colors border border-[#3E5A3F] opacity-0 group-hover:opacity-100 shadow-lg z-10"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Точки-индикаторы снизу */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {item.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#D9C7A3] w-6' : 'bg-[#8CA98C]/40'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6 border-t border-[#3E5A3F]/40">
        <h3 className="text-xl font-bold text-[#fcffff] mb-1">{item.title}</h3>
        <p className="text-[#8CA98C] text-sm">{item.location}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isLogoModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isLogoModalOpen]);

  return (
    <div className="min-h-screen bg-[#0B0F0D] text-[#D9C7A3] font-sans selection:bg-[#8CA98C] selection:text-[#0B0F0D]">
      
      {/* Навигация */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-[#0B0F0D]/90 backdrop-blur-md py-4 shadow-lg shadow-[#1F2A1F]/50' : 'bg-transparent py-6'}`}>
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
        <div className="fixed inset-0 z-30 bg-[#0B0F0D] flex flex-col justify-center items-center space-y-8 md:hidden">
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
            <div 
              onClick={() => setIsLogoModalOpen(true)}
              className="bg-[#1F2A1F] p-10 rounded-2xl border border-[#3E5A3F]/30 hover:border-[#D9C7A3]/80 transition-all group cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(217,199,163,0.15)] relative flex flex-col"
            >
              <div className="w-14 h-14 bg-[#0B0F0D] rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-[#8CA98C]/20">
                <Hexagon className="text-[#D9C7A3]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#fcffff] mb-4 group-hover:text-[#D9C7A3] transition-colors">Создание логотипа</h3>
              <p className="text-[#8CA98C] leading-relaxed mb-6">
                Придумать логотип может любой, но придумать именно такой логотип, какой нужно, под силу не каждому. Удачный дизайн должен быть простым, уместным, долговечным, запоминающимся и легко адаптируемым.
              </p>
              <div className="flex items-center text-[#D9C7A3] font-bold text-sm uppercase tracking-widest mt-auto border-t border-[#3E5A3F]/30 pt-6">
                Смотреть работы <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </div>
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

      {/* Портфолио (главная) */}
      <section id="портфолио" className="py-24 bg-[#1F2A1F]/30 border-t border-[#3E5A3F]/20">
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
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[#8CA98C] text-sm uppercase tracking-widest font-bold mb-2 block">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Обо мне */}
      <section id="обо мне" className="py-24 bg-[#0B0F0D] border-t border-[#3E5A3F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8CA98C] to-[#D9C7A3] rounded-2xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Клавдия Мос" className="relative rounded-2xl object-cover w-full h-[500px] lg:h-[650px] border border-[#3E5A3F]/50 grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 shadow-2xl" />
              <div className="absolute -bottom-6 -right-2 lg:-right-8 bg-[#1F2A1F] border border-[#3E5A3F]/60 p-6 rounded-2xl shadow-[0_0_40px_rgba(11,15,13,0.9)] backdrop-blur-sm z-10">
                <div className="text-4xl lg:text-5xl font-bold text-[#D9C7A3] mb-1">12<span className="text-[#8CA98C] text-3xl">+</span></div>
                <div className="text-xs lg:text-sm text-[#fcffff] uppercase tracking-widest font-medium">Лет опыта</div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <h2 className="text-4xl md:text-5xl font-bold text-[#fcffff] mb-2">Клавдия Мос</h2>
              <div className="text-[#8CA98C] text-lg tracking-widest uppercase mb-6 font-medium">Бренд-дизайнер</div>
              <div className="w-20 h-1 bg-[#D9C7A3] mb-10"></div>
              <div className="space-y-6 text-[#8CA98C] text-lg lg:text-xl font-light leading-relaxed">
                <p>Я создаю визуальный путь и позиционирование для компаний с характером. Моя миссия — делать визуал, который вызывает доверие, отражает ценности бренда и работает на рост.</p>
                <div className="border-l-2 border-[#D9C7A3] pl-6 py-2 my-8">
                  <p className="text-[#fcffff] font-medium">Беру на себя всю визуальную зону ответственности: вы делегируете — я делаю. Минимум правок, максимум смысла.</p>
                </div>
                <p>Я не работаю с теми, кто пытается «рисовать моими руками». Моя задача — создать визуал, который говорит за бренд.</p>
                <p className="text-[#D9C7A3]">Если вам нужен дизайн как инструмент доверия и уверенности — давайте знакомиться.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="контакты" className="py-24 bg-[#1F2A1F]/30 border-t border-[#3E5A3F]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#fcffff] mb-8">Готовы создать сильный бренд?</h2>
          <p className="text-[#8CA98C] text-xl mb-12 max-w-2xl mx-auto">Свяжитесь со мной, чтобы обсудить вашу задачу и получить бесплатную консультацию.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
            <a href="tel:+79151969600" className="flex items-center gap-4 text-2xl font-bold text-[#fcffff] hover:text-[#D9C7A3] transition-colors"><Phone size={32} className="text-[#8CA98C]" /> +7 915 196 96 00</a>
            <a href="mailto:klavdimos@yandex.ru" className="flex items-center gap-4 text-2xl font-bold text-[#fcffff] hover:text-[#D9C7A3] transition-colors"><Mail size={32} className="text-[#8CA98C]" /> klavdimos@yandex.ru</a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://wa.me/79151969600" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full bg-[#1F2A1F] flex items-center justify-center text-[#D9C7A3] hover:bg-[#D9C7A3] hover:text-[#0B0F0D] transition-colors border border-[#3E5A3F]"><Phone size={28} /></a>
            <a href="https://vk.com/klavmos" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full bg-[#1F2A1F] flex items-center justify-center text-[#D9C7A3] hover:bg-[#D9C7A3] hover:text-[#0B0F0D] transition-colors border border-[#3E5A3F]"><span className="text-2xl font-bold">VK</span></a>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#0B0F0D] border-t border-[#1F2A1F] py-8 text-center text-[#8CA98C] text-sm">
        <p>© {new Date().getFullYear()} KLAVDIMOS. Своя в дизайне. Все права защищены.</p>
      </footer>

      {/* МОДАЛЬНОЕ ОКНО ПОРТФОЛИО ЛОГОТИПОВ */}
      {isLogoModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B0F0D]/95 backdrop-blur-xl flex flex-col overflow-y-auto">
          <div className="min-h-screen p-4 md:p-8">
            <div className="flex justify-between items-center max-w-7xl mx-auto w-full mb-12 pt-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#fcffff] mb-2">Созданные логотипы</h2>
                <div className="w-20 h-1 bg-[#D9C7A3]"></div>
              </div>
              <button onClick={() => setIsLogoModalOpen(false)} className="w-12 h-12 rounded-full bg-[#1F2A1F] flex items-center justify-center text-[#D9C7A3] hover:bg-[#D9C7A3] hover:text-[#0B0F0D] transition-colors border border-[#3E5A3F]">
                <X size={24} />
              </button>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
              {/* Используем наш новый умный компонент карточки */}
              {logoPortfolioItems.map((item) => (
                <LogoCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}