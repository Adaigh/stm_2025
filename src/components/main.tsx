import Affiliates from "./affiliates"
import { PhoneLink, EmailLink } from "./util"

export default function Main() {

    return (
        <div className="section">
            <h1>STM Tuning</h1>
            <h6>European import garage</h6>
            <p>
                Providing
                <ul className="service-link-list">
                    <li>
                        <span className="service-link">performance</span>,
                    </li>
                    <li>
                        <span className="service-link">maintenance</span>,
                    </li>
                    <li>
                        and <span className="service-link">repair</span> work
                    </li>
                </ul>
                in Spokane, WA
                <br />
                Specializing in Volkswagen and Audi.
                <br />
                Open M-F, 9am - 5pm
            </p>
            <p>
                {/* To book an appointment call: */}
                Call for an appointment!
                <PhoneLink />
            </p>
            <p>After hours?
                <EmailLink />
            </p>
            <br></br>
            <Affiliates />


        </div>
    )
}
