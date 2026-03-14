//For Loops Dersi Anlatımı


function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(220, 100, 40);
    stroke(255);
    strokeWeight(8);
    noLoop();
    // Çizgi sonlarını Yuvarlak yapar
    strokeCap(ROUND);
    //Veriable tanımlama
    let x1;
    let x2;

    //Loop Başlangıç
for (let y = 50; y < height; y += 50) {
    //Random x1 ve x2 değerleri oluşturma
    //x1 değeri 50 ile canvasın yarısı arasında olacak şekilde oluşturulur
    x1 = random(50, width / 2);
    //x2 değeri canvasın yarısı ile canvasın sonu arasında olacak şekilde oluşturulur ama x1 değerine göre ayarlanır
    x2 = width / 2 + (width / 2 - x1);
    //Çizgi çizme
    line(x1, y, x2, y);
    }
}
