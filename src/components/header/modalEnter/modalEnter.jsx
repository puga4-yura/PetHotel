import React from 'react';
import s from './modalEnter.module.scss'
import {required} from "../../../common/validation/validation"
import Select from 'react-select'
import {withRouter} from 'react-router-dom'
import {Field, reduxForm, formValueSelector, FieldArray, Form} from 'redux-form'
import FormEnterClass from "./form/formLogin";
import FormRecoveryClass from "./form/formRecovery";


let ModalEnter = (props) => {


  let hide = () => {
    props.hideModalCloseAC()
  };

  return(
    <div className={s.modal_overflow}>
      <div className={s.modal_container}>
        <div className={s.modal_containerImg}>
          <div className={s.modal_imgLogo}></div>
        </div>
        <div className={s.modal_containerForm}>
          <div className={s.modal_containerClose}>
            <span onClick={hide} className={s.modal_buttonClose}></span>
          </div>
          {!false ? <FormEnterClass/> : <FormRecoveryClass />}

        </div>
      </div>
    </div>
  )
}

export default ModalEnter;

/*//export default reduxForm({form: 'modalEnter'})(ModalEnter);
const LoginFormRedux = reduxForm({form: 'modalEnter'})(ModalEnter);


class EnterUsersClass extends React.Component {

/!*   fieldChange = (event) => {
     debugger
     const name = event.target.name;
     console.log(name)
     this.textInfo[event.target.name] = event.target.value;
     const value = event.target.value;
   };*!/
/!*
  const onSubmit = () => {

  }*!/
  render () {
    return (
      <LoginFormRedux
          state={this.state}
        //onSubmit={onSubmit}
        //fieldChange={this.fieldChange.bind(this)}
      />
    )
  }
}



export default withRouter(EnterUsersClass);*/


//export default ModalEnter;