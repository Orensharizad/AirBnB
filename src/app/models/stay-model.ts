export interface Stay {
  _id: string
  name: string
  type: string
  imgUrls: string[]
  price: number
  summary: string
  capacity: number
  amenities: string[]
  bathrooms: number
  bedrooms: number
  roomType: string
  host: Host
  loc: Loc
  reviews: Review[]
  likedByUsers: any[]
  types: string[]
  statReviews: StatReviews
}

interface StatReviews {
  Cleanliness: number
  Communication: number
  CheckIn: number
  Accuracy: number
  Location: number
  Value: number
}

interface Review {
  at: string
  by: By
  txt: string
}

interface By {
  _id: string
  fullname: string
  imgUrl: string
  id: string
}

interface Loc {
  country: string
  countryCode: string
  city: string
  address: string
  lat: number
  lan: number
}

interface Host {
  _id: string
  fullname: string
  location: string
  about: string
  responseTime: string
  thumbnailUrl: string
  pictureUrl: string
  isSuperhost: boolean
  id: string
}