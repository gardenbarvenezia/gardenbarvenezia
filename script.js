const translations = {
it: {
  title: "Garden Bar Venezia",
  subtitle: "La tua oasi segreta nel cuore di Venezia",
  seo_title: "Un giardino nascosto a Venezia",
  seo_text: "A soli 2 minuti da Ca’ Rezzonico e Campo Santa Margherita, e a pochi passi da Campo San Barnaba, il Garden Bar è il rifugio perfetto lontano dal caos turistico. Dopo una lunga giornata tra calli e ponti, concediti una pausa: rilassati nel nostro giardino segreto, sorseggia un autentico spritz veneziano e lasciati conquistare dai nostri cicchetti e dalla cucina tipica locale. Ti aspettiamo!",
  video_text: "Siamo a pochi secondi da Campo San Barnaba"
},

en: {
  title: "Garden Bar Venice",
  subtitle: "Your secret oasis in the heart of Venice",
  seo_title: "A hidden garden in Venice",
  seo_text: "Just 2 minutes from Ca’ Rezzonico and Campo Santa Margherita, and a few steps from Campo San Barnaba, Garden Bar is the perfect escape from the tourist crowds. After a long day wandering through Venice’s streets and bridges, treat yourself to a relaxing break: unwind in our secret garden, sip an authentic Venetian spritz, and enjoy our cicchetti and traditional local cuisine. We look forward to welcoming you!",
video_text: "We are just seconds away from Campo San Barnaba"
},

de: {
  title: "Garden Bar Venedig",
  subtitle: "Deine geheime Oase im Herzen von Venedig",
  seo_title: "Ein versteckter Garten in Venedig",
  seo_text: "Nur 2 Minuten von Ca’ Rezzonico und Campo Santa Margherita sowie wenige Schritte von Campo San Barnaba entfernt ist die Garden Bar dein perfekter Rückzugsort fernab vom Touristentrubel. Nach einem langen Tag durch die Gassen und über die Brücken Venedigs gönn dir eine Pause: Entspanne dich in unserem geheimen Garten, genieße einen authentischen venezianischen Spritz und entdecke unsere Cicchetti sowie die traditionelle lokale Küche. Wir freuen uns auf dich!",
video_text: "Wir sind nur wenige Sekunden vom Campo San Barnaba entfernt"
},

fr: {
  title: "Garden Bar Venise",
  subtitle: "Votre oasis secrète au cœur de Venise",
  seo_title: "Un jardin caché à Venise",
  seo_text: "À seulement 2 minutes de Ca’ Rezzonico et du Campo Santa Margherita, et à quelques pas du Campo San Barnaba, le Garden Bar est le refuge idéal loin de la foule touristique. Après une longue journée à parcourir les ruelles et les ponts de Venise, accordez-vous une pause : détendez-vous dans notre jardin secret, savourez un authentique spritz vénitien et laissez-vous tenter par nos cicchetti et notre cuisine locale traditionnelle. Nous vous attendons !",
video_text: "Nous sommes à quelques secondes du Campo San Barnaba"
},

es: {
  title: "Garden Bar Venecia",
  subtitle: "Tu oasis secreto en el corazón de Venecia",
  seo_title: "Un jardín escondido en Venecia",
  seo_text: "A solo 2 minutos de Ca’ Rezzonico y Campo Santa Margherita, y a pocos pasos de Campo San Barnaba, Garden Bar es el refugio perfecto lejos del bullicio turístico. Después de un largo día recorriendo las calles y puentes de Venecia, regálate una pausa: relájate en nuestro jardín secreto, disfruta de un auténtico spritz veneciano y déjate conquistar por nuestros cicchetti y la cocina local tradicional. ¡Te esperamos!",
video_text: "Nous sommes à quelques secondes du Campo San Barnaba"
},

ja: {
  title: "ガーデンバー・ヴェネツィア",
  subtitle: "ヴェネツィアの中心にある秘密のオアシス",
  seo_title: "ヴェネツィアの隠れた庭園",
  seo_text: "カ・レッツォーニコやサンタ・マルゲリータ広場から徒歩わずか2分、サン・バルナバ広場からもすぐの場所にあるガーデンバーは、観光の喧騒を離れてくつろげる理想的な隠れ家です。ヴェネツィアの路地や橋を歩き回った後は、ぜひひと休みを。秘密の庭でリラックスしながら、本場のスプリッツやチケッティ、そして伝統的な地元料理をお楽しみください。皆さまのお越しをお待ちしております！",
video_text: "サン・バルナバ広場から数秒の場所にあります"
},

pt: {
  title: "Garden Bar Veneza",
  subtitle: "O seu oásis secreto no coração de Veneza",
  seo_title: "Um jardim escondido em Veneza",
  seo_text: "A apenas 2 minutos de Ca’ Rezzonico e Campo Santa Margherita, e a poucos passos do Campo San Barnaba, o Garden Bar é o refúgio perfeito longe das multidões turísticas. Depois de um longo dia pelas ruas e pontes de Veneza, relaxe no nosso jardim secreto, saboreie um autêntico spritz veneziano e desfrute dos nossos cicchetti e da cozinha tradicional local. Esperamos por você!",
video_text: "Estamos a poucos segundos do Campo San Barnaba"
},

zh: {
  title: "威尼斯花园酒吧",
  subtitle: "威尼斯市中心的秘密绿洲", 
  seo_title: "威尼斯的隐秘花园",
  seo_text: "距离卡·雷佐尼科宫和圣玛格丽塔广场仅需步行2分钟，离圣巴尔纳巴广场也只有几步之遥，花园酒吧是远离游客喧嚣的理想去处。在穿梭于威尼斯的小巷与桥梁之后，不妨停下脚步，好好放松一下：在我们的秘密花园中休憩，品尝正宗的威尼斯Spritz，享用美味的cicchetti小吃和传统的当地美食。我们期待您的到来！",
video_text: "我们距离圣巴尔纳巴广场仅几秒钟路程"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.innerText = translations[lang][key] || translations["it"][key] || "";
  });
}

setLang("it");