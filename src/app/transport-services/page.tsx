import { ServicePage } from '../../components/page-templates'
import { images } from '../../components/site/images'
export const metadata = { title: 'Goods Transport Service in Jodhpur | Shree Balaji Enterprises', description: 'Practical goods transportation support for business requirements from Jodhpur, Rajasthan.' }
export default function Page() { return <ServicePage eyebrow="Goods transportation" title="A steady way to move your goods." text="Talk to us about your transportation requirement and we will help you understand the right next step." image={images.road} intro="Transportation support without unnecessary complexity." bullets={['Goods transportation enquiries', 'Business-focused coordination', 'Requirement-led shipment planning']} /> } 
