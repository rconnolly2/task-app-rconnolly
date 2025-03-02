import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  protected postList: Post[] = [
    {
      id: 0,
      content: 'Primer post sobre desarrollo de interfaces web, cubriendo los fundamentos del diseño UX/UI.',
      moduleId: 0,
      date: new Date('2025-02-20T08:30:00'),
      imageUrl: '/assets/post-photos/git.PNG'
    },
    {
      id: 1,
      content: 'Un análisis profundo sobre cómo realizar un buen despliegue de aplicaciones web en servidores remotos.',
      moduleId: 1,
      date: new Date('2025-02-21T09:00:00')
    },
    {
      id: 2,
      content: 'Desarrollo de bases de datos para servidores, optimizando el rendimiento en entornos de producción.',
      moduleId: 2,
      date: new Date('2025-02-22T10:15:00'),
      imageUrl: '/assets/post-photos/dev-db.gif'
    },
    {
      id: 3,
      content: 'Introducción a la creación de aplicaciones web interactivas utilizando tecnologías del lado cliente.',
      moduleId: 3,
      date: new Date('2025-02-23T11:45:00'),
      imageUrl: '/assets/post-photos/arbol_jose.jpg'
    },
    {
      id: 4,
      content: 'Recomendaciones sobre cómo abordar un proyecto en la asignatura de Tutoría DAW, con ejemplos prácticos.',
      moduleId: 4,
      date: new Date('2025-02-24T14:30:00')
    },
    {
      id: 5,
      content: 'Reflexión sobre las mejores prácticas en el diseño responsivo de interfaces web.',
      moduleId: 0,
      date: new Date('2025-02-26T15:00:00'),
      imageUrl: '/assets/post-photos/responsive.png'
    },
    {
      id: 6,
      content: 'Configuración avanzada de servidores para desplegar aplicaciones web de alto rendimiento.',
      moduleId: 1,
      date: new Date('2025-02-27T16:45:00')
    },
    {
      id: 7,
      content: 'Prácticas recomendadas en el desarrollo de aplicaciones web en entornos de servidor utilizando Node.js.',
      moduleId: 2,
      date: new Date('2025-02-28T17:00:00'),
      imageUrl: '/assets/post-photos/node.jpg'
    },
    {
      id: 8,
      content: 'Desarrollo de interfaces dinámicas y responsivas con HTML, CSS y JavaScript en entornos cliente.',
      moduleId: 3,
      date: new Date('2025-03-01T18:15:00')
    },
    {
      id: 9,
      content: 'Asesoramiento sobre el uso de herramientas de integración continua en proyectos de desarrollo web.',
      moduleId: 1,
      date: new Date('2025-03-02T19:00:00')
    }
  ];

  constructor() { }

  getAllPosts(): Post[] {
    return this.postList;
  }

  getPostById(id: number): Post | undefined {
    return this.postList.find(post => post.id === id);
  }

  getPostsByModuleId(moduleId: number): Post[] {
    return this.postList.filter(post => post.moduleId === moduleId);
  }

  getPostsByWeekDay(dayOfWeek: number): { [moduleId: number]: Post[] } {
    const postsByModule: { [moduleId: number]: Post[] } = {};

    const postsOnDay = this.postList.filter(post => {
      const postDate = new Date(post.date);
      const localDate = new Date(postDate.toLocaleString('en-US', { timeZone: 'Europe/Madrid' }));
      const localDay = localDate.getDay();
      return localDay === dayOfWeek + 1;
    });

    postsOnDay.forEach(post => {
      if (!postsByModule[post.moduleId]) {
        postsByModule[post.moduleId] = [];
      }
      postsByModule[post.moduleId].push(post);
    });

    return postsByModule;
  }
}