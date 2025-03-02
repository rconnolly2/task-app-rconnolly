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
      banner: '/assets/module-banners/diseño.png',
      visible: true
    },
    {
      id: 1,
      tutorId: 3,
      name: '0614. Despliegue de aplicaciones web',
      course: '2º DAW 2024-2025',
      description: 'Despliegue y gestión de aplicaciones web en servidores remotos.',
      banner: '/assets/module-banners/despliegue.png',
      visible: true
    },
    {
      id: 2,
      tutorId: 0,
      name: '0613. Desarrollo web en entorno servidor',
      course: '2º DAW 2024-2025',
      description: 'Desarrollo y programación de aplicaciones web en el servidor.',
      banner: '/assets/module-banners/servidor.png',
      visible: true
    },
    {
      id: 3,
      tutorId: 1,
      name: '0612. Desarrollo web en entorno cliente',
      course: '2º DAW 2024-2025',
      description: 'Desarrollo de aplicaciones web del lado cliente con tecnologías modernas.',
      banner: '/assets/module-banners/cliente.png',
      visible: true
    },
    {
      id: 4,
      tutorId: 0,
      name: 'Tutoría DAW',
      course: '2º DAW 2024-2025',
      description: 'Tutoría para resolver dudas y guiar al estudiante.',
      banner: '/assets/module-banners/tutoria.png',
      visible: true
    },
    {
      id: 5,
      tutorId: 4,
      name: 'Erasmus Grado Superior CFGS',
      course: 'CFGS 2024-2025',
      description: 'Programa de movilidad internacional para estudiantes de Grado Superior con oportunidades de intercambio académico y cultural.',
      banner: '/assets/module-banners/erasmus.png',
      visible: true
    }
  ];

  constructor() { }

  getAllModules(): Module[] {
    return this.moduleList.filter(module => module.visible);
  }

  getModuleById(id: number): Module | undefined {
    return this.moduleList.find(module => module.id === id && module.visible);
  }

  setModuleVisibility(id: number, visible: boolean): void {
    const module = this.getModuleById(id);
    if (module) {
      module.visible = visible;
    }
  }
}
