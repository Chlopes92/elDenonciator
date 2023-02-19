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
  
//Ensemble des méthodes créées dans le service, afin de les initialiser sur la page 
ngOnInit(): void {
    this.initForm() 
    this.absentPersonne = this.absenceService.getStudent() 
}
  
// Fonction pour ajouter à la liste des absents
addElement(){
  this.absenceService.addStudent(this.absentForm.value.student) 
  this.absentPersonne = this.absenceService.getStudent() 
  console.log(this.absentPersonne); 
}
  
// Fonction pour initialiser le formulaire des absents
initForm(){
  this.absentForm = this.formbuilder.group({student: null})
}
  
//Fonction pour supprimer de la liste des absents
removeElement(idStudent: number): void{
  this.absenceService.removeElement(idStudent);
  this.absentPersonne = this.absenceService.getStudent()
}
} 

