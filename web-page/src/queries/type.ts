
export interface IGetPhotoDetails {
  id: string
  created_at: string
  updated_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  downloads: number
  likes: number
  liked_by_user: boolean
  description: string
  exif: Exif
  location: Location
  current_user_collections: CurrentUserCollection[]
  urls: Urls
  links: Links
  user: User
}

export interface Exif {
  make: string
  model: string
  exposure_time: string
  aperture: string
  focal_length: string
  iso: number
}

export interface Location {
  name: string
  city: string
  country: string
  position: Position
}

export interface Position {
  latitude: number
  longitude: number
}

export interface CurrentUserCollection {
  id: number
  title: string
  published_at: string
  last_collected_at: string
  updated_at: string
  cover_photo: string
  user: string
}

export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

export interface Links {
  self: string
  html: string
  download: string
  download_location: string
}

export interface User {
  id: string
  updated_at: string
  username: string
  name: string
  portfolio_url: string
  bio: string
  location: string
  total_likes: number
  total_photos: number
  total_collections: number
  instagram_username: string
  twitter_username: string
  links: Links2
}

export interface Links2 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
}
