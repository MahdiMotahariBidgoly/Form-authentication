/** @format */

// /** @format */
// import { useFormik } from 'formik'

// const initialValues = {
//   name: '',
//   email: '',
//   password: ''
// }
// const SignUpForm = () => {
//   const formik = useFormik({
//     initialValues
//   })
//   console.log(formik.values)

//   const submitHandler = e => {
//     e.preventDefault()
//   }
//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <div className='formControl'>
//           <label>Name</label>
//           <input
//             type='text'
//             onChange={formik.handleChange}
//             value={formik.values.name}
//             name='name'
//           />
//         </div>
//         <div className='formControl'>
//           <label>Email</label>
//           <input
//             type='text'
//             onChange={formik.handleChange}
//             value={formik.values.email}
//             name='email'
//           />
//         </div>
//         <div className='formControl'>
//           <label>Password</label>
//           <input
//             type='text'
//             onChange={formik.handleChange}
//             value={formik.values.password}
//             name='password'
//           />
//         </div>
//         <button>submit</button>
//       </form>
//     </div>
//   )
// }

// export default SignUpForm

//163
// import { useFormik } from 'formik'

// const initialValues = {
//   name: '',
//   email: '',
//   password: ''
// }
// const onSubmit = values => {
//   console.log(values)
// }
// const validate = values => {
//   let errors = {}
//   if (!values.name) errors.name = 'Name is Required'
//   if (!values.name) {
//     errors.email = 'email is Reqired'
//   }
//   if (!values.password) errors.password = 'password is required'

//   return errors
// }
// const SignUpForm = () => {
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     validate
//   })
//   console.log('Form Errors', formik.errors)
//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <div className='formControl'>
//           <label>Name</label>
//           <input
//             type='text'
//             onChange={formik.handleChange}
//             value={formik.values.name}
//             name='name'
//           />
//           {formik.errors.name && (
//             <div className='error'>{formik.errors.name}</div>
//           )}
//         </div>
//         <div className='formControl'>
//           <label>Email</label>
//           <input
//             type='text'
//             onChange={formik.handleChange}
//             value={formik.values.email}
//             name='email'
//           />
//           {formik.errors.email && (
//             <div className='error'>{formik.errors.email}</div>
//           )}
//         </div>
//         <div className='formControl'>
//           <label>Password</label>
//           <input
//             type='text'
//             onChange={formik.handleChange}
//             value={formik.values.password}
//             name='password'
//           />
//           {formik.errors.password && (
//             <div className='error'>{formik.errors.password}</div>
//           )}
//         </div>
//         <button type='submit'>submit</button>
//       </form>
//     </div>
//   )
// }

// export default SignUpForm
//165
// import { useFormik } from 'formik'

// const initialValues = {
//   name: '',
//   email: '',
//   password: ''
// }
// const onSubmit = values => {
//   console.log(values)
// }
// const validate = values => {
//   let errors = {}
//   if (!values.name) errors.name = 'Name is Required'
//   if (!values.name) {
//     errors.email = 'email is Reqired'
//   }
//   if (!values.password) errors.password = 'password is required'

//   return errors
// }
// const SignUpForm = () => {
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     validate
//   })
//   console.log('Form Visited', formik.touched)
//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <div className='formControl'>
//           <label>Name</label>
//           <input
//             type='text'
//             onChange={formik.handleChange}
//             value={formik.values.name}
//             name='name'
//             onBlur={formik.handleBlur}
//           />
//           {formik.errors.name && formik.touched.name && (
//             <div className='error'>{formik.errors.name}</div>
//           )}
//         </div>
//         <div className='formControl'>
//           <label>Email</label>
//           <input
//             type='text'
//             onChange={formik.handleChange}
//             value={formik.values.email}
//             name='email'
//             onBlur={formik.handleBlur}
//           />
//           {formik.errors.email && formik.touched.email && (
//             <div className='error'>{formik.errors.email}</div>
//           )}
//         </div>
//         <div className='formControl'>
//           <label>Password</label>
//           <input
//             type='text'
//             onChange={formik.handleChange}
//             value={formik.values.password}
//             name='password'
//             onBlur={formik.handleBlur}
//           />
//           {formik.errors.password && formik.touched.password && (
//             <div className='error'>{formik.errors.password}</div>
//           )}
//         </div>
//         <button type='submit'>submit</button>
//       </form>
//     </div>
//   )
// }

// export default SignUpForm

//166 to 171
// import { useState } from 'react'

// import { useFormik } from 'formik'
// import * as Yup from 'yup'
// const savedData = {
//   name: 's.mahdi',
//   email: 'mahdiMotahhari.b@gmail.com',
//   phoneNumber: '09121112299',
//   passwordConfirm: 'Mahdi1@1',
//   password: 'Mahdi1@1',
//   gender: '0'
// }
// const initialValues = {
//   name: '',
//   email: '',
//   phoneNumber: '',
//   passwordConfirm: '',
//   password: '',
//   gender: ''
// }
// const onSubmit = values => {
//   console.log(values)
// }
// const validationSchema = Yup.object({
//   name: Yup.string()
//     .required('name is Required')
//     .min(6, 'Name length is not valid'),
//   email: Yup.string()
//     .email('Invali Email Format')
//     .required('email is Required'),
//   phoneNumber: Yup.string()
//     .required('phoneNumber is Required')
//     .matches(/^[0-9]{11}$/, 'Invalid Phone Number')
//     .nullable(),
//   password: Yup.string()
//     .required('password is Required')
//     .matches(
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//       'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
//     ),
//   passwordConfirm: Yup.string()
//     .required('password Confirmation is required')
//     .oneOf([Yup.ref('password'), null], 'Passwords must match'),
//   gender: Yup.string().required(' gendered is required')
// })

// const SignUpForm = () => {
//   const [formValues, setFormValues] = useState(null)

//   const formik = useFormik({
//     initialValues: formValues || initialValues,
//     onSubmit,
//     validationSchema,
//     validateOnMount: true,
//     enableReinitialize: true
//   })
//   console.log('Form Visited', formik.touched)
//   console.log(formik)

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <div className='formControl'>
//           <label htmlFor='name'>Name</label>
//           <input
//             id='name'
//             type='text'
//             {...formik.getFieldProps('name')}
//             name='name'
//           />
//           {formik.errors.name && formik.touched.name && (
//             <div className='error'>{formik.errors.name}</div>
//           )}
//         </div>
//         <div className='formControl'>
//           <label htmlFor='email'>Email</label>
//           <input
//             id='email'
//             type='text'
//             {...formik.getFieldProps('email')}
//             name='email'
//           />
//           {formik.errors.email && formik.touched.email && (
//             <div className='error'>{formik.errors.email}</div>
//           )}
//         </div>
//         <div className='formControl'>
//           <label htmlFor='phonenumber'>phoneNumber</label>
//           <input
//             id='phonenumber'
//             type='text'
//             {...formik.getFieldProps('phoneNumber')}
//             name='phoneNumber'
//           />
//           {formik.errors.phoneNumber && formik.touched.phoneNumber && (
//             <div className='error'>{formik.errors.phoneNumber}</div>
//           )}
//         </div>
//         <div className='formControl'>
//           <label htmlFor='Password'>Password</label>
//           <input
//             id='Password'
//             type='text'
//             {...formik.getFieldProps('password')}
//             name='password'
//           />
//           {formik.errors.password && formik.touched.password && (
//             <div className='error'>{formik.errors.password}</div>
//           )}
//         </div>
//         <div className='formControl'>
//           <label htmlFor='PasswordConfirm'>password Confirm</label>
//           <input
//             id='PasswordConfirm'
//             type='text'
//             {...formik.getFieldProps('passwordConfirm')}
//             name='passwordConfirm'
//           />
//           {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
//             <div className='error'>{formik.errors.passwordConfirm}</div>
//           )}
//         </div>
//         <div className='formControl'>
//           <input
//             type='radio'
//             id='0'
//             name='gender'
//             value='0'
//             onChange={formik.handleChange}
//             checked={formik.values.gender === '0'}
//           />
//           <label htmlFor='0'>Male</label>
//           <input
//             type='radio'
//             id='1'
//             name='gender'
//             value='1'
//             onChange={formik.handleChange}
//             checked={formik.values.gender === '1'}
//           />
//           <label htmlFor='1'>Female</label>
//           {formik.errors.gender && formik.touched.gender && (
//             <div className='error'>{formik.errors.gender}</div>
//           )}
//         </div>

//         <button onClick={() => setFormValues(savedData)}>Load Data</button>
//         <button type='submit' disabled={!formik.isValid}>
//           submit
//         </button>
//       </form>
//     </div>
//   )
// }

// export default SignUpForm

//172
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'

// const initialValues = {
//   name: '',
//   email: '',
//   phoneNumber: '',
//   passwordConfirm: '',
//   password: '',
//   gender: ''
// }
// const onSubmit = values => {
//   console.log(values)
// }
// const validationSchema = Yup.object({
//   name: Yup.string()
//     .required('name is Required')
//     .min(6, 'Name length is not valid'),
//   email: Yup.string()
//     .email('Invali Email Format')
//     .required('email is Required'),
//   phoneNumber: Yup.string()
//     .required('phoneNumber is Required')
//     .matches(/^[0-9]{11}$/, 'Invalid Phone Number')
//     .nullable(),
//   password: Yup.string()
//     .required('password is Required')
//     .matches(
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//       'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
//     ),
//   passwordConfirm: Yup.string()
//     .required('password Confirmation is required')
//     .oneOf([Yup.ref('password'), null], 'Passwords must match'),
//   gender: Yup.string().required(' gendered is required')
// })

// const SignUpForm = () => {
//   const [formValues, setFormValues] = useState(null)

//   const formik = useFormik({
//     initialValues: formValues || initialValues,
//     onSubmit,
//     validationSchema,
//     validateOnMount: true,
//     enableReinitialize: true
//   })
//   console.log('Form Visited', formik.touched)
//   console.log(formik)

//   useEffect(() => {
//     axios
//       .get('http://localhost:3001/users/1')
//       .then(res => setFormValues(res.data))
//       .catch(err => console.log(err))
//   }, [])
//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <div className='formControl'>
//           <label htmlFor='name'>Name</label>
//           <input
//             id='name'
//             type='text'
//             {...formik.getFieldProps('name')}
//             name='name'
//           />
//           {formik.errors.name && formik.touched.name && (
//             <div className='error'>{formik.errors.name}</div>
//           )}
//         </div>
//         <div className='formControl'>
//           <label htmlFor='email'>Email</label>
//           <input
//             id='email'
//             type='text'
//             {...formik.getFieldProps('email')}
//             name='email'
//           />
//           {formik.errors.email && formik.touched.email && (
//             <div className='error'>{formik.errors.email}</div>
//           )}
//         </div>
//         <div className='formControl'>
//           <label htmlFor='phonenumber'>phoneNumber</label>
//           <input
//             id='phonenumber'
//             type='text'
//             {...formik.getFieldProps('phoneNumber')}
//             name='phoneNumber'
//           />
//           {formik.errors.phoneNumber && formik.touched.phoneNumber && (
//             <div className='error'>{formik.errors.phoneNumber}</div>
//           )}
//         </div>
//         <div className='formControl'>
//           <label htmlFor='Password'>Password</label>
//           <input
//             id='Password'
//             type='text'
//             {...formik.getFieldProps('password')}
//             name='password'
//           />
//           {formik.errors.password && formik.touched.password && (
//             <div className='error'>{formik.errors.password}</div>
//           )}
//         </div>
//         <div className='formControl'>
//           <label htmlFor='PasswordConfirm'>password Confirm</label>
//           <input
//             id='PasswordConfirm'
//             type='text'
//             {...formik.getFieldProps('passwordConfirm')}
//             name='passwordConfirm'
//           />
//           {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
//             <div className='error'>{formik.errors.passwordConfirm}</div>
//           )}
//         </div>
//         <div className='formControl'>
//           <input
//             type='radio'
//             id='0'
//             name='gender'
//             value='0'
//             onChange={formik.handleChange}
//             checked={formik.values.gender === '0'}
//           />
//           <label htmlFor='0'>Male</label>
//           <input
//             type='radio'
//             id='1'
//             name='gender'
//             value='1'
//             onChange={formik.handleChange}
//             checked={formik.values.gender === '1'}
//           />
//           <label htmlFor='1'>Female</label>
//           {formik.errors.gender && formik.touched.gender && (
//             <div className='error'>{formik.errors.gender}</div>
//           )}
//         </div>

//         <button type='submit' disabled={!formik.isValid}>
//           submit
//         </button>
//       </form>
//     </div>
//   )
// }

// export default SignUpForm

//173 & 175
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'
// import Input from './common/Input'
// import RadioInput from './common/RadioInput'
// import Select from './common/SelectComponent'
// const radioOptions = [
//   { label: 'male', value: '0' },
//   { label: 'female', value: '1' }
// ]
// const selectOptions = [
//   { label: 'select nationality...', value: '' },
//   { label: 'Iran', value: 'IR' },
//   { label: 'Germany', value: 'GER' },
//   { label: 'Russia', value: 'Russia' }
// ]

// const initialValues = {
//   name: '',
//   email: '',
//   phoneNumber: '',
//   passwordConfirm: '',
//   password: '',
//   gender: '',
//   nationality: ''
// }
// const onSubmit = values => {
//   console.log(values)
// }
// const validationSchema = Yup.object({
//   name: Yup.string()
//     .required('name is Required')
//     .min(6, 'Name length is not valid'),
//   email: Yup.string()
//     .email('Invali Email Format')
//     .required('email is Required'),
//   phoneNumber: Yup.string()
//     .required('phoneNumber is Required')
//     .matches(/^[0-9]{11}$/, 'Invalid Phone Number')
//     .nullable(),
//   password: Yup.string()
//     .required('password is Required')
//     .matches(
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//       'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
//     ),
//   passwordConfirm: Yup.string()
//     .required('password Confirmation is required')
//     .oneOf([Yup.ref('password'), null], 'Passwords must match'),
//   gender: Yup.string().required(' gendered is required'),
//   nationality: Yup.string().required(' select Nationality ')
// })

// const SignUpForm = () => {
//   const [formValues, setFormValues] = useState(null)

//   const formik = useFormik({
//     initialValues: formValues || initialValues,
//     onSubmit,
//     validationSchema,
//     validateOnMount: true,
//     enableReinitialize: true
//   })
//   console.log('Form Visited', formik.touched)
//   console.log(formik)

//   useEffect(() => {
//     axios
//       .get('http://localhost:3001/users/1')
//       .then(res => setFormValues(res.data))
//       .catch(err => console.log(err))
//   }, [])
//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <Input formik={formik} name='name' label='Name' />
//         <Input formik={formik} name='email' label='Email' />
//         <Input formik={formik} name='phoneNumber' label='Phone Number' />
//         <Input
//           formik={formik}
//           name='password'
//           label='Password'
//           type='password'
//         />
//         <Input
//           formik={formik}
//           name='passwordConfirm'
//           label='Password confirm'
//           type='password'
//         />

//         <RadioInput formik={formik} radioOptions={radioOptions} name='gender' />
//         <Select
//           formik={formik}
//           selectOptions={selectOptions}
//           name='nationality'
//         />

//         <button type='submit' disabled={!formik.isValid}>
//           submit
//         </button>
//       </form>
//     </div>
//   )
// }

// export default SignUpForm

//176

// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'
// import Input from './common/Input'
// import RadioInput from './common/RadioInput'
// import Select from './common/SelectComponent'
// import CheckBox from './common/CheckBoxInput'
// const checkBoxOptions = [
//   { label: 'React.js', value: 'React' },
//   { label: 'Vue.js', value: 'Vue' }
// ]
// const radioOptions = [
//   { label: 'male', value: '0' },
//   { label: 'female', value: '1' }
// ]
// const selectOptions = [
//   { label: 'select nationality...', value: '' },
//   { label: 'Iran', value: 'IR' },
//   { label: 'Germany', value: 'GER' },
//   { label: 'Russia', value: 'Russia' }
// ]

// const initialValues = {
//   name: '',
//   email: '',
//   phoneNumber: '',
//   passwordConfirm: '',
//   password: '',
//   gender: '',
//   nationality: '',
//   interests: [],
//   terms: false
// }
// const onSubmit = values => {
//   console.log(values)
// }
// const validationSchema = Yup.object({
//   name: Yup.string()
//     .required('name is Required')
//     .min(6, 'Name length is not valid'),
//   email: Yup.string()
//     .email('Invali Email Format')
//     .required('email is Required'),
//   phoneNumber: Yup.string()
//     .required('phoneNumber is Required')
//     .matches(/^[0-9]{11}$/, 'Invalid Phone Number')
//     .nullable(),
//   password: Yup.string()
//     .required('password is Required')
//     .matches(
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//       'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
//     ),
//   passwordConfirm: Yup.string()
//     .required('password Confirmation is required')
//     .oneOf([Yup.ref('password'), null], 'Passwords must match'),
//   gender: Yup.string().required(' gendered is required'),
//   nationality: Yup.string().required(' select Nationality '),
//   interests: Yup.array().min(1).required(' at least one experties '),
//   terms: Yup.boolean()
//     .required('The Terms and Condition must be accepted')
//     .oneOf([true], 'Must Accept Terms and Conditions')
// })

// const SignUpForm = () => {
//   const [formValues, setFormValues] = useState(null)

//   const formik = useFormik({
//     initialValues: formValues || initialValues,
//     onSubmit,
//     validationSchema,
//     validateOnMount: true,
//     enableReinitialize: true
//   })
//   console.log('Form Visited', formik.touched)
//   console.log(formik)

//   useEffect(() => {
//     axios
//       .get('http://localhost:3001/users/1')
//       .then(res => setFormValues(res.data))
//       .catch(err => console.log(err))
//   }, [])
//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <Input formik={formik} name='name' label='Name' />
//         <Input formik={formik} name='email' label='Email' />
//         <Input formik={formik} name='phoneNumber' label='Phone Number' />
//         <Input
//           formik={formik}
//           name='password'
//           label='Password'
//           type='password'
//         />
//         <Input
//           formik={formik}
//           name='passwordConfirm'
//           label='Password confirm'
//           type='password'
//         />

//         <RadioInput formik={formik} radioOptions={radioOptions} name='gender' />
//         <Select
//           formik={formik}
//           selectOptions={selectOptions}
//           name='nationality'
//         />
//         <CheckBox
//           formik={formik}
//           checkBoxOptions={checkBoxOptions}
//           name='interests'
//         />
//         <input
//           type='checkbox'
//           id='terms'
//           name='terms'
//           value={true}
//           onChange={formik.handleChange}
//           checked={formik.values.terms}
//         />
//         <label htmlFor='terms'>Terms and Conditions</label>

//         {formik.errors.terms && formik.touched.terms && (
//           <div className='error'>{formik.errors.terms}</div>
//         )}
//         <button type='submit' disabled={!formik.isValid}>
//           submit
//         </button>
//       </form>
//     </div>
//   )
// }

// export default SignUpForm

//177
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from './common/Input'
import RadioInput from './common/RadioInput'
import Select from './common/SelectComponent'
import CheckBox from './common/CheckBoxInput'
const checkBoxOptions = [
  { label: 'React.js', value: 'React' },
  { label: 'Vue.js', value: 'Vue' }
]
const radioOptions = [
  { label: 'male', value: '0' },
  { label: 'female', value: '1' }
]
const selectOptions = [
  { label: 'select nationality...', value: '' },
  { label: 'Iran', value: 'IR' },
  { label: 'Germany', value: 'GER' },
  { label: 'Russia', value: 'Russia' }
]

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  passwordConfirm: '',
  password: '',
  gender: '',
  nationality: '',
  interests: [],
  terms: false
}
const onSubmit = values => {
  console.log({ ...values, newData: '6 may 1995' })
  axios
    .post('http://localhost:3001/users', values)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}
const validationSchema = Yup.object({
  name: Yup.string()
    .required('name is Required')
    .min(6, 'Name length is not valid'),
  email: Yup.string()
    .email('Invali Email Format')
    .required('email is Required'),
  phoneNumber: Yup.string()
    .required('phoneNumber is Required')
    .matches(/^[0-9]{11}$/, 'Invalid Phone Number')
    .nullable(),
  password: Yup.string()
    .required('password is Required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  passwordConfirm: Yup.string()
    .required('password Confirmation is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  gender: Yup.string().required(' gendered is required'),
  nationality: Yup.string().required(' select Nationality '),
  interests: Yup.array().min(1).required(' at least one experties '),
  terms: Yup.boolean()
    .required('The Terms and Condition must be accepted')
    .oneOf([true], 'Must Accept Terms and Conditions')
})

const SignUpForm = () => {
  const [formValues, setFormValues] = useState(null)

  const formik = useFormik({
    initialValues: formValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true
  })
  console.log('Form Visited', formik.touched)
  console.log(formik)

  useEffect(() => {
    axios
      .get('http://localhost:3001/users/1')
      .then(res => setFormValues(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name='name' label='Name' />
        <Input formik={formik} name='email' label='Email' />
        <Input formik={formik} name='phoneNumber' label='Phone Number' />
        <Input
          formik={formik}
          name='password'
          label='Password'
          type='password'
        />
        <Input
          formik={formik}
          name='passwordConfirm'
          label='Password confirm'
          type='password'
        />

        <RadioInput formik={formik} radioOptions={radioOptions} name='gender' />
        <Select
          formik={formik}
          selectOptions={selectOptions}
          name='nationality'
        />
        <CheckBox
          formik={formik}
          checkBoxOptions={checkBoxOptions}
          name='interests'
        />
        <input
          type='checkbox'
          id='terms'
          name='terms'
          value={true}
          onChange={formik.handleChange}
          checked={formik.values.terms}
        />
        <label htmlFor='terms'>Terms and Conditions</label>

        {formik.errors.terms && formik.touched.terms && (
          <div className='error'>{formik.errors.terms}</div>
        )}
        <button type='submit' disabled={!formik.isValid}>
          submit
        </button>
      </form>
    </div>
  )
}

export default SignUpForm
