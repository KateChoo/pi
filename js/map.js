function initMap(){
    var options ={
        zoom: 15,
        center: {lat: 40.7653249, lng: -73.9819728},
        mapTypeControl: false,
        streetViewControl: false,
        styles: [
        {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
        "featureType": "poi",
        "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "weight": 1
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "weight": 0.8
                    }
                ]
            },
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            }
        
        ]
    }


    var map = new google.maps.Map(document.getElementById('map'), options);

    // google.maps.event.addListener(map, 'click', function(event){
    //     addMarker({coords:event.latLng});
    // });

    var markers = [
        {
        //coords:{lat:42.4668, lng:-70.9495},
        //iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        //content: '<h1></h1>'
        },
        {
        coords:{lat: 40.7653249, lng: -73.9819728},
        content: '<h3><a href="#tchaikovsky">Tchaikovsky : Nutcracker</a></h3>'
        },
        {
        coords:{lat:40.7643665, lng:-73.9772377},
        content: '<h3><a href="#schumann">Schumann : kinderszenen. op. 15 no. 7 träumerei</a></h3>'
        }
    ];

    for(var i = 0; i < markers.length; i++){
        addMarker(markers[i])
    }
    
    function addMarker(props){
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
      
        });
    
        if(props.iconImage){
            marker.setIcon(props.iconImage);
        }
  
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }

    }
}