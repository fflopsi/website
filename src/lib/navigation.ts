type NavItem = {
  href: string;
  name: string;
  title: string;
  description: string;
  id?: string;
  subs?: NavItem[];
};

export const navItems: NavItem[] = [
  {
    href: '/404/',
    name: 'Not found',
    title: "404: This didn't work.",
    description: 'Something went wrong.',
  },
  {
    href: '/',
    name: 'Home',
    title: 'Florian Frauenfelder',
    description: "Florian Frauenfelder's personal website",
  },
  {
    href: '/ta/',
    name: 'Teaching Assistant',
    title: 'Florian: Teaching Assistant',
    description: "Florian's TA jobs at ETHZ",
    subs: [
      {
        href: '/ta/computer-science/',
        name: 'Informatik',
        title: 'Florian: Informatik TA',
        description: "Florian's TA material for Informatik",
      },
      {
        href: '/ta/linear-algebra-ii/',
        name: 'Lineare Algebra II',
        title: 'Florian: Lineare Algebra II TA',
        description: "Florian's TA material for Lineare Algebra II",
      },
      {
        href: '/ta/complex-analysis/',
        name: 'Funktionentheorie',
        title: 'Florian: Funktionentheorie TA',
        description: "Florian's TA material for Funktionentheorie",
      },
    ],
  },
  {
    href: '/coding/',
    name: 'Hobby Coder',
    title: 'Florian: Coding',
    description: "Florian's hobby coding journey",
  },
  {
    href: '/astro/',
    name: 'Hobby Astronomer',
    title: 'Florian: Astronomy',
    description: "Florian's hobby astronomer journey",
  },
  {
    href: '/legal/',
    name: 'Legal',
    title: 'Florian: Legal information',
    description: 'Contact, Copyright, Disclaimer, Privacy policy',
    id: 'legal',
  },
  {
    href: '/contact/',
    name: 'Contact',
    title: 'Florian: Contact form',
    description: 'Contact Florian personally',
    id: 'contact',
  },
];

export function findNavItem(path: string, items: NavItem[] = navItems): NavItem | undefined {
  for (const item of items) {
    if (item.href === path) return item;
    if (item.subs) {
      const found = findNavItem(path, item.subs);
      if (found) return found;
    }
  }
  return undefined;
}
