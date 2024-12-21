export default function sketch1(p){
	// const Pallet = createCols("https://coolors.co/007f5f-55a630-aacc00-d4d700-eeef20-ffff3f");
	const Pallet = createCols("https://coolors.co/998fc7-42033d-680e4b-7c238c-f75590");
	// const Pallet = createCols("https://coolors.co/156064-00c49a-f8e16c-ffc2b4-fb8f67");
	let cols = [];
	let gra;

	p.setup = function ()  {
		p.createCanvas(1288, 600);
		p.background(100);
		
		for(let i = 0; i < Pallet.length; i++){
			cols[i] = p.color(Pallet[i]);
		}
		
		//gra
		gra = p.createGraphics(p.width, p.height);
		gra.noStroke();
		for (let i = 0; i < 300000; i++) {
			let x = p.random(p.width);
			let y = p.random(p.height);
			let s = p.noise(x*0.01, y*0.01)*p.width*0.002;
			gra.fill(255,10);
			gra.rect(x, y, s, s);
		} 
		
	}

	p.draw = function () {
		p.background(cols[0]);
		
		let angleStep = p.TAU/20;
		let baseRadius = p.width*0.2;
		let noiseScale = 1;
		let hei = p.height*0.5;
		let strokeW = baseRadius*0.15;
		p.noFill();
		p.strokeWeight(strokeW);
		p.push();
		p.translate(p.width/2,p.height*0.55);
		
		for(let yoff = hei/2; yoff >= -hei/2; yoff-=strokeW/5)
		{
			let colorRatio = p.map(yoff,hei/2,-hei/2,0,cols.length-1);
			let coli = p.int(colorRatio);
			colorRatio = colorRatio%1;
			if(coli == 0)colorRatio=p.pow(colorRatio,1.5);
			if(coli == cols.length-1)colorRatio=p.pow(colorRatio,0.8);
			let col = p.lerpColor(cols[coli],cols[coli+1],colorRatio);
			p.stroke(col);
			p.beginShape();
			for(let angle = 0 ; angle < p.TAU+angleStep*3; angle+=angleStep){
				let centerOff = p.noise((p.frameCount/50+yoff/100)*0.3)-0.5;
				let x = p.cos(angle)+centerOff;
				let y = p.sin(angle);
				let nv = p.noise((x+10)*noiseScale,y*noiseScale,(yoff*noiseScale + p.frameCount)/100);
				let radius = baseRadius*(1+p.map(nv,0,1,-0.8,0.8));
				p.curveVertex(x*radius,y*radius*0.7+yoff);
			}
			p.endShape();
		}
		p.pop();
		
		p.image(gra,0,0);
	}

	function createCols(_url)
	{
		let slash_index = _url.lastIndexOf('/');
		let pallate_str = _url.slice(slash_index + 1);
		let arr = pallate_str.split('-');
		for (let i = 0; i < arr.length; i++) {
			arr[i] = '#' + arr[i];
		}
		return arr;
	}
}


