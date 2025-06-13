/**
 * Contact.tsx
 * This file serves as the Contact section of the app,
 * providing contact information, hours, and links for
 * directions through Google Maps and Apple Maps.
 * 
 * Author: Alexander Daigh
 * Date: 06-10-2025
 * Version: 1.0.0
 */

import { FaPhone } from "react-icons/fa"
import { phoneNumber, EmailLink } from "./util"
import g_logo from '/images/google_logo.png'
import a_logo from '/images/apple_maps_logo.png'

export default function Contact() {
    return (
        <div id="shop">
            <h3>Shop Information</h3>

            <ul>
                <li>
                    Phone | {phoneNumber}
                </li>
                <li>
                    Email | <EmailLink />
                </li>
                <li>
                    Address | 4715 E Trent Ave, Spokane, WA 99212&nbsp;&nbsp;

                </li>
                <li>
                    Hours | 9am-5pm, Monday through Friday
                </li>
            </ul>
            {buttons()}
        </div>
    )
}

function buttons() {
    return (
        <div className="d-flex flex-column flex-md-row gap-3 justify-content-around p-1 p-md-3 align-items-center">
            <a href="tel:509-893-2367">
                <div className="icon-bg-light">
                    <FaPhone size={40} color="black" />
                </div>
            </a>
            <a href="https://maps.app.goo.gl/QbksovXGtDDT5ptB9"
                target="_blank"
                rel="noreferrer">
                <div className="icon-bg-dark">
                    <img src={g_logo} />
                </div>
            </a>
            <a href="http://maps.apple.com/?address=STM+Tuning+4715,E+Trent+Ave,Spokane,WA,99212"
                target="_blank" rel="noreferrer">
                <div className="icon-bg-light">
                    <img src={a_logo} />
                </div>
            </a>
        </div>
    )
}