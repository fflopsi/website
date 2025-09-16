type Navigation = {
  [path: string]: {
    title: string;
    navTitle: string;
    sub?: Navigation;
  };
};

const paths = [
  '/',
  '/ta/',
  '/ta/computer-science/',
  '/ta/linear-algebra-ii/',
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
  },
  '/ta/': {
    title: 'Florian: Teaching Assistant',
    navTitle: 'Teaching Assistant',
    sub: {
      '/ta/computer-science/': {
        title: 'Florian: Informatik TA',
        navTitle: 'Informatik',
      },
      '/ta/linear-algebra-ii/': {
        title: 'Florian: Lineare Algebra II TA',
        navTitle: 'Lineare Algebra II',
      },
      '/ta/complex-analysis/': {
        title: 'Florian: Funktionentheorie TA',
        navTitle: 'Funktionentheorie',
      },
    },
  },
  '/astro/': {
    title: 'Florian: Astronomy',
    navTitle: 'Hobby Astronomer',
  },
  '/coding/': {
    title: 'Florian: Coding',
    navTitle: 'Hobby Coder',
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
  attr: 'title' | 'navTitle',
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
    }
  }
  if (pathArr.length === 4) {
    switch (attr) {
      case 'title':
        return navigation[`/${pathArr[1]}/`].sub![path].title;
      case 'navTitle':
        return navigation[`/${pathArr[1]}/`].sub![path].navTitle;
    }
  }
  return '';
}
