/**
 * Util.tsx
 * This file serves as a utility file for the app,
 * containing functions for generating links to the
 * shop's phone number and email address and some
 * useful TypeScript declarations.
 * 
 * Author: Alexander Daigh
 * Date: 06-13-2025
 * Version: 1.0.0
 */

import { ReactNode } from "react";

type LinkProps = {
    className?: string;
    children?: ReactNode;
}

export const phoneNumber = "509-893-2367"

export function PhoneLink({ className }: LinkProps) {
    return (
        <a className="button-link" href={`tel:${phoneNumber}`}>
            <span className={className}>
                ({phoneNumber})
            </span>
        </a>
    )
}

const emailData = {
    email: "stmtuning@hotmail.com",
    subject: "Appointment Request",
    bodylines: [
        "Name:",
        "Phone Number:",
        "Vehicle Year/Make/Model:",
        "Vin (Only required for quotes)",
        "How can we help?"
    ]
}

const doubleNewline = "%0D%0A%0D%0A"


export function EmailLink({ className, children }: LinkProps) {


    return (
        <a
            className="button-link"
            href={`mailto:${emailData.email}?subject=${emailData.subject}&body=${emailData.bodylines.join(doubleNewline)}`}
            >
            <span className={className}>
                {!children && <>stmtuning@hotmail.com</>}
                {children}
            </span>
        </a>
    )
}

export interface Dict<T> {
    [key: string]: T;
}