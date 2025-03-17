
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';

interface HeroData {
  name: string;
  roles: string;
  tagline: string;
}

interface AboutData {
  title: string;
  bio1: string;
  bio2: string;
  bio3: string;
}

interface ContactData {
  email: string;
  phone: string;
  location: string;
  instagram: string;
  linkedin: string;
  github: string;
}

interface ProjectType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

interface DataContextType {
  heroData: HeroData;
  aboutData: AboutData;
  contactData: ContactData;
  projects: ProjectType[];
  updateHeroData: (data: HeroData) => void;
  updateAboutData: (data: AboutData) => void;
  updateContactData: (data: ContactData) => void;
  addProject: (project: ProjectType) => void;
  updateProject: (id: string, data: Partial<ProjectType>) => void;
  removeProject: (id: string) => void;
}

const initialHeroData: HeroData = {
  name: "Gabriel Silva",
  roles: "Web Developer, Front-end Specialist, Full-Stack Engineer, UI/UX Enthusiast",
  tagline: "Transformando ideias em experiências digitais extraordinárias com código limpo e design inovador",
};

const initialAboutData: AboutData = {
  title: "Olá, sou Gabriel!",
  bio1: "Sou um desenvolvedor full-stack com expertise em criar produtos digitais de alta qualidade que combinam design elegante com funcionalidade robusta.",
  bio2: "Minha jornada na programação começou há 5 anos, e desde então tenho trabalhado com empresas de diversos setores para transformar suas ideias em realidade digital.",
  bio3: "Especializado em React, Node.js e tecnologias modernas de front-end, estou sempre buscando as melhores práticas e metodologias para entregar projetos que superam expectativas.",
};

const initialContactData: ContactData = {
  email: "Menored45@gmail.com",
  phone: "(17) 99779-9982",
  location: "Votuporanga - Sp",
  instagram: "https://instagram.com/gabriielssantoss",
  linkedin: "https://linkedin.com/in/gabriel-silva",
  github: "https://github.com/winchesterrx",
};

const initialProjects: ProjectType[] = [
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
];

const DataContext = createContext<DataContextType>({
  heroData: initialHeroData,
  aboutData: initialAboutData,
  contactData: initialContactData,
  projects: initialProjects,
  updateHeroData: () => {},
  updateAboutData: () => {},
  updateContactData: () => {},
  addProject: () => {},
  updateProject: () => {},
  removeProject: () => {},
});

export const useData = () => useContext(DataContext);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [heroData, setHeroData] = useState<HeroData>(initialHeroData);
  const [aboutData, setAboutData] = useState<AboutData>(initialAboutData);
  const [contactData, setContactData] = useState<ContactData>(initialContactData);
  const [projects, setProjects] = useState<ProjectType[]>(initialProjects);
  
  useEffect(() => {
    // Load data from localStorage on component mount
    try {
      const storedHeroData = localStorage.getItem("heroData");
      const storedAboutData = localStorage.getItem("aboutData");
      const storedContactData = localStorage.getItem("contactData");
      const storedProjects = localStorage.getItem("projects");
      
      if (storedHeroData) setHeroData(JSON.parse(storedHeroData));
      if (storedAboutData) setAboutData(JSON.parse(storedAboutData));
      if (storedContactData) setContactData(JSON.parse(storedContactData));
      if (storedProjects) setProjects(JSON.parse(storedProjects));
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
      toast.error("Erro ao carregar dados salvos. Usando dados padrão.");
    }
  }, []);
  
  // Update hero data
  const updateHeroData = (data: HeroData) => {
    try {
      setHeroData(data);
      localStorage.setItem("heroData", JSON.stringify(data));
      toast.success("Dados do Hero salvos com sucesso!");
    } catch (error) {
      console.error("Error saving heroData:", error);
      toast.error("Erro ao salvar dados do Hero.");
    }
  };
  
  // Update about data
  const updateAboutData = (data: AboutData) => {
    try {
      setAboutData(data);
      localStorage.setItem("aboutData", JSON.stringify(data));
      toast.success("Dados do About salvos com sucesso!");
    } catch (error) {
      console.error("Error saving aboutData:", error);
      toast.error("Erro ao salvar dados do About.");
    }
  };
  
  // Update contact data
  const updateContactData = (data: ContactData) => {
    try {
      setContactData(data);
      localStorage.setItem("contactData", JSON.stringify(data));
      toast.success("Dados de Contato salvos com sucesso!");
    } catch (error) {
      console.error("Error saving contactData:", error);
      toast.error("Erro ao salvar dados de Contato.");
    }
  };
  
  // Add project
  const addProject = (project: ProjectType) => {
    try {
      const updatedProjects = [...projects, project];
      setProjects(updatedProjects);
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
      toast.success("Projeto adicionado com sucesso!");
    } catch (error) {
      console.error("Error adding project:", error);
      toast.error("Erro ao adicionar projeto.");
    }
  };
  
  // Update project
  const updateProject = (id: string, data: Partial<ProjectType>) => {
    try {
      const updatedProjects = projects.map(project => 
        project.id === id ? { ...project, ...data } : project
      );
      setProjects(updatedProjects);
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
      toast.success("Projeto atualizado com sucesso!");
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Erro ao atualizar projeto.");
    }
  };
  
  // Remove project
  const removeProject = (id: string) => {
    try {
      const updatedProjects = projects.filter(project => project.id !== id);
      setProjects(updatedProjects);
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
      toast.success("Projeto removido com sucesso!");
    } catch (error) {
      console.error("Error removing project:", error);
      toast.error("Erro ao remover projeto.");
    }
  };
  
  return (
    <DataContext.Provider value={{ 
      heroData, 
      aboutData, 
      contactData, 
      projects,
      updateHeroData,
      updateAboutData,
      updateContactData,
      addProject,
      updateProject,
      removeProject
    }}>
      {children}
    </DataContext.Provider>
  );
};
