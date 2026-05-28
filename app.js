const FOODS = [
  { name: "Arroz branco cozido", aliases: ["arroz", "arroz branco"], group: "carb", kcal: 128, carbs: 28.1, protein: 2.5, fat: 0.2, fiber: 1.6, gi: 64, sodium: 1 },
  { name: "Arroz integral cozido", aliases: ["arroz integral"], group: "carb", kcal: 124, carbs: 25.8, protein: 2.6, fat: 1.0, fiber: 2.7, gi: 55, sodium: 1 },
  { name: "Arroz parboilizado cozido", aliases: ["arroz parboilizado"], group: "carb", kcal: 130, carbs: 28.4, protein: 2.7, fat: 0.3, fiber: 1.4, gi: 47, sodium: 1 },
  { name: "Macarrão cozido", aliases: ["macarrao", "massa"], group: "carb", kcal: 135, carbs: 27.8, protein: 4.7, fat: 0.5, fiber: 1.8, gi: 49, sodium: 1 },
  { name: "Pão francês", aliases: ["pao", "pão", "pao frances"], group: "carb", kcal: 300, carbs: 58.6, protein: 8.0, fat: 3.1, fiber: 2.3, gi: 73, sodium: 450 },
  { name: "Pão integral", aliases: ["pao integral", "pão integral"], group: "carb", kcal: 253, carbs: 46.3, protein: 8.0, fat: 3.5, fiber: 5.9, gi: 51, sodium: 430 },
  { name: "Batata inglesa cozida", aliases: ["batata", "batata inglesa"], group: "carb", kcal: 52, carbs: 11.9, protein: 1.3, fat: 0.1, fiber: 1.2, gi: 62, sodium: 2 },
  { name: "Batata-doce cozida", aliases: ["batata doce", "batata-doce"], group: "carb", kcal: 77, carbs: 17.2, protein: 1.1, fat: 0.1, fiber: 2.2, gi: 46, sodium: 4 },
  { name: "Mandioca cozida", aliases: ["mandioca", "aipim"], group: "carb", kcal: 125, carbs: 30.1, protein: 0.6, fat: 0.3, fiber: 1.9, gi: 46, sodium: 1 },
  { name: "Aveia em flocos", aliases: ["aveia"], group: "carb", kcal: 394, carbs: 67.6, protein: 13.9, fat: 8.5, fiber: 9.1, gi: 55, sodium: 5 },
  { name: "Tapioca", aliases: ["beiju", "tapioca"], group: "carb", kcal: 344, carbs: 84.8, protein: 0.4, fat: 0.2, fiber: 0.1, gi: 70, sodium: 1 },
  { name: "Farinha de mandioca", aliases: ["farinha"], group: "carb", kcal: 361, carbs: 87.9, protein: 1.6, fat: 0.3, fiber: 5.8, gi: 76, sodium: 1 },

  { name: "Feijão carioca cozido", aliases: ["feijao", "feijão", "feijao carioca"], group: "legume", kcal: 76, carbs: 13.6, protein: 4.8, fat: 0.5, fiber: 8.5, gi: 28, sodium: 2 },
  { name: "Feijão preto cozido", aliases: ["feijao preto", "feijão preto"], group: "legume", kcal: 77, carbs: 14.0, protein: 4.5, fat: 0.5, fiber: 8.4, gi: 30, sodium: 2 },
  { name: "Lentilha cozida", aliases: ["lentilha"], group: "legume", kcal: 93, carbs: 17.0, protein: 6.3, fat: 0.5, fiber: 7.9, gi: 29, sodium: 2 },
  { name: "Grão-de-bico cozido", aliases: ["grao de bico", "grão-de-bico"], group: "legume", kcal: 164, carbs: 27.4, protein: 8.9, fat: 2.6, fiber: 6.2, gi: 28, sodium: 5 },
  { name: "Soja cozida", aliases: ["soja"], group: "legume", kcal: 141, carbs: 11.5, protein: 14.6, fat: 6.8, fiber: 9.6, gi: 18, sodium: 1 },
  { name: "Ervilha cozida", aliases: ["ervilha"], group: "legume", kcal: 74, carbs: 11.3, protein: 5.3, fat: 0.4, fiber: 5.7, gi: 51, sodium: 3 },

  { name: "Peito de frango grelhado", aliases: ["frango", "peito de frango"], group: "protein", kcal: 159, carbs: 0, protein: 31.5, fat: 3.2, fiber: 0, gi: 0, sodium: 62 },
  { name: "Coxa de frango assada", aliases: ["coxa de frango"], group: "protein", kcal: 175, carbs: 0, protein: 26.3, fat: 7.0, fiber: 0, gi: 0, sodium: 72 },
  { name: "Bife de coxão mole grelhado", aliases: ["bife", "gado", "carne", "bife de gado"], group: "protein", kcal: 219, carbs: 0, protein: 31.3, fat: 10.0, fiber: 0, gi: 0, sodium: 62 },
  { name: "Patinho moído cozido", aliases: ["patinho", "carne moida", "carne moída"], group: "protein", kcal: 211, carbs: 0, protein: 27.7, fat: 10.7, fiber: 0, gi: 0, sodium: 52 },
  { name: "Tilápia grelhada", aliases: ["tilapia", "tilápia", "peixe"], group: "protein", kcal: 129, carbs: 0, protein: 27.5, fat: 2.3, fiber: 0, gi: 0, sodium: 56 },
  { name: "Salmão grelhado", aliases: ["salmao", "salmão"], group: "protein", kcal: 216, carbs: 0, protein: 25.4, fat: 12.4, fiber: 0, gi: 0, sodium: 52 },
  { name: "Atum em conserva escorrido", aliases: ["atum"], group: "protein", kcal: 119, carbs: 0, protein: 26.3, fat: 1.1, fiber: 0, gi: 0, sodium: 396 },
  { name: "Ovo cozido", aliases: ["ovo"], group: "protein", kcal: 144, carbs: 0.6, protein: 13.0, fat: 9.5, fiber: 0, gi: 0, sodium: 130 },
  { name: "Queijo mussarela", aliases: ["queijo", "mussarela"], group: "protein", kcal: 289, carbs: 3.0, protein: 17.8, fat: 22.8, fiber: 0, gi: 0, sodium: 410 },
  { name: "Iogurte natural integral", aliases: ["iogurte"], group: "protein", kcal: 61, carbs: 4.7, protein: 3.5, fat: 2.9, fiber: 0, gi: 35, sodium: 43 },
  { name: "Leite desnatado", aliases: ["leite"], group: "protein", kcal: 35, carbs: 5.0, protein: 3.4, fat: 0.2, fiber: 0, gi: 32, sodium: 49 },

  { name: "Alface crua", aliases: ["alface", "salada de alface"], group: "vegetable", kcal: 11, carbs: 2.0, protein: 1.3, fat: 0.1, fiber: 1.7, gi: 20, sodium: 3 },
  { name: "Brócolis cozido", aliases: ["brocolis", "brócolis"], group: "vegetable", kcal: 23, carbs: 3.0, protein: 2.9, fat: 0.4, fiber: 2.6, gi: 20, sodium: 4 },
  { name: "Espinafre cru", aliases: ["espinafre"], group: "vegetable", kcal: 23, carbs: 3.4, protein: 2.9, fat: 0.4, fiber: 2.4, gi: 20, sodium: 79 },
  { name: "Tomate cru", aliases: ["tomate"], group: "vegetable", kcal: 15, carbs: 3.1, protein: 0.9, fat: 0.2, fiber: 1.2, gi: 20, sodium: 1 },
  { name: "Cenoura crua", aliases: ["cenoura"], group: "vegetable", kcal: 34, carbs: 8.0, protein: 1.3, fat: 0.2, fiber: 3.2, gi: 39, sodium: 3 },
  { name: "Beterraba cozida", aliases: ["beterraba"], group: "vegetable", kcal: 34, carbs: 7.0, protein: 1.3, fat: 0.1, fiber: 2.9, gi: 64, sodium: 10 },
  { name: "Milho cozido", aliases: ["milho"], group: "carb", kcal: 86, carbs: 18.6, protein: 3.1, fat: 1.2, fiber: 2.2, gi: 52, sodium: 1 },
  { name: "Couve crua", aliases: ["couve"], group: "vegetable", kcal: 26, carbs: 3.6, protein: 3.0, fat: 0.5, fiber: 2.0, gi: 20, sodium: 11 },

  { name: "Maçã com casca", aliases: ["maca", "maçã"], group: "fruit", kcal: 56, carbs: 15.2, protein: 0.3, fat: 0.2, fiber: 2.0, gi: 44, sodium: 1 },
  { name: "Banana nanica madura", aliases: ["banana"], group: "fruit", kcal: 92, carbs: 23.8, protein: 1.4, fat: 0.1, fiber: 1.9, gi: 51, sodium: 1 },
  { name: "Laranja pera", aliases: ["laranja"], group: "fruit", kcal: 47, carbs: 11.0, protein: 1.0, fat: 0.1, fiber: 2.3, gi: 40, sodium: 1 },
  { name: "Morango", aliases: ["morango"], group: "fruit", kcal: 33, carbs: 7.7, protein: 0.7, fat: 0.3, fiber: 2.2, gi: 42, sodium: 1 },
  { name: "Mamão papaya", aliases: ["mamao", "mamão"], group: "fruit", kcal: 45, carbs: 11.4, protein: 0.8, fat: 0.1, fiber: 1.8, gi: 60, sodium: 2 },
  { name: "Manga tommy", aliases: ["manga"], group: "fruit", kcal: 66, carbs: 17.0, protein: 0.8, fat: 0.2, fiber: 1.6, gi: 56, sodium: 1 },
  { name: "Melancia", aliases: ["melancia"], group: "fruit", kcal: 26, carbs: 7.3, protein: 0.9, fat: 0.0, fiber: 0.3, gi: 72, sodium: 1 },
  { name: "Abacaxi", aliases: ["abacaxi"], group: "fruit", kcal: 48, carbs: 12.3, protein: 0.9, fat: 0.1, fiber: 1.0, gi: 59, sodium: 1 },
  { name: "Uva", aliases: ["uva"], group: "fruit", kcal: 69, carbs: 18.1, protein: 0.7, fat: 0.2, fiber: 0.9, gi: 54, sodium: 1 },
  { name: "Pera com casca", aliases: ["pera"], group: "fruit", kcal: 53, carbs: 13.8, protein: 0.4, fat: 0.1, fiber: 3.0, gi: 33, sodium: 1 },
  { name: "Goiaba vermelha", aliases: ["goiaba"], group: "fruit", kcal: 63, carbs: 14.5, protein: 1.1, fat: 0.4, fiber: 6.2, gi: 31, sodium: 1 },
  { name: "Abacate", aliases: ["abacate"], group: "fruit", kcal: 96, carbs: 6.0, protein: 1.2, fat: 8.4, fiber: 1.6, gi: 15, sodium: 4 },
  { name: "Tâmara seca", aliases: ["tamara", "tâmara"], group: "fruit", kcal: 282, carbs: 75.8, protein: 2.5, fat: 0.4, fiber: 2.0, gi: 55, sodium: 2, highRisk: true },
  { name: "Passa de uva", aliases: ["passa", "uva passa"], group: "fruit", kcal: 302, carbs: 79.3, protein: 3.1, fat: 0.5, fiber: 2.9, gi: 55, sodium: 11, highRisk: true },

  { name: "Azeite de oliva", aliases: ["azeite", "oleo", "óleo"], group: "fat", kcal: 884, carbs: 0, protein: 0, fat: 100, fiber: 0, gi: 0, sodium: 0 },
  { name: "Manteiga", aliases: ["manteiga"], group: "fat", kcal: 726, carbs: 0, protein: 0.4, fat: 82, fiber: 0, gi: 0, sodium: 11 },
  { name: "Amendoim torrado", aliases: ["amendoim"], group: "fat", kcal: 581, carbs: 20.3, protein: 26.2, fat: 45.5, fiber: 7.8, gi: 20, sodium: 6 },
  { name: "Castanha-do-pará", aliases: ["castanha", "castanha do para"], group: "fat", kcal: 656, carbs: 15.1, protein: 14.5, fat: 63.5, fiber: 7.9, gi: 20, sodium: 1 }
];

const PREP = {
  cozido: { kcal: 1, gi: 1, label: "cozido/cru" },
  grelhado: { kcal: 1.05, gi: 1, label: "grelhado/assado" },
  frito: { kcal: 1.22, gi: 1.12, label: "frito" },
  suco: { kcal: 1, gi: 1.2, fiber: 0.35, label: "suco/batido" },
  resfriado: { kcal: 1, gi: 0.88, label: "cozido e resfriado" }
};

const SCIENCE_FACTS = [
  {
    title: "Arroz + feijão",
    text: "O feijão adiciona fibras e lisina; o arroz complementa com aminoácidos sulfurados. Juntos melhoram perfil proteico e reduzem a velocidade de absorção do carboidrato da refeição."
  },
  {
    title: "Carga glicêmica",
    text: "O app calcula CG por porção real: IG x carboidratos da porção / 100. Para diabetes, refeições com CG acima de 30 recebem alerta."
  },
  {
    title: "Preparo importa",
    text: "Óleo, açúcar, fritura e sucos elevam densidade calórica e impacto glicêmico. Resfriar arroz ou batata pode reduzir resposta glicêmica por aumentar amido resistente."
  },
  {
    title: "Fruta inteira",
    text: "Fruta inteira preserva fibra. Suco concentra carboidrato de várias unidades e acelera a absorção, o que é especialmente importante para quem controla glicemia."
  },
  {
    title: "Proteína distribuída",
    text: "Para ganho de massa, distribuir proteína ao longo do dia costuma facilitar a meta diária e melhora a qualidade prática das refeições."
  }
];

let deferredInstallPrompt = null;

const state = {
  profile: JSON.parse(localStorage.getItem("fitarm-profile") || "null") || {
    dailyCalories: 2200,
    weight: 80,
    height: 175,
    age: 35,
    sex: "male",
    activity: 1.55,
    goal: "maintain",
    calorieStrategy: "basal10",
    mealsLeft: 5,
    diabetes: false,
    hypertension: false
  },
  selected: [],
  pendingCandidates: [],
  log: JSON.parse(localStorage.getItem(storageKey()) || "[]")
};

migrateProfileDefaults();

const els = {
  todayLabel: document.querySelector("#todayLabel"),
  calorieBalance: document.querySelector("#calorieBalance"),
  consumedKcal: document.querySelector("#consumedKcal"),
  remainingKcal: document.querySelector("#remainingKcal"),
  proteinTotal: document.querySelector("#proteinTotal"),
  fiberTotal: document.querySelector("#fiberTotal"),
  glycemicLoadTotal: document.querySelector("#glycemicLoadTotal"),
  dailyCalories: document.querySelector("#dailyCalories"),
  weight: document.querySelector("#weight"),
  height: document.querySelector("#height"),
  age: document.querySelector("#age"),
  sex: document.querySelector("#sex"),
  activity: document.querySelector("#activity"),
  goal: document.querySelector("#goal"),
  calorieStrategy: document.querySelector("#calorieStrategy"),
  mealsLeft: document.querySelector("#mealsLeft"),
  diabetes: document.querySelector("#diabetes"),
  hypertension: document.querySelector("#hypertension"),
  bmrValue: document.querySelector("#bmrValue"),
  tdeeValue: document.querySelector("#tdeeValue"),
  adjustmentValue: document.querySelector("#adjustmentValue"),
  proteinTargetValue: document.querySelector("#proteinTargetValue"),
  installButton: document.querySelector("#installButton"),
  connectionStatus: document.querySelector("#connectionStatus"),
  profileForm: document.querySelector("#profileForm"),
  chatLog: document.querySelector("#chatLog"),
  foodTypeChoices: document.querySelector("#foodTypeChoices"),
  foodSearch: document.querySelector("#foodSearch"),
  foodOptions: document.querySelector("#foodOptions"),
  addFoodButton: document.querySelector("#addFoodButton"),
  mealForm: document.querySelector("#mealForm"),
  selectedFoods: document.querySelector("#selectedFoods"),
  portionSuggestion: document.querySelector("#portionSuggestion"),
  mealScore: document.querySelector("#mealScore"),
  mealLog: document.querySelector("#mealLog"),
  dailyInsights: document.querySelector("#dailyInsights"),
  resetDayButton: document.querySelector("#resetDayButton"),
  scienceFactTitle: document.querySelector("#scienceFactTitle"),
  scienceFactText: document.querySelector("#scienceFactText"),
  template: document.querySelector("#foodRowTemplate")
};

function storageKey() {
  return `fitarm-log-${new Date().toISOString().slice(0, 10)}`;
}

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function findFood(query) {
  const clean = normalize(query);
  return FOODS.find((food) => normalize(food.name) === clean || food.aliases.some((alias) => normalize(alias) === clean))
    || FOODS.find((food) => normalize(food.name).includes(clean) || food.aliases.some((alias) => normalize(alias).includes(clean)));
}

function findFoodCandidates(query) {
  const clean = normalize(query);
  if (!clean) return [];

  const candidates = FOODS.filter((food) => {
    const name = normalize(food.name);
    return name.includes(clean) || food.aliases.some((alias) => normalize(alias).includes(clean) || clean.includes(normalize(alias)));
  });

  return [...new Map(candidates.map((food) => [food.name, food])).values()].slice(0, 6);
}

function round(value, digits = 0) {
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

function bmr(profile) {
  if (profile.sex === "female") {
    return 655 + (9.6 * profile.weight) + (1.8 * profile.height) - (4.7 * profile.age);
  }
  return 66 + (13.7 * profile.weight) + (5 * profile.height) - (6.8 * profile.age);
}

function suggestedCalories(profile) {
  const basal = bmr(profile);
  const maintenance = basal * Number(profile.activity);
  const strategy = profile.calorieStrategy || defaultStrategy(profile.goal);
  let adjustment = 0;

  if (strategy === "manual") return profile.dailyCalories;
  if (strategy === "basal10") adjustment = -(basal * 0.1);
  if (strategy === "get15") adjustment = -(maintenance * 0.15);
  if (strategy === "fixed300") adjustment = -300;
  if (strategy === "fixed500") adjustment = -500;
  if (strategy === "surplus300") adjustment = 300;

  return Math.max(1200, maintenance + adjustment);
}

function defaultStrategy(goal) {
  if (goal === "gain") return "surplus300";
  if (goal === "loss") return "basal10";
  return "manual";
}

function migrateProfileDefaults() {
  if (!state.profile.calorieStrategy) {
    state.profile.calorieStrategy = defaultStrategy(state.profile.goal);
    if (state.profile.mealsLeft === 3) state.profile.mealsLeft = 5;
  }
}

function calorieAdjustment(profile) {
  const basal = bmr(profile);
  const maintenance = basal * Number(profile.activity);
  const target = suggestedCalories(profile);
  return target - maintenance;
}

function proteinTargetRange(profile) {
  if (profile.goal === "gain") return [profile.weight * 2, profile.weight * 2.2];
  if (profile.goal === "loss") return [profile.weight * 1.6, profile.weight * 2.2];
  return [profile.weight * 1.2, profile.weight * 1.6];
}

function adjusted(food, item) {
  const prep = PREP[item.prep] || PREP.cozido;
  const grams = Number(item.grams || 0);
  const multiplier = grams / 100;
  const fiberMultiplier = prep.fiber || 1;
  const oilKcal = Number(item.oil || 0) * 8.84;
  const sugarKcal = Number(item.sugar || 0) * 4;
  const sugarCarbs = Number(item.sugar || 0);
  const sodiumFromSalt = Number(item.salt || 0) * 393;
  const carbs = (food.carbs * multiplier) + sugarCarbs;
  const gi = Math.min(100, Math.max(0, food.gi * prep.gi));

  return {
    kcal: (food.kcal * multiplier * prep.kcal) + oilKcal + sugarKcal,
    carbs,
    protein: food.protein * multiplier,
    fat: (food.fat * multiplier) + Number(item.oil || 0),
    fiber: food.fiber * multiplier * fiberMultiplier,
    sodium: (food.sodium * multiplier) + sodiumFromSalt,
    gl: gi > 0 ? (gi * carbs) / 100 : 0,
    gi
  };
}

function totals(items) {
  return items.reduce((sum, item) => {
    const food = item.food || item;
    const calc = item.food ? adjusted(food, item) : item;
    sum.kcal += calc.kcal;
    sum.carbs += calc.carbs;
    sum.protein += calc.protein;
    sum.fat += calc.fat;
    sum.fiber += calc.fiber;
    sum.sodium += calc.sodium;
    sum.gl += calc.gl;
    return sum;
  }, { kcal: 0, carbs: 0, protein: 0, fat: 0, fiber: 0, sodium: 0, gl: 0 });
}

function readProfile() {
  state.profile = {
    dailyCalories: Number(els.dailyCalories.value),
    weight: Number(els.weight.value),
    height: Number(els.height.value),
    age: Number(els.age.value),
    sex: els.sex.value,
    activity: Number(els.activity.value),
    goal: els.goal.value,
    calorieStrategy: els.calorieStrategy.value,
    mealsLeft: Number(els.mealsLeft.value),
    diabetes: els.diabetes.checked,
    hypertension: els.hypertension.checked
  };
  localStorage.setItem("fitarm-profile", JSON.stringify(state.profile));
}

function hydrateProfile() {
  els.dailyCalories.value = state.profile.dailyCalories;
  els.weight.value = state.profile.weight;
  els.height.value = state.profile.height;
  els.age.value = state.profile.age;
  els.sex.value = state.profile.sex;
  els.activity.value = state.profile.activity;
  els.goal.value = state.profile.goal;
  els.calorieStrategy.value = state.profile.calorieStrategy || defaultStrategy(state.profile.goal);
  els.mealsLeft.value = state.profile.mealsLeft || 5;
  els.diabetes.checked = state.profile.diabetes;
  els.hypertension.checked = state.profile.hypertension;
}

function mealBudget() {
  const consumed = totals(state.log).kcal;
  const remaining = Math.max(0, state.profile.dailyCalories - consumed);
  return Math.max(120, remaining / Math.max(1, state.profile.mealsLeft));
}

function groupWeights() {
  if (state.profile.diabetes) {
    return { protein: 0.34, legume: 0.22, vegetable: 0.12, carb: 0.2, fruit: 0.07, fat: 0.05 };
  }
  if (state.profile.goal === "gain") {
    return { protein: 0.3, legume: 0.17, vegetable: 0.08, carb: 0.34, fruit: 0.07, fat: 0.04 };
  }
  if (state.profile.goal === "loss") {
    return { protein: 0.36, legume: 0.18, vegetable: 0.16, carb: 0.18, fruit: 0.07, fat: 0.05 };
  }
  return { protein: 0.3, legume: 0.2, vegetable: 0.12, carb: 0.28, fruit: 0.06, fat: 0.04 };
}

function suggestPortions() {
  if (!state.selected.length) return [];
  const budget = mealBudget();
  const selectedGroups = [...new Set(state.selected.map((item) => item.food.group))];
  const weights = groupWeights();
  const availableWeight = selectedGroups.reduce((sum, group) => sum + (weights[group] || 0.08), 0) || 1;

  return state.selected.map((item) => {
    const food = item.food;
    const groupShare = (weights[food.group] || 0.08) / availableWeight;
    let kcalTarget = budget * groupShare;

    if (state.profile.diabetes && (food.gi >= 70 || food.highRisk || item.prep === "suco")) {
      kcalTarget *= 0.58;
    }

    if (food.group === "vegetable") kcalTarget = Math.max(kcalTarget, 35);
    if (food.group === "fat") kcalTarget = Math.min(kcalTarget, 120);

    const prep = PREP[item.prep] || PREP.cozido;
    const kcalPerGram = (food.kcal * prep.kcal) / 100;
    let grams = kcalPerGram > 0 ? Math.max(10, kcalTarget / kcalPerGram) : 0;
    const caps = state.profile.diabetes
      ? { carb: 150, legume: 180, protein: 220, vegetable: 300, fruit: 140, fat: 20 }
      : { carb: 260, legume: 220, protein: 240, vegetable: 300, fruit: 200, fat: 25 };
    grams = Math.min(grams, caps[food.group] || 220);
    return { item, grams: Math.round(grams / 5) * 5 };
  });
}

function applySuggestedGrams() {
  suggestPortions().forEach(({ item, grams }) => {
    if (item.autoGrams !== false) item.grams = grams;
  });
}

function badgesFor(item, calc) {
  const badges = [];
  const food = item.food;
  if (food.group === "legume" || food.fiber >= 5) badges.push({ text: "absorção lenta", type: "info" });
  if (food.group === "protein") badges.push({ text: "proteína", type: "info" });
  if (food.gi >= 70 || calc.gl >= 20) badges.push({ text: "alto impacto glicêmico", type: "warn" });
  if (state.profile.diabetes && (item.prep === "suco" || food.highRisk)) badges.push({ text: "atenção diabetes", type: "danger" });
  if (item.prep === "resfriado") badges.push({ text: "amido resistente", type: "info" });
  if (calc.sodium > 600) badges.push({ text: "sódio elevado", type: "warn" });
  return badges;
}

function scoreMeal(items) {
  const total = totals(items);
  let score = 4;
  if (total.kcal <= mealBudget() * 1.1) score += 2;
  if (total.protein >= 20) score += 2;
  if (total.fiber >= 5) score += 2;
  if (total.gl < 20) score += 2;
  if (total.gl >= 20 && total.gl <= 30) score -= 1;
  if (total.gl > 30) score -= 2;
  if (total.sodium < 600) score += 1;
  if (total.sodium > 600) score -= 1;
  if (total.sodium > 1200) score -= 2;
  if (items.some((item) => item.food.group === "vegetable")) score += 1;
  if (items.some((item) => item.prep === "frito" || item.prep === "suco")) score -= 2;
  return Math.max(0, Math.min(12, score));
}

function renderSelected() {
  els.selectedFoods.innerHTML = "";
  if (!state.selected.length) {
    els.selectedFoods.innerHTML = '<div class="empty-state">Adicione alimentos para o app sugerir as porções e avaliar a refeição.</div>';
    renderSuggestions();
    return;
  }

  applySuggestedGrams();
  state.selected.forEach((item, index) => {
    const row = els.template.content.firstElementChild.cloneNode(true);
    const calc = adjusted(item.food, item);
    row.querySelector(".food-name").textContent = item.food.name;
    row.querySelector(".food-meta").textContent = `${item.food.kcal} kcal/100g · IG ${item.food.gi || "n/a"} · ${item.food.fiber}g fibra`;
    row.querySelector(".suggestion-inline").innerHTML = `
      <strong>${item.grams || 0}g</strong>
      <span>Sugestão inicial · ${round(calc.kcal)} kcal · CG ${round(calc.gl, 1)}</span>
    `;
    row.querySelector(".prep-select").value = item.prep;
    row.querySelector(".oil-input").value = item.oil;
    row.querySelector(".sugar-input").value = item.sugar;
    row.querySelector(".salt-input").value = item.salt;
    row.querySelector(".grams-input").value = item.grams || "";

    row.querySelector(".prep-select").addEventListener("change", (event) => updateItem(index, "prep", event.target.value));
    row.querySelector(".oil-input").addEventListener("input", (event) => updateItem(index, "oil", Number(event.target.value)));
    row.querySelector(".sugar-input").addEventListener("input", (event) => updateItem(index, "sugar", Number(event.target.value)));
    row.querySelector(".salt-input").addEventListener("input", (event) => updateItem(index, "salt", Number(event.target.value)));
    row.querySelector(".grams-input").addEventListener("input", (event) => updateItem(index, "grams", Number(event.target.value)));
    row.querySelector(".remove-food").addEventListener("click", () => {
      state.selected.splice(index, 1);
      renderSelected();
      renderAll();
    });
    els.selectedFoods.append(row);
  });
  renderSuggestions();
}

function updateItem(index, field, value) {
  state.selected[index][field] = value;
  if (field === "grams") state.selected[index].autoGrams = false;
  renderSuggestions();
  renderInsights();
}

function renderSuggestions() {
  els.portionSuggestion.innerHTML = "";
  if (!state.selected.length) {
    els.portionSuggestion.innerHTML = '<div class="empty-state">A sugestão aparece depois que você adiciona alimentos.</div>';
    els.mealScore.innerHTML = "";
    return;
  }

  suggestPortions().forEach(({ item, grams }) => {
    const preview = { ...item, grams };
    const calc = adjusted(item.food, preview);
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.innerHTML = `
      <div>
        <strong>${item.food.name}</strong>
        <span class="log-meta">${round(calc.kcal)} kcal · ${round(calc.protein, 1)}g prot · CG ${round(calc.gl, 1)}</span>
        <div class="badge-row">${badgesFor(preview, calc).map((badge) => `<span class="badge ${badge.type}">${badge.text}</span>`).join("")}</div>
      </div>
      <strong>${grams}g</strong>
    `;
    els.portionSuggestion.append(div);
  });

  const selectedTotals = totals(state.selected);
  const score = scoreMeal(state.selected);
  els.mealScore.innerHTML = `
    <span class="score-number">${score}/12</span>
    <strong>Score metabólico da refeição atual</strong>
    <p class="log-meta">${round(selectedTotals.kcal)} kcal · ${round(selectedTotals.fiber, 1)}g fibra · ${round(selectedTotals.sodium)}mg sódio · CG ${round(selectedTotals.gl, 1)}</p>
  `;
}

function renderMetrics() {
  const day = totals(state.log);
  const remaining = state.profile.dailyCalories - day.kcal;
  const basal = bmr(state.profile);
  const maintenance = basal * Number(state.profile.activity);
  const adjustment = calorieAdjustment(state.profile);
  const [proteinMin, proteinMax] = proteinTargetRange(state.profile);
  els.todayLabel.textContent = new Intl.DateTimeFormat("pt-BR", { weekday: "long", day: "2-digit", month: "short" }).format(new Date());
  els.calorieBalance.textContent = `${round(Math.max(0, remaining))} kcal restantes`;
  els.consumedKcal.textContent = `${round(day.kcal)} kcal`;
  els.remainingKcal.textContent = `${round(Math.max(0, remaining))} kcal`;
  els.proteinTotal.textContent = `${round(day.protein, 1)} g`;
  els.fiberTotal.textContent = `${round(day.fiber, 1)} g`;
  els.glycemicLoadTotal.textContent = round(day.gl, 1);
  els.bmrValue.textContent = `${round(basal)} kcal`;
  els.tdeeValue.textContent = `${round(maintenance)} kcal`;
  els.adjustmentValue.textContent = `${adjustment >= 0 ? "+" : ""}${round(adjustment)} kcal`;
  els.proteinTargetValue.textContent = `${round(proteinMin)}-${round(proteinMax)} g`;
}

function renderLog() {
  els.mealLog.innerHTML = "";
  if (!state.log.length) {
    els.mealLog.innerHTML = '<div class="empty-state">Nenhuma refeição registrada hoje.</div>';
    return;
  }

  state.log.slice().reverse().forEach((meal) => {
    const div = document.createElement("div");
    div.className = "log-item";
    div.innerHTML = `
      <strong>${meal.label}</strong>
      <span class="log-meta">${meal.time} · ${round(meal.kcal)} kcal · ${round(meal.protein, 1)}g proteína · ${round(meal.fiber, 1)}g fibra · CG ${round(meal.gl, 1)}</span>
      <div class="badge-row">${meal.flags.map((flag) => `<span class="badge ${flag.type}">${flag.text}</span>`).join("")}</div>
    `;
    els.mealLog.append(div);
  });
}

function renderInsights() {
  const day = totals(state.log);
  const insights = [];
  const [proteinMin, proteinMax] = proteinTargetRange(state.profile);
  const fiberTarget = Math.max(25, state.profile.dailyCalories * 14 / 1000);

  if (day.kcal > state.profile.dailyCalories) {
    insights.push({ type: "danger", text: `Você ultrapassou a meta em ${round(day.kcal - state.profile.dailyCalories)} kcal. Priorize legumes, proteína magra e evite bebida calórica no restante do dia.` });
  } else {
    insights.push({ type: "info", text: `Ainda restam ${round(state.profile.dailyCalories - day.kcal)} kcal. Para a próxima refeição, o orçamento aproximado é ${round(mealBudget())} kcal.` });
  }

  if (day.protein < proteinMin * 0.6) {
    insights.push({ type: "warn", text: `Proteína ainda baixa para o dia. Meta prática: ${round(proteinMin)}-${round(proteinMax)}g conforme objetivo e peso.` });
  }

  if (day.fiber < fiberTarget * 0.5) {
    insights.push({ type: "warn", text: `Fibras abaixo do ideal. Feijão, lentilha, aveia, verduras e frutas inteiras ajudam a reduzir velocidade de absorção.` });
  }

  if (state.profile.diabetes) {
    if (day.gl > 80) {
      insights.push({ type: "danger", text: "Carga glicêmica diária alta para controle rigoroso. Reduza carboidratos refinados, sucos, tapioca sem proteína e frutas secas." });
    } else {
      insights.push({ type: "info", text: "Para diabetes, prefira carboidrato com leguminosa, proteína e salada. Fruta inteira é melhor que suco." });
    }
  }

  if (state.profile.hypertension && day.sodium > 1600) {
    insights.push({ type: "danger", text: `Sódio já em ${round(day.sodium)}mg. Evite embutidos, queijos salgados, temperos prontos e conservas no restante do dia.` });
  }

  if (state.selected.some((item) => normalize(item.food.name).includes("arroz")) && state.selected.some((item) => normalize(item.food.name).includes("feijao"))) {
    insights.push({ type: "info", text: "Boa combinação: arroz e feijão somam aminoácidos, fibras e menor resposta glicêmica do que arroz isolado." });
  }

  els.dailyInsights.innerHTML = insights.map((insight) => `<div class="insight ${insight.type}">${insight.text}</div>`).join("");
}

function renderAll() {
  renderMetrics();
  renderLog();
  renderInsights();
  renderSuggestions();
  renderConnectionStatus();
}

function renderConnectionStatus() {
  if (!els.connectionStatus) return;
  els.connectionStatus.textContent = navigator.onLine ? "Online" : "Offline";
}

function appendChat(text, type = "bot") {
  if (!els.chatLog) return;
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${type}`;
  bubble.textContent = text;
  els.chatLog.append(bubble);
  els.chatLog.scrollTop = els.chatLog.scrollHeight;
}

function renderCandidateChoices(candidates) {
  els.foodTypeChoices.innerHTML = "";
  state.pendingCandidates = candidates;

  candidates.forEach((food, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = food.name;
    button.addEventListener("click", () => {
      els.foodTypeChoices.innerHTML = "";
      state.pendingCandidates = [];
      addFoodToMeal(food);
    });
    els.foodTypeChoices.append(button);
  });
}

function addFoodToMeal(food) {
  state.selected.push({ food, prep: "cozido", oil: 0, sugar: 0, salt: 0, grams: 0, autoGrams: true });
  appendChat(`${food.name} adicionado. Ajuste preparo, sal, óleo, açúcar e gramas no cartão abaixo.`, "bot");
  els.foodSearch.value = "";
  renderSelected();
  renderAll();
}

function renderScienceFact() {
  const daySeed = Math.floor(Date.now() / 86400000);
  const fact = SCIENCE_FACTS[daySeed % SCIENCE_FACTS.length];
  els.scienceFactTitle.textContent = fact.title;
  els.scienceFactText.textContent = fact.text;
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (!["http:", "https:"].includes(window.location.protocol)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.warn("Service worker nao registrado", error);
    });
  });
}

function setupInstallPrompt() {
  if (!els.installButton) return;

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    els.installButton.hidden = false;
  });

  els.installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    els.installButton.hidden = true;
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    els.installButton.hidden = true;
  });
}

function addFoodFromInput() {
  const query = els.foodSearch.value;
  const candidates = findFoodCandidates(query);
  appendChat(query || "Adicionar alimento", "user");

  if (!candidates.length) {
    els.foodTypeChoices.innerHTML = "";
    els.foodSearch.setCustomValidity("Alimento não encontrado na base técnica inicial.");
    els.foodSearch.reportValidity();
    appendChat("Não encontrei esse alimento na base inicial. Tente outro nome, como arroz branco, feijão, ovo ou alface.", "bot");
    setTimeout(() => els.foodSearch.setCustomValidity(""), 1600);
    return;
  }

  const exactFood = candidates.find((food) => normalize(food.name) === normalize(query));
  if (candidates.length > 1 && !exactFood) {
    appendChat("Encontrei mais de uma opção. Qual delas você quer usar?", "bot");
    renderCandidateChoices(candidates);
    els.foodSearch.value = "";
    return;
  }

  els.foodTypeChoices.innerHTML = "";
  state.pendingCandidates = [];
  addFoodToMeal(exactFood || candidates[0]);
}

function registerMeal(event) {
  event.preventDefault();
  const validItems = state.selected.filter((item) => Number(item.grams) > 0);
  if (!validItems.length) return;
  const total = totals(validItems);
  const flags = validItems.flatMap((item) => badgesFor(item, adjusted(item.food, item)));
  state.log.push({
    label: validItems.map((item) => `${item.food.name} ${item.grams}g`).join(" + "),
    time: new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" }).format(new Date()),
    ...total,
    flags: uniqueFlags(flags)
  });
  state.selected = [];
  localStorage.setItem(storageKey(), JSON.stringify(state.log));
  renderSelected();
  renderAll();
}

function uniqueFlags(flags) {
  const seen = new Set();
  return flags.filter((flag) => {
    const key = `${flag.type}-${flag.text}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function initOptions() {
  els.foodOptions.innerHTML = FOODS.map((food) => `<option value="${food.name}"></option>`).join("");
}

els.profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  readProfile();
  state.profile.dailyCalories = Math.round(suggestedCalories(state.profile) / 10) * 10;
  els.dailyCalories.value = state.profile.dailyCalories;
  localStorage.setItem("fitarm-profile", JSON.stringify(state.profile));
  renderSelected();
  renderAll();
});

["input", "change"].forEach((eventName) => {
  els.profileForm.addEventListener(eventName, () => {
    readProfile();
    renderSelected();
    renderAll();
  });
});

els.goal.addEventListener("change", () => {
  els.calorieStrategy.value = defaultStrategy(els.goal.value);
  readProfile();
  renderSelected();
  renderAll();
});

els.addFoodButton.addEventListener("click", addFoodFromInput);
els.foodSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addFoodFromInput();
  }
});
els.mealForm.addEventListener("submit", registerMeal);
els.resetDayButton.addEventListener("click", () => {
  state.log = [];
  localStorage.removeItem(storageKey());
  renderAll();
});

window.addEventListener("online", renderConnectionStatus);
window.addEventListener("offline", renderConnectionStatus);

registerServiceWorker();
setupInstallPrompt();
hydrateProfile();
initOptions();
renderScienceFact();
renderSelected();
renderAll();
