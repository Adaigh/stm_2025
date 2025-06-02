import { FaPhone } from "react-icons/fa"
import { PhoneLink, EmailLink } from "./util"
import g_logo from '../assets/google_logo.png'
// import a_logo from '../assets/apple_logo.png'
import a_logo from '../assets/apple_maps_logo.png'

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
            {buttons()}
        </div>
    )
}

function buttons() {
    return (
        <div className="d-flex flex-column flex-md-row gap-3 justify-content-around p-1 p-md-3 align-items-center">
            <div className="icon-bg-light">
                <a href="tel:509-893-2367">
                    <FaPhone size={40} color="black" />
                </a>
            </div>
            <div className="icon-bg-dark">
                <a href="https://maps.app.goo.gl/QbksovXGtDDT5ptB9"
                    target="_blank"
                    rel="noreferrer">
                    <img src={g_logo} />
                </a>
            </div>
            <div className="icon-bg-light">
                <a href="http://maps.apple.com/?address=STM+Tuning+4715,E+Trent+Ave,Spokane,WA,99212"
                    target="_blank" rel="noreferrer">
                    <img src={a_logo} />
                </a>
            </div>
        </div>
    )
}