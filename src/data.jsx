const imageModules = import.meta.glob(
  "./assets/images/*.{webp,png,jpg,jpeg,svg}",
  { eager: true },
);
const getImg = (name) => {
  const path = Object.keys(imageModules).find((key) => key.includes(name));
  return path ? imageModules[path].default : "";
};

const characters = [
  {
    id: 1,
    name: "Albus Brumbál",
    image: getImg("Brumbál"),
    birth: 1881,
    group: "Fénixův řád",
    description:
      "Je považován za nejmocnějšího kouzelníka 20. století. Narodil se v roce 1881. Již ve škole vynikal neobyčejnými magickými schopnostmi. Později v Bradavicích začal vyučovat přeměňování, a po odchodu Armanda Dippeta se stává ředitelem.",
  },
  {
    id: 2,
    name: "Lord Voldemort",
    image: getImg("Voldemort"),
    birth: 1926,
    group: "Černokněžník",
    description:
      "Vlastním jménem se jmenuje Tom Rojvol Raddle. Patřil k největším kouzelníkům, který kdy žil, často se považoval za nejmocnějšího černokněžníka v historii. Jediný, před kým měl odjakživa respekt, byl Albus Brumbál. Tato postava je známá i tím, že se kouzelníci bojí vyslovit jeho jméno; místo toho používají raději: „Ten, jehož jméno se nesmí vyslovit“ nebo „Vy víte, kdo“.",
  },
  {
    id: 3,
    name: "Severus Snape",
    image: getImg("Snape"),
    birth: 1960,
    group: "Fénixův řád",
    description:
      "Je považován za hlavního tragického hrdinu celé literární série. Narodil se 9. ledna 1960 čarodějce Eileen Prince-Lloydové, provdané Snapeové a mudlovi Tobiasi Snapeovi, má tedy jen z poloviny čistou krev. Patnáct let byl profesorem lektvarů na bradavické Škole čar a kouzel, šestnáctý rok vyučoval Obranu proti černé magii. Je nejméně oblíbeným profesorem Harryho Pottera, ke kterému se od začátku chová s despektem a záští.",
  },
  {
    id: 4,
    name: "Harry Potter",
    image: getImg("Harry"),
    birth: 1980,
    group: "Brumbálova armáda",
    description:
      "Narodil se v Godrikově dole. Jeho rodiči byli James Potter a Lily Potterová, rozená Evansová. Byli však zavražděni zlým čarodějem jménem Lord Voldemort. Harry útok přežil a byl vychováván u své tety a strýce. Vernon Dursley, Petunie Dursleyová i jejich syn Dudley Dursley byli mudlové (lidé bez kapky čarodějné krve) a chovali se k Harrymu skoro celých deset let jako ke kusu hadru. Mezi čaroději je známou celebritou. Ačkoliv téměř nikdo (včetně něho) neví, jak to udělal, stal se nejen jediným, kdo přežil Voldemortův útok kletbou Avada kedavra, ale navíc přitom Voldemorta těžce zranil. Později se dozví, že důvodem jeho přežití byla oběť jeho matky. Navíc bylo předpovězeno, že Harry a Voldemort jsou spojeni věštbou, podle níž ani jeden z nich nemůže žít, jestliže druhý zůstává živ, tedy že jeden musí zabít druhého (existence této věštby byla také důvodem Voldemortova útoku na něj).",
  },
  {
    id: 5,
    name: "Hermiona Grangerová",
    image: getImg("Hermiona"),
    birth: 1979,
    group: "Brumbálova armáda",
    description:
      "Hermiona je mudlovského původu. Je nejlepší studentkou ročníku a velmi schopnou čarodějkou (přesto i jí se vše hned napoprvé nedaří tak, jak by se mohlo jevit jako létání na koštěti, vyčarovat patrona, věštby). Její bystrá mysl, láska ke knihám, touha po poznání a velká aktivita v hodinách jí u mnohých vysloužily pověst šprta. Přestože se Hermiona projevuje občas poněkud panovačně a umí dát bez obalu najevo svůj názor ",
  },
  {
    id: 6,
    name: "Ron Weasley",
    image: getImg("Ron"),
    birth: 1980,
    group: "Brumbálova armáda",
    description:
      "Ron je nejlepším přítelem hlavního hrdiny Harryho Pottera, pochází z čistokrevné kouzelnické rodiny Weasleyových. je nejmladší syn Arthura a Molly Weasleyových. Má pět starších bratrů, Billa, Charlieho, Percyho, Freda a George a jednu mladší sestru Ginny. Rodina Weasleyových se řadí spíše mezi chudší kouzelníky, a proto Ron nosí spoustu věcí obnošených a používá staré pomůcky po svých sourozencích, za což se mnohdy stydí, zejména pokud musí čelit posměškům Draca Malfoye a jeho kamarádů. Jednou, když byl Ron malý, proměnili jeho bratři Fred a George jeho oblíbenou hračku v pavouka, a proto z nich má Ron nyní strach.",
  },
  {
    id: 7,
    name: "Sirius Black",
    image: getImg("Sirius"),
    birth: 1959,
    group: "Fénixův řád",
    description:
      "Mezi kamarády známý jako Tichošlápek. Byl nejlepším přítelem Jamese Pottera, a proto se stal kmotrem jeho a Lilyina jediného syna Harryho Pottera. Sirius byl prvorozený mužský potomek významného čistokrevného kouzelnického rodu Blacků. Jeho rodiče Orion a Walburga Blackovi pocházeli oba z tohoto rodu a byli bratranec a sestřenice přes koleno. Sirius měl mladšího bratra Reguluse Blacka a tři starší sestřenice – Bellatrix, Narcisu (matka Draca Malfoye) a Andromedu (matka Nymfadory Tonksové)",
  },
  {
    id: 8,
    name: "Remus Lupin",
    image: getImg("Lupin"),
    birth: 1960,
    group: "Fénixův řád",
    description:
      "Během studia na bradavické škole v letech 1971–78 patřil do nebelvírské koleje a byl členem skupiny Pobertové. Po dokončení školy se přidal do Fénixova řádu a bojoval v První Kouzelnické Válce. Poprvé se objevil ve třetí knize jako učitel obrany proti černé magii. Od útlého dětství je vlkodlakem (pokousán Fenrirem Šedohřbetem), tuto vlastnost ale nesnáší kvůli bolestem při přeměnách, odsuzování společností a dalším potížím. Je jediným vlkodlakem, který byl vyznamenán Merlinovým řádem prvního stupně.",
  },
  {
    id: 9,
    name: "Minerva Mcgonagall",
    image: getImg("Mcgonagall"),
    birth: 1935,
    group: "Fénixův řád",
    description:
      "Je zástupkyní ředitele Bradavic, ředitelkou nebelvírské koleje, později ředitelkou Bradavic, od prosince 1956 profesorkou přeměňování (všechny předchozí funkce převzala po Albusi Brumbálovi). Patří mezi nejlepší čarodějky, je jedna ze sedmi registrovaných zvěromágů (bere na sebe podobu mourovaté kočky).",
  },
  {
    id: 10,
    name: "Ballatrix Lastrange",
    image: getImg("Bellatrix"),
    birth: 1951,
    group: "Černokněžník",
    description:
      "Byla nejstarší dcerou Cygnuse Blacka a Druely Rosierové. Měla také dvě sestry, starší Andromedu, kterou rodina vyloučila ze svého středu, protože si vzala mudlu Teda Tonkse, a mladší Narcissu, jež si vzala za muže čistokrevného kouzelníka Luciuse Malfoye. Jejími bratranci jsou Sirius a Regulus Blackovi. Studovala v Bradavické škole čar a kouzel ve Zmijozelu. Jako smrtijed proslula svou věrností Voldemortovi a také svojí krutostí.",
  },
  {
    id: 11,
    name: "Lucius Malfoy",
    image: getImg("Lucius"),
    birth: 1953,
    group: "Černokněžník",
    description:
      "Jeho manželkou se stala Narcisa Blacková a mají společně syna Draca Malfoye. Jako skoro každý v kouzelnickém světě, i Lucius navštěvoval Bradavickou školu čar a kouzel. Moudrý klobouk jej zařadil do Zmijozelské koleje, ve které byl později prefektem. Po odchodu z Bradavic se připojil mezi následovníky pána Zla, jako jeden z jeho nejbližších přisluhovačů (Smrtijedů). Souhlasí totiž s ideologií Voldemorta, jelikož i on sám silně věří v nadřazenost čistokrevné kouzelnické rasy.",
  },
  {
    id: 12,
    name: "Draco Malfoy",
    image: getImg("Draco"),
    birth: 1980,
    group: "Černokněžník",
    description:
      "Je synem Luciuse a Narcissy Malfoyových. Ve Škole čar a kouzel v Bradavicích je zařazen do Zmijozelu. Je pyšný na svou čistou krev, nemá rád mudly a mudlorozené čaroděje. Jak on tak i jeho otec jsou Smrtijedi.Ve škole je stále doprovázen spolužáky Vincentem Crabbem a Gregorym Goylem. I když Draco často dává najevo nadřazenost, v krizových situacích se projevuje jako strašpytel.",
  },
];

export default characters;
