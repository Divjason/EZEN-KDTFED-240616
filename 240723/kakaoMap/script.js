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
      img: "./img/img1.jpg",
      info: "영업시간 : 오전 8시 ~ 저녁 10시",
    },
    {
      title: "올리브영 강남중앙점",
      latlng: new kakao.maps.LatLng(37.4962484, 127.0287983),
      address: "서울시 강남구 강남대로 374",
      img: "./img/img2.jpg",
      info: "영업시간 : 오전 9시 ~ 저녁 9시",
    },
    {
      title: "올리브영 서초타운점",
      latlng: new kakao.maps.LatLng(37.4950544, 127.0280286),
      address: "서울시 서초구 서초대로 78길",
      img: "./img/img3.jpg",
      info: "영업시간 : 오전 9시 ~ 저녁 9시",
    },
    {
      title: "올리브영 서초대로점",
      latlng: new kakao.maps.LatLng(37.4940977, 127.0158607),
      address: "서울시 서초구 서초대로 314",
      img: "./img/img4.jpg",
      info: "영업시간 : 오전 9시 ~ 저녁 8시",
    },
    {
      title: "올리브영 역삼점",
      latlng: new kakao.maps.LatLng(37.4987564, 127.0292784),
      address: "서울시 강남구 테헤란로 111",
      img: "./img/img5.jpg",
      info: "영업시간 : 오전 9시 ~ 저녁 10시",
    },
  ];

  for (let i = 0; i < positions.length; i++) {
    let marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
    });

    const content = `
    <div class="wrap">
      <div class="info">
        <div class="title">${positions[i].title}</div>
        <div class="body">
          <div class="img">
            <img src="${positions[i].img}" width="73" height="70">
          </div>
          <div class="desc">
            <div class="ellipsis">${positions[i].address}</div>
            <div class="jibun ellipsis">${positions[i].info}</div>
            <div><a href="https://www.oliveyoung.co.kr/" target="_blank" class="link">쇼핑몰 바로가기</a></div>
          </div>
        </div>
      </div>
    </div>
    `;

    const overlay = new kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: marker.getPosition(),
    });
  }

  // Kakao Marker
  const markerPosition = new kakao.maps.LatLng(latitude, longitude);

  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  marker.setMap(map);

  // Kakao Marker InfoWindow
  const iwContent = `<div class ="label"><span class="left"></span><span class="center">🎈현재위치</span><span class="right"></span></div>`;
  const iwPosition = new kakao.maps.LatLng(latitude, longitude);
  const infowindow = new kakao.maps.CustomOverlay({
    content: iwContent,
    position: iwPosition,
  });

  infowindow.setMap(map);
};

const errorPosition = (err) => {
  alert(err.message);
};

navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
