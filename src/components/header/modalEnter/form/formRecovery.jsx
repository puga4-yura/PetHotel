import React from 'react';
import s from './form.module.scss'
import {required} from "../../../../common/validation/validation"
import Select from 'react-select'
import {withRouter} from 'react-router-dom'
import {Field, reduxForm, formValueSelector, FieldArray, Form} from 'redux-form'
import {hideModalCloseAC} from "../../../../redux/header-reducer";


let FormRecovery = (props) => {
  return (
    <form onSubmit={props.handeleSubmit}>
      <h4>Востановления пароля</h4>
      <div>На Вашу адресу відправимо листа
        з посиланням на зміну паролю.</div>
      <div>
        <div className={s.modal_nameField}>Имейл</div>
        <div className={s.modal_containerInput}>
          <Field validate={[required]} type="mail" component="input" name="email" placeholder="email"/>
        </div>
      </div>
      <div className={s.modal_containerButton}>
        <button className={s.modal_buttonEnter}>Получить</button>
      </div>
    </form>

  )
}


//export default reduxForm({form: 'modalEnter'})(ModalEnter);
const RecoveryFormRedux = reduxForm({form: 'modalRecovery'})(FormRecovery);


class FormRecoveryClass extends React.Component {
  render() {
    return (
      <RecoveryFormRedux/>
    )
  }
}

export default withRouter(RecoveryFormRedux);


//export default ModalEnter;