import { Injectable } from '@angular/core';
import { Tutor } from './tutor';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  protected tutorList: Tutor[] = [
    {
      id: 0,
      firstName: 'Carlos',
      surName: 'Sola Cruz',
      email: 'carlos.solacruz@santjosepobrer.es',
      tutor: true,
      profileImage: '/assets/profile-photos/tutors/carlos.png',
      visible: true
    },
    {
      id: 1,
      firstName: 'José Ramón',
      surName: 'Muñoz Colomar',
      email: 'jose.munoz@santjosepobrer.es',
      tutor: false,
      profileImage: '/assets/profile-photos/tutors/jose.jpg',
      visible: true
    },
    {
      id: 2,
      firstName: 'Beatriz',
      surName: 'Morales Granados',
      email: 'beatriz.morales@santjosepobrer.es',
      tutor: false,
      profileImage: '/assets/profile-photos/tutors/beatriz.png',
      visible: true
    },
    {
      id: 3,
      firstName: 'Francisco de Paula',
      surName: 'Polo Hoyos',
      email: 'francisco.polo@santjosepobrer.es',
      tutor: false,
      profileImage: '/assets/profile-photos/tutors/francisco.png',
      visible: true
    },
    {
      id: 4,
      firstName: 'Maria dels Àngels',
      surName: 'Company Capó',
      email: 'maria.angels@santjosepobrer.es',
      tutor: false,
      profileImage: '/assets/profile-photos/tutors/maria.png',
      visible: true
    }
  ];

  constructor() { }

  getAllTutors(): Tutor[] {
    return this.tutorList.filter(tutor => tutor.visible);
  }

  getTutorById(id: number): Tutor | undefined {
    return this.tutorList.find(tutor => tutor.id === id && tutor.visible);
  }

  setTutorVisibility(id: number, visible: boolean): void {
    const tutor = this.getTutorById(id);
    if (tutor) {
      tutor.visible = visible;
    }
  }
}