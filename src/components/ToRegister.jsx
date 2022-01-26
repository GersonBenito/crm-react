import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Alert from './Alert';

const ToRegister = () => {

    // initial values of form
    const initialValues = {
        name: '',
        business: '',
        email: '',
        phone: '',
        notes: '',
    }

    // create schema
    const newSchemaClient = Yup.object().shape({
        name: Yup.string()
                .min(3, 'The name is too short')
                .max(20, 'The name is too long')
                .required('Name is required'),
        business: Yup.string()
                .min(3, 'The company name is too short')
                .max(20, 'The company name is too long')
                .required('Business is required'),  
        // email: '',
        // phone: '',
        // notes: '',
    });

    const handleSubmit = (values) =>{
        console.log(values);
    }

    return (
        <div 
            className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'
        >
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
                Add Client
            </h1>

            <Formik
                initialValues={ initialValues }
                onSubmit={ handleSubmit }
                validationSchema={ newSchemaClient }
            >
                {({ errors, touched }) => (
                    <Form className='mt-10'>
                        <div className='mb-4'>
                            <label htmlFor="name" className="text-gray-800">Name:</label>
                            <Field 
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                id="name"
                                placeholder="Name of Client"
                                name="name"
                            />
                            { errors.name && touched.name && <Alert message={errors.name} /> }
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="business" className="text-gray-800">Business:</label>
                            <Field 
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                id="business"
                                placeholder="Business of Client"
                                name="business"
                            />
                            { errors.business && touched.business && <Alert message={errors.business} /> }
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="email" className="text-gray-800">E-mail:</label>
                            <Field 
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                id="email"
                                placeholder="Email of Client"
                                name="email"
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="phone" className="text-gray-800">Phone:</label>
                            <Field 
                                type="tel"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                id="phone"
                                placeholder="Phone of Client"
                                name="phone"
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="notes" className="text-gray-800">Notes:</label>
                            <Field 
                                as="textarea"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50 h-40"
                                id="notes"
                                placeholder="Notes of Client"
                                name="notes"
                            />
                        </div>

                        <input 
                            type="submit" 
                            value="Add Client" 
                            className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg cursor-pointer"
                        />

                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ToRegister;
