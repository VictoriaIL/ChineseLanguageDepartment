import React from 'react';
import { connect } from 'react-redux';
import { Empty } from 'antd';

import { generateRandomId } from '../../utils';

import './Modals.scss';

import Button from '../Button';

import { ACTIONS } from '../../store/actions/creators';

const NewsModal = ({ setModalOpen, allNews, index }) => {
  const currentNewsObj = allNews.news.filter((obj) => obj._id === index)[0];

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="Modal">
      <div className="Modal__layout">
        <div className="Modal__wrapper">
          <div className="Modal__content">
            <div className="Modal__collage">
              {currentNewsObj.photos.length ? (
                <div className="Modal__gallery">
                  {currentNewsObj.photos.map((url, i) => (
                    <img key={i} className="Modal__gallery-img" src={url} alt="" />
                  ))}
                </div>
              ) : (
                <Empty description="Нет фото" />
              )}
            </div>
            <div className="Modal__info custom-scroll">
              <h3>{currentNewsObj.title}</h3>
              {currentNewsObj.article.split('\n').map((i) => {
                return <p key={generateRandomId()}>{i}</p>;
              })}
            </div>
          </div>
        </div>
        <Button className="Modal__btn" text="Х" fn={closeModal} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isModalOpen: state.pages.isModalOpen,
  allNews: state.pages.allNews,
  index: state.pages.index,
});

export default connect(mapStateToProps, {
  setModalOpen: ACTIONS.setModalOpen,
})(NewsModal);
