import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import EditorComponent from './Editor.js';
import EditorBL from '../../../../editor/Editor';

jest.mock('../../../../editor/Editor', () => jest.fn())

describe('<Editor/>', () => {
    it('should create a monaco editor only when first rendered', () => {
        expect(EditorBL).not.toHaveBeenCalled();
        render(<EditorComponent a={0} />)
        expect(EditorBL).toHaveBeenCalledTimes(1);
    });
});