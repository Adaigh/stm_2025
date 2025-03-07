import { PhoneLink, EmailLink } from "./util"

export default function Main() {

    return (
        <div className="section">
            <h1>STM Tuning</h1>
            <h6>European import garage</h6>
            <p>
                We provide maintenance, repair, and performance upgrades for european imports, specializing in VW and AUDI.
            </p>
            <p>
                To book an appointment call:
                <PhoneLink />
            </p>
            <p>After hours? Email:
                <EmailLink />
            </p>

        </div>
    )
}
