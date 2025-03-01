import { Injectable } from '@angular/core';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private storageKey = 'comments';

  constructor() { }

  getAllComments(): Comment[] {
    const comments = localStorage.getItem(this.storageKey);
    return comments ? JSON.parse(comments) : this.getDefaultComments();
  }

  getCommentsByPostId(postId: number): Comment[] {
    const comments = this.getAllComments();
    return comments.filter(comment => comment.postId === postId);
  }

  getCommentsByStudentId(studentId: number): Comment[] {
    const comments = this.getAllComments();
    return comments.filter(comment => comment.studentId === studentId);
  }

  getCommentsByDateRange(startDate: Date, endDate: Date): Comment[] {
    const comments = this.getAllComments();
    return comments.filter(comment => {
      const commentDate = new Date(comment.date);
      return commentDate >= startDate && commentDate <= endDate;
    });
  }

  addComment(postId: number, studentId: number, content: string): void {
    const newComment: Comment = {
      id: this.getAllComments().length,
      postId: postId,
      studentId: studentId,
      content: content,
      date: new Date()
    };

    const comments = this.getAllComments();
    comments.push(newComment);
    localStorage.setItem(this.storageKey, JSON.stringify(comments));
    console.log(newComment);
  }

  private getDefaultComments(): Comment[] {
    return [
      {
        id: 0,
        postId: 0,
        studentId: 1,
        content: 'Este post sobre desarrollo de interfaces web es muy útil, especialmente en la parte de diseño UX/UI.',
        date: new Date('2025-02-20T09:00:00')
      },
      {
        id: 1,
        postId: 1,
        studentId: 2,
        content: 'El análisis sobre el despliegue de aplicaciones es interesante. Me gustaría saber más sobre servidores dedicados.',
        date: new Date('2025-02-21T09:45:00')
      },
      {
        id: 2,
        postId: 2,
        studentId: 3,
        content: 'El tema de la optimización de bases de datos es clave en entornos de producción. Gracias por los ejemplos.',
        date: new Date('2025-02-22T11:00:00')
      },
      {
        id: 3,
        postId: 3,
        studentId: 1,
        content: 'Excelente introducción a las aplicaciones web interactivas, me gustaría que se profundice en JavaScript y React.',
        date: new Date('2025-02-23T12:30:00')
      },
      {
        id: 4,
        postId: 4,
        studentId: 4,
        content: 'Las recomendaciones para el proyecto de Tutoría DAW son muy claras, especialmente los ejemplos prácticos.',
        date: new Date('2025-02-24T15:00:00')
      },
      {
        id: 5,
        postId: 0,
        studentId: 5,
        content: 'Gran reflexión sobre el diseño responsivo, me gustaría que se incluyan más casos de estudio de aplicaciones reales.',
        date: new Date('2025-02-26T16:30:00')
      },
      {
        id: 6,
        postId: 1,
        studentId: 2,
        content: 'La configuración avanzada de servidores parece compleja, ¿puedes proporcionar más ejemplos de configuración en la nube?',
        date: new Date('2025-02-27T17:00:00')
      },
      {
        id: 7,
        postId: 2,
        studentId: 6,
        content: 'Node.js es una excelente herramienta para el desarrollo web en servidores. Gracias por el enfoque práctico.',
        date: new Date('2025-02-28T18:15:00')
      },
      {
        id: 8,
        postId: 3,
        studentId: 7,
        content: 'El desarrollo de interfaces dinámicas es una habilidad esencial. La explicación sobre HTML, CSS y JavaScript fue clara.',
        date: new Date('2025-03-01T19:00:00')
      },
      {
        id: 9,
        postId: 1,
        studentId: 8,
        content: 'La integración continua es fundamental para la calidad del software. ¿Tienes ejemplos de herramientas para integración continua?',
        date: new Date('2025-03-02T20:30:00')
      }
    ];
  }
}