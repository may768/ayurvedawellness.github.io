// Quiz Logic
document.getElementById('quiz-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const counts = { Vata: 0, Pitta: 0, Kapha: 0 };
  const answers = document.querySelectorAll('input[type=radio]:checked');
  answers.forEach(a => counts[a.value]++);
  let top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  document.getElementById('quiz-result').innerHTML =
    `Your primary Dosha is <strong>${top}</strong>.`;
});

// Diet Suggestion Logic
document.getElementById('dosha').addEventListener('change', function () {
  const diets = {
    Vata: "Warm, moist, grounding foods. Avoid raw, cold, dry meals.",
    Pitta: "Cool, calming, sweet and bitter foods. Avoid spicy and oily food.",
    Kapha: "Light, dry, spicy food. Avoid sugar, dairy, and fried items."
  };
  document.getElementById('diet-output').textContent = diets[this.value] || "";
});

// Daily Tip Logic
const tips = [
  "Drink warm water with lemon each morning.",
  "Avoid heavy meals after sunset.",
  "Use sesame oil for weekly massage (Abhyanga).",
  "Sleep before 10 PM to align with your dosha.",
  "Practice deep breathing to balance prana."
];
document.getElementById('daily-tip').textContent =
  tips[Math.floor(Math.random() * tips.length)];
// --- Prakriti Analysis Tool ---
document.getElementById('prakriti-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const counts = { Vata: 0, Pitta: 0, Kapha: 0 };
  const answers = document.querySelectorAll('#prakriti-form input[type=radio]:checked');
  answers.forEach(a => counts[a.value]++);

  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const top = sorted[0][0];
  let type = top;

  const resultDescriptions = {
    Vata: "You are predominantly Vata Prakriti: creative, light, energetic, but may suffer from anxiety or dryness. Maintain warmth and routine.",
    Pitta: "You are predominantly Pitta Prakriti: sharp-minded, ambitious, strong digestion, but may experience anger or inflammation. Balance with cooling foods and calm activities.",
    Kapha: "You are predominantly Kapha Prakriti: stable, calm, strong endurance, but may face sluggishness or weight gain. Stimulate with activity and light foods."
  };

  document.getElementById('prakriti-result').innerHTML = `<strong>${resultDescriptions[type]}</strong>`;
});
// --- Dinacharya Routine Generator ---
document.getElementById('dosha-routine').addEventListener('change', function () {
  const routines = {
    Vata: `
      <ul>
        <li><strong>6:00 AM:</strong> Wake up, warm oil massage, drink warm water with lemon</li>
        <li><strong>7:00 AM:</strong> Light exercise like yoga or walking</li>
        <li><strong>8:00 AM:</strong> Warm, grounding breakfast (porridge, ghee)</li>
        <li><strong>12:30 PM:</strong> Nourishing lunch — soups, root vegetables</li>
        <li><strong>4:00 PM:</strong> Herbal tea, calm activity</li>
        <li><strong>6:30 PM:</strong> Light early dinner (khichdi, cooked veggies)</li>
        <li><strong>8:30 PM:</strong> Self-massage feet with sesame oil, light reading</li>
        <li><strong>9:00 PM:</strong> Sleep</li>
      </ul>
    `,
    Pitta: `
      <ul>
        <li><strong>5:30 AM:</strong> Wake up, cool shower, deep breathing</li>
        <li><strong>6:30 AM:</strong> Gentle yoga or swimming</li>
        <li><strong>8:00 AM:</strong> Cooling breakfast — fresh fruits, mint tea</li>
        <li><strong>12:00 PM:</strong> Main meal — cooling grains, cucumbers, bitter veggies</li>
        <li><strong>3:00 PM:</strong> Walk/stretch break, coconut water</li>
        <li><strong>6:30 PM:</strong> Light dinner — rice, steamed greens</li>
        <li><strong>8:00 PM:</strong> Moonlight walk or journaling</li>
        <li><strong>9:30 PM:</strong> Sleep in cool, dark room</li>
      </ul>
    `,
    Kapha: `
      <ul>
        <li><strong>5:00 AM:</strong> Wake up early and dry brush the body</li>
        <li><strong>6:00 AM:</strong> Vigorous exercise — jogging, cycling, sun salutations</li>
        <li><strong>7:30 AM:</strong> Light, warm breakfast — herbal tea, fruits</li>
        <li><strong>1:00 PM:</strong> Spicy, light lunch — legumes, bitter greens</li>
        <li><strong>4:00 PM:</strong> Ginger tea, avoid naps</li>
        <li><strong>6:00 PM:</strong> Early dinner — soups, barley, steamed veggies</li>
        <li><strong>8:00 PM:</strong> Read uplifting books, avoid heavy media</li>
        <li><strong>9:00 PM:</strong> Bedtime</li>
      </ul>
    `
  };

  const selected = this.value;
  document.getElementById('routine-output').innerHTML = selected ? routines[selected] : "";
});
function getSeasonByMonth(month) {
  if ([2, 3].includes(month)) return "Vasanta";     // Mar, Apr
  if ([4, 5].includes(month)) return "Grishma";     // May, Jun
  if ([6, 7].includes(month)) return "Varsha";      // Jul, Aug
  if ([8, 9].includes(month)) return "Sharad";      // Sep, Oct
  if ([10, 11].includes(month)) return "Hemanta";   // Nov, Dec
  return "Shishira";                                // Jan, Feb
}

function showRitucharya() {
  const seasonInput = document.getElementById('season').value;
  const month = new Date().getMonth(); // 0–11
  const season = seasonInput || getSeasonByMonth(month);

  const rituData = {
    Vasanta: {
      doshas: "Kapha increases",
      do: "Exercise regularly, detoxify, use dry massage (Udvartana)",
      dont: "Avoid dairy, sweets, heavy oily foods",
      food: "Barley, honey water, bitter and pungent foods",
      herbs: "Triphala, turmeric, neem"
    },
    Grishma: {
      doshas: "Pitta starts accumulating",
      do: "Stay cool, drink fluids, rest more",
      dont: "Avoid direct sunlight, spicy and sour foods",
      food: "Cooling foods like cucumber, coconut water, ghee",
      herbs: "Amla, rose, shatavari"
    },
    Varsha: {
      doshas: "Vata aggravates, Pitta increases",
      do: "Eat light & warm foods, avoid raw veggies, stay dry",
      dont: "Avoid cold water, heavy food, daytime sleep",
      food: "Khichdi, warm soups, ginger tea",
      herbs: "Dry ginger, haritaki, trikatu"
    },
    Sharad: {
      doshas: "Pitta aggravates",
      do: "Stay cool, spend time in moonlight, stay hydrated",
      dont: "Avoid fried/spicy/sour food",
      food: "Bitter & sweet foods, ghee, milk",
      herbs: "Amla, sandalwood, aloe vera"
    },
    Hemanta: {
      doshas: "Vata calms, Kapha starts increasing",
      do: "Eat nourishing food, exercise, oil massage",
      dont: "Avoid fasting, cold exposure",
      food: "Ghee, dairy, soups, jaggery",
      herbs: "Ashwagandha, gokshura, ginger"
    },
    Shishira: {
      doshas: "Kapha accumulates, Vata increases",
      do: "Stay warm, use heating spices, regular exercise",
      dont: "Avoid cold food, sleeping during the day",
      food: "Millets, soups, dry fruits",
      herbs: "Trikatu, cinnamon, pippali"
    }
  };

  const ritu = rituData[season];

  if (!ritu) {
    document.getElementById('ritu-result').textContent = "Season not recognized.";
    return;
  }

  document.getElementById('ritu-result').innerHTML = `
    <p><strong>Dosha Impact:</strong> ${ritu.doshas}</p>
    <p><strong>✅ Do:</strong> ${ritu.do}</p>
    <p><strong>❌ Avoid:</strong> ${ritu.dont}</p>
    <p><strong>🍲 Recommended Foods:</strong> ${ritu.food}</p>
    <p><strong>🌿 Helpful Herbs:</strong> ${ritu.herbs}</p>
  `;
}
// --- Herbal Finder Tool ---
document.getElementById('issue-select').addEventListener('change', function () {
  const herbs = {
    stress: [
      { name: "Ashwagandha", desc: "Adaptogen that reduces cortisol and supports adrenal health." },
      { name: "Brahmi", desc: "Calms the nervous system and improves memory." }
    ],
    digestion: [
      { name: "Triphala", desc: "Gentle detoxifier and bowel regulator." },
      { name: "Fennel", desc: "Relieves bloating and gas." }
    ],
    sleep: [
      { name: "Tagara (Valerian)", desc: "Natural sedative that promotes restful sleep." },
      { name: "Jatamansi", desc: "Helps calm the mind and reduce insomnia." }
    ],
    joint: [
      { name: "Guggulu", desc: "Reduces inflammation in joints and tissues." },
      { name: "Shallaki (Boswellia)", desc: "Alleviates pain and stiffness." }
    ],
    skin: [
      { name: "Neem", desc: "Purifies the blood and helps treat skin infections." },
      { name: "Manjistha", desc: "Improves skin tone and reduces acne and pigmentation." }
    ],
    immunity: [
      { name: "Guduchi", desc: "Enhances immune response and clears toxins." },
      { name: "Amla", desc: "Rich in Vitamin C, boosts immunity and digestion." }
    ]
  };

  const issue = this.value;
  const selectedHerbs = herbs[issue];

  const resultBox = document.getElementById('herbal-result');
  if (!selectedHerbs) {
    resultBox.innerHTML = '';
    return;
  }

  let output = '';
  selectedHerbs.forEach(h => {
    output += `<p><strong>${h.name}:</strong> ${h.desc}</p>`;
  });

  resultBox.innerHTML = output;
});
// --- Home Remedies Recommender ---
// --- Home Remedies Recommender with Images ---
document.getElementById('symptom-select').addEventListener('change', function () {
  const remedies = {
    cold: {
      title: "🌿 Tulsi-Ginger Kadha",
      recipe: "Boil 1 cup water with 5 Tulsi leaves, 1-inch grated ginger, a pinch of black pepper. Simmer 5 mins. Strain, add honey.",
      image: "Ginger-Tulsi-Haldi-Kadha.jpg"
    },
    headache: {
      title: "🧴 Clove Oil Compress",
      recipe: "Crush 2 cloves, mix with coconut oil. Apply on forehead. Rest in a quiet place for 20 minutes.",
      image: "Clove-Oil-Compress-for-Toothache.jpg"
    },
    acidity: {
      title: "🌰 Jeera-Ajwain Mix",
      recipe: "Dry roast cumin and carom seeds. Take ½ tsp with warm water after meals.",
      image: "OIP.jpeg"
    },
    constipation: {
      title: "🌿 Triphala Night Drink",
      recipe: "Mix ½ tsp Triphala powder in warm water before bed for gentle detox.",
      image: "triphala-drink-1.jpg"
    },
    cough: {
      title: "🍯 Honey-Black Pepper Syrup",
      recipe: "Mix 1 tsp honey with a pinch of black pepper and turmeric. Take twice daily.",
      image: "R.jpeg"
    },
    fatigue: {
      title: "🥛 Ashwagandha Milk",
      recipe: "Boil 1 cup milk with ½ tsp Ashwagandha powder and cardamom. Drink warm in evening.",
      image: "ashwagandha-milk-1694457167-lb.jpg"
    }
  };

  const symptom = this.value;
  const data = remedies[symptom];

  const resultDiv = document.getElementById('remedy-result');
  resultDiv.innerHTML = data
    ? `
      <img src="${data.image}" alt="${data.title}" class="remedy-image">
      <p><strong>${data.title}</strong></p>
      <p>${data.recipe}</p>
    `
    : "";
});
const content = {
  doshas: `
    <h3>🌿 Tridosha: Vata, Pitta, Kapha</h3>
    <p>All body-mind functions are governed by 3 Doshas:</p>
    <ul>
      <li><strong>Vata</strong> (Air + Ether): Movement, nervous system, creativity, dryness.</li>
      <li><strong>Pitta</strong> (Fire + Water): Digestion, intellect, heat, metabolism.</li>
      <li><strong>Kapha</strong> (Water + Earth): Structure, stability, immunity, heaviness.</li>
    </ul>
    
  `,
  rasa: `
    <h3>🍋 Rasa – 6 Tastes</h3>
    <p>Ayurveda recognizes 6 tastes, each with specific effects:</p>
    <ul>
      <li><strong>Sweet</strong> – Builds tissue (Kapha ↑)</li>
      <li><strong>Sour</strong> – Stimulates digestion (Pitta ↑)</li>
      <li><strong>Salty</strong> – Retains water (Kapha ↑)</li>
      <li><strong>Pungent</strong> – Heating, clears mucus (Pitta ↑, Vata ↓)</li>
      <li><strong>Bitter</strong> – Detoxifying (Vata ↑, Kapha ↓)</li>
      <li><strong>Astringent</strong> – Drying (Vata ↑)</li>
    </ul>
   
  `,
  dhatus: `
    <h3>🧬 Sapta Dhatus – 7 Tissues</h3>
    <p>The body is formed and sustained through 7 layers of Dhatus (tissues):</p>
    <ul>
      <li><strong>Rasa</strong> – Plasma/lymph (nourishment)</li>
      <li><strong>Rakta</strong> – Blood (oxygenation)</li>
      <li><strong>Mamsa</strong> – Muscle (structure)</li>
      <li><strong>Meda</strong> – Fat (lubrication)</li>
      <li><strong>Asthi</strong> – Bone (support)</li>
      <li><strong>Majja</strong> – Marrow/nerves (coordination)</li>
      <li><strong>Shukra/Artava</strong> – Reproductive tissue (creation)</li>
    </ul>
   
  `,
  ojas: `
    <h3>✨ Ojas – Vitality Essence</h3>
    <p>Ojas is the refined essence of all 7 Dhatus. It governs:</p>
    <ul>
      <li>Immunity & strength</li>
      <li>Radiance and resilience</li>
      <li>Mental clarity and joy</li>
    </ul>
    <p>Build Ojas through rest, good food, positive thoughts, herbs like Ashwagandha, Ghee, and Shatavari.</p>
   
  `,
  agni: `
    <h3>🔥 Agni – Digestive Fire</h3>
    <p>Agni is the fire of digestion, transformation, and clarity:</p>
    <ul>
      <li><strong>Balanced Agni</strong> – Good digestion, metabolism, immunity.</li>
      <li><strong>Manda Agni</strong> – Slow digestion (Kapha type)</li>
      <li><strong>Tikshna Agni</strong> – Hyper digestion (Pitta type)</li>
      <li><strong>Vishama Agni</strong> – Irregular digestion (Vata type)</li>
    </ul>
    <p>Support Agni with ginger tea, spices, warm food, and mindful eating.</p>
    
  `,
  malas: `
    <h3>♻️ Malas – Waste Products</h3>
    <p>Malas are the body's natural waste eliminations:</p>
    <ul>
      <li><strong>Purisha</strong> – Stool</li>
      <li><strong>Mutra</strong> – Urine</li>
      <li><strong>Sveda</strong> – Sweat</li>
    </ul>
    <p>Proper elimination is crucial for health. Constipation, excess urination, or foul sweat indicate imbalance.</p>
    
  `,
  mahabhutas: `
    <h3>🌀 Pancha Mahabhutas – 5 Elements</h3>
    <p>The entire universe, including our body, is made of 5 elements:</p>
    <ul>
      <li><strong>Prithvi (Earth)</strong> – solidity, bones, tissues</li>
      <li><strong>Apas (Water)</strong> – fluids, lubrication</li>
      <li><strong>Tejas (Fire)</strong> – heat, transformation</li>
      <li><strong>Vayu (Air)</strong> – movement, breath</li>
      <li><strong>Akasha (Ether)</strong> – space, consciousness</li>
    </ul>
  
  `
};
function loadLesson(topic) {
 
  const lessonDiv = document.getElementById("lessonContent");
  lessonDiv.innerHTML = content[topic] || "<p>Coming soon!</p>";
  lessonDiv.style.display = "block";
}

function recommendTea() {
  const concern = document.getElementById("teaConcern").value;
  let result = "<h3>🍵 Recommended Ayurvedic Tea:</h3>";

  switch (concern) {
    case "stress":
      result += `
        <p><strong>Stress Relief Tea:</strong> Ashwagandha + Brahmi + Tulsi</p>
        <p><em>Benefits:</em> Calms the nerves, balances cortisol, supports mental clarity.</p>`;
      break;
    case "sleep":
      result += `
        <p><strong>Sleep Support Tea:</strong> Nutmeg + Licorice + Chamomile</p>
        <p><em>Benefits:</em> Soothes Vata, reduces insomnia, helps deep rest.</p>`;
      break;
    case "digestion":
      result += `
        <p><strong>Digestive Fire Tea:</strong> Ginger + Fennel + Cumin</p>
        <p><em>Benefits:</em> Boosts Agni, relieves bloating, supports gut health.</p>`;
      break;
    case "immunity":
      result += `
        <p><strong>Immune Boost Tea:</strong> Tulsi + Dry Ginger + Turmeric</p>
        <p><em>Benefits:</em> Enhances Ojas, clears Kapha, anti-inflammatory.</p>`;
      break;
    case "detox":
      result += `
        <p><strong>Detox Tea:</strong> Triphala + Coriander + Cumin</p>
        <p><em>Benefits:</em> Cleanses ama (toxins), promotes liver health and clarity.</p>`;
      break;
    case "oversleep":
  result += `
    <p><strong>Kapha-Reducing Tea for Oversleeping:</strong> Ginger + Tulsi + Cinnamon + Lemon</p>
    <p><em>Benefits:</em> Stimulates energy, clears fogginess, balances excess Kapha.</p>
    <p><strong>Recipe:</strong><br>
    Boil 1.5 cups water → Add 1/2 tsp dry ginger, 1 tsp tulsi, 1 cinnamon stick, lemon peel → Simmer 7 mins → Strain → Add lemon juice → Sip warm in the morning.</p>`;
  break;
  
    default:
      result += `<p>Please select a concern.</p>`;
  }

  document.getElementById("teaResult").innerHTML = result;
}
