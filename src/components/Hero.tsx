import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-hero-red via-hero-blue to-comic-dark overflow-hidden">
      {/* Comic-style background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl">💥</div>
        <div className="absolute top-40 right-20 text-6xl">⚡</div>
        <div className="absolute bottom-32 left-20 text-7xl">🦸</div>
        <div className="absolute top-60 left-1/2 text-5xl">🎯</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-text mb-6 leading-tight">
            GEEK HOSTEL
            <span className="block text-4xl text-hero-silver mt-2 font-hero">
              &HOTEL
            </span>
          </h1>

          <div className="comic-bubble max-w-2xl mx-auto mb-8">
            <p className="text-xl font-bold text-comic-dark">
              Тематические двухэтажные номера
              <span className="block text-hero-red">в центре Воронежа!</span>
            </p>
          </div>

          <p className="text-lg text-white mb-8 max-w-2xl mx-auto font-medium">
            Окунись в мир супергероев! Каждый номер — это отдельная вселенная со
            своими героями, комиксами и невероятными приключениями.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-hero-gold text-comic-dark hover:bg-hero-silver font-bold text-lg px-8 py-3 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <Icon name="Calendar" className="mr-2" />
              Забронировать номер
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-hero-gold text-hero-gold hover:bg-hero-gold hover:text-comic-dark font-bold text-lg px-8 py-3 rounded-full"
            >
              <Icon name="MapPin" className="mr-2" />
              Наше местоположение
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold text-hero-gold">50+</div>
              <div className="text-sm">Тематических номеров</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-hero-gold">24/7</div>
              <div className="text-sm">Служба поддержки</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-hero-gold">4.9</div>
              <div className="text-sm">Рейтинг гостей</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-hero-gold">VIP</div>
              <div className="text-sm">Центр города</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-hero-gold w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
