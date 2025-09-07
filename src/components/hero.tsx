/**
 * Hero.tsx
 * This file serves as the Hero section of the app,
 * containing the title, introduction, and contact buttons
 * in a simple Call-to-Action format.
 * 
 * Author: Alexander Daigh
 * Date: 06-10-2025
 * Version: 1.0.0
 */

import { PhoneLink, EmailLink } from "./util"
import envelope_icon from '/images/envelope-icon.webp'

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
            <h1 id="title" className="">STM Tuning</h1>
            <p id="subtitle" className="fs-6 fst-italic text-decoration-underline">- Audi and Volkswagen Garage</p>
        </div>
    )
}

function intro() {
    return (
        <p className="m-0 text-center">
            We've been providing <span className="inline-block text-nowrap">
                <span className="fw-bolder fst-italic"><a href="#Performance" aria-label="Scroll to Performance">performance</a></span>,
                <span className="fw-bolder fst-italic"> <a href="#Maintenance" aria-label="Scroll to Maintenance">maintenance</a></span>,
                and <span className="fw-bolder fst-italic"><a href="#Repairs" aria-label="Scroll to Repairs">repair</a></span>
            </span> work in Spokane, WA for over 20 years!
        </p>
    )
}

const buttonClasses = "custom-button d-block p-3 rounded-4 text-light shadow-lg"

function phone() {
    return (
        <div className="text-center mx-auto" role="button" aria-label="Click to Call">
            <PhoneLink className={buttonClasses} />
        </div>
    )
}

function email() {
    return (
        <div className="text-center mx-auto mb-md-5 vertical-center" role="button" aria-label="Click to Email">
            <EmailLink className={buttonClasses}>
                <img
                    src={envelope_icon}
                    alt="Email"
                    className="me-2"
                    style={{ width: "35px"}}
                />
                Email us!
            </EmailLink>
        </div>
    )
}