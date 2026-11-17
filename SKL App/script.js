
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
        flood: "🌊 Flood",
        earthquake: "🌎 Earthquake",
        fire: "🔥 Fire",
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
        selectCenter: "Select an evacuation center to view its details and emergency contacts.",
        city: "City",
        barangay: "Barangay",
        address: "Address",
        facilities: "Facilities",
        verifyCenter: "This is demonstration information. Confirm the actual center, location, and availability with the local government.",
        centerHotlines: "Emergency Hotlines for",
        purpose: "Purpose",
        call: "Call",
        verifyHotline: "Hotline numbers are for prototype demonstration only. Verify them with the appropriate LGU before actual use.",
        invalid: "Please enter valid household numbers.",
        invalidTotal: "The combined number of children, senior citizens, and members needing assistance cannot exceed the total household members.",
        planHeading: "🏠 Your Household Emergency Plan",
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
        flood: "🌊 Baha",
        earthquake: "🌎 Lindol",
        fire: "🔥 Sunog",
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
        selectCenter: "Pumili ng evacuation center upang makita ang detalye at mga emergency contact.",
        city: "Lungsod",
        barangay: "Barangay",
        address: "Tirahan",
        facilities: "Mga Pasilidad",
        verifyCenter: "Halimbawa lamang ang impormasyong ito. Kumpirmahin sa lokal na pamahalaan ang aktuwal na lokasyon at kung bukas ito.",
        centerHotlines: "Mga Emergency Hotline para sa",
        purpose: "Layunin",
        call: "Tumawag",
        verifyHotline: "Ang mga numero ay para lamang sa demonstrasyon ng prototype. Kumpirmahin muna ang mga ito sa kinauukulang lokal na pamahalaan.",
        invalid: "Maglagay ng wastong bilang ng mga miyembro ng pamilya.",
        invalidTotal: "Hindi maaaring lumampas sa kabuuang miyembro ng pamilya ang pinagsamang bilang ng mga bata, senior citizen, at nangangailangan ng tulong.",
        planHeading: "🏠 Plano ng Inyong Pamilya sa Sakuna",
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
    flood: {
        en: {
            title: "🌊 Flood Safety Guide",
            steps: [
                "Monitor weather updates and government announcements.",
                "Prepare your Go-Bag and important documents.",
                "Move to higher ground when flooding begins.",
                "Do not walk or drive through floodwater.",
                "Turn off electricity if it is safe to do so.",
                "Follow evacuation instructions from authorities."
            ]
        },
        fil: {
            title: "🌊 Gabay sa Kaligtasan Kapag may Baha",
            steps: [
                "Subaybayan ang mga ulat sa panahon at anunsyo ng pamahalaan.",
                "Ihanda ang inyong Go-Bag at mahahalagang dokumento.",
                "Lumipat sa mas mataas na lugar kapag nagsimula nang bumaha.",
                "Huwag maglakad o magmaneho sa baha.",
                "Patayin ang kuryente kung ligtas itong gawin.",
                "Sundin ang mga tagubilin ng mga awtoridad tungkol sa paglikas."
            ]
        }
    },

    earthquake: {
        en: {
            title: "🌎 Earthquake Safety Guide",
            steps: [
                "DROP, COVER, and HOLD ON.",
                "Stay away from windows and heavy objects.",
                "If outdoors, move to an open area away from buildings and power lines.",
                "After shaking stops, check for injuries and hazards.",
                "Expect possible aftershocks.",
                "Follow official instructions before returning home."
            ]
        },
        fil: {
            title: "🌎 Gabay sa Kaligtasan Kapag may Lindol",
            steps: [
                "YUMUKO, SUMILONG, at KUMAPIT.",
                "Lumayo sa mga bintana at mabibigat na bagay.",
                "Kung nasa labas, pumunta sa maluwag na lugar na malayo sa mga gusali at kable ng kuryente.",
                "Kapag tumigil na ang pagyanig, tingnan kung may nasaktan o may panganib sa paligid.",
                "Maghanda sa posibleng mga kasunod na pagyanig.",
                "Sundin ang opisyal na tagubilin bago bumalik sa tahanan."
            ]
        }
    },

    fire: {
        en: {
            title: "🔥 Fire Safety Guide",
            steps: [
                "Stay calm and alert everyone in the household.",
                "Leave the building immediately using a safe exit.",
                "Stay low if there is smoke.",
                "Do not use elevators during a fire.",
                "Never return to a burning building.",
                "Call emergency services once you are in a safe location."
            ]
        },
        fil: {
            title: "🔥 Gabay sa Kaligtasan Kapag may Sunog",
            steps: [
                "Manatiling kalmado at abisuhan ang lahat ng miyembro ng pamilya.",
                "Agad na lumabas ng gusali gamit ang ligtas na daanan.",
                "Gumapang o manatiling mababa kung may usok.",
                "Huwag gumamit ng elevator kapag may sunog.",
                "Huwag nang bumalik sa nasusunog na gusali.",
                "Tumawag sa emergency services kapag nasa ligtas na lugar na."
            ]
        }
    }
};

function showGuide(emergency) {
    const result = document.getElementById("guide-result");

    if (selectedGuide === emergency) {
        result.classList.add("hidden");
        result.innerHTML = "";
        selectedGuide = null;
        return;
    }

    selectedGuide = emergency;

    const guide = emergencyGuides[emergency][currentLanguage];

    let html = `<h3>${guide.title}</h3><ol>`;

    guide.steps.forEach(function(step) {
        html += `<li>${step}</li>`;
    });

    html += `</ol><p class="small-note">${t("close")}</p>`;

    result.innerHTML = html;
    result.classList.remove("hidden");
}


// -------------------------------------
// EVACUATION CENTERS
// -------------------------------------

const cityData = {
    makati: {
        name: {
            en: "Makati City",
            fil: "Lungsod ng Makati"
        },
        centers: [
            {
                id: "makati-1",
                name: "Demonstration Evacuation Center 1",
                barangay: "Barangay to be confirmed",
                address: "Address to be confirmed",
                facilities: "Facilities to be confirmed"
            },
            {
                id: "makati-2",
                name: "Demonstration Evacuation Center 2",
                barangay: "Barangay to be confirmed",
                address: "Address to be confirmed",
                facilities: "Facilities to be confirmed"
            }
        ],
        hotlines: [
            {
                name: "Makati Command Control",
                numbers: ["168", "8236-5790"],
                purpose: {
                    en: "City emergency and response coordination",
                    fil: "Koordinasyon sa mga emergency at pagtugon ng lungsod"
                }
            },
            {
                name: "Makati City Hall",
                numbers: ["8870-1000"],
                purpose: {
                    en: "City government assistance",
                    fil: "Tulong mula sa pamahalaang lungsod"
                }
            }
        ]
    },

    sjdm: {
        name: {
            en: "San Jose del Monte, Bulacan",
            fil: "Lungsod ng San Jose del Monte, Bulacan"
        },
        centers: [
            {
                id: "sjdm-1",
                name: "Demonstration Evacuation Center 1",
                barangay: "Barangay to be confirmed",
                address: "Address to be confirmed",
                facilities: "Facilities to be confirmed"
            },
            {
                id: "sjdm-2",
                name: "Demonstration Evacuation Center 2",
                barangay: "Barangay to be confirmed",
                address: "Address to be confirmed",
                facilities: "Facilities to be confirmed"
            }
        ],
        hotlines: [
            {
                name: "City CDRRMO",
                numbers: ["0932-600-0119", "0955-206-7200"],
                purpose: {
                    en: "Emergency rescue and disaster response",
                    fil: "Pagsagip at pagtugon sa panahon ng sakuna"
                }
            },
            {
                name: "San Jose del Monte City Police Station",
                numbers: ["0916-432-0401"],
                purpose: {
                    en: "Police assistance",
                    fil: "Tulong mula sa kapulisan"
                }
            },
            {
                name: "San Jose del Monte Bureau of Fire Protection",
                numbers: ["0932-373-2444"],
                purpose: {
                    en: "Fire emergency assistance",
                    fil: "Tulong sa panahon ng sunog"
                }
            },
            {
                name: "City Health Office",
                numbers: ["0956-986-9417"],
                purpose: {
                    en: "Health-related assistance",
                    fil: "Tulong para sa kalusugan"
                }
            },
            {
                name: "City CDRRMO Office",
                numbers: ["044-306-6234"],
                purpose: {
                    en: "CDRRMO office contact",
                    fil: "Tanggapan ng CDRRMO"
                }
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

    let html = `<h3>${city.name[currentLanguage]}</h3>`;
    html += `<p>${t("selectCenter")}</p>`;

    city.centers.forEach(function(center) {
        html += `
            <div class="center-card">
                <strong>${center.name}</strong>
                <p>${t("barangay")}: ${center.barangay}</p>
                <span class="status">${t("demo")}</span>
                <button type="button"
                    onclick="showCenterDetails('${cityKey}', '${center.id}')">
                    ${t("details")}
                </button>
            </div>
        `;
    });

    cityResult.innerHTML = html;
}

function showCenterDetails(cityKey, centerId) {
    const details = document.getElementById("center-details");

    if (selectedCenterId === centerId) {
        details.classList.add("hidden");
        details.innerHTML = "";
        selectedCenterId = null;
        return;
    }

    const city = cityData[cityKey];
    const center = city.centers.find(function(item) {
        return item.id === centerId;
    });

    if (!center) return;

    selectedCenterId = centerId;

    let html = `
        <h3>${center.name}</h3>
        <p><strong>${t("city")}:</strong> ${city.name[currentLanguage]}</p>
        <p><strong>${t("barangay")}:</strong> ${center.barangay}</p>
        <p><strong>${t("address")}:</strong> ${center.address}</p>
        <p><strong>${t("facilities")}:</strong> ${center.facilities}</p>
        <p class="small-note">${t("verifyCenter")}</p>
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
                        onclick="callNumber('${number}')">${t("call")}</button>
                    <button type="button" class="copy-button"
                        onclick="copyText('${number}')">${t("copy")}</button>
                </div>
            `;
        });

        html += `</div>`;
    });

    html += `<p class="small-note">${t("verifyHotline")}</p>`;

    details.innerHTML = html;
    details.classList.remove("hidden");
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
        showGuide(selectedGuide);
        // Restore selection after refreshing the displayed guide.
        selectedGuide = selectedGuide;
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
