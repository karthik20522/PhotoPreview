$(document).ready(function(){	 
	for(var y = 0; y <= 24; y++){
		var newLine = ""
		for(var x = 0; x <= 31; x++){		
			var bkImage = "background-image:url(bedRoom/file_tiles_" + y + "_" + x + ".jpg)"
			newLine = newLine + "<div id='" + y + "-" + x + "' class='blkDiv' style='" + bkImage + "'></div>"
		}
		$("#gallery").append("<div class='grid'>"  + newLine + "</div>");	
	}	

	$('body').on('click', 'div.blkDiv', function() {    	
		var selectedImage = $(".selected")
		console.log(selectedImage)
		var directory = $(selectedImage).attr('dir')
		console.log(directory)
		var xy = $(this).attr('id').split('-');
		var xC = parseInt(xy[0])
		var yC = parseInt(xy[1])

    	for(var y = 0; y <= 3; y++){			
			for(var x = 0; x <= 5; x++){		
				var bkImage = "frames/" + directory + "/file_tiles_" + y + "_" + x + ".png"
				var divIdToChange = (y+xC)+ "-" + (x+yC)				
				$("#" + divIdToChange).css("background-image", "url(" + bkImage + ")").css("background-repeat","no-repeat").css("background-color","transparent");  
			}			
		}	
	});

	$('#chooseArt input:radio').addClass('input_hidden');
	$('#chooseArt label').click(function(){
	    $(this).addClass('selected').siblings().removeClass('selected');
	});
});

