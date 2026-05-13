import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Carousel, Empty } from 'antd';
import { Link } from '@reach/router';

import './Slider.scss';

import { ACTIONS } from '../../store/actions/creators';

import { generateRandomId } from '../../utils';
import { CONSTANTS } from '../../constants';

import Button from '../Button';

const Slider = ({ teacherInfo, setTeacherIndex }) => {
  const carouselRef = useRef();

  const handleNextSlide = () => {
    carouselRef.current.next();
  };

  const handlePrevSlide = () => {
    carouselRef.current.prev();
  };

  if (!teacherInfo || !teacherInfo.length) {
    return (
      <div className="Slider">
        <Empty description="Нет преподавателей" />
      </div>
    );
  }

  return (
    <div className="Slider">
      <Button  className="Slider__nav_btn" text="<" fn={handlePrevSlide} />
      <Carousel dots="false" autoplay autoplaySpeed="50" ref={carouselRef}>
        {teacherInfo.map((obj, index) => (
          <div key={generateRandomId()}>
            <div className="Slider__content">
              <div className="Slider__photo">
                <img src={obj.photo} className="teachers-photo" />
              </div>
              <div className="Slider__description">
                <div className="Slider__description_text custom-scroll">
                  <h3>{obj.name}</h3>
                  <p>{obj.position}</p>
                  <p>{obj.degrees}</p>
                  <p>{obj.subjects}</p>
                </div>
                <Link  to={obj._id}>
                  <Button
                    className="Slider__btn"
                    text={CONSTANTS.MORE}
                    fn={() => setTeacherIndex(index)}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <Button className="Slider__nav_btn" text=">" fn={handleNextSlide} />
    </div>
  );
};

export default connect(null, {
  setModalOpen: ACTIONS.setModalOpen,
  setTeacherIndex: ACTIONS.setTeacherIndex,
})(Slider);
