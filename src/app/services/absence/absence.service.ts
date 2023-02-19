import { Injectable } from '@angular/core';
import { Classe,CLASSE } from 'src/app/mocks/classe.mock';

@Injectable({
  providedIn: 'root'
})

//Ici on va créer nos methodes
export class AbsenceService {

  constructor() { }

// on récupère nos collègues
 public getStudent() {
    const student = localStorage.getItem("student");

// si student existe, le retourner si non créer un nouvel élève et recommencer
  if(student) {
    return JSON.parse(student);
  } else {
    this.createStudent(); 
    this.getStudent(); 
  }
}

// on créer nos collègues (parce qu'on est trop fort!)
private createStudent() {
  const newStudent = JSON.stringify([]);
  localStorage.setItem('student', newStudent);
}

//on sauvegarde nos collègues (sinon ils disparaissent et c'est triste)
private saveStudent(student: Classe) {
    localStorage.setItem('student', JSON.stringify(student));
}

// on ajoute nos collègues à la liste et on vérifie aussi si il n'y est pas déjà
public addStudent(absentStudent: Classe){
  const student = this.getStudent() 
  const existingStudent = student.find((student: Classe) => student.id == absentStudent.id); 
    if (existingStudent) {
      console.log("Cette personne est déjà dans la liste des absents"); 
    } else {
      student.push(absentStudent) 
    }
      this.saveStudent(student) 
}

// on enlève un collègue et on sauvegarde la liste
public removeElement(idStudent: number){
  const student = this.getStudent() 
  student.splice(idStudent, 1)
  this.saveStudent(student);
}
}
