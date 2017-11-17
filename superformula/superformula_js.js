var a_slider, m1_slider, m2_slider, n1_slider, n2_slider, n3_slider;

var t = 0.0;

function setup()
{
  createCanvas(1280, 720);  
  background(0);
  noFill();
  stroke(255);
  
  //create sliders
  a_slider = createSlider(1, 3, 1);
  a_slider.position(10, 160);
  m1_slider = createSlider(1, 100, 1);
  m1_slider.position(10, 70);
  m2_slider = createSlider(1, 100, 1);
  m2_slider.position(10, 40);
  n1_slider = createSlider(1, 50, 50);
  n1_slider.position(10, 10);
  n2_slider = createSlider(-50, 50, -50);
  n2_slider.position(10, 130);
  n3_slider = createSlider(-50, 50, -50);
  n3_slider.position(10, 100);
}

function draw()
{
  background(0);
  
  translate(width / 2, height / 2);
  
  beginShape();
  
  for(var theta = 0; theta <= TWO_PI; theta += 0.001)
  {
    var rad = r(theta, 
    a_slider.value(), //a
    a_slider.value(), //b
    m1_slider.value(), //m1
    m2_slider.value(), //m2
    n1_slider.value(), //n1
    n2_slider.value(), //n2
    n3_slider.value() //n3
    );
    
    var x = rad * cos(theta) * 100;
    var y = rad * sin(theta) * 100;
    
    vertex(x, y);
  }
  
  endShape(CLOSE);
  
  t += 0.05;
}

function r(theta, a, b, m1, m2, n1, n2, n3)
{
  return pow(pow(abs(cos(m1*theta/4.0)/a), n2)
      + pow(abs(sin(m2*theta/4.0)/b), n3), -(1/n1));
}