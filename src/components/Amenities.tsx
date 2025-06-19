import Icon from "@/components/ui/icon";

interface Amenity {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const amenities: Amenity[] = [
  {
    icon: "Wifi",
    title: "Супер-скоростной Wi-Fi",
    description: "Играй, стримь, качай — интернет как у Старка!",
    color: "text-hero-blue",
  },
  {
    icon: "Car",
    title: "Парковка для Бэтмобиля",
    description: "Бесплатная охраняемая парковка 24/7",
    color: "text-gray-800",
  },
  {
    icon: "Coffee",
    title: "Кафе «Мстители»",
    description: "Завтраки супергероев и кофе от Тони Старка",
    color: "text-hero-gold",
  },
  {
    icon: "Gamepad2",
    title: "Игровая комната",
    description: "PlayStation 5, Xbox, VR и ретро-консоли",
    color: "text-hero-red",
  },
  {
    icon: "Shield",
    title: "Безопасность Щ.И.Т.",
    description: "Круглосуточная охрана и видеонаблюдение",
    color: "text-hero-blue",
  },
  {
    icon: "Utensils",
    title: "Кухня Росомахи",
    description: "Общая кухня с полным оборудованием",
    color: "text-hero-gold",
  },
];

const Amenities = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-comic-dark to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-comic text-5xl font-bold text-hero-gold mb-4">
            СУПЕР-УДОБСТВА
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Мы собрали все лучшее для комфорта наших гостей — от технологий
            Старка до уюта дома Уэйнов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 rounded-full bg-white/10 ${amenity.color} mr-4`}
                >
                  <Icon name={amenity.icon as any} className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl text-white">
                  {amenity.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-hero-red/20 border border-hero-red rounded-2xl p-8 max-w-2xl">
            <h3 className="font-comic text-3xl font-bold text-hero-gold mb-4">
              🎯 СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <div className="text-hero-gold font-bold mb-2">
                  Для студентов
                </div>
                <div className="text-white">
                  Скидка 15% при предъявлении студенческого
                </div>
              </div>
              <div>
                <div className="text-hero-gold font-bold mb-2">
                  Группы от 4 человек
                </div>
                <div className="text-white">Скидка 20% на бронирование</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
