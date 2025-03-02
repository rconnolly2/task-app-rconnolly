import { Injectable } from '@angular/core';
import { Task } from './task';
import { Module } from './module';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private storageKey = 'tasks';

  constructor() { }

  getAllTasks(): Task[] {
    const tasks = this.getFromLocalStorage<Task[]>(this.storageKey);
    return tasks ? tasks.map(task => {
      task.deadline = new Date(task.deadline);
      return task;
    }) : this.getDefaultTasks();
  }

  getTaskById(id: number): Task | undefined {
    const tasks = this.getAllTasks();
    return tasks.find(task => task.id === id);
  }

  markTaskAsComplete(id: number): void {
    const tasks = this.getAllTasks();
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
      this.saveToLocalStorage(tasks);
    }
  }

  getTasksByWeekDay(dayOfWeek: number): { [moduleId: number]: Task[] } {
    const tasksByModule: { [moduleId: number]: Task[] } = {};
    const tasks = this.getAllTasks();

    const tasksOnDay = tasks.filter(task => {
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

  getTasksByWeekDayAndModules(currentDate: Date, dayOfWeek: number, selectedModules: Module[]): { [moduleId: number]: Task[] } {
    const tasksByModule: { [moduleId: number]: Task[] } = {};

    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - ((currentDate.getDay() + 6) % 7));
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    const tasks = this.getAllTasks();

    tasks.filter(task => {
      const taskDate = new Date(task.deadline);
      const taskDay = (taskDate.getDay() + 6) % 7;
      return taskDate >= startOfWeek && taskDate <= endOfWeek
          && selectedModules.some(module => module.id === task.moduleId)
          && taskDay === dayOfWeek;
    }).forEach(task => {
      if (!tasksByModule[task.moduleId]) {
        tasksByModule[task.moduleId] = [];
      }
      tasksByModule[task.moduleId].push(task);
    });

    return tasksByModule;
  }

  private saveToLocalStorage(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  private getFromLocalStorage<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  private getDefaultTasks(): Task[] {
    return [
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
        deadline: new Date('2025-02-20T23:59:00'),
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
  }
}