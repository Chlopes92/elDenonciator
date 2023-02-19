import { Component } from '@angular/core';
import { Classe, CLASSE } from 'src/app/mocks/classe.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  personne: Classe[] = CLASSE;
  result!: Classe;
  isVisible = true;

  select(){
    this.result = this.fonction(this.personne);
    // if (this.result)
    // {console.log("Tu es la grande gagnante");}
    // else
    // {console.log("Tu es le grand gagnant");}

  }

// Fonction pour choisir une personne au hasard 
  fonction(personne: Classe[]){

    const rand = Math.random();
    const totalPersonne = personne.length;
    const randIndex = Math.floor(rand * totalPersonne);
    const randomPersonne = personne[randIndex];

    
    console.log(randIndex);
    console.log(randomPersonne);

    return randomPersonne;

  }

// Fonction pour faire disparaitre le paragraphe
  hideParagraph() {
    this.isVisible = false;
  }

}
