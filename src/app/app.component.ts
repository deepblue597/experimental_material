import { Component } from '@angular/core';
import UsersJson from './users.json';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


/* this is  an interface to receive the data from the json file */
interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo-2';
  notifications = 1; 
  displayedColumns: string[] = ['position' ]; // 'name', 'weight', 'symbol'
  dataSource = ELEMENT_DATA;
  secondFormGroup!: FormGroup; 
  thirdFormGroup!: FormGroup; 
  constructor(private _formBuilder: FormBuilder) {}
  pickedCommandName: String = '' ; 
  
  Users: USERS[] = UsersJson;  //we use this for the demonstration (no need for the names string)
  

  Names:String[] = [] ;
  options: string[] = ['Angular', 'React' , 'View'] ; 
  ngOnInit(){
    for(let i=0 ; i<this.Users.length; i++) 
    {
      this.Names[i] = this.Users[i].name;
      
    }
    console.log(this.Names) ;   //logs the names 
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
      
    });
    console.log(this.secondFormGroup) ; 

  }

  firstCompleted: boolean = false;  // completed or not first field
  secondCompleted: boolean = false;   // -||- second field 

  firstComplete() {
    
    this.firstCompleted = true ; 
      
  }
  firstUncomplete()
  {
    this.firstCompleted = false ; 
    console.log(this.firstCompleted) ; 
    console.log(this.secondFormGroup) ;  
  }

  secondComplete(): void {

    this.secondCompleted = false ; 
    if(this.secondFormGroup.valid == true && this.thirdFormGroup.valid == true) 
    {
      this.secondCompleted = true ; 
    }
    console.log(this.secondFormGroup.valid) ; 
    console.log(this.thirdFormGroup.valid) ; 
    console.log(this.secondCompleted) ; 
  }

  secondUncomplete(): void {
    this.secondCompleted = false ; 
  }



  onClick(name: any): void {
     
    this.pickedCommandName = name ; 
    console.log(name) ;  //consoles the name that has been chosen
    this.firstComplete() ;  
    console.log(this.firstCompleted) ;  
    console.log(this.pickedCommandName) ;  
     
  }

  objectOptions = [
    { name: 'Angular'},
    { name: 'Material'},
    { name: 'React'}, 
    { name:'Vue'} 
  ]

  displayFunction(subject: { name: any; }){
    return subject? subject.name : undefined; 
  } //this is the display function that is needed for the auticomplete 
}

