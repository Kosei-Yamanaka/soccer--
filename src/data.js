export const SAMPLE_PLAYERS = [

//アーセナル  
  // GK
  {
    name: "David Raya", league: "Premier League", positions: ["GK"],
    handling: 87, distribution: 85, aerial: 83,
    speed: 75, passing: 79, defending: 20, stamina: 65, press: 62, dribble: 34, offball: 46, finishing: 10
  },
  {
    name: "Kepa Arrizabalaga", league: "Premier League", positions: ["GK"],
    handling: 85, distribution: 84, aerial: 80,
    speed: 60, passing: 76, defending: 18, stamina: 64, press: 60, dribble: 32, offball: 44, finishing: 8
  },
  {
    name: "Tommy Setford", league: "Premier League", positions: ["GK"],
    handling: 73, distribution: 71, aerial: 75,
    speed: 54, passing: 69, defending: 18, stamina: 61, press: 56, dribble: 28, offball: 38, finishing: 8
  },
  {
    name: "Alexei Rojas", league: "Premier League", positions: ["GK"],
    handling: 71, distribution: 69, aerial: 73,
    speed: 55, passing: 67, defending: 18, stamina: 60, press: 55, dribble: 26, offball: 36, finishing: 8
  },

  // DF
  {
    name: "William Saliba", league: "Premier League", positions: ["CB"],
    defending: 91, aerial: 87, speed: 79,
    passing: 76, stamina: 80, press: 82, dribble: 61, offball: 72, handling: 30, distribution: 78, finishing: 22
  },
  {
    name: "Cristian Mosquera", league: "Premier League", positions: ["RSB","CB"],
    defending: 84, aerial: 82, speed: 76,
    passing: 70, stamina: 77, press: 76, dribble: 56, offball: 66, handling: 30, distribution: 72, finishing: 20
  },
  {
    name: "Ben White", league: "Premier League", positions: ["RSB","CB"],
    speed: 79, defending: 81, stamina: 86,
    passing: 77, aerial: 75, press: 83, dribble: 69, offball: 73, handling: 20, distribution: 71, finishing: 20
  },
  {
    name: "Piero Hincapie", league: "Premier League", positions: ["CB","LSB"],
    speed: 77, defending: 83, stamina: 81,
    passing: 73, aerial: 76, press: 79, dribble: 65, offball: 69, handling: 20, distribution: 73, finishing: 20
  },
  {
    name: "Gabriel Magalhaes", league: "Premier League", positions: ["CB"],
    defending: 88, aerial: 88, speed: 73,
    passing: 71, stamina: 81, press: 79, dribble: 58, offball: 69, handling: 28, distribution: 73, finishing: 20
  },
  {
    name: "Jurrien Timber", league: "Premier League", positions: ["RSB","CB","LSB"],
    speed: 80, defending: 81, stamina: 83,
    passing: 76, aerial: 73, press: 85, dribble: 69, offball: 71, handling: 25, distribution: 75, finishing: 20
  },
  {
    name: "Riccardo Calafiori", league: "Premier League", positions: ["LSB","CB"],
    speed: 78, defending: 83, stamina: 84,
    passing: 79, aerial: 76, press: 81, dribble: 71, offball: 73, handling: 20, distribution: 77, finishing: 22
  },
  {
    name: "Joshua Nichols", league: "Premier League", positions: ["CB"],
    defending: 71, aerial: 73, speed: 70,
    passing: 65, stamina: 73, press: 69, dribble: 55, offball: 61, handling: 20, distribution: 69, finishing: 18
  },
  {
    name: "Marley Samon", league: "Premier League", positions: ["RSB"],
    speed: 75, defending: 69, stamina: 79,
    passing: 69, aerial: 63, press: 71, dribble: 65, offball: 69, handling: 20, distribution: 67, finishing: 20
  },

  // MF
  {
    name: "Martin Odegaard", league: "Premier League", positions: ["AMF","CMF","RW"],
    passing: 92, dribble: 87, offball: 89,
    speed: 75, stamina: 83, press: 71, defending: 60, aerial: 56, handling: 10, distribution: 91, finishing: 76
  },
  {
    name: "Christian Norgaard", league: "Premier League", positions: ["DMF","CMF"],
    passing: 77, defending: 83, stamina: 87,
    speed: 70, press: 83, offball: 71, dribble: 66, aerial: 75, handling: 10, distribution: 77, finishing: 52
  },
  {
    name: "Mikel Merino", league: "Premier League", positions: ["CMF","DMF","CF"],
    passing: 85, defending: 79, stamina: 87,
    speed: 75, press: 81, offball: 75, dribble: 79, aerial: 77, handling: 10, distribution: 83, finishing: 69
  },
  {
    name: "Kai Havertz", league: "Premier League", positions: ["AMF","CF"],
    passing: 81, dribble: 81, offball: 85,
    speed: 77, stamina: 85, press: 79, defending: 68, aerial: 83, handling: 10, distribution: 79, finishing: 79
  },
  {
    name: "Martin Zubimendi", league: "Premier League", positions: ["DMF","CMF"],
    passing: 83, defending: 85, stamina: 86,
    speed: 72, press: 83, offball: 75, dribble: 72, aerial: 75, handling: 10, distribution: 83, finishing: 60
  },
  {
    name: "Louis Cozier", league: "Premier League", positions: ["CMF"],
    passing: 73, defending: 68, stamina: 80,
    speed: 74, press: 71, offball: 70, dribble: 74, aerial: 64, handling: 10, distribution: 71, finishing: 58
  },
  {
    name: "Declan Rice", league: "Premier League", positions: ["DMF","CMF"],
    passing: 79, defending: 89, stamina: 89,
    speed: 75, press: 87, offball: 75, dribble: 71, aerial: 81, handling: 10, distribution: 79, finishing: 59
  },
  {
    name: "Myles Lewis-Skelly", league: "Premier League", positions: ["LSB","CMF","DMF"],
    passing: 69, defending: 67, stamina: 81,
    speed: 79, press: 73, offball: 73, dribble: 73, aerial: 61, handling: 10, distribution: 71, finishing: 60
  },
  {
    name: "Max Dowty", league: "Premier League", positions: ["AMF","CMF","RW"],
    passing: 71, defending: 61, stamina: 79,
    speed: 81, press: 71, offball: 75, dribble: 76, aerial: 58, handling: 10, distribution: 71, finishing: 66
  },

  // FW
  {
    name: "Bukayo Saka", league: "Premier League", positions: ["RW","LW","LSB"],
    speed: 89, dribble: 91, finishing: 86,
    passing: 81, stamina: 89, press: 85, defending: 60, aerial: 58, offball: 93, handling: 10, distribution: 79
  },
  {
    name: "Gabriel Jesus", league: "Premier League", positions: ["CF","LW"],
    speed: 85, dribble: 86, finishing: 83,
    passing: 76, stamina: 82, press: 88, defending: 60, aerial: 64, offball: 86, handling: 10, distribution: 76
  },
  {
    name: "Eberechi Eze", league: "Premier League", positions: ["AMF","CMF","LW"],
    speed: 87, dribble: 91, finishing: 81,
    passing: 83, stamina: 83, press: 75, defending: 55, aerial: 60, offball: 85, handling: 10, distribution: 81
  },
  {
    name: "Gabriel Martinelli", league: "Premier League", positions: ["LW","RW"],
    speed: 92, dribble: 88, finishing: 83,
    passing: 75, stamina: 85, press: 81, defending: 56, aerial: 54, offball: 87, handling: 10, distribution: 71
  },
  {
    name: "Viktor Gyokeres", league: "Premier League", positions: ["CF"],
    speed: 84, dribble: 81, finishing: 88,
    passing: 71, stamina: 85, press: 83, defending: 58, aerial: 83, offball: 88, handling: 10, distribution: 73
  },
  {
    name: "Leandro Trossard", league: "Premier League", positions: ["LW","AMF","CF"],
    speed: 84, dribble: 86, finishing: 83,
    passing: 79, stamina: 82, press: 77, defending: 56, aerial: 54, offball: 84, handling: 10, distribution: 76
  },
  {
    name: "Chukwunonso Madueke", league: "Premier League", positions: ["RW","LW"],
    speed: 88, dribble: 90, finishing: 82,
    passing: 76, stamina: 81, press: 78, defending: 50, aerial: 56, offball: 84, handling: 10, distribution: 74
  },
  {
    name: "Ethan Nwaneri", league: "Premier League", positions: ["AMF","RW"],
    speed: 81, dribble: 85, finishing: 77,
    passing: 79, stamina: 78, press: 72, defending: 48, aerial: 52, offball: 81, handling: 10, distribution: 76
  },
  {
    name: "Andre Herriman Anu", league: "Premier League", positions: ["RW","CF"],
    speed: 83, dribble: 79, finishing: 78,
    passing: 69, stamina: 80, press: 74, defending: 50, aerial: 60, offball: 80, handling: 10, distribution: 70
  },

//ガンバ大阪
  // GK
  {
    name: "Masaaki Higashiguchi", league: "J1 League", positions: ["GK"],
    handling: 79, distribution: 68, aerial: 78,
    speed: 50, passing: 64, defending: 18, stamina: 61, press: 54, dribble: 28, offball: 38, finishing: 8
  },
  {
    name: "Rui Araki", league: "J1 League", positions: ["GK"],
    handling: 71, distribution: 64, aerial: 75,
    speed: 48, passing: 61, defending: 16, stamina: 60, press: 52, dribble: 26, offball: 36, finishing: 8
  },
  {
    name: "Jun Ichimori", league: "J1 League", positions: ["GK"],
    handling: 80, distribution: 69, aerial: 77,
    speed: 52, passing: 65, defending: 18, stamina: 61, press: 53, dribble: 28, offball: 38, finishing: 8
  },
  {
    name: "Aolin Zhang", league: "J1 League", positions: ["GK"],
    handling: 73, distribution: 66, aerial: 77,
    speed: 50, passing: 62, defending: 18, stamina: 60, press: 52, dribble: 26, offball: 36, finishing: 8
  },
  {
    name: "Yuma Nobata", league: "J1 League", positions: ["GK"],
    handling: 62, distribution: 60, aerial: 68,
    speed: 52, passing: 60, defending: 16, stamina: 58, press: 50, dribble: 26, offball: 34, finishing: 8
  },

  // DF
  {
    name: "Shota Fukuoka", league: "J1 League", positions: ["CB"],
    defending: 82, aerial: 80, speed: 72,
    passing: 66, stamina: 77, press: 75, dribble: 54, offball: 66, handling: 30, distribution: 68, finishing: 18
  },
  {
    name: "Riku Handa", league: "J1 League", positions: ["RSB","CB"],
    speed: 79, defending: 78, stamina: 85,
    passing: 71, aerial: 72, press: 78, dribble: 67, offball: 71, handling: 20, distribution: 69, finishing: 20
  },
  {
    name: "Keisuke Kurokawa", league: "J1 League", positions: ["LSB","LMF"],
    speed: 82, defending: 72, stamina: 86,
    passing: 72, aerial: 65, press: 74, dribble: 72, offball: 74, handling: 20, distribution: 70, finishing: 26
  },
  {
    name: "Genta Miura", league: "J1 League", positions: ["CB"],
    defending: 83, aerial: 84, speed: 70,
    passing: 68, stamina: 76, press: 75, dribble: 56, offball: 66, handling: 25, distribution: 70, finishing: 20
  },
  {
    name: "Takumu Kishi", league: "J1 League", positions: ["RSB","RW"],
    speed: 83, defending: 70, stamina: 83,
    passing: 70, aerial: 64, press: 73, dribble: 74, offball: 78, handling: 20, distribution: 68, finishing: 68
  },
  {
    name: "Shinnosuke Nakatani", league: "J1 League", positions: ["CB"],
    defending: 85, aerial: 84, speed: 72,
    passing: 70, stamina: 78, press: 76, dribble: 58, offball: 70, handling: 25, distribution: 72, finishing: 20
  },
  {
    name: "Ryo Hatsuse", league: "J1 League", positions: ["LSB","LWB"],
    speed: 76, defending: 72, stamina: 82,
    passing: 72, aerial: 68, press: 74, dribble: 70, offball: 72, handling: 20, distribution: 70, finishing: 24
  },
  {
    name: "Shogo Sasaki", league: "J1 League", positions: ["CB"],
    defending: 78, aerial: 78, speed: 70,
    passing: 66, stamina: 74, press: 72, dribble: 56, offball: 66, handling: 25, distribution: 68, finishing: 18
  },
  {
    name: "Yuya Yokoi", league: "J1 League", positions: ["CB"],
    defending: 67, aerial: 70, speed: 68,
    passing: 61, stamina: 70, press: 66, dribble: 54, offball: 60, handling: 25, distribution: 64, finishing: 16
  },

  // MF
  {
    name: "Takashi Kurata", league: "J1 League", positions: ["CMF","AMF"],
    passing: 79, defending: 68, stamina: 84,
    speed: 76, press: 80, offball: 79, dribble: 78, aerial: 60, handling: 10, distribution: 75, finishing: 70
  },
  {
    name: "Shuto Abe", league: "J1 League", positions: ["CMF","DMF"],
    passing: 74, defending: 76, stamina: 84,
    speed: 74, press: 80, offball: 72, dribble: 70, aerial: 64, handling: 10, distribution: 72, finishing: 60
  },
  {
    name: "Tokuma Suzuki", league: "J1 League", positions: ["DMF","CMF"],
    passing: 74, defending: 80, stamina: 86,
    speed: 70, press: 80, offball: 70, dribble: 66, aerial: 68, handling: 10, distribution: 72, finishing: 58
  },
  {
    name: "Rin Mito", league: "J1 League", positions: ["AMF","CMF"],
    passing: 76, defending: 68, stamina: 80,
    speed: 76, press: 74, offball: 76, dribble: 78, aerial: 62, handling: 10, distribution: 74, finishing: 64
  },
  {
    name: "Gaku Nawata", league: "J1 League", positions: ["AMF"],
    passing: 70, defending: 60, stamina: 74,
    speed: 78, press: 68, offball: 74, dribble: 78, aerial: 58, handling: 10, distribution: 70, finishing: 66
  },
  {
    name: "Kanshi Okunuki", league: "J1 League", positions: ["RMF","LMF"],
    passing: 72, defending: 66, stamina: 80,
    speed: 82, press: 74, offball: 78, dribble: 80, aerial: 62, handling: 10, distribution: 72, finishing: 68
  },
  {
    name: "Juan Alano", league: "J1 League", positions: ["AMF","RW"],
    passing: 74, defending: 64, stamina: 82,
    speed: 84, press: 76, offball: 80, dribble: 82, aerial: 60, handling: 10, distribution: 74, finishing: 70
  },
  {
    name: "Taisei Tono", league: "J1 League", positions: ["AMF","CMF"],
    passing: 65, defending: 60, stamina: 70,
    speed: 73, press: 66, offball: 68, dribble: 70, aerial: 58, handling: 10, distribution: 66, finishing: 60
  },
  {
    name: "Tenshou Yamamoto", league: "J1 League", positions: ["CMF"],
    passing: 63, defending: 58, stamina: 70,
    speed: 72, press: 64, offball: 68, dribble: 70, aerial: 56, handling: 10, distribution: 64, finishing: 58
  },

  // FW
  {
    name: "Takashi Usami", league: "J1 League", positions: ["CF","LW"],
    speed: 80, dribble: 82, finishing: 78,
    passing: 76, stamina: 80, press: 74, defending: 50, aerial: 60, offball: 84, handling: 10, distribution: 72
  },
  {
    name: "Ryotaro Meshino", league: "J1 League", positions: ["LW","AMF"],
    speed: 82, dribble: 84, finishing: 74,
    passing: 74, stamina: 78, press: 70, defending: 48, aerial: 56, offball: 80, handling: 10, distribution: 72
  },
  {
    name: "Daichi Hayashi", league: "J1 League", positions: ["CF"],
    speed: 82, dribble: 78, finishing: 80,
    passing: 68, stamina: 82, press: 76, defending: 54, aerial: 74, offball: 82, handling: 10, distribution: 68
  },
  {
    name: "Issam Jebali", league: "J1 League", positions: ["CF"],
    speed: 78, dribble: 80, finishing: 82,
    passing: 70, stamina: 80, press: 72, defending: 50, aerial: 80, offball: 80, handling: 10, distribution: 70
  },
  {
    name: "Ryoja Yamashita", league: "J1 League", positions: ["RW","CF"],
    speed: 86, dribble: 84, finishing: 78,
    passing: 70, stamina: 82, press: 76, defending: 52, aerial: 62, offball: 84, handling: 10, distribution: 70
  },
  {
    name: "Dennis Hummet", league: "J1 League", positions: ["CF"],
    speed: 78, dribble: 76, finishing: 80,
    passing: 66, stamina: 80, press: 72, defending: 50, aerial: 78, offball: 78, handling: 10, distribution: 68
  },
  {
    name: "Welton", league: "J1 League", positions: ["LW","CF"],
    speed: 86, dribble: 82, finishing: 80,
    passing: 70, stamina: 82, press: 76, defending: 48, aerial: 60, offball: 82, handling: 10, distribution: 70
  },
  {
    name: "Harumi Minamino", league: "J1 League", positions: ["LW","RW"],
    speed: 76, dribble: 78, finishing: 68,
    passing: 66, stamina: 74, press: 68, defending: 48, aerial: 56, offball: 74, handling: 10, distribution: 66
  },
  {
    name: "Makoto Mitoma (Youth)", league: "J1 League", positions: ["LW"],
    speed: 70, dribble: 74, finishing: 66,
    passing: 66, stamina: 72, press: 66, defending: 46, aerial: 52, offball: 70, handling: 10, distribution: 64
  },
  {
    name: "Tamaki Nakazumi", league: "J1 League", positions: ["CF"],
    speed: 71, dribble: 72, finishing: 69,
    passing: 64, stamina: 72, press: 66, defending: 48, aerial: 60, offball: 71, handling: 10, distribution: 64
  }
];