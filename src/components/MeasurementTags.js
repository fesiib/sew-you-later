import React, { Component, useEffect } from 'react';

import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import chroma from 'chroma-js';
import { allBPs, addBP, removeBP, resetBP, IMMUTABLE} from '../reducers/measurements';
import {useDispatch, useSelector } from 'react-redux';

const colorSelected = "blue";

const propConst = {
    measurementTagsPlaceholder: "Choose Body Parts from left figure",
    noMatchingBodyPart: "Could not find matching Body Part",
};

const propUtils = {
    measurementTagsNoOptions: (inputValue) => {
        return propConst.noMatchingBodyPart;
    },
    animatedComponents: makeAnimated(),
    options: [
        {value: 'chocoalte', label: 'choco'},
        {value: 'vanilla', label: 'vanilla'},
    ],
    styles: {
        control: styles => ({ 
            ...styles,
            backgroundColor: 'white', 
            minHeight: '10em',
            display: 'flex',
            alignItems: 'flex-start',
        }),
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
    const dispatch = useDispatch();
    
    const optionsBP = allBPs.slice(1).map((label, index) => {
        let value = (index+1).toString();
        return {
            value,
            label,
        };
    });

    const {
        bodyParts,
        status
    } = useSelector(state => state.measurementsReducer);

    const selectedBP = bodyParts.map((value, index) => {
        return {
            value: value.toString(),
            label: allBPs[value],
        };
    });

    const selectorRef = React.createRef();

    const _addBP = (value) => {
        dispatch(addBP(value));
    };

    const _removeBP = (value) => {
        dispatch(removeBP(value));
    };

    const _resetBP = () => {
        dispatch(resetBP());
    }

    const onChange = (selectedOptions, action) => {
        console.log(action);
        switch(action.action) {
            case 'set-value':
            case 'select-option': {
                if (action.option == undefined) {
                    break;
                }
                _addBP(parseInt(action.option.value));
                break;
            }
            case 'deselect-option':
            case 'pop-value':
            case 'remove-value': {
                if (action.removedValue == undefined) {
                    break;
                }
                _removeBP(parseInt(action.removedValue.value));
                break;
            }
            case 'clear': {
                if (action.removedValues == undefined) {
                    break;
                }
                for (let option of action.removedValues) {
                    if (option != undefined) {
                        _removeBP(parseInt(option.value));
                    }
                }
            }
        }
    }

    return (
        <Select
            ref={selectorRef}
            options={optionsBP}
            closeMenuOnSelect={false}
            placeholder={propConst.measurementTagsPlaceholder}
            isMulti
            value={selectedBP}
            onChange={onChange}
            isClearable={true}
            isDisabled={(status == IMMUTABLE || props.isPrevOrder)}
            className="max-w-xl m-10"
            noOptionsMessage={propUtils.measurementTagsNoOptions}
            components={propUtils.animatedComponents}
            styles={propUtils.styles}

        />
    );
}

export default MeasurementTags;