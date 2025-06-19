import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 bg-comic-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-comic text-5xl font-bold text-comic-dark mb-4">
              НАЙДИ НАС
              <span className="text-hero-red block">В ЦЕНТРЕ ВОРОНЕЖА!</span>
            </h2>
            <p className="text-xl text-gray-600">
              Мы находимся в самом сердце города — рядом с главными
              достопримечательностями
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="comic-bubble">
                <h3 className="font-comic text-2xl font-bold text-comic-dark mb-6">
                  Контакты штаб-квартиры
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-hero-red text-white p-3 rounded-full mr-4">
                      <Icon name="MapPin" className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-comic-dark">Адрес</div>
                      <div className="text-gray-600">
                        ул. Революции 1905 года, 31, Воронеж
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-hero-blue text-white p-3 rounded-full mr-4">
                      <Icon name="Phone" className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-comic-dark">Телефон</div>
                      <div className="text-gray-600">+7 (473) 123-45-67</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-hero-gold text-comic-dark p-3 rounded-full mr-4">
                      <Icon name="Mail" className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-comic-dark">Email</div>
                      <div className="text-gray-600">info@geekhostel.ru</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-comic-accent text-white p-3 rounded-full mr-4">
                      <Icon name="Clock" className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-comic-dark">Работаем</div>
                      <div className="text-gray-600">
                        Круглосуточно, без выходных
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-hero-red hover:bg-red-700 text-white font-bold flex-1"
                >
                  <Icon name="Calendar" className="mr-2" />
                  Забронировать сейчас
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-hero-blue text-hero-blue hover:bg-hero-blue hover:text-white font-bold flex-1"
                >
                  <Icon name="MessageCircle" className="mr-2" />
                  Написать в чат
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="comic-card bg-white rounded-2xl overflow-hidden border-4 border-comic-dark">
                <div className="aspect-video bg-gradient-to-br from-hero-blue/20 to-hero-red/20 flex items-center justify-center">
                  <div className="text-center">
                    <Icon
                      name="MapPin"
                      className="w-16 h-16 text-hero-red mx-auto mb-4"
                    />
                    <div className="font-comic text-2xl font-bold text-comic-dark">
                      Интерактивная карта
                    </div>
                    <div className="text-gray-600 mt-2">
                      Центр Воронежа • 5 мин от Адмиралтейской площади
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-hero-gold/10">
                  <h4 className="font-bold text-comic-dark mb-3">
                    Рядом с нами:
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center">
                      <Icon
                        name="Camera"
                        className="w-4 h-4 text-hero-red mr-2"
                      />
                      <span>Театр оперы и балета</span>
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="ShoppingBag"
                        className="w-4 h-4 text-hero-blue mr-2"
                      />
                      <span>ТРЦ Галерея Чижова</span>
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="TreePine"
                        className="w-4 h-4 text-green-600 mr-2"
                      />
                      <span>Кольцовский сквер</span>
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="Utensils"
                        className="w-4 h-4 text-hero-gold mr-2"
                      />
                      <span>Рестораны и кафе</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
