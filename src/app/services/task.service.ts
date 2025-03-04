import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { Module } from '../interfaces/module';

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
    return tasks.find(task => task.id === id && task.visible);
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
      return localDay === dayOfWeek + 1 && task.visible;
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
          && taskDay === dayOfWeek && task.visible;
    }).forEach(task => {
      if (!tasksByModule[task.moduleId]) {
        tasksByModule[task.moduleId] = [];
      }
      tasksByModule[task.moduleId].push(task);
    });

    return tasksByModule;
  }

  markTaskAsVisible(id: number): void {
    const tasks = this.getAllTasks();
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.visible = true;
      this.saveToLocalStorage(tasks);
    }
  }

  markAllTasksAsVisibleByModuleId(moduleId: number): void {
    const tasks = this.getAllTasks();
    
    const updatedTasks = tasks.map(task => {
      if (task.moduleId === moduleId) {
        task.visible = true;
      }
      return task;
    });
  
    this.saveToLocalStorage(updatedTasks);
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
        completed: false,
        visible: true
      },
      {
        id: 1,
        moduleId: 1,
        name: 'Despliegue de aplicación en servidor',
        description: 'Desplegar una aplicación web en un servidor remoto.',
        deadline: new Date('2025-02-25T20:59:00'),
        grade: undefined,
        completed: true,
        visible: true
      },
      {
        id: 2,
        moduleId: 2,
        name: 'Desarrollo de bases de datos',
        description: 'Diseñar y desarrollar una base de datos para la aplicación.',
        deadline: new Date('2025-02-20T23:59:00'),
        grade: undefined,
        completed: false,
        visible: true
      },
      {
        id: 3,
        moduleId: 0,
        name: 'Desarrollo de interfaces responsivas',
        description: 'Crear interfaces que se adapten a diferentes dispositivos.',
        deadline: new Date('2025-03-01T10:00:00'),
        grade: undefined,
        completed: false,
        visible: true
      },
      {
        id: 4,
        moduleId: 1,
        name: 'Integración continua',
        description: 'Configurar un entorno de integración continua para el proyecto.',
        deadline: new Date('2025-03-05T15:00:00'),
        grade: undefined,
        completed: true,
        visible: true
      },
      {
        id: 5,
        moduleId: 3,
        name: 'Desarrollo web en entorno cliente',
        description: 'Crear una interfaz web interactiva usando HTML y JavaScript.',
        deadline: new Date('2025-02-27T23:59:00'),
        grade: undefined,
        completed: false,
        visible: true
      },
      {
        id: 6,
        moduleId: 0,
        name: 'Optimización de rendimiento web',
        description: 'Mejorar el tiempo de carga y rendimiento de la web.',
        deadline: new Date('2025-02-28T09:30:00'),
        grade: undefined,
        completed: false,
        visible: true
      },
      {
        id: 7,
        moduleId: 2,
        name: 'Implementación de consultas SQL',
        description: 'Escribir y optimizar consultas SQL para la base de datos.',
        deadline: new Date('2025-03-03T12:00:00'),
        grade: undefined,
        completed: false,
        visible: true
      },
      {
        id: 8,
        moduleId: 5,
        name: 'Tarjeta Sanitaria Europea - Solicitud',
        description: 'Instrucciones para solicitar la Tarjeta Sanitaria Europea.',
        deadline: new Date('2025-02-26T09:00:00'),
        grade: undefined,
        completed: false,
        visible: false
      },
      {
        id: 9,
        moduleId: 5,
        name: 'Datos de cobertura del seguro - Tarjeta Sanitaria Europea',
        description: 'Información adicional sobre los datos de cobertura del seguro relacionados con la Tarjeta Sanitaria Europea.',
        deadline: new Date('2025-02-26T09:00:00'),
        grade: undefined,
        completed: false,
        visible: false
      }
    ];
  }
}
