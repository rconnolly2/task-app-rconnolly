import { Injectable } from '@angular/core';
import { Module } from './module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  protected moduleList: Module[] = [
    {
      id: 0,
      tutorId: 2,
      name: '0615. Diseño de interfaces web',
      course: '2º DAW 2024-2025',
      description: 'Creación de interfaces atractivas y funcionales para aplicaciones web.',
      banner: '/assets/module-banners/diseno.png'
    },
    {
      id: 1,
      tutorId: 3,
      name: '0614. Despliegue de aplicaciones web',
      course: '2º DAW 2024-2025',
      description: 'Despliegue y gestión de aplicaciones web en servidores remotos.',
      banner: '/assets/module-banners/despliegue.png'
    },
    {
      id: 2,
      tutorId: 0,
      name: '0613. Desarrollo web en entorno servidor',
      course: '2º DAW 2024-2025',
      description: 'Desarrollo y programación de aplicaciones web en el servidor.',
      banner: '/assets/module-banners/servidor.png'
    },
    {
      id: 3,
      tutorId: 1,
      name: '0612. Desarrollo web en entorno cliente',
      course: '2º DAW 2024-2025',
      description: 'Desarrollo de aplicaciones web del lado cliente con tecnologías modernas.',
      banner: '/assets/module-banners/cliente.png'
    },
    {
      id: 4,
      tutorId: 0,
      name: 'Tutoría DAW',
      course: '2º DAW 2024-2025',
      description: 'Tutoría para resolver dudas y guiar al estudiante.',
      banner: '/assets/module-banners/tutoria.png'
    }
  ];

  constructor() { }

  getAllModules(): Module[] {
    return this.moduleList;
  }

  getModuleById(id: number): Module | undefined {
    return this.moduleList.find(module => module.id === id);
  }
}