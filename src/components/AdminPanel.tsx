import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, Eye, EyeOff, Plus, Trash2, Image as ImageIcon } from 'lucide-react';
import { toast } from 'sonner';
import { useData } from '../context/DataContext';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

type Tab = 'login' | 'hero' | 'about' | 'projects' | 'contact';

const AdminPanel = ({ isOpen, onClose }: AdminPanelProps) => {
  const [activeTab, setActiveTab] = useState<Tab>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  
  // Project state for adding new projects
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    imageUrl: '',
    projectUrl: ''
  });
  
  // Get data from context
  const { 
    heroData, aboutData, contactData, projects,
    updateHeroData, updateAboutData, updateContactData, 
    addProject, updateProject, removeProject 
  } = useData();
  
  // Local state for form data
  const [heroForm, setHeroForm] = useState({ ...heroData });
  const [aboutForm, setAboutForm] = useState({ ...aboutData });
  const [contactForm, setContactForm] = useState({ ...contactData });
  const [projectsForm, setProjectsForm] = useState([...projects]);
  
  // Reset forms when data changes
  useEffect(() => {
    setHeroForm({ ...heroData });
    setAboutForm({ ...aboutData });
    setContactForm({ ...contactData });
    setProjectsForm([...projects]);
  }, [heroData, aboutData, contactData, projects]);
  
  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose();
        if (!authenticated) {
          setActiveTab('login');
          setUsername('');
          setPassword('');
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, authenticated]);
  
  // Handle login
  const handleLogin = () => {
    if (username === 'master' && password === '1930') {
      setAuthenticated(true);
      setActiveTab('hero');
      toast.success('Login realizado com sucesso!');
    } else {
      toast.error('Credenciais inválidas.');
    }
  };
  
  // Handle logout
  const handleLogout = () => {
    setAuthenticated(false);
    setActiveTab('login');
    setUsername('');
    setPassword('');
    onClose();
  };
  
  // Save hero data
  const saveHeroData = () => {
    updateHeroData(heroForm);
    toast.success('Dados do Hero salvos com sucesso!');
  };
  
  // Save about data
  const saveAboutData = () => {
    updateAboutData(aboutForm);
    toast.success('Dados do About salvos com sucesso!');
  };
  
  // Save contact data
  const saveContactData = () => {
    updateContactData(contactForm);
    toast.success('Dados de Contato salvos com sucesso!');
  };
  
  // Add new project
  const handleAddProject = () => {
    if (newProject.title && newProject.description && newProject.imageUrl) {
      addProject({
        ...newProject,
        id: Date.now().toString()
      });
      setNewProject({
        title: '',
        description: '',
        imageUrl: '',
        projectUrl: ''
      });
      toast.success('Projeto adicionado com sucesso!');
    } else {
      toast.error('Por favor, preencha todos os campos obrigatórios.');
    }
  };
  
  // Update existing project
  const handleUpdateProject = (id: string, updatedData: any) => {
    const updatedProjects = projectsForm.map(project => 
      project.id === id ? { ...project, ...updatedData } : project
    );
    setProjectsForm(updatedProjects);
    
    // Update in context
    updateProject(id, updatedData);
    toast.success('Projeto atualizado com sucesso!');
  };
  
  // Remove project
  const handleRemoveProject = (id: string) => {
    removeProject(id);
    toast.success('Projeto removido com sucesso!');
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={panelRef}
            className="bg-dark-lighter border border-dark-light/50 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="flex items-center justify-between border-b border-dark-light/50 p-4">
              <h2 className="text-xl font-bold text-white">Painel de Administração</h2>
              <button
                className="p-2 rounded-full hover:bg-dark-light transition-colors"
                onClick={onClose}
              >
                <X size={20} />
              </button>
            </div>
            
            {authenticated ? (
              <div className="flex h-[calc(90vh-4rem)]">
                {/* Sidebar */}
                <div className="w-48 border-r border-dark-light/50 p-4 space-y-2">
                  {(['hero', 'about', 'projects', 'contact'] as Tab[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeTab === tab
                          ? 'bg-primary/20 text-primary'
                          : 'hover:bg-dark-light/50'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                  
                  <div className="pt-4 mt-4 border-t border-dark-light/50">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors"
                    >
                      Sair
                    </button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  {/* Hero Editor */}
                  {activeTab === 'hero' && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold mb-4">Editar Seção Hero</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Nome</label>
                          <input
                            type="text"
                            value={heroForm.name}
                            onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                            className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Funções (separadas por vírgula)</label>
                          <input
                            type="text"
                            value={heroForm.roles}
                            onChange={(e) => setHeroForm({ ...heroForm, roles: e.target.value })}
                            className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Tagline</label>
                          <textarea
                            value={heroForm.tagline}
                            onChange={(e) => setHeroForm({ ...heroForm, tagline: e.target.value })}
                            className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary min-h-[100px]"
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <button
                          onClick={saveHeroData}
                          className="flex items-center bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <Save size={16} className="mr-2" />
                          Salvar Alterações
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* About Editor */}
                  {activeTab === 'about' && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold mb-4">Editar Seção Sobre</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Título</label>
                          <input
                            type="text"
                            value={aboutForm.title}
                            onChange={(e) => setAboutForm({ ...aboutForm, title: e.target.value })}
                            className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Bio (Parágrafo 1)</label>
                          <textarea
                            value={aboutForm.bio1}
                            onChange={(e) => setAboutForm({ ...aboutForm, bio1: e.target.value })}
                            className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary min-h-[80px]"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Bio (Parágrafo 2)</label>
                          <textarea
                            value={aboutForm.bio2}
                            onChange={(e) => setAboutForm({ ...aboutForm, bio2: e.target.value })}
                            className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary min-h-[80px]"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Bio (Parágrafo 3)</label>
                          <textarea
                            value={aboutForm.bio3}
                            onChange={(e) => setAboutForm({ ...aboutForm, bio3: e.target.value })}
                            className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary min-h-[80px]"
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <button
                          onClick={saveAboutData}
                          className="flex items-center bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <Save size={16} className="mr-2" />
                          Salvar Alterações
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Projects Editor */}
                  {activeTab === 'projects' && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold mb-4">Gerenciar Projetos</h3>
                      
                      {/* Add New Project */}
                      <div className="border border-dark-light/50 rounded-lg p-4 mb-6">
                        <h4 className="text-md font-medium mb-4">Adicionar Novo Projeto</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Título do Projeto*</label>
                            <input
                              type="text"
                              value={newProject.title}
                              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                              className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-1">URL do Projeto</label>
                            <input
                              type="text"
                              value={newProject.projectUrl}
                              placeholder="https://..."
                              onChange={(e) => setNewProject({ ...newProject, projectUrl: e.target.value })}
                              className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                            />
                          </div>
                          
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">URL da Imagem*</label>
                            <input
                              type="text"
                              value={newProject.imageUrl}
                              placeholder="https://example.com/image.jpg"
                              onChange={(e) => setNewProject({ ...newProject, imageUrl: e.target.value })}
                              className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                            />
                          </div>
                          
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1">Descrição*</label>
                            <textarea
                              value={newProject.description}
                              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                              className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary min-h-[80px]"
                            />
                          </div>
                        </div>
                        
                        <div className="flex justify-end mt-4">
                          <button
                            onClick={handleAddProject}
                            className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                          >
                            <Plus size={16} className="mr-2" />
                            Adicionar Projeto
                          </button>
                        </div>
                      </div>
                      
                      {/* Existing Projects */}
                      <h4 className="text-md font-medium mb-4 border-t border-dark-light/50 pt-4">Projetos Existentes</h4>
                      
                      <div className="space-y-4">
                        {projectsForm.length > 0 ? (
                          projectsForm.map((project) => (
                            <div 
                              key={project.id} 
                              className="border border-dark-light/50 rounded-lg p-4 hover:border-primary/30 transition-colors"
                            >
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center">
                                  <div className="w-16 h-16 rounded-md overflow-hidden mr-4">
                                    <img 
                                      src={project.imageUrl} 
                                      alt={project.title} 
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <h5 className="font-medium">{project.title}</h5>
                                </div>
                                
                                <button
                                  onClick={() => handleRemoveProject(project.id)}
                                  className="text-red-500 hover:text-red-400 transition-colors p-1"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium mb-1">Título</label>
                                  <input
                                    type="text"
                                    value={project.title}
                                    onChange={(e) => handleUpdateProject(project.id, { title: e.target.value })}
                                    className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                                  />
                                </div>
                                
                                <div>
                                  <label className="block text-sm font-medium mb-1">URL do Projeto</label>
                                  <input
                                    type="text"
                                    value={project.projectUrl}
                                    onChange={(e) => handleUpdateProject(project.id, { projectUrl: e.target.value })}
                                    className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                                  />
                                </div>
                                
                                <div className="md:col-span-2">
                                  <label className="block text-sm font-medium mb-1">URL da Imagem</label>
                                  <input
                                    type="text"
                                    value={project.imageUrl}
                                    onChange={(e) => handleUpdateProject(project.id, { imageUrl: e.target.value })}
                                    className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                                  />
                                </div>
                                
                                <div className="md:col-span-2">
                                  <label className="block text-sm font-medium mb-1">Descrição</label>
                                  <textarea
                                    value={project.description}
                                    onChange={(e) => handleUpdateProject(project.id, { description: e.target.value })}
                                    className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary min-h-[80px]"
                                  />
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-8 text-gray-400">
                            Nenhum projeto adicionado. Adicione um novo projeto acima.
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Contact Editor */}
                  {activeTab === 'contact' && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold mb-4">Editar Informações de Contato</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Email</label>
                          <input
                            type="email"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Telefone</label>
                          <input
                            type="text"
                            value={contactForm.phone}
                            onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                            className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Localização</label>
                          <input
                            type="text"
                            value={contactForm.location}
                            onChange={(e) => setContactForm({ ...contactForm, location: e.target.value })}
                            className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                          />
                        </div>
                      </div>
                      
                      <h4 className="text-md font-medium mt-6 mb-4 border-t border-dark-light/50 pt-4">Redes Sociais</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Instagram</label>
                          <input
                            type="text"
                            value={contactForm.instagram}
                            onChange={(e) => setContactForm({ ...contactForm, instagram: e.target.value })}
                            className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">LinkedIn</label>
                          <input
                            type="text"
                            value={contactForm.linkedin}
                            onChange={(e) => setContactForm({ ...contactForm, linkedin: e.target.value })}
                            className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">GitHub</label>
                          <input
                            type="text"
                            value={contactForm.github}
                            onChange={(e) => setContactForm({ ...contactForm, github: e.target.value })}
                            className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                          />
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-6">
                        <button
                          onClick={saveContactData}
                          className="flex items-center bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <Save size={16} className="mr-2" />
                          Salvar Alterações
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-6 max-w-md mx-auto">
                <h3 className="text-lg font-semibold mb-6">Login Administrativo</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Usuário</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Digite seu usuário"
                      className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Senha</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                        className="w-full bg-dark-light/50 border border-dark-light rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary pr-10"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleLogin();
                          }
                        }}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleLogin}
                    className="w-full bg-primary hover:bg-primary/80 text-white font-medium py-2 rounded-lg transition-colors mt-4"
                  >
                    Entrar
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
