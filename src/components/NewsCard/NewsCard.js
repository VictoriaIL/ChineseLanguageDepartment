import React from 'react';
import { Card, Empty } from 'antd';
import { connect } from 'react-redux';

import './NewsCard.scss';

import { generateCurrentNews } from '../Pagination/NewsPagination.utils';
import { getFormattedDate } from '../../utils';
import { CONSTANTS } from '../../constants';

import { ACTIONS } from '../../store/actions/creators';

import Button from '../Button';

const NewsCard = ({ allNews, newsPerPage, currentNewsPage, setModalOpen }) => {
  const { Meta } = Card;

  const news = generateCurrentNews(allNews, currentNewsPage, newsPerPage);

  const openModal = (id) => {
    setModalOpen(true, id);
  };

  if (!news || !news.length) {
    return (
      <div className="NewsCard__empty">
        <Empty description="Нет новостей" />
      </div>
    );
  }

  return news
    ? news.map(({ photos, description, title, date, _id }, index) => {
        return (
          <div className="NewsCard" key={index}>
            <Card
              hoverable
              cover={
                photos.length ? (
                  <img
                    className="NewsCard__photo"
                    alt="example"
                    src={photos[0]}
                  />
                ) : (
                  <Empty
                    className="NewsCard__photo"
                    description={CONSTANTS.NO_PHOTO}
                  />
                )
              }
            >
              <Meta
                className="NewsCard__meta"
                title={title}
                description={description}
              />
              <div className="NewsCard__date">{getFormattedDate(date)}</div>
              <Button
                className="NewsCard__btn"
                text={CONSTANTS.MORE}
                fn={() => openModal(_id)}
              />
            </Card>
          </div>
        );
      })
    : null;
};
const mapStateToProps = (state) => ({
  newsPerPage: state.pages.newsPerPage,
  allNews: state.pages.allNews,
  currentNewsPage: state.pages.currentNewsPage,
});

export default connect(mapStateToProps, {
  setModalOpen: ACTIONS.setModalOpen,
})(NewsCard);
