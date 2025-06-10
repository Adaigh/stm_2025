/**
 * Util.tsx
 * This file serves as a utility file for the app,
 * containing functions for generating links to the
 * shop's phone number and email address and some
 * useful TypeScript declarations.
 * 
 * Author: Alexander Daigh
 * Date: 06-10-2025
 * Version: 1.0.0
 */

import { ReactNode } from "react";

type LinkProps = {
    className?: string;
    children?: ReactNode;
}

export function PhoneLink({ className }: LinkProps) {
    return (
        <a className="button-link" href="tel:509-893-2367">
            <span className={className}>
                (509) 893-2367
            </span>
        </a>
    )
}


export function EmailLink({ className, children }: LinkProps) {


    return (
        <a className="button-link" href="mailto:stmtuning@hotmail.com">
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