type Redirect = {
  from: RegExp;
  to: string;
  permanent?: boolean;
};

export const redirects: Redirect[] = [
  { from: /^\/ta\/cs\/?$/, to: '/ta/computer-science/' },
  { from: /^\/ta\/la(ii)?\/?$/, to: '/ta/linear-algebra-ii/' },
  { from: /^\/ta\/ca\/?$/, to: '/ta/complex-analysis/' },
  { from: /^\/ta\/informatik\/?$/, to: '/ta/computer-science/' },
  { from: /^\/ta\/linear(e)?-algebra\/?$/, to: '/ta/linear-algebra-ii/' },
  { from: /^\/ta\/(lineare-algebra|linalg)(-ii)?\/?$/, to: '/ta/linear-algebra-ii/' },
  { from: /^\/ta\/funktionentheorie\/?$/, to: '/ta/complex-analysis/' },
  { from: /^\/(copyright|disclaimer|privacy|impressum)\/?$/, to: '/legal/' },
];
