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
      deadline: new Date('2025-02-27T23:59:00'),
      grade: undefined,
      completed: false
    },
    {
      id: 1,
      moduleId: 1,
      name: 'Despliegue de aplicación en servidor',
      description: 'Desplegar una aplicación web en un servidor remoto.',
      deadline: new Date('2025-02-28T23:59:00'),
      grade: undefined,
      completed: false
    },
    {
      id: 2,
      moduleId: 2,
      name: 'Desarrollo web en entorno servidor',
      description: 'Desarrollar una API RESTful en entorno servidor.',
      deadline: new Date('2025-03-01T23:59:00'),
      grade: undefined,
      completed: false
    },
    {
      id: 3,
      moduleId: 3,
      name: 'Desarrollo web en entorno cliente',
      description: 'Crear una interfaz web interactiva usando HTML y JavaScript.',
      deadline: new Date('2025-03-02T23:59:00'),
      grade: undefined,
      completed: false
    },
    {
      id: 4,
      moduleId: 4,
      name: 'Informe de progreso de tutoría',
      description: 'Redactar un informe sobre el progreso del curso y dudas.',
      deadline: new Date('2025-03-03T23:59:00'),
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
    const tasksOnDay = this.taskList.filter(task => task.deadline.getDay() === dayOfWeek);
  
    // Agrupo las tareas por módulo
    tasksOnDay.forEach(task => {
      if (!tasksByModule[task.moduleId]) {
        tasksByModule[task.moduleId] = [];
      }
      tasksByModule[task.moduleId].push(task);
    });
  
    return tasksByModule;
  }
}