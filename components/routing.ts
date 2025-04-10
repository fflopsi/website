import { Metadata } from 'next';

type Navigation = {
  [path: string]: {
    title: string;
    navTitle: string;
    description?: string;
    updated: string;
    sub?: Navigation;
  };
};

const paths = [
  '/',
  '/ta/',
  '/ta/informatik/',
  '/ta/linalg/',
  '/astro/',
  '/coding/',
  '/contact/',
  '/legal/',
  '/404/',
] as const;

export type Path = (typeof paths)[number];

const navigation: Navigation = {
  '/': {
    title: 'Florian Frauenfelder',
    navTitle: 'Home',
    description: "Florian Frauenfelder's personal website",
    updated: '2025-03-11',
  },
  '/ta/': {
    title: 'Florian: Teaching Assistant',
    navTitle: 'Teaching Assistant',
    description: "Florian's TA jobs at ETHZ",
    updated: '2024-12-19',
    sub: {
      '/ta/informatik/': {
        title: 'Florian: Informatik TA',
        navTitle: 'Informatik',
        description: "Florian's TA material for Informatik",
        updated: '2024-12-18',
      },
      '/ta/linalg/': {
        title: 'Florian: Lineare Algebra II TA',
        navTitle: 'Lineare Algebra II',
        description: "Florian's TA material for Lineare Algebra II",
        updated: '2025-04-08',
      },
    },
  },
  '/astro/': {
    title: 'Florian: Astronomy',
    navTitle: 'Hobby Astronomer',
    description: "Florian's hobby astronomer journey",
    updated: '2025-03-22',
  },
  '/coding/': {
    title: 'Florian: Coding',
    navTitle: 'Hobby Coder',
    description: "Florian's hobby coding journey",
    updated: '2025-03-10',
  },
  '/contact/': {
    title: 'Florian: Contact form',
    navTitle: 'Contact',
    updated: '2025-04-10',
  },
  '/legal/': {
    title: 'Florian: Legal information',
    navTitle: 'Legal',
    updated: '2025-04-10',
  },
  '/404/': {
    title: "404: This didn't work.",
    navTitle: '',
    updated: '2024-12-19',
  },
} as const;

function isValidPath(path: string, nav: Navigation = navigation): boolean {
  for (const key in nav) {
    if (key === path) return true;
    if (nav[key].sub && isValidPath(path, nav[key].sub)) {
      return true;
    }
  }
  return false;
}

export function getAttr(
  path: string,
  attr: 'title' | 'navTitle' | 'description' | 'updated',
): string | undefined {
  if (!isValidPath(path)) {
    switch (attr) {
      case 'title':
        return navigation['/404/'].title;
      case 'updated':
        return navigation['/404/'].updated;
    }
    return '';
  }
  const pathArr = path.split('/');
  if (pathArr.length <= 3) {
    switch (attr) {
      case 'title':
        return navigation[path].title;
      case 'navTitle':
        return navigation[path].navTitle;
      case 'description':
        return navigation[path].description;
      case 'updated':
        return navigation[path].updated;
    }
  }
  if (pathArr.length === 4) {
    switch (attr) {
      case 'title':
        return navigation[`/${pathArr[1]}/`].sub![path].title;
      case 'navTitle':
        return navigation[`/${pathArr[1]}/`].sub![path].navTitle;
      case 'description':
        return navigation[`/${pathArr[1]}/`].sub![path].description;
      case 'updated':
        return navigation[`/${pathArr[1]}/`].sub![path].updated;
    }
  }
  return '';
}

export function getRouteMetadata(path: Path): Metadata {
  return {
    title: getAttr(path, 'title'),
    description: getAttr(path, 'description'),
    authors: [{ name: 'Florian Frauenfelder' }],
  };
}
