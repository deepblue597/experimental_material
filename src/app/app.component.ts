import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import UsersJson from './users.json';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';
//import { keys } from 'ts-transformer-keys';


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

  /* ------------------------------------ */ 
  /* angular forms tutorial */ 

 
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Jason'), 
  //   password: new FormControl(''), 
  //   confirmPassword: new FormControl(''),  
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   })
  // }) ; 

  /* formbuilder is a simpler way to create form groups */

  // userformgroup = this.fb.group<USERS>({
  //   id: [1], 
  //   name: ['jason'], 
  //   username: ['deepblue'], 
  //   email: ['deepblue@mail.com']
  // }) 
  
  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator]], 
    email: [''], 
    password: [''], 
    confirmPassword: [''], 
    address: this.fb.group({
      city: [''], 
      state: [''], 
      postalCode: ['']  
    }), 
    alternateEmails: this.fb.array([])   
  }, {validator: PasswordValidator}) ; 


  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray ; 
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control('')) ; 
  }

  get userName(){
    return this.registrationForm.get('userName') ; 
  }

  /* setting the values with dummy values 
  if we want to fill all the values we use setValue 
  otherwise we use patchValue */ 
  loadApiData() 
  {
    this.registrationForm.patchValue({
      userName: 'Ioanna', 
      password: '12345', 
      confirmPassword: '12345',  
      address: {
        city: 'heraklion',
        state: 'crete',
        
      }
    }) ;
  }   


 /* testing */ 


  /* ----------------------------------- */

  /* the next 4 are needed for the stepper */ 
  /* the next 4 are needed for the stepper */
  groups: FormGroup[] = []; 
  secondFormGroup!: FormGroup; 
  thirdFormGroup!: FormGroup; 
  constructor(private _formBuilder: FormBuilder, private fb: FormBuilder)  {} //the fb is for the form tutorial 
  pickedCommandName: String = '' ; 
  
  Users: USERS[] = UsersJson;  //we use this for the demonstration (no need for the names string)
  properties: number = Object.keys(this.Users[1]).length ; 

  Names:String[] = [] ;
  options: string[] = ['Angular', 'React' , 'View'] ; 
  ngOnInit(){
    console.log(this.registrationForm) ; 
    for(let i=0 ; i<this.Users.length; i++) 
    {
      this.Names[i] = this.Users[i].name;
      
    }
    console.log(this.Names) ;   //logs the names 
    /* this is for the stepper also */ 

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
      
    });
    console.log(this.secondFormGroup) ; 
    console.log('the number of objects are ' + Object.keys(this.Users[1]).length) ; //number of porperties of  a user type object 

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
    this.firstComplete() ; // calls the first complete function  
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

