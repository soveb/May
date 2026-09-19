const BEATS = [0.372, 1.057, 1.741, 2.415, 3.088, 3.762, 4.435, 5.12, 5.793, 6.467, 7.117, 7.825, 8.499, 9.172, 9.834, 10.53, 11.204, 11.865, 12.539, 13.235, 13.909, 14.571, 15.244, 15.94, 16.614, 17.287, 17.949, 18.657, 19.319, 19.981, 20.654, 21.362, 22.024, 22.686, 23.359, 24.067, 24.741, 25.403, 26.076, 26.773, 27.446, 28.119, 28.781, 29.478, 30.14, 30.778, 31.486, 32.183, 32.856, 33.53, 34.145, 34.9, 35.55, 36.177, 36.897, 37.593, 38.266, 38.917, 39.602, 40.31, 40.972, 41.645, 42.318, 43.015, 43.688, 44.35, 45.023, 45.72, 46.382, 47.067, 47.729, 48.425, 49.099, 49.772, 50.399, 51.13, 51.78, 52.465, 53.139, 53.847, 54.52, 55.182, 55.844, 56.541, 57.214, 57.887, 58.549, 59.269, 59.931, 60.604, 61.254, 61.962, 62.624, 63.298, 63.983, 64.668, 65.341, 66.003, 66.676, 67.373, 68.046, 68.708, 69.381, 70.078, 70.751, 71.425, 72.086, 72.783, 73.468, 74.13, 74.791, 75.488, 76.173, 76.846, 77.497, 78.205, 78.878, 79.54, 80.202, 80.91, 81.572, 82.245, 82.918, 83.592, 84.277, 84.95, 85.624, 86.309, 86.994, 87.655, 88.317, 89.014, 89.687, 90.337, 91.011, 91.707, 92.404, 93.077, 93.727, 94.424, 95.086, 95.771, 96.432, 97.129, 97.814, 98.476, 99.149, 99.834, 100.531, 101.181, 101.82, 102.563, 103.236, 103.909, 104.571, 105.279, 105.941, 106.614, 107.276, 107.973, 108.646, 109.331, 109.993, 110.69, 111.34, 112.013, 112.686, 113.395, 114.056, 114.718, 115.403, 116.1, 116.762, 117.447, 118.108, 118.805, 119.478, 120.14, 120.802, 121.51, 122.183, 122.857, 123.519, 124.215, 124.889, 125.562, 126.235, 126.932, 127.582, 128.244, 128.929, 129.625, 130.299, 130.972, 131.646, 132.331, 132.992, 133.7, 134.304, 135.036, 135.732, 136.406, 137.033, 137.752, 138.437, 139.134, 139.784, 140.469, 141.142, 141.793, 142.478, 143.151, 143.824, 144.509, 145.136, 145.879, 146.541, 147.238, 147.9, 148.561, 149.223, 149.862, 150.593, 151.232, 151.835, 152.578, 153.298, 154.006, 154.68, 155.353, 156.003, 156.7, 157.35, 158.035, 158.708, 159.393, 160.067, 160.74, 161.297, 162.099, 162.783, 163.445, 164.107, 164.804, 165.489, 166.162, 166.824, 167.497, 168.194, 168.856, 169.529, 170.214, 170.899, 171.572, 172.234, 172.931, 173.604, 174.289, 174.951, 175.636, 176.298, 176.971, 177.644, 178.352, 179.026, 179.699, 180.373, 181.058, 181.731, 182.404, 183.055, 183.751, 184.436, 185.075, 185.783, 186.468, 187.13, 187.815, 188.476, 189.173, 189.846, 190.531, 191.193, 191.878, 192.551, 193.225, 193.887, 194.572, 195.268, 195.93, 196.615, 197.3, 197.973, 198.635, 199.297, 199.993, 200.69, 201.34, 202.002, 202.699, 203.384, 204.022, 204.719, 205.427, 206.1, 206.762, 207.424, 208.12, 208.794, 209.467, 210.129, 210.826, 211.499, 212.149, 212.799, 213.531, 214.204, 214.877, 215.551, 216.236, 216.921, 217.583, 218.256, 218.953, 219.626, 220.299, 220.973, 221.658, 222.331, 222.993, 223.608, 224.363, 225.025, 225.686, 226.371, 227.08, 227.741, 228.415];
const CUES = [[0.0, "pra você, Stefani ♡"], [12.0, "eu devia ter te mandado isso bem antes"], [31.5, "mas talvez tenha sido melhor guardar um pouquinho"], [55.0, "porque toda vez que essa toca eu lembro de você"], [82.0, "não por alguma explicação bonita"], [104.0, "só porque combina com o jeito que eu sinto quando penso em nós"], [130.0, "então deixa ela tocar"], [153.5, "sem pensar demais"], [176.5, "essa parte sempre fica mais bonita"], [198.0, "e eu ainda escolheria te dedicar ela"], [219.0, "essa me lembra você ♡"]];

const audio = document.getElementById('audio');
const intro = document.getElementById('intro');
const experience = document.getElementById('experience');
const startBtn = document.getElementById('startBtn');
const soundBtn = document.getElementById('soundBtn');
const soundIcon = document.getElementById('soundIcon');
const stage = document.getElementById('stage');
const cover = document.getElementById('cover');
const message = document.getElementById('message');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const visualizer = document.getElementById('visualizer');
const finale = document.getElementById('finale');
const replayBtn = document.getElementById('replayBtn');
const floatingWords = [...document.querySelectorAll('.floating-words span')];

let audioCtx, analyser, sourceNode, dataArray;
let started = false;
let nextBeat = 0;
let lastCue = -1;
let rafId = 0;

function formatTime(sec) {
  if (!Number.isFinite(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function initAudioGraph() {
  if (audioCtx) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  audioCtx = new AC();
  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 256;
  analyser.smoothingTimeConstant = .84;
  dataArray = new Uint8Array(analyser.frequencyBinCount);
  sourceNode = audioCtx.createMediaElementSource(audio);
  sourceNode.connect(analyser);
  analyser.connect(audioCtx.destination);
}

async function startExperience() {
  try {
    initAudioGraph();
    if (audioCtx?.state === 'suspended') await audioCtx.resume();
    intro.classList.add('is-hidden');
    experience.classList.add('is-active');
    experience.setAttribute('aria-hidden', 'false');
    started = true;
    finale.classList.remove('is-active');
    finale.setAttribute('aria-hidden', 'true');
    nextBeat = 0;
    lastCue = -1;
    audio.currentTime = 0;
    await audio.play();
    soundIcon.textContent = 'Ⅱ';
    cancelAnimationFrame(rafId);
    tick();
  } catch (err) {
    console.error(err);
    startBtn.querySelector('span').textContent = 'tocar música';
  }
}

startBtn.addEventListener('click', startExperience);
replayBtn.addEventListener('click', startExperience);

soundBtn.addEventListener('click', async () => {
  if (audio.paused) {
    if (audioCtx?.state === 'suspended') await audioCtx.resume();
    await audio.play();
    soundIcon.textContent = 'Ⅱ';
    tick();
  } else {
    audio.pause();
    soundIcon.textContent = '▶';
  }
});

function setCue(index) {
  if (index === lastCue || !CUES[index]) return;
  lastCue = index;
  message.classList.remove('show');
  setTimeout(() => {
    message.textContent = CUES[index][1];
    message.classList.add('show');
  }, 220);
}

function cueForTime(t) {
  let index = 0;
  for (let i = 0; i < CUES.length; i++) {
    if (t >= CUES[i][0]) index = i;
    else break;
  }
  return index;
}

function fireBeat() {
  stage.classList.remove('beat');
  void stage.offsetWidth;
  stage.classList.add('beat');
  setTimeout(() => stage.classList.remove('beat'), 340);
}

function syncBeats(t) {
  while (nextBeat < BEATS.length && t >= BEATS[nextBeat] - .035) {
    fireBeat();
    nextBeat++;
  }
  while (nextBeat > 0 && t < BEATS[nextBeat - 1] - .4) nextBeat--;
}

function audioEnergy() {
  if (!analyser || !dataArray) return { bass:0, mid:0, high:0, avg:0 };
  analyser.getByteFrequencyData(dataArray);
  const n = dataArray.length;
  const avgRange = (a,b) => {
    let sum=0, count=0;
    for(let i=Math.floor(n*a); i<Math.floor(n*b); i++) { sum += dataArray[i]; count++; }
    return count ? (sum/count)/255 : 0;
  };
  const bass = avgRange(0,.16);
  const mid = avgRange(.16,.55);
  const high = avgRange(.55,1);
  return { bass, mid, high, avg:(bass+mid+high)/3 };
}

const vctx = visualizer.getContext('2d');
function resizeCanvas(canvas, ctx) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const rect = canvas.getBoundingClientRect();
  const w = Math.max(1, Math.floor(rect.width*dpr));
  const h = Math.max(1, Math.floor(rect.height*dpr));
  if (canvas.width !== w || canvas.height !== h) { canvas.width=w; canvas.height=h; ctx.setTransform(dpr,0,0,dpr,0,0); }
}

function drawVisualizer(energy) {
  resizeCanvas(visualizer, vctx);
  const w = visualizer.getBoundingClientRect().width;
  const h = visualizer.getBoundingClientRect().height;
  vctx.clearRect(0,0,w,h);
  const bars = 42;
  const gap = 4;
  const bw = (w - gap*(bars-1))/bars;
  const grad = vctx.createLinearGradient(0,0,w,0);
  grad.addColorStop(0,'rgba(185,168,255,.58)');
  grad.addColorStop(1,'rgba(242,183,201,.8)');
  vctx.fillStyle = grad;
  for (let i=0;i<bars;i++) {
    const idx = analyser ? Math.floor((i/bars)*dataArray.length*.72) : 0;
    const raw = analyser ? dataArray[idx]/255 : .08 + Math.sin(Date.now()/500+i)*.02;
    const shaped = Math.pow(raw, 1.25);
    const bh = Math.max(2, shaped*h*.76);
    const x=i*(bw+gap), y=(h-bh)/2;
    const r=Math.min(bw/2,3);
    vctx.beginPath();
    if (vctx.roundRect) vctx.roundRect(x,y,bw,bh,r); else vctx.rect(x,y,bw,bh);
    vctx.fill();
  }
}

function tick() {
  if (!started) return;
  const t = audio.currentTime || 0;
  const d = audio.duration || 236.98;
  const energy = audioEnergy();

  progress.style.width = `${Math.min(100, (t/d)*100)}%`;
  currentTimeEl.textContent = formatTime(t);
  durationEl.textContent = formatTime(d);
  setCue(cueForTime(t));
  syncBeats(t);

  const scale = 1 + energy.bass * .055;
  cover.style.transform = `scale(${scale.toFixed(4)}) rotate(${((t*.22)%2 - 1).toFixed(2)}deg)`;
  stage.style.setProperty('--mx', `${50 + Math.sin(t*.17)*18}%`);
  stage.style.setProperty('--my', `${46 + Math.cos(t*.13)*16}%`);
  document.querySelector('.halo-a').style.transform = `scale(${1 + energy.bass*.28})`;
  document.querySelector('.halo-b').style.transform = `scale(${1 + energy.mid*.24})`;

  floatingWords.forEach((el,i) => {
    const x = Math.sin(t*.12+i)*6*energy.avg;
    const y = Math.cos(t*.10+i*.7)*8*energy.avg;
    el.style.translate = `${x}px ${y}px`;
    el.style.opacity = (.35 + energy.avg*.7).toFixed(2);
  });

  drawVisualizer(energy);
  if (!audio.paused && !audio.ended) rafId = requestAnimationFrame(tick);
}

audio.addEventListener('loadedmetadata', () => durationEl.textContent = formatTime(audio.duration));
audio.addEventListener('seeked', () => {
  nextBeat = BEATS.findIndex(b => b >= audio.currentTime);
  if (nextBeat < 0) nextBeat = BEATS.length;
  lastCue = -1;
});
audio.addEventListener('ended', () => {
  soundIcon.textContent = '▶';
  setTimeout(() => {
    finale.classList.add('is-active');
    finale.setAttribute('aria-hidden', 'false');
  }, 700);
});

// plano de fundo vivo, mas discreto
const stars = document.getElementById('stars');
const sctx = stars.getContext('2d');
let starField=[];
function resetStars() {
  const dpr=Math.min(devicePixelRatio||1,2);
  stars.width=innerWidth*dpr; stars.height=innerHeight*dpr;
  stars.style.width=innerWidth+'px'; stars.style.height=innerHeight+'px';
  sctx.setTransform(dpr,0,0,dpr,0,0);
  const count=Math.min(90, Math.floor(innerWidth*innerHeight/11000));
  starField=Array.from({length:count},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:.35+Math.random()*1.25,a:.10+Math.random()*.36,s:.08+Math.random()*.28}));
}
function animateStars() {
  sctx.clearRect(0,0,innerWidth,innerHeight);
  const t=performance.now()/1000;
  starField.forEach((p,i)=>{
    const a=p.a*(.72+.28*Math.sin(t*p.s+i));
    sctx.fillStyle=`rgba(255,245,250,${Math.max(.03,a)})`;
    sctx.beginPath(); sctx.arc(p.x,p.y,p.r,0,Math.PI*2); sctx.fill();
  });
  requestAnimationFrame(animateStars);
}
window.addEventListener('resize', resetStars);
window.addEventListener('pointermove', (e)=>{
  experience.style.setProperty('--mx', `${(e.clientX/innerWidth)*100}%`);
  experience.style.setProperty('--my', `${(e.clientY/innerHeight)*100}%`);
}, {passive:true});
resetStars(); animateStars();
message.classList.add('show');
