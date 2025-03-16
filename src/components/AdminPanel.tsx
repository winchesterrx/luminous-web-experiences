import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Save, Trash, Image, Plus } from "lucide-react";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProjectType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const AdminPanel = ({ isOpen, onClose }: AdminPanelProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("hero");
  
  // Form states
  const [heroData, setHeroData] = useState({
    name: "Gabriel Silva",
    roles: "Web Developer, Front-end Specialist, Full-Stack Engineer, UI/UX Enthusiast",
    tagline: "Transformando ideias em experiências digitais extraordinárias com código limpo e design inovador",
  });
  
  const [aboutData, setAboutData] = useState({
    title: "Olá, sou Gabriel!",
    bio1: "Sou um desenvolvedor full-stack com expertise em criar produtos digitais de alta qualidade que combinam design elegante com funcionalidade robusta.",
    bio2: "Minha jornada na programação começou há 5 anos, e desde então tenho trabalhado com empresas de diversos setores para transformar suas ideias em realidade digital.",
    bio3: "Especializado em React, Node.js e tecnologias modernas de front-end, estou sempre buscando as melhores práticas e metodologias para entregar projetos que superam expectativas.",
  });
  
  const [contactData, setContactData] = useState({
    email: "gabriel.silva@exemplo.com",
    phone: "+1 (799) 779-9982",
    location: "São Paulo, Brasil",
    instagram: "https://instagram.com/gabriielssantoss",
    linkedin: "https://linkedin.com/in/gabriel-silva",
    github: "https://github.com/winchesterrx",
  });
  
  const [projects, setProjects] = useState<ProjectType[]>([
    {
      id: "1",
      title: "Aplicativo de Gestão Financeira",
      description: "Dashboard completo para controle de finanças pessoais com gráficos e análise preditiva.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      projectUrl: "#"
    },
    {
      id: "2",
      title: "E-commerce de Produtos Sustentáveis",
      description: "Loja virtual completa com sistema de pagamentos e área administrativa.",
      imageUrl: "https://images.unsplash.com/photo-1650825556125-060e52d40bd0?q=80&w=2070&auto=format&fit=crop",
      projectUrl: "#"
    },
    {
      id: "3",
      title: "Rede Social para Desenvolvedores",
      description: "Plataforma para compartilhamento de códigos e discussões técnicas entre programadores.",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      projectUrl: "#"
    },
  ]);
  
  const [newProject, setNewProject] = useState<Omit<ProjectType, 'id'>>({
    title: "",
    description: "",
    imageUrl: "",
    projectUrl: ""
  });
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "master" && password === "1930") {
      setIsAuthenticated(true);
      setError("");
      
      // Load stored data if available
      const storedHeroData = localStorage.getItem("heroData");
      const storedAboutData = localStorage.getItem("aboutData");
      const storedContactData = localStorage.getItem("contactData");
      const storedProjects = localStorage.getItem("projects");
      
      if (storedHeroData) setHeroData(JSON.parse(storedHeroData));
      if (storedAboutData) setAboutData(JSON.parse(storedAboutData));
      if (storedContactData) setContactData(JSON.parse(storedContactData));
      if (storedProjects) setProjects(JSON.parse(storedProjects));
    } else {
      setError("Credenciais inválidas");
    }
  };
  
  const handleSaveChanges = () => {
    // Save all data to localStorage
    localStorage.setItem("heroData", JSON.stringify(heroData));
    localStorage.setItem("aboutData", JSON.stringify(aboutData));
    localStorage.setItem("contactData", JSON.stringify(contactData));
    localStorage.setItem("projects", JSON.stringify(projects));
    
    // Show feedback
    alert("Alterações salvas com sucesso!");
  };
  
  const handleAddProject = () => {
    if (newProject.title && newProject.description && newProject.imageUrl) {
      setProjects([...projects, { ...newProject, id: Date.now().toString() }]);
      setNewProject({
        title: "",
        description: "",
        imageUrl: "",
        projectUrl: ""
      });
    }
  };
  
  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(project => project.id !== id));
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-dark-lighter w-full max-w-4xl max-h-[90vh] overflow-auto rounded-lg border border-dark-light/30"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
              onClick={onClose}
            >
              <X size={20} />
            </button>
            
            {!isAuthenticated ? (
              <div className="p-8">
                <h2 className="text-2xl font-display font-bold mb-6 text-center">Admin Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label htmlFor="username" className="block text-sm mb-1">Usuário</label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm mb-1">Senha</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button
                    type="submit"
                    className="w-full py-2 rounded-md bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-medium"
                  >
                    Entrar
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col h-[80vh]">
                <div className="bg-dark/50 p-4 flex gap-2 border-b border-dark-light/30 overflow-x-auto">
                  <button
                    className={`px-4 py-2 rounded-md text-sm whitespace-nowrap ${activeTab === 'hero' ? 'bg-primary/20 text-primary' : 'hover:bg-dark-light/20'}`}
                    onClick={() => setActiveTab('hero')}
                  >
                    Seção Hero
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm whitespace-nowrap ${activeTab === 'about' ? 'bg-primary/20 text-primary' : 'hover:bg-dark-light/20'}`}
                    onClick={() => setActiveTab('about')}
                  >
                    Sobre Mim
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm whitespace-nowrap ${activeTab === 'projects' ? 'bg-primary/20 text-primary' : 'hover:bg-dark-light/20'}`}
                    onClick={() => setActiveTab('projects')}
                  >
                    Projetos
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm whitespace-nowrap ${activeTab === 'contact' ? 'bg-primary/20 text-primary' : 'hover:bg-dark-light/20'}`}
                    onClick={() => setActiveTab('contact')}
                  >
                    Contato
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6">
                  {/* Hero Section */}
                  {activeTab === 'hero' && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold mb-4">Editar Seção Hero</h3>
                      
                      <div>
                        <label className="block text-sm mb-1">Nome</label>
                        <input
                          type="text"
                          value={heroData.name}
                          onChange={(e) => setHeroData({...heroData, name: e.target.value})}
                          className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-1">Cargos (separados por vírgula)</label>
                        <input
                          type="text"
                          value={heroData.roles}
                          onChange={(e) => setHeroData({...heroData, roles: e.target.value})}
                          className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-1">Slogan Principal</label>
                        <textarea
                          value={heroData.tagline}
                          onChange={(e) => setHeroData({...heroData, tagline: e.target.value})}
                          className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                          rows={3}
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* About Section */}
                  {activeTab === 'about' && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold mb-4">Editar Seção Sobre Mim</h3>
                      
                      <div>
                        <label className="block text-sm mb-1">Título</label>
                        <input
                          type="text"
                          value={aboutData.title}
                          onChange={(e) => setAboutData({...aboutData, title: e.target.value})}
                          className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-1">Primeiro Parágrafo</label>
                        <textarea
                          value={aboutData.bio1}
                          onChange={(e) => setAboutData({...aboutData, bio1: e.target.value})}
                          className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                          rows={3}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-1">Segundo Parágrafo</label>
                        <textarea
                          value={aboutData.bio2}
                          onChange={(e) => setAboutData({...aboutData, bio2: e.target.value})}
                          className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                          rows={3}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-1">Terceiro Parágrafo</label>
                        <textarea
                          value={aboutData.bio3}
                          onChange={(e) => setAboutData({...aboutData, bio3: e.target.value})}
                          className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                          rows={3}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-1">Imagem de Perfil</label>
                        <div className="flex items-center gap-4">
                          <div className="w-24 h-24 rounded-full overflow-hidden border border-dark-light/50 flex-shrink-0">
                            <img src="/lovable-uploads/be55f212-becd-4479-8b13-f1f8dd2f5ad8.png" className="w-full h-full object-cover" alt="Perfil" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-gray-400 mb-2">
                              Para trocar a imagem, você precisará fazer o upload de uma nova foto com o mesmo nome.
                            </p>
                            <button className="px-3 py-1 text-sm rounded-md bg-dark-light/50 hover:bg-dark-light/70 transition-colors flex items-center gap-2">
                              <Image size={14} /> Alterar (Função não implementada)
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Projects Section */}
                  {activeTab === 'projects' && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold mb-4">Editar Projetos</h3>
                      
                      {/* Existing projects */}
                      <div className="space-y-4">
                        <h4 className="text-md font-medium">Projetos Atuais</h4>
                        {projects.map((project) => (
                          <div key={project.id} className="bg-dark-light/20 rounded-lg p-4 border border-dark-light/30">
                            <div className="flex justify-between mb-3">
                              <h5 className="font-medium">{project.title}</h5>
                              <button 
                                onClick={() => handleDeleteProject(project.id)}
                                className="text-red-400 hover:text-red-300"
                              >
                                <Trash size={16} />
                              </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="aspect-video rounded-md overflow-hidden bg-dark-light/30">
                                <img 
                                  src={project.imageUrl} 
                                  alt={project.title} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="md:col-span-2 flex flex-col justify-between">
                                <p className="text-sm text-gray-400 mb-2">{project.description}</p>
                                <div className="flex justify-between">
                                  <span className="text-xs text-gray-500">URL: {project.projectUrl}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Add new project */}
                      <div className="space-y-4 border-t border-dark-light/30 pt-6">
                        <h4 className="text-md font-medium">Adicionar Novo Projeto</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm mb-1">Título</label>
                            <input
                              type="text"
                              value={newProject.title}
                              onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                              className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                          </div>
                          <div>
                            <label className="block text-sm mb-1">URL do Projeto</label>
                            <input
                              type="text"
                              value={newProject.projectUrl}
                              onChange={(e) => setNewProject({...newProject, projectUrl: e.target.value})}
                              className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                              placeholder="https://..."
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm mb-1">URL da Imagem</label>
                            <input
                              type="text"
                              value={newProject.imageUrl}
                              onChange={(e) => setNewProject({...newProject, imageUrl: e.target.value})}
                              className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                              placeholder="https://..."
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm mb-1">Descrição</label>
                            <textarea
                              value={newProject.description}
                              onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                              className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                              rows={3}
                            />
                          </div>
                        </div>
                        <button 
                          onClick={handleAddProject}
                          className="px-4 py-2 rounded-md bg-primary/20 text-primary hover:bg-primary/30 transition-colors flex items-center gap-2"
                        >
                          <Plus size={16} /> Adicionar Projeto
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Contact Section */}
                  {activeTab === 'contact' && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold mb-4">Editar Informações de Contato</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm mb-1">Email</label>
                          <input
                            type="email"
                            value={contactData.email}
                            onChange={(e) => setContactData({...contactData, email: e.target.value})}
                            className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-1">Telefone</label>
                          <input
                            type="text"
                            value={contactData.phone}
                            onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                            className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-1">Localização</label>
                          <input
                            type="text"
                            value={contactData.location}
                            onChange={(e) => setContactData({...contactData, location: e.target.value})}
                            className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                      </div>
                      
                      <h4 className="text-md font-medium mt-6">Redes Sociais</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm mb-1">Instagram</label>
                          <input
                            type="text"
                            value={contactData.instagram}
                            onChange={(e) => setContactData({...contactData, instagram: e.target.value})}
                            className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-1">LinkedIn</label>
                          <input
                            type="text"
                            value={contactData.linkedin}
                            onChange={(e) => setContactData({...contactData, linkedin: e.target.value})}
                            className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-1">GitHub</label>
                          <input
                            type="text"
                            value={contactData.github}
                            onChange={(e) => setContactData({...contactData, github: e.target.value})}
                            className="w-full px-4 py-2 bg-dark-light/30 rounded-md border border-dark-light/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-4 border-t border-dark-light/30 flex justify-end sticky bottom-0 bg-dark-lighter/95 backdrop-blur-sm">
                  <button 
                    onClick={handleSaveChanges}
                    className="px-6 py-2 rounded-md bg-accent text-white hover:bg-accent/80 transition-colors flex items-center gap-2"
                  >
                    <Save size={16} /> Salvar Alterações
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdminPanel;
