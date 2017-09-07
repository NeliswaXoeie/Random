import { Component } from '@angular/core';
import { Form }    from './form';


@Component({
  selector: 'app-component.html',
  templateUrl: './app.component.css'

})

export class FormComponent {
  model = new Form(2010,'Neliswa','Nelly','2017-Nelly');
  submitted = false;
  onSubmit() { 
  		this.submitted = true; 
  }
  active = true;
  newForm() {
     this.model = new Form(0, '','','');
     this.active = false;
     setTimeout(() => this.active = true, 0);
  }
  
  default() {
  	    this.model = new Form(2010,'Neliswa','Nelly','2017-Nelly');
  }
  get diagnostic() { 
  		return JSON.stringify(this.model); 
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent {

constructor(){}

  
}
