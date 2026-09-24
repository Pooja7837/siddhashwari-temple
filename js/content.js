/* ============================================================================
 *  MANDIR SIDDHESHWARI PEETH DHAM  —  SITE CONTENT (THE ONLY FILE YOU EDIT)
 * ============================================================================
 *  Everything on the website comes from this one file:
 *    • All text, in both languages   { en: "English", hi: "हिन्दी" }
 *    • Phone, email, address, social links, map link
 *    • Festival list, daily timings, donation details, bank details, UPI ID
 *    • Every image path (photos live in the /images folder)
 *
 *  HOW TO EDIT
 *  -----------
 *  1. TEXT      : change the "en" and/or "hi" values below. Keep the quotes.
 *  2. PHOTOS    : drop a new file into /images, then change the path here,
 *                 e.g.  image: "images/homepage_image.jpg"  ->  "images/my-photo.jpg"
 *  3. PHONE     : contact.phone (dialing format, no spaces) + phoneDisplay
 *  4. TIMINGS   : pages.timings.daily  (24-hour "HH:MM" times) + openWindows
 *  5. DONATIONS : pages.donation.upi.* and pages.donation.bank.*
 *
 *  Anything marked "(Sample)" or "नमूना" is placeholder content for this demo.
 *  Lines that must stay exactly as written are the keys (left of the colon).
 * ========================================================================== */

window.SITE = {
  /* ------------------------------------------------------------------ BRAND */
  brand: {
    name:    { en: "Mandir Siddheshwari Peeth Dham", hi: "मंदिर सिद्धेश्वरी पीठ धाम" },
    short:   { en: "Siddheshwari Peeth Dham",        hi: "सिद्धेश्वरी पीठ धाम" },
    tagline: { en: "Where Faith Meets Peace",         hi: "जहाँ आस्था और शांति मिलती है" },
    logo:    "images/logo.svg",
    favicon: "images/favicon.svg",
    ogImage: "images/photo-festival.jpg"
  },

  /* ---------------------------------------------------------------- CONTACT */
  contact: {
    phone:        "+91 99881 67701",// used for tel: dialing
    phoneDisplay: "+91 99881 67701",               // shown on screen
    whatsapp:     "919988167701",                  // WhatsApp float button (country code, no +)
    email:        "randav.sharma@gmail.com",
    address: {
      en: "Mandir Mahakali (Gufa Wale), Bhida Bazar, Chowk Khazana, Amritsar (143001), Punjab, India",
      hi: "मंदिर महाकाली (गुफा वाले), भीड़ा बाज़ार, चौक खजाना, अमृतसर (143001), पंजाब, भारत"
    },
    // Opens in Google Maps (new tab)
    mapLink:  "https://maps.app.goo.gl/i8ZEUvBUgd69EqVCA?g_st=iw",
    // Used for the embedded map on the Contact page
    mapEmbed: "https://maps.app.goo.gl/i8ZEUvBUgd69EqVCA?g_st=iw"
  },

  social: {
    instagram: "https://www.instagram.com/mandirsidheshwari?stkn=MXFybGwyaHdiMms4dw==",   // (Sample) replace with temple profile
    facebook:  "https://www.facebook.com/kalimata.mandir.7"       // (Sample) replace with temple page
  },

  /* --------------------------------------------------------------- NAV MENU */
  nav: [
        { id: "home",     href: "index.html",    label: { en: "Home",             hi: "मुख्य पृष्ठ" } },
    { id: "history",  href: "history.html",  label: { en: "History",          hi: "इतिहास" } },
    { id: "programs", href: "programs.html", label: { en: "Programs",         hi: "कार्यक्रम" } },
    { id: "timings",  href: "timings.html",  label: { en: "Aarti & Darshan",  hi: "आरती एवं दर्शन" } },
    { id: "contact",  href: "contact.html",  label: { en: "Contact Us",       hi: "संपर्क करें" } }
    ],

  /* ------------------------------------------------- SHARED UI MICRO-COPY */
  ui: {
    donateNow:      { en: "Donate Now",        hi: "दान करें" },
    donate:         { en: "Donate",            hi: "दान करें" },
    planVisit:      { en: "Plan Your Visit",   hi: "दर्शन की योजना बनाएँ" },
    readHistory:    { en: "Read Full History", hi: "पूरा इतिहास पढ़ें" },
    viewTimings:    { en: "View Timings",      hi: "समय देखें" },
    knowMore:       { en: "Know More",         hi: "और जानें" },
    copy:           { en: "Copy",              hi: "कॉपी करें" },
    copied:         { en: "Copied!",           hi: "कॉपी हो गया!" },
    phoneCopied:    { en: "Phone number copied!", hi: "फ़ोन नंबर कॉपी हो गया!" },
    emailCopied:    { en: "Email copied!",     hi: "ईमेल कॉपी हो गया!" },
    openNow:        { en: "Temple is OPEN now", hi: "मंदिर अभी खुला है" },
    closedNow:      { en: "Temple is CLOSED now", hi: "मंदिर अभी बंद है" },
    openUntil:      { en: "Darshan until",     hi: "दर्शन का समय" },
    opensAt:        { en: "Opens at",          hi: "खुलने का समय" },
    liveDarshan:    { en: "Watch Live Darshan", hi: "लाइव दर्शन देखें" },
    getDirections:  { en: "Get Directions",    hi: "रास्ता देखें" },
    language:       { en: "Language",          hi: "भाषा" },
    menu:           { en: "Menu",              hi: "मेन्यू" },
    close:          { en: "Close",             hi: "बंद करें" }
  },

  /* ================================================================ PAGES */
  pages: {

    /* ------------------------------------------------------------- HOME */
    home: {
      hero: {
        image: "images/homepage_image.jpg",
        kicker: { en: "Shri Siddheshwari Peeth Dham Trust", hi: "श्री सिद्धेश्वरी पीठ धाम न्यास" },
        title:  { en: "Mandir Siddheshwari Peeth Dham", hi: "मंदिर सिद्धेश्वरी पीठ धाम" },
        subtitle: { en: "Where Faith Meets Peace", hi: "जहाँ आस्था और शांति मिलती है" },
        text: {
          en: "A centuries-old sanctuary of devotion, seva and serenity. Come for darshan, stay for peace.",
          hi: "भक्ति, सेवा और शांति का सदियों पुराना धाम। दर्शन के लिए पधारें, शांति के लिए ठहरें।"
        }
      },
      gallery: {
        heading: { en: "Glimpses of the Dham", hi: "धाम की झलकियाँ" },
        subheading: { en: "Moments of devotion from our temple family.", hi: "हमारे मंदिर परिवार की भक्ति की झलकियाँ।" },
        items: [
          {
            image: "images/homepage_image.jpg", from: "right",   // cover photo of the Deities card
            caption: { en: "Our Deities", hi: "हमारे आराध्य देव" },
            album: [
              { image: "images/homepage_image.jpg", caption: { en: "Deity Darshan", hi: "देव दर्शन" } },
              { image: "images/pindi.jpg", caption: { en: "Deity Darshan", hi: "देव दर्शन" } },
              { image: "images/hanumanmurati.jpg", caption: { en: "Deity Darshan", hi: "देव दर्शन" } },
              { image: "images/gufa.jpg", caption: { en: "Deity Darshan", hi: "देव दर्शन" } },
              { image: "images/pindi2.jpg", caption: { en: "Deity Darshan", hi: "देव दर्शन" } },
              { image: "images/shiv2.jpg", caption: { en: "Deity Darshan", hi: "देव दर्शन" } },
              { image: "images/maakali2.jpg", caption: { en: "Deity Darshan", hi: "देव दर्शन" } },
              { image: "images/dieties2.jpg", caption: { en: "Deity Darshan", hi: "देव दर्शन" } },
              { image: "images/shivji.jpg", caption: { en: "Deity Darshan", hi: "देव दर्शन" } }
              // add more deity photos here, one line each
            ]
          },
          {
            image: "images/havan.png", from: "left",   // cover photo of the Events card
            caption: { en: "Events & Festivals", hi: "कार्यक्रम एवं उत्सव" },
            album: [
              { image: "images/havan.png", caption: { en: "Festival Celebration", hi: "उत्सव उत्साह" } },
              { image: "images/hanumjayanti.jpg", caption: { en: "Past Event", hi: "पिछला कार्यक्रम" } },
              { image: "images/langar.jpg", caption: { en: "Past Event", hi: "पिछला कार्यक्रम" } },
              { image: "images/25thnov.jpg", caption: { en: "Past Event", hi: "पिछला कार्यक्रम" } },
              { image: "images/event2.jpg", caption: { en: "Shobha Yatra", hi: "पिछला कार्यक्रम" } },
              { image: "images/sthapnadiwas.jpg", caption: { en: "Shobha Yatra", hi: "पिछला कार्यक्रम" } },
              { image: "images/gauseva.jpg", caption: { en: "Shobha Yatra", hi: "पिछला कार्यक्रम" } },
              { image: "images/shivratri.jpg", caption: { en: "Shobha Yatra", hi: "पिछला कार्यक्रम" } },
              { image: "images/ruthra.jpg", caption: { en: "Langar Seva", hi: "लंगर सेवा" } }
              // add more event photos here, one line each
            ]
          }
        ]
      },
      about: {
        heading: { en: "About the Temple", hi: "मंदिर के बारे में" },
        image: "images/kalimaa_interior.jpg",
        paragraphs: [
          {
            en: "In the old lanes of Amritsar stands a temple built on devotion to Maa Kali, a place where peace settles over you the moment you step in. Maa Kali is enshrined here as the presiding deity, and alongside her sit Hanuman Ji, the three pindiyan of Maa Durga, Saraswati and Kali, a Shivala with a Narmadeshwar Shivling bearing a naturally formed Swayambhu Om, and Shani Dev.",
            hi: "अमृतसर की पुरानी गलियों में एक ऐसा मंदिर स्थित है जो माँ काली की भक्ति पर आधारित है, जहाँ प्रवेश करते ही मन शांति से भर जाता है। माँ काली यहाँ प्रमुख देवी के रूप में विराजमान हैं, और उनके साथ हनुमान जी, माँ दुर्गा, सरस्वती एवं काली की तीन पिंडियाँ, नर्मदेश्वर शिवलिंग युक्त शिवाला जिस पर स्वाभाविक स्वयंभू ॐ प्रकट है, तथा शनि देव भी विराजमान हैं।"
          },
          {
            en: "Every day here follows a rhythm of devotion. Aarti is performed for each deity, the sound of bells and mantras filling the courtyard morning and evening. Langar is served three times a day to anyone who walks in. A Gau Shala cares for cows as sacred mothers, a free yoga centre welcomes those seeking wellness, and a physiotherapy centre offers seva to the elderly at minimal cost.",
            hi: "यहाँ प्रतिदिन भक्ति का एक विशेष क्रम चलता है। हर देवी-देवता की आरती होती है, सुबह-शाम घंटियों और मंत्रोच्चार की ध्वनि से प्रांगण गूंज उठता है। प्रतिदिन तीन बार लंगर सेवा दी जाती है, जो भी आए उसे प्रसाद मिलता है। गौशाला में गायों की माँ समान देखभाल होती है, निःशुल्क योग केंद्र स्वास्थ्य चाहने वालों का स्वागत करता है, और फिजियोथेरेपी केंद्र वृद्धजनों की न्यूनतम शुल्क पर सेवा करता है।"
          },
        
          {
            en: "This is a temple built on faith, sustained by seva, and open to everyone who walks through its doors.",
            hi: "यह मंदिर आस्था पर बना है, सेवा से सजीव है, और हर उस व्यक्ति के लिए खुला है जो इसके द्वार से भीतर आता है।"
          }
        ]
      },
      highlights: {
        heading: { en: "At the Temple Today", hi: "आज मंदिर में" },
        aartiCard: {
          label: { en: "Today's Aarti", hi: "आज की आरती" },
          name:  { en: "Sandhya Aarti", hi: "संध्या आरती" },
          time:  { en: "7:00 PM", hi: "सायं 7:00 बजे" },
          text:  { en: "Join us for the evening lamp offering.", hi: "संध्या दीप आरती में सम्मिलित हों।" }
        },
        eventCard: {
          label: { en: "Upcoming Event", hi: "आगामी उत्सव" },
          name:  { en: "Sharad Navratri Mahotsav", hi: "शरद नवरात्रि महोत्सव" },
          date:  { en: "11–19 October 2026", hi: "11–19 अक्टूबर 2026" },
          text:  { en: "Nine nights of kirtan, kalash sthapana and bhandara.", hi: "कीर्तन, कलश स्थापना और भंडारे की नौ रातें।" }
        },
        donateCard: {
          label: { en: "Feed a Devotee", hi: "एक भक्त को भोजन" },
          name:  { en: "Support the Langar", hi: "लंगर में सहयोग करें" },
          text:  { en: "Rs 501 serves a full meal to 10 people.", hi: "रु. 501 से 10 लोगों को पूरा भोजन मिलता है।" }
        }
      }
    },

    /* ---------------------------------------------------------- HISTORY */
    history: {
      title:   { en: "Our History", hi: "हमारा इतिहास" },
      intro:   {
        en: "From its humble beginnings to the establishment of divine traditions, sacred institutions, and community service initiatives, the history of Siddheshwari Peeth Dham reflects a timeless journey of devotion, compassion, and spiritual growth.",
        hi: "अपने विनम्र आरंभ से लेकर दिव्य परंपराओं, पावन संस्थानों एवं जनसेवा की पहलों तक, सिद्धेश्वरी पीठ धाम का इतिहास भक्ति, करुणा एवं आध्यात्मिक विकास की एक अविरल यात्रा को दर्शाता है।"
      },
      origin: {
        heading: { en: "Origin of the Temple", hi: "मंदिर की उत्पत्ति" },
        text: {
          en: "Rooted in the profound devotion to Maa Kali, Siddheshwari Peeth Dham began its sacred journey in 1992 in the heart of Amritsar, growing from a humble place of worship into a spiritual sanctuary of faith and seva.",
          hi: "माँ काली के प्रति अटूट भक्ति से प्रेरित होकर, सिद्धेश्वरी पीठ धाम की पावन यात्रा सन् 1992 में अमृतसर के हृदय में प्रारंभ हुई, जो एक विनम्र पूजा स्थल से आस्था एवं सेवा के आध्यात्मिक धाम के रूप में विकसित हुई।"
        },
                timeline: [
          { year: "1969",
            title: { en: "A Divine Birth in the Holy City of Banaras", hi: "पावन नगरी बनारस में दिव्य जन्म" },
            text: {
              en: "In the sacred and eternal city of Banaras, on the banks where spirituality has flowed for centuries, Temple Adhyaksh Mahamandaleshwar 1008 Mankameshwar Giri Ji took birth in 1969. Though born far from Punjab, his soul carried within it the ancestral blessings of Bilga village, near Hoshiarpur, a heritage destined to bring him back to his roots and, through him, bring divinity to thousands.",
              hi: "भारत की उस पवित्र एवं शाश्वत नगरी बनारस में, जहाँ सदियों से आध्यात्मिकता की धारा प्रवाहित होती रही है, सन् 1969 में मंदिर अध्यक्ष महामंडलेश्वर 1008 मनकामेश्वर गिरी जी का जन्म हुआ। यद्यपि उनका जन्म पंजाब से दूर हुआ, परंतु उनकी आत्मा में होशियारपुर के निकट बिलगा गाँव की पैतृक आशीष समाई हुई थी एक ऐसी विरासत जो उन्हें अपनी जड़ों की ओर लौटने और हजारों जीवन में दिव्यता का संचार करने हेतु नियति द्वारा निर्धारित थी।" } },

          { year: "1973",
            title: { en: "The Return to the Land of the Gurus", hi: "गुरुओं की धरती पर पुनरागमन" },
            text: {
              en: "As if guided by an unseen divine hand, the family returned to Punjab in 1973 and made Amritsar, the city of nectar, and centuries of devotion, their own. Little did anyone know that this city would one day become the sacred abode of Maa Kali's blessings, nurtured by the very child who had arrived from Banaras.",
              hi: "मानो किसी अदृश्य दैवीय शक्ति के मार्गदर्शन से, सन् 1973 में परिवार पंजाब लौटा और अमृतसर, वह अमृत की भूमि, को अपना घर बनाया। उस समय किसी को यह ज्ञात नहीं था कि यही नगरी आगे चलकर माँ काली की कृपा का पावन धाम बनेगी, जिसे बनारस से आए उसी बालक द्वारा पोषित किया जाएगा।" } },

          { year: "1992",
            title: { en: "The Sacred Foundation Laid in Devotion to Maa Kali", hi: "माँ काली की भक्ति में पावन नींव" },
            text: {
              en: "Consumed by an unwavering and profound devotion to Maa Kali, Mahamandaleshwar Ji laid the foundation of the temple amidst the ancient, narrow lanes of Amritsar. In its earliest days, the temple held nothing more than sacred images of the deities, yet the atmosphere was charged with such deep peace and divine energy that devotees felt the presence of the Divine Mother in every corner. From this humble beginning, a spiritual movement was born, one that would touch countless lives in the decades to come.",
              hi: "माँ काली के प्रति अटूट एवं गहन भक्ति से ओतप्रोत होकर, महामंडलेश्वर जी ने अमृतसर की प्राचीन एवं संकरी गलियों में मंदिर की नींव रखी। आरंभिक दिनों में मंदिर में केवल देवी-देवताओं के पावन चित्र ही विराजमान थे, परंतु वातावरण इतना शांत और दिव्य ऊर्जा से परिपूर्ण था कि श्रद्धालु हर कोने में माँ की उपस्थिति का अनुभव करते थे। इसी विनम्र आरंभ से एक ऐसे आध्यात्मिक आंदोलन का जन्म हुआ, जिसने आने वाले वर्षों में अगणित जीवन को स्पर्श किया।" } },

          { year: "1995",
            title: { en: "A Trust Formed, A Spiritual Family Born", hi: "ट्रस्ट की स्थापना, आध्यात्मिक परिवार का जन्म" },
            text: {
              en: "As the number of devotees grew, so did the bond between them, and in 1995 they came together to formally establish a Trust, transforming a gathering of worshippers into a united spiritual family bound by faith and seva. This year also marked the birth of two traditions that continue to inspire devotion to this day: the grand annual Shobha Yatra, a vibrant procession of faith through the streets, and the 3–4 days annual celebration every 25th November, marking the birth anniversary of Mahamandaleshwar Ji, a joyous occasion filled with devotional fervor, culminating in the sacred Akhand Path of Ramayan, chanted continuously in praise of Lord Ram.",
              hi: "जैसे-जैसे श्रद्धालुओं की संख्या बढ़ी, वैसे-वैसे उनके बीच का बंधन भी सुदृढ़ होता गया, और सन् 1995 में उन्होंने मिलकर एक विधिवत ट्रस्ट की स्थापना की, भक्तों का यह समूह अब आस्था और सेवा के सूत्र में बंधा एक संगठित आध्यात्मिक परिवार बन गया। इसी वर्ष दो ऐसी परंपराओं की नींव पड़ी जो आज भी भक्ति की मिसाल हैं: भव्य वार्षिक शोभा यात्रा, जो आस्था का जीवंत जुलूस बनकर नगर की गलियों से गुजरती है, तथा प्रतिवर्ष 25 नवंबर को आयोजित 3-4 दिवसीय वार्षिक समारोह, जो महामंडलेश्वर जी के जन्मदिवस के उपलक्ष्य में मनाया जाता है, भक्ति के उल्लास से परिपूर्ण यह अवसर रामायण के अखंड पाठ के साथ अपनी पराकाष्ठा पर पहुँचता है, जिसमें निरंतर श्री राम के गुणगान का पाठ किया जाता है।" } },

          { year: "2012",
            title: { en: "Murti Sthapna: Maa Kali Enshrined Forever", hi: "मूर्ति स्थापना: माँ काली का शाश्वत विराजमान" },
            text: {
              en: "After years of worship before sacred images, a momentous and deeply emotional milestone arrived in 2012 with the Murti Sthapna, the consecration of the divine Vigraha of Maa Kali. With Vedic rituals and the chanting of sacred mantras, the Divine Mother was formally enshrined within the temple, granting her a permanent, sanctified abode where devotees could now stand before her divine form and seek her blessings.",
              hi: "वर्षों तक पावन चित्रों के समक्ष आराधना करने के पश्चात, सन् 2012 में एक अत्यंत भावुक एवं महत्वपूर्ण क्षण आया, मूर्ति स्थापना का। वैदिक विधि-विधान एवं पावन मंत्रोच्चार के साथ, माँ काली के दिव्य विग्रह को मंदिर में विधिवत स्थापित किया गया, जिससे देवी को एक स्थायी एवं पवित्र निवास स्थान प्राप्त हुआ, जहाँ श्रद्धालु अब साक्षात उनके दिव्य स्वरूप के समक्ष खड़े होकर आशीर्वाद प्राप्त कर सकते थे।" } },

          { year: "2013",
            title: { en: "The Golden Year of Expansion and Divine Sthapna", hi: "विस्तार एवं दिव्य स्थापना का स्वर्णिम वर्ष" },
            text: {
              en: "If one year could be called the turning point in the temple's spiritual journey, it would be 2013. The mandir underwent a significant expansion, and the sacred precincts welcomed a divine pantheon, each deity sthapit with due reverence and ritual: Hanuman Ji, the eternal symbol of strength, devotion, and selfless service; the Three Pindiyan of Maa Durga, Saraswati, and Kali, embodying the three divine forms of Shakti — power, wisdom, and transformation; the Shivala, housing a sacred Narmadeshwar Shivling upon which rests a rare and awe-inspiring naturally formed Swayambhu Om, a divine sign considered exceptionally sacred and rare in the world of Shiv Bhakti; and Shani Dev, invoked for justice, karma, and divine protection from hardship. This expansion transformed the temple into a complete spiritual sanctuary, where devotees of every deity could find their place of worship under one sacred roof.",
              hi: "यदि मंदिर की आध्यात्मिक यात्रा में किसी एक वर्ष को मोड़ बिंदु कहा जाए, तो वह सन् 2013 ही होगा। मंदिर परिसर का व्यापक विस्तार हुआ, और पावन प्रांगण में अनेक देवी-देवताओं की सम्मानपूर्वक स्थापना की गई: हनुमान जी, जो शक्ति, भक्ति एवं निःस्वार्थ सेवा के शाश्वत प्रतीक हैं; माँ दुर्गा, सरस्वती एवं काली की तीन पिंडियाँ, जो शक्ति के तीन दिव्य स्वरूपों — शक्ति, ज्ञान एवं परिवर्तन — की प्रतीक हैं; शिवाला, जिसमें विराजमान है पावन नर्मदेश्वर शिवलिंग, जिस पर एक दुर्लभ एवं विस्मयकारी स्वाभाविक स्वयंभू ॐ प्रकट है, जो शिव भक्ति के जगत में अत्यंत पावन एवं दुर्लभ माना जाता है; तथा शनि देव, जो न्याय, कर्म एवं संकटों से दैवीय रक्षा हेतु आराधित हैं। इस विस्तार ने मंदिर को एक संपूर्ण आध्यात्मिक तीर्थ में परिवर्तित कर दिया, जहाँ प्रत्येक देवी-देवता के भक्त एक ही पावन छत के नीचे अपनी आराधना का स्थान पा सके।" } },

          { year: "2015",
            title: { en: "Gau Seva: Compassion in Service of Gau Mata", hi: "गौ सेवा: गौ माता की सेवा में करुणा" },
            text: {
              en: "True to the ancient Hindu belief that Gau Mata is sacred and must be revered as a mother, the Trust established a Gau Shala in 2015. Here, cows are fed, sheltered, and cared for with love, reflecting the temple's deep commitment to dharma, compassion, and the protection of all living beings.",
              hi: "सनातन हिंदू मान्यता के अनुरूप, जिसमें गौ माता को पूज्य एवं मातृतुल्य माना जाता है, ट्रस्ट ने सन् 2015 में गौशाला की स्थापना की। यहाँ गायों को प्रेमपूर्वक भोजन, आश्रय एवं देखभाल प्रदान की जाती है, जो मंदिर की धर्म, करुणा एवं समस्त जीवों की रक्षा के प्रति गहन प्रतिबद्धता को दर्शाता है।" } },

          { year: "2020",
            title: { en: "Seva Through Healing: The Physiotherapy Centre", hi: "उपचार के माध्यम से सेवा: फिजियोथेरेपी केंद्र" },
            text: {
              en: "In keeping with the spirit of seva that has always defined this sacred space, a Physiotherapy Centre was launched in 2020, offering treatment at minimal, nominal charges. Dedicated especially to the elderly and those in physical distress, this initiative reflects the temple's belief that true worship of the Divine also means serving humanity with compassion.",
              hi: "मंदिर की उस सेवा-भावना के अनुरूप, जो सदैव इस पावन स्थल की पहचान रही है, सन् 2020 में फिजियोथेरेपी केंद्र का शुभारंभ किया गया, जो न्यूनतम एवं नाममात्र शुल्क पर उपचार प्रदान करता है। विशेष रूप से वृद्धजनों एवं शारीरिक कष्ट से पीड़ित व्यक्तियों को समर्पित यह पहल इस विश्वास को दर्शाती है कि ईश्वर की सच्ची आराधना मानवता की करुणापूर्ण सेवा में भी निहित है।" } },

          { year: { en: "Present Day", hi: "वर्तमान" },
            title: { en: "A Living Legacy of Faith and Seva", hi: "आस्था एवं सेवा की जीवंत विरासत" },
            text: {
              en: "Today, the temple continues to radiate its founding spirit of devotion and service. A free Yoga Centre helps devotees nurture both body and soul, while Langar seva, offered three times a day, ensures that no one who enters these sacred gates leaves without nourishment — a living embodiment of the Hindu principle of 'Atithi Devo Bhava' (the guest is God). And now, a new chapter is being written, as the construction of a sacred Ashram is underway — a future space for deeper spiritual practice, learning, and community, carrying forward this divine legacy for generations to come.",
              hi: "आज भी मंदिर अपनी मूल भक्ति एवं सेवा भावना को उसी तेज के साथ प्रकाशित कर रहा है। एक निःशुल्क योग केंद्र श्रद्धालुओं को शरीर एवं आत्मा दोनों के पोषण में सहायक है, जबकि प्रतिदिन तीन बार लंगर सेवा यह सुनिश्चित करती है कि इन पावन द्वारों में प्रवेश करने वाला कोई भी व्यक्ति बिना भोजन प्रसाद के न लौटे — यह हिंदू सिद्धांत 'अतिथि देवो भवः' का साक्षात जीवंत उदाहरण है। और अब एक नया अध्याय लिखा जा रहा है, जब पावन आश्रम का निर्माण कार्य प्रगति पर है — भविष्य में गहन आध्यात्मिक साधना, शिक्षा एवं सामुदायिक सेवा हेतु एक स्थान, जो इस दिव्य विरासत को आने वाली पीढ़ियों तक आगे बढ़ाएगा।" } }
        ]
      },
      maharaj: {
        heading: { en: "Our Gurudev", hi: "हमारे गुरुदेव" },
        image: "images/Maharaj ji photo.jpg",
        name:  { en: "Shri Shri 1008 Mankameshwar Giri Ji Maharaj", hi: "श्री श्री 1008 मनकामेश्वर गिरि जी महाराज" },
        role:  { en: "Mahamandaleshwar, Shri Panchayati Mahanirvani Akhada, Kankhal, Haridwar", hi: "महामंडलेश्वर, श्री पंचायती महानिर्वाणी अखाड़ा, कनखल, हरिद्वार" },
        bio: [
          { en: "Revered as a Guru and guiding light of Siddheshwari Peeth Dham, Shri Shri 1008 Mankameshwar Giri Ji Maharaj has devoted his life to sadhana, Maa Kali worship, and selfless service in the spirit of Sanatan Dharma.",
            hi: "सिद्धेश्वरी पीठ धाम के पूज्य गुरु एवं मार्गदर्शक, श्री श्री १००८ मनकामेश्वर गिरि जी महाराज ने अपना जीवन सनातन धर्म की अमर परंपराओं, साधना, माँ काली की उपासना और निःस्वार्थ जनसेवा के लिए समर्पित कर दिया है।" },
          { en: "Under his guidance, the Peeth runs langar, gau seva, healthcare initiatives, and sacred practices for the community. The teaching is simple: serving humanity is serving the divine.",
            hi: "उनके मार्गदर्शन में, पीठ द्वारा समाज के लिए लंगर, गौ सेवा, स्वास्थ्य सेवाएँ एवं धार्मिक अनुष्ठान संचालित किए जाते हैं। उनकी सीख अत्यंत सरल है: मानव सेवा ही ईश्वर सेवा है।" }
        ],
        quote: {
          en: "Serve the hungry, the sick and the voiceless, the Divine resides in the service of the living.",
          hi: "भूखे, रोगी और निर्बल की सेवा करो, ईश्वर जीव की सेवा में वास करता है। "
        },
        sevaHeading: { en: "His Social Service Work", hi: "उनका समाजसेवा कार्य" },
        seva: [
          { en: "Daily langar bhandara for all devotees and pilgrims", hi: "सभी भक्तों एवं तीर्थयात्रियों हेतु नित्य लंगर भंडारा" },
          { en: "Gaushala sheltering 10+ rescued cows", hi: "10+ बचाई गई गौवंश की देखभाल हेतु गौशाला" },
          { en: "Free eye camps and cataract surgeries", hi: "निःशुल्क नेत्र शिविर एवं मोतियाबिंद ऑपरेशन" },
          { en: "Free physiotherapy camps for elders", hi: "वृद्धजनों हेतु निःशुल्क फिजियोथेरेपी शिविर" },
          { en: "Sanskrit and scripture classes for children", hi: "बच्चों हेतु संस्कृत एवं शास्त्र कक्षाएँ" }
        ]
      },
      gallery: {
        heading: { en: "Temple & Heritage Gallery", hi: "मंदिर एवं विरासत गैलरी" },
        items: [
          { image: "images/new1.jpg",  caption: { en: "Temple Entry", hi: "मंदिर प्रवेश" } },
          { image: "images/new2.jpg",  caption: { en: "Kaali Pujan", hi: "काली पूजन" } },
          { image: "images/new3.jpg",  caption: { en: "Festival Celebration", hi: "उत्सव समारो" } },
          { image: "images/sthapnadiwas.jpg",  caption: { en: "Festival Celebration", hi: "उत्सव समारो" } },
          { image: "images/gufa.jpg",  caption: { en: "Gufa Darshan", hi: "गुफा दर्शन" } },
          { image: "images/pindi2.jpg", caption: { en: "Pindi Darshan", hi: "पिंडी दर्शन" } }
        ]
      }
    },

    /* --------------------------------------------------------- PROGRAMS */
    programs: {
      title: { en: "Programs & Festivals", hi: "कार्यक्रम एवं उत्सव" },
      intro: {
        en: "Throughout the year the Dham celebrates every festival with kirtan, bhandara and community seva. All are welcome.",
        hi: "वर्षभर धाम प्रत्येक उत्सव कीर्तन, भंडारा और सामूहिक सेवा के साथ मनाता है। सभी सादर आमंत्रित हैं।"
      },
      festivalsHeading: { en: "Festivals We Celebrate", hi: "हमारे प्रमुख उत्सव" },
      festivals: [
        { image: "images/shivratri.jpg", date: { en: "February", hi: "फरवरी" },
          name: { en: "Mahashivratri", hi: "महाशिवरात्रि" },
          text: { en: "Night-long jagran, rudrabhishek and four-prahar aarti at the sanctum.", hi: "रात्रि जागरण, रुद्राभिषेक एवं चार प्रहर की आरती।" } },
        { image: "images/new4.jpg", date: { en: "August / September", hi: "अगस्त / सितंबर" },
          name: { en: "Janmashtami", hi: "जन्माष्टमी" },
          text: { en: "Midnight abhishek, jhula shringar and kirtan through the night.", hi: "मध्यरात्रि अभिषेक, झूला श्रृंगार एवं रात्रिभर कीर्तन।" } },
        { image: "images/new8.jpg", date: { en: "March / April", hi: "मार्च / अप्रैल" },
          name: { en: "Hanuman Jayanti", hi: "हनुमान जयंती" },
          text: { en: "Sundarkand path, sindoor seva and prasad bhandara for all.", hi: "सुंदरकांड पाठ, सिंदूर सेवा एवं प्रसाद भंडारा।" } },
        { image: "images/navratre.jpg", date: { en: "March / October", hi: "मार्च / अक्टूबर" },
          name: { en: "Navratri", hi: "नवरात्रि" },
          text: { en: "Kalash sthapana, nine nights of garba and Durga Saptashati path.", hi: "कलश स्थापना, नौ रातों के गरबा एवं दुर्गा सप्तशती पाठ।" } },
        { image: "images/hanumjayanti.jpg", date: { en: "Every month", hi: "प्रत्येक माह" },
          name: { en: "Monthly Ashtami", hi: "मासिक अष्टमी" },
          text: { en: "Special Ashtami aarti, havan and bhajan sandhya on the 8th lunar day.", hi: "शुक्ल अष्टमी तिथि पर विशेष आरती, हवन एवं भजन संध्या।" } },
        { image: "images/sthapnadiwas.jpg", date: { en: "25 November", hi: "25 नवंबर" },
          name: { en: "Temple Foundation Day & Birthday of Shri Mankameshwar Giri Ji Maharaj", hi: "मंदिर स्थापना दिवस एवं श्री मनकामेश्वर गिरि जी महाराज का जन्मदिवस" },
          text: { en: "Our grandest celebration: paduka pujan, mahabhandara, cultural evening and deep daan.", hi: "हमारा सबसे भव्य उत्सव: पादुका पूजन, महाभंडारा, सांस्कृतिक संध्या एवं दीपदान।" } }
      ],
      upcoming: {
        heading: { en: "Upcoming Event", hi: "आगामी उत्सव" },
        name: { en: "Sharad Navratri Mahotsav", hi: "शरद नवरात्रि महोत्सव" },
        // Edit this date (ISO 8601, Indian time zone). Countdown updates live.
        startDate: "2026-10-11T06:00:00+05:30",
        date: { en: "11 – 19 October 2026", hi: "11 – 19 अक्टूबर 2026" },
        text: { en: "Nine nights of kalash sthapana, Durga Saptashati path, garba and daily mahaprasad. Devotees from all traditions are welcome.", hi: "कलश स्थापना, दुर्गा सप्तशती पाठ, गरबा एवं नित्य महाप्रसाद की नौ रातें। सभी परंपराओं के भक्त सादर आमंत्रित हैं।" },
        image: "images/new5.jpg",
        countdown: {
          days: { en: "Days", hi: "दिन" }, hours: { en: "Hours", hi: "घंटे" },
          minutes: { en: "Minutes", hi: "मिनट" }, seconds: { en: "Seconds", hi: "सेकंड" }
        }
      },
      calendar: {
        heading: { en: "Yearly Festival Calendar", hi: "वार्षिक उत्सव कैलेंडर" },
        note: { en: "Dates are indicative and follow the Hindu lunar calendar; the final date is announced one month in advance.", hi: "तिथियाँ हिंदू पंचांग के अनुसार सांकेतिक हैं; अंतिम तिथि एक माह पूर्व घोषित की जाती है।" },
        rows: [
          { month: { en: "January", hi: "जनवरी" },   event: { en: "Makar Sankranti & Havan", hi: "मकर संक्रांति एवं हवन" } },
          { month: { en: "February", hi: "फरवरी" },  event: { en: "Mahashivratri Mahotsav", hi: "महाशिवरात्रि महोत्सव" } },
          { month: { en: "March", hi: "मार्च" },     event: { en: "Chaitra Navratri & Hanuman Jayanti", hi: "चैत्र नवरात्रि एवं हनुमान जयंती" } },
          { month: { en: "April", hi: "अप्रैल" },    event: { en: "Ram Navami & Free Eye Camp", hi: "राम नवमी एवं निःशुल्क नेत्र शिविर" } },
          { month: { en: "May", hi: "मई" },          event: { en: "Akshaya Tritiya & Gau Puja", hi: "अक्षय तृतीया एवं गौ पूजा" } },
          { month: { en: "June", hi: "जून" },        event: { en: "Ganga Dussehra & Jal Abhishek", hi: "गंगा दशहरा एवं जल अभिषेक" } },
          { month: { en: "July", hi: "जुलाई" },      event: { en: "Guru Purnima & Physiotherapy Camp", hi: "गुरु पूर्णिमा एवं फिजियोथेरेपी शिविर" } },
          { month: { en: "August", hi: "अगस्त" },    event: { en: "Raksha Bandhan & Janmashtami", hi: "रक्षाबंधन एवं जन्माष्टमी" } },
          { month: { en: "September", hi: "सितंबर" }, event: { en: "Ganesh Chaturthi & Pitru Paksha Tarpan", hi: "गणेश चतुर्थी एवं पितृ पक्ष तर्पण" } },
          { month: { en: "October", hi: "अक्टूबर" }, event: { en: "Sharad Navratri & Dussehra", hi: "शरद नवरात्रि एवं दशहरा" } },
          { month: { en: "November", hi: "नवंबर" }, event: { en: "Diwali, Foundation Day & Birthday of Gurudev (7 Nov)", hi: "दीपावली, स्थापना दिवस एवं गुरुदेव जन्मदिवस (7 नवंबर)" } },
          { month: { en: "December", hi: "दिसंबर" }, event: { en: "Gita Jayanti & Deep Daan", hi: "गीता जयंती एवं दीपदान" } }
        ]
      },
      gallery: {
        heading: { en: "Gallery of Past Events", hi: "पिछले उत्सवों की गैलरी" },
        items: [
          { image: "images/shiva.jpg",      caption: { en: "Navratri Mahotsav", hi: "नवरात्रि महोत्सव" } },
          { image: "images/langar.jpg",      caption: { en: "Mahabhandara", hi: "महाभंडारा" } },
          { image: "images/ruthra.jpg",         caption: { en: "Mahashivratri Jagran", hi: "महाशिवरात्रि जागरण" } },
          { image: "images/havan.png", caption: { en: "Foundation Day", hi: "स्थापना दिवस" } },
          { image: "images/new7.jpg",      caption: { en: "Free Eye Camp", hi: "निःशुल्क नेत्र शिविर" } },
          { image: "images/physiotherapy.jpg",        caption: { en: "Physiotherapy Camp", hi: "फिजियोथेरेपी शिविर" } }
        ]
      }
    },

    /* ---------------------------------------------------------- TIMINGS */
    timings: {
      title: { en: "Aarti & Darshan Timings", hi: "आरती एवं दर्शन समय" },
      intro: {
        en: "The temple is open every day of the year. Timings below are sample timings for this demo — edit them any time in the data file.",
        hi: "मंदिर वर्ष के प्रत्येक दिन खुला रहता है। नीचे दिए समय इस डेमो हेतु नमूना हैं — इन्हें कभी भी डेटा फ़ाइल में बदला जा सकता है।"
      },
      badgeNote: {
        en: "The badge below updates live from your device clock. Please arrive 15 minutes before aarti.",
        hi: "नीचे दिया बैज आपके डिवाइस की घड़ी से लाइव अपडेट होता है। कृपया आरती से 15 मिनट पूर्व पधारें।"
      },
      // 24-hour "HH:MM" strings. Used for the live OPEN / CLOSED badge.
      openWindows: [ ["04:30", "12:30"], ["16:00", "21:15"] ],
      dailyHeading: { en: "Daily Schedule", hi: "दैनिक कार्यक्रम" },
      daily: [
        { name: { en: "Mangla Aarti",       hi: "मंगला आरती" },      time: "07:00", end: "07:30", note: { en: "First aarti of the day, followed by shringar darshan.", hi: "दिन की प्रथम आरती, इसके पश्चात श्रृंगार दर्शन।" } },
        { name: { en: "Morning Darshan",    hi: "प्रातःकालीन दर्शन" }, time: "06:30", end: "12:00", note: { en: "Uninterrupted darshan; abhishek on request.", hi: "निरंतर दर्शन; अनुरोध पर अभिषेक।" } },
        { name: { en: "Bhog",               hi: "भोग" },              time: "12:00", end: "12:30", note: { en: "Bhog offering and temple closes for rest period.", hi: "भोग अर्पण, इसके पश्चात मंदिर विश्राम हेतु बंद।" } },
        { name: { en: "Evening Darshan",    hi: "सायंकालीन दर्शन" },   time: "16:00", end: "20:30", note: { en: "Darshan resumes; daily katha and bhajan.", hi: "दर्शन पुनः आरंभ; नित्य कथा एवं भजन।)" } },
        { name: { en: "Sandhya Aarti",      hi: "संध्या आरती" },       time: "19:00", end: "19:30", note: { en: "Evening lamp offering to the deities.", hi: "देवताओं को संध्या दीप अर्पण।" } },
        { name: { en: "Shayan Aarti",       hi: "शयन आरती" },          time: "21:00", end: "21:15", note: { en: "Final aarti; temple closes at 9:15 PM.", hi: "अंतिम आरती; मंदिर रात्रि 9:15 बजे बंद।" } }
      ],
      specialHeading: { en: "Festival & Ashtami Timings", hi: "उत्सव एवं अष्टमी समय" },
      specialNote: { en: "On these days the temple opens earlier, stays open longer and offers a midnight aarti.", hi: "इन दिनों मंदिर पूर्व खुलता है, अधिक समय तक खुला रहता है और मध्यरात्रि आरती होती है।" },
      special: [
        { name: { en: "Monthly Ashtami",   hi: "मासिक अष्टमी" },   time: { en: "7:00 AM – 10:00 PM", hi: "प्रातः 7:00 – रात्रि 10:00" }, note: { en: "Special havan at 9:00 AM and bhajan sandhya at 7:00 PM.", hi: "प्रातः 9:00 बजे विशेष हवन एवं सायं 7:00 बजे भजन संध्या।" } },
        { name: { en: "Mahashivratri",     hi: "महाशिवरात्रि" },   time: { en: "Open all night", hi: "रात्रिभर खुला" }, note: { en: "Four-prahar aarti and continuous jagran.", hi: "चार प्रहर आरती एवं निरंतर जागरण।" } },
        { name: { en: "Janmashtami",       hi: "जन्माष्टमी" },     time: { en: "7:00 AM – 12:30 AM", hi: "प्रातः 7:00 – रात्रि 12:30" }, note: { en: "Midnight abhishek and jhula shringar.", hi: "मध्यरात्रि अभिषेक एवं झूला श्रृंगार।" } },
        { name: { en: "Navratri",          hi: "नवरात्रि" },       time: { en: "7:00 AM – 10:30 PM", hi: "प्रातः 7:00 – रात्रि 10:30" }, note: { en: "Garba and Durga Saptashati path every evening.", hi: "प्रत्येक सायं गरबा एवं दुर्गा सप्तशती पाठ।" } },
        { name: { en: "Foundation Day (25 Nov)", hi: "स्थापना दिवस (25 नवंबर)" }, time: { en: "7:30 AM – 11:00 PM", hi: "प्रातः 7:30 – रात्रि 11:00" }, note: { en: "Mahabhandara and cultural evening.", hi: "महाभंडारा एवं सांस्कृतिक संध्या।" } }
      ],
      live: {
        heading: { en: "Live Darshan", hi: "लाइव दर्शन" },
        text: { en: "Cannot visit today? Join the live stream of the aarti from wherever you are.", hi: "आज दर्शन नहीं कर पा रहे? कहीं से भी आरती का लाइव प्रसारण देखें।" },
        url: "https://www.facebook.com/kalimata.mandir.7"
      }
    },

    /* --------------------------------------------------------- DONATION */
    donation: {
      title: { en: "Donation & Seva", hi: "दान एवं सेवा" },
      intro: {
        en: "Every offering becomes a meal, a medicine, a rescued cow or a moment of care. Choose a seva close to your heart.",
        hi: "प्रत्येक चढ़ावा भोजन, औषधि, बचाई गई गौ या देखभाल का क्षण बनता है। अपने हृदय के निकट सेवा चुनिए।"
      },
      causesHeading: { en: "Where Your Donation Goes", hi: "आपका दान कहाँ जाता है" },
      causes: [
        { image: "images/langar.jpg", title: { en: "Langar (Bhandara)", hi: "लंगर (भंडारा)" },
          text: { en: "Daily free meals for devotees, pilgrims and anyone in need.", hi: "भक्तों, तीर्थयात्रियों एवं आवश्यकता वालों हेतु नित्य निःशुल्क भोजन। " },
          impact: { en: "Rs 501 feeds 10 people", hi: "रु. 501 से 10 लोगों का भोजन" } },
        { image: "images/gauseva.jpg", title: { en: "Gau Seva", hi: "गौ सेवा" },
          text: { en: "Fodder, medicine and shelter for rescued and injured cows.", hi: "बचाई गई एवं घायल गौवंश हेतु चारा, औषधि एवं आश्रय।" },
          impact: { en: "Rs 1,100 feeds one cow for a month", hi: "रु. 1,100 से एक गौ का एक माह का चारा" } },
        { image: "images/new7.jpg", title: { en: "Eye Camps", hi: "नेत्र शिविर" },
          text: { en: "Free eye check-ups, spectacles and cataract surgeries.", hi: "निःशुल्क नेत्र जाँच, चश्मे एवं मोतियाबिंद ऑपरेशन।" },
          impact: { en: "Rs 2,500 restores sight to one person", hi: "रु. 2,500 से एक व्यक्ति की दृष्टि लौटती है" } },
        { image: "images/physiotherapy.jpg", title: { en: "Physiotherapy Camps", hi: "फिजियोथेरेपी शिविर" },
          text: { en: "Free therapy and mobility care for elders and the disabled.", hi: "वृद्धजनों एवं दिव्यांगों हेतु निःशुल्क थेरेपी एवं गतिशीलता देखभाल।" },
          impact: { en: "Rs 5,100 funds a full therapy camp day", hi: "रु. 5,100 से एक दिवस का पूर्ण थेरेपी शिविर" } },
        { image: "images/shivratri.jpg", title: { en: "Temple Seva", hi: "मंदिर सेवा" },
          text: { en: "Daily puja, flowers, ghee for lamps and upkeep of the Dham.", hi: "नित्य पूजा, पुष्प, दीप हेतु घी एवं धाम के रखरखाव हेतु।" },
          impact: { en: "Rs 101 sponsors a day of lamp offering", hi: "रु. 101 से एक दिवस का दीप अर्पण" } }
      ],
      countersHeading: { en: "Your Seva in Numbers", hi: "आपकी सेवा के आँकड़े" },
      counters: [
        { value: 10000, suffix: "+", label: { en: "Meals Served", hi: "भोजन परोसा गया" } },
        { value: 50,   suffix: "+", label: { en: "Cows Cared For", hi: "गौवंश की देखभाल" } },
        { value: 200,   suffix: "+", label: { en: "Patients Treated", hi: "रोगियों का उपचार" } },
        { value: 2,     suffix: "",  label: { en: "Camps Held This Year", hi: "इस वर्ष आयोजित शिविर" } }
      ],
      howHeading: { en: "How to Donate", hi: "दान कैसे करें" },
      upi: {
        heading: { en: "Scan & Pay via UPI", hi: "UPI से स्कैन कर भुगतान करें" },
        id: "QR917973632738-5143@unionbankofindia",
        note: { en: "Works with GPay, PhonePe, Paytm, BHIM and every UPI app.", hi: "GPay, PhonePe, Paytm, BHIM एवं सभी UPI ऐप्स से कार्य करता है।" },
        qr: "images/new6.jpg",
        // Deep link used by the "Pay with UPI app" button on mobile
        link: "upi://pay?pa=Siddheshwaridham@okhdfcbank&pn=Mandir%20Siddheshwari%20Peeth%20Dham&cu=INR",
        payInApp: { en: "Pay with UPI app", hi: "UPI ऐप से भुगतान करें" }
      },
      amounts: {
        heading: { en: "Choose an Amount", hi: "राशि चुनें" },
        note: { en: "Selecting an amount fills the receipt form below.", hi: "राशि चुनने पर नीचे का रसीद फ़ॉर्म भर जाएगा।" },
        options: [101, 501, 1100, 5100],
        custom: { en: "Custom", hi: "अन्य राशि" },
        currency: { en: "Rs", hi: "रु." }
      },
      bank: {
        heading: { en: "Bank Transfer Details", hi: "बैंक हस्तांतरण विवरण" },
        rows: [
          { label: { en: "Account Name",   hi: "खाता नाम" },       value: "Shri Sideshwari Pith Dham Society" },
          { label: { en: "Account Number", hi: "खाता संख्या" },     value: "397201010035143" },
          { label: { en: "IFSC Code",      hi: "IFSC कोड" },        value: "UBIN0539724" },
          { label: { en: "Bank",           hi: "बैंक" },            value: "UNION BANK OF INDIA" },
          { label: { en: "Branch",         hi: "शाखा" },            value: "Majith Mandi, Amritsar" }
        ],
        online: { en: "Donate Online (Card / Netbanking)", hi: "ऑनलाइन दान (कार्ड / नेटबैंकिंग)" },
        onlineNote: { en: "Kindly transfer using the above details via your bank's app, netbanking or branch.", hi: "कृपया उपरोक्त विवरण का उपयोग कर अपने बैंक के ऐप, नेटबैंकिंग या शाखा के माध्यम से हस्तांतरण करें।" }
      },
      tax: {
        heading: { en: "80G Tax Benefit", hi: "80G कर लाभ" },
        text: { en: "Donations to the trust are eligible for deduction under Section 80G of the Income Tax Act. A stamped receipt is issued for every donation above Rs 500.", hi: "न्यास को दिया गया दान आयकर अधिनियम की धारा 80G के अंतर्गत छूट हेतु पात्र है। रु. 500 से अधिक के प्रत्येक दान पर मुद्रित रसीद जारी की जाती है।" }
      },
      form: {
        heading: { en: "Request a Receipt", hi: "रसीद का अनुरोध करें" },
        note: { en: "Fill this form to receive your 80G receipt by email.", hi: "ईमेल द्वारा 80G रसीद प्राप्त करने हेतु यह फ़ॉर्म भरें।" },
        fields: {
          name:  { en: "Full Name", hi: "पूरा नाम" },
          phone: { en: "Phone", hi: "फ़ोन" },
          email: { en: "Email", hi: "ईमेल" },
          amount:{ en: "Donation Amount (Rs)", hi: "दान राशि (रु.)" },
          pan:   { en: "PAN (for 80G)", hi: "पैन (80G हेतु)" },
          message:{ en: "Message (optional)", hi: "संदेश (वैकल्पिक)" }
        },
        submit: { en: "Submit Request", hi: "अनुरोध भेजें" },
        success: { en: "Thank you! Your receipt request has been recorded.", hi: "धन्यवाद! आपका रसीद अनुरोध दर्ज हो गया है।" }
      },
      trust: {
        heading: { en: "Our Promise of Transparency", hi: "पारदर्शिता का हमारा वचन" },
        text: { en: "Every rupee is accounted for and audited annually. Accounts are available to any donor on request, and each seva is reported in our monthly bulletin. Your generosity is received with gratitude and used with care.", hi: "प्रत्येक रुपये का लेखा-जोखा रखा जाता है और वार्षिक लेखा-परीक्षण होता है। लेखे किसी भी दानकर्ता के अनुरोध पर उपलब्ध हैं एवं प्रत्येक सेवा की जानकारी मासिक पत्रिका में दी जाती है। आपकी उदारता हृदय से स्वीकार की जाती है और सावधानी से उपयोग की जाती है।" }
      }
    },

    /* ---------------------------------------------------------- CONTACT */
    contact: {
      title: { en: "Contact Us", hi: "संपर्क करें" },
      intro: {
        en: "We would love to hear from you — for darshan queries, seva, or simply to say Jai Shri Ram.",
        hi: "हम आपसे सुनना चाहेंगे — दर्शन संबंधी प्रश्न, सेवा अथवा केवल जय श्री राम कहने के लिए।"
      },
      detailsHeading: { en: "Reach the Temple", hi: "मंदिर से संपर्क" },
      form: {
        heading: { en: "Send Us a Message", hi: "हमें संदेश भेजें" },
        note: { en: "We usually reply within two working days.", hi: "हम सामान्यतः दो कार्यदिवसों में उत्तर देते हैं।" },
        fields: {
          name: { en: "Your Name", hi: "आपका नाम" },
          phone: { en: "Phone", hi: "फ़ोन" },
          message: { en: "Message", hi: "संदेश" }
        },
        submit: { en: "Send Message", hi: "संदेश भेजें" },
        success: { en: "Thank you! Your message has been recorded.", hi: "धन्यवाद! आपका संदेश दर्ज हो गया है।" }
      },
      reachHeading: { en: "How to Reach", hi: "कैसे पहुँचें" },
      reach: [
        { mode: { en: "Nearest Railway Station", hi: "निकटतम रेलवे स्टेशन" }, name: { en: "Amritsar Junction", hi: "अमृतसर जंक्शन" }, note: { en: "About 6 km — 20 minutes by auto.", hi: "लगभग 6 किमी — ऑटो से 20 मिनट।" } },
        { mode: { en: "Nearest Airport", hi: "निकटतम हवाई अड्डा" }, name: { en: "Sri Guru Ram Das Ji International Airport, Amritsar", hi: "श्री गुरु राम दास जी अंतर्राष्ट्रीय हवाई अड्डा, अमृतसर" }, note: { en: "About 15 km — 30 minutes by taxi.", hi: "लगभग 15 किमी — टैक्सी से 30 मिनट। (नमूना)" } },
        { mode: { en: "Nearest Bus Stand", hi: "निकटतम बस स्टैंड" }, name: { en: "Amritsar Bus Stand", hi: "अमृतसर बस स्टैंड" }, note: { en: "About 5 km — shared auto available.", hi: "लगभग 5 किमी — शेयर ऑटो उपलब्ध।" } },
        { mode: { en: "Local Transport", hi: "स्थानीय परिवहन" }, name: { en: "Auto & E-rickshaw", hi: "ऑटो एवं ई-रिक्शा" }, note: { en: "Ask for 'Khazana Gate'.", hi: "'खजाना गेट' कहें।" } }
      ],
      
    }
  },

  /* =============================================================== FOOTER */
  footer: {
    about: {
      en: "A centre of devotion and seva serving devotees, pilgrims and the community.",
      hi: "भक्तों, तीर्थयात्रियों एवं समाज की सेवा हेतु भक्ति और सेवा का केंद्र।"
    },
    quickLinks: { en: "Quick Links", hi: "त्वरित लिंक" },
    reachUs:    { en: "Reach Us",    hi: "संपर्क" },
    followUs:   { en: "Follow Us",   hi: "हमसे जुड़ें" },
    copyright: {
      en: "© 2026 Mandir Siddheshwari Peeth Dham Trust. All rights reserved.",
      hi: "© 2026 मंदिर सिद्धेश्वरी पीठ धाम ट्रस्ट। सर्वाधिकार सुरक्षित।"
    }
  }
};
