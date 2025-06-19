import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-yellow-400 rounded-full opacity-30 animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-blue-400 rounded-full opacity-15 animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-purple-500 rounded-full opacity-25 animate-pulse"></div>

        {/* Particle effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-blue-500/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(255,215,0,0.1)_60deg,transparent_120deg)] animate-spin-slow"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main title with enhanced effects */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 animate-gradient-x font-hero drop-shadow-2xl">
              GEEK
            </h1>
            <div className="flex items-center justify-center gap-4 mt-2">
              <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 animate-pulse"></div>
              <span className="text-4xl md:text-5xl font-bold text-white font-hero tracking-wider">
                HOSTEL & HOTEL
              </span>
              <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1 animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced tagline */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-red-600/20 blur-xl rounded-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
              <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                Тематические двухэтажные номера
              </p>
              <p className="text-xl text-yellow-400 font-semibold">
                в самом центре Воронежа! ⚡
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Окунись в мир супергероев! Каждый номер — это отдельная вселенная со
            своими героями, комиксами и невероятными приключениями. Премиальный
            сервис для настоящих фанатов.
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-red-400/50">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Icon name="Calendar" className="mr-3 w-6 h-6" />
              <span className="relative z-10">Забронировать номер</span>
            </Button>

            <Button
              variant="outline"
              className="group relative overflow-hidden bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold text-lg px-10 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Icon name="MapPin" className="mr-3 w-6 h-6" />
              <span className="relative z-10">Наше местоположение</span>
            </Button>
          </div>

          {/* Enhanced stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Тематических номеров", icon: "Home" },
              { value: "24/7", label: "Служба поддержки", icon: "Headphones" },
              { value: "4.9", label: "Рейтинг гостей", icon: "Star" },
              { value: "VIP", label: "Центр города", icon: "MapPin" },
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl group-hover:shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <Icon
                    name={stat.icon as any}
                    className="w-8 h-8 text-yellow-400 mx-auto mb-3"
                  />
                  <div className="text-3xl font-black text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <div className="text-yellow-400 text-sm font-medium mb-2">
            Листай вниз
          </div>
          <div className="w-8 h-12 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
