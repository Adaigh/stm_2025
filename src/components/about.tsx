export default function About() {
    return (
        <div className="section" id="about">
            <h3>About STM:</h3>
            <ul>
                {notes.map((val,index) => {
                    var aboutKey = 'about' + index;
                    return(
                        <li key={aboutKey}>
                            {val}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

const notes = [
    "Serving spokane WA for over 20 years.",
    "Official dealer for Eurodyne and TuneZilla tuning software.",
    "PERFORMANCE",
    "Everything from performance engine builds to aftermarket suspension.",
    "MAINTENANCE",
    "We have the specialty tools required to perform all service intervals.",
    "REPAIR",
    "We have the right experience and diagnositc software to repair your vehicle."
]