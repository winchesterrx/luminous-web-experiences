
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Modern",
      description: "Site de e-commerce completo com carrinho de compras, pagamentos e painel administrativo.",
      imageUrl: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      projectUrl: "https://github.com/winchesterrx"
    },
    {
      title: "Aplicativo de Streaming",
      description: "Plataforma de streaming com reprodução de vídeo em alta qualidade e sistema de recomendação.",
      imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      projectUrl: "https://github.com/winchesterrx"
    },
    {
      title: "Dashboard Analytics",
      description: "Painel de controle para visualização de dados com gráficos interativos e relatórios personalizados.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      projectUrl: "https://github.com/winchesterrx"
    },
    {
      title: "App de Finanças",
      description: "Aplicativo para controle de finanças pessoais com categorização automática e visualização de gastos.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      projectUrl: "https://github.com/winchesterrx"
    },
    {
      title: "Rede Social",
      description: "Plataforma de rede social completa com feed, mensagens diretas e compartilhamento de conteúdo.",
      imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
      projectUrl: "https://github.com/winchesterrx"
    },
    {
      title: "Portfólio Criativo",
      description: "Site de portfólio com animações e interações únicas para destacar trabalhos criativos.",
      imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      projectUrl: "https://github.com/winchesterrx"
    },
  ];
  
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-neon-green font-code text-sm text-center mb-2">Meus trabalhos</p>
        <h2 className="section-heading neon-text-blue">Projetos</h2>
        <p className="section-subheading max-w-3xl mx-auto">
          Conheça alguns dos projetos que desenvolvi utilizando as mais modernas tecnologias
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
