// Current Position
const showPosition = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Kakao Map
  const container = document.querySelector("#map");
  const options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);

  // Olive Store Info
  const positions = [
    {
      title: "올리브영 강남우성점",
      latlng: new kakao.maps.LatLng(37.4918902, 127.0309525),
      address: "서울시 강남구 강남대로 320",
    },
    {
      title: "올리브영 강남중앙점",
      latlng: new kakao.maps.LatLng(37.4962484, 127.0287983),
      address: "서울시 강남구 강남대로 374",
    },
    {
      title: "올리브영 서초타운점",
      latlng: new kakao.maps.LatLng(37.4950544, 127.0280286),
      address: "서울시 서초구 서초대로 78길",
    },
    {
      title: "올리브영 서초대로점",
      latlng: new kakao.maps.LatLng(37.4940977, 127.0158607),
      address: "서울시 서초구 서초대로 314",
    },
    {
      title: "올리브영 역삼점",
      latlng: new kakao.maps.LatLng(37.4987564, 127.0292784),
      address: "서울시 강남구 테헤란로 111",
    },
  ];

  for (let i = 0; i < positions.length; i++) {
    let marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
    });

    const infowindow = new kakao.maps.InfoWindow({
      content: positions[i].title,
    });

    const makeOverListener = (map, marker, infowindow) => {
      return () => {
        infowindow.open(map, marker);
      };
    };

    const makeOutListener = (infowindow) => {
      return () => {
        infowindow.close();
      };
    };

    kakao.maps.event.addListener(
      marker,
      "mouseover",
      makeOverListener(map, marker, infowindow)
    );

    kakao.maps.event.addListener(
      marker,
      "mouseout",
      makeOutListener(infowindow)
    );
  }

  // Kakao Marker
  const markerPosition = new kakao.maps.LatLng(latitude, longitude);

  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  marker.setMap(map);

  // Kakao Marker InfoWindow
  const iwContent = '<div class="iwItem">현재 내 위치!</div>';
  const iwRemoveable = true;
  const infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable,
  });
  kakao.maps.event.addListener(marker, "click", function () {
    infowindow.open(map, marker);
  });
};

const errorPosition = (err) => {
  alert(err.message);
};

navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
