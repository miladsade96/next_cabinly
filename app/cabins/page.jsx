import CabinCatalog from "@/app/components/CabinCatalog";
import { cabins } from "@/app/data/cabins";
export const metadata = { title: "Explore the cabins" };
export default function Page() { return <section className="container page-section"><p className="eyebrow">Find your space</p><h1 className="page-title">Your next quiet corner.</h1><p className="page-intro">Browse the sample collection and find room for your group. Availability and online booking will be added when the reservation service is connected.</p><CabinCatalog cabins={cabins} /></section>; }
