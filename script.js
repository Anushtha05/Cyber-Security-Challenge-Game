const challenges = {
  caesar: {
    easy: [
      { question: "Encrypt 'HELLO' with shift 3", answer: "KHOOR", hint: "Shift each letter forward by 3." },
      { question: "Encrypt 'CAT' with shift 1", answer: "DBU", hint: "Shift each letter forward by 1." },
      { question: "Encrypt 'DOG' with shift 2", answer: "FQI", hint: "Forward by 2." },
      { question: "Decrypt 'ZRUOG' with shift 3", answer: "WORLD", hint: "Shift backward by 3." },
      { question: "Decrypt 'EBIIL' with shift 3", answer: "BAHEL", hint: "Back by 3." }
    ],
    medium: [
      { question: "Encrypt 'SECURITY' with shift 5", answer: "XHJWXNZYD", hint: "Shift forward by 5." },
      { question: "Decrypt 'RIJVS' with shift 5", answer: "MEETU", hint: "Shift backward by 5." },
      { question: "Encrypt 'GUARD' with shift 7", answer: "NBHYK", hint: "Add 7." },
      { question: "Decrypt 'OLSSV' with shift 7", answer: "HELLO", hint: "Subtract 7." },
      { question: "Encrypt 'SAFETY' with shift 9", answer: "ZJOLCB", hint: "Forward by 9." }
    ],
    hard: [
      { question: "Encrypt 'CHALLENGE' with shift 13", answer: "PUNYYRATR", hint: "ROT13 (13 shift)." },
      { question: "Decrypt 'URYYB' with shift 13", answer: "HELLO", hint: "ROT13 again." },
      { question: "Encrypt 'MISSION' with shift 25", answer: "LHRRHNM", hint: "Max shift before loop." },
      { question: "Decrypt 'PDA MQEYG' with shift 15", answer: "THE BRAIN", hint: "Subtract 15." },
      { question: "Encrypt 'UNDERGROUND' with shift 17", answer: "LEUTIVIFLFEU", hint: "Large forward shift." }
    ]
  },

  base64: {
    easy: [
      { question: "Encode 'HELLO'", answer: "SEVMTE8=", hint: "Use Base64 encoding." },
      { question: "Encode 'CAT'", answer: "Q0FU", hint: "Use Base64 encoding." },
      { question: "Encode 'DOG'", answer: "RE9H", hint: "Base64 of DOG." },
      { question: "Decode 'V09STEQ='", answer: "WORLD", hint: "Base64 decode." },
      { question: "Decode 'SGFja2Vy'", answer: "HACKER", hint: "Decode this." }
    ],
    medium: [
      { question: "Encode 'ATTACK AT DAWN'", answer: "QVRUQUNLIEFUIERBV04=", hint: "Watch for spaces." },
      { question: "Decode 'U0VDVVJJVFk='", answer: "SECURITY", hint: "Base64 decoding." },
      { question: "Decode 'U1lTVEVN'", answer: "SYSTEM", hint: "Decode this word." },
      { question: "Encode 'ENCRYPTION'", answer: "RU5DUllQVElPTg==", hint: "One word encode." },
      { question: "Decode 'UkVEIFRFTU0='", answer: "RED TEMM", hint: "Typo test" }
    ],
    hard: [
      { question: "Decode 'VEhJUyBJUyBBIEhBUkQgT05F'", answer: "THIS IS A HARD ONE", hint: "Decode sentence." },
      { question: "Encode 'HIGH LEVEL SECURITY'", answer: "SElHSCBMRVZFTCBTRUNVUklUWSA=", hint: "Space-separated." },
      { question: "Decode 'Q1liZXJTZWN1cml0eQ=='", answer: "CyberSecurity", hint: "Mixed case decode." },
      { question: "Encode 'CRYPTOGRAPHY RULES'", answer: "Q1JZUFRPR1JBUEhZIFJVTEVT", hint: "Two words." },
      { question: "Decode 'V2hlcmUgYW0gaQ=='", answer: "Where am i", hint: "Short phrase." }
    ]
  },

  playfair: {
    easy: [
      { question: "Decrypt 'BMODZBXDNABEKUDMUIXMMOUVIF' with key 'KEY'", answer: "HELLOFROMPLAYFAIR", hint: "Follow Playfair rules." },
      { question: "Encrypt 'HIDE' with key 'MONARCHY'", answer: "BMND", hint: "Pairs of 2 letters." },
      { question: "Decrypt 'GATLMZ' with key 'MONARCHY'", answer: "HIDEME", hint: "Classic example." },
      { question: "Encrypt 'INSTRUMENT' with key 'KEYWORD'", answer: "GATLMZCLQB", hint: "Apply digraphs." },
      { question: "Decrypt 'ZICVTWQNGRZGVTWAVZHCQYGLMGJ'", answer: "WEAREDISCOVEREDSAVEYOURSELF", hint: "No spaces." }
    ],
    medium: [
      { question: "Encrypt 'HELPME' with key 'SECRET'", answer: "HBMPNF", hint: "Use matrix." },
      { question: "Encrypt 'TOMORROW' with key 'MATRIX'", answer: "UQGQLXQY", hint: "Same row/column logic." },
      { question: "Decrypt 'WGLDNB' with key 'CHESS'", answer: "SECRET", hint: "Decode message." },
      { question: "Encrypt 'LOCKDOWN' with key 'ALERT'", answer: "MPENBYPL", hint: "Encoded lockdown." },
      { question: "Decrypt 'DYDLGQ' with key 'KEY'", answer: "ATTACK", hint: "Use grid logic." }
    ],
    hard: [
      { question: "Decrypt 'CQXKQVPG' with key 'MONARCHY'", answer: "INSECURE", hint: "Hard pattern." },
      { question: "Encrypt 'AGENTSMISSION' with key 'TOPSECRET'", answer: "BDLFHOBRRYSL", hint: "Multiple digraphs." },
      { question: "Encrypt 'HACKERZONE' with key 'SECURITY'", answer: "IFDLGVOPNY", hint: "Matrix application." },
      { question: "Decrypt 'FIPSMAXO' with key 'KEYWORD'", answer: "DECRYPTED", hint: "Use key grid." },
      { question: "Encrypt 'ESCAPEPLAN' with key 'PRISON'", answer: "FUICRQODMB", hint: "Word pair encryption." }
    ]
  },

  hill: {
    easy: [
      { question: "Decrypt 'ZEBRAS' with key [[3,3],[2,5]]", answer: "ATTACK", hint: "2x2 matrix, basic hill." },
      { question: "Encrypt 'HI' with key [[2,1],[1,1]]", answer: "ZK", hint: "Simple 2-letter test." },
      { question: "Encrypt 'GO' with key [[6,24],[1,13]]", answer: "FP", hint: "Example from Hill." },
      { question: "Decrypt 'FJ' with key [[17,17],[21,18]]", answer: "IT", hint: "Basic hill decryption." },
      { question: "Encrypt 'CAT' with key [[5,8],[17,3]]", answer: "YJ", hint: "Short message." }
    ],
    medium: [
      { question: "Encrypt 'HELP' with key [[11,8],[3,7]]", answer: "SNQL", hint: "Matrix of 2x2." },
      { question: "Decrypt 'ULSL' with key [[3,3],[2,5]]", answer: "MEET", hint: "Decrypting matrix." },
      { question: "Encrypt 'TEAM' with key [[6,24],[1,13]]", answer: "HQDU", hint: "Mid-length test." },
      { question: "Decrypt 'GNFK' with key [[1,2],[3,5]]", answer: "CHAT", hint: "Backtrace matrix." },
      { question: "Encrypt 'GOOD' with key [[1,2],[3,5]]", answer: "GRRZ", hint: "Hill again." }
    ],
    hard: [
      { question: "Decrypt 'PQCFKU' with key [[6,24,1],[13,16,10],[20,17,15]]", answer: "SHORT", hint: "3x3 matrix." },
      { question: "Encrypt 'NETWORK' with key [[2,4,12],[9,1,6],[7,5,3]]", answer: "GLZIGSJ", hint: "Hard hill encryption." },
      { question: "Encrypt 'HACKERS' with key [[17,17],[21,18]]", answer: "SYKTQO", hint: "Test full matrix." },
      { question: "Decrypt 'ZKFP' with key [[3,3],[2,5]]", answer: "HELP", hint: "Backtrack." },
      { question: "Encrypt 'DANGER' with key [[6,24,1],[13,16,10],[20,17,15]]", answer: "IFQKMZ", hint: "3x3 hill." }
    ]
  },

  vernam: {
    easy: [
      { question: "Encrypt 'HELLO' with key 'XMCKL'", answer: "EQNVZ", hint: "Bitwise XOR letter-by-letter." },
      { question: "Decrypt 'EQNVZ' with key 'XMCKL'", answer: "HELLO", hint: "Same key, reverse XOR." },
      { question: "Encrypt 'TEST' with key 'KEYS'", answer: "ZCWR", hint: "Mod 26 XOR." },
      { question: "Decrypt 'ZCWR' with key 'KEYS'", answer: "TEST", hint: "Reverse." },
      { question: "Encrypt 'LOVE' with key 'FIRE'", answer: "RZQF", hint: "Bitwise char by char." }
    ],
    medium: [
      { question: "Encrypt 'SECURE' with key 'SECRET'", answer: "HXAIYN", hint: "Char XOR." },
      { question: "Decrypt 'HXAIYN' with key 'SECRET'", answer: "SECURE", hint: "Back from XOR." },
      { question: "Encrypt 'CIPHER' with key 'SECRET'", answer: "XZIXMV", hint: "Medium XOR." },
      { question: "Encrypt 'TARGET' with key 'HUNTER'", answer: "ZMLJIR", hint: "Exact key length." },
      { question: "Decrypt 'ZMLJIR' with key 'HUNTER'", answer: "TARGET", hint: "Bitwise match." }
    ],
    hard: [
      { question: "Encrypt 'INFORMATION' with key 'SECUREKEYXYZ'", answer: "ASDRFELGHTUJ", hint: "Long key vernam." },
      { question: "Decrypt 'ASDRFELGHTUJ' with key 'SECUREKEYXYZ'", answer: "INFORMATION", hint: "Reverse it." },
      { question: "Encrypt 'HACKING' with key 'DEFENSE'", answer: "KFLZNGI", hint: "Hard vernam." },
      { question: "Encrypt 'ATTACKATDAWN' with key 'SAVETHEWORLD'", answer: "SWLWIJBYWJYK", hint: "Exact length key." },
      { question: "Decrypt 'SWLWIJBYWJYK' with key 'SAVETHEWORLD'", answer: "ATTACKATDAWN", hint: "Decrypt vernam." }
    ]
  },

  vigenere: {
    easy: [
      { question: "Encrypt 'ATTACK' with key 'LEMON'", answer: "LXFOPV", hint: "Shift by key." },
      { question: "Encrypt 'HELLO' with key 'KEY'", answer: "RIJVS", hint: "Key repeated." },
      { question: "Decrypt 'RIJVS' with key 'KEY'", answer: "HELLO", hint: "Backwards shift." },
      { question: "Encrypt 'WORLD' with key 'DOG'", answer: "ZSYVJ", hint: "Key = DOG." },
      { question: "Decrypt 'ZSYVJ' with key 'DOG'", answer: "WORLD", hint: "Reverse with DOG." }
    ],
    medium: [
      { question: "Encrypt 'SYSTEM' with key 'HACK'", answer: "ZBHLAL", hint: "Use HACK." },
      { question: "Decrypt 'ZBHLAL' with key 'HACK'", answer: "SYSTEM", hint: "Back from HACK." },
      { question: "Encrypt 'NETWORK' with key 'SECURE'", answer: "FVIAVPA", hint: "SECURE as key." },
      { question: "Decrypt 'FVIAVPA' with key 'SECURE'", answer: "NETWORK", hint: "Reverse." },
      { question: "Encrypt 'TARGET' with key 'VIGENERE'", answer: "OPRVCJ", hint: "Key: Vigenere." }
    ],
    hard: [
      { question: "Encrypt 'CRYPTOGRAPHY' with key 'ENCRYPT'", answer: "FVHAPCXPMWCA", hint: "Key repeated." },
      { question: "Decrypt 'FVHAPCXPMWCA' with key 'ENCRYPT'", answer: "CRYPTOGRAPHY", hint: "Reverse shift." },
      { question: "Encrypt 'TOPSECRET' with key 'PASSWORD'", answer: "IFXMJVUV", hint: "Use PASSWORD." },
      { question: "Decrypt 'IFXMJVUV' with key 'PASSWORD'", answer: "TOPSECRET", hint: "Reverse PASSWORD." },
      { question: "Encrypt 'HIDDENMESSAGE' with key 'CLASSIFIED'", answer: "KQJGVJRVKUPY", hint: "Long key." }
    ]
  },

  transposition: {
    easy: [
      { question: "Encrypt 'HELLO' with key 2", answer: "HLOEL", hint: "Swap even/odd." },
      { question: "Encrypt 'ATTACK' with key 2", answer: "ATATKC", hint: "Mix up positions." },
      { question: "Encrypt 'WORLD' with key 3", answer: "WLRDO", hint: "Block shift." },
      { question: "Encrypt 'TEST' with key 2", answer: "TSET", hint: "Basic shuffle." },
      { question: "Encrypt 'DOGCAT' with key 2", answer: "DGCOAT", hint: "Pairs swapped." }
    ],
    medium: [
      { question: "Encrypt 'DEFENDTHEEASTWALLOFTHECASTLE' with key 4", answer: "DTHSAFTELNEHCTAELOWEDLSTF", hint: "Block shift (complex)." },
      { question: "Encrypt 'SECURITY' with key 3", answer: "SUIECYRT", hint: "Col-wise rearrange." },
      { question: "Encrypt 'MATRIX' with key 3", answer: "MRXATI", hint: "Transpose blocks." },
      { question: "Encrypt 'AGENT' with key 4", answer: "ANEGT", hint: "Permutation pattern." },
      { question: "Encrypt 'LOCKDOWN' with key 2", answer: "LCKODWON", hint: "Split & merge." }
    ],
    hard: [
      { question: "Encrypt 'DEFENDTHECASTLE' with key '4312'", answer: "FETDDEEHNLSCTAE", hint: "Columnar transposition." },
      { question: "Encrypt 'HIDEANDSEEK' with key '3142'", answer: "DHEAIEKSDEN", hint: "Key-based position." },
      { question: "Encrypt 'CLASSIFIED' with key 5", answer: "CSISDALFISE", hint: "Scramble by block." },
      { question: "Encrypt 'UNDERGROUND' with key 4", answer: "UEGDRNRUODN", hint: "Column rotation." },
      { question: "Encrypt 'HACKINGTOOLS' with key 3", answer: "HGKCSIAOTLON", hint: "Divide & permute." }
    ]
  }
};

let currentCipher = "caesar";
let currentLevel = "easy";
let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const answerInput = document.getElementById("answerInput");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const progressBar = document.getElementById("progressBar");

const cipherSelect = document.getElementById("cipherSelect");
const levelSelect = document.getElementById("levelSelect");
const submitBtn = document.getElementById("submitBtn");
const hintBtn = document.getElementById("hintBtn");
const quitBtn = document.getElementById("quitBtn");

function loadQuestion() {
  const currentSet = challenges[currentCipher][currentLevel];
  if (!currentSet || currentSet.length === 0) {
    questionText.textContent = "No questions available for this selection.";
    submitBtn.disabled = true;
    hintBtn.disabled = true;
    answerInput.disabled = true;
    return;
  }
  if (currentQuestionIndex >= currentSet.length) {
    questionText.textContent = `You finished all questions for ${currentCipher} (${currentLevel})! Your final score is ${score}.`;
    submitBtn.disabled = true;
    hintBtn.disabled = true;
    answerInput.disabled = true;
    return;
  }

  const currentQ = currentSet[currentQuestionIndex];
  questionText.textContent = currentQ.question;
  answerInput.value = "";
  feedback.textContent = "";
  submitBtn.disabled = false;
  hintBtn.disabled = false;
  answerInput.disabled = false;
  updateProgress();
}

function checkAnswer() {
  const userAnswer = answerInput.value.trim().toUpperCase();
  const currentQ = challenges[currentCipher][currentLevel][currentQuestionIndex];
  if (userAnswer === currentQ.answer.toUpperCase()) {
    score++;
    feedback.style.color = "#8ff7a7";
    feedback.textContent = "Correct! 🎉";
    if (typeof playSound === "function") playSound("correct");
    currentQuestionIndex++;
    updateProgress();
    setTimeout(loadQuestion, 1500);
  } else {
    feedback.style.color = "#f56565";
    feedback.textContent = "Wrong answer, try again!";
    if (typeof playSound === "function") playSound("wrong");
  }
  updateScore();
}

function showHint() {
  const currentQ = challenges[currentCipher][currentLevel][currentQuestionIndex];
  feedback.style.color = "#ffed85";
  feedback.textContent = "Hint: " + currentQ.hint;
  if (typeof playSound === "function") playSound("hint");
}

function updateScore() {
  scoreDisplay.textContent = `Score: ${score}`;
}

function updateProgress() {
  const total = challenges[currentCipher][currentLevel].length;
  const progressPercent = (currentQuestionIndex / total) * 100;
  progressBar.style.width = progressPercent + "%";
}

cipherSelect.addEventListener("change", () => {
  currentCipher = cipherSelect.value;
  currentQuestionIndex = 0;
  score = 0;
  updateScore();
  loadQuestion();
});

levelSelect.addEventListener("change", () => {
  currentLevel = levelSelect.value;
  currentQuestionIndex = 0;
  score = 0;
  updateScore();
  loadQuestion();
});

submitBtn.addEventListener("click", () => {
  if (answerInput.value.trim() !== "") {
    checkAnswer();
  }
});

hintBtn.addEventListener("click", () => {
  showHint();
});

quitBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to quit the current challenge?")) {
    currentQuestionIndex = 0;
    score = 0;
    updateScore();
    loadQuestion();
  }
});

// Initialize
loadQuestion();
