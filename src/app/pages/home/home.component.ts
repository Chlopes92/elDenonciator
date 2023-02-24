import { Component } from '@angular/core';
import { Classe, CLASSE } from 'src/app/mocks/classe.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  personne: Classe[] = CLASSE;
  result?: Classe;
  isVisible = true;

  select(){
    this.result = this.fonction(this.personne);
    // if (this.result)
    // {console.log("Tu es la grande gagnante");}
    // else
    // {console.log("Tu es le grand gagnant");}

  }

// Fonction pour choisir une personne au hasard 
  fonction(personne: Classe[]): Classe | undefined{

    const rand = Math.random();
    const totalPersonne = personne.length;
    if(totalPersonne === 0){

      return undefined;
    }
    const unselectedPersonne = personne.filter(p => !p.selected);
    if(unselectedPersonne.length === 0){
      personne.forEach(p => p.selected = false);
    }

    let randomPersonne: Classe;
    while (true){
      const rand = Math.random();
      const randIndex = Math.floor(rand * totalPersonne);
      randomPersonne = personne[randIndex];
      
      console.log(randIndex);
      console.log(randomPersonne);

      if (!randomPersonne.selected){
        randomPersonne.selected = true;
        break;
      }
    }
    return randomPersonne;
  }

// Fonction pour faire disparaitre le paragraphe
  hideParagraph() {
    this.isVisible = false;
  }

}
