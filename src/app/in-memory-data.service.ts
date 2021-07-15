import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const competencies = {
      soft: [
        { id: 1, name: 'Social' },
        { id: 2, name: 'Scrum' },
      ],
      tech: [
        { id: 1, name: 'React' },
        { id: 2, name: 'JavaScript' },
      ],
    };

    const employees = [
      { id: 11, name: 'Magnus', competencies: competencies },
      { id: 12, name: 'Simon', competencies: competencies },
      { id: 13, name: 'Siri', competencies: competencies },
      { id: 14, name: 'Elvira', competencies: competencies },
      { id: 15, name: 'Marika', competencies: competencies },
      { id: 16, name: 'Jonas', competencies: competencies },
      { id: 17, name: 'Filip', competencies: competencies },
      { id: 18, name: 'Pelle', competencies: competencies },
      { id: 19, name: 'Pierre', competencies: competencies },
    ];

    return { employees, competencies };
  }

  // Overrides the genId method to ensure that a employee always has an id.
  // If the employees array is empty, the method below returns the initial number (11).
  // if the employees array is not empty, the method below returns the highest
  // employee id + 1.
  genId(employees: Employee[]): number {
    return employees.length > 0
      ? Math.max(...employees.map((employees) => employees.id)) + 1
      : 11;
  }
}
