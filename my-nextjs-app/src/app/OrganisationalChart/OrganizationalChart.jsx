import React from 'react';
import ReactFlow, { MiniMap, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    data: { label: <strong>Andrew Rose (CEO)</strong> },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Advisory Board' },
    position: { x: 250, y: 100 },
  },
  {
    id: '3',
    data: { label: 'COO' },
    position: { x: 250, y: 200 },
  },
  {
    id: '4',
    data: { label: 'Global HR' },
    position: { x: 250, y: 300 },
  },
  {
    id: '5',
    data: { label: 'Director of Operations' },
    position: { x: 250, y: 400 },
  },
  {
    id: '6',
    data: { label: <strong>Tanuj Sharma (CTO)</strong> },
    position: { x: 100, y: 500 },
  },
  {
    id: '7',
    data: { label: <strong>Bo Shi (CFO)</strong> },
    position: { x: 400, y: 500 },
  },
  {
    id: '8',
    data: { label: 'Network, Infrastructure and Data Security' },
    position: { x: 100, y: 600 },
  },
  {
    id: '9',
    data: { label: 'Front-End User Experience' },
    position: { x: 250, y: 600 },
  },
  {
    id: '10',
    data: { label: 'AI and Data Analysis' },
    position: { x: 400, y: 600 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
  // From Director of Operations to both CTO and CFO
  { id: 'e5-6', source: '5', target: '6', animated: true },
  { id: 'e5-7', source: '5', target: '7', animated: true },
  // From CTO branch
  { id: 'e6-8', source: '6', target: '8', animated: true },
  { id: 'e5-9', source: '5', target: '9', animated: true },
  // From CFO branch
  { id: 'e7-10', source: '7', target: '10', animated: true },
]; 

export function OrganizationalChart() {
  return (
    <div style={{ height: 700, border: '1px solid #ddd', borderRadius: 4 }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default OrganizationalChart;