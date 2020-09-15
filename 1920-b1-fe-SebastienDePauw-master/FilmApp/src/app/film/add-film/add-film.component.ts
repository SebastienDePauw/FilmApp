import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { FilmDataService } from '../film/film-data.service';
import { Film } from '../film/film.model';
import { Detail } from "../detail/detail.model";
import { Regisseur } from "../regisseur/regisseur.model";
import { Acteur } from "../acteur/acteur.model";
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})

export class AddFilmComponent implements OnInit {
  //@Output() public newFilm = new EventEmitter<Film> ();//click event gaat dit event aanmaken
  public readonly categorieen = ['Actie', 'Thriller', 'Avontuur', 'Horror', 'Romantiek', 'Science-fiction', 'Komedie', 'Kinderfilm', 'Drama', 'Documentaire'];
  public filmGroup : FormGroup;
  public detailGroup : FormGroup;
  public confirmationMessage: string= '';

  constructor(private fb: FormBuilder, private _filmDataService: FilmDataService, private _router: Router, 
    private cd: ChangeDetectorRef) {}

  ngOnInit(): void {

    this.filmGroup = this.fb.group({ 
      titel:    ['', [Validators.required, Validators.minLength(2)]],
      jaar:     ['', [Validators.required, Validators.maxLength(4), Validators.min(1)]],
      minuten:  ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(1)]],
      categorie:['', [Validators.required]],
      poster:   [null, [Validators.required]],
    });

    this.detailGroup = this.fb.group({ 
      beschrijving: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(500)]],
      storyline:    ['', [Validators.required, Validators.minLength(1), Validators.maxLength(500)]],
      rating:       ['', [Validators.min(1), Validators.max(10)]],
      acteurs:       this.fb.array([this.createActeurs()]),
      regisseurs:    this.fb.array([this.createRegisseurs()])
    });

    this.acteurs.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe(actList => {
        const lastElement = actList[actList.length - 1];
        if ( lastElement.naam && lastElement.naam.length >= 2 && lastElement.rol && lastElement.rol.length >= 2){
          this.acteurs.push(this.createActeurs());
         } else if (actList.length >= 2) {
          const secondToLast = actList[actList.length - 2];
          if (
            !lastElement.naam &&
            !lastElement.rol &&
            (!secondToLast.naam || secondToLast.naam.length < 2 || !secondToLast.rol || secondToLast.rol.length < 2)
          ) {
            this.acteurs.removeAt(this.acteurs.length - 1);
          }
        }
          
      });
 
      this.regisseurs.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe(regList => {
        const lastElement = regList[regList.length - 1];
        if ( lastElement.naam && lastElement.naam.length >= 2){
          this.regisseurs.push(this.createRegisseurs());
         } else if (regList.length >= 2) {
          const secondToLast = regList[regList.length - 2];
          if (
            !secondToLast.naam || secondToLast.naam.length < 2
          ) {
            this.regisseurs.removeAt(this.regisseurs.length - 1);
          }
        }
          
      });
  }
  
  onSubmit() {
    let acteurs = this.detailGroup.value.acteurs.map(Acteur.fromJSON);
    acteurs = acteurs.filter(act => act.naam.length > 2 && act.rol.length > 2);
    let regisseurs = this.detailGroup.value.regisseurs.map(Regisseur.fromJSON);
    regisseurs = regisseurs.filter(reg => reg.naam.length > 2);
    if(
      this._filmDataService.addNewFilm(new Film(
        this.filmGroup.value.titel, 
        this.filmGroup.value.jaar, 
        this.filmGroup.value.minuten,
        this.filmGroup.value.categorie,
        this.filmGroup.value.poster,
        new Detail( this.detailGroup.value.beschrijving, this.detailGroup.value.storyline, this.detailGroup.value.rating, acteurs, regisseurs))
      )){
        this._router.navigate(['film/list']);
      }
  } 

  createActeurs(): FormGroup {
    return this.fb.group(
      {
        naam: ['', [Validators.minLength(2)]],
        rol:  ['', [Validators.minLength(2)]]
      }
    );
  }

  createRegisseurs(): FormGroup {
    return this.fb.group(
      {
        naam: ['', [Validators.minLength(2)]]
      }
    );
  }

  getErrorMessage(errors: any): string {

    if (errors.minlength) {
      return `Veld moet minstens ${errors.minlength.requiredLength} karakters lang zijn (is ${errors.minlength.actualLength})`;    
   }
   else if(errors.maxLength){
     return `Veld mag maximaal ${errors.maxLength.requiredLength} lang zijn (heeft ${errors.maxLength.actualLength})`
   }
   else if(errors.min){
     return `Veld moet groter zijn dan of gelijk zijn aan 1`
   }     
   else if(errors.max){
     return `Veld moet kleiner zijn dan of gelijk zijn aan 10`
   }
   else if (errors.required) {
    return 'Veld is verplicht';
  }
 }

 get acteurs ():FormArray{
  return <FormArray> this.detailGroup.get('acteurs');
 }

 get regisseurs ():FormArray{
  return <FormArray> this.detailGroup.get('regisseurs');
 }

 onFileChange(event) {
   //lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, 
   //using File or Blob objects to specify the file or data to read.
  let reader = new FileReader();    
  if(event.target.files && event.target.files.length) {
    //BLOB      
    const [file] = event.target.files; 
    //Starts reading the contents of the specified Blob, once finished, the result attribute contains a data: URL representing the file's data. 
    reader.readAsDataURL(file);
    //A handler for the load event. This event is triggered each time the reading operation is successfully completed.
    reader.onload = () => {
      // need to run CD since file load runs outside of zone
      //Patches the value of the FormGroup. It accepts an object with control names as keys, and does its best to match the values to the correct controls in the group.
      this.filmGroup.patchValue({
        //kent uw result toe aan key poster
        //deel 0 is data:image/png;base64
        poster: reader.result
      });
      //explicitly marks the view as changed so that it can be checked again.
      this.cd.markForCheck();
    };
  }
}

}

