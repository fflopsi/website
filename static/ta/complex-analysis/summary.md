# Holomorphic functions
### Proposition
${ H(\Omega) }$ is a ${ \mathbb{C} }$-vector space with
1. ${ f,g \in \mathscr{H}(\Omega) \implies \alpha f + \beta g \in \mathscr{H}(\Omega) }$
2. ${ f,g \in \mathscr{H}(\Omega) \implies fg \in \mathscr{H}(\Omega) }$
3. ${ f,g \in \mathscr{H}(z_{0}), g(z_{0})\neq 0 \implies \frac{f}{g} \in \mathscr{H}(z_{0}) }$
4. ${ f \in \mathscr{H}(\Omega,U), g \in \mathscr{H}(U) \implies g \circ f \in \mathscr{H}(\Omega) }$

### Proposition 2.3
${ f(z) = u(x,y) + iv(x,y) \in \mathscr{H}(z_{0}) \implies }$
$$
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \qquad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
$$
or
$$
Jf = \begin{pmatrix}
\frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\
\frac{\partial v}{\partial x} & \frac{\partial v}{\partial y}
\end{pmatrix} = \begin{pmatrix}
\frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\
-\frac{\partial u}{\partial y} & \frac{\partial u}{\partial x}
\end{pmatrix} = \begin{pmatrix}
\frac{\partial u}{\partial x} & -\frac{\partial v}{\partial x} \\
\frac{\partial v}{\partial x} & \frac{\partial u}{\partial x}
\end{pmatrix}
$$
and ${ \lvert \det Jf \rvert = \lvert f'(z_{0}) \rvert^{2} }$.

### Theorem 2.4
${ f = u + iv, u,v \in C^{1} \land \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies f \in \mathscr{H}(\Omega) }$.

### Theorem 2.6
$$
f(z) = \sum_{n = 0}^{\infty} a_{n}z^{n} \in \mathscr{H}(D_{R}(0)) \qquad f'(z) = \sum_{n = 0}^{\infty} na_{n}z^{n-1} \in \mathscr{H}(D_{R}(0))
$$
with ${ \frac{1}{R} = \limsup_{n \to \infty} \lvert a_{n} \rvert^{1/n} }$.

# Complex line integrals
### Definition: Integral along path
${ \gamma: [a,b] \to \mathbb{C}, f \in C^{0}(\gamma) }$:
$$
\int_{\gamma} f(z) \, \mathrm{d}z := \int_{a}^{b} f(\gamma(t))\gamma'(t) \, \mathrm{d}t
$$

### Proposition
${ f,g \in C^{0}(\gamma_{1},\gamma_{2}: [a,b] \to \mathbb{C}) \implies }$
$$
\begin{align}
\int_{\gamma} \alpha f(z) + \beta g(z) \, \mathrm{d}z & = \alpha \int_{\gamma} f(z) \, \mathrm{d}z + \beta \int_{\gamma} g(z) \, \mathrm{d}z \\
\int_{-\gamma} f(z) \, \mathrm{d}z & = -\int_{\gamma} f(z) \, \mathrm{d}z \\
\int_{\gamma_{1} + \gamma_{2}} f(z) \, \mathrm{d}z & = \int_{\gamma_{1}} f(z) \, \mathrm{d}z + \int_{\gamma_{2}} f(z) \, \mathrm{d}z \\
\left\lvert  \int_{\gamma} f(z) \, \mathrm{d}z  \right\rvert & \leq \sup_{z \in \gamma} \lvert f(z) \rvert L(\gamma)
\end{align}
$$

### Theorem 3.2
${ f \in C^{0}(\Omega), \gamma: [a,b] \to \Omega, F' = f \implies }$
$$
\int_{\gamma} f(z) \, \mathrm{d}z = F(\gamma(b)) - F(\gamma(a))
$$

# Cauchy's Theorem and its applications
### Theorem 1.1: Goursat
${ f \in \mathscr{H}(\Omega), T \subseteq \Omega, \mathring{T} \subseteq \Omega }$ a triangle ${ \implies }$
$$
\int_{T} f(z) \, \mathrm{d}z = 0
$$

### Theorem 2.1
${ f \in \mathscr{H}(D_{r}(z_{0})) \implies \exists F: F'=f }$

### Theorem 2.2b: Cauchy's Theorem for a disc
${ f \in C^{0}(D_{r}(z_{0})), f \in \mathscr{H}(D_{r}(z_{0}) \setminus z_{1}) \implies }$
$$
\int_{\gamma} f(z) \, \mathrm{d}z = 0 \qquad \forall \gamma \in D_{r}(z_{0}), \gamma(a) = \gamma(b)
$$

## Cauchy Integral Formulae
### Theorem 4.1: Cauchy Integral Formula /Theorem 4.4 / Corollary 4.3: Cauchy inequalities
${ f \in \mathscr{H}(\Omega \supseteq \overline{D}), C := \partial D }$ positive orientation ${ \implies }$
$$
\frac{1}{2\pi i} \int_{C} \frac{f(w)}{w-z} \, \mathrm{d}w = f(z) \qquad \forall z \in D
$$

${ f \in \mathscr{H}(\Omega \supseteq D_{r}(z_{0})) \implies }$
$$
f(z) = \sum_{n = 0}^{\infty} a_{n}(z-z_{0})^{n} \qquad a_{n} = \frac{f^{(n)}(z_{0})}{n!} = \frac{1}{2\pi i} \int_{C_{r}(z_{0})} \frac{f(w)}{(w-z_{0})^{n+1}} \, \mathrm{d}w \qquad \forall z \in D_{r}(z_{0})
$$

${ f \in \mathscr{H}(\Omega \supseteq \overline{D_{r}(z_{0})}) \implies }$
$$
\lvert f^{(n)}(z_{0}) \rvert \leq \frac{n! \cdot \sup_{\lvert w-z_{0} \rvert = r} \lvert f(w) \rvert}{r^{n}}
$$

### Theorem/Corollary 4.5: Liouville's Theorem
${ f \in \mathscr{H}(\mathbb{C}), \sup_{z \in \mathbb{C}} \lvert f(z) \rvert < \infty \implies f = \text{const.} }$

### Definition: Order of a function
${ f \in \mathscr{H}(\Omega \ni z_{0}) }$:
$$
\operatorname{ord}_{z_{0}}f := \min \{ k \geq 0 \mid f^{(k)}(z_{0}) \neq 0 \}
$$

### Proposition 4.6
${ f \in \mathscr{H}(\Omega \ni z_{0}) \implies }$
1. ${ \operatorname{ord}_{z_{0}}f = \infty \implies f(z) = 0, \forall z \in D_{r}(z_{0}) }$
2. ${ \operatorname{ord}_{z_{0}}f \neq 0 \implies \exists! h \in \mathscr{H}(D_{r}(z_{0})), h(z_{0}) \neq 0: f(z) = (z-z_{0})^{\operatorname{ord}_{z_{0}}f}h(z), \forall z \in D_{r}(z_{0}) }$
3. ${ \operatorname{ord}_{z_{0}}(f+g) \geq \min \{ \operatorname{ord}_{z_{0}}f, \operatorname{ord}_{z_{0}}g \} }$ and ${ \operatorname{ord}_{z_{0}}(fg) = \operatorname{ord}_{z_{0}}f + \operatorname{ord}_{z_{0}}g }$

### Theorem 4.8 / Corollary 4.9: Identity theorem / Theorem 4.8b / Corollary 4.9b: Identity theorem / Theorem
${ f \in \mathscr{H}(\Omega), \mathcal{Z} }$ an infinite set with limit point ${ z_{0} \in \Omega, z_{0} \notin \mathcal{Z} }$. Then ${ f(z) = 0, \forall z \in \mathcal{Z} \implies f \equiv 0 }$.

${ f,g \in \mathscr{H}(\Omega), f(z) = g(z), \forall z \in U \neq \varnothing \implies f \equiv g }$.

${ f \in \mathscr{H}(\Omega) }$, then the following are equivalent:
1. ${ f \equiv 0 }$
2. ${ \exists z_{0} \in \Omega: \operatorname{ord}_{z_{0}}f = \infty }$
3. ${ \{ z \in \Omega \mid f(z) = 0 \} }$ has a limit point in ${ \Omega }$.

${ f,g \in \mathscr{H}(\Omega) }$, then the following are equivalent:
1. ${ f \equiv g }$
2. ${ \exists z_{0} \in \Omega: f^{(n)}(z_{0}) = g^{(n)}(z_{0}), \forall n \geq 0 }$
3. ${ \{ z \in \Omega \mid f(z) = g(z) \} }$ has a limit point in ${ \Omega }$.

${ f,g \in \mathscr{H}(\Omega), fg \equiv 0 \implies f \equiv 0 \lor g \equiv 0 }$.

### Theorem 5.1: Morera's Theorem
Converse to [[#Theorem 1.1 Goursat]]

${ f \in C^{0}(\Omega), \forall D_{r}(z_{0}) \subseteq \Omega, \forall T, \mathring{T} \subseteq D_{r}(z_{0}): \int_{T} f(z) \, \mathrm{d}z = 0 \implies f \in \mathscr{H}(\Omega) }$.

## Sequences of holomorphic functions
### Definition: Locally uniformly convergent / Uniformly convergent on compact sets / Proposition / Theorem 5.2 / Theorem 5.3
${ f_{n}: \Omega \to \mathbb{C} }$ is called locally uniformly convergent or uniformly convergent on compact sets if the following equivalent hold:
1. ${ \forall z_{0} \in \Omega, \exists \varepsilon>0, D_{\varepsilon}(z_{0}) \subseteq \Omega: f_{n}|_{D_{\varepsilon}(z_{0})} }$ converges uniformly.
2. ${ \forall K \subseteq \Omega }$ compact, ${ f_{n}|_{K} }$ converges uniformly.

${ f_{n} \in C^{0}(\Omega) }$ locally uniformly convergent to ${ f \implies f \in C^{0}(\Omega) }$.

${ f_{n} \in \mathscr{H}(\Omega) }$ locally uniformly convergent to ${ f \implies f \in \mathscr{H}(\Omega) }$.

${ f_{n} \in \mathscr{H}(\Omega) }$ locally uniformly convergent to ${ f \implies f_{n}' }$ locally uniformly convergent to ${ f' }$.

### Theorem: Weierstrass ${ M }$-test
${ f_{n}: \Omega \to \mathbb{C}, \varnothing \neq U \subseteq \Omega }$. If ${ \exists (M_{n})_{n\geq 1} \subseteq \mathbb{R}, M_{n} \geq 0: \lvert f_{n}(z) \rvert \leq M_{n}, \forall z \in U, \forall n, \sum M_{n} < \infty \implies }$
$$
\sum_{n = 1}^{\infty} f_{n}
$$
converges uniformly on ${ U }$.

### Proposition 2.1: Riemann Zeta / Example
$$
\zeta(s) := \sum_{n = 1}^{\infty} \frac{1}{n^{s}}
$$
converges absolutely and uniformly on ${ U_{\delta} := \{ s \in \mathbb{C} \mid \operatorname{Re} s \geq 1+\delta \}, \forall \delta>0 }$ and ${ \zeta \in \mathscr{H}(\{ s \in \mathbb{C} \mid \operatorname{Re} s > 1 \}) }$.

${ z \in \mathbb{H} := \{ z \in \mathbb{C} \mid \operatorname{Im}z > 0 \} }$:
$$
\theta(z) := \sum_{n \in \mathbb{Z}} e^{2\pi in^{2}z} = 1 + 2 \sum_{n = 1}^{\infty} e^{2\pi in^{2}z}
$$

### Definition: Isolated singularity / Singularity types
${ z_{0} \in \mathbb{C} }$ is a possible isolated singularity of ${ f }$ if ${ \exists r>0: f \in \mathscr{H}(D^{*}_{r}(z_{0})) }$.

Singularities:
1. Removable: can be extended holomorphically: ${ \frac{\sin z}{z} }$
2. Pole: Real singularity: ${ \frac{1}{z} }$
3. Essential singularity: ${ e^{1/z} }$

### Definition: Removable singularity / Theorem: Riemann's continuation theorem
${ f \in \mathscr{H}(\Omega \setminus \{ z_{0} \}), z_{0} }$ is a removable singularity if ${ \exists \tilde{f} \in \mathscr{H}(\Omega): \tilde{f}(z) = f(z), \forall z \in \Omega \setminus \{ z_{0} \} }$.

${ f \in \mathscr{H}(\Omega \setminus \{ z_{0} \}), z_{0} }$ is a removable singularity if the following equivalent hold:
1. ${ f }$ is holomorphically extendable to ${ \Omega }$
2. ${ f }$ is continuously extendable to ${ \Omega }$
3. ${ \exists r>0: f }$ is bounded in ${ D^{*}_{r}(z_{0}) }$
4. ${ \lim_{z \to z_{0}} (z-z_{0})f(z) = 0 }$

### Definition: Pole
If ${ \exists n \in \mathbb{N}: (z-z_{0})^{n}f(z) }$ is bounded near ${ z_{0} }$, then ${ z_{0} }$ is a pole of ${ f }$ with the order of  the pole ${ m := \min \{ n \dots \} }$.

### Theorem 1.2b
${ m \in \mathbb{N}, f \in \mathscr{H}(\Omega \setminus \{ z_{0} \}) }$, the following are equivalent:
1. ${ f }$ has a pole of order ${ m }$ at ${ z_{0} }$
2. ${ \exists r>0, g \in \mathscr{H}(D_{r}(z_{0})), g(z_{0}) \neq 0: f(z) = \frac{g(z)}{(z-z_{0})^{m}}, \forall z \in D^{*}_{r}(z_{0}) }$
3. ${ \exists r>0, h \in \mathscr{H}(D_{r}(z_{0})), h(z) \neq 0, \forall z \in D^{*}_{r}(z_{0}): f(z) = \frac{1}{h(z)} }$ where ${ \operatorname{ord}_{z_{0}}h = m }$

### Theorem 1.3 / Theorem 1.4 / Lemma
${ f }$ has a pole of order ${ n }$ at ${ z_{0} }$, then
$$
f(z) = \underbracket{ \frac{a_{-n}}{(z-z_{0})^{n}} + \cdots + \frac{\overbracket{ a_{-1} }^{ =: \operatorname{Res}_{z_{0}}f }}{z-z_{0}} }_{ =: P_{z_{0}}(f,z) } + \underbracket{ G(z) }_{ \in \mathscr{H}(D_{r}(z_{0})) }
$$

$$
\operatorname{Res}_{z_{0}}f = \lim_{z \to z_{0}} \frac{1}{(n-1)!} \frac{\mathrm{d}^{n-1}}{\mathrm{d}z^{n-1}} ((z-z_{0})^{n}f(z))
$$

${ f,g \in \mathscr{H}(z_{0}), \operatorname{ord}_{z_{0}}g = 1 \implies \frac{f}{g} }$ has a simple pole with
$$
\operatorname{Res}_{z_{0}} \frac{f}{g} = \frac{f(z_{0})}{g'(z_{0})}
$$

### Theorem 2.1: Residue formula
${ F = \{ z_{0}, \dots, z_{n} \}, f \in \mathscr{H}(\Omega \setminus F) }$ with poles in ${ F, \gamma = \partial D }$ positive in ${ \Omega, \gamma \cap F = \varnothing \implies }$
$$
\int_{\gamma} f(z) \, \mathrm{d}z = 2\pi i \sum_{z_{i} \in F \cap D} \operatorname{Res}_{z_{i}}f
$$

### Integral solution methods
#### 1
$$
\int_{-\infty}^{\infty} \frac{1}{1+x^{2}} \, \mathrm{d}x
$$
choose
$$
f(z) = \frac{1}{1+z^{2}}
$$
and a contour with the top half circle of radius ${ R }$ and let ${ R \to \infty }$, bounding other parts of the integral.

#### 2
$$
\int_{-\infty}^{\infty} \frac{P(x)}{Q(x)} \, \mathrm{d}x
$$
where ${ Q }$ has no zeros on the real line. For ${ \partial Q \geq \partial P + 2 }$ we get
$$
\int_{\Gamma_{R}} \frac{P(z)}{Q(z)} \, \mathrm{d}z \xrightarrow{R \to \infty} 0
$$
for ${ \Gamma_{R} }$ the top half circle.

#### 4
$$
\int_{-\infty}^{\infty} \frac{P(x)}{Q(x)} \cos(ax) \, \mathrm{d}x
$$
choose
$$
f(z) = \frac{P(z)}{Q(z)} e^{iaz}
$$
such that ${ \lvert e^{iz} \rvert \leq 1 }$ where ${ \operatorname{Im}z > 0 }$.

#### 5
$$
\int_{0}^{2\pi} \frac{P(\cos t, \sin t)}{Q(\cos t, \sin t)} \, \mathrm{d}t
$$
where ${ Q }$ has no zeros on ${ x^{2}+y^{2} = 1 }$. Write ${ \cos \theta = \frac{1}{2}\left( z+\frac{1}{z} \right), \sin z = \frac{1}{2i}\left( z-\frac{1}{z} \right) }$ with ${ \frac{\mathrm{d}z}{iz} = \mathrm{d}\theta }$ to solve.

### Proposition/Corollary 3.2
${ z_{0} }$ is a pole of ${ f \iff }$
$$
\lim_{z \to z_{0}} \lvert f(z) \rvert = \infty
$$

### Theorem: Casorati-Weierstrass / Picard 1879
${ f \in \mathscr{H}(D^{*}_{r}(z_{0})), z_{0} }$ is an essential singularity, then ${ f(D^{*}_{r}(z_{0})) }$ is dense in ${ \mathbb{C} }$.

${ f \in \mathscr{H}(D^{*}_{r}(z_{0})), z_{0} }$ is an essential singularity, then ${ \lvert \mathbb{C} \setminus f(D^{*}_{r}(z_{0})) \rvert \leq 1 }$. (Example: for ${ f(z) = e^{1/z} \implies \mathbb{C} \setminus f(D^{*}_{r}(0)) = \{ 0 \} }$.)

# Meromorphic functions
### Definition: Extended complex plane
${ \hat{\mathbb{C}} := \hat{\mathbb{C}} \cup \{ \infty \} }$ with
- ${ z \pm \infty = \infty, \forall z \in \mathbb{C} }$
- ${ z \cdot \infty = \infty, \forall z \in \hat{\mathbb{C}} \setminus \{ 0 \} }$
- ${ \frac{z}{\infty} = 0, \forall z \in \mathbb{C} }$
- ${ \frac{z}{0} = \infty, \forall z \in \hat{\mathbb{C}} \setminus \{ 0 \} }$

### Definition: Meromorphic function / Proposition / Proposition
${ f: \Omega \to \hat{\mathbb{C}} }$ is ${ f \in \mathcal{M}(\Omega) }$ if
1. ${ S_{f} := \{ z \in \Omega \mid f(z) = \infty \} = f^{-1}(\{ \infty \}) }$ has no limit point in ${ \Omega }$.
2. ${ S_{f} }$ contains the poles of ${ f }$.
3. ${ f|_{\Omega \setminus S_{f}} \in \mathscr{H}(\Omega) }$

1. ${ \mathscr{H}(\Omega) \subseteq \mathcal{M}(\Omega) }$
2. ${ f,g \in \mathcal{M}(\Omega) \implies \alpha f + \beta g \in \mathcal{M}(\Omega) }$, or ${ \mathcal{M}(\Omega) }$ is a vector space.
3. ${ f,g \in \mathcal{M}(\Omega), z_{0} \in S_{f} \cup S_{g}, f = P_{f} + \tilde{f}, g = P_{g} + \tilde{g}, \tilde{f}, \tilde{g} \in \mathscr{H}(\Omega) }$ ${ \implies fg = (P_{f} + \tilde{f})(P_{g} + \tilde{g}) = P_{fg} + G, G \in \mathscr{H}(\Omega) }$
4. ${ 0 \centernot\equiv f \in \mathcal{M}(\Omega) }$ and the zeros do not have a limit point in ${ \Omega }$, then ${ \frac{1}{f} \in \mathcal{M}(\Omega) }$

${ 0 \centernot\equiv f \in \mathcal{M}(\Omega) }$ open, connected, then
$$
\mathcal{Z} := \{ z \in \Omega \mid f(z) = 0 \}
$$
has no limit point in ${ \Omega }$.

### Definition: Order/Valuation of a function / Proposition
Generalization of [[#Definition Order of a function]]

${ 0 \centernot\equiv f \in \mathcal{M}(\Omega \ni z_{0}), \operatorname{ord}_{z_{0}}f = k }$:
1. ${ f(z_{0}) \neq \infty \implies k \geq 0 }$ is the order of the zero at ${ z_{0} }$.
2. ${ f(z_{0}) = \infty \implies k \leq -1 }$ is the negative order of the pole at ${ z_{0} }$.

${ 0 \centernot\equiv f \in \mathcal{M}(\Omega \ni z_{0}) \implies }$
1. ${ k = \operatorname{ord}_{z_{0}}f \iff \exists r>0, h \in \mathscr{H}(D_{r}(z_{0})): h(z_{0}) \neq 0, f(z) = (z-z_{0})^{k}h(z) }$
2. ${ \operatorname{ord}_{z_{0}}(fg) = \operatorname{ord}_{z_{0}}f + \operatorname{ord}_{z_{0}}g }$
3. ${ f+g \neq 0 \implies \operatorname{ord}_{z_{0}}(f+g) \geq \min \{ \operatorname{ord}_{z_{0}}f, \operatorname{ord}_{z_{0}}g \} }$

### Definition: Singularities at ${ \infty }$
${ f }$ analytic for ${ \lvert z \rvert > \frac{1}{R}, R>0 }$ has an isolated singularity at ${ \infty }$ if
$$
g(z) := f\left( \frac{1}{z} \right)
$$
has an isolated singularity at ${ z=0 }$. ${ f \in \mathcal{M}(\mathbb{C}) }$ and ${ \mathscr{H}(\infty) }$ or has a pole at ${ \infty \implies \mathcal{M}(\hat{\mathbb{C}}) }$.

### Theorem
${ f \in \mathcal{M}(\hat{\mathbb{C}}) \implies }$
$$
f(z) = \frac{P(z)}{Q(z)} \qquad P(z), Q(z) \in \mathbb{C}[z]
$$

# Application of the Residue theorem
### Lemma
${ 0 \centernot\equiv f \in \mathcal{M}(\Omega \ni z_{0}), \Omega }$ open, connected ${ \implies }$ logarithmic derivative of ${ f: \frac{f'}{f} \in \mathcal{M}(\Omega) }$ and has simple poles at ${ z_{0} }$ if ${ \operatorname{ord}_{z_{0}}f \neq 0 }$ with
$$
\operatorname{Res}_{z_{0}} \frac{f'}{f} = \operatorname{ord}_{z_{0}}f
$$

### Theorem 4.1: Argument principle
${ \Omega }$ open, connected, ${ \gamma }$ closed with interior ${ G }$ such that residue theorem applies. ${ f }$ has no zeros or poles on ${ \gamma \implies }$
$$
\frac{1}{2\pi i} \int_{\gamma} \frac{f'(z)}{f(z)} \, \mathrm{d}z = \sum_{\substack{z_{0} \in G \\ \operatorname{ord}_{z_{0}}f \neq 0}} \operatorname{ord}_{z_{0}}f = Z-P
$$
where ${ Z }$ is the number of zeros, ${ P }$ the number of poles with multiplicity inside ${ G }$.

### Theorem 4.3: Rouché
${ f,g \in \mathscr{H}(\Omega \supseteq \overline{D_{r}(z_{0})}), \lvert f(z) \rvert > \lvert g(z) \rvert, \forall z \in C_{r}(z_{0}) \implies f, f+g }$ have the same number of zeros inside ${ C }$.

### Theorem 4.4: Open mapping theorem
${ \text{const.} \neq f \in \mathscr{H}(\Omega) }$ open, connected, then ${ f }$ is open (${ f(U) }$ open is open).

### Theorem 4.5 / Corollary 4.6: Maximum modulus principle
${ \text{const.} \neq f \in \mathscr{H}(\Omega) }$ open, connected ${ \implies }$
$$
\nexists z_{0} \in \Omega: \lvert f(z) \rvert \leq \lvert f(z_{0}) \rvert \qquad \forall z \in \Omega
$$
or ${ f }$ cannot attain a maximum in ${ \Omega }$. In particular: ${ \overline{\Omega} }$ bounded, ${ f \in C^{0}(\Omega) \implies }$
$$
\max_{z \in \overline{\Omega}} \lvert f(z) \rvert = \max_{z \in \partial \Omega} \lvert f(z) \rvert
$$
exists, since ${ f }$ is continuous on the bounded closed set ${ \overline{\Omega} }$.

# Homotopy and simply connected domains
### Definition: Homotopy
${ \gamma_{0}, \gamma_{1}: [a,b] \to \Omega, \gamma_{0}(a) = \gamma_{1}(a), \gamma_{0}(b) = \gamma_{1}(b) }$ are homotopic in ${ \Omega }$ if
$$
\begin{align}
\exists H: [a,b] \times [0,1] & \to \Omega \\
(t,s) & \mapsto H(t,s)
\end{align}
$$
continuous with
1. ${ H(t,j) = \gamma_{j}(t) }$
2. ${ \gamma_{s}(t) := H(t,s) \in C^{0}([a,b]) }$ with the same endpoints

### Theorem 5.1: Homotopy theorem
${ \gamma_{0}, \gamma_{1}: I \to \Omega, \gamma_{0} \sim_{\Omega} \gamma_{1}, f \in \mathscr{H}(\Omega) \implies }$
$$
\int_{\gamma_{0}} f(z) \, \mathrm{d}z = \int_{\gamma_{1}} f(z) \, \mathrm{d}z
$$

### Definition: Simply connected
${ \Omega }$ is simply connected if every two curves with the same endpoints are homotopic.

### Theorem 5.2
${ f \in \mathscr{H}(\Omega) }$ simply connected has a primitive with ${ \gamma }$ closed ${ \implies }$
$$
\int_{\gamma} f(z) \, \mathrm{d}z = 0
$$
and any two primitives differ by a constant.

# The complex logarithm
### Definition: Branch of logarithm / Remark
${ \log_{\Omega} \in \mathscr{H}(\Omega) }$:
$$
\exp(\log_{\Omega}z) = z
$$

1. ${ e^{z} \neq 0 \implies 0 \notin \Omega }$ is necessary
2. ${ \Omega  = \mathbb{C} \setminus \{ 0 \} }$ does not work: ${ \exp(f(z)) = z \implies f'(z)\exp(f(z)) = 1 \implies f'(z) = \frac{1}{z} }$ does not give ${ 0 }$ integrated over every closed path
3. Two logarithms ${ \ell, \tilde{\ell} }$ differ by ${ \ell - \tilde{\ell} = 2\pi in, n \in \mathbb{Z}: \exp(\ell(z) - \tilde{\ell}(z)) = 1 \implies \ell(z) - \tilde{\ell}(z) \in 2\pi i\mathbb{Z} }$ constant

### Theorem 6.1
${ \Omega \subseteq \mathbb{C} \setminus \{ 0 \} }$ simply connected ${ \implies \exists F \in \mathscr{H}(\Omega): \exp(F(z)) = z }$ branch of logarithm.

### Definition: Principal branch of logarithm / Proposition / Remark
${ \Omega = \mathbb{C}^{-} := \mathbb{C} \setminus (-\infty,0] }$:
$$
\operatorname{Log} := \log_{\Omega} \qquad \land \qquad \log_{\Omega}(1) = 0
$$

${ z = re^{i\theta} \in \mathbb{C}^{-}, r>0, -\pi<\theta<\pi \implies }$
$$
\operatorname{Log}z = \log r + i\theta
$$

${ \log z + \log w = \log zw }$ does not hold in general: ${ w = re^{i\alpha}, z = se^{i\beta}, zw = rse^{i\theta} }$ with ${ \alpha, \beta, \theta \in (-\pi,\pi) \implies \theta = \alpha + \beta + \gamma, \gamma \in \{ -2\pi, 0, 2\pi \} }$ thus ${ \log zw = \log z + \log w \iff \gamma = 0 \iff \alpha + \beta \in (-\pi,\pi) }$

${ \operatorname{Log}(\{ \lvert z \rvert = r \mid -\pi < \arg z < \pi \}) = \{ \operatorname{Re}w = \log \lvert z \rvert, -\pi < \operatorname{Im}w < \pi \} }$

${ \operatorname{Log}(\{ z \mid \operatorname{Arg}z = \theta \}) = \{ w \mid \operatorname{Im}w = \theta \} }$

We can define a branch of logarithm for any ${ \Omega = \mathbb{C} \setminus (\{ z \mid \operatorname{Arg}z = \alpha \} \cup \{ 0 \}) }$.

### Definition: Complex power
${ \log_{\Omega} }$ branch of logarithm:
$$
z^{\alpha} := \exp(\alpha \log_{\Omega}z)
$$

This depends on ${ \log_{\Omega}: \log_{\Omega} \mapsto \log_{\Omega} + 2\pi ik \implies }$
$$
\exp(\alpha(\log_{\Omega}z + 2\pi ik)) = z^{\alpha}e^{2\pi ik\alpha}
$$

Principal branch of logarithm:
$$
(z^{1/m})^{m} = \exp\left( \frac{1}{m} \log z \right) \cdots \exp\left( \frac{1}{m}\log z \right) = \exp\left( \frac{m}{m}\log z \right) = z
$$

### Theorem 6.2 / Corollary
${ f \in \mathscr{H}(\Omega) }$ simply connected, ${ f(z) \neq 0, \forall z \in \Omega \implies }$
$$
\exists g \in \mathscr{H}(\Omega): \exp(g(z)) = f(z)
$$
called the logarithm of ${ f }$ and
$$
\exists h \in \mathscr{H}(\Omega): h^{2}(z) = f(z)
$$
called the square root of ${ f }$.

### Proposition
${ f \in \mathcal{M}(\Omega), V := \Omega \setminus S_{f}: f \in \mathscr{H}(V), \gamma_{1} \sim_{\Omega} \gamma_{2} \implies }$
$$
\int_{\gamma_{1}} f(z) \, \mathrm{d}z = \int_{\gamma_{2}} f(z) \, \mathrm{d}z
$$
and if ${ \gamma_{2} }$ satisfies residue theorem with interior ${ G \implies }$
$$
\int_{\gamma_{1}} f(z) \, \mathrm{d}z = 2\pi i \sum_{w \in G} \operatorname{Res}_{w}f
$$

### Definition: Winding number
${ \mathbb{C} \ni z_{0} \notin \gamma }$ closed:
$$
W_{\gamma}(z_{0}) = \operatorname{ind}_{\gamma}z_{0} := \frac{1}{2\pi i} \int_{\gamma} \frac{1}{z-z_{0}} \, \mathrm{d}z
$$

### Proposition 1.3
${ \gamma }$ closed, ${ W_{\gamma}: \Omega = \mathbb{C} \setminus \operatorname{im}\gamma \to \mathbb{C} }$ continuous takes values in ${ \mathbb{Z} \implies }$ is constant on any connected subset of ${ \Omega }$ with ${ W_{\gamma}(z) = 0, \lvert z \rvert }$ large enough.

### Theorem: Residue formula
Generalization of [[#Theorem 2.1 Residue formula]]

${ f \in \mathcal{M}(\Omega) }$ simply connected, ${ \gamma }$ closed in ${ V = \Omega \setminus S_{f} \implies }$
$$
\int_{\gamma} f(z) \, \mathrm{d}z = 2\pi i \sum_{z_{0} \in S_{f}} W_{\gamma}(z_{0}) \operatorname{Res}_{z_{0}}f
$$

# Conformal maps
### Definition: Conformal map
${ U,V }$ open, ${ f: U \to V }$ injective, holomorphic is a conformal map.

${ f }$ bijective conformal map is a conformal equivalence / biholomorphic / holomorphic isomorphism.

### Proposition 1.1 / Remark / Corollary
${ f: U \to V }$ conformal ${ \implies }$
$$
f'(z) \neq 0 \qquad \forall z \in U
$$
and ${ f^{-1}: \operatorname{im}f \subseteq V \to U }$ is holomorphic.

Thus ${ f: U \to V }$ conformal equivalence ${ \iff f^{-1} }$ conformal equivalence (conformal equivalence is an equivalence relation).

${ f: U \to V }$ conformal equivalence, then
$$
\begin{align}
T: \mathscr{H}(V) & \to \mathscr{H}(U) \\
\phi & \mapsto \phi \circ f
\end{align}
$$
is a linear isomorphism of vector spaces.

### Examples
- ${ f: \mathbb{H} \to \mathbb{D}, z \mapsto \frac{z-i}{z+i} }$ with ${ f^{-1}: w \mapsto i \frac{1+w}{1-w} }$
- ${ f: \left\{ z \in \mathbb{C} \mid 0 < \arg z < \frac{\pi}{n} \right\} \to \mathbb{H}, z \mapsto z^{n} }$ with ${ f^{-1}: w \mapsto w^{1/n} }$
- ${ \operatorname{Log}: \mathbb{C}^{-} \to \{ z \in \mathbb{C} \mid \operatorname{Re}z > 0 \land -\pi < \operatorname{Im}z < \pi \} }$ with ${ \operatorname{Log}^{-1} = \exp }$
- ${ \mathbb{C} \nsim_{C} \mathbb{D} }$, since a map ${ \mathbb{C} \to \mathbb{D} }$ entire would be bounded and thus constant ([[#Theorem/Corollary 4.5 Liouville's Theorem]])

## Riemann mapping theorem
### Theorem 8.3.1: Riemann mapping theorem / Corollary
${ \varnothing \neq \Omega \subsetneq \mathbb{C} }$ simply connected, ${ z_{0} \in \mathbb{C} \implies \exists! }$ conformal equivalence
$$
\begin{align}
F: \Omega & \to \mathbb{D} \\
F(z_{0}) & = 0 \\
F'(z_{0}) & \in (0,\infty) \subseteq \mathbb{C}
\end{align}
$$

Any simply connected proper subsets of ${ \mathbb{C} }$ are conformally equivalent.

### Theorem 2.2 (Step 1) / Corollary
${ f: \mathbb{D} \to \mathbb{D} }$ automorphism ${ \implies \exists \theta \in \mathbb{R}, \alpha \in \mathbb{D} }$:
$$
\begin{align}
f(z) & = e^{i\theta} \frac{\alpha-z}{1-\overline{\alpha}z} \\
f(0) & = e^{i\theta}\alpha \\
f'(0) & = e^{i\theta}(\lvert \alpha \rvert^{2} - 1)
\end{align}
$$
and every map of this form is an automorphism of ${ \mathbb{D} }$.

The map in [[#Theorem 8.3.1 Riemann mapping theorem / Corollary]] is unique: ${ f_{i}: \Omega \to \mathbb{D}, f_{i}(z_{0}) = 0, f_{i}'(z_{0}) > 0 \implies f_{1} = f_{2} }$.

### Lemma: Schwarz
${ f \in \mathscr{H}(\mathbb{D},\mathbb{D}), f(0) = 0 \implies }$
1. ${ \lvert f(z) \rvert \leq \lvert z \rvert, \forall z \in \mathbb{D} }$
2. ${ \exists z_{0} \neq 0: \lvert f(z_{0}) \rvert = \lvert z_{0} \rvert \implies \exists \theta \in \mathbb{R}: f(z) = e^{i\theta}z }$
3. ${ \lvert f'(0) \rvert \leq 1 }$ with equality ${ \iff f(z) = e^{i\theta}z }$

### Theorem 2.4
${ g: \mathbb{H} \to \mathbb{H} }$ automorphism ${ \implies }$
$$
g(z) = \frac{az + b}{cz + d} \qquad A := \begin{pmatrix}
a & b \\
c & d
\end{pmatrix} \in GL_{2}(\mathbb{R})
$$
with ${ \det A > 0 }$.

### Proposition (Step 2)
${ \varnothing \neq \Omega \subsetneq \mathbb{C} }$ open, connected ${ \implies \exists f: \Omega \to \mathbb{D} }$ conformal with ${ 0 \in f(\Omega) }$ (or: ${ \Omega }$ is conformally equivalent to a subset of ${ \mathbb{D} }$).

### Lemma
${ \mathcal{F} := \{ f: \Omega \to \mathbb{D} \mid \text{conformal} \land f(z_{0}) = 0 \} \implies }$
$$
s := \sup_{f \in \mathcal{F}} \lvert f'(z_{0}) \rvert < \infty
$$

### Key Proposition
${ \exists  f \in \mathcal{F}: \lvert f'(z_{0}) \rvert = s }$

### Proposition (Step 4)
${ f \in \mathcal{F} }$ with
$$
\lvert f'(z_{0}) \rvert = s = \sup_{\tilde{f} \in \mathcal{F}} \lvert \tilde{f}'(z_{0}) \rvert
$$
is a conformal equivalence.

### Theorem: Montel
${ (f_{n})_{n} \subseteq \mathscr{H}(\Omega), \forall K \subseteq \Omega }$ compact, ${ \exists M_{k} > 0: \lvert f_{n}(z) \rvert < M_{k}, \forall z \in K \implies \exists (f_{n_{k}}) }$ converging uniformly on compact sets.

### Proposition
${ (f_{n})_{n} \subseteq \mathcal{F}, f_{n} \to f, \forall z \in \Omega }$ uniformly on compact sets ${ \implies f = \text{const.} \lor f \in \mathcal{F}: \lim_{n \to \infty} f_{n}'(z_{0}) = f'(z_{0}) }$.

### Lemma
${ \Omega }$ open, connected, ${ f_{n}: \Omega \to \mathbb{D} }$ conformal, ${ f_{n} \to f }$ uniformly on compact sets ${ \implies f = \text{const.} }$ or injective.