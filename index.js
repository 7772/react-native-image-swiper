import React from "react";
import { View, Image, Dimensions } from "react-native";
import PropTypes from "prop-types";
import Swiper from "react-native-swiper";

const { defaultWidth, defaultHeight } = Dimensions.get("window");

const defaultIMG = [
  "https://goo.gl/H153S7",
  "https://goo.gl/VtPnwU",
  "https://goo.gl/ehfSt1",
];

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
  images: PropTypes.array,
  autoplay: PropTypes.bool,
  autoplayTimeout: PropTypes.number,
  showsPagination: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number
};

ImagesSwiper.defaultProps = {
  images: defaultIMG,
  autoplay: false,
  autoplayTimeout: 1.5,
  showsPagination: false,
  width: defaultWidth,
  height: defaultHeight - 400
};

export default ImagesSwiper;
