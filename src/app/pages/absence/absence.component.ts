import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Classe, CLASSE } from 'src/app/mocks/classe.mock';
import { AbsenceService } from 'src/app/services/absence/absence.service';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent implements OnInit {

classe: Classe[] = CLASSE; 
absentForm! : FormGroup; 
absentPersonne!: Classe[]; 
  
constructor(private formbuilder: FormBuilder, private absenceService: AbsenceService) {} 
  
//on appelle toutes les méthodes qu'on a créé dans notre service pour les initialiser sur notre page & on initialise le tout!
ngOnInit(): void {
    this.initForm() 
    this.absentPersonne = this.absenceService.getStudent() 
}
  
// Fonction pour ajouter les personnes à la liste des absents
addElement(){
  this.absenceService.addStudent(this.absentForm.value.student) 
  this.absentPersonne = this.absenceService.getStudent() 
  console.log(this.absentPersonne); 
}
  
// Fonction où on initialise le formulaire d'absents
initForm(){
  this.absentForm = this.formbuilder.group({student: null})
}
  
//Fonction supprimer un élève de la liste des absents
removeElement(idStudent: number): void{
  this.absenceService.removeElement(idStudent);
  this.absentPersonne = this.absenceService.getStudent()
}
} 

