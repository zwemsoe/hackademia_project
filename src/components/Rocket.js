import React, {Component} from 'react';
//import rocket from "../imgs/fullrocket.svg";

class Rocket extends Component{
    constructor(props) {
        super(props);
        this.state = {
            styles: ["rocket", "rocket-to-moon", "rocket-to-mars", "rocket-to-alien"]
        }
    }

    render(){
        console.log("reached to rocket");
        const {styles} = this.state;
        return (
        <div>
        
        {/*<img className = {styles[this.props.destination]} src = {rocket} alt ="rocket here!"/>*/}
        <svg className = {styles[this.props.destination]} viewBox="0 0 226 112" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id= "fire" d="M35.6703 76.3184C49.3747 76.7061 49.8684 68.2227 50.1647 57.749C50.4611 47.2753 48.2364 30.003 36.7433 38.3898C24.6214 47.2356 1.56519 62.3468 0.53653 56.3449C0.53653 56.3449 21.9658 75.9306 35.6703 76.3184Z" fill="#F9A825"/>
            <path d="M72.6923 32.4598C72.5651 31.7118 72.3692 30.98 72.1077 30.2759C66.2826 14.5845 29.1259 15.1977 29.1259 15.1977L29.0822 10.5624C29.0822 10.5624 45.0152 8.95245 67.7066 2.37742C88.1217 -3.54559 106.688 19.782 110.212 24.5218C110.605 25.0552 110.813 25.351 110.813 25.351C103.183 49.095 72.6923 32.4598 72.6923 32.4598Z" fill="#AFC0E0"/>
            <path opacity="0.2" d="M110.184 27.0796C110.405 26.5317 110.616 25.9663 110.808 25.366C110.808 25.366 110.6 25.076 110.207 24.5368C106.683 19.7971 88.1166 -3.53057 67.7015 2.39244C45.0101 8.96748 29.0822 10.5627 29.0822 10.5627L29.1068 13.1694C29.1068 13.1694 45.04 11.5741 67.7312 4.98444C88.0517 -0.914324 106.548 22.1863 110.184 27.0796Z" fill="white"/>
            <path d="M68.7221 110.598C45.9106 104.438 29.9555 103.152 29.9555 103.152L29.9117 98.5081C29.9117 98.5081 68.7497 98.4337 72.926 81.5416C73.0214 81.1757 73.0963 80.8035 73.15 80.4273C73.15 80.4273 103.321 63.2111 111.393 86.8158C111.393 86.8158 111.234 87.0567 110.925 87.4917C107.796 91.9088 89.4831 116.197 68.7221 110.598Z" fill="#AFC0E0"/>
            <path opacity="0.1" d="M72.6924 32.4598C72.5652 31.7118 72.3693 30.98 72.1077 30.2759C84.6587 27.3106 97.3938 25.3873 110.207 24.5218C110.599 25.0552 110.808 25.351 110.808 25.351C103.183 49.095 72.6924 32.4598 72.6924 32.4598Z" fill="black"/>
            <path opacity="0.1" d="M110.919 87.5005C98.1275 86.6559 85.4162 84.6661 72.9102 81.5505C73.0057 81.1846 73.0805 80.8124 73.1343 80.4362C73.1343 80.4362 103.305 63.2201 111.377 86.8247C111.387 86.8159 111.229 87.0568 110.919 87.5005Z" fill="black"/>
            <path d="M67.3826 79.2439C61.5448 77.6642 55.5531 75.8047 49.4077 73.6655C49.4077 73.6655 39.5031 63.3314 49.0718 38.054C49.0718 38.054 55.4521 35.4774 66.3128 32.6076C90.1927 26.2899 135.74 18.5534 182.742 33.6784C196.871 38.1812 210.433 44.6426 223.106 52.9091C223.106 52.9091 209.445 66.338 183.152 76.3479C156.858 86.3578 117.926 92.9371 67.3826 79.2439Z" fill="#E3E8F4"/>
            <path d="M126.873 55.9332C126.982 67.4807 135.522 76.7621 145.948 76.6638C156.373 76.5654 164.737 67.1246 164.628 55.5771C164.519 44.0296 155.979 34.7482 145.553 34.8466C135.128 34.9449 126.764 44.3857 126.873 55.9332Z" fill="#AFC0E0"/>
            <path d="M145.88 70.5836C143.344 70.6075 140.854 69.8335 138.698 68.3518C136.541 66.8701 134.808 64.7416 133.699 62.2138C132.591 59.686 132.152 56.863 132.435 54.073C132.718 51.283 133.71 48.6408 135.297 46.4538C136.075 45.3863 136.982 44.4426 137.993 43.6493C138.444 43.293 138.916 42.9688 139.404 42.6785C141.31 41.5483 143.436 40.9482 145.6 40.9298C145.708 40.9288 145.813 40.9278 145.919 40.9268C148.783 40.9758 151.558 42.0394 153.84 43.9616C156.121 45.8838 157.789 48.5636 158.597 51.6084C158.898 52.771 159.074 53.9687 159.121 55.1766L159.125 55.6202C159.144 57.568 158.817 59.5002 158.162 61.3064C157.507 63.1126 156.536 64.7575 155.306 66.1471C154.076 67.5366 152.611 68.6437 150.993 69.4049C149.376 70.1661 147.638 70.5667 145.88 70.5836Z" fill="#6C63FF"/>
            <path d="M183.152 76.345C172.674 52.7192 182.749 33.6637 182.749 33.6637C196.876 38.1718 210.436 44.6382 223.106 52.9091C223.106 52.9091 209.445 66.338 183.152 76.345Z" fill="#AFC0E0"/>
            <path d="M67.3827 79.2439C63.4297 78.1719 59.4078 76.974 55.3171 75.6503C53.3661 75.0225 51.3989 74.3599 49.4156 73.6625C49.4156 73.6625 39.511 63.3284 49.0797 38.051C49.0797 38.051 51.1514 37.2141 54.9427 35.9522C57.8066 35.0086 61.6462 33.8309 66.3207 32.5958C66.3207 32.5958 62.796 42.0056 62.9215 55.3132C62.9736 63.5344 64.4896 71.6666 67.3827 79.2439V79.2439Z" fill="#AFC0E0"/>
            <path d="M55.3171 75.6503C53.3661 75.0225 51.3989 74.3599 49.4156 73.6625C49.4156 73.6625 39.511 63.3284 49.0797 38.051C49.0797 38.051 51.1513 37.2141 54.9427 35.9522C54.9426 35.9493 48.5172 61.6816 55.3171 75.6503Z" fill="#E3E8F4"/>
            <path opacity="0.2" d="M158.615 51.6169L158.594 51.585L145.937 40.9324C145.832 40.9334 145.727 40.9344 145.619 40.9354C143.455 40.9539 141.329 41.554 139.423 42.6841L159.139 55.191L158.615 51.6169Z" fill="white"/>
            <path opacity="0.2" d="M147.316 55.1624L135.307 46.4537C136.085 45.3862 136.993 44.4425 138.003 43.6492L148.286 54.0614L147.316 55.1624Z" fill="white"/>
            <path opacity="0.2" d="M51.4876 44.0123C51.4876 44.0123 57.8687 41.2323 68.725 38.1386C92.6034 31.3283 138.146 23.001 185.161 39.3848C197.881 43.7881 210.149 49.9018 221.729 57.6089C224.21 55.4494 225.473 54.1027 225.473 54.1027C212.797 45.1567 199.233 38.1603 185.103 33.2798C138.088 16.896 92.5458 25.2233 68.6674 32.0336C57.8111 35.1273 51.43 37.9073 51.43 37.9073C47.6599 48.6994 46.9262 56.97 47.4156 63.0299C47.6961 57.8463 48.857 51.5436 51.4876 44.0123Z" fill="white"/>
        </svg>
        </div>
        )
    }

}

export default Rocket;