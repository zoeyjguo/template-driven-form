import {Component} from '@angular/core';
import {Actor} from '../actor';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
})
export class ActorFormComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');
  submitted = false;
  color = '';
  onSubmit() {
    this.submitted = true;
  }

  newActor() {
    this.model = new Actor(42, '', '');
  }

}