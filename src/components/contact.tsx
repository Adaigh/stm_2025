import { PhoneLink, EmailLink } from "./util"
import g_logo from '../assets/google_logo.png'
import a_logo from '../assets/apple_logo.png'

export default function Contact() {
    return (
        <div className="section" id="shop">
            <h3>Shop Information</h3>

            <ul>
                <li>
                    Phone | <PhoneLink />
                </li>
                <li>
                    Email | <EmailLink />
                </li>
                <li>
                    Address | 4715 E Trent Ave, Spokane, WA 99212 
                    &nbsp;&nbsp;
                    <u>Get Directions</u>:
                    <a className="map-icon" href="https://maps.app.goo.gl/QbksovXGtDDT5ptB9"
                        target="_blank" rel="noreferrer"><img src={g_logo} /></a>
                    <a className="map-icon" href="http://maps.apple.com/?address=STM+Tuning+4715,E+Trent+Ave,Spokane,WA,99212"
                        target="_blank" rel="noreferrer"><img src={a_logo} /></a>
                </li>
                <li>
                    Hours | 9am-5pm, Monday through Friday
                </li>
            </ul>
        </div>
    )
}