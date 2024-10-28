export type Project = {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    startDate?: string;
    endDate?: string;
    imageUrl?: string;    
    repoLink?: string;    
    liveDemoLink?: string; 
    features?: string[];  
    challenges?: string;  
}