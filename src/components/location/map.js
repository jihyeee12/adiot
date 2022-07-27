import React, { useEffect } from "react";


const Map = () => {
    const { kakao } = window;
    
    useEffect(()=>{
        var mapContainer = document.getElementById('kakao-map'), // 지도를 표시할 div 
            mapOption = {
                    center: new kakao.maps.LatLng(35.22235848741752, 126.85163756165184), // 지도의 중심좌표
                    level: 3, // 지도의 확대 레벨
                    mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
                }; 
    
            // 지도를 생성한다 
            var map = new kakao.maps.Map(mapContainer, mapOption); 
    
            // 지도에 마커를 생성하고 표시한다
            var marker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(35.22235848741752, 126.85163756165184), // 마커의 좌표
                map: map // 마커를 표시할 지도 객체
            });
    
            // 마커 위에 표시할 인포윈도우를 생성한다
            var infowindow = new kakao.maps.InfoWindow({
                content : '<div style="padding:0.2rem; text-align: center;">광주 북구 오룡동 1110-43 와이어스파크 B동 2201호</div>' // 인포윈도우에 표시할 내용
            });

        map.relayout();
		// 인포윈도우를 지도에 표시한다
		infowindow.open(map, marker);
    })

        return (
            <div id='kakao-map'></div>
        );
    };

export default Map;