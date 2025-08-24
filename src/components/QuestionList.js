import React, { Component, Fragment } from 'react';
import PurityQuestions from '../PurityQuestions';

class QuestionList extends Component {
  handleCheck = (e, question) => {
    let content = question.content;
    
    if (content === '?') {
      content = 'Sex number lol';
    }
    else {
      content = content.slice(0,-1);
    }

    if (e.target.checked) {
      this.props.onCheck(question.weight, content);
    }
    else {
      this.props.onCheck(question.weight * -1, content);
    }
  }

  selectAll = () => {
    const checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach((checkbox, index) => {
      if (!checkbox.checked) {
        checkbox.checked = true;
        this.handleCheck({ target: checkbox }, PurityQuestions[index]);
      }
    });
  }

  deselectAll = () => {
    const checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        checkbox.checked = false;
        this.handleCheck({ target: checkbox }, PurityQuestions[index]);
      }
    });
  }

  render() {
    return (
      <Fragment>
        <div className='d-flex justify-content-between mb-3'>
          <button 
            type='button' 
            className='btn btn-outline-teal'
            onClick={this.selectAll}
          >
            Select All
          </button>
          <button 
            type='button' 
            className='btn btn-outline-teal'
            onClick={this.deselectAll}
          >
            Deselect All
          </button>
        </div>
        {PurityQuestions.map((question, index) => {
          return (
            <label key={question.id} className='list-group-item list-group-item-action d-flex align-items-center pl-2 shadow-sm'>
              <span key={question.id} className='question-number'>{index + 1}</span>
              <input 
                key={question.id} 
                className='form-check-input mr-3' 
                type='checkbox' 
                value={question.weight} 
                onChange={ (e) => this.handleCheck(e, question) } 
              />
              {question.content}
            </label>
          );
        })}
      </Fragment>
    );
  }

export default QuestionList;