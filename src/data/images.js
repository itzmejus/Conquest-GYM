// Central place for remote sample imagery (Unsplash). Swap these URLs for
// licensed brand photography before production launch.
const unsplash = (id, params = 'auto=format&fit=crop&w=1600&q=80') =>
  `https://images.unsplash.com/${id}?${params}`

export const images = {
  heroGym: unsplash('photo-1534438327276-14e5300c3a48'),
  gymInterior: unsplash('photo-1571019613454-1cb2f99b2d8b'),
  strengthTraining: unsplash('photo-1517836357463-d25dfeac3438'),
  cardioRunning: unsplash('photo-1517963879433-6ad2b056d712'),
  gymEquipment: unsplash('photo-1583454110551-21f2fa2afe61'),
  personalTrainer: unsplash('photo-1571902943202-507ec2618e8f'),
  groupFitness: unsplash('photo-1594381898411-846e7d193883'),
  gymWide: unsplash('photo-1550345332-09e3ac987658'),
  weightCloseup: unsplash('photo-1526506118085-60ce8714f8c5'),
  gymFloor: unsplash('photo-1540497077202-7c8a3999166f'),
  weightLifting: unsplash('photo-1549060279-7e168fcee0c2'),
  trainerCoaching: unsplash('photo-1571731956672-f2b94d7dd0cb'),
  groupClass: unsplash('photo-1518611012118-696072aa579a'),
  spinClass: unsplash('photo-1552674605-db6ffd4facb5'),
  weightRoom: unsplash('photo-1544367567-0f2fcb009e0b'),
  dumbbellRack: unsplash('photo-1546483875-ad9014c88eba'),
  treadmillRun: unsplash('photo-1523301343968-6a6ebf63c672'),
  crossfitRopes: unsplash('photo-1516110833967-0b5716ca1387'),
  womenTraining: unsplash('photo-1571008887538-b36bb32f4571'),
  nutritionFood: unsplash('photo-1490645935967-10de6ba17061'),
  aboutFacility: unsplash('photo-1571019614242-c5c5dee9f50b'),
}

export const trainerPhotos = [
  unsplash('photo-1541534741688-6078c6bfb5c5', 'auto=format&fit=crop&w=800&q=80'),
  unsplash('photo-1548690312-e3b507d8c110', 'auto=format&fit=crop&w=800&q=80'),
  unsplash('photo-1600180758890-6b94519a8ba6', 'auto=format&fit=crop&w=800&q=80'),
  unsplash('photo-1607962837359-5e7e89f86776', 'auto=format&fit=crop&w=800&q=80'),
]
