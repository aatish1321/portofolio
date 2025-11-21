export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Design' | 'Development' | 'Tools';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
