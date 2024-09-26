'use client';
import { GitHubLogoIcon, LinkedInLogoIcon, VercelLogoIcon } from '@radix-ui/react-icons';
import { SiGmail } from 'react-icons/si'; // Importing Gmail icon
import React, { useState } from 'react';

import { ModeToggle } from '@/components/page-ui/ModeToggle';
import { HoveredLink, Menu, MenuItem } from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';

export function Navbar() {
    return (
        <div className="relative flex w-full items-center justify-center">
            <NavbarComponent className="top-2" />
        </div>
    );
}

function NavbarComponent({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Navigation">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#landing-page">Landing Page</HoveredLink>
                        <HoveredLink href="#about-me">About Me</HoveredLink>
                        <HoveredLink href="#experience">Experience</HoveredLink>
                        <HoveredLink href="#skills">Skills</HoveredLink>
                        <HoveredLink href="#projects">Projects</HoveredLink>
                        <HoveredLink href="#contact-me">Contact Me</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Social">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="https://github.com/mian-abd" rel="noopener noreferrer" target="_blank">
                            <GitHubLogoIcon className="mr-1" /> Github
                        </HoveredLink>
                        <HoveredLink href="https://www.linkedin.com/in/mian-abdullah-91639a221/" rel="noopener noreferrer" target="_blank">
                            <LinkedInLogoIcon className="mr-1" /> Linkedin
                        </HoveredLink>
                        <HoveredLink href="mailto:abdullahmian549@gmail.com" rel="noopener noreferrer" target="_blank">
                        <SiGmail className="mr-1" /> Gmail
                        </HoveredLink>
                    </div>
                </MenuItem>
                <ModeToggle />
            </Menu>
        </div>
    );
}
