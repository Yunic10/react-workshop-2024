import React from 'react';
import { Table } from '../components/Table';
import { DATA, HEADER } from '@/configs/data';

export default function Product () {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <Table headers={HEADER} data={DATA} />
    </div>
  );
};

