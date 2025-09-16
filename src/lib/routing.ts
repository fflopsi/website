import { Metadata } from 'next';

type Navigation = {
  [path: string]: {
    title: string;
    navTitle: string;
    description?: string;
    sub?: Navigation;
  };
};

const paths = [
  '/',
  '/ta/',
  '/ta/informatik/',
  '/ta/linalg/',
  '/ta/complex-analysis/',
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
  },
  '/ta/': {
    title: 'Florian: Teaching Assistant',
    navTitle: 'Teaching Assistant',
    description: "Florian's TA jobs at ETHZ",
    sub: {
      '/ta/informatik/': {
        title: 'Florian: Informatik TA',
        navTitle: 'Informatik',
        description: "Florian's TA material for Informatik",
      },
      '/ta/linalg/': {
        title: 'Florian: Lineare Algebra II TA',
        navTitle: 'Lineare Algebra II',
        description: "Florian's TA material for Lineare Algebra II",
      },
      '/ta/complex-analysis/': {
        title: 'Florian: Complex Analysis TA',
        navTitle: 'Complex Analysis',
        description: "Florian's TA material for Complex Analysis",
      },
    },
  },
  '/astro/': {
    title: 'Florian: Astronomy',
    navTitle: 'Hobby Astronomer',
    description: "Florian's hobby astronomer journey",
  },
  '/coding/': {
    title: 'Florian: Coding',
    navTitle: 'Hobby Coder',
    description: "Florian's hobby coding journey",
  },
  '/contact/': {
    title: 'Florian: Contact form',
    navTitle: 'Contact',
  },
  '/legal/': {
    title: 'Florian: Legal information',
    navTitle: 'Legal',
  },
  '/404/': {
    title: "404: This didn't work.",
    navTitle: '',
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
  attr: 'title' | 'navTitle' | 'description',
): string | undefined {
  if (!isValidPath(path)) {
    switch (attr) {
      case 'title':
        return navigation['/404/'].title;
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
