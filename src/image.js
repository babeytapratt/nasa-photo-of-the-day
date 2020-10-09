import React, {useState, useEffect} from 'react';
import "./App.css";
import axios from "axios";

import { API_KEY, BASE_URL } from "./constants/index";

export default function Image(props) {
    const [imageData, setImageData] = useState('')

    return (
    <div className="image">
        <img src={imageData.img_src} alt="NASA_image"></img>

    </div>
)
}
