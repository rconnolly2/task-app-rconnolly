import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  protected studentList: Student[] = [
    {
      id: 1,
      firstName: 'Mateo Daniel',
      surName: 'Soliz Rueda',
      profileImage: '/assets/profile-photos/students/mateo.jpg'
    },
    {
      id: 2,
      firstName: 'Fernando José',
      surName: 'Gómez Villegas',
      profileImage: '/assets/profile-photos/students/fernando.jpg'
    },
    {
      id: 3,
      firstName: 'Roberto',
      surName: 'Connolly Ramis',
      profileImage: '/assets/profile-photos/students/roberto.jpg'
    },
    {
      id: 4,
      firstName: 'Francesc David',
      surName: 'Pérez Arias',
      profileImage: '/assets/profile-photos/students/francesc.jpg'
    },
    {
      id: 5,
      firstName: 'Alejandro',
      surName: 'Arona Trillo',
      profileImage: '/assets/profile-photos/students/alejandro.jpg'
    },
    {
      id: 6,
      firstName: 'Jeronima',
      surName: 'Gonzalez Amengual',
      profileImage: '/assets/profile-photos/students/jeronima.jpg'
    },
    {
      id: 7,
      firstName: 'Sergio',
      surName: 'Gómez Olivares',
      profileImage: '/assets/profile-photos/students/sergio.png'
    },
    {
      id: 8,
      firstName: 'Marc',
      surName: 'Colom Bestard',
      profileImage: '/assets/profile-photos/students/marc.jpg'
    }
  ];

  constructor() { }

  getAllStudents(): Student[] {
    return this.studentList;
  }

  getStudentById(id: number): Student | undefined {
    return this.studentList.find(student => student.id === id);
  }

  getStudentsByName(firstName: string, surName: string): Student[] {
    return this.studentList.filter(student =>
      student.firstName.toLowerCase().includes(firstName.toLowerCase()) &&
      student.surName.toLowerCase().includes(surName.toLowerCase())
    );
  }
}