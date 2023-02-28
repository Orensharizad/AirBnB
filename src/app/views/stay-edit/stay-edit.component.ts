import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { StayService } from 'src/app/services/stay.service'

@Component({
  selector: 'stay-edit',
  templateUrl: './stay-edit.component.html',
  styleUrls: ['./stay-edit.component.scss']
})
export class StayEditComponent {
  constructor(private stayService: StayService) { }
  imgUrls: string[] = Array(5).fill('')
  // numbers: number[] = Array(5).fill(0).map((x, i) => i)

  onSubmit(form: NgForm) {
    const amenities = []
    const { amenitieMap } = form.value
    for (const amenitie in amenitieMap) {
      if (amenitieMap[amenitie]) amenities.push(amenitie)
    }
    const newStay = { ...form.value, amenities, imgUrl: this.imgUrls.filter(img => img) }
    delete newStay.amenitieMap
    console.log('newStay:', newStay)
    // this.stayService.save(newStay)
    // form.reset()
  }

  amenities: string[] = [
    'TV',
    'Cable TV',
    'Internet',
    'Wifi',
    'Air conditioning',
    'Wheelchair accessible',
    'Pool',
    'Kitchen',
    'Free parking on premises',
    'Doorman',
    'Gym',
    'Elevator',
    'Hot tub',
    'Heating',
    'Family/kid friendly',
    'Suitable for events',
    'Washer',
    'Dryer',
    'Smoke detector',
    'Carbon monoxide detector',
    'First aid kit',
    'Safety card',
    'Fire extinguisher',
    'Essentials',
    'Shampoo',
    '24-hour check-in',
    'Hangers',
    'Hair dryer',
    'Iron',
    'Laptop friendly workspace',
    'Self check-in',
    'Building staff',
    'Private entrance',
    'Room-darkening shades',
    'Hot water',
    'Bed linens',
    'Extra pillows and blankets',
    'Ethernet connection',
    'Luggage dropoff allowed',
    'Long term stays allowed',
    'Ground floor access',
    'Wide hallway clearance',
    'Step-free access',
    'Wide doorway',
    'Flat path to front door',
    'Well-lit path to entrance',
    'Disabled parking spot',
    'Step-free access',
    'Wide doorway',
    'Wide clearance to bed',
    'Step-free access',
    'Wide doorway',
    'Step-free access',
    'Wide entryway',
    'Waterfront',
    'Beachfront']
}
