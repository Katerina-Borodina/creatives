function initMap() {
    var coordinates = {lat: 48.85738967, lng: 2.34412869}, // Координаты центра карты

        // создаем карту и настраеваем
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 16, // определяет первоначальный масштаб
            disableDefaultUI: true, // убирает элементы управления
            scrollwheel: false, // отключает масштабирование колесиком мыши (бывает полезно, если карта на всю ширину страницы и перебивает прокрутку вниз).
            styles: [
                {
                    "stylers": [
                        {
                            "hue": "#ff1a00"
                        },
                        {
                            "invert_lightness": true
                        },
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 33
                        },
                        {
                            "gamma": 0.5
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#2D333C"
                        }
                    ]
                }
            ],


        });



    // Отцентровка карты при ресайзе
    google.maps.event.addDomListener(window, "resize", function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });


}

// Запускаем карту при загрузки страницы
google.maps.event.addDomListener(window, 'load', initMap);
