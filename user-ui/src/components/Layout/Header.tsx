"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { easeOut } from 'framer-motion/dom'
import Link from 'next/link'
import React, { ReactComponentElement } from 'react'
import { FlyoutLink, PricingContent } from '../HoverComponents/FlyOutLink'

type Props = {}

const Header = () => {
    return (
        <header className="flex h-20 items-center justify-stretch bg-neutral-900 px-3 py-12">
            <div className='text-5xl font-bold uppercase'>
                School Name
            </div>
            <div className='flex flex-1 justify-evenly'>
                <FlyoutLink href="#" FlyoutContent={HomeContent}>
                    Home
                </FlyoutLink>

                <FlyoutLink href="#" FlyoutContent={Administration}>
                    Administration
                </FlyoutLink>

                <FlyoutLink href="#" FlyoutContent={PricingContent}>
                    Schools
                </FlyoutLink>

                <FlyoutLink href="#" FlyoutContent={PricingContent}>
                    Gallery
                </FlyoutLink>

                <FlyoutLink href="#" FlyoutContent={PricingContent}>
                    Services
                </FlyoutLink>
            </div>
        </header>
    )
}


const HomeContent = () => {
    return (
        <div>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-white shadow-xl">
                <li className="row-span-3">
                    <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                    >

                        <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy and
                            paste into your apps. Accessible. Customizable. Open
                            Source.
                        </p>
                    </a>
                </li>
                <a href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                </a>
                <a href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                </a>
                <a href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, asts...etc
                </a>
            </ul>
        </div>
    )
}

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

const Administration = () => {
    return (
        <div>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white shadow-xl">
                {components.map((component) => (
                    <a
                        key={component.title}
                        title={component.title}
                        href={component.href}
                    >
                        {component.description}
                    </a>
                ))}
            </ul>
        </div>
    )

}
export default Header