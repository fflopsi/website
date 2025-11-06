# 2 Matrizen und lineare Gleichungssysteme
## 2.1 Körper
### Definition 2.1.1: Endlicher Körper ${ \mathbb{F}_{p} }$ / Lemma 2.1.3 / Satz 2.1.4
${ \mathbb{F}_{p} }$ als Körper definiert mit den Elementen ${ \left\{ 0, 1, \dots, p-1 \right\} }$, Addition ${ x+y := (x+y) \mod{p} }$ und Multiplikation ${ xy := xy \mod{p} }$.

${ \forall x \in \mathbb{F}_{p}, x \neq 0, \exists y \in \mathbb{F}_{p}: xy = 1 }$

## 2.2 Matrizen
### Definition 2.2.1: Matrix / Definition 2.2.3: Nullmatrix, Einheitsmatrix
${ m,n \geq 1 }$, eine ${ (m \times n) }$-Matrix mit Werten in ${ K }$, oder ${ A \in M_{m \times n}(K) }$ hat ${ m }$ Zeilen und ${ n }$ Spalten, schreibe ${ A = (a_{ij}) }$ mit Eintrag ${ a_{ij} }$ in Zeile ${ i }$ und Spalte ${ j }$.

${ \mathbb{0}_{m \times n} \in M_{m \times n}(K) }$ besteht nur aus Nullen. Die Einheitsmatrix ${ \mathbb{1}_{n} }$ ist definiert als ${ a_{ij} = \delta_{ij} }$.

### Definition 2.2.5: Addition und Skalarmultiplikation / Theorem 2.2.7
1. ${ A, B \in M_{m \times n}(K) }$, dann ist ${ C = A+B }$ mit ${ c_{ij} := a_{ij} + b_{ij} }$.
2. ${ A \in M_{m \times n}(K), \alpha \in K }$, dann ist ${ D = \alpha A }$ mit ${ d_{ij} := \alpha a_{ij} }$.

${ A,B,C \in M_{m \times n}(K), \alpha, \beta \in K }$
1. ${ A+B = B+A }$
2. ${ A+(B+C) = (A+B)+C }$
3. ${ A+\mathbb{0}_{m \times n} = \mathbb{0}_{m \times n}+A = A }$
4. ${ \alpha(\beta A) = (\alpha\beta)A }$
5. ${ (\alpha+\beta)A = \alpha A+\beta A }$
6. ${ \alpha(A+B) = \alpha A+\alpha B }$

### Definition 2.2.8: Matrixmultiplikation / Theorem 2.2.10 / Beispiel 2.2.13
${ A \in M_{m \times n}(K), B \in M_{n \times p}(K) }$, dann ist ${ C = AB }$ mit ${ c_{ik} := \sum_{j=1}^{n} a_{ij}b_{jk} }$.

${ A \in M_{m \times n}(K), B \in M_{n \times p}(K), C \in M_{p \times q}(K), D \in M_{n \times p}(K), \alpha \in K }$
1. ${ A(BC) = (AB)C }$
2. ${ A(B+C) = AB+AC }$
3. ${ \alpha(AB) = (\alpha A)B = A(\alpha B) }$

${ A \in M_{n \times n}(K) \implies A \mathbb{1}_{n} = \mathbb{1}_{n}A = A }$

### Definition 2.2.14: Kommutierende Matrizen / Definition 2.2.17: Diagonale und Dreiecksmatrizen / Definition 2.2.19: Invertierbare Matrizen / Lemma 2.2.20
${ A,B \in M_{n \times n}(K) }$ kommutieren ${ \iff AB=BA }$.

${ A \in M_{n \times n}(K) }$
1. ${ A }$ ist diagonal ${ \iff a_{ij} = 0, \forall i \neq j }$
2. ${ A }$ ist eine obere Dreiecksmatrix ${ \iff a_{ij} = 0, \forall i>j }$

${ A \in M_{n \times n}(K) }$ ist invertierbar ${ \iff \exists B \in M_{n \times n}(K): AB = BA = \mathbb{1}_{n} \implies B = A^{-1} }$.

### Theorem 2.2.23
${ (AB)^{-1} = B^{-1}A^{-1} }$

## 2.3 Elementare Zeilenoperationen
### Definition 2.3.1: Elementare Zeilenoperationen/-umformungen / Definition 2.3.2: Zeilenäquivalent
- ${ P(r,s) }$: Zeilen ${ r }$ und ${ s }$ vertauschen
- ${ M(r,\lambda) }$: Multiplikation der Zeile ${ r }$ mit ${ \lambda \neq 0 }$
- ${ S(r,s,\lambda) }$: Addition von ${ \lambda }$ mal Zeile ${ r }$ zu Zeile ${ s }$

${ A,A' }$ heissen zeilenäquivalent, wenn man ${ A' }$ durch endlich viele elementare Zeilenoperationen auf ${ A }$ erhält.

### Definition 2.3.5: Reduzierte Zeilenform / Theorem 2.3.7 / Definition 2.3.8: Reduzierte Zeilenstufenform / Theorem 2.3.9
${ A }$ ist in reduzierter Zeilenform ${ \iff }$
1. In jeder Zeile ist der erste Eintrag ${ \neq 0 }$ eine ${ 1 }$ (führende ${ 1 }$).
2. Ausser einer führenden ${ 1 }$ sind in derselben Spalte nur ${ 0 }$.

${ \forall A \in M_{m \times n}(K), \exists A' \in M_{m \times n}(K) }$ in reduzierter Zeilenform sodass ${ A,A' }$ zeilenäquivalent sind.

${ A }$ ist in reduzierter Zeilenstufenform ${ \iff }$
1. ${ A }$ ist in reduzierter Zeilenform.
2. Alle Nullzeilen sind zuunterst.
3. Die führende ${ 1 }$ einer Zeile liegt immer rechts derjenigen in der Zeile darüber.

${ \forall A \in M_{m \times n}(K), \exists A' \in M_{m \times n}(K) }$ in reduzierter Zeilenstufenform sodass ${ A,A' }$ zeilenäquivalent sind.

## 2.4 Lineare Gleichungssysteme
### Definition 2.4.2: Lineares Gleichungssystem in Matrixform
${ (S): Ax = b }$ ein lineares Gleichungssystem
1. ${ L(S) = \left\{ x \in K^{n} \mid Ax = b \right\} }$
2. ${ A|b }$ ist ${ A }$ um die Spalte ${ b }$ erweitert

### Theorem 2.4.5
${ (S): Ax = b, (S'): A'x = b' }$ mit ${ A|b, A'|b' }$ zeilenäquivalent ${ \implies L(S) = L(S') }$.

# 3 Vektorräume
## 3.1 Definitionen und Beispiele
### Definition 3.1.1: Vektorraum / Satz 3.1.4 / Korollar 3.1.5 / Satz 3.1.6
Ein Vektorraum ${ V }$ über einen Körper ${ K }$ ist eine Menge mit
- Addition: ${ v+w, v,w \in V }$
- Skalarmultiplikation ${ \alpha v, \alpha \in K, v \in V }$
sodass
1. ${ v+w = w+v, \forall v,w \in V }$
2. ${ v+(w+u) = (v+w)+u, \forall v,w,u \in V }$
3. ${ \exists! 0_{V} \in V: \forall v \in V: 0_{V}+v = v }$
4. ${ \forall v \in V, \exists! w \in V: v+w = 0_{V} \implies w = -v }$
5. ${ \lambda(v+w) = \lambda v+\lambda w, \forall \lambda \in K, v,w, \in V }$
6. ${ (\lambda+\mu)v = \lambda v+\mu v, \forall \lambda, \mu \in K, v \in V }$
7. ${ \lambda(\mu v) = (\lambda \mu)v, \forall \lambda,\mu \in K, v \in V }$
8. ${ 1v = v, \forall v \in V }$

${ \lambda \in K, v \in V }$
1. ${ \lambda 0_{V} = 0_{V} }$
2. ${ 0v = 0_{V} }$
3. ${ (-\lambda)v = -(\lambda v) = \lambda(-v) }$
4. ${ \lambda v = 0_{V} \implies \lambda = 0 \lor v = 0_{V} }$

# 3.2 Unterräume
### Definition 3.2.1: Unterraum / Satz 3.2.2
${ U \subseteq V }$ ist ein Unterraum ${ \iff U \neq \varnothing }$ und abgeschlossen unter Addition und Skalarmultiplikation:
1. ${ u+v \in U, \forall u,v \in U }$
2. ${ \lambda u \in U, \forall \lambda \in K, u \in U }$
Schreibe ${ U \leq V }$.

${ U \leq V \iff }$
1. ${ 0_{V} \in U }$
2. ${ \lambda u+v \in U, \forall \lambda \in K, u,v, \in V }$

### Satz 3.2.4 / Bemerkung 3.2.5
${ v_{1}, \dots, v_{n} \in V, U = \left\{ \lambda_{1}v_{1} + \dots + \lambda_{n}v_{n} \mid \lambda_{i} \in K \right\} = \left< v_{1}, \dots, v_{n} \right> \leq V }$ heisst die lineare Hülle von ${ v_{1}, \dots, v_{n} }$.

${ \left\{ 0_{V} \right\} = \left< \varnothing \right>  }$

### Satz 3.2.8 / Theorem 3.2.9
- ${ U \leq V \implies U }$ ist ein Vektorraum.
- ${ W \leq U \leq V \implies W \leq V }$

${ U, W \leq V }$
1. ${ U \cap W := \left\{  v \in V \mid v \in U \land v \in W \right\} \leq V }$
2. ${ U + W := \left\{ u+w \mid u \in U, w \in W \right\} \leq V }$

## 3.3 Basen von Vektorräumen
### Definition 3.3.3: Endlich-Dimensional, Erzeugendensystem
${ V }$ heisst endlich-dimensional ${ \iff \exists v_{1}, \dots, v_{n} }$ endlich viele, sodass ${ V = \left< v_{1}, \dots, v_{n} \right>  }$; dann heisst ${ \left\{ v_{1}, \dots, v_{n} \right\} }$ Erzeugendensystem.

### Definition 3.3.6: Linear (Un-)Abhängig / Satz 3.3.8
${ \left\{ v_{1}, \dots, v_{n} \right\} }$ heisst linear unabhängig, wenn ${ \alpha_{1} v_{1} + \dots + \alpha_{n}v_{n} = 0_{V} \implies \alpha_{i} = 0, \forall i }$. Sonst heisst ${ \left\{ v_{1}, \dots, v_{n} \right\} }$ linear abhängig.

${ v_{1}, \dots, v_{n} }$ linear unabhängig ${ \implies \forall v \in \left< v_{1}, \dots, v_{n} \right>  }$ kann eindeutig dargestellt werden.

### Lemma 3.3.10 / Lemma 3.3.11 / Satz 3.3.12
${ v_{1}, \dots, v_{n} \in V }$
- ${ v_{i} = \lambda v_{j}, \lambda \in K, \lambda \neq 0, i \neq j \implies }$ linear abhängig
- ${ v_{1}, \dots, v_{n} }$ linear unabhängig und ${ c_{1}, \dots, c_{n} \in K }$, alle ${ \neq 0 \implies c_{1}v_{1}, \dots, c_{n}v_{n} }$ linear unabhängig
- ${ 0_{V} = v_{i} \implies }$ linear abhängig

1. ${ v \in V, v \neq 0_{V} \implies v }$ linear unabhängig
2. ${ 0_{V} }$ ist linear abhängig

${ v_{1}, \dots, v_{n} }$ linear unabhängig, ${ v_{n+1} \notin \left< v_{1}, \dots, v_{n} \right> \implies v_{1}, \dots, v_{n}, v_{n+1} }$ linear unabhängig.

### Definition 3.3.13: Basis
Eine Basis von ${ V }$ ist ein linear unabhängiges Erzeugendensystem.

### Theorem 3.3.15 / Korollar 3.3.16
Jedes endliche Erzeugendensystem enthält eine Basis.

Jeder endlich-dimensionale Vektorraum hat eine Basis.

### Lemma 3.3.17: Austauschlemma / Satz 3.3.19: Austauschsatz / Korollar 3.3.20
${ B = \left\{ v_{1}, \dots, v_{n} \right\} }$ Basis von ${ V }$ mit ${ w \in V, w \neq 0_{V}, w = \alpha_{1}v_{1} + \dots + \alpha_{n}v_{n}, \alpha_{j} \neq 0 \implies B' = \left\{ v_{1},\dots,v_{j-1},w,v_{j+1},\dots,v_{n} \right\} }$ auch eine Basis von ${ V }$.

${ v_{1}, \dots, v_{n} }$ Basis von ${ V }$ mit ${ w_{1}, \dots, w_{k} }$ linear unabhängig ${ \implies k \leq n, \exists (n-k) }$ Basisvektoren, die zusammen mit ${ w_{1}, \dots, w_{k} }$ eine Basis von ${ V }$ bilden.

Alle Basen von ${ V }$ haben dieselbe Anzahl Elemente.

### Definition 3.3.21: Dimension
${ B }$ Basis von ${ V }$, dann ist die Dimension von ${ V }$ definiert als ${ \dim_{K} V = | B | }$. Wenn ${ V }$ nicht endlich-dimensional, dann ist ${ \dim_{K} V = \infty }$.

### Satz 3.3.23 / Satz 3.3.24
${ \dim V = n, v_{1}, \dots, v_{n} \in V }$, äquivalente Aussagen:
1. ${ v_{1}, \dots, v_{n} }$ linear unabhängig
2. ${ v_{1}, \dots, v_{n} }$ Erzeugendensystem
3. ${ v_{1}, \dots, v_{n} }$ Basis

1. ${ k < n \implies v_{1}, \dots, v_{n} }$ kein Erzeugendensystem
2. ${ k>n \implies v_{1}, \dots, v_{n} }$ linear abhängig

## 3.4 Basen von Unterräumen
### Theorem 3.4.4
${ V }$ endlich-dimensional mit ${ U,W \leq V }$, dann gilt: ${ \dim(U+W) = \dim U + \dim W - \dim(U \cap W) }$.

_Kann nicht einfach für drei Unterräume angepasst werden._

### Definition 3.4.7: Komplement
${ U \leq V }$, dann ist ${ W }$ ein Komplement von ${ U \iff U + W = V \land U \cap W = \left\{ 0_{V} \right\} \iff U \oplus W = V }$.

# 4 Lineare Abbildungen
## 4.1 Definition und Beispiele
### Definition 4.1.1: Homomorphismus / Endomorphismus
${ T: V \to W }$ ist linear oder heisst Homomorphismus falls ${ T(\alpha v+u) = \alpha Tv + Tu, \forall \alpha \in K, u,v \in V }$.

${ T: V \to V }$ heisst Endomorphismus.

## 4.2 Kern und Bild
### Definition 4.2.1: Kern / Bild / Lemma 4.2.3
${ T: V \to W }$ linear.
1. Der Kern von ${ T }$ ist ${ \ker(T) := \left\{ v \in V \mid Tv = 0_{W} \right\} \leq V }$.
2. Das Bild von ${ T }$ ist ${ \mathrm{im}(T) := \left\{ Tv \mid v \in V \right\} \leq W }$.

### Satz 4.2.6
${ T: V \to W }$ ist injektiv ${ \iff \ker(T) = \left\{ 0_{V} \right\} }$.

### Definition 4.2.8: Rang
${ \mathrm{rk}(T) := \dim(\mathrm{im}(T)) }$

### Theorem 4.2.9
${ T: V \to W }$ linear. ${ \dim V = \mathrm{rk}\;T + \dim \ker T }$

### Korollar 4.2.10
${ T: V \to W }$ linear.
1. ${ \dim W < \dim V \implies T }$ nicht injektiv.
2. ${ \dim W > \dim V \implies T }$ nicht surjektiv.
3. ${ \dim W = \dim V \implies T }$ bijektiv ${ \iff T }$ injektiv ${ \iff T }$ surjektiv

### Definition 4.2.13: Isomorphismus / Bemerkung 4.2.17
${ T: V \to W }$ heisst Isomorphismus, falls ${ \exists S: W \to V: ST = \mathrm{id}_{V} \land TS = \mathrm{id}_{W} }$, wir schreiben ${ S = T^{-1} \iff T = S^{-1} }$.

${ \exists T: V \to W }$ Isomorphismus ${ \iff V \cong W }$.

${ T: V \to V }$ Isomorphismus heisst Automorphismus.

### Theorem 4.2.22
${ \dim_{K} V = \dim_{K} W \iff V \cong W }$

## 4.3 Lineare Abbildungen als Matrizen
### Definition 4.3.1: Abbildungsmatrix
${ T: V \to W }$ mit Basen ${ B,C }$ von ${ V,W }$. Die Abbildungsmatrix von ${ T }$ ist ${ [T]^{B}_{C} = (a_{ij}) }$ mit ${ Tb_{j} = \sum_{i=1}^{m} a_{ij}c_{i} }$.

### Satz 4.3.7
${ V,W,U }$ mit Basen ${ A,B,C }$ und ${ T: V \to W, S: W \to U }$, dann gilt: ${ [ST]^{A}_{C} = [S]^{B}_{C} [T]^{A}_{B} }$.

## 4.4 Matrizen als Lineare Abbildungen
### Lemma 4.4.3 / Bemerkung 4.4.4
1. ${ L_{[T]^{B}_{C}} = T }$
2. ${ [L_{A}]^{B}_{C} = A }$

Nicht kanonisch, sondern von Basen abhängig!

### Satz 4.4.5
${ T }$ ist ein Isomorphismus ${ \iff [T]^{B}_{B} }$ invertierbar, dann gilt: ${ [T^{-1}]^{B}_{B} = ([T]^{B}_{B})^{-1} }$.

## 4.5 Basiswechsel
### Definition 4.5.1: Basiswechselmatrix / Satz 4.5.3
${ V }$ mit Basen ${ B,B' }$, dann ist die Basiswechselmatrix von ${ B }$ nach ${ B' }$ als Koeffiziententransformationsmatrix ${ [\mathrm{id}]^{B}_{B'} }$ mit ${ [\mathrm{id}]^{B'}_{B} = ([\mathrm{id}]^{B}_{B'})^{-1} }$.

### Theorem 4.5.5
${ T: V \to W }$ mit Basen ${ B,B',C,C' }$, dann gilt: ${ [T]^{B'}_{C'} = [\mathrm{id}_{W}]^{C}_{C'} [T]^{B}_{C} [\mathrm{id}_{V}]^{B'}_{B} }$.

### Definition 4.5.10: Ähnlich, Äquivalent / Korollar 4.6.3
1. ${ A,B }$ sind ähnlich falls ${ \exists P \in GL_{n}: B = P^{-1}AP }$, schreibe ${ A \sim B \iff \mathrm{rk}(A) = \mathrm{rk}(B) }$.
2. ${ A,B }$ sind äquivalent falls ${ \exists P,Q \in GL_{n}: B = PAQ }$ (auch für nicht-quadratische Matrizen).

## 4.6 Zeilenrang = Spaltenrang
### Definition 4.6.5: Transponierte
${ B = A^{\top} }$ mit ${ b_{ij} = a_{ji} }$

## 4.7 Zurück zu Linearen Gleichungssystemen
### Lemma 4.7.1
${ \dim L(S_{A}) = n - \mathrm{rk}(A) }$

### Satz 4.7.9 / Korollar 4.7.10
${ A \in M_{m \times n}(K) }$

${ \mathrm{rk}(A) = \mathrm{rk}(A|b) \iff Ax = b }$ hat eine Lösung.

${ \mathrm{rk}(A) = \mathrm{rk}(A|b) = n \iff Ax = b }$ hat genau eine Lösung.

---

# 5 Gruppen und Ringe
## 5.1 Gruppen
### Definition 5.1.1: Gruppe
Eine Gruppe ist eine Menge ${ G }$ mit einer Operation ${ +: G \times G \to G }$ mit
1. ${ (g+h)+k = g+(h+k), \forall g,h,k \in G }$
2. ${ \exists 0 \in G: g+0 = 0+g = g, \forall g \in G }$
3. ${ \forall g \in G, \exists g^{-1} \in G: g+g^{-1} = g^{-1}+g = 0 }$
4. abelsch: ${ g+h = h+g, \forall g,h \in G }$

## 5.2 Ringe
### Definition 5.2.1: Ring
Ein Ring ist eine Menge ${ R }$ mit zwei Operationen ${ +, \cdot: R \times R \to \mathbb{R} }$ mit
1. ${ (R,+) }$ ist eine abelsche Gruppe
2. ${ (a \cdot b) \cdot c = a \cdot (b \cdot c), \forall a,b,c \in R }$
3. ${ \exists 1 \in R: 1 \cdot a = a \cdot 1 = a, \forall a \in R \setminus \left\{ 0 \right\} }$
4. ${ a \cdot (b + c) = a \cdot b + a \cdot c \land (b + c) \cdot a = b \cdot a + c \cdot a, \forall a,b,c \in R }$
5. kommutativ: ${ a \cdot b = b \cdot a, \forall a,b \in R }$

---

# 6 Vektorräume Linearer Abbildungen
## 6.1 Definition und erste Eigenschaften
### Definition 6.1.1: Vektorraum der Homomorphismen / Satz 6.1.2 / Korollar 6.1.4
${ \mathrm{Hom}_{K}(V, W) = \left\{ T: V \to W \mid T \text{ linear} \right\} }$ ist ein Vektorraum mit ${ \dim \mathrm{Hom}_{K}(V, W) = \dim V \dim W }$.

## 6.2 Der Duale Vektorraum
### Definition 6.2.1: Dualraum
${ V^{*} := \mathrm{Hom}_{K}(V, K) }$

### Definition 6.2.4: Elemente des Dualraums / Satz 6.2.5 / Definition 6.2.7: Duale Basis
${ V }$ mit Basis ${ B = (v_{1}, \dots, v_{n}) }$, dann ist ${ B^{*} = (v^{*}_{1}, \dots, v^{*}_{n}) }$ eine Basis von ${ V^{*} }$ (genannt duale Basis) mit ${ v_{i}^{*}(v_{j}) := \delta_{ij} }$.

### Satz 6.2.9 / Korollar 6.2.10
${ [\mathrm{id}]^{B^{*}}_{C^{*}} = ([\mathrm{id}]^{C}_{B})^{\top} = (([\mathrm{id}]^{B}_{C})^{-1})^{\top} }$

## 6.3 Die Duale Abbildung
### Definition 6.3.1: Duale Abbildung
${ T^{*}: W^{*} \to V^{*}, \ell \mapsto \ell \circ T }$

### Satz 6.3.5 / Theorem 6.3.9
${ (ST)^{*} = T^{*}S^{*} }$

${ [T^{*}]^{C^{*}}_{B^{*}} = ([T]^{B}_{C})^{\top} }$

## 6.4 Annullator
### Definition 6.4.1: Annullator
${ U \leq V }$, dann ist der Annullator ${ U^{\perp} := \left\{ \ell \in V^{*} \mid \ell u = 0_{V}, \forall u \in U \right\} = \left\{ \ell \in V^{*} \mid \ell U = \left\{ 0_{V} \right\} \right\} }$.

Oder: ${ \ell \in U^{\perp} \iff U \leq \ker \ell }$.

### Theorem 6.4.5
${ U \leq V:\dim U + \dim U^{\perp} = \dim V }$

### Satz 6.4.6 / Korollar 6.4.7
1. ${ (\mathrm{im}\,T)^{\perp} = \ker(T^{*}) }$
2. ${ (\ker T)^{\perp} = \mathrm{im}(T^{*}) }$

1. ${ T }$ ist injektiv ${ \iff T^{*} }$  ist surjektiv
2. ${ T }$ ist surjektiv ${ \iff T^{*} }$ ist injektiv

## 6.5 Reflexivität
### Definition 6.5.1: Bidualraum
Bidualraum: ${ V^{**} := (V^{*})^{*} }$

# 7 Quotientenräume
## 7.1 Definition und Erste Eigenschaften
### Definition 7.1.1: Quotientenraum
${ U \leq V }$, dann ist der Quotientenraum ${ V / U := \left\{ [v] \mid v \in V \right\} = \left\{ v+U \mid v \in V \right\} = \left\{ \left\{ v+u \mid u \in U \right\} \mid v \in V \right\} }$.

### Satz 7.1.4 / Korollar 7.1.5 / Satz 7.1.6
${ q_{U}: V \to V / U, v \mapsto [v] }$ die kanonische Quotientenabbildung mit ${ \ker(q_{U}) = U }$ und ${ \mathrm{im}(q_{U}) = V / U }$.

${ \dim V / U = \dim V - \dim U }$

${ U,W \leq V }$ mit ${ U \oplus W = V }$, damit ist ${ \gamma: W \xrightarrow{\cong} V / U }$ mit ${ \gamma = q_{U} \bigm|_{W} }$.

### Satz 7.1.10
${ \left\{ W \subseteq V: U \leq W \leq V \right\} \to \left\{ X \leq V / U \right\}, W \mapsto W / U }$ ist eine ${ 1 : 1 }$ Korrespondenz.

## 7.2 Die Isomorphiesätze
### Theorem 7.2.1: Erster Isomorphiesatz
${ T: V \to W }$, damit ${ \overline{T}: V / \ker(T) \to \mathrm{im}(T) }$ mit
![[Wichtige Definitionen und Sätze 2024-07-05 21.34.30.excalidraw]]

### Theorem 7.2.2: Zweiter Isomorphiesatz
${ U,W \leq V }$ mit ${ \imath: U \hookrightarrow V \xrightarrow{q_{W}} V / W, u \mapsto q_{W}(u) }$, somit ${ \ker(\imath) = U \cap W }$ und induziert ${ \overline{\imath}: U / (U \cap W) \xrightarrow{\cong} (U+W) / W }$.

### Satz 7.2.3
${ U \leq W \leq V }$ mit ${ \varpi_{U,W}: V / U \to V / W, v+U \mapsto v+W }$ und
![[Wichtige Definitionen und Sätze 2024-07-05 21.48.29.excalidraw]]

### Theorem 7.2.4 Dritter Isomorphiesatz
${ U \leq W \leq V }$, dann ist ${ \ker(\varpi_{U,W}) = W / U }$ und ${ \overline{\varpi_{U,W}}: (V / U) / (W / U) \xrightarrow{\cong} V / W }$.

# 8 Determinanten
## 8.2 Permutationen
### Definition 8.2.1: Permutation / Transposition / Satz 8.2.3 / Satz 8.2.6 / Definition 8.2.11: Vorzeichen der Permutation
${ \sigma: \left\{ 1,\dots,n \right\} \to \left\{ 1,\dots,n \right\} }$ bijektiv heisst Permutation. Eine Transposition vertauscht nur zwei Elemente.

${ \left\{ \sigma \right\} = S_{n} }$ ist eine Gruppe unter ${ \circ }$ mit ${ n! }$ Elementen.

Jede Permutation kann als endliche Verknüpfung von Transpositionen geschrieben werden.

Eine Permutation heisst gerade oder ungerade abhängig von der Anzahl nötigen Transpositionen. ${ \mathrm{sgn}(\sigma) = 1 }$ wenn gerade, ${ \mathrm{sgn}(\sigma) = -1 }$ wenn ungerade.

## 8.2 Determinantenfunktionen
### Definition 8.3.2: ${ n }$-Linearität / Definition 8.3.5: Alternierend
${ f }$ heisst ${ n }$-linear, wenn ${ f(v_{1},\dots,\lambda v_{i}+u,\dots,v_{n}) = \lambda f(v_{1},\dots,v_{i},\dots,v_{n}) + f(v_{1},\dots,u,\dots,v_{n}) }$.

${ f }$ heisst alternierend, wenn für ${ v_{i} = v_{i+1} \implies f(v_{1},\dots,v_{i},v_{i+1},\dots,v_{n}) = 0 }$.

### Lemma 8.3.7
Wenn ${ f }$ alternierend und ${ n }$-linear ist, gilt:
1. ${ f(v_{1},\dots,v_{i},v_{i+1},\dots,v_{n}) = -f(v_{1},\dots,v_{i+1},v_{i},\dots,v_{n}) }$
2. ${ v_{i} = v_{j}, i \neq j \implies f(v_{1},\dots,v_{i},\dots,v_{j},\dots,v_{n}) = 0 }$
3. ${ f(v_{1},\dots,v_{i},\dots,v_{j},\dots,v_{n}) = -f(v_{1},\dots,v_{j},\dots,v_{i},\dots,v_{n}) }$

### Definition 8.3.8: Determinantenfunktion / Korollar 10.2.2
Eine Determinantenfunktion ${ D }$ ist
1. ${ n }$-linear in den Spalten/Zeilen
2. alternierend in den Spalten/Zeilen
3. ${ D(\mathbb{1}_{n}) = 1 }$

### Theorem 8.3.16
${ D(A) = \sum_{\sigma \in S_{n}} \mathrm{sgn}(\sigma) a_{\sigma(1),1}a_{\sigma(2),2} \cdots a_{\sigma(n),n} }$

# 10 Zurück zu Determinanten
## 10.2 Erste Eigenschaften
### Satz 10.2.1 / Satz 10.2.3
${ \det A = \det A^{\top} }$

Elementare Zeilenumformungen:
1. ${ B = P(r,s)A \implies \det B = -\det A }$
2. ${ B = M(r,\lambda) A \implies \det B = \lambda \det A }$
3. ${ B = S(r,s,\lambda) A \implies \det B = \det A }$

### Theorem 10.2.5 / Korollar 10.2.7
$$
M = \begin{pmatrix}
A & B \\
\mathbb{0} & C
\end{pmatrix}
$$
mit ${ A,C }$ quadratisch, dann ist ${ \det M = \det A \det B }$.

${ M }$ eine obere Dreiecksmatrix, dann ${ \det M = m_{11}m_{22} \cdots m_{nn} }$.

## 10.3 Determinanten und Invertierbarkeit
### Satz 10.3.2 / Korollar 10.3.3 / Korollar 10.3.4
${ \det AB = \det A \det B }$

${ \det(A^{-1}) = \det(A)^{-1} }$

${ B = C^{-1}AC \implies \det B = \det A }$

### Definition 10.3.7: Kofaktormatrix / Adjunkte Matrix
Kofaktormatrix ${ C = (c_{ij}) }$ mit ${ c_{ij} = (-1)^{i+j} \det A_{ij} }$.

Adjunkte Matrix ${ \mathrm{adj}(A) = C^{\top} }$.

### Satz 10.3.11 / Lemma 10.3.12 / Theorem 10.3.13
${ A \cdot \mathrm{adj}(A) = \det(A) \cdot \mathbb{1}_{n} }$

${ \mathrm{adj}(A) \cdot A = \det(A) \cdot \mathbb{1}_{n} }$

${ A^{-1} = \det(A)^{-1} \cdot \mathrm{adj}(A) }$

## 10.4 Die Determinante eines Endomorphismus
### Definition 10.4.1: Determinante des Endomorphismus / Lemma 10.4.2
${ T: V \to V }$ mit Basen ${ B,C }$, dann ist ${ \det T = \det[T]^{B}_{B} = \det[T]^{C}_{C} }$.

### Satz 10.4.4
1. ${ \det(ST) = \det S \det T }$
2. ${ T }$ Isomorphismus ${ \iff \det T \neq 0 \implies \det(T^{-1}) = \det(T)^{-1} }$
3. ${ \det(\mathrm{id}_{V}) = 1, \det(\mathbb{0}_{V}) = 0 }$

# 12 Eigenwerte und Eigenvektoren
## 12.1 Definitionen und Erste Eigenschaften
### Definition 12.1.1: Eigenwert / Eigenvektor
${ T: V \to V }$
1. ${ \lambda \in K }$ ist ein Eigenwert von ${ T }$ wenn ${ \exists v \in V, v \neq 0_{V}: Tv = \lambda v }$
2. ${ v \in V, v \neq 0_{V} }$ ist ein Eigenvektor von ${ T }$ zum Eigenwert ${ \lambda }$ wenn ${ Tv = \lambda v }$

${ \sigma(T) := \left\{ \lambda \text{ Eigenwert von } T \right\} }$

### Korollar 12.1.5
Äquivalente Aussagen:
1. ${ \lambda \in \sigma(T) }$
2. ${ \ker(T-\lambda \mathrm{id}) \neq \left\{ 0_{V} \right\} }$
3. ${ T-\lambda \mathrm{id} }$ ist kein Isomorphismus
4. ${ \det(T-\lambda \mathrm{id}) = 0 }$

## 12.2 Das Charakteristische Polynom
### Definition 12.2.1 / Definition 12.2.3: Charakteristisches Polynom
${ \chi_{A}(x) = \det(A-x \cdot \mathbb{1}_{n}) }$ ist das charakteristische Polynom von ${ A }$.

${ \chi_{T}(x) = \det([T]^{B}_{B} - x \cdot \mathbb{1}_{n}) }$ ist das charakteristische Polynom von ${ T }$.

### Theorem 12.2.5
${ \lambda \in \sigma(T) \iff \chi_{T}(\lambda) = 0 }$.

${ \sigma(T) = \left\{ \lambda \in K \mid \chi_{T}(\lambda) = 0 \right\} }$

### Satz 12.2.9
${ \chi_{T}(x) = (-1)^{n}x^{n} + (-1)^{n-1}\mathrm{Tr}(T)x^{n-1} + \dots + \det(T) }$

## 12.3 Diagonalisierung
### Satz 12.3.2 / Korollar 12.3.4
${ \lambda_{1},\dots,\lambda_{n} }$ verschiedene Eigenwerte mit ${ v_{i} }$ Eigenvektor zu ${ \lambda_{i} \implies v_{1},\dots,v_{n} }$ sind linear unabhängig.

${ \dim V = | \sigma(T) | \implies V }$ hat eine Basis aus Eigenvektoren; ${ T }$ ist diagonalisierbar.

### Definition 12.3.5: Diagonalisierbarkeit
${ T: V \to V }$ ist diagonalisierbar, wenn ${ V }$ eine Basis aus Eigenvektoren von ${ T }$ besitzt.

${ A \in M_{n \times n}(K) }$ ist diagonalisierbar, wenn ${ T_{A} }$ diagonalisierbar ist.

## 12.4 Eigenräume
### Definition 12.4.1: Eigenraum / Lemma 12.4.2
Eigenraum von ${ \lambda }$ ist ${ E_{\lambda} := \left\{ v \in V \mid Tv = \lambda v \right\} = \ker(T-\lambda \mathrm{id}) \leq V }$.

### Satz 12.4.8 / Korollar 12.4.9
${ E_{\lambda_{1}} + \dots + E_{\lambda_{k}} = E_{\lambda_{1}} \oplus \dots \oplus E_{\lambda_{k}} }$

${ T }$ diagonalisierbar ${ \iff \dim V = \dim E_{\lambda_{1}} + \dots + \dim E_{\lambda_{k}} }$

## 12.5 Algebraische und Geometrische Vielfachheit
${ K }$ algebraisch abgeschlossen.

### Definition 12.5.2: Geometrische / Algebraische Vielfachheit
1. geometrische Vielfachheit: ${ g_{\lambda} = \dim E_{\lambda} }$
2. algebraische Vielfachheit: ${ a_{\lambda} = }$ Vielfachheit Nullstelle von ${ \chi_{T}(\lambda) }$

### Satz 12.5.4 / Korollar 12.5.5 / Theorem 12.5.6
${ g_{\lambda} \leq a_{\lambda} }$

${ T }$ diagonalisierbar ${ \iff g_{\lambda_{i}} = a_{\lambda_{i}}, \forall 1 \leq i \leq n }$

Äquivalente Aussagen:
1. ${ T }$ diagonalisierbar
2. ${ g_{\lambda} = a_{\lambda}, \forall \lambda \in \sigma(T) }$
3. ${ \chi_{T}(x) = \prod_{i=1}^{k} (\lambda_{i}-x)^{g_{\lambda_{i}}} }$
4. ${ V = \bigoplus_{i=1}^{k} E_{\lambda_{i}} }$

# 13 Das Minimale Polynom
## Definition und Erste Eigenschaften
### Definition 13.1.8: Minimales Polynom / Lemma 13.1.9 / Satz 13.1.10
Das minimale Polynom von ${ T }$ ist das monische Polynom ${ m_{T}(x) \in K[x] }$ kleinsten Grades mit ${ m_{T}(x) = 0 }$.

Das minimale Polynom ist wohldefiniert und eindeutig.

### Satz 13.1.14 / Korollar 13.1.15
${ K }$ algebraisch abgeschlossen, mit
$$
C = \begin{pmatrix}
A & \mathbb{0} \\
\mathbb{0} & B
\end{pmatrix}
$$
dann ist ${ m_{C}(x) = \mathrm{lcm}(m_{A}(x),m_{B}(x)) }$.

Wenn
$$
C = \begin{pmatrix}
A_{1} & 0 & \cdots \\
0 & A_{2} & 0 & \cdots \\
&& \ddots \\
&& 0 & A_{k}
\end{pmatrix}
$$
dann ist ${ m_{C}(x) = \mathrm{lcm}(m_{A_{1}}(x),\dots,m_{A_{k}}(x)) }$.

## 13.2 Der Satz von Cayley-Hamilton
### Theorem 13.2.1: Cayley-Hamilton
${ \chi_{T}(T) = 0 }$

### Korollar 13.2.2
${ m_{T}(x) \mid \chi_{T}(x) }$

### Lemma 13.2.4 / Satz 13.2.5
${ T: V \to V, W \leq V }$ mit ${ T(W) \subseteq W }$ und ${ T' = T \bigm|_{W} }$, dann gilt ${ \chi_{T'}(x) \mid \chi_{T}(x) }$.

${ T: V \to V, v \in V, W = \left< w,Tw,T^{2}w,\dots \right> \implies T(W) \subseteq W, T' = T \bigm|_{W} \implies \chi_{T'}(T')v = 0_{V} }$

# 14 Die Jordan'sche Normalform einer Matrix
## 14.1 Definition und Theorem
### Definition: Jordanblock / Lemma 14.1.1
Ein Jordanblock hat die folgende Form:
$$
J_{n}(\lambda) = \begin{pmatrix}
\lambda & 1 & 0 & \cdots \\
0 & \lambda & 1 & 0 & \cdots \\
&& \ddots & \ddots \\
& \cdots & 0 & \lambda & 1 \\
&& \cdots & 0 & \lambda
\end{pmatrix} = \lambda \cdot \mathbb{1}_{n} + N_{n}
$$
mit einzigem Eigenwert ${ \lambda, g_{\lambda} = 1, a_{\lambda} = n, E_{\lambda} = \left< e_{1} \right>, m_{J_{n}(\lambda)}(x) = (x-\lambda)^{n} }$.

### Theorem 14.1.2: Jordan'sche Normalform
${ T: V \to V, \exists B }$ Basis von ${ V }$, sodass
$$
[T]^{B}_{B} = \begin{pmatrix}
J_{n_{1}}(\alpha_{1}) \\
& J_{n_{2}}(\alpha_{2}) \\
&& \ddots \\
&&& J_{n_{k}}(\alpha_{k})
\end{pmatrix}
$$
eindeutig ist (abgesehen von der Vertauschung der Blöcke).

## 14.2 Eigenschaften der Jordan'sche Normalform
### Lemma 14.2.2
$$
C = \begin{pmatrix}
A & \mathbb{0} \\
\mathbb{0} & B
\end{pmatrix} \in M_{n \times n}(K), A \in M_{\ell \times \ell}(K)
$$
mit ${ U = \left< e_{1},\dots,e_{\ell} \right>, W = \left< e_{\ell+1},\dots,e_{n} \right>, v = u+w \in V, v \neq 0_{V}, u \in U, w \in W }$. Dann gilt: ${ v }$ ist Eigenvektor von ${ C }$ zu ${ \lambda \in \sigma(C) \iff Au = \lambda u \land Bw = \lambda w }$. Zusätzlich: ${ E_{\lambda}(C) = E_{\lambda}(A) \oplus E_{\lambda}(B) }$ und damit ${ g_{\lambda}(C) = g_{\lambda}(A) + g_{\lambda}(B) }$.

### Theorem 14.2.3
- ${ g_{\lambda} = \# }$Jordanblöcke mit Eigenwert ${ \lambda }$
- arithmetische Vielfachheit von ${ \lambda }$ in ${ m_{T}(x) = }$ Länge des grössten Jordanblocks mit Eigenwert ${ \lambda }$
- ${ a_{\lambda} = }$ kombinierte Länge aller Jordanblöcke mit Eigenwert ${ \lambda }$

## 14.3 Verallgemeinerte Eigenräume
### Definition 14.3.1: Verallgemeinerter Eigenraum / Lemma 14.3.3
${ \tilde{E}_{\lambda} := \bigcup_{j=1}^{\infty} \ker(T-\lambda \mathrm{id})^{j} = \ker(T-\lambda \mathrm{id})^{n} }$

### Lemma 14.3.2
${ T: V \to V, v \in V, v \neq 0_{V}, T^{k}v = 0_{V} }$ aber ${ T^{k-1}v \neq 0_{V} \implies v, Tv, \dots, T^{k-1}v }$ sind linear unabhängig.

### Definition 14.3.4: Jordankette
${ v \in \tilde{E}_{\lambda}, v \neq 0_{V}, k \geq 1 }$ minimal, sodass ${ (T-\lambda \mathrm{id})^{k}v = 0_{V} }$. Dann ist ${ \left\{ v, (T-\lambda \mathrm{id})v, \dots, (T-\lambda \mathrm{id})^{k-1}v \right\} }$ die Jordankette von ${ v }$.

### Lemma 14.3.8 / Satz 14.3.9 / Korollar 14.3.10
${ T(\tilde{E}_{\lambda}) \subseteq \tilde{E}_{\lambda} }$

${ \left\{ \lambda \right\} = \sigma(T \bigm|_{\tilde{E}_{\lambda}}) }$

${ \exists m_{\lambda} \leq a_{\lambda}(T): \chi_{T \bigm|_{\tilde{E}_{\lambda}}}(x) = (\lambda-x)^{m_{\lambda}} }$

### Lemma 14.3.12
${ \tilde{E}_{\lambda_{1}} + \dots + \tilde{E}_{\lambda_{k}} = \tilde{E}_{\lambda_{1}} \oplus \dots \oplus \tilde{E}_{\lambda_{k}} }$

vgl. [[#Satz 12.4.8 / Korollar 12.4.9]]

### Theorem 14.3.15 / Korollar 14.3.16
${ T: V \to V \implies V = \bigoplus_{\lambda \in \sigma(T)} \tilde{E}_{\lambda} }$.

## 14.4 Beweis der Jordan'schen Normalform für Nilpotente Abbildungen
### Theorem 14.4.1 / Korollar 14.4.4
Für eine nilpotente Abbildung ${ N: V \to V }$ gibt es eine Basis von ${ V }$ bestehend aus Jordanketten.

Dies gilt auch für ein allgemeines ${ T: V \to V }$, wo ${ \tilde{E}_{\lambda} }$ eine Basis bestehend aus Jordanketten von ${ T \bigm|_{\tilde{E}_{\lambda}} }$ hat.

---

## 14.5 Berechnung der Jordan'sche Normalform
### Satz 14.5.7
${ C^{-1}J_{n}(\lambda)C }$ in Jordan'sche Normalform ${ \iff }$
$$
C = \begin{pmatrix}
x_{1} & x_{2} & \cdots & x_{n} \\
0 & x_{1} & \cdots & x_{n-1} \\
\vdots & \ddots & \ddots & \ddots \\
0 & \cdots & 0 & x_{1}
\end{pmatrix}
$$

---

# 15 Euklidische und Hermitesche Räume
## 15.1 Normierte Räume
### Definition 15.1.1: Norm
${ K \in \left\{ \mathbb{R},\mathbb{C} \right\} }$, dann ist eine Norm auf ${ V }$ Vektorraum ${ \| \cdot \|: V \to \mathbb{R}_{\geq 0} }$ mit
- ${ \| u+v \| \leq \| u \| + \| v \|, \forall u,v \in V }$ (Dreiecksungleichung)
- ${ \| \alpha v \| = | \alpha | \| v \|, \forall \alpha \in K, v \in V }$ ("Linearität")
- ${ \| v \| = 0 \implies v = 0_{V} }$ (Nicht-Degeneriertheit)

### Definition 15.1.6: Einheitsvektor, Distanz / Bemerkung 15.1.7
1. ${ v }$ heisst Einheitsvektor ${ \iff \| v \| = 1 }$
2. Distanz zwischen ${ v,w }$ ist ${ d(v,w) := \| v-w \| }$

Normalisierung von ${ v }$ ist ${ \frac{1}{\| v \|} \cdot v }$.

## 15.2 Innere Produkte
### Definition 15.2.1: Inneres Produkt für Euklidische Räume / Bemerkung 15.2.4
${ K = \mathbb{R} }$, dann ist ein inneres Produkt auf ${ V }$ Vektorraum ${ \left< \cdot,\cdot \right> : V \times V \to \mathbb{R} }$ mit
1. Linearität in der ersten Variablen: ${ \left< \alpha v_{1}+v_{2},w \right> = \alpha \left< v_{1},w \right> + \left< v_{2},w \right> , \forall \alpha \in K, v_{1},v_{2},w \in V }$
2. Linearität in der zweiten Variablen: ${ \left< v,\alpha w_{1}+w_{2} \right> = \alpha \left< v,w_{1} \right> + \left< v,w_{2} \right> , \forall \alpha \in K, v,w_{1},w_{2} \in V }$
3. Symmetrie: ${ \left< v,w \right> = \left< w,v \right> , \forall v,w \in V }$
4. Positivität: ${ \left< v,v \right> > 0, \forall v \in V \setminus \left\{ 0_{V} \right\} }$

Dann heisst ${ (V,\left< \cdot,\cdot \right> ) }$ euklidischer Raum.

Standard-inneres Produkt: ${ \left< u,v \right> = u^{\top}v = u^{\top} \mathbb{1}_{n} v }$.

### Definition 15.2.6: Inneres Produkt für Hermitesche Räume / Bemerkung 15.2.8
${ K = \mathbb{C} }$, dann ist ein inneres Produkt auf ${ V }$ Vektorraum ${ \left< \cdot,\cdot \right> : V \times V \to \mathbb{C} }$ mit
1. Linearität in der ersten Variablen: ${ \left< \alpha v_{1}+v_{2},w \right> = \alpha \left< v_{1},w \right> + \left< v_{2},w \right> , \forall \alpha \in K, v_{1},v_{2},w \in V }$
2. Sesquilinearität in der zweiten Variablen: ${ \left< v,\alpha w_{1}+w_{2} \right> = \overline{\alpha}\left< v,w_{1} \right> + \left< v,w_{2} \right> , \forall \alpha \in K, v,w_{1},w_{2} \in V }$
3. Hermitesche Eigenschaft: ${ \left< v,w \right> = \overline{\left< w,v \right> }, \forall v,w \in V }$
4. Positivität: ${ \left< v,v \right> > 0, \forall v \in V \setminus \left\{ 0_{V} \right\} }$

Dann heisst ${ (V,\left< \cdot,\cdot \right> ) }$ hermitescher Raum.

Standard-inneres Produkt: ${ \left< u,v \right> = u^{\top}\overline{v} = u^{\top} \mathbb{1}_{n} \overline{v} }$.

### Lemma 15.2.9
${ V }$ innerer Produktraum, dann gilt:
1. ${ \left< 0_{V},v \right> = \left< v,0_{V} \right> = 0, \forall v \in V }$
2. ${ \left< v,w \right> = 0, \forall v \in V \implies w = 0_{V} }$
3. ${ \left< v,w_{1} \right> = \left< v,w_{2} \right> , \forall v \in V \implies w_{1}=w_{2} }$

### Satz 15.2.10
${ V }$ innerer Produktraum, dann ist ${ \| v \| := \sqrt{\left< v,v \right> } }$ eine Norm.

### Lemma 15.2.11: Cauchy-Schwartz-Ungleichung
${ V }$ innerer Produktraum, dann ist ${ | \left< u,v \right>  | \leq \| u \| \cdot \| v \|, \forall u,v \in V }$ mit Gleichheit ${ \iff u,v }$ linear abhängig.

### Lemma 15.2.12
${ V }$ euklidisch, dann ist ${ \left< u,v \right> = \frac{1}{2} (\| u+v \|^{2} - \| u \|^{2} - \| v \|^{2}), \forall u,v \in V }$.

### Definition 15.2.14: Orthogonal / Orthonormal
1. ${ v \perp w \iff \left< v,w \right> = 0 }$
2. ${ S \subseteq V }$  ist ein orthogonales System ${ \iff u \perp v, \forall u,v \in S }$
3. orthogonales System ${ S \subseteq V }$ ist orthonormal ${ \iff \| v \| = 1, \forall v \in S }$

### Satz 15.2.16: Satz des Pythagoras
${ V }$ innerer Produktraum, ${ u \perp v \in V \implies \| u+v \| = \| u \|^{2} + \| v \|^{2} }$.

### Definition 15.2.17: Projektion / Bemerkung 15.2.18
${ v \in V, v \neq 0_{V} }$, dann ist die Projektion von ${ u }$ auf ${ v }$ definiert als ${ \mathrm{proj}_{v}(u) := \frac{\left< u,v \right> }{\left< v,v \right> } \cdot v }$.

${ u \perp v \neq 0_{V} \iff \mathrm{proj}_{v}(u) = 0_{V} }$

### Lemma 15.2.20
${ v \neq 0_{V} \implies u - \mathrm{proj}_{v}(u) \perp v }$

## 15.3 Konstruktion innerer Produkte
### Definition 15.3.1
${ A \in M_{n \times n}(\mathbb{R}), \left< u,v \right> _{A} := u^{\top}Av }$

### Definition 15.3.2: Symmetrisch
${ A \in M_{n \times n}(K) }$ ist symmetrisch ${ \iff A = A^{\top} \iff a_{ij} = a_{ji} }$.

### Lemma 15.3.3
${ A \in M_{n \times n}(\mathbb{R}) }$ symmetrisch ${ \implies \left< u,v \right> _{A} = \left< v,u \right> _{A}, \forall u,v \in \mathbb{R}^{n} }$.

### Definition 15.3.5: Positiv Definit
${ A \in M_{n \times n}(\mathbb{R}) }$ symmetrisch ist positiv definit ${ \iff \left< v,v \right> _{A} = v^{\top}Av > 0, \forall v \in \mathbb{R}^{n}, v \neq 0 }$.

### Satz 15.3.7
${ A \in M_{n \times n}(\mathbb{R}) }$, dann ist ${ \left< \cdot,\cdot \right> _{A} }$ ein inneres Produkt ${ \iff A }$ positiv definit.

### Definition 15.3.9
${ B \in M_{n \times n}(\mathbb{C}), \left< u,v \right> _{B} = u^{\top}B\overline{v} }$

### Definition 15.3.10: Adjungierte, Hermitesch
${ B \in M_{n \times n}(\mathbb{C}) }$
1. adjungierte Matrix von ${ B }$ ist ${ B^{*} = \overline{B}^{\top} }$
2. ${ B }$ ist hermitesch ${ \iff B = B^{*} \iff b_{ij} = \overline{b_{ji}} }$

### Definition 15.3.13: Positiv Definit
${ B \in M_{n \times n}(\mathbb{C}) }$ hermitesch ist positiv definit ${ \iff \left< v,v \right> _{B} = v^{\top}B\overline{v} > 0, \forall v \in \mathbb{C}^{n}, v \neq 0 }$.

### Satz 15.3.15
${ B \in M_{n \times n}(\mathbb{C}) }$, dann ist ${ \left< \cdot,\cdot \right> _{B} }$ ein inneres Produkt ${ \iff B }$ positiv definit.

## 15.4 Gram-Schmidt-Orthogonalisierung
### Satz 15.4.1
1. ${ S \subseteq V }$ orthogonales System mit ${ 0_{V} \notin S \implies S }$ linear unabhängig.
2. ${ \left\{ v_{1},\dots,v_{n} \right\} }$ orthogonales System mit ${ v_{i} \neq 0_{V}, \forall 1 \leq i \leq n }$ und ${ v = a_{1}v_{1} + \dots + a_{n}v_{n} \implies a_{i} = \frac{\left< v,v_{i} \right> }{\left< v_{i},v_{i} \right> } }$.

### Theorem 15.4.4: Gram-Schmidt-Orthogonalisierungsverfahren
${ v_{1}, \dots, v_{n} }$ Basis von ${ V }$, dann ist ${ w_{1}, \dots, w_{n} }$ mit ${ w_{1}=v_{1} }$ und ${ w_{j} = v_{j} - \sum_{i=1}^{j-1} \mathrm{proj}_{w_{i}} v_{j} }$ eine orthogonale Basis von ${ V }$.

Für Orthonormalisierung kann man folgende Formel anwenden:
${ v_{1}, \dots, v_{n} }$ Basis von ${ V }$, dann ist ${ w_{1}, \dots, w_{n} }$ mit ${ w_{1} = \frac{v_{1}}{\| v_{1} \|} }$ und ${ w_{j}' = v_{j} - \sum_{i=1}^{j-1} \left< v_{j},w_{i} \right> w_{i}, w_{j} = \frac{w_{j}'}{\| w_{j}' \|} }$ eine orthonormale Basis von ${ V }$.

## 15.5 Das orthogonale Komplement
### Definition 15.5.1: Orthogonales Komplement / Bemerkung 15.5.2
${ \varnothing \neq S \subseteq V }$, dann ist das orthogonale Komplement von ${ S }$ definiert als ${ S^{\perp} := \left\{ v \in V \mid \left< v,s \right> = 0, \forall s \in S \right\} }$.

${ S = \left\{ v \right\} \implies v^{\perp} := \left\{ v \right\}^{\perp} }$

${ 0_{V}^{\perp} = V }$ und ${ V^{\perp} = \left\{ 0_{V} \right\} }$

### Lemma 15.5.3
${ \varnothing \neq S \subseteq V }$
1. ${ S^{\perp} \leq V }$
2. ${ S \cap S^{\perp} \in \left\{ \varnothing, \left\{ 0_{V} \right\} \right\} }$
3. ${ S \subseteq T \subseteq V \implies T^{\perp} \subseteq S^{\perp} }$
4. ${ LH(S)^{\perp} = S^{\perp} }$
5. ${ S \subseteq (S^{\perp})^{\perp} }$

### Theorem 15.5.4
${ U \leq V \implies V = U \oplus U^{\perp} }$

### Definition 15.5.9: Orthogonale Projektion / Bemerkung 15.5.10
${ U \leq V, v \in V }$ mit ${ v = u+w, u \in U, w \in U^{\perp} }$. Definiere die orthogonale Projektion von ${ v }$ auf ${ U }$ als ${ \mathrm{pr}_{U}(v) = u }$.

${ \forall u \in U: \mathrm{pr}_{U}(u) = u }$

### Lemma 15.5.11
1. ${ \mathrm{pr}_{U} }$ ist linear
2. ${ \ker(\mathrm{pr}_{U}) = U^{\perp} \land \mathrm{im}(\mathrm{pr}_{U}) = U }$
3. ${ v - \mathrm{pr}_{U}(v) \in U^{\perp}, \forall v \in V }$

### Satz 15.5.12 / Korollar 15.5.13
${ U \leq V \implies U = (U^{\perp})^{\perp} }$

${ U \leq V \implies \dim V = \dim U + \dim U^{\perp} }$

## 15.6 ${ QR }$-Zerlegung
### Definition 15.6.1: Orthogonale und Unitäre Matrizen / Lemma 15.6.3 / Bemerkung 15.6.4 / Satz 15.6.5
1. ${ A \in M_{n \times n}(\mathbb{R}) }$ ist orthogonal ${ \iff }$ Spaltenvektoren bilden eine orthonormale Basis ${ \iff A^{-1} = A^{\top} }$. ${ O(n) := \left\{ A \in M_{n \times n}(\mathbb{R}) \mid A \text{ orthogonal} \right\} }$
2. ${ B \in M_{n \times n}(\mathbb{C}) }$ ist unitär ${ \iff }$ Spaltenvektoren bilden eine orthonormale Basis ${ \iff B^{-1} = B^{*} }$. ${ U(n) := \left\{ B \in M_{n \times n}(\mathbb{C}) \mid B \text{ unitär} \right\} }$

${ A \in O(n) \iff A^{\top} \in O(n) }$ und ${ B \in U(n) \iff B^{*} \in U(n) }$

${ O(n) }$ ist eine Untergruppe von ${ GL_{n}(\mathbb{R}) }$ und ${ U(n) }$ ist eine Untergruppe von ${ GL_{n}(\mathbb{C}) }$.

### Theorem 15.6.6
1. ${ A \in GL_{n}(\mathbb{R}) \implies \exists Q \in O(n), R \in M_{n \times n}(\mathbb{R}) }$ obere Dreiecksmatrix sodass ${ A = QR }$.
2. ${ B \in GL_{n}(\mathbb{C}) \implies \exists Q \in U(n), R \in M_{n \times n}(\mathbb{C}) }$ obere Dreiecksmatrix sodass ${ B = QR }$.

Wir finden ${ Q = (w_{1}, \dots, w_{n}) }$ nach Gram-Schmidt-Orthogonalisierung _und Normalisierung_ und
$$
R = \begin{pmatrix}
\left< v_{1},w_{1} \right>  & \left< v_{2},w_{1} \right>  & \cdots & \left< v_{n},w_{1} \right>  \\
0 & \left< v_{2},w_{2} \right>  & \cdots & \left< v_{n},w_{2} \right>  \\
\vdots && \ddots & \vdots \\
0 & \cdots & 0 & \left< v_{n},w_{n} \right> 
\end{pmatrix}
$$

### Theorem 15.6.9
${ A \in M_{m \times n}(K), r = \mathrm{rk}(A) \implies \exists Q \in U(n), R = \begin{pmatrix} C & \star \\ 0 & 0\end{pmatrix}, C \in M_{r \times r}(K) }$ obere Dreiecksmatrix, sodass ${ A = QR }$.

## 15.7 Dualräume von Inneren Produkträumen
### Definition 15.7.1: ${ \varphi }$-Abbildung / Lemma 15.7.2
${ u \in V }$, definiere ${ \varphi_{u}(v) := \left< v,u \right>  }$.

${ \varphi_{u} \in V^{*}, \forall u \in V }$

### Theorem 15.7.3: Darstellungssatz von Riesz / Bemerkung 15.7.4
${ \varphi \in V^{*} \implies \exists! u \in V: \varphi = \varphi_{u} }$

${ \Phi: V \to V^{*}, u \mapsto \varphi_{u} }$ ist bijektiv.

### Satz 15.7.6
${ U \leq V \implies \Phi(U^{\perp}) \leq V^{*} }$ entspricht dem Annihilator.

## 15.8 Die adjungierte Abbildung
${ T: V \to W }$ linear

### Definition 15.8.1: Adjungierte Abbildung / Satz 15.8.3 / Bemerkung 15.8.4
Die adjungierte Abbildung von ${ T }$ ist ${ T^{*}: W \to V }$ sodass ${ \left< Tv,w \right> _{W} = \left< v,T^{*}w \right> _{V}, \forall v \in V, w \in W }$.

${ T^{*} }$ ist wohldefiniert und linear.

- ${ \mathrm{id}^{*} = \mathrm{id} }$
- ${ (T^{*})^{*} = T }$

### Satz 15.8.6
${ T^{*}_{\text{dual}}: W^{*} \to V^{*} }$ die duale Abbildung, dann ist ${ T^{*} = \Phi_{V}^{-1} \circ T^{*}_{\text{dual}} \circ \Phi_{W} }$.

### Bemerkung 15.8.7
Identifikationen:
- ${ V^{*} }$ mit ${ V }$
- ${ U^{\perp} }$ Annihilator mit ${ U^{\perp} }$ orthogonalem Komplement
- ${ T^{*}: W^{*} \to V^{*} }$ mit ${ T^{*}: W \to V }$

### Lemma 15.8.8 / Lemma 15.8.9
${ S,T: V \to W, R: W \to U }$
1. ${ (S+T)^{*} = S^{*} + T^{*} }$
2. ${ (\lambda T)^{*} = \overline{\lambda} \cdot T^{*}, \forall \lambda \in K }$
3. ${ (T^{*})^{*} = T }$
4. ${ (RT)^{*} = T^{*}R^{*} }$

1. ${ \ker(T^{*}) = \mathrm{im}(T)^{\perp} }$
2. ${ \ker(T) = \mathrm{im}(T^{*})^{\perp} }$
3. ${ \mathrm{im}(T^{*}) = \ker(T)^{\perp} }$
4. ${ \mathrm{im}(T) = \ker(T^{*})^{\perp} }$

## 15.9 Die Abbildungsmatrix der adjungierten Abbildung
### Lemma 15.9.1 / Satz 15.9.2 / Korollar 15.9.3
${ T: V \to W }$ mit orthonormalen Basen ${ B = (v_{1}, \dots, v_{n}), C = (w_{1}, \dots, w_{m}) }$ und ${ A = (a_{ij}) = [T]^{B}_{C} }$, dann ist ${ a_{ji} = \left< Tv_{i},w_{j} \right> _{W} }$.

${ [T^{*}]^{C}_{B} = ([T]^{B}_{C})^{*} }$

${ A \in M_{n \times m}(K) \implies (T_{A})^{*} = T_{A^{*}} }$

# 16 Spektraltheorie
## 16.1 Normale Endomorphismen
### Definition 16.1.1: Orthogonal Diagonalisierbar
${ T: V \to V }$ ist orthogonal diagonalisierbar ${ \iff V }$ hat eine orthonormale Basis aus Eigenvektoren.

### Lemma 16.1.3
${ T }$ orthogonal diagonalisierbar ${ \implies TT^{*} = T^{*}T }$.

### Definition 16.1.5: Normale Abbildungen / Bemerkung 16.1.6 / Satz 16.1.7
${ T: V \to V }$ ist normal ${ \iff TT^{*} = T^{*}T }$.

${ A \in M_{n \times n}(K) }$ ist normal ${ \iff AA^{*} = A^{*}A }$.

1. ${ A \in O(n) \implies A }$ normal und ${ B \in U(n) \implies B }$ normal
2. ${ T }$ orthogonal diagonalisierbar ${ \implies T }$ normal (aber nicht umgekehrt!)

1. ${ T: V \to V }$ normal, ${ B }$ orthonormale Basis ${ \implies [T]^{B}_{B} }$ normal.
2. ${ A \in M_{n \times n}(K) }$ normal, Standard-inneres Produkt ${ \implies T_{A}: K^{n} \to K^{n} }$ normal.

### Lemma 16.1.9
${ T: V \to V }$ normal
1. ${ \| Tv \| = \| T^{*}v \|, \forall v \in V }$
2. ${ T-\lambda \mathrm{id} }$ normal ${ \forall \lambda \in K }$
3. ${ v }$ Eigenvektor von ${ T }$ zu ${ \lambda \implies v }$ Eigenvektor von ${ T^{*} }$ zu ${ \overline{\lambda} }$
4. ${ v_{1},v_{2} }$ Eigenvektoren von ${ T }$ zu verschiedenen Eigenwerten ${ \implies v_{1} \perp v_{2} }$

### Theorem 16.1.10: Spektralsatz über ${ \mathbb{C} }$ / Korollar 16.1.12 / Korollar 16.1.13
${ T: V \to V }$ über ${ \mathbb{C} }$ orthogonal diagonalisierbar ${ \iff T }$ normal.

${ T: V \to V }$ über ${ \mathbb{R} }$, wenn ${ V }$ eine Jordanbasis hat ${ \implies T }$ orthogonal diagonalisierbar.

${ A \in M_{n \times n}(\mathbb{C}) }$ normal ${ \implies \exists U \in U(n): U^{-1}AU }$ diagonal.

## 16.2 Spektraltheorie über ${ \mathbb{R} }$
### Lemma 16.2.1
${ T: V \to V }$ über ${ \mathbb{R} }$ orthogonal diagonalisierbar ${ \implies T^{*} = T }$.

### Definition 16.2.2: Selbstadjungiert / Satz 16.2.3 / Bemerkung 16.2.4
${ T: V \to V }$ heisst selbstadjungiert ${ \iff T = T^{*} }$.

${ A \in M_{n \times n}(K) }$ heisst selbstadjungiert ${ \iff A = A^{*} }$.

1. ${ T: V \to V }$ selbstadjungiert, ${ B }$ orthonormale Basis ${ \implies [T]^{B}_{B} }$ selbstadjungiert.
2. ${ A \in M_{n \times n}(K) }$ selbstadjungiert, Standard-inneres Produkt ${ \implies T_{A} }$ selbstadjungiert.

${ T }$ selbstadjungiert ${ \implies T }$ normal.

### Satz 16.2.6
${ T: V \to V }$ selbstadjungiert
1. ${ \sigma(T) \subseteq \mathbb{R} }$
2. ${ \chi_{T}(x) }$ zerfällt in Linearfaktoren

### Theorem 16.2.7 / Korollar 16.2.8
${ T: V \to V }$ über ${ \mathbb{R} }$ orthogonal diagonalisierbar ${ \iff T }$ selbstadjungiert.

${ A \in M_{n \times n}(\mathbb{R}) }$ selbstadjungiert / symmetrisch ${ \implies \exists O \in O(n): O^{\top}AO }$ diagonal.

# 18 Isometrien
## 18.1 Definition und erste Eigenschaften
### Definition 18.1.1: Isometrie / Bemerkung 18.1.3 / Lemma 18.1.4
${ T: V \to W }$ heisst Isometrie ${ \iff \| Tv \|_{W} = \| v \|_{V} }$.

Isometrien sind injektiv.

${ T: V \to W }$ ist eine Isometrie ${ \iff \left< Tv_{1},Tv_{2} \right> _{W} = \left< v_{1},v_{2} \right> _{V}, \forall v_{1},v_{2} \in V }$.

### Satz 18.1.5 / Satz 18.1.6 / Beachte 18.7.1
${ T: V \to V }$ linear. Äquivalente Aussagen:
1. ${ T }$ ist eine Isometrie
2. ${ \forall }$ orthonormale Basis ${ B }$ ist ${ TB }$ auch eine orthonormale Basis
3. ${ TT^{*} = \mathrm{id} = T^{*}T }$
4. ${ T^{*} }$ ist eine Isometrie

1. ${ B }$ orthonormale Basis ${ \implies [T]^{B}_{B} \in U(n) }$
2. ${ A \in U(n) \implies T_{A} }$ ist eine Isometrie bezüglich des Standard-inneren Produkts

1. ${ A \in O(n) \implies \det A = \pm 1 }$
2. ${ B \in U(n) \implies | \det B | = 1 }$

### Lemma 18.1.8: Spezielle Orthogonale und Unitäre Matrizen
Die Untermenge der speziellen orthogonalen Matrizen ${ SO(n) := \left\{ A \in O(n) \mid \det A = 1 \right\} \subseteq O(n) }$ ist eine Untergruppe von ${ O(n) }$.

Die Untermenge der speziellen unitären Matrizen ${ SU(n) := \left\{ B \in U(n) \mid \det B = 1 \right\} \subseteq U(n) }$ ist eine Untergruppe von ${ U(n) }$.

---

## 18.2 Klassifikation der Elemente in ${ O(2) }$ und ${ SO(3) }$
### Lemma 18.2.1
${ A \in O(n) \implies \sigma(A) \subseteq \left\{ \pm 1 \right\} }$

### Lemma 18.2.2 / Satz 18.2.3 / Korollar 18.2.4
${ v \in \mathbb{R}^{2}, \| v \| = 1 \implies \exists \theta \in [0,2\pi): v = (\cos \theta, \sin \theta) }$

${ A \in O(2) }$
1. ${ \det A = 1 \implies \exists \theta \in [0,2\pi): A = R_{\theta} = \begin{pmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{pmatrix} }$ (Rotation gegen den Uhrzeigersinn um ${ \theta }$)
2. ${ \det A = -1 \implies \exists }$ Basis ${ B = (v_{1},v_{2}): [T_{A}]^{B}_{B} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} }$ (Reflexion in ${ LH(v_{1}) }$)

${ T: V \to V }$ über ${ \mathbb{R} }$ mit ${ \dim V = 2, \det T = -1 \implies \exists }$ orthonormale Basis ${ B }$ sodass
$$
[T]^{B}_{B} = \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}
$$

### Satz 18.2.5
${ A \in SO(3) \implies 1 \in \sigma(A), \exists B = (v_{1},v_{2},v_{3}) }$ orthonormale Basis und ${ \theta \in [0,2\pi) }$ sodass
$$
[T_{A}]^{B}_{B} = \begin{pmatrix}
1 & 0 & 0 \\
0 & \cos \theta & -\sin \theta \\
0 & \sin \theta & \cos \theta
\end{pmatrix}
$$

1. ${ -1 \in \sigma(A) \implies \theta = \pi }$
2. ${ -1 \notin \sigma(A) \implies \theta \neq \pi }$

---

# 19 Tensorprodukte von Vektorräumen
## 19.1 Die äussere direkte Summe zweier Vektorräume
### Definition 19.1.1: Äussere direkte Summe / Bemerkung 19.1.3 / Lemma 19.1.4
${ V \oplus W }$ mit Elementen ${ (v,w) \in V \oplus W, v \in V, w \in W }$ und ${ \alpha(v_{1},w_{1}) + (v_{2},w_{2}) := (\alpha v_{1}+v_{2},\alpha w_{1}+w_{2}) }$.

Damit ist konkret ${ V \oplus W \cong V \times W }$ und auch ${ V \oplus V \cong V \times V \cong V^{2} }$.

${ \dim(V \oplus W) = \dim V + \dim W }$

${ V,W \leq V \oplus W }$ mit kanonischen Injektionen

## 19.2 Komplexifizierung
### Definition 19.2.2: Komplexifizierung / Bemerkung 19.2.3 / Beispiel 19.2.5
Komplexifizierung ${ V_{\mathbb{C}} }$ über ${ \mathbb{C} }$ von ${ V }$ über ${ \mathbb{R} }$ ist ${ V \oplus V }$ mit ${ (a+bi)(u,v) := (au-bv,bu+av) }$.

1. ${ i(u,v) = (-v,u) }$
2. ${ V \leq V_{\mathbb{C}} }$ mit kanonischer Injektion ${ \iota: v \mapsto (v,0_{V}) }$

${ (\mathbb{R}^{n})_{\mathbb{C}} \cong \mathbb{C}^{n} }$

### Satz 19.2.3 / Bemerkung 19.2.7
${ V = \left\{ 0 \right\} \implies V_{\mathbb{C}} = \left\{ 0 \right\} }$ und ${ V \neq \left\{ 0 \right\} }$ mit ${ \mathbb{R} }$-Basis ${ B = \left\{ v_{1}, \dots, v_{n} \right\} \implies B_{\mathbb{C}} = \left\{ (v_{1},0_{V}), \dots, (v_{n},0_{V}) \right\} }$ ist eine ${ \mathbb{C} }$-Basis von ${ V_{\mathbb{C}} }$ mit ${ \dim_{\mathbb{C}} V_{\mathbb{C}} = \dim_{\mathbb{R}} V }$.

${ B_{\mathbb{R}} = \left\{ (v_{1},0_{V}), \dots, (v_{n},0_{V}), (0_{V},v_{1}), \dots, (0_{V},v_{n}) \right\} }$ ist eine ${ \mathbb{R} }$-Basis von ${ V_{\mathbb{C}} }$ mit ${ \dim_{\mathbb{R}} V_{\mathbb{C}} = 2 \dim_{\mathbb{C}} V_{\mathbb{C}} }$.

### Theorem 19.2.8
${ T: V \to W \implies \exists! T_{\mathbb{C}}: V_{\mathbb{C}} \to W_{\mathbb{C}}: \imath_{W} \circ T = T_{\mathbb{C}} \circ \imath_{V} }$

### Lemma 19.2.9
${ [T_{\mathbb{C}}]^{B_{\mathbb{C}}}_{C_{\mathbb{C}}} = [T]^{B}_{C} }$ und ${ \chi_{T}(x) = \chi_{T_{\mathbb{C}}}(x) }$

## 19.3 Vektorräume über einer freien Menge
### Definition 19.3.1: Vektorraum über Menge / Bemerkung 19.3.2
${ S }$ Menge, ${ K }$ Körper. Der von ${ S }$ erzeugte ${ K }$-Vektorraum ${ K(S) }$ ist definiert mit:
- Elemente von ${ K(S) }$ sind formale Summen: ${ v = \sum_{s \in S} \alpha_{s} \cdot s }$
- Addition: ${ \sum_{s \in S} \alpha_{s} \cdot s + \sum_{s \in S} \beta_{s} \cdot s = \sum_{s \in S} (\alpha_{s} + \beta_{s}) \cdot s }$
- Skalarmultiplikation: ${ \lambda \left( \sum_{s \in S} \alpha_{s} \cdot s \right) = \sum_{s \in S} (\lambda\alpha_{s}) \cdot s }$

${ | S | < \infty \implies \dim K(S) = | S |, S }$ ist eine Basis von ${ K(S) }$.

## 19.4 Konstruktion des Tensorproduktes
### Definition 19.4.1: Tensorprodukt / Bemerkung 19.4.2 / Bemerkung 19.4.3 / Beispiele 19.4.4
${ V,W }$ endlich-dimensional über ${ K }$ mit Basen ${ v_{1}, \dots, v_{n} }$ und ${ w_{1}, \dots, w_{m} }$. Wir definieren ${ S := \left\{ v_{i} \otimes w_{j} \mid 1 \leq i \leq n, 1 \leq j \leq m \right\} }$ und das Tensorprodukt ${ V \otimes_{K} W := K(S) }$. Elemente: ${ \sum_{i,j} a_{ij} \cdot v_{i} \otimes w_{j}, a_{ij} \in K }$.

${ \dim(V \otimes W) = \dim V \dim W }$

${ v \otimes w }$ heisst reiner Tensor.

1. ${ K \otimes K \cong K }$ mit Basis ${ 1 \otimes 1 }$
2. ${ V \otimes K \cong V }$
3. ${ V \otimes \left\{ 0 \right\} \cong \left\{ 0 \right\} }$

### Satz 19.4.7 / Satz 19.4.9
${ U,V,W }$ Vektorräume, ${ \Phi: V \times W \to U }$ bilinear ${ \implies \exists! \phi: V \otimes W \to U }$ linear, sodass ${ \phi \circ \otimes = \Phi }$.

[[#Definition 19.4.1 Tensorprodukt / Bemerkung 19.4.2 / Bemerkung 19.4.3 / Beispiele 19.4.4]] ist unabhängig von der Wahl der Basen.

### Lemma 19.4.11
1. ${ U \otimes (V \otimes W) \cong (U \otimes V) \otimes W }$
2. ${ U \otimes (V \oplus W) \cong (U \otimes V) \oplus (U \otimes W) }$

### Satz 19.4.12 / Lemma 19.4.13
${ T: V \to V', S: W \to W' \implies \exists! T \otimes S: V \otimes W \to V' \otimes W' }$ sodass ${ (T \otimes S)(v \otimes w) = Tv \otimes Sw }$.

${ T: V \to V, S: W \to W \implies \mathrm{Tr}(T \otimes S) = \mathrm{Tr}(T) \cdot \mathrm{Tr}(S) }$

## 19.5 Komplexifizierung revisited
### Satz 19.5.1
${ \gamma_{V}: V_{\mathbb{C}} \to V \otimes_{\mathbb{R}} \mathbb{C}, (u,v) \mapsto u \otimes 1 + v \otimes i }$ ist ein Isomorphismus von ${ \mathbb{R} }$-Vektorräumen.

### Definition 19.5.3: ${ \mathbb{C} }$-Skalarmultiplikation auf ${ V \otimes_{\mathbb{R}} \mathbb{C} }$ / Lemma 19.5.5
${ \beta \cdot (v \otimes \alpha) := v \otimes \beta\alpha }$

${ \dim_{\mathbb{C}} V \otimes_{\mathbb{R}} \mathbb{C} = \dim_{\mathbb{R}} V }$

### Satz 19.5.6
${ \gamma_{V} }$ aus [[#Satz 19.5.1]] ist ein Isomorphismus von ${ \mathbb{C} }$-Vektorräumen.

## 19.6 Tensorprodukte linearer Abbildungen
### Satz 19.6.1 / Lemma 19.6.3
[[#Satz 19.4.12 / Lemma 19.4.13]]

### Lemma 19.6.4 / Satz 19.6.5
${ (S_{1} \otimes S_{2})(T_{1} \otimes T_{2}) = (S_{1}T_{1}) \otimes (S_{2}T_{2}) }$

${ (T \otimes S)^{-1} = T^{-1} \otimes S^{-1} }$

### Theorem 19.6.7
${ T: V \to V, S: W \to W \implies \det(T \otimes S) = \det(T)^{\dim W} \cdot \dim(S)^{\dim V} }$

## 19.7 Tensorprodukte und duale Abbildungen
### Theorem 19.7.1 / Satz 19.7.3 / Korollar 19.7.5
${ \exists! \chi: U^{*} \otimes V^{*} \to (U \otimes V)^{*} }$ sodass ${ \chi(f \otimes g)(u \otimes v) = f(u)g(v) }$

${ \exists! \Theta: U^{*} \otimes V \to \mathrm{Hom}(U, V) }$ sodass ${ \Theta(f \otimes v)(u) = f(u)v }$

${ \exists }$ kanonischer Isomorphismus ${ \mathrm{End}(V) \cong V \otimes V^{*} }$

## 19.9 Das symmetrische und alternierende Produkt
### Bemerkung 19.9.1
${ V^{\otimes r} := \underbracket{ V \otimes V \otimes \dots \otimes V }_{ r \text{ mal} } }$

${ \sigma \in S_{r}, v_{1} \otimes v_{2} \otimes \dots \otimes v_{r} \in V^{\otimes r}: \sigma(v_{1} \otimes v_{2} \otimes \dots \otimes v_{r}) := v_{\sigma(1)} \otimes v_{\sigma(2)} \otimes \dots \otimes v_{\sigma(r)} }$

### Definition 19.9.2: Symmetrisches Produkt / Beachte 19.9.4
${ \mathrm{Sym}^{r}V := \left\{ v \in V^{\otimes r} \mid \sigma(v) = v, \forall \sigma \in S_{r} \right\} \leq V^{\otimes r} }$

### Definition 19.9.6: Symmetrisches Produkt als Quotient / Satz 19.9.7
${ U = LH\left\{ v-\sigma(v) \mid v \in V^{\otimes r} \right\} \leq V^{\otimes r}, S^{r}V := V^{\otimes r} / U }$

${ \mathrm{Sym}^{r}V \cong S^{r}V }$

### Theorem 19.9.10
${ \dim V = n \implies \dim \mathrm{Sym}^{r}V = \binom{n+r-1}{r} }$

### Definition 19.9.12: Alternierendes Produkt
${ \mathrm{Alt}^{r}V := \left\{ v \in V^{\otimes r} \mid \sigma(v) = \mathrm{sgn}(\sigma)v, \forall \sigma \in S_{r} \right\} }$

### Satz 19.9.14
${ V \otimes V \cong \mathrm{Sym}^{2}V \oplus \mathrm{Alt}^{2}V }$

### Definition 19.9.15: Alternierendes Produkt als Quotient / Notation 19.9.17 / Lemma 19.9.18 / Satz 19.9.19
${ U = LH\left\{ v-\mathrm{sgn}(\sigma)\sigma(v) \mid v \in V^{\otimes r} \right\} \leq V^{\otimes r}, \wedge^{r}V := V^{\otimes r} / U }$

${ \wedge: V^{\otimes r} \to \wedge^{r}V }$ als natürliche Projektionsabbildung mit ${ \wedge(v_{1} \otimes \dots \otimes v_{r}) = v_{1} \wedge \dots \wedge v_{r} }$.

${ \wedge }$ ist ${ r }$-linear und alternierend.

${ \mathrm{Alt}^{r}V \cong \wedge^{r}V }$

### Theorem 19.9.20
${ \dim \mathrm{Alt}^{r}V = \binom{n}{r} }$

### Korollar 19.9.22
- ${ r > \dim V \implies \wedge^{r}V = \left\{ 0 \right\} }$
- ${ \dim\wedge^{n}V = 1 }$ mit ${ v_{1}, \dots, v_{n} }$ Basis von ${ V \implies v_{1} \wedge \dots \wedge v_{n} }$ Basis von ${ \wedge^{n}V }$

### Theorem 19.9.24
${ v_{1}, \dots, v_{n} }$ Basis von ${ V, A = (a_{ij}) \in M_{n \times n}(K) }$ mit ${ w_{j} := \sum_{i=1}^{n} a_{ij}v_{i} \implies w_{1} \wedge \dots \wedge w_{n} = \det A \cdot v_{1} \wedge \dots \wedge v_{n} }$.