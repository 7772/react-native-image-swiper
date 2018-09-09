import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";
import Swiper from "react-native-swiper";
import { defaultIMG } from './utils/images';

const ImagesSwiper = ({ images, autoplay, autoplayTimeout, showsPagination, width, height }) => {
  return (
    <Swiper
      key={images.length}
      autoplay={autoplay}
      autoplayTimeout={autoplayTimeout}
      width={width}
      height={height}
      showsPagination={false}
    >
      {images.map((url, index) => {
        return (
          <View key={index}>
            <Image
              source={{ uri: url }}
              style={{ width: width, height: height }}
            />
          </View>
        );
      })}
    </Swiper>
  );
};

ImagesSwiper.propTypes = {
  images: defaultIMG,
  autoplay: PropTypes.bool,
  autoplayTimeout: PropTypes.number,
  showsPagination: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number
};

ImagesSwiper.defaultProps = {
  images: PropTypes.array,
  autoplay: false,
  autoplayTimeout: 1.5,
  showsPagination: false,
  width: 400,
  height: 300
};

export default ImagesSwiper;
