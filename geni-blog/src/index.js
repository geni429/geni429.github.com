import React from 'react';
import { render } from 'react-dom';
import { BlogMain, Post, About } from './containers';

const rootElement = document.getElementById('root');
render(<Post />, rootElement);