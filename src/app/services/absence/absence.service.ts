import { Injectable } from '@angular/core';
import { Classe, CLASSE } from 'src/app/mocks/classe.mock';

@Injectable({
  providedIn: 'root'
})

//Afin de créer nos methodes, on créer notre service
export class AbsenceService {

  constructor() { }

// Permet de récupèrer les élèves de la classe
 public getStudent() {

  const student = localStorage.getItem("student");

// si student existe, le retourner sinon créer un nouvel élève et recommencer
  if(student) {
    return JSON.parse(student);
  } else {
    this.createStudent(); 
    this.getStudent(); 
  }
}

// Afin de créer les élèves
private createStudent() {

  const newStudent = JSON.stringify([]);
  localStorage.setItem('student', newStudent);
}

//Permet de sauvegarder les élèves
private saveStudent(student: Classe) {

  localStorage.setItem('student', JSON.stringify(student));
}

// Ajoute les élèves à la liste et vérifie s'ils n'y sont pas d
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

// Pour enlèver et sauvegarder l'élève dans la liste
public removeElement(idStudent: number){

  const student = this.getStudent()

  student.splice(idStudent, 1)
  this.saveStudent(student);
}
}
