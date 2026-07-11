import { images } from './images'

export const services = [
  {
    slug: 'personal-training',
    title: 'Personal Training',
    image: images.personalTrainer,
    alt: 'Personal trainer coaching a client through a strength exercise',
    description:
      'One-on-one coaching built around your goals, with a program that adapts as you get stronger.',
    benefits: [
      'Custom training plan and goal tracking',
      'Dedicated coach for every session',
      'Form correction to train safely',
      'Flexible scheduling, 7 days a week',
    ],
  },
  {
    slug: 'strength-training',
    title: 'Strength Training',
    image: images.strengthTraining,
    alt: 'Athlete performing a barbell lift in the free-weights area',
    description:
      'Build lean muscle and functional power with progressive strength programming and free weights.',
    benefits: [
      'Full range of free weights and racks',
      'Progressive overload programming',
      'Compound and accessory lift coaching',
      'Injury-prevention warm-up routines',
    ],
  },
  {
    slug: 'cardio-functional-training',
    title: 'Cardio & Functional Training',
    image: images.cardioRunning,
    alt: 'Member running on a treadmill during a cardio session',
    description:
      'Improve endurance and heart health with guided cardio circuits, plus functional movement work that builds strength for everyday life.',
    benefits: [
      'Treadmills, bikes, and rowers',
      'Heart-rate zone based intervals',
      'Functional and mobility-focused circuits',
      'Beginner to advanced pacing plans',
    ],
  },
  {
    slug: 'group-fitness',
    title: 'Group Fitness',
    image: images.groupClass,
    alt: 'Group fitness class training together in a studio',
    description:
      'High-energy classes that combine motivation, music, and community to keep every session fun.',
    benefits: [
      'HIIT, spin, and bootcamp formats',
      'Certified group instructors',
      'All fitness levels welcome',
      'New class schedule every week',
    ],
  },
  {
    slug: 'weight-management',
    title: 'Weight Management',
    image: images.womenTraining,
    alt: 'Member completing a supervised weight-management training circuit',
    description:
      'A structured mix of training and accountability to help you reach and maintain a healthy weight.',
    benefits: [
      'Structured multi-week programs',
      'Regular progress check-ins',
      'Combined strength and cardio plan',
      'Habit coaching for lasting results',
    ],
  },
  {
    slug: 'nutrition-guidance',
    title: 'Nutrition Guidance',
    image: images.nutritionFood,
    alt: 'Fresh, healthy meal prepared as part of a nutrition plan',
    description:
      'Personalized nutrition support from our professional trainers that complements your training and fits your lifestyle.',
    benefits: [
      'One-on-one nutrition consultations',
      'Meal planning for your goals',
      'Macro and calorie guidance',
      'Ongoing support between sessions',
    ],
  },
]
