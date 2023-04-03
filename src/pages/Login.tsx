import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../redux/configStore'
import { useFormik } from 'formik';
import { loginApp } from '../redux/userReducer/userReducer';

type Props = {}

export default function Login({ }: Props) {
  const dispatch: DispatchType = useDispatch();
  const formik = useFormik({
    initialValues: {
      "email": "",
      "password": ""
    },
    onSubmit: (values) => {
      console.log(values)
      dispatch(loginApp(values))
    },
    // validationSchema: addnewSchema
  })
  return (
    <div className='h-screen w-screen bg-slate-700 pt-10'>
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 mx-auto">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-400">Sign in to access your account</p>
        </div>
        <form noValidate className="space-y-12 ng-untouched ng-pristine ng-valid" onSubmit={formik.handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
              <input
                onChange={formik.handleChange} onBlur={formik.handleBlur}
                type="email" name="email" id="email" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
              {formik.touched.email && formik.errors.email &&
                <span className='text-xs text-red-500'>{formik.errors.email}</span>}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">Password</label>
              </div>
              <input
                onChange={formik.handleChange} onBlur={formik.handleBlur}
                type="password" name="password" id="password" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
              {formik.touched.password && formik.errors.password &&
                <span className='text-xs text-red-500'>{formik.errors.password}</span>}
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
              <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Sign up</a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}