import React from 'react';
import s from './form.module.scss'
import {required} from "../../../../common/validation/validation"
import Select from 'react-select'
import {withRouter} from 'react-router-dom'
import {Field, reduxForm, formValueSelector, FieldArray, Form} from 'redux-form'
import {hideModalCloseAC} from "../../../../redux/header-reducer";


let FormEnter = (props) => {
  return (
    <form onSubmit={props.handeleSubmit}>
      <h4>Зайти</h4>
      <div>
        <div className={s.modal_nameField}>Введите имейл</div>
        <div className={s.modal_containerInput}>
          <Field validate={[required]} type="mail" component="input" name="email" placeholder="email"/>
        </div>
      </div>
      <div>
        <div className={s.modal_nameField}>Введите пароль</div>
        <div className={s.modal_containerInput}>
          <Field validate={required} type="password" component="input" name="password" placeholder="password"/>
          <span className={s.modal_formShowPassword}></span>
        </div>

      </div>
      <div className={s.modal_textHelp}>Забыли пароль?</div>
      <div className={s.modal_containerButton}>
        <button className={s.modal_buttonEnter}>Bход</button>
        <div className={s.modal_buttonRegistration}>Peгистрация</div>
      </div>
      <div className={s.modal_socialConatainer}>
        <div className={s.modal_socialTitle}>Вход через соц.сети</div>
        <div className={s.modal_containerIcon}>
          <span className={s.modal_iconFacebook}></span>
          <span className={s.modal_iconGoogle}></span>
        </div>
      </div>
    </form>
  )
}


//export default reduxForm({form: 'modalEnter'})(ModalEnter);
const LoginFormRedux = reduxForm({form: 'modalEnter'})(FormEnter);


class FormEnterClass extends React.Component {

  onSubmit = (props) => {
    console.log(this.props)
  }

  render() {
    return (
      <LoginFormRedux onSubmit={this.onSubmit}/>
    )
  }
}

export default withRouter(FormEnterClass);


//export default ModalEnter;