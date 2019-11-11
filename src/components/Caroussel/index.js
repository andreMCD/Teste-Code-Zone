import React, { useState, useEffect } from 'react'
import Carousel from './Carousel'
import axios from 'axios'

import * as S from './styled'

const SPLASHBASE_URL = 'http://www.splashbase.co/api/v1/images/latest';
  

const Caroussel = (props) => {    
    const [imgList, setImgList] = useState([]);

    useEffect(() => {
        axios.get(SPLASHBASE_URL)
        .then((resp) => {
            setImgList(resp.data.images);
        }).catch((err) => {
      console.log('Unable to Fetch Image from splashbase', err);
    });
  }, []);

    return (
        <S.CarousselWrapper>
        <S.CarousselContainerImg>
        {imgList.length === 0 && <div>Loading...</div>}
      {imgList.length > 0 &&
        <Carousel 
            imgList={imgList} 
            img_width={250} 
            img_height={200}
            visibleImages={3} 
            duration={250}/>
      }
        </S.CarousselContainerImg>
    </S.CarousselWrapper>
    )
    }
export default Caroussel