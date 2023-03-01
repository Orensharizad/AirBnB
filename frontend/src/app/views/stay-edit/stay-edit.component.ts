import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Map } from 'src/app/models/map-model'
import { StayService } from 'src/app/services/stay.service'

@Component({
  selector: 'stay-edit',
  templateUrl: './stay-edit.component.html',
  styleUrls: ['./stay-edit.component.scss']
})
export class StayEditComponent {
  constructor(private stayService: StayService) { }
  numbers: number[] = Array(5).map((x, i) => i)

  onSubmit(form: NgForm) {
    const { amenitieMap, imgUrlMap } = form.value
    const amenities = this.objectToArray(amenitieMap)
    let imgUrls = this.objectToValueArray(imgUrlMap)
    imgUrls = imgUrls.map(async url=>{
      return await this.uploadImg(url)
    })
    const newStay = { ...form.value, amenities, imgUrls }
    delete newStay.amenitieMap
    delete newStay.imgUrlMap
    console.log('newStay:', newStay)
    // this.stayService.save(newStay)
    // form.reset()
  }

  objectToArray(obj: Map): string[] {
    const arr = []
    for (const key in obj) {
      if (obj[key]) arr.push(key)
    }
    return arr
  }

  objectToValueArray(obj: Map): (string | undefined | Promise<any>)[] {
    const arr = []
    for (const key in obj) {
      if (obj[key]) arr.push(obj[key])
    }
    return arr
  }

  uploadImg(file: any):Promise<any> {
    console.log('file:', file);
    const CLOUD_NAME = "dug85f2rg"
    const UPLOAD_PRESET = "vspwyn8d"
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    const formData = new FormData()
    formData.append('upload_preset', UPLOAD_PRESET)
    formData.append('file', file)

    return fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(res => res.secure_url)
      .catch(err => console.error(err))
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
    'Beachfront'
  ]
}
