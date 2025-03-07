import { PhoneLink, EmailLink } from "./util"

export default function Contact() {
    return (
        <div className="section" id="shop">
            <h3>Shop Information</h3>

            <ul>
                <li>
                    <PhoneLink />
                </li>
                <li>
                    <EmailLink />
                </li>
                <li>
                    4715 E Trent Ave, Spokane, WA 99212
                </li>
                <li>
                    Hours: 9am-5pm, Monday through Friday
                </li>
            </ul>
            <a href="https://maps.app.goo.gl/QbksovXGtDDT5ptB9"
                target="_blank" rel="noreferrer">
                Get Directions (Google Maps)
            </a>
        </div>
    )
}