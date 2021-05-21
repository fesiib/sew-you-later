import React, { Component } from 'react';

import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import chroma from 'chroma-js';

const colorSelected = "blue";

const propConst = {
    measurementTagsPlaceholder: "Choose Body Parts from left figure",
    measurementTagsNoOptions: (inputValue) => {
        return "Could not find matching Body Part";
    },
    options: [
        { value: 'chocolate', label: 'Chocolate'},
        { value: 'strawberry', label: 'Strawberry'},
        { value: 'vanilla', label: 'Vanilla'}
    ],
    animatedComponents: makeAnimated(),
    styles: {
        control: styles => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = chroma(colorSelected);
            return {
                ...styles,
                backgroundColor: isDisabled
                    ? null
                    : isSelected
                    ? colorSelected
                    : isFocused
                    ? color.alpha(0.1).css()
                    : null,
                color: isDisabled
                    ? '#ccc'
                    : isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : colorSelected,
                    cursor: isDisabled ? 'not-allowed' : 'default',
                    ':active': {
                    ...styles[':active'],
                backgroundColor:
                    !isDisabled && (isSelected ? colorSelected : color.alpha(0.3).css()),
            },
          };
        },
        multiValue: (styles, { data }) => {
            const color = chroma(colorSelected);
            return {
                ...styles,
                backgroundColor: color.alpha(0.1).css(),
            };
        },
        multiValueLabel: (styles, { data }) => ({
            ...styles,
            color: colorSelected,
        }),
        multiValueRemove: (styles, { data }) => ({
            ...styles,
            color: colorSelected,
            ':hover': {
                backgroundColor: colorSelected,
                color: 'white',
            },
        }),
      },      
};

function MeasurementTags(props) {
    return (
        <Select
            options={propConst.options}
            closeMenuOnSelect={false}
            placeholder={propConst.measurementTagsPlaceholder}
            isMulti
            className="card max-w-xl p-5 shadow-md appearance-none rounded py-1 px-3 mt-3 w-full text-black"
            noOptionsMessage={propConst.measurementTagsNoOptions}
            components={propConst.animatedComponents}
            styles={propConst.styles}
        />
    );
}

export default MeasurementTags;