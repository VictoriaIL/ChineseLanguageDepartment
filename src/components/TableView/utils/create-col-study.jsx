import React from 'react';

import { Button, Tooltip } from 'antd';
import { EditTwoTone } from '@ant-design/icons';

import { EllipseText, generateRandomId } from '../../../utils';
import { CONSTANTS } from '../../../constants';

import { generateMaterial } from './generate-materials';


const {
  sectionName,
  firstYear,
  secondYear,
  thirdYear,
  forthYear,
  fifthYear,
  change_data,
} = CONSTANTS.TABLE_COLUMNS_LABELS_MATERIALS;

export const createColumnsStudyMaterials = (openModal) => [
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
    title: firstYear,
    dataIndex: 'docs',
    key: generateRandomId(),
    render: (docs) => generateMaterial(docs, 1),
  },
  {
    title: secondYear,
    dataIndex: 'docs',
    key: generateRandomId(),
    render: (docs) => generateMaterial(docs, 2),
  },
  {
    title: thirdYear,
    dataIndex: 'docs',
    key: generateRandomId(),
    render: (docs) => generateMaterial(docs, 3),
  },
  {
    title: forthYear,
    dataIndex: 'docs',
    key: generateRandomId(),
    render: (docs) => generateMaterial(docs, 4),
  },
  {
    title: fifthYear,
    dataIndex: 'docs',
    key: generateRandomId(),
    render: (docs) => generateMaterial(docs, 5),
  },
];
