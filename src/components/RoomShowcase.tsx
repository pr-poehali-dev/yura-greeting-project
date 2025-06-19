import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Room {
  id: number;
  title: string;
  theme: string;
  price: string;
  image: string;
  features: string[];
  color: string;
}

const rooms: Room[] = [
  {
    id: 1,
    title: "Логово Железного Человека",
    theme: "Marvel • Iron Man",
    price: "от 2500₽",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    features: ["Двухэтажный номер", 'Smart TV 75"', "Игровая зона"],
    color: "bg-hero-red",
  },
  {
    id: 2,
    title: "Пещера Бэтмена",
    theme: "DC • Batman",
    price: "от 2800₽",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    features: ["Темная стилистика", "Кинотеатр", "Мини-бар"],
    color: "bg-gray-800",
  },
  {
    id: 3,
    title: "Асгард Тора",
    theme: "Marvel • Thor",
    price: "от 3000₽",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    features: ["Скандинавский дизайн", "Сауна", "Королевская кровать"],
    color: "bg-hero-gold",
  },
  {
    id: 4,
    title: "Лаборатория Спайдермена",
    theme: "Marvel • Spider-Man",
    price: "от 2300₽",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
    features: ["Молодежный стиль", "Gaming setup", "Паутина декор"],
    color: "bg-hero-blue",
  },
];

const RoomShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.1)_0%,transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-red-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              Премиальные номера
            </div>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-blue-600 to-purple-600 mb-6 font-hero">
            ВЫБЕРИ СВОЮ
            <span className="block text-yellow-500">ВСЕЛЕННУЮ!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Каждый номер — это отдельная вселенная с уникальным дизайном,
            двухэтажной планировкой и всеми удобствами для незабываемого отдыха
            в стиле любимых героев
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500"
            >
              {/* Enhanced image section */}
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Floating badges */}
                <div className="absolute top-6 left-6">
                  <div
                    className={`${room.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm`}
                  >
                    {room.theme}
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full font-black text-lg shadow-lg">
                    {room.price}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <div className="text-sm font-medium opacity-90">
                      Доступно для бронирования
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced content section */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {room.title}
                </h3>

                <div className="space-y-3 mb-8">
                  {room.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                        <Icon name="Check" className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Enhanced action buttons */}
                <div className="flex gap-4">
                  <Button className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                    <Icon name="Calendar" className="w-5 h-5 mr-2" />
                    Забронировать
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Icon name="Eye" className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div className="text-center mt-20">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-12 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Icon name="Grid3X3" className="w-6 h-6 mr-3" />
            Показать все номера
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoomShowcase;
