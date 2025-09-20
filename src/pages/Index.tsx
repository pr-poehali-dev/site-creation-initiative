import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calculatorValues, setCalculatorValues] = useState({
    serviceType: '',
    budget: '',
    timeframe: ''
  });

  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    if (!calculatorValues.serviceType || !calculatorValues.budget) return;
    
    const basePrice = parseInt(calculatorValues.budget) || 0;
    let multiplier = 1;
    
    switch (calculatorValues.serviceType) {
      case 'seo': multiplier = 1.2; break;
      case 'contextual': multiplier = 1.5; break;
      case 'social': multiplier = 1.1; break;
      case 'complex': multiplier = 2.0; break;
    }
    
    switch (calculatorValues.timeframe) {
      case '1-3': multiplier *= 1.3; break;
      case '3-6': multiplier *= 1.1; break;
      case '6+': multiplier *= 0.9; break;
    }
    
    setCalculatedPrice(Math.round(basePrice * multiplier));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-gray-900">NetworkiK</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#cases" className="text-gray-700 hover:text-primary transition-colors">Кейсы</a>
              <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
              <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
            </div>
            <Button className="gradient-primary hover:opacity-90">Заказать</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Увеличиваем лиды и видимость через{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  умные сигналы
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Мы развиваем SEO и рекламу, а также маркетинг. За 1 год на рынке. 3.5+ лет 
                на рынке. Оказались клиенты. Количественные предприятия. Кейсы и тренды 
                в нашей работе.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-primary hover:opacity-90 hover-scale">
                  Бесплатный аудит
                </Button>
                <Button size="lg" variant="outline" className="hover-scale">
                  <Icon name="Play" size={16} className="mr-2" />
                  Кейсы и видео
                </Button>
              </div>
              
              {/* Stats */}
              <div className="flex gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-gray-600">клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">300%</div>
                  <div className="text-sm text-gray-600">рост показов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">5 лет</div>
                  <div className="text-sm text-gray-600">на рынке</div>
                </div>
              </div>
            </div>
            
            {/* Chart visualization */}
            <div className="relative animate-scale-in">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">Рост трафика клиентов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-end space-x-2 h-32">
                      <div className="w-8 bg-blue-200 h-8 rounded-sm"></div>
                      <div className="w-8 bg-blue-300 h-12 rounded-sm"></div>
                      <div className="w-8 bg-blue-400 h-16 rounded-sm"></div>
                      <div className="w-8 bg-blue-500 h-24 rounded-sm"></div>
                      <div className="w-8 gradient-primary h-32 rounded-sm"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">+247%</div>
                      <div className="text-sm text-gray-500">за 6 месяцев</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Кому подходит?</h2>
            <p className="text-xl text-gray-600">Сервис NetworkiK на Яндекс Платформе находит новых потребителей и всех возрастных групп</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Business */}
            <Card className="border-0 shadow-lg hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building2" size={24} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Для бизнеса</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mt-1" />
                  <div>
                    <div className="font-medium">Быстрый запуск</div>
                    <div className="text-sm text-gray-600">Автоматическая настройка реклама и SEO менеджеров в удобные для клиентов интерфейсы</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mt-1" />
                  <div>
                    <div className="font-medium">Русская техподдержка</div>
                    <div className="text-sm text-gray-600">Онлайн службы поддержки круглосуточно и оптимально на оптимизации</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mt-1" />
                  <div>
                    <div className="font-medium">API интеграция</div>
                    <div className="text-sm text-gray-600">Подключение API Яндекса SEO и CTR — без лимитов по запросам</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* For Agencies */}
            <Card className="border-0 shadow-lg hover-scale">
              <CardHeader className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Для агентств</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" size={20} className="text-blue-500 mt-1" />
                  <div>
                    <div className="font-medium">Личная управляющая</div>
                    <div className="text-sm text-gray-600">Работают персональные менеджеры как обучение от специалистов по обучению</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" size={20} className="text-blue-500 mt-1" />
                  <div>
                    <div className="font-medium">White Label API</div>
                    <div className="text-sm text-gray-600">Размещение онлайн SEO, мобильную приложения облачных под свой собственный уровень работы</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" size={20} className="text-blue-500 mt-1" />
                  <div>
                    <div className="font-medium">Лимиты разработки</div>
                    <div className="text-sm text-gray-600">Данные мониторинги, оптимизации, что необходимо своего на своими и подготовки</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-gray-600">Рассчитайте стоимость продвижения для вашего проекта</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Узнайте стоимость услуг</CardTitle>
                <CardDescription className="text-center">Выберите параметры для расчета персонального предложения</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="service-type">Тип услуги</Label>
                  <Select value={calculatorValues.serviceType} onValueChange={(value) => setCalculatorValues({...calculatorValues, serviceType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип услуги" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seo">SEO продвижение</SelectItem>
                      <SelectItem value="contextual">Контекстная реклама</SelectItem>
                      <SelectItem value="social">Реклама в соцсетях</SelectItem>
                      <SelectItem value="complex">Комплексное продвижение</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="budget">Ваш бюджет на месяц (₽)</Label>
                  <Input 
                    id="budget"
                    type="number" 
                    placeholder="50000"
                    value={calculatorValues.budget}
                    onChange={(e) => setCalculatorValues({...calculatorValues, budget: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timeframe">Срок сотрудничества</Label>
                  <Select value={calculatorValues.timeframe} onValueChange={(value) => setCalculatorValues({...calculatorValues, timeframe: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите срок" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 месяца</SelectItem>
                      <SelectItem value="3-6">3-6 месяцев</SelectItem>
                      <SelectItem value="6+">6+ месяцев</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  onClick={calculatePrice} 
                  className="w-full gradient-primary hover:opacity-90"
                  size="lg"
                >
                  <Icon name="Calculator" size={16} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                
                {calculatedPrice && (
                  <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
                    <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                      {calculatedPrice.toLocaleString()} ₽
                    </div>
                    <div className="text-gray-600">Стоимость услуг в месяц</div>
                    <Button className="mt-4" variant="outline">
                      Получить предложение
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-gray-600">Ответы на популярные вопросы о наших услугах</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  Сколько времени займет видимый результат?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Первые результаты в контекстной рекламе появляются через 1-2 недели. 
                  Для SEO продвижения заметный рост позиций начинается через 2-3 месяца 
                  активной работы.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  Какие гарантии вы предоставляете?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Мы гарантируем прозрачную отчетность, выполнение всех работ согласно 
                  техническому заданию и возврат средств в случае невыполнения KPI.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  Работаете ли вы с небольшими бюджетами?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Да, мы работаем с проектами от 30 000 рублей в месяц. Для каждого клиента 
                  подбираем оптимальную стратегию в рамках бюджета.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  Можно ли отслеживать результаты в режиме реального времени?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Конечно! Мы предоставляем доступ к личному кабинету с детальной аналитикой 
                  и автоматическими отчетами по всем показателям.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Готовы увеличить поток клиентов?</h2>
            <p className="text-xl mb-8 opacity-90">
              Получите бесплатный аудит вашего сайта и персональную стратегию продвижения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-scale">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary hover-scale">
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl mb-4">NetworkiK</div>
              <p className="text-gray-400">Увеличиваем лиды и видимость через умные маркетинговые сигналы</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-gray-400">
                <div>SEO продвижение</div>
                <div>Контекстная реклама</div>
                <div>Реклама в соцсетях</div>
                <div>Комплексное продвижение</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <div className="space-y-2 text-gray-400">
                <div>О нас</div>
                <div>Кейсы</div>
                <div>Отзывы</div>
                <div>Контакты</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>+7 (495) 123-45-67</div>
                <div>info@networkih.ru</div>
                <div>Москва, ул. Примерная, 1</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NetworkiK. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;