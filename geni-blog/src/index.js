import React from 'react';
import { render } from 'react-dom';
import { BlogMain, Post, About } from './containers';
import './style/index.css';

const rootElement = document.getElementById('root');
render(<About />, rootElement);