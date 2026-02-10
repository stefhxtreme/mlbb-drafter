const heroData = {
    // TANKS
    "Tigreal": {
        role: "Tank",
        advantages: ["Excellent initiation", "Strong crowd control", "High durability"],
        disadvantages: ["Low damage output", "Predictable movements", "Weak in 1v1"],
        counterPicks: ["Layla", "Chou", "Gusion"]
    },
    "Akai": {
        role: "Tank",
        advantages: ["Good crowd control", "Decent damage", "Mobile"],
        disadvantages: ["Short range", "Low HP recovery", "Slow without items"],
        counterPicks: ["Layla", "Gusion", "Selena"]
    },
    "Franco": {
        role: "Tank",
        advantages: ["Hook crowd control", "Tank role", "Good at hooking enemies"],
        disadvantages: ["Predictable skills", "Limited range", "Weak mobility"],
        counterPicks: ["Lancelot", "Chou", "Li'Duruo"]
    },
    "Minotaur": {
        role: "Tank",
        advantages: ["High durability", "Crowd control", "Good for teamfights"],
        disadvantages: ["Slow movement", "Low damage", "Easy to kite"],
        counterPicks: ["Layla", "Chou", "Gusion"]
    },
    "Lolita": {
        role: "Tank",
        advantages: ["Good shield", "Crowd control", "Tanky"],
        disadvantages: ["Low damage", "Limited mobility", "Predictable"],
        counterPicks: ["Layla", "Kagura", "Gusion"]
    },
    "Johnson": {
        role: "Tank",
        advantages: ["Mobile transport", "Good initiation", "Strong gang abilities"],
        disadvantages: ["Difficult mechanics", "Weak in lane", "Cooldown dependent"],
        counterPicks: ["Layla", "Chou", "Gusion"]
    },
    "Gatotkaca": {
        role: "Tank",
        advantages: ["High durability", "Good initiation", "Tanky"],
        disadvantages: ["Low damage", "Predictable", "Easy to counter"],
        counterPicks: ["Layla", "Chou", "Gusion"]
    },
    "Grock": {
        role: "Tank",
        advantages: ["High defense", "Good crowd control", "Wall mechanic"],
        disadvantages: ["Position dependent", "Weak without walls", "Low damage"],
        counterPicks: ["Layla", "Chou", "Gusion"]
    },
    "Hylos": {
        role: "Tank",
        advantages: ["High HP", "Good defense", "Health-based abilities"],
        disadvantages: ["Low mobility", "No crowd control", "Slow"],
        counterPicks: ["Layla", "Chou", "Gusion"]
    },
    "Uranus": {
        role: "Tank",
        advantages: ["Healing", "Good durability", "Anti-burst"],
        disadvantages: ["Limited damage", "Slow", "No crowd control"],
        counterPicks: ["Layla", "Chou", "Gusion"]
    },
    "Belerick": {
        role: "Tank",
        advantages: ["Crowd control", "Good durability", "Tanky"],
        disadvantages: ["Low damage", "Slow", "Easy to counter"],
        counterPicks: ["Layla", "Chou", "Gusion"]
    },
    "Khufra": {
        role: "Tank",
        advantages: ["Crowd control", "Good defense", "High durability"],
        disadvantages: ["Low damage", "Slow", "Limited mobility"],
        counterPicks: ["Layla", "Chou", "Gusion"]
    },
    "Esmeralda": {
        role: "Tank",
        advantages: ["Shield mechanic", "Tanky", "Good defense"],
        disadvantages: ["Low damage", "Skill dependent", "Slow"],
        counterPicks: ["Layla", "Chou", "Gusion"]
    },
    "Atlas": {
        role: "Tank",
        advantages: ["Crowd control", "Good durability", "Anti-mobility"],
        disadvantages: ["Low damage", "Slow", "Limited range"],
        counterPicks: ["Layla", "Chou", "Gusion"]
    },
    "Barats": {
        role: "Tank",
        advantages: ["Crowd control", "High durability", "Good initiation"],
        disadvantages: ["Low damage", "Slow", "Large hitbox"],
        counterPicks: ["Layla", "Chou", "Gusion"]
    },
    "Gloo": {
        role: "Tank",
        advantages: ["Flexibility", "Good durability", "Crowd control"],
        disadvantages: ["Low damage", "Slow", "Position dependent"],
        counterPicks: ["Layla", "Chou", "Gusion"]
    },
    "Edith": {
        role: "Tank",
        advantages: ["Crowd control", "High durability", "Good initiation"],
        disadvantages: ["Low damage", "Slow", "Limited mobility"],
        counterPicks: ["Layla", "Chou", "Gusion"]
    },
    "Fredrinn": {
        role: "Tank",
        advantages: ["Crowd control", "High durability", "Good initiation"],
        disadvantages: ["Low damage", "Slow", "Limited mobility"],
        counterPicks: ["Layla", "Chou", "Gusion"]
    },

    // FIGHTERS
    "Balmond": {
        role: "Fighter",
        advantages: ["High burst damage", "Healing", "Good in teamfights"],
        disadvantages: ["No crowd control", "Weak mobility", "Item dependent"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Alucard": {
        role: "Fighter",
        advantages: ["High burst damage", "Healing", "Good early game"],
        disadvantages: ["No crowd control", "Weak mobility", "Item dependent"],
        counterPicks: ["Miya", "Layla", "Franco"]
    },
    "Bane": {
        role: "Fighter",
        advantages: ["High HP", "Good damage", "Tanky build option"],
        disadvantages: ["Slow", "Limited mobility", "Weak in lane"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Zilong": {
        role: "Fighter",
        advantages: ["Good mobility", "Decent damage", "Good for roaming"],
        disadvantages: ["Weak early game", "Low damage lategame", "Skill dependent"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Freya": {
        role: "Fighter",
        advantages: ["High damage", "Good mobility", "Flying ability"],
        disadvantages: ["Skill dependent", "Weak without items", "Low crowd control"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Chou": {
        role: "Fighter",
        advantages: ["High mobility", "Crowd control", "Good damage"],
        disadvantages: ["Skill dependent", "Complex mechanics", "Slow without items"],
        counterPicks: ["Miya", "Layla", "Franco"]
    },
    "Sun": {
        role: "Fighter",
        advantages: ["Clone mechanic", "Good split push", "Mobile"],
        disadvantages: ["Weak in early game", "Skill dependent", "Low single target damage"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Alpha": {
        role: "Fighter",
        advantages: ["Good damage", "Tanky", "Good in fights"],
        disadvantages: ["No crowd control", "Weak mobility", "Item dependent"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Ruby": {
        role: "Fighter",
        advantages: ["Healing", "High durability", "Good teamfight presence"],
        disadvantages: ["Low damage", "Weak early game", "Limited mobility"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Hilda": {
        role: "Fighter",
        advantages: ["Healing", "High durability", "Good forest presence"],
        disadvantages: ["Low damage", "Slow", "Weak in lane"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Lapu-Lapu": {
        role: "Fighter",
        advantages: ["High damage", "Mobile", "Good for fights"],
        disadvantages: ["No crowd control", "Item dependent", "Weak early game"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Roger": {
        role: "Fighter",
        advantages: ["Versatile", "Form switching", "Good damage"],
        disadvantages: ["Skill dependent", "Complex mechanics", "Weak lategame"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Argus": {
        role: "Fighter",
        advantages: ["High damage", "Invulnerability skill", "Good burst"],
        disadvantages: ["Weak early game", "Item dependent", "No crowd control"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Jawhead": {
        role: "Fighter",
        advantages: ["Crowd control", "Good damage", "Dunking ability"],
        disadvantages: ["Skill dependent", "Weak early game", "Limited range"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Martis": {
        role: "Fighter",
        advantages: ["High burst damage", "Good mobility", "Good teamfight"],
        disadvantages: ["No crowd control", "Item dependent", "Weak early game"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Leomord": {
        role: "Fighter",
        advantages: ["High damage", "Good mobility", "Horse ability"],
        disadvantages: ["Skill dependent", "Item dependent", "Weak early game"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Thamuz": {
        role: "Fighter",
        advantages: ["Healing", "High damage", "Good tanky build"],
        disadvantages: ["Low mobility", "Weak early game", "No crowd control"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Minsitthar": {
        role: "Fighter",
        advantages: ["Crowd control", "Good damage", "Antiflying ability"],
        disadvantages: ["Weak early game", "Limited mobility", "Skill dependent"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Badang": {
        role: "Fighter",
        advantages: ["High damage", "Good mobility", "Wall mechanic"],
        disadvantages: ["Position dependent", "Weak without walls", "Item dependent"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Guinevere": {
        role: "Fighter",
        advantages: ["Crowd control", "Good damage", "Good teamfight"],
        disadvantages: ["Weak early game", "Skill dependent", "Limited mobility"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Terizla": {
        role: "Fighter",
        advantages: ["High damage", "Tanky", "Good in fights"],
        disadvantages: ["Slow", "Weak early game", "No crowd control"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "X.Borg": {
        role: "Fighter",
        advantages: ["Area control", "High damage", "Good initiation"],
        disadvantages: ["Weak early game", "Item dependent", "Skill dependent"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Dyrroth": {
        role: "Fighter",
        advantages: ["High burst damage", "Good mobility", "Good fights"],
        disadvantages: ["Weak early game", "Item dependent", "No crowd control"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Masha": {
        role: "Fighter",
        advantages: ["High damage", "Tanky", "Health scaling"],
        disadvantages: ["Weak early game", "Item dependent", "No crowd control"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Silvanna": {
        role: "Fighter",
        advantages: ["Crowd control", "Good damage", "Good mobility"],
        disadvantages: ["Weak early game", "Skill dependent", "Item dependent"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Yu Zhong": {
        role: "Fighter",
        advantages: ["High damage", "Tanky", "Dragon form"],
        disadvantages: ["Skill dependent", "Weak early game", "Item dependent"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Benedetta": {
        role: "Fighter",
        advantages: ["High mobility", "Good damage", "CC immunity"],
        disadvantages: ["Weak early game", "Item dependent", "Skill dependent"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Khaleed": {
        role: "Fighter",
        advantages: ["High damage", "Mobile", "Good fights"],
        disadvantages: ["Weak early game", "Item dependent", "No crowd control"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Paquito": {
        role: "Fighter",
        advantages: ["High burst damage", "Mobile", "Good fights"],
        disadvantages: ["Weak early game", "Item dependent", "Skill dependent"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Phoveus": {
        role: "Fighter",
        advantages: ["Crowd control", "High damage", "Good mobility"],
        disadvantages: ["Weak early game", "Skill dependent", "Item dependent"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Aulus": {
        role: "Fighter",
        advantages: ["High damage", "Crowd control", "Good fights"],
        disadvantages: ["Weak early game", "Item dependent", "Limited range"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Yin": {
        role: "Fighter",
        advantages: ["High burst damage", "Mobile", "Good against tanks"],
        disadvantages: ["Weak early game", "Item dependent", "Skill dependent"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Julian": {
        role: "Fighter",
        advantages: ["High damage", "Mobile", "Good fights"],
        disadvantages: ["Weak early game", "Item dependent", "Skill dependent"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Cici": {
        role: "Fighter",
        advantages: ["High damage", "Mobile", "Good fights"],
        disadvantages: ["Weak early game", "Item dependent", "Skill dependent"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Suyou": {
        role: "Fighter",
        advantages: ["High damage", "Mobile", "Good fights"],
        disadvantages: ["Weak early game", "Item dependent", "Skill dependent"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },
    "Lukas": {
        role: "Fighter",
        advantages: ["High damage", "Mobile", "Good fights"],
        disadvantages: ["Weak early game", "Item dependent", "Skill dependent"],
        counterPicks: ["Miya", "Layla", "Chou"]
    },

    // ASSASSINS
    "Saber": {
        role: "Assassin",
        advantages: ["High burst damage", "Good mobility", "Strong early game"],
        disadvantages: ["Weak teamfight", "Squishy", "Cooldown dependent"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },
    "Karina": {
        role: "Assassin",
        advantages: ["High burst damage", "Stealth ability", "Good ganking"],
        disadvantages: ["Weak teamfight", "Squishy", "No crowd control"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },
    "Fanny": {
        role: "Assassin",
        advantages: ["High mobility", "Cable grappling", "Good roaming"],
        disadvantages: ["Difficult mechanics", "Squishy", "Cooldown dependent"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },
    "Hayabusa": {
        role: "Assassin",
        advantages: ["High burst damage", "Stealth", "Good ganking"],
        disadvantages: ["Weak teamfight", "Squishy", "Skill dependent"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },
    "Natalia": {
        role: "Assassin",
        advantages: ["Stealth", "High burst", "Good ganking"],
        disadvantages: ["Weak teamfight", "Squishy", "Low crowd control"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },
    "Yi Sun-shin": {
        role: "Assassin",
        advantages: ["High damage", "Good mobility", "Strong early game"],
        disadvantages: ["Weak teamfight", "Squishy", "Limited range"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },
    "Harley": {
        role: "Assassin",
        advantages: ["Burst damage", "Portal mechanic", "Good ganking"],
        disadvantages: ["Weak teamfight", "Squishy", "Skill dependent"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },
    "Lancelot": {
        role: "Assassin",
        advantages: ["High mobility", "Burst damage", "Good fights"],
        disadvantages: ["Weak early game", "Item dependent", "Skill dependent"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },
    "Helcurt": {
        role: "Assassin",
        advantages: ["High burst damage", "Shadow ability", "Good ganking"],
        disadvantages: ["Weak teamfight", "Squishy", "Limited range"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },
    "Gusion": {
        role: "Assassin",
        advantages: ["High burst damage", "Portal reset", "Great mobility"],
        disadvantages: ["Weak teamfight", "Squishy", "Skill dependent"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },
    "Selena": {
        role: "Assassin",
        advantages: ["High burst damage", "Fast-switching", "Good ganking"],
        disadvantages: ["Weak teamfight", "Squishy", "Item dependent"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },
    "Hanzo": {
        role: "Assassin",
        advantages: ["High burst damage", "Spirit shifting", "Good ganking"],
        disadvantages: ["Weak teamfight", "Squishy", "Skill dependent"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },
    "Ling": {
        role: "Assassin",
        advantages: ["High mobility", "Wall climbing", "Good ganking"],
        disadvantages: ["Weak teamfight", "Squishy", "Limited range"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },
    "Aamon": {
        role: "Assassin",
        advantages: ["High burst damage", "Mobile", "Good ganking"],
        disadvantages: ["Weak teamfight", "Squishy", "Skill dependent"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },
    "Nolan": {
        role: "Assassin",
        advantages: ["High burst damage", "Mobile", "Good ganking"],
        disadvantages: ["Weak teamfight", "Squishy", "Item dependent"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },
    "Joy": {
        role: "Assassin",
        advantages: ["High burst damage", "Mobile", "Good ganking"],
        disadvantages: ["Weak teamfight", "Squishy", "Skill dependent"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },
    "Arlott": {
        role: "Assassin",
        advantages: ["High burst damage", "Mobile", "Good ganking"],
        disadvantages: ["Weak teamfight", "Squishy", "Item dependent"],
        counterPicks: ["Franco", "Tigreal", "Lolita"]
    },

    // MAGES
    "Alice": {
        role: "Mage",
        advantages: ["High damage", "Healing", "Crowd control"],
        disadvantages: ["Low mobility", "Weak early game", "Item dependent"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Nana": {
        role: "Mage",
        advantages: ["Crowd control", "Cat mechanic", "Good support"],
        disadvantages: ["Low damage", "Weak in fights", "Skill dependent"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Eudora": {
        role: "Mage",
        advantages: ["Good burst damage", "Crowd control", "Strong in lane"],
        disadvantages: ["Low mobility", "Weak teamfight", "Item dependent"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Gord": {
        role: "Mage",
        advantages: ["High burst damage", "Good range", "Strong lategame"],
        disadvantages: ["Low mobility", "Weak early game", "Squishy"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Kagura": {
        role: "Mage",
        advantages: ["High burst damage", "Umbrella mechanic", "Good mobility"],
        disadvantages: ["Skill dependent", "Weak early game", "Item dependent"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Cyclops": {
        role: "Mage",
        advantages: ["High burst damage", "Good range", "High damage output"],
        disadvantages: ["Low mobility", "Weak early game", "Cooldown dependent"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Aurora": {
        role: "Mage",
        advantages: ["Crowd control", "Freeze ability", "Tanky mage"],
        disadvantages: ["Low damage", "Weak teamfight", "Limited mobility"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Vexana": {
        role: "Mage",
        advantages: ["Clone mechanic", "Good damage", "Crowd control"],
        disadvantages: ["Weak early game", "Item dependent", "Skill dependent"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Odette": {
        role: "Mage",
        advantages: ["Area damage", "Good range", "Strong teamfight"],
        disadvantages: ["Low mobility", "Weak early game", "Squishy"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Zhask": {
        role: "Mage",
        advantages: ["Area damage", "Good sustain", "Spore mechanic"],
        disadvantages: ["Weak early game", "Limited mobility", "Item dependent"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Pharsa": {
        role: "Mage",
        advantages: ["High burst damage", "Flying ability", "Good range"],
        disadvantages: ["Weak early game", "Item dependent", "Squishy"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Valir": {
        role: "Mage",
        advantages: ["Crowd control", "Good damage", "Burn ability"],
        disadvantages: ["Weak early game", "Low mobility", "Item dependent"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Chang'e": {
        role: "Mage",
        advantages: ["Crowd control", "Healing", "Good range"],
        disadvantages: ["Low damage", "Weak teamfight", "Item dependent"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Vale": {
        role: "Mage",
        advantages: ["High burst damage", "Good range", "Wind mechanic"],
        disadvantages: ["Weak early game", "Limited mobility", "Item dependent"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Lunox": {
        role: "Mage",
        advantages: ["Versatile damage", "Good mobility", "Dimension skill"],
        disadvantages: ["Weak early game", "Item dependent", "Skill dependent"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Harith": {
        role: "Mage",
        advantages: ["High damage", "Good mobility", "Cooldown reduction"],
        disadvantages: ["Weak early game", "Item dependent", "Skill dependent"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Kadita": {
        role: "Mage",
        advantages: ["High burst damage", "Swim mechanic", "Area damage"],
        disadvantages: ["Weak early game", "Limited mobility", "Item dependent"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Lylia": {
        role: "Mage",
        advantages: ["High burst damage", "Debuff ability", "Good damage"],
        disadvantages: ["Weak early game", "Item dependent", "Skill dependent"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Cecilion": {
        role: "Mage",
        advantages: ["High lategame damage", "Scaling", "Good range"],
        disadvantages: ["Weak early game", "Item dependent", "Squishy"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Luo Yi": {
        role: "Mage",
        advantages: ["Crowd control", "Good damage", "Yin-yang mechanic"],
        disadvantages: ["Weak early game", "Complex mechanics", "Item dependent"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Yve": {
        role: "Mage",
        advantages: ["High burst damage", "Area control", "Good range"],
        disadvantages: ["Weak early game", "Item dependent", "Squishy"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Valentina": {
        role: "Mage",
        advantages: ["High burst damage", "Copy skill mechanic", "Good damage"],
        disadvantages: ["Weak early game", "Item dependent", "Complex mechanics"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Xavier": {
        role: "Mage",
        advantages: ["High burst damage", "Area damage", "Good range"],
        disadvantages: ["Weak early game", "Item dependent", "Squishy"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Novaria": {
        role: "Mage",
        advantages: ["High burst damage", "Good mobility", "Chain damage"],
        disadvantages: ["Weak early game", "Item dependent", "Skill dependent"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Zhuxin": {
        role: "Mage",
        advantages: ["High burst damage", "Area control", "Good range"],
        disadvantages: ["Weak early game", "Item dependent", "Squishy"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },
    "Zetian": {
        role: "Mage",
        advantages: ["High burst damage", "Good damage", "Area control"],
        disadvantages: ["Weak early game", "Item dependent", "Squishy"],
        counterPicks: ["Layla", "Miya", "Chou"]
    },

    // MARKSMEN
    "Miya": {
        role: "Marksman",
        advantages: ["Fast attacking", "Good crowd control", "Decent damage"],
        disadvantages: ["Weak early game", "Low mobility", "Squishy"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Bruno": {
        role: "Marksman",
        advantages: ["Good damage", "Decent range", "Mobile"],
        disadvantages: ["Weak early game", "Item dependent", "Limited crowd control"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Clint": {
        role: "Marksman",
        advantages: ["Good burst damage", "Stun ability", "Decent range"],
        disadvantages: ["Weak early game", "Item dependent", "Low mobility"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Layla": {
        role: "Marksman",
        advantages: ["Long range", "Good damage output", "Decent lategame"],
        disadvantages: ["Very low mobility", "Squishy", "Weak early game"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Moskov": {
        role: "Marksman",
        advantages: ["Good damage", "Spear mechanic", "Decent range"],
        disadvantages: ["Weak early game", "Item dependent", "Limited crowd control"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Karrie": {
        role: "Marksman",
        advantages: ["Good damage", "Decent mobility", "Good against tanks"],
        disadvantages: ["Weak early game", "Item dependent", "Squishy"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Irithel": {
        role: "Marksman",
        advantages: ["Good damage", "Mobility on hit", "Mount mechanic"],
        disadvantages: ["Weak early game", "Item dependent", "Skill dependent"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Lesley": {
        role: "Marksman",
        advantages: ["High burst damage", "Stealth", "Good range"],
        disadvantages: ["Weak early game", "Item dependent", "Limited crowd control"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Hanabi": {
        role: "Marksman",
        advantages: ["Good damage", "Decent range", "Chain attack"],
        disadvantages: ["Weak early game", "Item dependent", "Low mobility"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Claude": {
        role: "Marksman",
        advantages: ["Area damage", "Good range", "Dexter mechanic"],
        disadvantages: ["Weak early game", "Item dependent", "Limited crowd control"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Kimmy": {
        role: "Marksman",
        advantages: ["Fast attack speed", "Good range", "Decent damage"],
        disadvantages: ["Weak early game", "Item dependent", "Squishy"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Granger": {
        role: "Marksman",
        advantages: ["High burst damage", "Good range", "Strong lategame"],
        disadvantages: ["Weak early game", "Item dependent", "Low mobility"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Wanwan": {
        role: "Marksman",
        advantages: ["Good damage", "Decent mobility", "Passive evasion"],
        disadvantages: ["Weak early game", "Item dependent", "Skill dependent"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Popol & Kupa": {
        role: "Marksman",
        advantages: ["Area control", "Decent range", "Pet mechanic"],
        disadvantages: ["Weak early game", "Item dependent", "Complex mechanics"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Brody": {
        role: "Marksman",
        advantages: ["Good burst damage", "Marksmanship skills", "Decent range"],
        disadvantages: ["Weak early game", "Item dependent", "Limited crowd control"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Beatrix": {
        role: "Marksman",
        advantages: ["Weapon switching", "Good damage", "Versatile"],
        disadvantages: ["Weak early game", "Complex mechanics", "Item dependent"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Natan": {
        role: "Marksman",
        advantages: ["Good damage", "Decent range", "Decent lategame"],
        disadvantages: ["Weak early game", "Item dependent", "Low mobility"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Melissa": {
        role: "Marksman",
        advantages: ["Good damage", "Decent range", "Bouncing attack"],
        disadvantages: ["Weak early game", "Item dependent", "Limited crowd control"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Ixia": {
        role: "Marksman",
        advantages: ["Fast attack speed", "Good damage", "Decent range"],
        disadvantages: ["Weak early game", "Item dependent", "Squishy"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },
    "Obsidia": {
        role: "Marksman",
        advantages: ["Good damage", "Decent range", "Decent lategame"],
        disadvantages: ["Weak early game", "Item dependent", "Low mobility"],
        counterPicks: ["Franco", "Lancelot", "Saber"]
    },

    // SUPPORTS
    "Rafaela": {
        role: "Support",
        advantages: ["Healing", "Good crowd control", "Damage boost"],
        disadvantages: ["Low damage", "Weak in fights", "Item dependent"],
        counterPicks: ["Layla", "Gusion", "Lancelot"]
    },
    "Estes": {
        role: "Support",
        advantages: ["Healing", "Good sustain", "Buff ability"],
        disadvantages: ["Low damage", "Weak in fights", "Item dependent"],
        counterPicks: ["Layla", "Gusion", "Lancelot"]
    },
    "Diggie": {
        role: "Support",
        advantages: ["Crowd control immunity", "Good support", "Pet mechanic"],
        disadvantages: ["Low damage", "Weak in fights", "Item dependent"],
        counterPicks: ["Layla", "Gusion", "Lancelot"]
    },
    "Angela": {
        role: "Support",
        advantages: ["Healing", "Shield ability", "Attached mechanic"],
        disadvantages: ["Low damage", "Weak in fights", "Item dependent"],
        counterPicks: ["Layla", "Gusion", "Lancelot"]
    },
    "Faramis": {
        role: "Support",
        advantages: ["Crowd control", "Immunity skill", "Good support"],
        disadvantages: ["Low damage", "Weak in fights", "Item dependent"],
        counterPicks: ["Layla", "Gusion", "Lancelot"]
    },
    "Carmilla": {
        role: "Support",
        advantages: ["Crowd control", "Strong support", "Decent tankiness"],
        disadvantages: ["Low damage", "Weak in fights", "Item dependent"],
        counterPicks: ["Layla", "Gusion", "Lancelot"]
    },
    "Mathilda": {
        role: "Support",
        advantages: ["Crowd control", "Good mobility", "Decent damage"],
        disadvantages: ["Low damage", "Weak in fights", "Item dependent"],
        counterPicks: ["Layla", "Gusion", "Lancelot"]
    },
    "Floryn": {
        role: "Support",
        advantages: ["Healing", "Gold generator", "Good support"],
        disadvantages: ["Low damage", "Weak in fights", "Item dependent"],
        counterPicks: ["Layla", "Gusion", "Lancelot"]
    },
    "Chip": {
        role: "Support",
        advantages: ["Healing", "Shield ability", "Good support"],
        disadvantages: ["Low damage", "Weak in fights", "Item dependent"],
        counterPicks: ["Layla", "Gusion", "Lancelot"]
    },
    "Kalea": {
        role: "Support",
        advantages: ["Healing", "Crowd control", "Good support"],
        disadvantages: ["Low damage", "Weak in fights", "Item dependent"],
        counterPicks: ["Layla", "Gusion", "Lancelot"]
    }
     

    
};

function pickHero(side) {
    const inputId = side === "blue" ? "blueInput" : "redInput";
    const draftId = side === "blue" ? "blueDraft" : "redDraft";
    const advId = side === "blue" ? "blueAdv" : "redAdv";
    const disId = side === "blue" ? "blueDis" : "redDis";
    const counterId = side === "blue" ? "blueCounter" : "redCounter";

    const hero = document.getElementById(inputId).value;
    if (hero === "") return;

    // Add hero to draft list
    const draftBox = document.getElementById(draftId);
    draftBox.innerHTML += `<span class="hero-tag">${hero}</span>`;

    // Display hero analysis
    if (heroData[hero]) {
        const data = heroData[hero];
        document.getElementById(advId).innerText = data.advantages.join(" • ");
        document.getElementById(disId).innerText = data.disadvantages.join(" • ");
        document.getElementById(counterId).innerText = data.counterPicks.join(", ");
    }

    document.getElementById(inputId).value = "";
}