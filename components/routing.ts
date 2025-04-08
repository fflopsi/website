export type Navigation = {
  [path: string]: {
    title: string;
    navTitle: string;
    updated: string;
    sub?: Navigation;
  };
};

export const navigation: Navigation = {
  '/': {
    title: 'Florian Frauenfelder',
    navTitle: 'Home',
    updated: '2025-03-11',
  },
  '/ta/': {
    title: 'Florian: Teaching Assistant',
    navTitle: 'Teaching Assistant',
    updated: '2024-12-19',
    sub: {
      '/ta/informatik/': {
        title: 'Florian: Informatik TA',
        navTitle: 'Informatik',
        updated: '2024-12-18',
      },
      '/ta/linalg/': {
        title: 'Florian: Lineare Algebra II TA',
        navTitle: 'Lineare Algebra II',
        updated: '2025-04-08',
      },
    },
  },
  '/astro/': {
    title: 'Florian: Astronomy',
    navTitle: 'Hobby Astronomer',
    updated: '2025-03-22',
  },
  '/coding/': {
    title: 'Florian: Coding',
    navTitle: 'Hobby Coder',
    updated: '2025-03-10',
  },
  '/legal/': {
    title: 'Florian: Legal information',
    navTitle: 'Legal',
    updated: '2025-03-28',
  },
  '/404/': {
    title: "404: This didn't work.",
    navTitle: '',
    updated: '2024-12-19',
  },
};

function isValidPath(
  path: string,
  nav: Navigation = navigation,
): boolean {
  for (const key in nav) {
    if (key === path) return true;
    if (nav[key].sub && isValidPath(path, nav[key].sub)) {
      return true;
    }
  }
  return false;
}

export function getAttr(path: string, attr: 'title' | 'navTitle' | 'updated') {
  if (!isValidPath(path)) {
    switch (attr) {
      case 'title':
        return navigation['/404/'].title;
      case 'updated':
        return navigation['/404/'].updated;
    }
    return '';
  }
  if (path.split('/').length <= 3) {
    switch (attr) {
      case 'title':
        return navigation[path].title;
      case 'navTitle':
        return navigation[path].navTitle;
      case 'updated':
        return navigation[path].updated;
    }
  }
  if (path.split('/').length === 4) {
    switch (attr) {
      case 'title':
        return navigation['/ta/'].sub![path].title;
      case 'navTitle':
        return navigation['/ta/'].sub![path].navTitle;
      case 'updated':
        return navigation['/ta/'].sub![path].updated;
    }
  }
  return '';
}
