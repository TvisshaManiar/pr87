
var canvas = new fabric.Canvas('myCanvas');

player_x =10;
player_y = 10;

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";



function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            top:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed =='38'){
		up();
		console.log("up");
	}
	if(keyPressed =='40'){
		down();
		console.log(down);
	}
	if(keyPressed == '37'){
		left();
		console.log(left);
	}
	if(keyPressed == '39'){
		right();
		console.log(right);
	}

	if(keyPressed == '82') 
	{
		new_image('rr1.png');
		console.log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 200;

		new_image('gr.png');
		console.log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png');
		console.log("y");
		
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png');
		console.log("p");
		
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('br.png');
		console.log("b");
	
	}
	
}


