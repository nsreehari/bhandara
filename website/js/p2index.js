
function loadvneeds()
{
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url : "http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.vneeds?cols=name,project,mobile,work,fromdate,todate,days,skills,numvolunteers",
    success:function(globalgrid, textStatus, jqXHR) 
    {
 
      if( globalgrid.length === 0)
      {
           $('#gridtable').html('Sorry, <strong>no</strong> rows returned!');
           return;
      }
      $('#gridtablehead').append('<tr>' 
			+ '<th> Project </th>'
			+ '<th> Work </th>' 
			+ '<th> Days </th>'
			+ '<th> From </th>'
			+ '<th> To </th>' 
			+ '<th> Contact Name</th>'
			+ '<th> Phone </th>'
			+ '</tr>');
 
      //$('#gridtable').html('')
      for( var i=0; i < globalgrid.length; i++ )
      {
         var line = globalgrid[i];
         // insert after last row! (yes! it *can* be done differently - but it works!)
         $('#gridtable').append('<tr>' 
			+ '<td>' + globalgrid[i]['project'] + '</td>'
			+ '<td>' + globalgrid[i]['work'] + '</td>'
			+ '<td>' + globalgrid[i]['days'] + '</td>'
			+ '<td>' + globalgrid[i]['fromdate'] + '</td>'
			+ '<td>' + globalgrid[i]['todate'] + '</td>'
			+ '<td>' + globalgrid[i]['name'] + '</td>'
			+ '<td>' + globalgrid[i]['mobile'] + '</td>'
			+ '</tr>');
      }
    },
    error: function(data, errorText)
    {
      $("#gridtable").html(errorText).show();
    }
  });                     
}   


function loadbuses()
{
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url : "http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.buses?cols=name,starttime,arrivaltime,droplocation,directions",
    success:function(globalgrid, textStatus, jqXHR) 
    {
 
      if( globalgrid.length === 0)
      {
           $('#gridbuses').html('Sorry, <strong>no</strong> rows returned!');
           return;
      }
      $('#gridbuseshead').append('<tr>' 
			+ '<th> Pickup Place </th>'
			+ '<th> Start Time </th>' 
			+ '<th> Arrival Time </th>'
			+ '<th> Drop Location </th>'
			+ '<th> Directions </th>' 
			+ '</tr>');
 
      for( var i=0; i < globalgrid.length; i++ )
      {
         var line = globalgrid[i];
         // insert after last row! (yes! it *can* be done differently - but it works!)
         $('#gridbuses').append('<tr>' 
			+ '<td>' + globalgrid[i]['name'] + '</td>'
			+ '<td>' + globalgrid[i]['starttime'] + '</td>'
			+ '<td>' + globalgrid[i]['arrivaltime'] + '</td>'
			+ '<td>' + globalgrid[i]['droplocation'] + '</td>'
			+ '<td>' + globalgrid[i]['directions'] + '</td>'
			+ '</tr>');
      }
    },
    error: function(data, errorText)
    {
      $("#gridbuses").html(errorText).show();
    }
  });                     
}   


function loadtrains()
{
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url : "http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.trains?cols=name,fromstation,fromtime,dropstation,droptime,directions",
    success:function(globalgrid, textStatus, jqXHR) 
    {
 
      if( globalgrid.length === 0)
      {
           $('#gridtrains').html('Sorry, <strong>no</strong> rows returned!');
           return;
      }
      $('#gridtrainshead').append('<tr>' 
			+ '<th> Train Name &lt; No. </th>'
			+ '<th> From </th>' 
			+ '<th> Start Time </th>'
			+ '<th> Drop Station </th>'
			+ '<th> Drop Time </th>'
			+ '<th> Directions </th>' 
			+ '</tr>');
 
      for( var i=0; i < globalgrid.length; i++ )
      {
         var line = globalgrid[i];
         // insert after last row! (yes! it *can* be done differently - but it works!)
         $('#gridtrains').append('<tr>' 
			+ '<td>' + globalgrid[i]['name'] + '</td>'
			+ '<td>' + globalgrid[i]['fromstation'] + '</td>'
			+ '<td>' + globalgrid[i]['fromtime'] + '</td>'
			+ '<td>' + globalgrid[i]['dropstation'] + '</td>'
			+ '<td>' + globalgrid[i]['droptime'] + '</td>'
			+ '<td>' + globalgrid[i]['directions'] + '</td>'
			+ '</tr>');
      }
    },
    error: function(data, errorText)
    {
      $("#gridtrains").html(errorText).show();
    }
  });                     
}   

function loadpocs()
{
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url : "http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.pocs?cols=name,phone,department,email,center",
    success:function(globalgrid, textStatus, jqXHR) 
    {
 
      if( globalgrid.length === 0)
      {
           $('#gridpocs').html('Sorry, <strong>no</strong> rows returned!');
           return;
      }
 
      for( var i=0; i < globalgrid.length; i++ )
      {
         var line = globalgrid[i];
         // insert after last row! (yes! it *can* be done differently - but it works!)
         $('#gridpocs').append('<div class="col-lg-3 col-md-4">' 
			+ '<div class="lead">' + globalgrid[i]['department'] + '</div>'
			+ '<div><strong>' + globalgrid[i]['name'] + '  ( ' 
			+ globalgrid[i]['center'] + ' )  </strong></div>'
			+ '<div>' + globalgrid[i]['phone'] + '</div>'
			+ '<div>' + globalgrid[i]['email'] + '</div>'
			+ '</div>');
      }
    },
    error: function(data, errorText)
    {
      $("#gridpocs").html(errorText).show();
    }
  });                     
}   


function loadhotels()
{
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url : "http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.hotels?cols=name,address,distance,hotelcontact,volunteercontact,directions",
    success:function(globalgrid, textStatus, jqXHR) 
    {
 
      if( globalgrid.length === 0)
      {
           $('#gridhotels').html('Sorry, <strong>no</strong> rows returned!');
           return;
      }
 
      $('#gridhotelshead').append('<tr>' 
			+ '<th> Hotel Name  </th>'
			+ '<th> Address </th>' 
			+ '<th> Distance </th>'
			+ '<th> Hotel Contact </th>'
			+ '<th> Volunteer Contact </th>'
			+ '</tr>');
      for( var i=0; i < globalgrid.length; i++ )
      {
         var line = globalgrid[i];
         // insert after last row! (yes! it *can* be done differently - but it works!)
         $('#gridhotels').append('<tr>' 
			+ '<td>' + globalgrid[i]['name'] + '</td>'
			+ '<td>' + globalgrid[i]['address'] + '</td>'
			+ '<td>' + globalgrid[i]['distance'] + '</td>'
			+ '<td>' + globalgrid[i]['hotelcontact'] + '</td>'
			+ '<td>' + globalgrid[i]['volunteercontact'] + '</td>'
			+ '</tr>');
      }
    },
    error: function(data, errorText)
    {
      $("#gridhotels").html(errorText).show();
    }
  });                     
}   




$(document).ready(function() {

    loadvneeds();
    loadbuses();
    loadtrains();
    loadpocs();
    loadhotels();
        
    $('#registerform').hide();

    $("#simple-post").click(function() {

	$("#ajaxform").submit(function(e) {
		$("#simple-msg").html("Started Registering ...");

		pData = {}

		X = $(this).serializeArray();
		for (kv in X) {
			pData[ X[kv].name ] = X[kv].value;
		}

		var postData = JSON.stringify(pData);
		var formURL = $(this).attr("action");

		$.ajax(
		{
			url : formURL,
			type: "POST",
			crossDomain: true,
			
			data : postData,
			dataType : 'text',
  
			success:function(data, textStatus, jqXHR) 
			{
				$("#ajaxform")[0].reset();
				var s = "persons";
				$("#simple-msg").html('<p> Registered '+pData['name']+ ' : ' + pData['count'] + ' ' + s + ' </p>');
			},
			error: function(jqXHR, textStatus, errorThrown) 
			{
				$("#simple-msg").html('<p>Request Failed<br/> textStatus='+textStatus+', errorThrown='+errorThrown+'</p>');
			}
		});
	    e.preventDefault();	//STOP default action
	    //e.unbind();
	});

	$("#ajaxform").submit();

    });



    $('#registerlink').click(function(e) {
        $('#registerform').toggle();
        e.preventDefault();
    });



$('#myCarousel').on("slide.bs.carousel", function(){
         $(".carousel-control",this).css('top',($(".active img",this).height()*0.46)+'px');
         $(this).off("slide.bs.carousel");
    });

});
