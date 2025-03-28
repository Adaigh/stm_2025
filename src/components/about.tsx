import {FC} from "react";
import { Dict } from "./util";

export default function About() {

    return (
        <div id="about">
            <h3>About STM:</h3>
            <ul>
                {notes.map((val, index) => {
                    var aboutKey = 'about' + index;
                    return (
                        <li key={aboutKey}>
                            {val}
                        </li>
                    )
                })}
            </ul>
            <div className="container-fluid">
                {Object.keys(services).map((val, index) => {
                    var serviceKey = val + index
                    return (
                        <ServiceList serviceName={val} parentKey={serviceKey} />
                    )
                })}
            </div>
        </div>
    )
}

interface ListProps {
    serviceName:string;
    parentKey:string;
}

const ServiceList: FC<ListProps> = ({serviceName, parentKey}) => {

    return (
        <>
            <h6 key={parentKey}> {serviceName}</ h6 >
            <ul>
                {services[serviceName].map((v, i) => {
                    var indServiceKey = parentKey + i
                    return (
                        <li key={indServiceKey} className="my-2">
                            {v}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

const notes: string[] = [
    "At STM we've been serving Spokane Washington's Audi and Volkswagen community for over 20 years.",
    "We have the right equipment and experience to make sure your vehicle is safe and running right.",
    "We are also an official dealer for both Eurodyne and TuneZilla tuning software."
]

const services: Dict<string[]> = {
    'Performance': [
        "Engine and Gearbox Tuning",
        "Motor Internal Upgrades/Assembly",
        "Forced Induction (Turbo/Supercharger)",
        "Air Intake and Exhaust kits",
        "Fuel Supply (Pumps/Injectors)",
        "Suspension Lift/Drop/Sport kits",
        "Wheels and Tires",
        "Custom Fabrication"
    ],
    "Maintenance": [
        "Inspections",
        "Engine oil and filter change",
        "Air filter replacement",
        "Alignments (FWD and AWD)",
        "Tires - mount, balance, puncture repair",
        "Mileage-based service intervals",
        "Transmission fluid and filter service",
        "Brake pads and rotors replacement",
        "Brake fluid flush",
        "Engine oil flush"
    ],
    "Repairs": [
        "Engine mechanical and electrical",
        "Fuel system supply and delivery",
        "Manual and Automatic transmissions",
        "Suspension components, bearings, and bushings",
        "Heating, Ventilation, and Air Conditioning",
        "Cooling system components",
        "Interior (body) electrical",
        "Brakes and ABS",
        "and much more..."
    ]
}