import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.observe-animation').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Node.js', icon: 'Server', level: 95 },
    { name: 'Python', icon: 'Code2', level: 90 },
    { name: 'PostgreSQL', icon: 'Database', level: 88 },
    { name: 'Docker', icon: 'Box', level: 85 },
    { name: 'Redis', icon: 'Zap', level: 80 },
    { name: 'AWS', icon: 'Cloud', level: 82 },
    { name: 'GraphQL', icon: 'Network', level: 87 },
    { name: 'MongoDB', icon: 'Database', level: 83 },
  ];

  const experience = [
    {
      year: '2023 - Настоящее время',
      position: 'Senior Backend Developer',
      company: 'TechCorp',
      description: 'Разработка высоконагруженных микросервисов, оптимизация производительности API',
    },
    {
      year: '2021 - 2023',
      position: 'Backend Developer',
      company: 'StartupHub',
      description: 'Создание RESTful API, интеграция платежных систем, работа с базами данных',
    },
    {
      year: '2019 - 2021',
      position: 'Junior Backend Developer',
      company: 'WebStudio',
      description: 'Поддержка и развитие существующих проектов, написание unit-тестов',
    },
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Высоконагруженная платформа для онлайн-торговли с микросервисной архитектурой',
      tech: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      icon: 'ShoppingCart',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Система аналитики в реальном времени с обработкой больших объемов данных',
      tech: ['Python', 'MongoDB', 'GraphQL', 'AWS'],
      icon: 'BarChart3',
    },
    {
      title: 'Payment Gateway',
      description: 'Безопасный платежный шлюз с интеграцией множества платежных систем',
      tech: ['Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
      icon: 'CreditCard',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">DevPortfolio</h1>
          <div className="flex gap-6">
            {['Главная', 'Навыки', 'Опыт', 'Проекты', 'Контакты'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="главная" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="text-center space-y-8 max-w-4xl animate-fade-in">
          <div className="relative inline-block">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary via-accent to-secondary mx-auto mb-8 animate-glow" />
            <div className="absolute inset-0 w-40 h-40 rounded-full bg-gradient-to-br from-primary via-accent to-secondary mx-auto blur-xl opacity-50" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold gradient-text mb-4">
            Backend Developer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Создаю масштабируемые и надежные серверные решения. Специализируюсь на микросервисах, API и высоконагруженных системах
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <Icon name="Mail" className="mr-2" size={20} />
              Связаться
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать CV
            </Button>
          </div>
        </div>
      </section>

      <section id="навыки" className="py-24 px-6 observe-animation opacity-0">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
            Технические навыки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Icon name={skill.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="опыт" className="py-24 px-6 bg-muted/30 observe-animation opacity-0">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
            Опыт работы
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary" />
                <div className="space-y-2">
                  <span className="text-sm text-primary font-medium">{exp.year}</span>
                  <h3 className="text-2xl font-bold">{exp.position}</h3>
                  <p className="text-lg text-accent">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="проекты" className="py-24 px-6 observe-animation opacity-0">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
            Проекты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon name={project.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-24 px-6 bg-muted/30 observe-animation opacity-0">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
            Свяжитесь со мной
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Открыт для новых возможностей и интересных проектов
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity min-w-[200px]"
            >
              <Icon name="Mail" className="mr-2" size={20} />
              Email
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 min-w-[200px]"
            >
              <Icon name="Github" className="mr-2" size={20} />
              GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary/50 hover:bg-secondary/10 min-w-[200px]"
            >
              <Icon name="Linkedin" className="mr-2" size={20} />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Backend Developer Portfolio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
