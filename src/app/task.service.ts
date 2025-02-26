import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  protected taskList: Task[] = [
    {
      id: 0,
      moduleId: 0,
      name: 'Práctica de diseño de interfaces',
      description: 'Crear un diseño de interfaz para una web interactiva.',
      deadline: new Date('2025-02-24T23:59:00'),
      grade: undefined,
      completed: false
    },
    {
      id: 1,
      moduleId: 1,
      name: 'Despliegue de aplicación en servidor',
      description: 'Desplegar una aplicación web en un servidor remoto.',
      deadline: new Date('2025-02-25T20:59:00'),
      grade: undefined,
      completed: true
    },
    {
      id: 2,
      moduleId: 2,
      name: 'Desarrollo de bases de datos',
      description: 'Diseñar y desarrollar una base de datos para la aplicación.',
      deadline: new Date('2025-02-27T23:59:00'),
      grade: undefined,
      completed: false
    },
    {
      id: 3,
      moduleId: 0,
      name: 'Desarrollo de interfaces responsivas',
      description: 'Crear interfaces que se adapten a diferentes dispositivos.',
      deadline: new Date('2025-03-01T10:00:00'),
      grade: undefined,
      completed: false
    },
    {
      id: 4,
      moduleId: 1,
      name: 'Integración continua',
      description: 'Configurar un entorno de integración continua para el proyecto.',
      deadline: new Date('2025-03-05T15:00:00'),
      grade: undefined,
      completed: true
    },
    {
      id: 5,
      moduleId: 3,
      name: 'Desarrollo web en entorno cliente',
      description: 'Crear una interfaz web interactiva usando HTML y JavaScript.',
      deadline: new Date('2025-02-27T23:59:00'),
      grade: undefined,
      completed: false
    },
    {
      id: 6,
      moduleId: 0,
      name: 'Optimización de rendimiento web',
      description: 'Mejorar el tiempo de carga y rendimiento de la web.',
      deadline: new Date('2025-02-28T09:30:00'),
      grade: undefined,
      completed: false
    },
    {
      id: 7,
      moduleId: 2,
      name: 'Implementación de consultas SQL',
      description: 'Escribir y optimizar consultas SQL para la base de datos.',
      deadline: new Date('2025-03-03T12:00:00'),
      grade: undefined,
      completed: false
    }
  ];

  constructor() { }

  getAllTasks(): Task[] {
    return this.taskList;
  }

  getTaskById(id: number): Task | undefined {
    return this.taskList.find(task => task.id === id);
  }

  getTasksByWeekDay(dayOfWeek: number): { [moduleId: number]: Task[] } {
    const tasksByModule: { [moduleId: number]: Task[] } = {};

    const tasksOnDay = this.taskList.filter(task => {
      const taskDate = new Date(task.deadline);
      const localDate = new Date(taskDate.toLocaleString('en-US', { timeZone: 'Europe/Madrid' }));
      const localDay = localDate.getDay();
      return localDay === dayOfWeek + 1;
    });

    tasksOnDay.forEach(task => {
      if (!tasksByModule[task.moduleId]) {
        tasksByModule[task.moduleId] = [];
      }
      tasksByModule[task.moduleId].push(task);
    });

    return tasksByModule;
  }
}
