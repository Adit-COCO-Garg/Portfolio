  
export default function sketch2(p) {
  // By Roni Kaufman

  let kMax; // maximal value for the parameter "k" of the blobs
  let step = 0.01; // difference in time between two consecutive blobs
  let n = 100; // total number of blobs
  let radius = 0; // radius of the base circle
  let inter = 0.05; // difference of base radii of two consecutive blobs
  let maxNoise = 500; // maximal value for the parameter "noisiness" for the blobs

  //let noiseProg = (x) => (x);

  p.setup = function () {
    p.createCanvas(1300, 600);
    p.colorMode(p.HSB, 1);
    p.angleMode(p.DEGREES);
    p.noFill();
    //noLoop();
    kMax = p.random(0.6, 1.0);
   p. noStroke();
  }

  p.draw = function() {
    p.background(0.6, 0.75, 0.25);
    let t = p.frameCount/100;
    for (let i = n; i > 0; i--) {
      let alpha = 1 - (i / n);
      p.fill((alpha/9 + 0.75)%1, 1, 0.8, alpha);
      let size = radius + i * inter;
      let k = kMax * p.sqrt(i/n);
      let noisiness = maxNoise * (i / n);
      blob(size, p.width * .75, p.height * .5, k, t - i * step, noisiness);
    }
  }

  // Creates and draws a blob
  // size is the radius (before noise) of the base circle
  // (xCenter, yCenter) is the position of the center of the blob
  // k is the tightness of the blob (0 = perfect circle, higher = more spiky)
  // t is the time
  // noisiness is the magnitude of the noise (i.e. how far it streches out)
  function blob(size, xCenter, yCenter, k, t, noisiness) {
    p.beginShape();
    let angleStep = 360 / 10;
    for (let theta = 0; theta <= 360 + 2 * angleStep; theta += angleStep) {
      let r1, r2;
     
      // if (theta < p.PI / 2) {
      //   r1 = p.cos(theta);
      //   r2 = 1;
      // } else if (theta < p.PI) {
      //   r1 = 0;
      //   r2 = p.sin(theta);
      // } else if (theta < 3 * p.PI / 2) {
      //   r1 = p.sin(theta);
      //   r2 = 0;
      // } else {
      //   r1 = 1;
      //   r2 = p.cos(theta);
      // }
     
      r1 = p.cos(theta)+1;
      r2 = p.sin(theta)+1; // +1 because it has to be positive for the function noise
      let r = size + p.noise(k * r1,  k * r2, t) * noisiness;
      let x = xCenter + r * p.cos(theta);
      let y = yCenter + r * p.sin(theta);
      p.curveVertex(x, y);
    }
    p.endShape();
  }
}