//shape densities
var grid_size = 5;
var min_grid_size = 1;
var max_grid_size = 10;
var stack_count = 5;
var min_stack_count = 2;
var max_stack_count = 10;

//shape properties
var tile_width = 0;
var end_size = 0;
var end_offset = 0;

//controls
var draw_stroke = false;
var invert_stroke = false;

function setup()
{
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  
  tile_width = width / grid_size;
  end_size = tile_width / 4;
  end_offset = (tile_width - end_size) / 2;
}

function draw()
{
  background(0);
  
  if(draw_stroke)
  {
    if(invert_stroke)
      stroke(255);
    else
      stroke(0);
  }
  else
    noStroke();
  
  for(var i = 0; i < grid_size; i++)
  {
    for(var j = 0; j < grid_size; j++)
    {
      push();
      
      var x = (i * tile_width) + (tile_width / 2);
      var y = (j * tile_width) + (tile_width / 2);
      translate(x, y);
      
      var rotX = mouseX - x;
      var rotY = mouseY - y;
      var theta = atan2(rotY, rotX);
      rotate(theta);
      
      for(var k = 0; k < stack_count; k++)
      {
        var distance = dist(x, y, mouseX, mouseY);        
        var diameter = map(k, 0, stack_count - 1, tile_width, end_size);
        var offset = map(k, 0, stack_count - 1, 0, end_offset);
        var dist_offset = map(distance, 0, width, 0, 1);
        var fill_color = map(k, 0, stack_count - 1, 40, 200);
        fill(fill_color);
        ellipse(offset * dist_offset, 0, diameter, diameter);
      }
      
      pop();
    }
  }
}

function keyTyped()
{
  if(key == 's')
    draw_stroke = !draw_stroke;
  else if(key == 'i')
    invert_stroke = !invert_stroke;
  else if(key == 'z')
  {
    if(stack_count > min_stack_count)
      stack_count--;
  }
  else if(key == 'v')
  {
    if(stack_count < max_stack_count)
      stack_count++;
  }
  else if(key == 'x')
  {
    if(grid_size > min_grid_size)
    {
      grid_size--;
      tile_width = width / grid_size;
      end_size = tile_width / 4;
      end_offset = (tile_width - end_size) / 2;
    }
  }
  else if(key == 'c')
  {
    if(grid_size < max_grid_size)
    {
      grid_size++;
      tile_width = width / grid_size;
      end_size = tile_width / 4;
      end_offset = (tile_width - end_size) / 2;
    }
  }
  
  return false;
}