import { FaPhone } from "react-icons/fa"
import { PhoneLink, EmailLink } from "./util"
import g_logo from '../assets/google_logo.png'
import a_logo from '../assets/apple_logo.png'

export default function Contact() {
    return (
        <div id="shop">
            <h3>Shop Information</h3>

            <ul>
                <li>
                    Phone | <PhoneLink />
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
            <div className="d-flex justify-content-around p-1 p-md-3 contact-icons">
                <a className="map-icon p-3 p-md-5 rounded-circle" href="https://maps.app.goo.gl/QbksovXGtDDT5ptB9"
                    target="_blank" rel="noreferrer"><img src={g_logo} /></a>
                <a className="phone-icon p-3 p-md-5 rounded-circle" href="tel:509-893-2367">
                    <FaPhone size={40} color="black"/>
                </a>
                <a className="map-icon p-3 p-md-5 rounded-circle" href="http://maps.apple.com/?address=STM+Tuning+4715,E+Trent+Ave,Spokane,WA,99212"
                    target="_blank" rel="noreferrer"><img src={a_logo} /></a>
            </div>
        </div>
    )
}