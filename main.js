
var canvas= new fabric.Canvas("myCanvas");

ball_y=0
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img()
{
	fabric.Image.fromURL("golf-h.png", function(Img)

    {
       hole_image_object=Img;
       
       hole_image_object.scaleToWidth(50);
       hole_image_object.scaleToHeight(50);
       hole_image_object.set(
       {
        left:hole_x,
        top:hole_y
       });
       canvas.add(hole_obj);
    });
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img)

    {
       block_image_object=Img;
       
       block_image_object.scaleToWidth(50);
       block_image_object.scaleToHeight(50);
       block_image_object.set(
       {
        left:block_x,
        top:block_y
       });
       canvas.add(ball_obj);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y))
{
	canvas.remove(ball_obj);
	document.getElementById("hd3").innerHTML="You have hit the goal!!!!!";
	document.getElementById("myCanvas").style.borderColor="red";
}	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function down()
	{
		if (ball_y>=0) 
		{
			ball_y=ball_y-block_image_height;
			console.log("block image height="+block_image_height);
			 console .log("WHen up key is pressed, X="+ball_x+", Y="+ball_y);
			 canvas.remove(ball_obj);
			 new_image();
		}
	}

	function down()
	{
		if (ball_y<=450) 
		{
			ball_y=ball_y+block_image_height;
			console.log("block image height="+block_image_height);
			 console .log("WHen down key is pressed, X="+ball_x+", Y="+ball_y);
			 canvas.remove(ball_obj);
			 new_image();
		}
	}

	function left()
	{
		if (ball_y>=5) 
		{
			ball_y=ball_y-block_image_height;
			console.log("block image height="+block_image_height);
			 console .log("WHen left key is pressed, X="+ball_x+", Y="+ball_y);
			 canvas.remove(ball_obj);
			 new_image();
		}
	}

	function right()
	{
		if (ball_y<=1050) 
		{
			ball_y=ball_y+block_image_height;
			console.log("block image height="+block_image_height);
			 console .log("WHen right key is pressed, X="+ball_x+", Y="+ball_y);
			 canvas.remove(ball_obj);
			 new_image();
		}
	}
	
}

