import React from 'react';

import { Button, Tooltip, Tag, Empty } from 'antd';
import { EditTwoTone } from '@ant-design/icons';

import { EllipseText, generateRandomId } from '../../../utils';
import { CONSTANTS } from '../../../constants';

import { generateScienceMaterials } from './generate-science';

const { sectionName, change_data } = CONSTANTS.TABLE_COLUMNS_LABELS_MATERIALS;

export const createColumnsScienceMaterials = (openModal) => [
  {
    title: () => <EditTwoTone twoToneColor="#a52423" />,
    dataIndex: '_id',
    key: generateRandomId(),
    render: (_, record) => (
      <Tooltip placement="right" title={change_data}>
        <Button
          type="dashed"
          size="small"
          icon={<EditTwoTone twoToneColor="#a52423" />}
          onClick={() => openModal(record._id)}
        />
      </Tooltip>
    ),
    align: 'center',
  },
  {
    title: sectionName,
    dataIndex: 'name',
    key: generateRandomId(),
    render: (name) => <span>{EllipseText(name)}</span>,
  },
  {
    title: 'Название',
    dataIndex: 'docs',
    key: generateRandomId(),
    render: (docs) => generateScienceMaterials(docs, 'name'),
  },
  {
    title: 'Автор',
    dataIndex: 'docs',
    key: generateRandomId(),
    render: (docs) => generateScienceMaterials(docs, 'author'),
  },
  {
    title: 'Место',
    dataIndex: 'docs',
    key: generateRandomId(),
    render: (docs) => generateScienceMaterials(docs, 'place'),
  },
  {
    title: 'Опубликовано',
    dataIndex: 'docs',
    key: generateRandomId(),
    render: (docs) => generateScienceMaterials(docs, 'published'),
  },
  {
    title: 'Дата',
    dataIndex: 'docs',
    key: generateRandomId(),
    render: (docs) => generateScienceMaterials(docs, 'date'),
  },
];
