import { ServicePage } from '../../components/page-templates'
import { images } from '../../components/site/images'
export const metadata = { title: 'Cargo Services in Jodhpur | Shree Balaji Enterprises', description: 'Discuss cargo movement and larger shipment requirements with Shree Balaji Enterprises in Jodhpur.' }
export default function Page() { return <ServicePage eyebrow="Cargo services" title="Cargo movement, handled with attention." text="For larger or heavier requirements, start with a clear conversation about your cargo, route and priorities." image={images.cargo} intro="A grounded approach to cargo requirements." bullets={['Cargo enquiry and requirement review', 'Careful shipment coordination', 'Domestic movement support']} /> } 
