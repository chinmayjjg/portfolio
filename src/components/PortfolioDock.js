import React from 'react';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileDownload,
  IconHome,
  IconMail,
  IconNewSection,
  IconTerminal2,
} from '@tabler/icons-react';
import FloatingDock from './ui/floating-dock';

const dockItems = [
  {
    title: 'Home',
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#',
  },
  {
    title: 'About',
    icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#about',
  },
  {
    title: 'Skills',
    icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#skills',
  },
  {
    title: 'Projects',
    icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#projects',
  },
  {
    title: 'Contact',
    icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: '#contact',
  },
  {
    title: 'LinkedIn',
    icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: 'https://www.linkedin.com/in/chinmay-pradhan-476954242/',
    external: true,
  },
  {
    title: 'X',
    icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: 'https://x.com/chinmaypr4dhan',
    external: true,
  },
  {
    title: 'Resume',
    icon: <IconFileDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: 'CHINMAY PRADHAN FULLSTACKDEV.pdf',
    external: true,
  },
];

const PortfolioDock = () => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[1100] flex justify-center px-4">
      <FloatingDock
        items={dockItems}
        desktopClassName="pointer-events-auto border border-white/10 bg-white/90 shadow-2xl shadow-black/20 backdrop-blur-md dark:bg-neutral-900/90"
        mobileClassName="pointer-events-auto"
      />
    </div>
  );
};

export default PortfolioDock;
