export default function Contact() {
    return (
        <div className="section">
            <ul>
                {info.map((val, index) => (
                    <li key={index}>
                        {val}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const info = [
    "(509) 893-2367",
    "stmtuning@hotmail.com",
    "4715 E Trent Ave, Spokane, WA 99212",
    "9am-5pm, Monday through Friday"
]