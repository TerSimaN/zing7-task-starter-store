"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MenuDropdown = (props: {
    menuText: string,
    menuIcon?: string | StaticImport,
    menuItems: {
        icon?: string | StaticImport,
        value: string,
        href: string,
    }[],
    className: string,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative flex flex-col">
            <button className={`inline-flex items-center ${props.className}`} onClick={() => setOpen(!open)}>
                {props.menuIcon && <Image src={props.menuIcon} alt="" width={19} height={14} className="me-2" />}
                {props.menuText}
                <svg className="w-5 h-5 text-grey-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4" />
                </svg>
            </button>
            <div className={`${open ? `` : `hidden`} absolute top-6 -right-3 z-20 bg-white rounded-lg mt-1.5 w-48 overflow-hidden overflow-y-auto shadow`}>
                <ul className={`p-2 ${props.className}`}>
                    {props.menuItems.map((menuItem, index) => (
                        <li key={index} className="inline-flex w-full whitespace-nowrap">
                            <Link href={menuItem.href} onClick={() => setOpen(false)} className="inline-flex items-center rounded-md px-3 py-2 w-full hover:bg-grey-100">
                                {menuItem.icon && <Image src={menuItem.icon} alt="" width={19} height={14} className="me-2" />}
                                {menuItem.value}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MenuDropdown