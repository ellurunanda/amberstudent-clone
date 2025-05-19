import { Property } from '../types';
import { addDays, format } from 'date-fns';

// Generate dates relative to today
const today = new Date();
const formatDate = (date: Date) => format(date, 'yyyy-MM-dd');
const nextWeek = addDays(today, 7);
const nextMonth = addDays(today, 30);
const inTwoMonths = addDays(today, 60);

export const mockProperties: Property[] = [
  {
    id: 'prop_1',
    name: 'Urbanest King\'s Cross',
    description: 'Located in the heart of King\'s Cross, this modern student accommodation offers premium rooms with en-suite bathrooms and shared kitchens, just minutes away from major universities.',
    type: 'Student Hall',
    price: 320,
    priceUnit: 'week',
    location: {
      city: 'London',
      country: 'United Kingdom',
      address: '1 Canal Reach, King\'s Cross, London N1C 4BD',
      coordinates: {
        lat: 51.5349,
        lng: -0.1271,
      },
    },
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    amenities: [
      'Wi-Fi', 'Gym', 'Study Rooms', 'Cinema Room', 'Laundry', '24/7 Security', 'Bike Storage', 'Communal Kitchen'
    ],
    distance: '0.8 miles to UCL',
    rating: 4.7,
    reviewCount: 142,
    availability: {
      availableFrom: formatDate(nextWeek),
      availableTo: formatDate(inTwoMonths),
    },
    featured: true,
  },
  {
    id: 'prop_2',
    name: 'The Student Hotel Barcelona',
    description: 'This modern accommodation offers fully-furnished rooms with private bathrooms, shared kitchens, and plenty of communal spaces for studying and socializing.',
    type: 'Student Hotel',
    price: 750,
    priceUnit: 'month',
    location: {
      city: 'Barcelona',
      country: 'Spain',
      address: 'Carrer de Provença, 128, 08029 Barcelona',
      coordinates: {
        lat: 41.3825,
        lng: 2.1448,
      },
    },
    images: [
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    amenities: [
      'Wi-Fi', 'Swimming Pool', 'Restaurant', 'Study Areas', 'Games Room', 'Bike Rental', 'Laundry', '24/7 Reception'
    ],
    distance: '1.2 miles to Universitat de Barcelona',
    rating: 4.5,
    reviewCount: 98,
    availability: {
      availableFrom: formatDate(nextMonth),
    },
    discountPercentage: 10,
  },
  {
    id: 'prop_3',
    name: 'Student Residence Melbourne',
    description: 'A modern student complex offering fully-furnished studio apartments with private kitchenettes and bathrooms, located in the vibrant heart of Melbourne.',
    type: 'Studio Apartment',
    price: 280,
    priceUnit: 'week',
    location: {
      city: 'Melbourne',
      country: 'Australia',
      address: '108 Leicester St, Carlton VIC 3053',
      coordinates: {
        lat: -37.8027,
        lng: 144.9646,
      },
    },
    images: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    amenities: [
      'Wi-Fi', 'Rooftop Terrace', 'Study Rooms', 'Gym', 'Cinema Room', 'Laundry', 'BBQ Area', 'Bike Storage'
    ],
    distance: '0.5 miles to University of Melbourne',
    rating: 4.6,
    reviewCount: 116,
    availability: {
      availableFrom: formatDate(nextWeek),
    },
  },
  {
    id: 'prop_4',
    name: 'RESA San Mamés',
    description: 'This student residence offers comfortable rooms with private bathrooms and shared kitchens, as well as various communal spaces for studying and socializing.',
    type: 'Student Hall',
    price: 650,
    priceUnit: 'month',
    location: {
      city: 'Bilbao',
      country: 'Spain',
      address: 'C. de Luis Briñas, 15, 48013 Bilbao',
      coordinates: {
        lat: 43.2612,
        lng: -2.9471,
      },
    },
    images: [
      'https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1268868/pexels-photo-1268868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    amenities: [
      'Wi-Fi', 'Study Rooms', 'Laundry', 'Communal Kitchen', 'TV Room', '24/7 Reception', 'Cleaning Service'
    ],
    distance: '0.3 miles to Universidad de Deusto',
    rating: 4.3,
    reviewCount: 75,
    availability: {
      availableFrom: formatDate(today),
    },
  },
  {
    id: 'prop_5',
    name: 'The Quad Boston',
    description: 'Premium student housing with fully-furnished apartments, featuring private bedrooms and shared living spaces, perfect for students seeking comfort and community.',
    type: 'Shared Apartment',
    price: 1200,
    priceUnit: 'month',
    location: {
      city: 'Boston',
      country: 'United States',
      address: '10 Buick St, Boston, MA 02215',
      coordinates: {
        lat: 42.3522,
        lng: -71.1212,
      },
    },
    images: [
      'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    amenities: [
      'Wi-Fi', 'Fitness Center', 'Study Lounges', 'Game Room', 'Outdoor Courtyard', 'Laundry', 'Computer Lab', 'Parking'
    ],
    distance: '0.2 miles to Boston University',
    rating: 4.8,
    reviewCount: 183,
    availability: {
      availableFrom: formatDate(nextMonth),
    },
    featured: true,
  },
  {
    id: 'prop_6',
    name: 'Campus Living Villages Sydney',
    description: 'This student residence offers a range of room options, from studios to shared apartments, with modern facilities and a vibrant student community.',
    type: 'Student Village',
    price: 320,
    priceUnit: 'week',
    location: {
      city: 'Sydney',
      country: 'Australia',
      address: '25 Missenden Rd, Camperdown NSW 2050',
      coordinates: {
        lat: -33.8885,
        lng: 151.1835,
      },
    },
    images: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    amenities: [
      'Wi-Fi', 'Swimming Pool', 'BBQ Areas', 'Study Rooms', 'Communal Kitchen', 'Laundry', 'Games Room', 'Bike Storage'
    ],
    distance: '0.4 miles to University of Sydney',
    rating: 4.4,
    reviewCount: 97,
    availability: {
      availableFrom: formatDate(nextWeek),
      availableTo: formatDate(inTwoMonths),
    },
    discountPercentage: 15,
  },
  {
    id: 'prop_7',
    name: 'Collegiate Paris Gardens',
    description: 'Luxury student accommodation offering en-suite studio apartments and extensive facilities including a private cinema, wellness suite, and stunning views of the city.',
    type: 'Luxury Studio',
    price: 400,
    priceUnit: 'week',
    location: {
      city: 'London',
      country: 'United Kingdom',
      address: '1 Paris Gardens, London SE1 8ND',
      coordinates: {
        lat: 51.5068,
        lng: -0.1030,
      },
    },
    images: [
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    amenities: [
      'Wi-Fi', 'Private Cinema', 'Spa & Sauna', 'Gym', 'Dinner Party Room', 'Rooftop Terrace', '24/7 Concierge', 'Laundry'
    ],
    distance: '0.6 miles to King\'s College London',
    rating: 4.9,
    reviewCount: 162,
    availability: {
      availableFrom: formatDate(nextMonth),
    },
    featured: true,
  },
  {
    id: 'prop_8',
    name: 'iQ Student Accommodation Berlin',
    description: 'Contemporary student living in the heart of Berlin, offering fully-furnished ensuite rooms and studios with excellent communal facilities and social spaces.',
    type: 'Ensuite Room',
    price: 580,
    priceUnit: 'month',
    location: {
      city: 'Berlin',
      country: 'Germany',
      address: 'Alexanderstraße 5, 10178 Berlin',
      coordinates: {
        lat: 52.5200,
        lng: 13.4050,
      },
    },
    images: [
      'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    amenities: [
      'Wi-Fi', 'Study Rooms', 'Gym', 'Social Spaces', 'Laundry', 'Bike Storage', 'Games Area', '24/7 Security'
    ],
    distance: '1.0 miles to Humboldt University',
    rating: 4.5,
    reviewCount: 89,
    availability: {
      availableFrom: formatDate(nextWeek),
    },
  },
];

export const amenityOptions = [
  'Wi-Fi', 'Gym', 'Study Rooms', 'Cinema Room', 'Laundry', '24/7 Security',
  'Bike Storage', 'Communal Kitchen', 'Swimming Pool', 'Restaurant', 'Games Room',
  'Rooftop Terrace', 'BBQ Area', 'TV Room', 'Fitness Center', 'Outdoor Courtyard',
  'Computer Lab', 'Parking', 'Private Cinema', 'Spa & Sauna', 'Dinner Party Room',
  '24/7 Concierge', 'Social Spaces'
];

export const propertyTypes = [
  'Student Hall',
  'Student Hotel',
  'Studio Apartment',
  'Shared Apartment',
  'Student Village',
  'Luxury Studio',
  'Ensuite Room'
];

export const popularCities = [
  'London',
  'Barcelona',
  'Melbourne',
  'Boston',
  'Sydney',
  'Berlin',
  'New York',
  'Paris',
  'Toronto',
  'Amsterdam'
];