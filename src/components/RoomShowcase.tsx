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
    <section className="py-20 bg-comic-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-comic text-5xl font-bold text-comic-dark mb-4">
            Выбери свою
            <span className="text-hero-red block">СУПЕР-КОМНАТУ!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждый номер — это отдельная вселенная с уникальным дизайном,
            двухэтажной планировкой и всеми удобствами для незабываемого отдыха
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="comic-card bg-white rounded-2xl overflow-hidden border-4 border-comic-dark"
            >
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-64 object-cover"
                />
                <div
                  className={`absolute top-4 left-4 ${room.color} text-white px-3 py-1 rounded-full text-sm font-bold`}
                >
                  {room.theme}
                </div>
                <div className="absolute top-4 right-4 bg-hero-gold text-comic-dark px-3 py-2 rounded-full font-bold">
                  {room.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-comic text-2xl font-bold text-comic-dark mb-3">
                  {room.title}
                </h3>

                <div className="space-y-2 mb-6">
                  {room.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-600"
                    >
                      <Icon
                        name="Check"
                        className="w-5 h-5 text-hero-red mr-2"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-hero-red hover:bg-red-700 text-white font-bold">
                    <Icon name="Calendar" className="w-4 h-4 mr-2" />
                    Забронировать
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-hero-red text-hero-red hover:bg-hero-red hover:text-white"
                  >
                    <Icon name="Eye" className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-hero-blue text-hero-blue hover:bg-hero-blue hover:text-white font-bold"
          >
            <Icon name="Grid3X3" className="w-5 h-5 mr-2" />
            Показать все номера
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoomShowcase;
