
// =====================================
// SAKLOLOPH - BILINGUAL JAVASCRIPT
// =====================================

let currentLanguage = "fil";

const translations = {
    en: {
        subtitle: "Your Offline Household Emergency Planner",
        welcome: "Welcome to SakloloPH!",
        welcomeDesc: "Prepare your household before an emergency happens.",
        guides: "Emergency Guides",
        guidesDesc: "Choose an emergency to view its safety instructions.",
        flood: "FLOOD",
        earthquake: "EARTHQUAKE",
        fire: "FIRE",
        centers: "Evacuation Centers",
        centersDesc: "Select your city to view its evacuation centers and emergency contacts.",
        cityLabel: "Select City",
        cityPlaceholder: "-- Select a city --",
        national: "National Emergency Hotline",
        emergency: "Emergency Hotline",
        copy: "Copy Number",
        hotlineNote: "Verify contact numbers before relying on them during an emergency.",
        plan: "Household Emergency Plan",
        planDesc: "Enter basic information about your household to create a simple plan.",
        family: "Number of household members",
        children: "Number of children",
        elderly: "Number of senior citizens",
        assistance: "Members needing additional assistance",
        generate: "Generate My Plan",
        gobag: "🎒 Emergency Go-Bag Checklist",
        gobagDesc: "Check the items you already have. Your progress will be saved on this device.",
        food: "Food and Water",
        health: "Health and Safety",
        equipment: "Emergency Equipment",
        documents: "Important Documents and Personal Items",
        reset: "Reset Checklist",
        contacts: "📞 Household Emergency Contacts",
        contactsDesc: "Save important numbers for your family and trusted people.",
        contactName: "Contact Name",
        contactNumber: "Phone Number",
        relationship: "Relationship",
        addContact: "Add Contact",
        settings: "⚙️ Settings",
        language: "Language",
        about: "About SakloloPH",
        aboutDesc: "SakloloPH is an offline household emergency preparedness planner. It provides safety guides, household planning, a Go-Bag checklist, and emergency contacts.",
        aboutWarning: "This is a student prototype. Evacuation center locations and hotline numbers must be verified with the local government.",
        offline: "Offline Use",
        offlineDesc: "Open the app while connected to the internet at least once to save its main files.",
        offlineStorage: "Contacts, language preference, and Go-Bag progress are saved in this browser on this device.",
        navHome: "Home",
        navBag: "Go-Bag",
        navContacts: "Contacts",
        navSettings: "Settings",
        prepared: "items prepared",
        copied: "Copied: ",
        added: "Contact added successfully!",
        deleteConfirm: "Delete this contact?",
        resetConfirm: "Are you sure you want to reset your Go-Bag checklist?",
        noContacts: "No contacts added yet.",
        savedContacts: "Saved Contacts",
        delete: "Delete Contact",
        details: "View Details and Hotlines",
        demo: "Demonstration information - verify with LGU",
        selectCenter: "Select a listed evacuation site to view its details and emergency contacts. A listed site may not be open or activated during every emergency.",
        city: "City",
        barangay: "Barangay",
        address: "Address",
        facilities: "Facilities",
        verifyCenter: "Confirm the exact location, opening, capacity, and activation with the barangay or CDRRMO before going there.",
        centerHotlines: "Emergency Hotlines for",
        purpose: "Purpose",
        call: "Call",
        verifyHotline: "Some numbers shown may require reconfirmation. Check the latest official LGU hotline directory before relying on them.",
        invalid: "Please enter valid household numbers.",
        invalidTotal: "The combined number of children, senior citizens, and members needing assistance cannot exceed the total household members.",
        planHeading: "Your Household Emergency Plan",
        total: "Total household members",
        childrenCount: "Children",
        elderlyCount: "Senior citizens",
        assistanceCount: "Members needing assistance",
        actions: "Recommended Actions",
        action1: "Identify at least two possible evacuation routes.",
        action2: "Choose a safe meeting place outside your home.",
        action3: "Keep emergency contact numbers accessible.",
        action4: "Prepare a Go-Bag that can be carried easily.",
        action5: "Make sure every household member knows the plan.",
        childAction: "Assign an adult to accompany and assist the children.",
        elderlyAction: "Prepare medicines and mobility assistance for senior citizens.",
        assistanceAction: "Plan how to assist household members who may need additional support.",
        reminder: "Reminder: Practice your household emergency plan regularly.",
        close: "Click the same guide again to close it."
    },

    fil: {
        subtitle: "Gabay sa Paghahanda ng Pamilya sa Sakuna",
        welcome: "Maligayang pagdating sa SakloloPH!",
        welcomeDesc: "Ihanda ang inyong pamilya bago magkaroon ng sakuna.",
        guides: "Mga Gabay sa Sakuna",
        guidesDesc: "Pumili ng sakuna upang makita ang mga gabay sa kaligtasan.",
        flood: "BAHA",
        earthquake: "LINDOL",
        fire: "SUNOG",
        centers: "Mga Evacuation Center",
        centersDesc: "Piliin ang inyong lungsod upang makita ang mga evacuation center at emergency contact.",
        cityLabel: "Pumili ng Lungsod",
        cityPlaceholder: "-- Pumili ng lungsod --",
        national: "Pambansang Emergency Hotline",
        emergency: "Emergency Hotline",
        copy: "Kopyahin ang Numero",
        hotlineNote: "Tiyaking tama ang mga numero bago gamitin sa oras ng sakuna.",
        plan: "Plano ng Pamilya sa Panahon ng Sakuna",
        planDesc: "Ilagay ang pangunahing impormasyon tungkol sa inyong pamilya upang makagawa ng simpleng plano.",
        family: "Bilang ng miyembro ng pamilya",
        children: "Bilang ng mga bata",
        elderly: "Bilang ng mga senior citizen",
        assistance: "Mga nangangailangan ng karagdagang tulong",
        generate: "Gumawa ng Plano",
        gobag: "🎒 Checklist ng Emergency Go-Bag",
        gobagDesc: "Lagyan ng tsek ang mga gamit na mayroon na kayo. Awtomatikong mase-save ang inyong progreso sa device na ito.",
        food: "Pagkain at Tubig",
        health: "Kalusugan at Kaligtasan",
        equipment: "Mga Kagamitang Pang-emergency",
        documents: "Mahahalagang Dokumento at Personal na Gamit",
        reset: "I-reset ang Checklist",
        contacts: "📞 Mga Emergency Contact ng Pamilya",
        contactsDesc: "I-save ang mahahalagang numero ng inyong pamilya at mga pinagkakatiwalaang tao.",
        contactName: "Pangalan",
        contactNumber: "Numero ng Telepono",
        relationship: "Relasyon",
        addContact: "Magdagdag ng Contact",
        settings: "⚙️ Mga Setting",
        language: "Wika",
        about: "Tungkol sa SakloloPH",
        aboutDesc: "Ang SakloloPH ay isang offline na gabay sa paghahanda ng pamilya sa panahon ng sakuna. Nagbibigay ito ng mga gabay sa kaligtasan, plano ng pamilya, checklist ng Go-Bag, at mga emergency contact.",
        aboutWarning: "Ito ay isang prototype para sa proyekto ng mag-aaral. Kailangang kumpirmahin sa lokal na pamahalaan ang mga lokasyon ng evacuation center at mga numero ng hotline.",
        offline: "Paggamit Nang Walang Internet",
        offlineDesc: "Buksan muna ang app habang may internet upang ma-save ang mga pangunahing file nito.",
        offlineStorage: "Ang mga contact, piniling wika, at progreso ng Go-Bag ay naka-save sa browser ng device na ito.",
        navHome: "Tahanan",
        navBag: "Go-Bag",
        navContacts: "Mga Contact",
        navSettings: "Mga Setting",
        prepared: "na gamit ang naihanda",
        copied: "Nakopya: ",
        added: "Matagumpay na naidagdag ang contact!",
        deleteConfirm: "Sigurado ka bang buburahin ang contact na ito?",
        resetConfirm: "Sigurado ka bang nais mong i-reset ang checklist?",
        noContacts: "Wala pang naidagdag na contact.",
        savedContacts: "Mga Naka-save na Contact",
        delete: "Burahin ang Contact",
        details: "Tingnan ang Detalye at mga Hotline",
        demo: "Halimbawa lamang - kumpirmahin sa lokal na pamahalaan",
        selectCenter: "Pumili ng nakalistang evacuation site upang makita ang detalye at mga emergency contact. Maaaring hindi bukas o aktibo ang isang lugar sa bawat sakuna.",
        city: "Lungsod",
        barangay: "Barangay",
        address: "Tirahan",
        facilities: "Mga Pasilidad",
        verifyCenter: "Kumpirmahin muna sa barangay o CDRRMO ang eksaktong lokasyon, pagbubukas, kapasidad, at aktuwal na paggamit nito bago pumunta.",
        centerHotlines: "Mga Emergency Hotline para sa",
        purpose: "Layunin",
        call: "Tumawag",
        verifyHotline: "Maaaring kailangang kumpirmahin muli ang ilang numero. Tingnan ang pinakabagong opisyal na talaan ng hotline ng LGU bago umasa rito.",
        invalid: "Maglagay ng wastong bilang ng mga miyembro ng pamilya.",
        invalidTotal: "Hindi maaaring lumampas sa kabuuang miyembro ng pamilya ang pinagsamang bilang ng mga bata, senior citizen, at nangangailangan ng tulong.",
        planHeading: "Plano ng Inyong Pamilya sa Sakuna",
        total: "Kabuuang miyembro ng pamilya",
        childrenCount: "Mga bata",
        elderlyCount: "Mga senior citizen",
        assistanceCount: "Mga nangangailangan ng tulong",
        actions: "Mga Iminungkahing Gawain",
        action1: "Tukuyin ang hindi bababa sa dalawang posibleng daan palabas.",
        action2: "Pumili ng ligtas na lugar na maaaring pagtagpuan sa labas ng tahanan.",
        action3: "Ihanda at panatilihing madaling makita ang mga emergency contact number.",
        action4: "Maghanda ng Go-Bag na madaling dalhin.",
        action5: "Tiyaking alam ng bawat miyembro ng pamilya ang inyong plano.",
        childAction: "Magtalaga ng nakatatanda na gagabay at tutulong sa mga bata.",
        elderlyAction: "Ihanda ang mga gamot at tulong sa paggalaw para sa mga senior citizen.",
        assistanceAction: "Magplano kung paano tutulungan ang mga miyembrong nangangailangan ng karagdagang suporta.",
        reminder: "Paalala: Regular na magsanay sa pagsunod sa plano ng pamilya.",
        close: "Pindutin muli ang parehong gabay upang isara ito."
    }
};

function t(key) {
    return translations[currentLanguage][key] || translations.en[key] || key;
}


// -------------------------------------
// PAGE NAVIGATION
// -------------------------------------

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active");
        window.scrollTo(0, 0);
    }
}


// -------------------------------------
// EMERGENCY GUIDES
// -------------------------------------

let selectedGuide = null;

const emergencyGuides = {
    "flood": {
        "en": {
            "title": "Flood Safety Guide",
            "sections": [
                {
                    "heading": "What to Do Before a Flood",
                    "steps": [
                        "Know your flood risk. Learn whether your home or community is prone to flooding and identify safer, higher areas.",
                        "Monitor weather updates and official announcements from PAGASA and your local government.",
                        "Prepare an emergency Go-Bag with drinking water, ready-to-eat food, medicines, flashlight, batteries, clothes, and important documents.",
                        "Protect important belongings. Move appliances, valuables, and documents to higher places or waterproof containers.",
                        "Prepare emergency contacts. Keep numbers for local authorities, rescue teams, and family members accessible.",
                        "Follow evacuation advisories. Be ready to leave immediately when local authorities advise or order evacuation.",
                        "Do not wait for floodwater to rise. Evacuate early, especially when flash floods or storm surges are expected."
                    ]
                },
                {
                    "heading": "What to Do After a Flood",
                    "steps": [
                        "Wait for official clearance. Do not return home until authorities confirm that the area is safe.",
                        "Avoid floodwater. Stay away from standing or moving water that may contain sewage, chemicals, sharp objects, and other hazards.",
                        "Be careful around electricity. Stay away from fallen power lines, damaged electrical equipment, and exposed wires.",
                        "Use safe lighting. Use a flashlight or battery-powered light instead of candles to reduce fire risk.",
                        "Wear protective clothing. Use boots, gloves, long clothing, and face protection when cleaning flooded areas.",
                        "Check drinking water safety. Follow local health office advisories and drink only water confirmed to be safe.",
                        "Throw away contaminated food. Discard food that has touched floodwater or has spoiled.",
                        "Clean and dry your home. Remove standing water, clean affected areas, and dry wet belongings as soon as it is safe to help prevent mold.",
                        "Dispose of damaged materials. Remove items that cannot be properly cleaned, repaired, or dried.",
                        "Avoid carbon monoxide poisoning. Never operate a gasoline generator, grill, or similar equipment inside an enclosed space or near windows.",
                        "Clean safely. Work with others, use equipment properly, and take breaks to avoid exhaustion.",
                        "Watch your health. Seek medical care if you become ill, dizzy, weak, or experience other symptoms after exposure to floodwater or contaminated areas.",
                        "Take care of yourself. Rest, eat properly, and seek support if you experience stress or anxiety after the disaster."
                    ]
                }
            ]
        },
        "fil": {
            "title": "Gabay sa Kaligtasan Kapag may Baha",
            "sections": [
                {
                    "heading": "Mga Dapat Gawin Bago ang Baha",
                    "steps": [
                        "Alamin ang panganib ng baha sa inyong lugar. Tukuyin kung madalas bahain ang inyong bahay o komunidad at alamin ang mas mataas at ligtas na lugar.",
                        "Subaybayan ang mga ulat ng panahon at opisyal na anunsyo mula sa PAGASA at lokal na pamahalaan.",
                        "Maghanda ng emergency Go-Bag. Maglagay ng inuming tubig, pagkaing handa nang kainin, gamot, flashlight, baterya, damit, at mahahalagang dokumento.",
                        "Protektahan ang mahahalagang gamit. Ilagay ang mga kagamitan, appliances, at dokumento sa mataas o hindi mapasok ng tubig na lalagyan.",
                        "Ihanda ang mga emergency contact. Panatilihing madaling makita ang mga numero ng lokal na awtoridad, rescue team, at kapamilya.",
                        "Sundin ang mga abiso sa paglikas. Maging handang umalis agad kapag pinayuhan o inutusan ng mga lokal na awtoridad.",
                        "Huwag hintaying tumaas ang baha. Lumikas nang maaga, lalo na kung inaasahan ang biglaang pagbaha o storm surge."
                    ]
                },
                {
                    "heading": "Mga Dapat Gawin Pagkatapos ng Baha",
                    "steps": [
                        "Hintayin ang opisyal na pahintulot. Huwag bumalik sa bahay hangga’t hindi kinukumpirma ng mga awtoridad na ligtas na ang lugar.",
                        "Iwasan ang tubig-baha. Lumayo sa nakatigil o umaagos na tubig dahil maaaring may halong imburnal, kemikal, matutulis na bagay, at iba pang panganib.",
                        "Mag-ingat sa kuryente. Lumayo sa natumbang linya ng kuryente, sirang kagamitang elektrikal, at nakalitaw na kawad.",
                        "Gumamit ng ligtas na ilaw. Gumamit ng flashlight o ilaw na de-baterya sa halip na kandila upang maiwasan ang sunog.",
                        "Magsuot ng proteksiyon. Gumamit ng bota, guwantes, mahabang damit, at proteksiyon sa mukha kapag naglilinis ng binahang lugar.",
                        "Suriin ang inuming tubig. Sundin ang mga abiso ng lokal na health office at uminom lamang ng tubig na kumpirmadong ligtas.",
                        "Itapon ang kontaminadong pagkain. Itapon ang pagkaing nadikitan ng tubig-baha o panis na.",
                        "Linisin at patuyuin ang bahay. Alisin ang naipong tubig, linisin ang mga apektadong lugar, at patuyuin ang basang gamit sa lalong madaling panahong ligtas gawin upang maiwasan ang amag.",
                        "Itapon ang mga sirang materyales. Alisin ang mga bagay na hindi na maaaring linisin, kumpunihin, o patuyuin nang maayos.",
                        "Iwasan ang pagkalason sa carbon monoxide. Huwag magpaandar ng generator na de-gasolina, ihawan, o katulad na kagamitan sa loob ng saradong lugar o malapit sa bintana.",
                        "Maglinis nang ligtas. Makipagtulungan sa ibang tao, gamitin nang tama ang kagamitan, at magpahinga upang hindi mapagod nang sobra.",
                        "Bantayan ang kalusugan. Magpatingin kung makaranas ng pagkakasakit, pagkahilo, panghihina, o iba pang sintomas matapos malantad sa tubig-baha o kontaminadong lugar.",
                        "Pangalagaan ang sarili. Magpahinga, kumain nang maayos, at humingi ng suporta kung nakararanas ng stress o pagkabalisa pagkatapos ng sakuna."
                    ]
                }
            ]
        }
    },

        "earthquake": {
        "en": {
            "title": "Earthquake Safety Guide",
            "sections": [
                {
                    "heading": "What to Do Before an Earthquake",
                    "steps": [
                        "Know your area’s earthquake risk. Identify whether your home, school, or workplace is located in an earthquake-prone area.",
                        "Practice Drop, Cover, and Hold On. DROP: Get down on your hands and knees. COVER: Protect your head and neck with your arms and take shelter under a sturdy table or desk, if available. HOLD ON: Hold onto your shelter until the shaking stops.",
                        "Secure heavy furniture and objects. Fasten cabinets, shelves, televisions, mirrors, and other heavy items to prevent them from falling.",
                        "Inspect your home or building. Check for structural weaknesses and have necessary repairs or improvements made by qualified professionals.",
                        "Prepare communication methods. Keep your phone charged, prepare a power bank, and have a battery-powered radio for emergency updates.",
                        "Establish an emergency contact plan. Identify family members or trusted individuals who can assist you during an emergency.",
                        "Learn basic emergency skills. Familiarize yourself with first aid, CPR, fire extinguisher use, and how to safely turn off household utilities.",
                        "Prepare for possible utility interruptions. Be ready for temporary loss of electricity, water, and other essential services.",
                        "Prepare an emergency kit. Store enough food, drinking water, medicines, clothing, flashlights, batteries, whistles, and other essential supplies.",
                        "Organize emergency kits for different situations. Go-Bag: portable supplies for at least three days while evacuating. Home Emergency Kit: supplies for at least two weeks at home. Bedside Emergency Kit: sturdy shoes, a flashlight, a whistle, and a dust mask near your bed.",
                        "Secure important documents. Keep identification cards, medical records, financial documents, and emergency contact information in a waterproof container or secure digital backup.",
                        "Check your emergency supplies regularly. Replace expired food, water, and medicines and ensure that all emergency equipment is working."
                    ]
                },
                {
                    "heading": "What to Do During an Earthquake",
                    "steps": [
                        "Stay calm. Avoid panicking and immediately prepare to protect yourself when shaking begins.",
                        "DROP. Get down on your hands and knees to prevent being knocked over.",
                        "COVER. Protect your head and neck with your arms and take shelter under a sturdy table or desk, if available.",
                        "HOLD ON. Hold onto your shelter until the shaking completely stops.",
                        "If you are in bed, stay there. Cover your head and neck with a pillow and avoid moving until the shaking stops.",
                        "If you are outdoors, move to an open area. Stay away from buildings, trees, power lines, and other objects that may fall.",
                        "If you are driving, stop safely. Keep away from bridges, overpasses, buildings, trees, and electrical wires. Remain inside your vehicle until the shaking stops.",
                        "If you use a wheelchair or walker, secure yourself. Lock your wheelchair wheels, remain seated, and protect your head and neck with your arms or any available object.",
                        "Stay in your safe position. Do not rush outside or move around while the ground is shaking.",
                        "Wait until the shaking stops. Be prepared for possible falling debris and aftershocks."
                    ]
                },
                {
                    "heading": "What to Do After an Earthquake",
                    "steps": [
                        "Stay calm and assess your surroundings. Wait briefly before standing and check for possible hazards or falling debris.",
                        "Protect your feet. Wear sturdy shoes to avoid injuries from broken glass and scattered debris.",
                        "Evacuate if it is safe. Leave damaged buildings and move to an open area away from structures, trees, and power lines.",
                        "Move to higher ground if near the coast. If the earthquake was strong or prolonged, immediately move inland or to higher ground because a tsunami may follow. Do not wait for an official warning.",
                        "Be prepared for aftershocks. If shaking happens again, immediately practice Drop, Cover, and Hold On.",
                        "Signal for help if trapped. Cover your mouth and nose against dust, use a whistle, or knock on solid objects to alert rescuers.",
                        "Check for injuries. Give first aid when possible and seek medical assistance for serious injuries.",
                        "Assist others. Help children, older adults, persons with disabilities, and injured individuals when it is safe.",
                        "Leave unsafe buildings. If your home or building is damaged, move to a safer location and bring your emergency kit if accessible.",
                        "Avoid open flames. Use flashlights instead of candles, matches, or lighters to prevent fires.",
                        "Check for gas leaks. Avoid operating electrical switches or appliances if you suspect a gas leak. Leave the area immediately and report the leak to authorities or the utility provider.",
                        "Monitor official announcements. Listen to local radio, television, or verified government updates for emergency instructions.",
                        "Inform family members. Send a message to relatives or emergency contacts to let them know you are safe.",
                        "Inspect your home before returning. Check for visible structural damage and damaged gas, water, electrical, and sewage systems. Have serious damage assessed by qualified professionals.",
                        "Take care of your health and well-being. Eat properly, get enough rest, and seek emotional support if you experience stress or anxiety after the earthquake."
                    ]
                }
            ]
        },
        "fil": {
            "title": "Gabay sa Kaligtasan Kapag may Lindol",
            "sections": [
                {
                    "heading": "Mga Dapat Gawin Bago ang Lindol",
                    "steps": [
                        "Alamin ang panganib ng lindol sa inyong lugar. Tukuyin kung ang inyong bahay, paaralan, o pinagtatrabahuhan ay nasa lugar na madalas makaranas ng lindol.",
                        "Magsanay ng Drop, Cover, and Hold On. DROP: Yumuko at dumapa gamit ang mga kamay at tuhod. COVER: Takpan ang ulo at leeg gamit ang mga braso at sumilong sa ilalim ng matibay na mesa kung mayroon. HOLD ON: Kumapit sa inyong silungan hanggang tumigil ang pagyanig.",
                        "Ikabit nang maayos ang mabibigat na kasangkapan. Siguraduhing nakakabit ang mga kabinet, estante, telebisyon, salamin, at iba pang mabibigat na bagay upang hindi matumba.",
                        "Suriin ang bahay o gusali. Alamin kung may kahinaan sa istruktura at ipagawa ang kinakailangang pagkukumpuni sa mga kwalipikadong propesyonal.",
                        "Maghanda ng paraan ng komunikasyon. Panatilihing may karga ang cellphone, maghanda ng power bank, at magkaroon ng radyo na de-baterya para sa mga anunsyo.",
                        "Magtakda ng emergency contact plan. Tukuyin ang mga kapamilya o pinagkakatiwalaang tao na maaaring makatulong sa oras ng sakuna.",
                        "Matuto ng mga pangunahing kasanayan sa emerhensiya. Alamin ang first aid, CPR, paggamit ng fire extinguisher, at ligtas na pagsasara ng mga utility sa bahay.",
                        "Maghanda sa posibleng pagkawala ng serbisyo. Maging handa sa pansamantalang pagkawala ng kuryente, tubig, at iba pang pangunahing serbisyo.",
                        "Maghanda ng emergency kit. Mag-imbak ng pagkain, inuming tubig, gamot, damit, flashlight, baterya, pito, at iba pang mahahalagang kagamitan.",
                        "Maghanda ng iba't ibang emergency kit. Go-Bag: mga kagamitang madaling dalhin sa paglikas na sapat nang hindi bababa sa tatlong araw. Home Emergency Kit: mga suplay para sa hindi bababa sa dalawang linggo sa bahay. Bedside Emergency Kit: matibay na sapatos, flashlight, pito, at dust mask na malapit sa kama.",
                        "Ilagay sa ligtas na lalagyan ang mahahalagang dokumento. Protektahan ang mga ID, rekord medikal, dokumentong pinansyal, at emergency contact sa lalagyang hindi nababasa o ligtas na digital backup.",
                        "Regular na suriin ang mga emergency supply. Palitan ang expired na pagkain, tubig, at gamot at tiyaking gumagana ang lahat ng kagamitan."
                    ]
                },
                {
                    "heading": "Mga Dapat Gawin Habang Lumilindol",
                    "steps": [
                        "Manatiling kalmado. Huwag mataranta at agad na protektahan ang sarili kapag nagsimula ang pagyanig.",
                        "DROP. Yumuko at dumapa gamit ang mga kamay at tuhod upang hindi matumba.",
                        "COVER. Takpan ang ulo at leeg gamit ang mga braso at sumilong sa ilalim ng matibay na mesa kung mayroon.",
                        "HOLD ON. Kumapit sa inyong silungan hanggang tuluyang tumigil ang pagyanig.",
                        "Kung nasa kama, manatili roon. Takpan ng unan ang ulo at leeg at iwasang gumalaw hanggang matapos ang pagyanig.",
                        "Kung nasa labas, pumunta sa maluwag na lugar. Lumayo sa mga gusali, puno, linya ng kuryente, at iba pang bagay na maaaring bumagsak.",
                        "Kung nagmamaneho, huminto sa ligtas na lugar. Lumayo sa mga tulay, gusali, puno, at kawad ng kuryente. Manatili sa loob ng sasakyan hanggang tumigil ang pagyanig.",
                        "Kung gumagamit ng wheelchair o walker, tiyaking ligtas ang inyong posisyon. I-lock ang gulong ng wheelchair, manatiling nakaupo, at protektahan ang ulo at leeg.",
                        "Manatili sa ligtas na posisyon. Huwag magmadaling lumabas o maglakad-lakad habang umuuga ang lupa.",
                        "Hintaying tumigil ang pagyanig. Maging handa sa posibleng pagbagsak ng mga bagay at aftershock."
                    ]
                },
                {
                    "heading": "Mga Dapat Gawin Pagkatapos ng Lindol",
                    "steps": [
                        "Manatiling kalmado at suriin ang paligid. Maghintay muna bago tumayo at tingnan kung may panganib o bagay na maaaring bumagsak.",
                        "Protektahan ang mga paa. Magsuot ng matibay na sapatos upang maiwasan ang sugat mula sa bubog at kalat.",
                        "Lumikas kung ligtas. Umalis sa mga sirang gusali at pumunta sa maluwag na lugar na malayo sa mga istruktura, puno, at linya ng kuryente.",
                        "Pumunta sa mataas na lugar kung malapit sa baybayin. Kung malakas o matagal ang lindol, agad na lumayo sa baybayin dahil maaaring magkaroon ng tsunami. Huwag hintayin ang opisyal na babala.",
                        "Maging handa sa aftershock. Kung muling lumindol, gawin agad ang Drop, Cover, and Hold On.",
                        "Humingi ng tulong kung na-trap. Takpan ang bibig at ilong upang hindi makalanghap ng alikabok, gumamit ng pito, o kumatok sa matibay na bagay upang marinig ng mga rescuer.",
                        "Suriin kung may nasugatan. Magbigay ng first aid kung kaya at humingi ng tulong medikal para sa malubhang pinsala.",
                        "Tulungan ang iba. Tumulong sa mga bata, nakatatanda, taong may kapansanan, at mga nasugatan kung ligtas gawin.",
                        "Umalis sa mga gusaling hindi ligtas. Kung nasira ang bahay o gusali, pumunta sa mas ligtas na lugar at dalhin ang emergency kit kung maaabot.",
                        "Iwasan ang apoy. Gumamit ng flashlight sa halip na kandila, posporo, o lighter upang maiwasan ang sunog.",
                        "Suriin kung may tagas ng gas. Huwag gumamit ng switch o kagamitang elektrikal kung may hinalang tagas ng gas. Umalis agad at ipagbigay-alam ito sa mga awtoridad o utility provider.",
                        "Subaybayan ang mga opisyal na anunsyo. Makinig sa radyo, telebisyon, o beripikadong update ng pamahalaan para sa mga tagubilin.",
                        "Ipaalam sa pamilya ang inyong kalagayan. Magpadala ng mensahe sa mga kapamilya o emergency contact upang ipaalam na ligtas kayo.",
                        "Suriin ang bahay bago bumalik. Tingnan kung may pinsala sa istruktura at mga linya ng gas, tubig, kuryente, at imburnal. Ipasuri sa kwalipikadong propesyonal ang malubhang pinsala.",
                        "Pangalagaan ang kalusugan at kapakanan. Kumain nang maayos, magpahinga, at humingi ng emosyonal na suporta kung nakararanas ng stress o pagkabalisa."
                    ]
                }
            ]
        }
    },
    "fire": {
        "en": {
            "title": "Fire Safety Guide",
            "sections": [
                {
                    "heading": "What to Do During a Fire",
                    "steps": [
                        "Stay calm and alert everyone in the building.",
                        "Leave immediately using the nearest safe exit. Do not use elevators.",
                        "Stay low if there is smoke. Crawl under the smoke and cover your nose and mouth with a cloth if available.",
                        "Before opening a door, feel it with the back of your hand. If it is hot, do not open it; use another exit.",
                        "Do not collect belongings or return inside for personal items.",
                        "If your clothes catch fire, STOP, DROP, and ROLL until the flames go out.",
                        "Once outside, move to a safe meeting place away from the building.",
                        "Call the fire department or emergency hotline from a safe location.",
                        "Do not re-enter the building until authorities declare it safe.",
                        "If trapped, close doors between you and the fire, block smoke from entering, and signal for help from a window if safe."
                    ]
                },
                {
                    "heading": "Fire Prevention",
                    "steps": [
                        "Never leave cooking unattended.",
                        "Keep matches, lighters, candles, and flammable materials away from children.",
                        "Avoid overloading electrical outlets and extension cords.",
                        "Check electrical wires, plugs, and appliances for damage.",
                        "Turn off appliances and unplug equipment when not in use, if safe.",
                        "Keep a working smoke alarm and fire extinguisher where appropriate.",
                        "Know at least two ways to exit each room.",
                        "Store flammable liquids away from heat sources.",
                        "Keep hallways, doors, and exits clear.",
                        "Practice a household fire escape plan regularly."
                    ]
                }
            ]
        },
        "fil": {
            "title": "Gabay sa Kaligtasan Kapag may Sunog",
            "sections": [
                {
                    "heading": "Mga Dapat Gawin Kapag may Sunog",
                    "steps": [
                        "Manatiling kalmado at balaan ang lahat ng tao sa gusali.",
                        "Agad na lumikas gamit ang pinakamalapit na ligtas na labasan. Huwag gumamit ng elevator.",
                        "Kung may usok, yumuko o gumapang malapit sa sahig. Takpan ang ilong at bibig gamit ang tela kung mayroon.",
                        "Bago buksan ang pinto, kapain muna ang likod nito gamit ang likod ng kamay. Kung mainit, huwag itong buksan at humanap ng ibang labasan.",
                        "Huwag mag-aksaya ng oras sa pagkuha ng gamit at huwag bumalik sa loob para sa mga personal na bagay.",
                        "Kung nasusunog ang damit, HUMINTO, DUMAPA, at GUMULONG hanggang mamatay ang apoy.",
                        "Pagkalabas, pumunta sa ligtas na lugar na malayo sa gusali.",
                        "Tumawag sa bumbero o emergency hotline mula sa ligtas na lugar.",
                        "Huwag bumalik sa loob hangga't hindi sinasabing ligtas na ito ng mga awtoridad.",
                        "Kung na-trap, isara ang mga pinto sa pagitan ninyo at ng apoy, harangan ang pagpasok ng usok, at humingi ng tulong sa bintana kung ligtas."
                    ]
                },
                {
                    "heading": "Pag-iwas sa Sunog",
                    "steps": [
                        "Huwag iwanang walang nagbabantay ang niluluto.",
                        "Ilayo sa mga bata ang posporo, lighter, kandila, at madaling magliyab na materyales.",
                        "Huwag magsaksak ng napakaraming kagamitan sa iisang outlet o extension cord.",
                        "Suriin kung may sira ang mga kawad, plug, at kagamitang elektrikal.",
                        "Patayin at tanggalin sa saksakan ang mga kagamitan kapag hindi ginagamit, kung ligtas gawin.",
                        "Maglagay ng gumaganang smoke alarm at fire extinguisher kung naaangkop.",
                        "Alamin ang hindi bababa sa dalawang labasan sa bawat silid.",
                        "Itago ang mga madaling magliyab na likido malayo sa pinagmumulan ng init.",
                        "Panatilihing walang harang ang mga pasilyo, pinto, at labasan.",
                        "Regular na magsanay sa plano ng pamilya para sa paglikas kapag may sunog."
                    ]
                }
            ]
        }
    }
};


// -------------------------------------
// DISPLAY EMERGENCY GUIDES
// -------------------------------------


function showGuide(emergency) {
    const result = document.getElementById("guide-result");

    // Close the guide if the same button is clicked again
    if (selectedGuide === emergency && !result.classList.contains("hidden")) {
        result.classList.add("hidden");
        result.innerHTML = "";
        selectedGuide = null;
        return;
    }

    selectedGuide = emergency;

    const guide = emergencyGuides[emergency][currentLanguage];

    let html = `<h3>${guide.title}</h3>`;

    guide.sections.forEach(function(section) {
        html += `<h4>${section.heading}</h4><ol>`;

        section.steps.forEach(function(step) {
            html += `<li>${step}</li>`;
        });

        html += `</ol>`;
    });

    html += `<p class="small-note">${t("close")}</p>`;

    result.innerHTML = html;

    // IMPORTANT: Make the guide visible
    result.classList.remove("hidden");
}


// -------------------------------------
// EVACUATION CENTERS AND CITY HOTLINES
// -------------------------------------

const cityData = {
    makati: {
        name: {
            en: "Makati City",
            fil: "Lungsod ng Makati"
        },
        centers: [
            {
                id: "makati-san-antonio",
                name: "San Antonio Covered Courts",
                barangay: "San Antonio",
                address: "Barangay San Antonio, Makati City",
                facilities: "Covered courts; confirm which court is activated",
                status: "official"
            },
            {
                id: "makati-palanan",
                name: "Palanan Covered Court",
                barangay: "Palanan",
                address: "Barangay Palanan, Makati City",
                facilities: "Covered court",
                status: "official"
            },
            {
                id: "makati-palanan-school",
                name: "Palanan Elementary School",
                barangay: "Palanan",
                address: "Barangay Palanan, Makati City",
                facilities: "School facilities; confirm availability",
                status: "official"
            },
            {
                id: "makati-poblacion",
                name: "Poblacion Sports Complex",
                barangay: "Poblacion",
                address: "Barangay Poblacion, Makati City",
                facilities: "Sports complex",
                status: "official"
            },
            {
                id: "makati-pio-del-pilar",
                name: "Pio del Pilar Barangay Hall / Sports Complex",
                barangay: "Pio del Pilar",
                address: "Barangay Pio del Pilar, Makati City",
                facilities: "Barangay hall and sports complex",
                status: "official"
            },
            {
                id: "makati-urdaneta",
                name: "Urdaneta Barangay Hall / Multi-Purpose Covered Court",
                barangay: "Urdaneta",
                address: "Barangay Urdaneta, Makati City",
                facilities: "Barangay hall and multi-purpose covered court",
                status: "official"
            },
            {
                id: "makati-bangkal",
                name: "Bangkal Covered Court / Barangay Hall",
                barangay: "Bangkal",
                address: "Barangay Bangkal, Makati City",
                facilities: "Covered court and barangay hall",
                status: "reported"
            },
            {
                id: "makati-pio-school",
                name: "Pio del Pilar Main Elementary School",
                barangay: "Pio del Pilar",
                address: "Barangay Pio del Pilar, Makati City",
                facilities: "School building; confirm availability",
                status: "reported"
            },
            {
                id: "makati-youth",
                name: "Makati Youth Center",
                barangay: "Makati City",
                address: "Makati City",
                facilities: "Youth center; confirm availability",
                status: "reported"
            },
            {
                id: "makati-elementary",
                name: "Makati Elementary School",
                barangay: "Makati City",
                address: "Makati City",
                facilities: "School building; confirm availability",
                status: "reported"
            },
            {
                id: "makati-high",
                name: "Makati High School",
                barangay: "Makati City",
                address: "Makati City",
                facilities: "School building; confirm availability",
                status: "reported"
            }
        ],
        supportFacilities: [],
        hotlines: [
            {
                name: "Makati Command Control / C3",
                purpose: {
                    en: "City emergency coordination",
                    fil: "Koordinasyon sa emerhensiya ng lungsod"
                },
                numbers: ["168", "8236-5790"]
            },
            {
                name: "Makati City Hall",
                purpose: {
                    en: "City government trunkline",
                    fil: "Pangkalahatang numero ng pamahalaang lungsod"
                },
                numbers: ["8870-1000"]
            }
        ]
    },

    sjdm: {
        name: {
            en: "City of San Jose del Monte",
            fil: "Lungsod ng San Jose del Monte"
        },
        centers: [
            {
                id: "sjdm-pagcor",
                name: "PAGCOR Multi-Purpose Evacuation Center",
                barangay: "Minuyan Proper",
                address: "Barangay Minuyan Proper, City of San Jose del Monte, Bulacan",
                facilities: "Purpose-built multi-purpose evacuation facility",
                status: "official"
            },
            {
                id: "sjdm-central",
                name: "Central Evacuation Center / Productivity Center",
                barangay: "Sapang Palay Proper",
                address: "Productivity Center, Barangay Sapang Palay Proper, City of San Jose del Monte, Bulacan",
                facilities: "Central evacuation facility identified in the city's 2018 Ecological Profile; confirm current status",
                status: "official"
            },
            {
                id: "sjdm-heights",
                name: "San Jose Heights Evacuation Center",
                barangay: "Muzon East",
                address: "Barangay Muzon East, City of San Jose del Monte, Bulacan",
                facilities: "Reported evacuation location; confirm exact site",
                status: "reported"
            },
            {
                id: "sjdm-assumption",
                name: "Barangay Assumption Designated Evacuation Center",
                barangay: "Assumption",
                address: "Matatag Street, Barangay Assumption, City of San Jose del Monte, Bulacan",
                facilities: "Reported designated evacuation location; confirm exact site",
                status: "reported"
            },
            {
                id: "sjdm-poblacion",
                name: "Barangay Poblacion 1 Evacuation Area",
                barangay: "Poblacion 1",
                address: "Barangay Poblacion 1, City of San Jose del Monte, Bulacan",
                facilities: "Reported evacuation area; confirm exact site",
                status: "reported"
            }
        ],
        supportFacilities: [
            {
                name: "City CDRRMO Building and Training Center",
                barangay: "Sapang Palay Proper",
                address: "Productivity Complex / Motorpool, Barangay Sapang Palay Proper, City of San Jose del Monte, Bulacan",
                facilities: "CDRRMO office and training facility. This is not automatically a public evacuation shelter."
            }
        ],
        hotlines: [
            {
                name: "City Disaster Risk Reduction and Management Office (CDRRMO)",
                purpose: {
                    en: "Emergency response and disaster coordination",
                    fil: "Pagtugon sa emerhensiya at koordinasyon sa sakuna"
                },
                numbers: ["0932-600-0119", "0955-206-7200", "044-306-6234"]
            },
            {
                name: "CDRRMO Training Division",
                purpose: {
                    en: "Training and disaster preparedness inquiries",
                    fil: "Mga katanungan tungkol sa pagsasanay at paghahanda sa sakuna"
                },
                numbers: ["0951-304-5005"]
            },
            {
                name: "San Jose del Monte City Police",
                purpose: {
                    en: "Police assistance",
                    fil: "Tulong mula sa kapulisan"
                },
                numbers: ["0916-432-0401"]
            },
            {
                name: "Bureau of Fire Protection (BFP)",
                purpose: {
                    en: "Fire and rescue assistance",
                    fil: "Tulong sa sunog at rescue"
                },
                numbers: ["0932-373-2444"]
            },
            {
                name: "City Health Office (CHO)",
                purpose: {
                    en: "Health-related assistance",
                    fil: "Tulong pangkalusugan"
                },
                numbers: ["0956-986-9417", "044-919-7370"]
            }
        ]
    }
};

let selectedCenterId = null;


function showCityCenters() {
    const cityKey = document.getElementById("city-select").value;
    const cityResult = document.getElementById("city-result");
    const details = document.getElementById("center-details");

    selectedCenterId = null;
    details.innerHTML = "";
    details.classList.add("hidden");

    if (!cityKey || !cityData[cityKey]) {
        cityResult.innerHTML = "";
        return;
    }

    const city = cityData[cityKey];

    let html = `
        <h3>${city.name[currentLanguage]}</h3>
        <p>${t("selectCenter")}</p>
        <div class="center-list">
    `;

    city.centers.forEach(function(center) {
        const statusText = center.status === "official"
            ? (currentLanguage === "fil"
                ? "Nakalista sa opisyal na dokumento"
                : "Listed in an official document")
            : (currentLanguage === "fil"
                ? "Iniulat; kumpirmahin sa LGU"
                : "Reported; verify with LGU");

        html += `
            <div class="center-card" id="center-card-${center.id}">
                <h4>${center.name}</h4>
                <p>${t("barangay")}: ${center.barangay}</p>
                <p class="small-note">${statusText}</p>

                <button type="button"
                    onclick="showCenterDetails('${cityKey}', '${center.id}')">
                    ${t("details")}
                </button>

                <div id="details-${center.id}" class="center-inline-details hidden"></div>
            </div>
        `;
    });

    html += `</div>`;

    if (city.supportFacilities && city.supportFacilities.length > 0) {
        html += `
            <h3>${currentLanguage === "fil"
                ? "Iba pang pasilidad ng lungsod"
                : "Other City Facilities"}</h3>

            <p class="small-note">${
                currentLanguage === "fil"
                    ? "Hindi lahat ng pasilidad ay awtomatikong nagsisilbing evacuation center."
                    : "Not all facilities automatically serve as evacuation centers."
            }</p>
        `;

        city.supportFacilities.forEach(function(facility) {
            html += `
                <div class="center-card">
                    <strong>${facility.name}</strong>
                    <p>${t("barangay")}: ${facility.barangay}</p>
                    <p>${facility.address}</p>
                    <p>${facility.facilities}</p>
                </div>
            `;
        });
    }

    cityResult.innerHTML = html;
}



function showCenterDetails(cityKey, centerId) {
    const city = cityData[cityKey];

    if (!city) return;

    // Close previously opened details
    document.querySelectorAll(".center-inline-details").forEach(function(element) {
        element.classList.add("hidden");
        element.innerHTML = "";
    });

    if (selectedCenterId === centerId) {
        selectedCenterId = null;
        return;
    }

    const center = city.centers.find(function(item) {
        return item.id === centerId;
    });

    if (!center) return;

    const details = document.getElementById("details-" + centerId);

    if (!details) return;

    selectedCenterId = centerId;

    const statusText = center.status === "official"
        ? (currentLanguage === "fil"
            ? "Nakalista sa opisyal na dokumento ng LGU; kumpirmahin pa rin kung aktibo"
            : "Listed in an official LGU document; still confirm whether activated")
        : (currentLanguage === "fil"
            ? "Iniulat na lokasyon; hindi pa ganap na beripikado sa opisyal na talaan"
            : "Reported location; not fully verified against a current official directory");

    let html = `
        <h3>${center.name}</h3>
        <p><strong>${t("city")}:</strong> ${city.name[currentLanguage]}</p>
        <p><strong>${t("barangay")}:</strong> ${center.barangay}</p>
        <p><strong>${t("address")}:</strong> ${center.address}</p>
        <p><strong>${t("facilities")}:</strong> ${center.facilities}</p>
        <p class="small-note">${statusText}. ${t("verifyCenter")}</p>

        <hr>

        <h3>${t("centerHotlines")} ${city.name[currentLanguage]}</h3>
    `;

    city.hotlines.forEach(function(hotline) {
        html += `
            <div class="hotline-card">
                <strong>${hotline.name}</strong>
                <p>${hotline.purpose[currentLanguage]}</p>
        `;

        hotline.numbers.forEach(function(number) {
            html += `
                <p>${number}</p>

                <div class="hotline-actions">
                    <button type="button" class="call-button"
                        onclick="callNumber('${number.replace(/[^0-9+]/g, "")}')">
                        ${t("call")}
                    </button>

                    <button type="button" class="copy-button"
                        onclick="copyText('${number}')">
                        ${t("copy")}
                    </button>
                </div>
            `;
        });

        html += `</div>`;
    });

    html += `<p class="small-note">${t("verifyHotline")}</p>`;

    details.innerHTML = html;
    details.classList.remove("hidden");

    // Bring the selected center and its details into view
    details.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}



// -------------------------------------
// HOUSEHOLD EMERGENCY PLAN
// -------------------------------------

let planIsVisible = false;

function generatePlan() {
    const result = document.getElementById("plan-result");

    if (planIsVisible) {
        result.classList.add("hidden");
        result.innerHTML = "";
        planIsVisible = false;
        return;
    }

    const family = Number(document.getElementById("family-count").value);
    const children = Number(document.getElementById("children-count").value);
    const elderly = Number(document.getElementById("elderly-count").value);
    const assistance = Number(document.getElementById("assistance-count").value);

    if (!Number.isInteger(family) || family < 1 ||
        !Number.isInteger(children) || children < 0 ||
        !Number.isInteger(elderly) || elderly < 0 ||
        !Number.isInteger(assistance) || assistance < 0) {
        alert(t("invalid"));
        return;
    }

    if (children + elderly + assistance > family) {
        alert(t("invalidTotal"));
        return;
    }

    let html = `
        <h3>${t("planHeading")}</h3>
        <p><strong>${t("total")}:</strong> ${family}</p>
        <p><strong>${t("childrenCount")}:</strong> ${children}</p>
        <p><strong>${t("elderlyCount")}:</strong> ${elderly}</p>
        <p><strong>${t("assistanceCount")}:</strong> ${assistance}</p>
        <h3>${t("actions")}</h3>
        <ol>
            <li>${t("action1")}</li>
            <li>${t("action2")}</li>
            <li>${t("action3")}</li>
            <li>${t("action4")}</li>
            <li>${t("action5")}</li>
    `;

    if (children > 0) html += `<li>${t("childAction")}</li>`;
    if (elderly > 0) html += `<li>${t("elderlyAction")}</li>`;
    if (assistance > 0) html += `<li>${t("assistanceAction")}</li>`;

    html += `</ol><p><strong>${t("reminder")}</strong></p>`;

    result.innerHTML = html;
    result.classList.remove("hidden");
    planIsVisible = true;
}


// -------------------------------------
// GO-BAG CHECKLIST
// -------------------------------------

const goBagCheckboxes = document.querySelectorAll(
    "#gobag-page .checklist input[type='checkbox']"
);

function updateGoBagProgress() {
    let checked = 0;

    goBagCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) checked++;
    });

    const total = goBagCheckboxes.length;

    document.getElementById("gobag-progress").textContent =
        currentLanguage === "fil"
            ? `${checked} sa ${total} na gamit ang naihanda`
            : `${checked} of ${total} ${t("prepared")}`;

    document.getElementById("gobag-progress-bar").style.width =
        (total === 0 ? 0 : checked / total * 100) + "%";
}

goBagCheckboxes.forEach(function(checkbox, index) {
    checkbox.checked = localStorage.getItem("sakloloGoBag_" + index) === "true";

    checkbox.addEventListener("change", function() {
        localStorage.setItem("sakloloGoBag_" + index, checkbox.checked);
        updateGoBagProgress();
    });
});

function resetGoBag() {
    if (!confirm(t("resetConfirm"))) return;

    goBagCheckboxes.forEach(function(checkbox, index) {
        checkbox.checked = false;
        localStorage.removeItem("sakloloGoBag_" + index);
    });

    updateGoBagProgress();
}


// -------------------------------------
// HOUSEHOLD CONTACTS
// -------------------------------------

let contacts = [];

try {
    contacts = JSON.parse(localStorage.getItem("sakloloContacts")) || [];
} catch (error) {
    contacts = [];
}

function saveContacts() {
    localStorage.setItem("sakloloContacts", JSON.stringify(contacts));
    displayContacts();
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function(character) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        }[character];
    });
}

function displayContacts() {
    const list = document.getElementById("contact-list");

    if (contacts.length === 0) {
        list.innerHTML = `<p>${t("noContacts")}</p>`;
        return;
    }

    let html = `<h3>${t("savedContacts")}</h3>`;

    contacts.forEach(function(contact, index) {
        html += `
            <div class="contact-card">
                <strong>${escapeHTML(contact.name)}</strong>
                <span>${escapeHTML(contact.relationship)}</span>
                <span>${escapeHTML(contact.number)}</span>
                <button type="button" class="copy-button"
                    onclick="copyText('${escapeHTML(contact.number)}')">
                    ${t("copy")}
                </button>
                <button type="button" class="delete-button"
                    onclick="deleteContact(${index})">
                    ${t("delete")}
                </button>
            </div>
        `;
    });

    list.innerHTML = html;
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const number = document.getElementById("contact-number").value.trim();
    const relationship = document.getElementById("contact-relationship").value.trim();

    if (!name || !number) return;

    contacts.push({
        name: name,
        number: number,
        relationship: relationship || (currentLanguage === "fil" ? "Hindi tinukoy" : "Not specified")
    });

    saveContacts();
    this.reset();

    alert(t("added"));
});

function deleteContact(index) {
    if (!confirm(t("deleteConfirm"))) return;

    contacts.splice(index, 1);
    saveContacts();
}


// -------------------------------------
// COPY AND CALL
// -------------------------------------

function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text)
            .then(function() {
                alert(t("copied") + text);
            })
            .catch(function() {
                fallbackCopy(text);
            });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const temporaryInput = document.createElement("textarea");
    temporaryInput.value = text;
    document.body.appendChild(temporaryInput);
    temporaryInput.select();
    document.execCommand("copy");
    document.body.removeChild(temporaryInput);
    alert(t("copied") + text);
}

function callNumber(number) {
    window.location.href = "tel:" + number;
}


// -------------------------------------
// LANGUAGE SWITCHING
// -------------------------------------

const staticText = {
    "app-subtitle": "subtitle",
    "welcome-title": "welcome",
    "welcome-description": "welcomeDesc",
    "guides-title": "guides",
    "guides-description": "guidesDesc",
    "flood-button": "flood",
    "earthquake-button": "earthquake",
    "fire-button": "fire",
    "centers-title": "centers",
    "centers-description": "centersDesc",
    "city-label": "cityLabel",
    "national-hotlines-title": "national",
    "emergency-hotline-label": "emergency",
    "copy-national-button": "copy",
    "national-hotline-note": "hotlineNote",
    "plan-title": "plan",
    "plan-description": "planDesc",
    "family-label": "family",
    "children-label": "children",
    "elderly-label": "elderly",
    "assistance-label": "assistance",
    "generate-plan-button": "generate",
    "gobag-title": "gobag",
    "gobag-description": "gobagDesc",
    "food-heading": "food",
    "health-heading": "health",
    "equipment-heading": "equipment",
    "documents-heading": "documents",
    "reset-gobag-button": "reset",
    "contacts-title": "contacts",
    "contacts-description": "contactsDesc",
    "contact-name-label": "contactName",
    "contact-number-label": "contactNumber",
    "contact-relationship-label": "relationship",
    "add-contact-button": "addContact",
    "settings-title": "settings",
    "language-label": "language",
    "about-title": "about",
    "about-description": "aboutDesc",
    "about-warning": "aboutWarning",
    "offline-title": "offline",
    "offline-description": "offlineDesc",
    "offline-storage": "offlineStorage",
    "nav-home": "navHome",
    "nav-gobag": "navBag",
    "nav-contacts": "navContacts",
    "nav-settings": "navSettings"
};

function changeLanguage() {
    currentLanguage = document.getElementById("language-select").value;

    localStorage.setItem("sakloloLanguage", currentLanguage);

    document.documentElement.lang = currentLanguage === "fil" ? "fil" : "en";

    Object.keys(staticText).forEach(function(id) {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = t(staticText[id]);
        }
    });

    document.getElementById("city-select").options[0].text =
        t("cityPlaceholder");

    document.getElementById("family-count").placeholder =
        currentLanguage === "fil" ? "Halimbawa: 5" : "Example: 5";

    document.getElementById("children-count").placeholder =
        currentLanguage === "fil" ? "Halimbawa: 2" : "Example: 2";

    document.getElementById("elderly-count").placeholder =
        currentLanguage === "fil" ? "Halimbawa: 1" : "Example: 1";

    document.getElementById("assistance-count").placeholder =
        currentLanguage === "fil" ? "Halimbawa: 1" : "Example: 1";

    document.getElementById("contact-name").placeholder =
        currentLanguage === "fil" ? "Halimbawa: Nanay" : "Example: Mother";

    document.getElementById("contact-number").placeholder =
        currentLanguage === "fil" ? "Halimbawa: 09XXXXXXXXX" : "Example: 09XXXXXXXXX";

    document.getElementById("contact-relationship").placeholder =
        currentLanguage === "fil" ? "Halimbawa: Magulang" : "Example: Parent";

    document.querySelectorAll(".checklist input[type='checkbox']").forEach(function(checkbox) {
        const label = checkbox.parentElement;
        const text = currentLanguage === "fil"
            ? checkbox.dataset.fil
            : checkbox.dataset.en;

        if (text) {
            label.lastChild.textContent = " " + text;
        }
    });

    updateGoBagProgress();
    displayContacts();

    if (document.getElementById("city-select").value) {
        showCityCenters();
    } else {
        document.getElementById("city-result").innerHTML = "";
        document.getElementById("center-details").innerHTML = "";
        document.getElementById("center-details").classList.add("hidden");
        selectedCenterId = null;
    }

    if (selectedGuide) {
        const guide = emergencyGuides[selectedGuide][currentLanguage];
        let guideHTML = `<h3>${guide.title}</h3>`;

        guide.sections.forEach(function(section) {
            guideHTML += `<h4>${section.heading}</h4><ol>`;

            section.steps.forEach(function(step) {
                guideHTML += `<li>${step}</li>`;
            });

            guideHTML += `</ol>`;
        });

        guideHTML += `<p class="small-note">${t("close")}</p>`;

        const guideResult = document.getElementById("guide-result");
        guideResult.innerHTML = guideHTML;
        guideResult.classList.remove("hidden");
    }

    if (planIsVisible) {
        planIsVisible = false;
        generatePlan();
    }
}


// -------------------------------------
// INITIALIZE APP
// -------------------------------------

const savedLanguage = localStorage.getItem("sakloloLanguage");

document.getElementById("language-select").value =
    savedLanguage === "en" ? "en" : "fil";

changeLanguage();
displayContacts();
updateGoBagProgress();


// -------------------------------------
// OFFLINE SERVICE WORKER
// -------------------------------------

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker.register("./sw.js")
            .then(function() {
                console.log("SakloloPH is ready for offline use.");
            })
            .catch(function(error) {
                console.error("Service Worker registration failed:", error);
            });
    });
}