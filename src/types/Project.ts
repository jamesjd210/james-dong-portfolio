export type Project = {
    id: number;
    isFeatured: boolean;
    name: string;
    blurb: string;
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