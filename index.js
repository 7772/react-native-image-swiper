import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";
import Swiper from "react-native-swiper";

const defaultIMG = [
  "https://goo.gl/H153S7",
  "https://goo.gl/VtPnwU",
  "https://goo.gl/ehfSt1",
];

class ImagesSwiper extends Component {
  render() {
    const {
      images,
      autoplay,
      autoplayTimeout,
      showsPagination,
      width,
      height
    } = this.props;
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
  }
}

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
  width: 400,
  height: 300
};

export default ImagesSwiper;
