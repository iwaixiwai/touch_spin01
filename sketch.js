let uX, uY;

function setup() {
  //スクロールを固定
  
    window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
  window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });

    createCanvas(windowWidth, windowHeight);
  ww = windowWidth;
  wh = ww;

  describe('キャンバスの中央にある長方形が、マウスの動きに合わせて回転します。');
}

function draw() {
  background(200);

  // タッチがある場合はタッチ座標を使用し、ない場合はマウス座標を使用

     if (touches.length > 0) {
        uX = touches[0].x;
        uY = touches[0].y;
      } else {
        uX = mouseX;
        uY = mouseY;
      }
  
  // 原点を中心に移動します
  translate(ww/2, wh/2);

  // 原点に対するマウスの座標を取得します
  let x = uX - ww/2;
  let y = uY - wh/2;

  // マウスと原点の間の角度を計算します
  let a = atan2(y, x);

  // 回転させます
  rotate(a);

  // 図形を描画します
  rect(-ww*0.4, -wh*0.05, ww*0.8, wh*0.1);
}

// On mouse click
function mousePressed() 
{
//    snd[0].play();
        uX = mouseX;
        uY = mouseY;

}

function touchMoved() 
{
  uX = touches[0].x;
  uY = touches[0].y;
}
