
$(document).ready(function(){
//    $('#exercise_list').sortable();
    $("#back").hide();
    $("#muscle_brief").hide();
    $("#exerciseTable").hide();
    $("#hideExercise").hide();
    
});
    
  // Interactive diagram AJAX
    
$(document).on("mousedown","svg", function() {
    $("#static_muscle_brief").hide();
    $("#muscle_brief").fadeIn();
    var id = $(this).attr("id");
    $.getJSON("muscles.json")
    .done(function(data){
     
    $("#muscle_name").text(data[id]['muscleGroup']);
    $("#tbl_title").text(data[id]['muscleGroup']);
    $("#description").text(data[id]['Description']);
    $("#description2").text(data[id]['Description2']);
        
    len = data[id]['Exercises'].length; 
        
   output = "";
        
    for(var i = 0; i < len; i++){
        (data[id]['Exercises'][i]['Name']);
        (data[id]['Exercises'][i]['explained']);
        (data[id]['Exercises'][i]['Gif']);
         output+= "<tr><td width='10%'>" + data[id]['Exercises'][i]['Name'] + "</td> <td width='45%'>" + (data[id]['Exercises'][i]['explained']) + "</td><td width='45%'><img class='exercise_Gif' src='" + (data[id]['Exercises'][i]['Gif']) + "'></td></tr>";
    }
    $("#exerciseTable tbody").html(output);
    }
         )
    .fail(function(){
        alert("The JSON data is invalid");
    });
    });

$(document).ready(function(){

    $("#showExercise").click(function(){
  $("#exerciseTable").slideDown();
  $("#showExercise").hide();
    $("#hideExercise").show();
});
        $("#hideExercise").click(function(){
  $("#exerciseTable").slideUp();
    $("#hideExercise").hide();
    $("#showExercise").show();
});
    
    $("input[name=group1]").on( "change", function() {
         var test = $(this).val();
         $(".human-body").hide();
         $("#"+test).fadeIn();
    } );
    
});
    
