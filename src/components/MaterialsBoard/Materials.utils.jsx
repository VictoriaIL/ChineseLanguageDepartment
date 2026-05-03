import React from 'react';
import { Divider } from 'antd';

import { CONSTANTS } from '../../constants';
import { getFormattedDate } from '../../utils';

const generateCourseWorkTitle = (year) => {
  switch (year) {
    case 4:
      return CONSTANTS.COURSE_WORK;
    case 5:
      return CONSTANTS.GRADUATION_WORK;
    default:
      '';
  }
};

const generateMastersTitle = (year) => {
  return year === 1 ? CONSTANTS.MASTERS_TITLE : '';
};

export const renderStudyMaterials = (path, arr, year, index) => {
  if (arr) {
    const filteredArrayByYear = arr.filter((obj) => obj.year === year);

    switch (path) {
      case 'exam':
        return (
          <div className="Materials__data" key={`${path + index}`}>
            <h4 className="Materials__title">{`Курс ${year}:`}</h4>
            <Divider
              style={{
                borderTop: '1px solid #cc6262',
                margin: '25px 0 15px',
              }}
            />
            {filteredArrayByYear.map(({ url, name, specialization }) => {
              return (
                <p className="Materials__item" key={name}>
                  <a target="_blank" href={url}>{`${name}`}</a>
                  <span>{` ${specialization}`}</span>
                </p>
              );
            })}
          </div>
        );
      case 'diplomas':
        return (
          <div className="Materials__data" key={`${path + index}`}>
            <h4 className="Materials__title">
              {generateCourseWorkTitle(year)}
            </h4>
            {filteredArrayByYear.map(({ url, name, specialization }, index) => {
              return (
                <p className="Materials__item" key={name}>
                  <a className="Materials__name" target="_blank" href={url}>{`${
                    index + 1
                  }. ${name}`}</a>
                  <span>{` ${specialization}`}</span>
                </p>
              );
            })}
          </div>
        );
      case 'masters':
        return (
          <div className="Materials__data" key={`${path + index}`}>
            <h4 className="Materials__title">{generateMastersTitle(year)}</h4>
            {filteredArrayByYear.map(({ url, name, specialization }, index) => {
              return (
                <p className="Materials__item" key={name}>
                  <a className="Materials__name" target="_blank" href={url}>{`${
                    index + 1
                  }. ${name}`}</a>
                  <span>{` ${specialization}`}</span>
                </p>
              );
            })}
          </div>
        );
      case 'books':
        return (
          <div className="Materials__data" key={`${path + index}`}>
            <h4 className="Materials__title">{`Курс ${year}:`}</h4>
            <Divider
              style={{ borderTop: '1px solid #cc6262', margin: '25px 0 15px' }}
            />
            {filteredArrayByYear.map(({ url, name, specialization }) => {
              return (
                <p className="Materials__item" key={name}>
                  <a target="_blank" href={url}>{`${name}`}</a>
                  <span>{` ${specialization}`}</span>
                </p>
              );
            })}
          </div>
        );
      case 'documents':
        return (
          <div className="Materials__data" key={`${path + index}`}>
            <h4 className="Materials__title">{`Курс ${year}:`}</h4>
            <Divider
              style={{ borderTop: '1px solid #cc6262', margin: '25px 0 15px' }}
            />
            {filteredArrayByYear.map(({ url, name, specialization }, index) => {
              return (
                <p className="Materials__item" key={`${name}-${index}`}>
                  <a target="_blank" href={url}>{`${name}`}</a>
                  <span>{` ${specialization}`}</span>
                </p>
              );
            })}
          </div>
        );
      default:
        '';
    }
  }
};

export const renderScienceMaterials = (path, arr) => {
  if (arr) {
    switch (path) {
      case 'publication':
        return (
          <div className="Materials__data">
            <h4 className="Materials__title">Публикации:</h4>
            {arr.map(({ date, published, name, author, place, url }, index) => {
              return (
                <div className="Materials__item" key={name}>
                  <a target="_blank" href={url}>{`${index + 1}. ${name}`}</a>
                  <p>{`${published}`}</p>
                  <p>{`Год издания: ${getFormattedDate(date, path)}`}</p>
                  <p>{`Место издания: ${place}`}</p>
                  <p>{`Автор/ы статьи: ${author}`}</p>
                </div>
              );
            })}
          </div>
        );
      case 'conference':
        return (
          <div className="Materials__data">
            <h4 className="Materials__title">Конференции:</h4>
            {arr.map(({ date, name, place, url }) => {
              return (
                <div className="Materials__item" key={name}>
                  <a target="_blank" href={url}>{`${name}`}</a>
                  <p>{`Дата проведения: ${getFormattedDate(date)}`}</p>
                  <p>{`Место проведения: ${place}`}</p>
                </div>
              );
            })}
          </div>
        );
      case 'collection':
        return (
          <div className="Materials__data">
            <h4 className="Materials__title">Сборники:</h4>
            {arr.map(({ date, published, name, author, place, url }, index) => {
              return (
                <div className="Materials__item" key={name}>
                  <a target="_blank" href={url}>{`${index + 1}. ${name}`}</a>
                  <p>{`${published}`}</p>
                  <p>{` - Год издания: ${getFormattedDate(
                    date,
                    path
                  )}`}</p>
                  <p>{` - Место издания: ${place}`}</p>
                  <p>{` - Автор/ы: ${author}`}</p>
                </div>
              );
            })}
          </div>
        );
      default:
        '';
    }
  }
};

export const isStudyPage = (page) => page === 'study';
export const isSciencePage = (page) => page === 'science';
