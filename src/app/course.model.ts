export class Course {
    id: number | undefined;
    title: string;
    description: string;
    topics: string[];
  
    constructor() {
      this.title = '';
      this.description = '';
      this.topics = [];
    }
  }
  