"use client";

import { Listbox, Transition } from '@headlessui/react';
import { Region } from '@medusajs/medusa';
import { useToggleState } from '@medusajs/ui';
import { updateRegion } from 'app/actions';
import { useParams, usePathname } from 'next/navigation';
import { Fragment, useEffect, useMemo, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

type CountryOption = {
    country: string
    region: string
    label: string
}

const LanguageSelect = ({ regions }: { regions: Region[] }) => {
    const [current, setCurrent] = useState<CountryOption | undefined>(undefined);

    const { countryCode } = useParams();
    const currentPath = usePathname().split(`/${countryCode}`)[1];

    const { state, open, close } = useToggleState();

    const options: CountryOption[] | undefined = useMemo(() => {
        return regions
            ?.map((r) => {
                return r.countries.map((c) => ({
                    country: c.iso_2,
                    region: r.id,
                    label: c.display_name,
                }))
            })
            .flat()
            .sort((a, b) => a.label.localeCompare(b.label));
    }, [regions]);

    useEffect(() => {
        if (countryCode) {
            const option = options?.find((o) => o.country === countryCode);
            setCurrent(option);
        }
    }, [options, countryCode]);

    const handleChange = (option: CountryOption) => {
        updateRegion(option.country, currentPath);
        close();
    }

    return (
        <div>
            <Listbox
                as="span"
                onChange={handleChange}
                defaultValue={
                    countryCode
                        ? options?.find((o) => o.country === countryCode)
                        : undefined
                }
            >
                <Listbox.Button
                    className="font-rubik font-normal text-base leading-5 tracking-[0.18px] text-grey-900 py-1"
                    onClick={state ? close : open}
                >
                    <div className="flex items-center gap-x-0.5">
                        {current && (
                            <span className="flex items-center gap-x-2">
                                <ReactCountryFlag
                                    svg
                                    style={{
                                        width: "16px",
                                        height: "16px",
                                    }}
                                    countryCode={current.country}
                                />
                                {current.label}
                            </span>
                        )}
                        <svg className="w-5 h-5 text-grey-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4" />
                        </svg>
                    </div>
                </Listbox.Button>
                <div className="flex relative w-full min-w-[11rem]">
                    <Transition
                        show={state}
                        as={Fragment}
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options
                            className="absolute right-7 top-1 z-[900] bg-white rounded-lg font-rubik font-normal text-base leading-5 tracking-[0.18px] text-grey-900 w-full max-h-[442px] overflow-y-scroll drop-shadow-md capitalize no-scrollbar"
                            static
                        >
                            {options?.map((o, index) => {
                                return (
                                    <Listbox.Option
                                        key={index}
                                        value={o}
                                        className="flex items-center gap-x-2 px-3 py-2 hover:bg-grey-100 cursor-pointer"
                                    >
                                        <ReactCountryFlag
                                            svg
                                            style={{
                                                width: "16px",
                                                height: "16px",
                                            }}
                                            countryCode={o.country}
                                        />{" "}
                                        {o.label}
                                    </Listbox.Option>
                                )
                            })}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default LanguageSelect