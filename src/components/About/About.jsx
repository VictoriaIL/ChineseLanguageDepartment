import React, { useEffect } from 'react';
import { useHttp } from '../../utils';
import { connect } from 'react-redux';

import { Spin } from 'antd';

import './About.scss';

import { URLS, CONSTANTS } from '../../constants';

import Label from '../Label';

import { ACTIONS } from '../../store/actions/creators';

const About = ({ setFetchedData, data, path, history, setHistory }) => {
  const { request } = useHttp();
  const { ABOUT_PAGE } = CONSTANTS;

  useEffect(() => {
    const oldPage = history.find((item) => item.page === path);
    if (oldPage) {
      setFetchedData({ ...oldPage });
    } else {
      request(`${URLS.SERVER_URL}${path}`)
        .then((response) => {
          setFetchedData(response);
          setHistory(history, response);
        })
        .catch((e) => {});
    }
  }, []);

  const {
    label,
    heading,
    mainDescription,
    featuresTitle,
    featuresInfo,
    detailsTitle,
    detailsInfo,
    photo,
    addressPlace,
    addressRoom,
    mailName,
    email,
    mobile,
    personEmail,
    personWebsite,
  } = data;

  const aboutElement = (
    <div className="About__content">
      <div className="About__left">
        <Label text={label} />
        <h3 className="About__title">{heading}</h3>

        {mainDescription && (
          <div className="About__description_info">{mainDescription}</div>
        )}

        {featuresTitle && (
          <div className="About__features">
            <h3 className="About__features_title">{featuresTitle}</h3>
            {featuresInfo && (
              <div className="About__features_info">{featuresInfo}</div>
            )}
          </div>
        )}
      </div>

      <div className="About__right">
        {photo && (
          <div className="About__photo">
            <img src={photo} alt={detailsInfo} />
          </div>
        )}

        {(detailsTitle || detailsInfo) && (
          <div className="About__contacts">
            <h3 className="About__contacts_title">
              {detailsTitle || 'Заведующий кафедрой'}
            </h3>
            {detailsInfo && (
              <p className="About__contacts_name">{detailsInfo}</p>
            )}
          </div>
        )}

        {(personEmail || personWebsite) && (
          <>
            <div className="About__divider" />
            <div className="About__contacts">
              <h3 className="About__contacts_subtitle">Контакты: </h3>

              {personEmail && (
                <p className="About__contacts_item">
                  <span>Личный e-mail:</span>{' '}
                  <a href={`mailto:${personEmail}`}>{personEmail}</a>
                </p>
              )}

              {personWebsite && (
                <p className="About__contacts_item">
                  <span>Сайт:</span>{' '}
                  <a href={personWebsite} target="_blank" rel="noopener noreferrer">
                    {personWebsite}
                  </a>
                </p>
              )}
            </div>
          </>
        )}

        {(addressPlace || email || mobile) && (
          <>
            <div className="About__divider" />
            <div className="About__contacts">
              <h3 className="About__contacts_subtitle">Кафедра: </h3>

              {addressPlace && (
                <p className="About__contacts_item">
                  <span>Адрес:</span> {addressPlace}
                </p>
              )}

              {email && (
                <p className="About__contacts_item">
                  <span>{mailName || 'E-mail:'}</span>{' '}
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              )}

              {mobile && (
                <p className="About__contacts_item">
                  <span>Телефон:</span>{' '}
                  <a href={`tel:${mobile}`}>{mobile}</a>
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="About container page">
      {data.page === ABOUT_PAGE ? aboutElement : <Spin size="large" />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.pages.data,
  history: state.pages.history,
});

export default connect(mapStateToProps, {
  setModalOpen: ACTIONS.setModalOpen,
  setFetchedData: ACTIONS.setFetchedData,
  setHistory: ACTIONS.setHistory,
})(About);
