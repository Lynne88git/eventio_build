// import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import './Register.scss'

type UserSubmitForm = {
  firstname: string
  lastname: string
  email: string
  password: string
  repeatpassword: string
}

const Register: React.FC = () => {
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string()
      .required('Last Name is required')
      .min(1, 'Last Name must be at least 1 character'),
    email: Yup.string()
      .required('Email is required')
      .email('Email address is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must not exceed 20 characters'),
    repeatpassword: Yup.string()
      .required('Please confirm your password')
      .oneOf([Yup.ref('password'), null], 'Passwords do not match'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2))
  }
  return (
    <>
      <div className="container">
        <div className="form-container sign-in-container">
          <div className="signup-blurb">
            <p>Already have an account?</p>
            <a className="padding-y-sm" href="#S">
              SIGN IN
            </a>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h3 className="form-heading">Get started absolutely free.</h3>
              <p className="muted">Enter your details below.</p>
            </div>
            <div className="feedback-error">{errors.firstname?.message}</div>
            <input
              type="text"
              placeholder="First Name"
              {...register('firstname')}
              className={`form-field ${errors.firstname ? 'is-invalid' : ''}`}
            />
            <div className="feedback-error">{errors.lastname?.message}</div>
            <input
              type="text"
              placeholder="Last Name"
              {...register('lastname')}
              className={`form-field ${errors.lastname ? 'is-invalid' : ''}`}
            />
            <div className="feedback-error">{errors.email?.message}</div>
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
              className={`form-field ${errors.email ? 'is-invalid' : ''}`}
            />
            <div className="feedback-error">{errors.password?.message}</div>
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
              className={`form-field ${errors.password ? 'is-invalid' : ''}`}
            />
            <div className="feedback-error">
              {errors.repeatpassword?.message}
            </div>
            <input
              type="password"
              placeholder="Repeat password"
              {...register('repeatpassword')}
              className={`form-field ${
                errors.repeatpassword ? 'is-invalid' : ''
              }`}
            />
            <button type="submit" className="margin-x-xl">
              Sign Up
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="header-logo"></div>
            <div className="overlay-panel">
              <div className="overlay-panel-text">
                <h1>
                  &quot;Great, kid. Don&apos;t <br />
                  get cocky.&quot;
                </h1>
                <span></span>
                <p>Han Solo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
