
localjsons=1
vneeds=[{"todate": "2016-02-16", "name": "coming soon...", "__last_update": "2015-12-26 16:59:31", "mobile": "coming soon.", "work": "coming soon...", "numvolunteers": "0", "days": "anyday", "project": "Kindly standby for info...", "skills": "coming soon...", "fromdate": "2016-01-15", "id": 11}];
buses=[{"starttime": "5.45, 12.15", "__last_update": "2015-12-27 16:19:02", "droplocation": "Chegur", "arrivaltime": "1 hour", "directions": "Coming Soon...", "id": 2, "name": "Afzalgunj"}, {"starttime": "16.10, 19.10", "__last_update": "2015-12-27 16:22:04", "droplocation": "Maddur", "arrivaltime": "1 hour", "directions": "Coming Soon...", "id": 3, "name": "Afzalgunj"}];
trains=[{"dropstation": "Secunderabad", "name": "Local Train", "__last_update": "2015-12-27 16:09:32", "droptime": "60min", "directions": "Coming soon...", "fromtime": "8.11, 8.25, 9.00, 10.50, 13.40, 15.32, 17.29, 18.28, 20.29, 21.15", "id": 2, "fromstation": "Timmapur"}, {"dropstation": "Timmapur", "name": "Local Train", "__last_update": "2015-12-27 16:06:46", "droptime": "2 hours", "directions": "Coming Soon...", "fromtime": "5.10, 6.15, 7.30, 10.00, 10.14, 13.10, 14.40, 16.45, 17.35, 21.50", "id": 3, "fromstation": "Kacheguda"}];
hotels=[{"distance": "25km", "name": "Oyster Inn", "__last_update": "2015-12-27 17:20:32", "address": "Brindavan Garden, Kishanguda, Shamshabad - 501218", "directions": "Own Transport", "hotelcontact": "9908484567", "id": 2, "volunteercontact": "Sanjeev"}, {"distance": "25km", "name": "Hyderabad Grand", "__last_update": "2015-12-27 17:17:13", "address": "11-2/4 and 11-2/5, Madhura nagar, Shamshabad, Opposite Trident hospital, R.R. Dist, 501218, Telangana.", "directions": "Own Transort", "hotelcontact": "9949350352", "id": 3, "volunteercontact": "Sanjeev"}, {"distance": "25km", "name": "Hotel Deccan Park", "__last_update": "2015-12-27 17:17:50", "address": "Hotel Deccan Park,Near Airport,Shamshabad, Hyderabad Telangana 501218", "directions": "Own Transport", "hotelcontact": "nil", "id": 4, "volunteercontact": "Sanjeev"}, {"distance": "25km", "name": "VJR Residency", "__last_update": "2015-12-27 17:59:20", "address": "11-3/4/1 and 2, On NH - 7, Near Hyderabad International Airport,Madhura Nagar, Shamshabad 501 218", "directions": "Own Transport", "hotelcontact": "Vijay Kumar - 8413222142", "id": 5, "volunteercontact": "Sanjeev"}, {"distance": "45km", "name": "Peerless Inn", "__last_update": "2015-12-27 17:04:59", "address": "Plot No.15 to 18, Lumbini Layout,Acharya Road, Gachibowli,Hyderabad, Telangana 500032", "directions": "Own Transport", "hotelcontact": "7702203271", "id": 6, "volunteercontact": "Sanjeev"}, {"distance": "45km", "name": "KSR Park Hotel", "__last_update": "2015-12-27 17:09:22", "address": "Andhra Pradesh Housing Board, Gachibowli, Hyderabad, Telangana 500032", "directions": "Own Transport", "hotelcontact": "Mridul Rajput-9100993395", "id": 7, "volunteercontact": "Sanjeev"}, {"distance": "45km", "name": "Serenity Inn", "__last_update": "2015-12-27 17:09:31", "address": "Andhra Pradesh Housing Board, Gachibowli, Hyderabad, Telangana 500032", "directions": "Own Transport", "hotelcontact": "Pavan -9949823737", "id": 8, "volunteercontact": "Sanjeev"}, {"distance": "15km", "name": "Papyrus port", "__last_update": "2015-12-27 17:58:55", "address": "Bangalore Highway, Near 34th Milestone, Thimmapur, Telangana 500014", "directions": "Own Transport", "hotelcontact": "Rajeevan- 9985044444 ", "id": 9, "volunteercontact": "Sanjeev"}];
pocs=[{"center": "Kanha", "__last_update": "2015-12-26 16:55:47", "email": "saa@example.com", "phone": "9999999999", "department": "Medical", "id": 1, "name": "Medical Desk"}, {"center": "Kanha", "__last_update": "2015-12-26 16:56:24", "email": "maa@example.com", "phone": "8888888888", "department": "Marriage", "id": 2, "name": "Marriage Desk"}, {"center": "Kanha", "__last_update": "2015-12-27 16:22:07", "email": "accomodation@kanhashantivanam.org", "phone": "7777777777", "department": "Accomodation", "id": 3, "name": "Accomodation Desk"}, {"center": "Kanha", "__last_update": "2015-12-27 15:42:32", "email": "transportation@kanhashantivanam.org", "phone": "6666666666", "department": "Transport", "id": 4, "name": "Transport Desk"}];


function vneedsfnc(globalgrid, textStatus, jqXHR)
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
};

function busfnc(globalgrid, textStatus, jqXHR) 
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
    }


function loadvneeds()
{
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url : "http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.vneeds?cols=name,project,mobile,work,fromdate,todate,days,skills,numvolunteers",
    success: vneedsfnc,
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
    success: busfnc,
    error: function(data, errorText)
    {
      $("#gridbuses").html(errorText).show();
    }
  });                     
}

function trainfnc(globalgrid, textStatus, jqXHR) 
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
};

function loadtrains()
{
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url : "http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.trains?cols=name,fromstation,fromtime,dropstation,droptime,directions",
    success: trainfnc,
    error: function(data, errorText)
    {
      $("#gridtrains").html(errorText).show();
    }
  });                     
}   

function pocfnc(globalgrid, textStatus, jqXHR) 
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
			+ '<div>' + globalgrid[i]['email'] + '</div><br><br>'
			+ '</div>');
      }
};



function loadpocs()
{
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url : "http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.pocs?cols=name,phone,department,email,center",
    success: pocfnc,
    error: function(data, errorText)
    {
      $("#gridpocs").html(errorText).show();
    }
  });                     
}   

function hotelfnc(globalgrid, textStatus, jqXHR) 
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
};


function loadhotels()
{
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url : "http://bitnami-odoo-d47c.cloudapp.net:8068/bitnami/bhandara.hotels?cols=name,address,distance,hotelcontact,volunteercontact,directions",
    success: hotelfnc,
    error: function(data, errorText)
    {
      $("#gridhotels").html(errorText).show();
    }
  });                     
}   




$(document).ready(function() {

    if (localjsons = 1) {
        vneedsfnc(vneeds, '', '');
        busfnc(buses, '', '');
        trainfnc(trains, '', '');
        pocfnc(pocs, '', '');
        hotelfnc(hotels, '', '');
    } else {
        loadvneeds();
        loadbuses();
        loadtrains();
        loadpocs();
        loadhotels();
    }
        
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



//$('#myCarousel').on("slide.bs.carousel", function(){
//         $(".carousel-control",this).css('top',($(".active img",this).height()*0.46)+'px');
//         $(this).off("slide.bs.carousel");
//    });

});
