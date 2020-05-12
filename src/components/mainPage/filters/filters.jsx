import React, {useState} from 'react';
import s from './filters.module.scss'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

class Filter extends React.Component {

  customTheme = {
    control: (customTheme) => ({
      ...customTheme,
      minHeight: 92,
    }),

    option: (provided, state) => ({
      ...provided,
      borderBottom: '2px dotted green',
      color: state.isSelected ? 'yellow' : 'black',
      backgroundColor: state.isSelected ? 'green' : 'white'
    }),
    dropdownIndicator: (base) => ({
      ...base,
      paddingTop: 0,
      paddingBottom: 0,
    }),
    clearIndicator: (base) => ({
      ...base,
      paddingTop: 0,
      paddingBottom: 0,
    }),
  }
  option = [
    {value: '1', label: '1a'},
    {value: '2', label: '2a'},
    {value: '3', label: '3a'},
    {value: '4', label: 'adsdad'},
    {value: '5', label: 'adsdad'},
    {value: '6', label: 'adsdad'},
    {value: '7', label: 'adsdad'},
  ];
  option1 = [
    {value: '1', label: '4'},
    {value: '2', label: '56'},
    {value: '3', label: '6'},
    {value: '4', label: 'adsdad'},
    {value: '5', label: 'adsdad'},
    {value: '6', label: 'adsdad'},
    {value: '7', label: 'adsdad'},
  ];
  option3 = [
    {value: '1', label: '2кг'},
    {value: '2', label: '3кг'},
    {value: '3', label: '6кг'},
  ];

  constructor() {
    super();
    this.state = {
      animalFilter: [],
      serviceFilter: '',
      animalWeight: ''
    };
  }

  handleSelectChange(name) {
    let resultFilterValue = function(e) {
      let valueAnimalSelect = [];
      if(Array.isArray(e)) {
        for (let i = 0; i < e.length ; i++) {
          valueAnimalSelect.push(e[i].value)
          this.setState({animalFilter: valueAnimalSelect})
        }
      }
      else {
        this.setState({[name]: e.value})
      }
    }.bind(this);
    return resultFilterValue;
  }

  render() {
    return (
      <section className={s.filterContainer}>
        <div className={s.filterWrap}>
          <div className={s.filterContainer_selectWrap}>
            <Select
              options={this.option}
              theme={this.customTheme}
              placeholder="Животные"
              value={this.selectedValue}
              сlassName="select"
              onChange={this.handleSelectChange('animalFilter')}
              width='200px'
              isMulti
              autoFocus
              //isSearchable
            />
          </div>
          <div className={s.filterContainer_selectWrap}>
            <Select
              options={this.option1}
              theme={this.customTheme}
              value={this.selectedValue}
              onChange={this. handleSelectChange('serviceFilter')}
              placeholder="Услуги"
            />
          </div>
          <div className={s.filterContainer_selectWrap}>
            <Select
              options={this.option3}
              theme={this.customTheme}
              value={this.selectedValue}
              placeholder="Вес"
              onChange={this.handleSelectChange('animalWeight')}
            />
          </div>

        </div>
        <div className={s.filterContainer_selectWrap}>
          <button className={s.filterContainer_button}>Поиск</button>
        </div>
      </section>
    )
  }

}

export default Filter;