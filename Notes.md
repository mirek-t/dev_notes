> # 11 sierpień 2021

## Slack

1. Snippet żeby pisać kod w komunikatorze; view raw: żeby wyświetlić surowy kod

## EMMET:

1. HTML/SYNTAX/CHEET SHEET - ABBREVIETIONS, skróty pisania html

## Protokoły:

1. https
2. ftp
3. do maili: SMTP, POP3, IMAP

## ISP

1. dostawca internetu

## HTML

1. znacznik "a" w html oznacza anchor
2. są znaczniki liniowe (zajmuje tylko tyle ile treść) i blokowe (zajmuje cały wiersz)
3. !DOCTYPE html informacyjnie dla przeglądarki
4. > DOM document object model - zapewnia reprezentację struktury dokumentu oraz określa, w jaki sposób odnosić się do tej struktury z poziomu skryptu.
5. HTML ma dwie gałęzie HEAD i BODY
6. title ma gałąź tekstową, title jest dzieckiem HEAD, a HEAD HTML
7. LANDING PAGE - strona jednostonicowa próbująca sprzedać jakąś rzecz
8. metadane - dodatkowe dane dla przeglądarki

## Narzędzia webmasterskie

1. copy selector css
2. ctrl+f i wpisujemy selektor

## VSC

1. ctrl + "/" - komentuje zaznaczony obszar w kodzie w VSC

## CSS

1. CSS dinner strona do ćwiczeń selektorów - https://flukeout.github.io/
2. "spacja" w selektorze to wybieramy dzieci znacznika
3. ">" to dziecko pierwszego poziomu
4. ^ - karet - coś się zaczyna
5. $ - coś się kończy
6. "\*" - coś zawiera
7. w css nie da się zaznaczyć kuzynów/braci lewostronnych - chodzi o optymalizację
8. "~" - znak tyldy, na klawie:klawisz tyldy i spacja (nie dwa razy klawisz tyldy i backspace), wybiera wszystkie takie same elementy następujące po jakimś

### ważność nadpisywania w CSS

0. > Im coś dokłądniej opisane tym jest wyżej w hierarchi pokazywania
1. > poziom to selektory
2. > poziom inline styles
3. > poziom to java script

#

> # 14 sierpień 2021

## Powtórka

1. HTML - hypertext markap language
2. CSS cascade style sheet
3. JS java script
4. Możemy w HTML tworzyć własne znaczniki
5. > Box model tz. każdy znacznik ma content xy, padding xy, border xy, margin xy i position całości.

## Zajęcia

1. najpopularniejsza wyszukiwarka w Rosji - Yandex
2. > B\_\_E--M - CSS BEM Block Element and Modifiers -http://getbem.com/introduction/
3. CSS reset -> normalize.css - https://necolas.github.io/normalize.css/
4. > badania od google - przyciski powinny wynosić min chyba width 45px
5. > Maksymalna szerokość strony 1200px
6. Strona nie powinna wynosić więcej niż 1200px;\
   Łączymy max-width: 1200px; z width: 100%;
7. Czcionki o jednakowej szerokości znaków - monospace/monotypiczne
8. > Neutralizacja jakiegoś pola: this.setAttribute("onclick",";")
9. > onclick="location.reload()" - wczytuje stronę ponownie

#

> # 18 sierpień 2021

## Powtóka

1. znaczniki HTML
   > Semantyczne: header, footer, main, aside\
   > Niesemantyczne: div, span
2. element liniowy ma problemy z padingami góra dół, display - inline-block; rozwiązuje problem.
3. atrybut target="\_blank" otwiera link w nowej karcie

## Zajęcia

1. Layout - układ elementów na stronie
   > Budowanie strony skłąda sie z 2 etapów: layout i komponenty
2. CSS grid - cheat-sheet - https://css-tricks.com/snippets/css/complete-guide-grid/ \
   gra greedGarden - https://cssgridgarden.com/#pl
3. CSS flex-box cheat-sheet- https://css-tricks.com/snippets/css/a-guide-to-flexbox/ \
   gra ucząca flexbox - https://flexboxfroggy.com/#pl
4. Jeśli mamy problem ze zliczeniem marginesu możemy u rodzica ustawić padding i box-sizing: border-box;
5. Iconfinder - baza icon do wykorzystania w projektach - https://www.iconfinder.com/

#

> # 23 sierpień 2021

## Zajęcia

1. GIT & GitHub
2. > Terminal commend

- mkdir tworzy nowy folder
- touch - tworzy nowy plik w terminalu; komenda - touch .gitignore
- git init - inicjuje repozytorium w folderze lokalnie
- ls - al wyswietla wszystko co jest w folderze
- pwd - print working directory - ścieżka w której jesteśmy
- vim "nazwa pliku" tworzy plik i przechodzi do jego edycji w edytorze vim
- i w vim przechodzi do trybu insert
- wim esc wychodzi z pisania
- :wq - write quit w vim
- git status punk wyjścia dla git'a
- git add "nazwa pliku"
- git commit -m "tutaj komentarz"
- git commit -am "tutaj komentarz" - dwie komendy powyżej w jednej linii
- trzeba stworzyć repozytorium remote z taką samą nazwą jak lokalne
- > git remote add origin "skopiowana ścieżka repo z github" - linkuje i wysyła lokalne repozytorium na remote - zgodzić się na użycie kluczy za pierwszym razem
- git push -u origin "nazwaBrancha" - te dwie komendy jeszcze obczaić jak to działa
- ctrl + c wyłącza komende
- cat czyta pliki np. README.me
- git log czyta historię zmian
- vim q! twardo wychodzi z edytora vim
- są dwa typy plików txt, bin
- git branch -a wszystkie branche
- > git checkout -b SP-001_featureName - tworzy i przełącza na nowy branch o podanej nazwie
- > git push -u origin "branch_name" - wysyła branch na remote (tworzy branch na remote o tej samej nazwie na remocie)
- > git merge "nazwaBrancha" - musimy być na branchu na który chcemy mergować, mergujemy branche lokalnie, trzeba jeszcze git push mastera wysłać na remote
- git fetch - synchronizuje wszystko z remota na local po zmianach innych bez musu zmiany na master, pobiera wszystko zewsząd

3. https://git-scm.com/ - pobranie git'a
4. https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent - jak tworzyć i parować klucz SSH

#

> # 25 sierpień 2021

## Powtóka

1. W znaczniku html w środku mogą być tekst albo inne tagi
2. Tylko jedna spacja jest widziana w html, entery nie są widziane
3. Atrybut alt - czytają go algorytmy, SEO bierze pod uwagę, wyświetla tekst, który zastępuje niewyświetlony obraz
4. a - anchor, kotwica po polsku - link - znacznik html
5. Flexbox - display: flex; po tej komendzie dzieci ułożą się w jednej linii, defalutowo jest flex-wrap: nowrap; ściśnie komponenty tylko żeby utrzymać je w jednej linii
6. order - wagowo ustawia element w osi z, default 0.
7. > text-align działa na wszystkie liniowe elementy więc działa też na img
8. float jest to stara metoda pozycjonowania pozwalająca oblać np. obraz tekstem.
9. Origin strony 0.0 (osi) mozemy go zmienić.
10. Elementy blokowe ustawiają się pod sobą z zasadą od lewej do prawej i od góry do dołu bo zajmuja cały wiersz
11. Elementy liniowe ustawiają się obok siebie z taką samą zasadą lewa prawa, góra dół. A nastęny element blokowy ustawi się w kolejnej linii
12. > Repozytorium - biblioteka kodu
13. > Repo - local - private; remote - source of truth;
14. Nigdy nie pracujemy na branchu master.

## Zajęcia

1. https://www.w3schools.com/html/html_form_input_types.asp - jednak jest to dobra strona do wiedzy o programowaniu
2. git ignore - wyłącza automatyczne ignorowanie pliku z projektu

#

> # 27 sierpień 2021

## Powtóka

1. Wzorzec projektowy - MVC, model - html, view - CSS, Controler - JS
2. Ważność selektorów: dolne nadpisują górne, tagName, .class, #id, inline, JS. !important zmienia specyfikę bądź 2 seektory użyte razem
3. nie da się szukać w lewą stronę, po dzieciach byłoby nie wydajnie
4. tag table ma znaczenie semantyczne że zawiera dane tabelaryczne
5. SaaS - Software as a Service - Facebook, GitHub
6. gitlab - git z możliwością instalacji na kompie prywatnym i to jest tylko nasze bezpieczne
7. .gitignore - blob, folder/\*png

## Zajęcia

1.  Najbezpieczniejszy setup dla ustawiania zdjęć na stronie:

        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;

#

> # 1 wrzesień 2021

## Zajęcia

1.  Progressive enhancment / Graceful degradation - jak strona ma być dostęna na te urządzenia wszystkie to musimy się skupić na telefonie bo większość ludzi używa telefonów do przeglądania internetu - mobline first - corowe featury tworzymy by wyglądały dobrze a potem rozwijamy te funkconalności, gracefull degradation jest odwrotnością ale ostrożnie z używaniem tego bo jak nie są potrzebne te featury to nie były potrzebne
2.  zmiana nazwy w teminalu (w rzeczywistości nie zmianiamy nazwy a kopiujemy do innego pliku z nową nazwa)
    mv ./preprocesor_sass ./preprocessor_sass
3.  wygenerowanie pliku css z scss za pomoca preprocesora i komendy sass input output --watcher -> w package.json w script tworzymy parę

        "start": "sass ./src/scss/main.scss ./dist/styles/main.css --watch"

        i to pozwala uruchomic demona w terminalu komendą npm start

4.  > SASS syntax i tutoriale z https://www.sass-lang.com/, przerobić: apersand &, interpolacja #{}, @import, @export, @include, @mixin

> # 2 wrzesień 2021

## Powtóka

1. rzeczy w folderze dist (od distribution) nie ruszamy, dopisujemy go do .gitignore
2. map mapuje plik css i przez to pokazuje w narzędziach deweloperskich która linijka jest zła oraz w terminalu wskazuje na błędy

## Zajęcia

1.  musisz jak wejdziesz w Network w konsoli odświerzać za każdym razem ctrl+r
2. >Spisać kroki jakie się robi podczas budowania projektu

> # 8 wrzesień 2021

## Powtóka

1. > tag -> select - znacznik html z możliwościami option

```html
<select name="wybor" id="wybor">
   <option value="first">wybor</option>
   <option value="second">jazda</option>
   <option value="third">poprzeczka</option>
</select>
```

2. > atrybuty walidacyjne w html??
3. GIT - system kontroli wersji
4. @mixin - domieszka, łączenie w jedną całość

## Zajęcia

1. storybook - open source tool - budowanie komponentów UI
2. mixin podobna do funkcji nie zwraca wartości, wstawia zawartość

> # 10 wrzesień 2021

## Powtóka

1.  mapa - tworzenie: nazwa mapy, dwukropek, nawiasy okrągłe i w nich klucz w cudzysłowiach dwukropek wartość, pary są oddzielane przecinkami
2. repozytorium -> biblioteka kodu
3. BEM -> Block to odpowiednik Komponentu
4. czcionki webfonty

## Zajęcia

1.  pętla @each i @if w Sass jest control flow'em, pozwala modyfikować sposób w jaki przeglądarka czyta kod
2.  funkcje wbudowane w CSS: url(), rgb(), rgba(), calc(), rotate()
3.  funkcje wbudowane w SASS: lighten()
4.  przy ładowaniu czcionek dodajemy !important żeby ktoś kto zmienił czcionke w przegladarce nie nadpisał tego stylu
    > 5.  czas 3.33 przeslychaj o co chodzi z tym selektorem z mixin
5.  co znaczy folder dist?? -> distribution
6.  żeby nie było konfliktu podczas merge należy dograć do naszego brancha master komendą:

         git merge master

7.  json - java script object notation

#

> # 15 wrzesień 2021

## Powtóka

1.

## Zajęcia

1.

#

> # 17 wrzesień 2021

## Zajęcia

1. obsługa VSCode
2. Snippety
3. Skróty klawiaturowe

#

> # 18 wrzesień 2021 - Zajęcia dodatkowe weekendowe z back-endem

## Zajęcia

1. npm i - instaluje wszystkie pliki z package .json jeśli nie poda się mu dokładnie co ma zainstalować
2. npm i sass -D - instaluje devDependencies instaluje lokalnie, a npm install -g sass - instaluje globalnie i od tego gdzie się instaluje sass i ścieżki będą inne
3. npm init -y
4. Konsola w przeglądarce:

- Elements -> HTML, CSS
- Console -> JS
- Network -> HTTPS 200/304/404
- Source -...
- Performanace, Memory -> optyalizacja przeglądarki

5. Styles - pokazuje wszystkie style jakie ma element -> do debugu
6. Computed zawiera wszystkie styla FINALNE
7. Figma składa się z warstw, to co widać to widok "z góry", warstwy można blokować, żeby nie przesówać bez intencji, wysokości i wymiary podawane są w px, w inspect jest CSS
8. najbardziej zawansowany style-guide używany z dużymi frameworkami storybook.js.org
9. smashingmagazine.com
10. demon z nazwą "build" i flagą --style compressed??

#

> # 19 wrzesień 2021 - Zajęcia dodatkowe weekendowe z back-endem

## Zajęcia

1.

#

> # 22 wrzesień 2021

## Zajęcia

1. bootstrap - 3 sposoby podpięcia:

- cdn
- source_files
- npm

  > ## Bootstrap

  > https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

1. CDN - content delivery network

- HTTP (hypertext transfer protocol)

  - 1.1 ograniczona ilość requestów z tej samej domeny w tym samym czasie
  - 2.0 nie ma ograniczeń

  MVC - wzorzec projektowy architektoniczny

  | Model  | View | Controller |
  | ----------------------------------- | --------------------------------------- | ---------------------------------------- |
  | Dane (struktura danych w aplikacji) | Warstwa prezentacji, jak to ma wyglądać | Logika, czyli co się kiedy powinno dziać |
  | HTML                                | CSS/Sass                                | JavaScript                               |

2. markdown .md -> syntax

# headline 1 level

## hdl 2

### hdl 3

#### hdl itd

---

1. item
2. item
3. item
4. item
   - sub item
   - sub item

Można pisać tekst

linki:
[google.com](Kliknij)

Obrazki:

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

```html
<p>Lorem</p>
```

```javascript
console.log("Dog");
```

| CRUD     | Create |   Read |    Update | Delete |
| -------- | -----: | -----: | --------: | -----: |
| REST API |   POST |    GET | PUT/PATCH | DELETE |
| SQL      | INSERT | SELECT |    UPDATE | DELETE |

> tekst wyróżniony

#

> # 23 wrzesień 2021

## Powtóka

1.

## Zajęcia

1.

#

> # 29 wrzesień 2021

## Zajęcia

1. Projekt Agency - Kod formularza html z labelkami 22-29wrzesień21
2. Modal - musi posiadać id i klasę modal (bootstrap), a element który się do niego odwołuje atrybuty:

```html
data-bs-toggle="modal" data-bs-target="#to-id"
```

#

> # 06 październik 2021 - JavaSript

## Zajęcia

1. 2015r.

- ES2015 (ES6)
- ES2021 (ES12) aktualnie najnowsza - wersje wychodzą gdzieś przełom czerwiec/lipiec 

2. Język interpretowany z just in time compilation

- interpretowane: wykonywana jest linijka po linijce, od góry do dołu, od prawej do lewej
- kompilowane: modyfikacja kodu naszego do kodu maszynowego (binary)

3. > Hoisting - przenoszenie deklaracji zmiennych stworzonych za pomocą słowa kluczowego var, deklaracji funkcji (nie wyrażeń funkcyjnych), deklaracji class na górę aktualnie przetwarzanego zasięgu.

```javascript
//kod napisany
console.log(w1);
var w1 = 42;

// tak to widzi interpreter
var w2;
console.log(w2);
w2 = 42;
```

4. Zmienne
   \ | var | let | const
   ---: | :---: | :---: | :---:
   redeklaracja | X | 0 | 0
   reinicjalizacji | X | X | 0
   hoisting | X | 0 | 0
   scope |funkcyjny | blokowy | blokowy

>Deklaracja to przypisanie zmiennej miejsca w pamięci (kontenera) np. let x, a inicjalizacja to przypisanie tej zmiennej wartości, np. x = 42;

5. Funkcje:

- funkcje nazwane
- funkcje anonimowe
- arrow function (funkcja strzałkowa, anonimowa)

> deklaracja funkcji jest hoistowana

6. Syntactic sugar -> lukier składnowy

- to nie jest nowa funkcjonalnośc, tylko dodatkowa składnia do czegoś co istnieje

7. Control flow

- kod jest interpretowany od góry do dołu, ale jeżeli chcem wykonać kod kilka razy bądź w ogóle to używamy do tego stosownych narzędzi np. if statement lub pętle (loop).

8. Rodzaj kodu

- imperatywne - mówimy jak coś zrobić
- deklaratywne - co chcemy mieć, a nie jak to zrobić

9. filter() - zwraca wynik operacji

```javascript
[1, 2, 3, 4].filter((item) => {
  return item % 2 === 0;
});
```

10. reduce()

```javascript
reduce(acc, cur);
```

11. mapowanie - transformujemy jeden rodzaj danych na inny

```javascript
[1, 2, 3, 4].map((item) => item * 2);
```

12. flat() - zrzuca do jednego poziomu tablice

```javascript
[[1, 2], 3, 4].flat();
```

#

> # 07 październik 2021

## Zajęcia

1. cloneNode - referencja-HTML.cloneNode(true) - klonujemy cały węzeł html
2. toggle na classList wykonuje operacje dodania bądź usunięcia klasy na wężle. x.xlassList.toggle("lol") - w zależności czy jest to usówa bądź dodaje taką klasę do węzła.
3. object.classList - zwraca tablicę klas obiektu (elementu DOM)
4. appendChild(jakaś referencja do html) - x.appendChild(referencja/createElement("div")...etc.) - doda do struktury DOM nowy węzeł
5. remove() - usunie np. klasę z listy. x.classList.remove("hidden") - usunie klasę "hidden" z tablicy klas danego elementu
6. evt.target.value - w tym przypadku wartość pola wskazanego przez event np. inputu. 
7. evt.preventDefault(); - żeby ne wystęowały w przeglądarce obsługę eventy natywne wbudowane w przeglądarkę - zostaje zablokowana obsługa eventów defaultowych
8. querySelector można stosowac na węzłąch DOM np. lista.querySelector(""), nie tylko na całym dokumencie

#

> # 13 październik 2021

## Powtóra 

1. var ma zasięg funkcyjny czyli ciało funkcji ogranicza jego widoczność, blok nie ogranicza. 
2. let ma zasięg blokowy, blok ogranicza jego widoczność
3. Global Execution Context 00:50:00 wyjaśnienie, stos, kolejka, host, node.js
4. nawiasy przy funkcji wywołują ją od razu - wywołanie funkcji
5. nazwa funkcji może skłądać się z liter i cyfr, $, _ (underscore), przy czym nie może zaczynac się od cyfr, pisana lowerCamelCase, musi być czasownikiem bądź akcją

## Zajęcia

1. MVC - model architektoniczny - design pattern - maintenence jest dużo prostszy 80% czasu życia aplikacji
2. deklaration - deklaracja funkcji - function(){}, invocation - wywołąnie funkcji - funkcja()
3. parametry w funkcji: pozycyjne, nazwane. Pozycyjne czyli tak jak podamy parametry funkcji tak trafią do jej deklaracji przy wywołaniu. Czyli pierwszy na pierwszy, drugi na drugi itd. Błędem jest zostawienie pustego miejsca i pisanie od kolejnego ( , arg). A nazwane nie wyjaśnił >?????????????????????????????????????????????????????
4. równa się ("=") w parametrach funkcji oznacza defaultowe przypisanie wartości argumentowi jeśli nie został podany przy wywołaniu w argumentach. function concat(a="lol", b=0){return a + b} ::: concat() ::: wynik "lol0"
5. spread operator vs. rest operator -> rest operator ... (trzy kropki) -> zebranie dowolnej ilości argumentów, zamienia parametry na tablice

```js
concatenate(...args) { return args.reduce((acc, cu) => acc + cu); }
console.log(concatenate(1, 2, 3, 4, 5));
```

wyniekiem jest 15.

6. x.concat() - łączy stringi ale też złącz elementy tablic
7. Set (new Set([..arrg])) jest typem danych ktore nie powtarza takich samych elementów, zachowuje jeden unikalny. Ma inne metody niz tablica.
8. Funkcje na symmetrical difference, union, interference tablic 2:50:00
9. new Date - data w JS jest pobierane z systemu operacyjnego co jest bardzo niebezpieczne
10. 

#

> # 14 październik 2021

## Powtórka

1. Tylko 1 use case kiedy możemy używać var w nowoczesnym kodzie: kiedy zasięg blokowy nie wystarcza i potrzebujemy użyć zasięg funkcyjny. Wg. styleguida nie powinno się używać var.
2. Funkcja to zbiór instrukcji, której celem jest reużywalność. Są 3 funkcje: nazwane, anonimowe, arrow function (też anonimowa). Funkcja anonimowa nie ma nazwy. Deklaracja funkcji wygląda:
```javascript
//3 RODZAJE FUNKCJI
//nazwana
function name (optional_arg){
   //fn body
   return 42 //(value)
}

//anonimowa
function (optional_arg){
   //fn body
   return 42 //(value)
}

//arrow function / fat arrow
(optional_arg) => {
   //fn body
   return 42 //(value)
}

//arrow function / fat arrow z implicit return (słowo return domyślnie, brak w składni, jeśli w jednej linijce jest zapisane to też nie trzeba {})
(optional_arg) => 42; //(value)
```
3. argumenty w funkcji: są pozycyjne, wstawiane po przecinku, ilość argumentów: 0+, mają default value (po =), ...rest operator (argumenty przedstawia jako tablicę), istnieje takie coś jak: arguments
```Java Script
//arguments
function elo(){
   console.log(arguments);
}
elo(1, 2, 3, "ala")
//wynikiem console.log będzie obiekt z podanymi kluczami jako cyfry liczone od 0 z wartościami podamymi jako argumenty
//{'0' : 1, '1' : 2, '2' : 3, '3' : 'ala'}
function elo2(...args){
   console.log(args);
}
elo2(1, 2, 3, "ala")
//wynikiem console.log będzie tablica z podanymi wartościami jako argumenty
//[1, 2, 3, "ala"]
```
4. Funkcja zwraca undefined jeśli nie przypiszemy czegoś do return
5. Funkcje zagnieżdżone (domknięcia/clousures), tworzą odmienne środowiska leksykalne. Te funkcje mają dostęp do zmiennych w funkcji je posiadających. Funkcja domykające nie mogą być wywołane samodzielnie. Pozwala to na taką składnie: 
```js
function x(wartosc1){
  return function y(wartosc2){
    return wartosc1 + wartosc2;
  }
};

console.log(x(8)(2));
//wynikiem będzie 10;

let podstawa = x(10);
console.log(podstawa(5));
//wynikiem będzie 15;
```
6. Nazwa funkcji przyjmuje pewne zasady i przyjmuje pewne konwencje:
- pisane lowerCamelCase, musi opisywać czynność bądź być czasownikiem
- składa się z liter, cyfr, "_" i "$", ale nie może zaczynać się od cyfr


## Zajęcia

1. Istnieją dwa mode'y w JS: quirks mode, strict mode w JS. Domyślny jest quirks mode. W strict mode var jest nieredeklarowany. Oznacza się na początku pliku gdzie chcemy żeby strict mode zaczął działać i od tego momentu nie wszystkie feature działąją m.in. nie można redeklarować var'a.
>TS (TypeScript) defaultowo działa w Strict Mode i nie ma "tych dziwnych zachowań".
2. Kyle Simpson - you don't know JS - książka za darmo w necie
   > 3. Stan aplikacji i persysytencja aplikacji (miejsc w przeglądarce jest sporo, czyli miejsc w przeglądarce gdzie możemy zapisywać dane aplikacji)
3. Application w Konsoli systemowej - tam są przechowywane dane o stanie. Session storage jest automatycznie czyszczone za każdym razem jak zamkniemy kartę w przeglądarce a Local Storage nie jest czyszczony. Cookies będą omawiane przy node.js. 
```js
localStorage.setItem("klucz", "wartość")//zapisywanie do localStorage
localStorage.getItem("klucz")//odczytywanie z localStorage
localStorage.removeItem("klucz")//usówanie jednego itemu z localStorage
localStorage.clear()//usówanie całego localStorage
```
4. ternary operator - operator trójkowy -> warunek ? true : false
```JS
warunek ? true : false
```
5. Pole classList ma takie metody jak add() oraz remove(), które dodają bądź usówanją klasę tagu:
```js
x.classList.add("text")
x.classList.remove("text")
```
6. - JSON.stringify() - przekształca wartość zmiennej w tekst
   - JSON.parse() - przekształca tekst na to co było wcześniej, np. obiekt, tablice, whatever.

#

> # 20 październik 2021

## Powtórka

1. w standardzie ES6 - ES2015 weszła duża zmiana, doszły let i const; var nie został usunięty ze względu na kompatybilność wsteczną. teraz mamy ES12 - ES2021
2. przy deklaracji zmiennej powinno się wybierać const'a bo nie można go redeklarować, reinicjalizować i przez to łatwiej debugować kod i jest lepsza wydajność programu. Const jest szybszy od let. Defaultowo jest const, a gdy potrzebujemy reinicjalizacji to wtedy zmieniamy na let. Var tylko gdy potrzebny jest zasięg funkcyjny. Redeklaracja w dużych aplikacjach jest niebezpieczna. 
3. Istnieją 2 typy danych: proste (przechowują wartość) i złożone (przechowują referencje do wartości)
- primitive: number, bigInt, string, boolean, symbol, undefined, null - dane proste przechowywane i przekazywane są by value
- complex: object - dane przechowywane i przekazywane by reference
  object: fn, array, wszystko jest "obudowane" obiektem w JS
4. są 3 typy funkcji w JS: nazwana, anonimowa, arrow function

## Zajęcia

1. control flow - sposób wykonywania kodu
2. if to statement (nazewnictwo) - są 3 statementy (if'y) - if, switch, ternary operator (operator trójskładnikowy)
3. pętle: for, for in, forEach, filter, map, reduce, while, do while, some, every, find
4. > API - appliation programming interface, funkcje pozwalające korzystać z zasobów i je przetwarzać aplikacjom

- GUI - graph user interface
- CLI - command line interface

5. `` - template literal string - można w nim umieszczać zmienne w klamrach po znaku $
6. > AJAX - Asynchronous JavaScript and XML -> 1:28:00
7. ES Modules - pozwala nam budować modułowo

- w html musi być type="modules"
- w każdym pliku musi być export (nazwany), bądź export default 'nazwa';
- ES Modules są single tone - może istnieć tylko jedna instancja pliku, jak zaimportujemy plik dwa razy to i tak się raz zaimportuje
- defaultowo działąją w strict mode (nie ma dziwnych funkcjonalności JS)

8. hoisting to przenoszenie na góre aktualnie przetwarzanego zasięgu:

- deklaracji funkcji
- deklaracji zmiennej var
- deklaracji klas.

9. local Storage - zapisujemy tylko tekst, nie usówa state'u po zamknięciu przeglądarki, jest podzielony na domeny (przypisany jeden do domeny), daje nam persystencję czyli trwałość
    > 10. spread operator to co innego niż rest operator
11. cloneNode(true) - kopiuje strukture danych z wszystkimi poziomami; defaultowo 1 poziom
12. addEventListener - dodaje obsługe zdarzenia
13. pętla filter - zwraca true bądź false i odpowiednio to co jest jest przypiane prawdzie
14. .remove - usówa fizycznie HTML
15. Reacting progrming - obserwowanie zdarzenia i wysyłanie zapytania tylko wtedy gdy się zmieni wartość (np. do aplikacji typu stock market)

#

> # 21 październik 2021

## Zajęcia

1. Programowanie to zestaw instrukcji dla procesora
2. Typy danych: Number, BigInt, String, Boolean, Null, Undefined, Symbol, Object
3. OOP, jednak większość jest w paradygmacie funkcyjnym
4. export default pozwala nam wyeksportować jedną rzecz, nazwany pozwala wiele.
5. spread operator ... -> np. spłaszcza tablice do jednej, tzn. usówa nawiasy i zostawia same elementy
6. hostem może być przeglądarka bądź js runtime envinroment (node.js)
   > 7. falsy value => 0, false, undefined, ""; truthy value - każda liczba oprócz 0, true, "jakiś tekst", pusta tablica [] i obiekt {} jest true
   > 8. object destructuring -> const obiekt {x:1,y:2,z:3} -> const {x, y, z} = obiekt; nie trzeba destrukturyzować całego obiektu, można defalutowo dopisywać wartość do zmiennej znakiem "=", można zapisywać wartość klucza do innej nazwy zmiennej po dwukropku, nazwy nie muszą być podawane po kolei
9. JS jest całkowicie synchroniczny, nie posiada timera, te funkcjonalności dostarcza mu host
10. DOM API - Document Object Model - obecnie używamy level 3 - to funkcjonalności tj. querySelector(), getElementById(), appendChild()
11. Istnieje około 60 API z których JS może skorzystać, np. Battery API, Localization API, Payment API (google Pay bądź apple Pay). 
12. Trailing comma - to przecinek za ostatnią parą w obiekcie, JS to czyta, ale JSON tego nie akceptuje
13. dodawanie tekstu w JS - document.createTextNode("text")

#

> # 25 październik 2021

## Powtóka 

1. JS jest językiem synchronicznym, tzn. jest wykonywana jedna rzecz jednocześnie, instrukcje wykonywane są po kolei. Dopuki jena rzecz się nie wykona to kolejna się nie zacznie. Środowisko uruchomieniowe dodaje asynchroniczność do JS.
2. JS jest jednowątkowy (można dodać wielowątkowość w jakiś sposób). Na raz wykonuje się tylko jedna rzecz. 
3. NaN - Not a correct Number - 30/'ala' = NaN
4. Undefined 
```js
var x; 
console.log(x)
// wynik: undefined; nie zainicjalizowana wartość  
```
5. Null 
```js
console.log(x)
// wynik: Null: nie istnieje, nie było deklaracji i zostało wykonane console.log(x)
```
6. Symbol - typ danych który ma niepowtarzalne klucze
7. w obiekcie atrybuty to są zmienne, metody to są funkcje
8. typowanie w JS jest na zasadzie duck typing: "jeśli coś wygląda jak kaczka, zachowuje się jak kaczka, gdacze jak kaczka to jest to kaczka".
9. słówko new wywołuje konstrktor klasy budując obiekt
```js
let a = 23;
console.log(typeof(a));//wynik: number
let b = new Number(13);
console.log(b)://wynik: object
console.log(a==b);//true
console.log(a===b);//false
```
10. dot notation vs. kwadratowe nawiasy - notacja wyciągania zmiennych obiektu po kluczu

```js
const f = {
  name: "x-men",
  age: 18
}

const secret = 'name';

console.log(f.name);//x-men
console.log(f["name"]);//x-men
console.log(f[secret]);//x-men
```

## Zajęcia

1. casting - nazwa procesu zamiany rodzaju typu danych jakiejś zmiennej (przy temacie truthy/falsy value); coercion (koercja) - jest tym samym procesem ale bez naszej ingerencji - sama się zmienia - w JS jest to dozwolone, aczkolwiek jeśli określamy jakiś typ danych to nie chcemy, żeby ona się w trakcie działania programu zmieniała.  
2. jeżeli klucz i wartość są takie same to nie potrzeba pisać obu ale tylko jedną nazwe czyli ala: 'ala' to piszemy tylko ala.
3. indexOf() - zwraca index tablicy na jakim miejscu jest podany w argumentach element.
4. splice(id, 1) - usówa z tablicy wartości od podanej i ile elementów z koleii.
5. parseInt(x, redix) - redix - system liczbowy w jakim ma być przekształcona liczba. parseInt przyjmuje dwa parametry
```js
['10', '10', '10'].map(parseInt);
// wynik: [10, NaN, 2]
//pierwszym parametrem parse int przyjął od tablicy jest przekazane przez metodę map wartość i druga index czyli parseInt(10, 0), ponieważ system zerowy i jedynkowy nieistnieją w pierwszysm przypadku funkcja przyjmuje automatycznie system dziesiętny, w drugim przypadku zwraca NaN, a w 3 10 w systemie dwójkowym wynosi 2.
//powinno być: 
['10', '10', '10'].map(item => parseInt(item));
//wtedy przekazujemy tylko jeden argument:
```
6. Boolean() - konstruktor klasy Boolean który zwraca czy wartość jest true or false
```js
const truthy = [0, 0.0, false, NaN, undefined, {}, [], ""];
truthy.filter(Boolean);
//zwraca tylko truthy value
truthy.filter(item => !Boolean(item));
//zwróci tylko falsy value
```
7. caniuse.com -> do sprawdzania czy featury będą działać w przeglądarkach, webpack sam sprawdza i transpiluje do odpowiedniego kodu
8. Destrukturyzacja - tworzenie zmiennych na podstawie klucza i wartości zawartych w obiekcie, odwołujemy się po kluczu do obiektu i inicjalizujemy wartość przypisaną kluczowi.
```js
//destrukturyzacja
const config = {
  a: 1,
  b: 2
};

const uration = {
  b : 3,
  d : 4
}

// console.log(uration);

const {a, b} = config;
const {c, d} = uration;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//Spread operator of object
const configuration = {...config, ...uration}

console.log(configuration);
```

#

> # 27 październik 2021

## Zajęcia

1. Kiedy kod jest wykonywany to mówimy, że jest w RunTime
2. Kiedy jest w Compilation Time tzn. jest w trybie developmentu - pisania. 
3. JS jest dynamicznie typowany (nie określamy typu danych -> jest określany w RunTime) - system do określania typów danych to "Duck Typing"
4. JS jest weak typing (możemy zmieniać typy danych np. z string na number)
```js
let x = 42;
x = 'ala';
console.log(x);//'ala'
```
5. JS jest singlethreaded - jednowątkowy, zwiększanie wydajności jest słąbe
6. Webassembly - specjalna funkcjonalność hosta pozwalająca uruchamiać inne języki programowania w przeglądarce, na razie tylko języki które mają wbudowany garbage collector mogą być uruchamiane, ale trwają prace nad dodaniem innych języków jak phyton 
7. Garbage Collector - odśmieca, JS ma wbudowany automatyczny garbage collector
8. W React jest "Tree shacking" - oczyszcza kod
9. moduły w ES Modules - funkcjonalność JS do dzielenia aplikacji na pliki:
- są pisane w Strickt Mode,  
- w html musi być w scrypcie dopisane: type="module"
- są singleton -> wzorzec projektowy, design pattern, oznacza, że możemy mieć tylko jedną instancję danego modułu
10. funkcje: 
- declaration 1+ (punkt 11.)
- execution (wywołanie) 0+
11. Można redeklarować funkcje:
```js
// od tego miejsca funkcja x ma pustą deklaracje
function x(){};
x();
// od tego już jest wykonywane dodawanie, działa już inaczej niż poprzednio
function x(){return 1+1};
x();
```
12. Tworzenie eventów, poglądowo jak wywołujemy funkcje na rzecz obiektu:
```js
const event = new Event("build");

let e = {
   addEventListener: (type, cb) => {
      if (type === "build") {
         this.e = callback;
      }
   },
   callback: undefined,
   dispatchEvent: (evt) => {
      if (this.callback !== undefined) {
         this.callback();
      } else {
         console.log("undefined is not a function")
      }
   }
};

e.addEventListener("build", () => console.log("it works"));

setInterval(() => {
   e.dispatchEvent(event);
}, 500);// co 0,5s będzie wywoływany callback 
```
13. This - kontekst w JS (leksykalny bądź dynamicznie bindowany) - kontekst programu, nie jest stały, zależy jak został wykonany, tak się zachowuje
14. Destructuring - stworzenie zmiennych na podstawie obiektu, tabicy
15. Wszytstkie języki obiektowe (phyton, java) są tak zbudowane, że typy danych są reprezentowane "opakowane" jako obiekt, który może posiadać swoje atrybuty i metody. Poniżej funkcja, która jest obiektem i ma swoje pole i metodę. 
```js
function add() {
   return 42;
};

add.secret = "secret jest polem obiektu, czyli zmienną w obiekcie zapisaną pod kluczem secret, a jej wartość to ten tekst"
add.doSmth = () => console.log('It works');

add();
console.log(add.secret);
add.doSmth();
```
16. W destrukturyzacji tablic wymyślamy nazwy zmiennych, dlatego nie ma możliwości zmiany nazw w destrukturyzacji
```js
const x1 = [1, 2, 3, 4];
const [first, second, ...left] = x1;
// to to samo co:
//const first = x1[0];
//const second = x1[1];
//const left = [x1[2], x1[3]], i wszystki pozostałe które będą w tablicy 
```
17. CommonJS - najbardziej popularny system modułów w JS, pochodzi z Node.js. Ekwiwalentem słowa import jest require, a export używa się w troche inny sposób
18.  metadane są potrzebne przeglądarce do renderingu. W sekcji head w html: 
```html
<meta name="vieport" content="width=device-width, initial-scale=1.0" /> 
<!-- bez tej linijki nie zadziała responyswność -->
```
19. metoda tablicy indexOf ma wadę w postaci nie wyszukuje NaN, tzn jeśli w tablicy jest wartość NaN to indexOf zwróci -1. Żeby określić czy NaN jest wartością w tablicy należy użyć metody includes(NaN)
```js
[1,2,3,NaN].indexOf(NaN);
//log  : -1
[1,2,3,NaN].includes(NaN);
//log : true
```
20. metoda splice zwraca wartości w tablicy które usunęła
```js
const y = [1,2,3,4,5].splice(3,2);//1. parametr od którego indexu tablicy ma zacząc, 2. parametr to ile elementów ma usunąć
console.log(y);//log [4,5]
```
21. Legacy code - stary kod pisany bez dobrych praktyk (kod napisany prez kogoś innego)
22. state aplikacji nie może byc globalne, przypadkowe funkcje nie moga go używać oprócz jego metod
23. refaktoryzacja - poprawianie kodu
24. Test-driven development - technika tworzenia oprogramowania opiera się na 3 zasadach, programista pisze test, który na początku nie ma prawa sie wykonać, nastęnie implementuje ten kod i nka ońcu refaktoryzuje do istniejących stndardów: 
24. Test-driven development - technika tworzenia oprogramowania opiera się na 3 zasadach, programista pisze test, który na początku nie ma prawa sie wykonać, nastęnie implementuje ten kod i na końcu refaktoryzuje do istniejących stndardów: 
- test 
- kod (minimalna implementacja, która spełnia test)
- refaktoryzacja (poprawienie kodu)

#

> # 3 listopad 2021

## Zajęcia

### History of asynchronous

1. Callback - function - wykonuje się gdy coś się stanie, np. zostanie wyemitowany event, który jest obsługiwany (callback hell)
```js
const boxRef = document.getElementById("box");
let counter = 0;

const interval = setInterval(() => {
  counter += 2;
  boxRef.style.left = counter + "px";
}, 200);

// console.log(counter); //log: 0 - to jest kod synchrnoiczny wykonuje się przed asynchronicznym 

setTimeout(() => {
  clearInterval(interval);

  counter = 0;
  const interval2 = setInterval(() => {
    counter += 2;
    boxRef.style.top = counter + "px";
  }, 200);

  setTimeout(() => {
    clearInterval(interval2);
  }, 2000);
}, 2000);
```
2. Promise - od 2015r
- zapytanie asynchroniczne do serwera - AJAX - asynchronous javascript and xml (xml -> extended markup language)
- JSON - js object notation
```js
//użycie featch, który jest promise based
fetch("http://api.nbp.pl/api/exchangerates/tables/a/?format=json")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
//stworzenie Promise'a
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Fulfuled");
  }, 2000);

  setTimeout(() => {
    reject("Rejected");
  }, 1999);
});

p1.then((message) => {
  console.log(message);
}).catch((error) => console.log(error));
```
3. Generatory - potrafią zamrażać stan funkcji, wywołuje się je metodą next(), mogą zamrażać się wewnątrz linijki kodu, yield zwraca wartość i zamraża się w danym yieldzie, couroutine (coro) -> współprogram (kiedy generator przyjmuje parametry przekazane do niego jako argument metody next(42).). W zwykłaj funkcji po wykonaniu i zwróceniu wyniku garbage collector niszczy stan funkcji, w generatorach jest on niszczony po ostatnim wykonaniu. Generatory są lazy evaluated - tzn. obliczniea sa wykonywane dopiero na żądanie, gdy poprosimy generator o ich wykonanie, tzn. wywołanie generatora nic nie zwraca dopiero yield. Możemy mieć wiele instancji jednego generatora i w różnych momentach zużywać jego zasoby niezależnie. Generatory trzeba zainstancjonować (stworzyć instancję poprzez przypisaneie generatora do jakiejś zmniennej)

```js
function add(a, b) {
  return a + b;
}
add(2, 4);// ponieważ to jest zwykła funkcja to garbage collector usunie jej stan zaraz po wykonaniu i zwróceniu wartości

function* gen() {
  console.log("1 elo");
  yield 1;
  console.log("2 elo");
  yield 2;
  console.log("3 elo");
  yield 3;
  console.log("4 elo");
}

const g = gen();

console.log(g.next());//{value: 1, done: false}
console.log(g.next());//{value: 2, done: false}
console.log(g.next());//{value: 3, done: false}
console.log(g.next());//{value: undefined, done: true}

function* infiniteLoop() {
  let counter = 0;

  while (true) {
    yield counter;
    counter++;
    if (counter === 3) {
      return "dupa";
    }
  }
}

const iL = infiniteLoop();
console.log(iL.next());
console.log(iL.next());
console.log(iL.next());
console.log(iL.next());
console.log(iL.next());

function* gen() {
  const x = 1;
  const z = yield x;
  yield z;
}

const g = gen();
console.log(g.next());
console.log(g.next(42));
console.log(g.next());
```
---
```js
const k =function* (){
   let counter = 0;

   while (true) {
      yield counter;
      counter++;
   }
}

const g = k(); //instancja generatora

const interval = setInterval(() => {
   const result = g.next();
   console.log(result); 

   if (result.value > 10) {
      clearInterval(interval);// możemy go tu usunąć bo zmienna jest tu widoczna
   }
}, 500);
```
4. Async/Await

### EDD - event driven development
- programowanie oparte na zdarzeniach, gdy sa jakies ingerencje, zdarzenia
- reactiv programing (programowanie oparte na zmianie streamow) - np. Netflix (3 streamy) - data stream (paczka RxJs do pracy ze streamami)

#

> # 6 listopad 2021 - Projekt komercyjny

## Ogólne info

1. ----

> # 8 listopad 2021

## Powtórka

1. Scope - przenoszenie deklaracji zmiennej var, deklaracji funkcji i deklaracji klas na górę aktualnie przetwarzanego zasięgu (w quirks mode).
```js
//Hoisting, działa tak, że kod napisany w ten sposób:
var x= 42;

function doSmth(){
   console.log(y);
   var y =42;
}

console.log(doSmth());

//po hoistingu będzie wyglądał następująco dla interpretera
var x;

function doSmth(){
   var y;
   console.log(y);
   y =42;
}

x= 42;

console.log(doSmth());
```
---
```js
const x = 0;

if (0){ //warunek jest fałszem, blok sie nie wykonuje, ale var ma zasięg funkcyjny dlatego klamerki go nieograniczają
   var y = 666;
   let z = 665;
}

console.log(y);// undefined, deklaracja przeniesiona na górę całego zasięgu
console.log(z);// błąd, nie ma takiej zmiennej 
```
---
```js
//hoisting wyrażeń funkcyjnych
doSmth();

var doSmth = function(){
   console.log("I don't think so");
};
// po hoistingu kod wygląda tak
var doSmth;

doSmth();//doSmth is not a function

doSmth = function(){
   console.log("I don't think so");
};
```
2. Async-Await jest to funkcjonalność JS, a dokładniej jest to sytactic sugar - lukier składnowy dlaczegoś co już istnieje (w tym przypadku dla promisa i generatora razem)
3. promise tworzymy za pomocą słowa kluczowego wywołując konstruktor new Promise, on przyjmuje jako parametr deklaracje funkcji, która z kolei ma dwa parametry - dwie funkcje (resolve, reject), które w zależności czy zapytanie dostanie najpierw odpowiedź bądź zwróci error wywoła się jako pierwsza, a ta druga nie zostanie wywołana
4. resolve obsługujemy metodą .then, a reject obsługujemy metodą .catch
5. generatory tworzymy za pomoą słowa kluczowego function*, w środku musi mieć yield który jest zamrażany. pętle nieskończoną tworzymy za pomocą while (true)
6. generator musimy zainstancjonować, potem wywołujemy za pomocą metody .next() -> każdy kolejny yield
7. setInterval w asynchroniczności musimy przpisać do zmiennej bo tylko wtedy jesteśmy w stanie usunąć jego dzialanie funkcją clearInterval(taZmienna)
8. fetch jest promis based i defaultowo robi get i pobiera dane
9. >Design pattern - najlepsze rozwiązanie istniejącego problemu programistycznego - np. subscriber observer

#

> # 10 listopad 2021

## Zajęcia

1. ### Server-queries

CRUD - create, read, update, delete

| ---  | Create | Read   | Update    | Delete |
| ---- | ------ | ------ | --------- | ------ |
| REST | POST   | GET    | PUT/PATCH | DELETE |
| SQL  | INSERT | SELECT | UPDATE    | DELETE |

2. ### ENDPOINT

```http
https://www.gmail.google.com/messages?title=elo&author=noname
```

- https:// - comunication protocol
- www - rodzaj zasobu ( pdf )
- gmail - subdomena
- google - domena
- com - część domenty określająca jej typ, typ domeny
- /messages - endpoint
- po pytajniku -> zmienne -> title=elo&author=noname ->jeśli chcemy więcej niż jedną zmienną używamy &

---

- GET /books (pobierz wszytskie książki)
- GET /books/id (/books/2) (pobierz konkretną książkę)
- POST /books (stworzy nową książkę)
- PUT /books/id (aktualizujemy cały obiekt)
- PATCH /books/id (aktualizujemy konkretny obiekt częściowo)
- DELETE /books/id
- HEAD /books & /books/id (zwraca nagłównki)
- OPTIONS - działa na wszystkich endpointach, zwraca dostępne metody http dla danego endpointu

3. json-server path --watch - odpala jason serwer który symuluje backend

#

> # 17 listopad 2021 - PostMan

## Zajęcia

#

> # 22 listopad 2021

## Zajęcia

1. Do obsługi znacznika input w React należy użyć useState i obsłużyć zdarzenie w którym zmiemimy stan:
```js
import { useState } from "react";

const Input = () => {
   const [value, setValue] = useState("");

   const inputHandler = (evt) => {
      setValue(evt.target.value);
   };

   return (
      <input type="text" value={value} onChange={inputHandler}/>
   );
};

export default Input;
```

#

> # 25 listopad 2021

## Zajęcia

1. React - framework i liblary do GUI (graficzny interfejs użytkownika)
2. Component może być funkcją, zwraca w return JSX-HTML
3. JSX - JavaScript Extention - specjalna składnia która pozwala nam pisać wewnątrz JS, zmienne w JSX piszemy w klamerkach
3. a. componenty funkcyjne zwracają JSX, a classowe zwracają JSX poprzez metodę render
4. Domyślny plik wyjściowy to ```<App/>```
5. Drzewo komponentów, komponenty wkładane jeden do drugiego
6. Routing - jakie komponenty będą się wyświetlać np. /contact , na tym endpoincie będą się wyświetlać odpowiednie elementy
7. Komponenty: dumb, smart. Dumb - stateless (nie mają stanu), smart - statefull (mają stan)
8. Przesyłanie danych odbywa się od rodzica do dziecka przez propsy od góry do dołu
9. Smart komponenty mają stan, musi spełniać dwie rzeczy, jeśli jest funkcją to musi używać hoocków, a jeśli klasą to mają stan
10. Props to properties przekazujemy dane za pomocą argumentów w komponentach, a odbieramy je za pomocą destrukturyzacji jako argument funkcji
11. Context (API) to glabalny stan aplikacji, potem jest state, czyli stan komponentu, każdy komponent ma swój unikalny stan, i na końcu są propsy.
12. Redux, (Flux - ma wiele stanów, Mobx - do zwariowanych wielkich aplikacji) - biblioteka do zarządzania stanem aplikacji, tylko do mega dużych aplikacji
13. > Paweł pokazuje diagramy
14. propsy przekazujemy atrybutami i one zwracają obiekt więc należy je zdestrukturyzować
15. Destrukturyzacja - tworzenie zmiennych na podstawie obiektów bądź tablic. Defaultową wartość przypisujemy po znaku "=", a zmieniamy nazwę zmiennej (tylko w destrukturyzacji obiektów) po ":".
16. zarządzanie kodem, manipulacja struktury, dzielenie odpowiedzialnością

#

> # 29 listopad 2021

## Powtórka

1. React - biblioteka, freamework do szybkiego tworzenia GUI (graficznego interfejsu użytkownika) - SPA (single page application)
2. Component to element GUI, jeden klocek, z tych klocków budujemy całe aplikacje. Komponenty są dump (stateless) i smart (statefull)
3. Entry point defaultowo dla React jest App.js (index.js ładuje pierwszy komponent) - tam gdzie się aplikacja zaczyna
4. dane przesyłamy tylko z góry na dół w drzewnie komponentów - propsami
5. Case: kiedy komponent (rodzeństwo) ma zmienić stan w innym komponencie należy użyć funkcji, która będzie zadeklarowana w najbliższym wspólnym rodzicu i wywołać tę funkcję, ona przekarze wynik do każdego komponentu propsami w dół. 
6. Context API - drugi sposób na przesyłanie danych pomiędzy komponentami w aplikacji, jest to globalny obiekt, który jest dostępny w całej aplikacji, jest prostszy do użycia, za pomocą context API budujemy routing, jeśli coś jest globalne to nie można tego usunąć
7. useState to hoock który trzyma stan komponentu - jest asynchroniczny
8. w klasach używa się setState, jest asynchroniczny, nie wykonuje się od razu, klasy mają swoją persystencję
9. Biblioteki do zarządzania stanem (library state management) - Flux, Redux, Mobx
10. Vuex to LSM w Vue.j
11. NgRx to LSM w Angular
12. Destructuring - destrukturyzacja - tworzenie zmiennych za pomocą danych w tablicach bądź obiektach
13. react-dom - biblioteka składowa reacta która pozwala budować aplikacje webowe
14. przy przekazywaniu danych propsami każdy atrybt staje się kluczem w obiekcie i poprzez ten klucz przenozona jest wartość
15. przy mapowaniu czy jakiejkolwiek pętli musimy używać atrybutu key, z którego korzysta react-dom (algorytm reconsiliation) który tworzy virtual DOM, który działa na różnicach, zmiany są robione wirtualnie w zmiennych, a nastęnie aktualizuje html tylko o te różnice, przez to jest to bardzo optymalne, bo zapytania do drzewa DOM są bardzo kosztowne, a tak zmieniamy tylko to co się zmieniło

## Zajęcia

1. React fragment ```<></>``` pozwala zwracać kilka elementów w JSX 
2. Komunikat "coś tam nie jest funkcją" oznacza, że metoda jest wywołyana na obiekcie, który nie ma takiej metody (należy sprawdzic typ danych)
3. Gdy funkcjonalność nie działa jak chcemy a apka nie sypie błędami to są to problemy logiczne, console.log na funkcje czy się wywołuje, nastęnie sprawdź czy parametry są dobrze przekazana i czy mają poprawny typ danych
4. filter sprawdza czy warunek jest true i zwraca tablicę z truthy value, if też sprawdza warunek i zwraca false, bądź true.
```js
[].length // 0 -> falsy value czyli false
[1, 2, 3].length // 3 -> truthy value czyli true

if ([1, 1, 3].filter(item => item === 1).length) {}; // wynikiem filtra jest [1], a pole length na tej tablicy ma wartość 2, więc cały warunek if ma wartość true 
```

#

> # 01 grudzień 2021

## Zajęcia

1. next.js narzędzie do budowania stron statycznych i indeksowanych przez google - server site redering
2. hook, zaczep, zaczepianie się o coś jest koncepcją w całym IT
3. do zbudowania projektu w next'ie: 
- npm init -y
- npm install react react-dom next
- folder globalnie "pages", "src", "public"
4. hook useRef służy do złapania referencji w JSX (HTML), nie możemy używać querySelector'a ,tylko w ostateczności
```js
import {useRef} from "react";

const Component = () => {
   const stala = useRef(null);
   
   return <div ref={stala}></div>;// w tym momencie do stałej przypisywany jest  
};

export default Component;
```
#

> # 08 grudzien 2021

## Powtorka

1. JS jest dynamicznie typowanym jezykiem - duck typing - jak cos kwacze jak kaczka zachowuje sie jak kaczka to jest to kaczka
2. jest weak typing, mozemy nadpisac zmienną z number na np. string
3. TS jest odwrotnie jak JS czyli jest statycznie typowany i strong czyli nie nadpiszemy jej
4. JS jest single threted
5. zmianna - kontener w pamieci na dane, mozna przechowywac value lub reference
6. redelkaracja dotyczy tylko var i tylko w quirks mode (ten drugi to strict)
7. scope, zasieg, inaczej widoczność, dostęność zmiennych indentyfikatorów. Istnieją zasięgi: funkcyjny, blokowy (globalny)
8. programowanie funkcyjne - wywodzi się z rachunku lambda, jest oparte na pure function (te same argumenty dadza ten sam wynik), nie moze miec side effect czyli np. zmiennych globalnych, jest higher order function (może przyjmować deklarację innej funkcji jako parametr), lazy evaluation (wykonywanie obliczeń dopiero wtedy kiedy jest to potrzebne, generatory tak działają i iteratory), recurcion over iteration (rekurencja to gdy funkcja wywoluje samą siebie, gdzieś musi być warunek, który to przerwie), referencial transparency (gdy zmienimy przypisanie do zmiennej zamias wyniku funkcji taką samą liczbę, nie ma prawa program się wysypać)
9. hoc - higher order component - wzorzec projektowy (antywzorzec) - komponent, który przyjmuje jako parametr inny komponent i zwraca inny komponent
10. lazy evaluation - powolne wczytywanie
11. recurencje mozna zamienić na iteracje i odwtornie
12. referencial transparency, gdy zamiast ```let x = add();``` zrobimy ```let x = 2;``` program nie powinien się wysypać
13. do zarzadzania stanem uzywamy Flux, Redux, Mobx,
14. w React do zarzadzania stanem uzywamy

- state: hooks -> useState
  state (setState) w funkcji klasowej
- context (API) -> react-router
- props (property), zawsze sa przesylane do dolu w drzewnie komponentów

15. zeby przeslac propsy do innego komponentu powyzej lub w innej galezi musimy w najblizszym wspolnym komponencie zadeklarowac funkcje, wywolac ja w danym komponencie i ona zmiania wartosc w innym
16. const [x, y] = useState() - jest to destrukturyzacja tablicy czyli useState zwraca tablice
17. w React nie uzywamy querySelector bo jest on malo wydajny. React tworzy Virtual DOM i poprzez proces Reconcilation JS oblicza różnice pomiedzy stworzonym HTML a Virtual DOM i zwraca tą rożnicę
18. funkcje nie są same w sobie persystentne, gdy fn zwróci wartość, garbage collector usówa to co w niej było, zmienne zapiane w pamięci itp., po jej zakończeniu
19. useState jest funkcją persystentną dlatego, że używa czegoś co nazywa się closure
20. Next.js służy do tworzenia ston internetowych w reakt, posiada wbudowany routing na endpointy które nazywają się tak samo jak pliki w folderze pages
21. Komponent App przyjmuje parametr props, który jest obiektem i na jego podstawie destrukturyzujemy ten obiekt i wyciągamy z niego zmienna która jest zapisana pod kluczem
22. JS jest językiem dynamicznie typowanym, tzn. że nie musimy nadawać typów zmiennym, js rozpoznaje je za pomocą mechanizmu "duck typing"
23. JS jest miekko typowanym językiem, tzn. ze możemy nadpisywać typy rodzajów danych (weak)
24. transpilacja (transformacja, kompilacja) - tłumaczenie kodu z jednego języka na inny (TS na JS)
24. JS jest jednowątkowy (single threated), są od tego odstępstwa, w node.js to jest - webworker (bądź servis worker) do sprawdzenia
26. filter, map i reduce pochodzą z paradygmatu funkcyjnego 
27. JS można pisać w wielu paradygmatach, functional programming, objected programming, structural programming
28. programowanie funkcyjne, functional programming jest oparte na funkcjach, pure functions
29. pure function - ten sam input daje ten sam output
30. Algorytm reconsilation - algorytm w React, tworzy kopie prawdziwego HTML'a, który oblicza różnice pomiędzy prawdziwym HTML, a Virtual DOM i zwraca różnice pomiędzy nimi (diff), obliczenia są robione w JS bez zapytań do DOM i dlatego jest to bardziej wydajne, dlatego nie należy używać querySelectora w React
31. console ma też inne metody poza log, np. dir 

## Zajecia

1. Closure - dostęp do zmiennych spoza aktualnie wykonywanego zasięgu. Dwie funkcje, jedna zwraca deklaracje drugiej, ta druga korzysta ze zmiennych pierwszej i wtedy ta zmienna zapisuje sie do closure funkcji wewnętrznej
2. Tworzenie Closure: 
- Potrzebne 2 fn: outer i inner
- fn outer musi zwracać deklarację fn inner
- fn inner musi korzystać z zmiennych, funkcji bądź klas fn outer 
>Closure do tworzenia unikalnych ID
```js
const UUID = (id=0) => {
   return () => {
      const result = id;
      id++;
      return result;
   };
};

const uuid = UUID(123);//do uuid zapisze się deklaracja funkcji UUID i zostanie dopisana zmienna id jako closure do funkcji inner

console.log(uuid());//każde kolejne wykonanie uuid() zwróci liczbę większą o 1 od poprzedniej
```
3. site effect powoduje przerenderowanie html, do obsługi używamy useEffect
4. useEffect jest hookiem, który wywołujemy, pierwszym parametrem jest callback, drugim tablica dependenies, czyli co będzie trigerowało ten efekt. calback może mieć return, który się wykona gdy komponent skończy cykl życia, a w nim może być np. usunięcie addEventListenera gdy go zadeklarujemy w funkcji
5. clear down - sprzątanie po sobie, usuwanie addEventListener
6. Global context w React tworzymy: 
```js
import React from "react";
//Komponent z kontekstem
export const ConfigContext = React.createContext();
//Obiekt konfiguracyjny
const configValue = {
  darkStyle: true,//jakieś dane (klucz: wartość)
};

const App = () => {
  return (
    <ConfigContext.Provider value={configValue}>
      <div>Tresć</div>
    </ConfigContext.Provider>
  );
};

export default App;
```
w komponencie w którym odbieramy wartość tego obiektu (bądź czegokolwiek innego co przekażemy) musimy zaimportować useContext i ConfingContext. Poprzez useContext odebrać te parametry, zapisując je do jakieś zmiennej:
```js
import { useContext } from "react";
import { ConfigContext } from "./App";

const context = useContext(ConfigContext);//tu przekazyjemy zmienne, które zadeklarowaliśmy, że będą dostępne globalnie, tu znajduje się obiekt w tym przypadku

context.darkStyle === false ? ... // użycie -> tu np. jakiś warunek, jak przesyłać inne typy danych?
```
#

> # 13 grudzien 2021

## Zajęcia

1. Gdy klucz obiektu ma "-" w nazwie, należy je pobierać przez kwadratowe nawiasy
```js
const ob = {
   "key-pair": "string" 
}

let z = ob["key-pair"]
```
 2. evt.targrt.attributes -> to jest obiekt gdy event emituje np. button
 3. Short object notation: gdy klucz i wartość w obiekcie mają taką sama wartość wtedy wystarczy napisać klucz (a domyślnie będzie też wartością)
 ```js
 const a = 5;
 const obj = {
    a = 5;
 }
 //to to samo co:
 const obj2 = {
    a //to znaczy to samo co a: a, pierwsza to klucz, druga to zmienna a spoza obiektu
 }
 ```
 4. next,js żeby zaimportować css do next.js należy stworzyć komponent o nazwie _app.js w folderze pages
 ```js
import "../public/static/bootstrap.css";
import "../public/static/site.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
 ```
 5. getStaticPropos
 ```js
export async function getStaticPropos(){
    const req = await fetch("/some-api");
    const smth = await req.json();
}

    return {
       props: { smth },
    }
```
6. getServerSideProps
 ```js
export async function getServerSideProps(){
    const req = await fetch("/some-api");
    const smth = await req.json();

    return {
       props: { smth },
    }
}
```
7. getStaticPropos with hydration
 ```js
export async function getStaticPropos(){
    const req = await fetch("/some-api");
    const smth = await req.json();
}

    return {
       props: { smth },
       revalidate: 30
    }
```


 #

> # 15 grudzien 2021

## Zajęcia

1. payload -  useReducer 