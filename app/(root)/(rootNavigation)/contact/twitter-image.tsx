import { generateTwitterImage } from '@/src/meta/ReusableTwitterImage';

export default async function Image() {
  return generateTwitterImage({
    title: 'Contact Luxe Furniture Faridabad | Showroom & Interior Design Consultation',
    description:
      'Visit our Faridabad furniture showroom or schedule a free design consultation. Call +91-9876543210 or email contact@luxefurniturefaridabad.com for inquiries.',
  });
}
