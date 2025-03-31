import Affiliates from "./affiliates"
import { PhoneLink, EmailLink } from "./util"

export default function Main() {

    return (
            <div>

                <h1>STM Tuning</h1>
                <h6 className="text-end fs-6">- European import garage</h6>
                <p className="px-sm-5">
                    Providing
                    <ul className="service-link-list p-0">
                        <li className="service-li-1">
                            <span className="fw-bolder fst-italic">performance</span>,
                        </li>
                        <li className="service-li-2">
                            <span className="fw-bolder fst-italic">maintenance</span>,
                        </li>
                        <li className="service-li-3">
                            and <span className="fw-bolder fst-italic">repair</span> work
                        </li>
                    </ul>
                    in Spokane, WA for over 20 years!
                    <br />
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
