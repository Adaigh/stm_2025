import Affiliates from "./affiliates"
import { PhoneLink, EmailLink } from "./util"

export default function Main() {

    return (
        <div className="section">
            <h1>STM Tuning</h1>
            <h6>European import garage</h6>
            <pre>
                Providing<br />
                &nbsp;<b>performance</b>,<br />
                &nbsp;&nbsp;<b>maintenance</b>,<br />
                &nbsp;&nbsp;&nbsp;and <b>repair</b> work<br/>
                in Spokane, WA<br />
                Specializing in Volkswagen and Audi.
            </pre>
            <p>
                {/* To book an appointment call: */}
                Call for an appointment:&nbsp;&nbsp;
                <PhoneLink />
            </p>
            <p>After hours?&nbsp;&nbsp;
                <EmailLink />
            </p>
            <br></br>
            <Affiliates />


        </div>
    )
}
