import { PhoneLink, EmailLink } from "./util"
import { IconContext } from "react-icons"
import { FaEnvelope } from "react-icons/fa"

export default function Hero() {

    return (
        <div className="d-flex flex-column gap-3 gap-md-5">
            {title()}
            {intro()}
            <div className="d-flex flex-column flex-md-column-reverse gap-3 gap-md-0">
                {phone()}
                {email()}
            </div>
        </div>
    )
}

function title() {
    return (
        <div className="px-2 mx-md-5">
            <h1 className="">STM Tuning</h1>
            <h6 className="text-end fs-6 fst-italic text-decoration-underline">- Audi and Volkswagen Garage</h6>
        </div>
    )
}

function intro() {
    return (
        <p className="m-0 text-center">
            We've been providing <span className="inline-block text-nowrap">
                <span className="fw-bolder fst-italic"> performance</span>,
                <span className="fw-bolder fst-italic"> maintenance</span>,
                and <span className="fw-bolder fst-italic">repair</span>
            </span> work in Spokane, WA for over 20 years!
        </p>
    )
}

const buttonClasses = "custom-button d-block p-3 rounded-4 text-light shadow-lg"

function phone() {
    return (
        <div className="text-center mx-auto">
            {/* To book an appointment call: */}
            {/* Call for an appointment! */}
            <PhoneLink className={buttonClasses} />
        </div>
    )
}

function email() {
    return (
        <div className="text-center mx-auto mb-md-5 vertical-center">
            {/* Open 9-5, Monday thru Friday */}
            <EmailLink className={buttonClasses}>
                <img
                    src="../../public/envelope-icon.png"
                    alt="Email"
                    className="me-2"
                    style={{ width: "35px"}}
                />
                Email us!
            </EmailLink>
        </div>
    )
}