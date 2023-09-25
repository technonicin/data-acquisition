import React, { useEffect, useRef, useState } from 'react'
import { Form, Formik } from 'formik'
import { Button, Card, SvgIcon } from '@mui/material'
import { createAccountSchemas, inits } from 'src/utils/CreateAccountWizardHelper'
import { StepperComponent } from 'src/utils/_StepperComponent'
import { ArrowBack, ArrowForward } from '@mui/icons-material'

function CreateProjectFrom() {

  const stepperRef = useRef(null)
  const stepper = useRef(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState(inits)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values, actions) => {
    if (!stepper.current) {
      return
    }

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex])

    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <div
      ref={stepperRef}
      className='stepper stepper-pills stepper-column'
      id='kt_create_account_stepper'
    >
      <Card sx={{ padding : 2 }}>
        <div className='stepper-nav'>



          <div className='stepper-item current' data-kt-stepper-element='nav'>
            <div className='stepper-wrapper'>
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>1</span>
              </div>
              <div className='stepper-label'>
                <h3 className='stepper-title'>Account Type</h3>

                <div className='stepper-desc fw-bold'>Setup Your Account Details</div>
              </div>
            </div>
            <div className='stepper-line h-40px'></div>


          </div>

          <div className='stepper-item' data-kt-stepper-element='nav'>
            <div className='stepper-wrapper'>
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>2</span>
              </div>
              <div className='stepper-label'>
                <h3 className='stepper-title'>Account Settings</h3>
                <div className='stepper-desc fw-bold'>Setup Your Account Settings</div>
              </div>
            </div>
            <div className='stepper-line h-40px'></div>

          </div>

          <div className='stepper-item' data-kt-stepper-element='nav'>
            <div className='stepper-wrapper'>
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>3</span>
              </div>
              <div className='stepper-label'>
                <h3 className='stepper-title'>Business Info</h3>
                <div className='stepper-desc fw-bold'>Your Business Related Info</div>
              </div>
            </div>
            <div className='stepper-line h-40px'></div>

          </div>

          <div className='stepper-item' data-kt-stepper-element='nav'>
            <div className='stepper-wrapper'>
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>4</span>
              </div>
              <div className='stepper-label'>
                <h3 className='stepper-title'>Billing Details</h3>
                <div className='stepper-desc fw-bold'>Set Your Payment Methods</div>
              </div>
            </div>
            <div className='stepper-line h-40px'></div>

          </div>

          <div className='stepper-item' data-kt-stepper-element='nav'>
            <div className='stepper-wrapper'>
              <div className='stepper-icon w-40px h-40px'>
                <i className='stepper-check fas fa-check'></i>
                <span className='stepper-number'>5</span>
              </div>
              <div className='stepper-label'>
                <h3 className='stepper-title'>Completed</h3>
                <div className='stepper-desc fw-bold'>Woah, we are here</div>
              </div>
            </div>
            <div className='stepper-line h-40px'></div>

          </div>
        </div>
      </Card>

      <Card sx={{ padding : 2 }}>
        <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
          {() => (
            <Form className='py-20 w-100 w-xl-700px px-9' noValidate id='kt_create_account_form'>
              <div className='current' data-kt-stepper-element='content'>
                {/* <Step1 /> */}
              </div>

              <div data-kt-stepper-element='content'>
                {/* <Step2 /> */}
              </div>

              <div data-kt-stepper-element='content'>
                {/* <Step3 /> */}
              </div>

              <div data-kt-stepper-element='content'>
                {/* <Step4 /> */}
              </div>

              <div data-kt-stepper-element='content'>
                {/* <Step5 /> */}
              </div>

              <div className='d-flex flex-stack pt-10'>
                <div className='mr-2'>
                  <Button
                    onClick={prevStep}
                    type='button'
                    size="small"
                    color="primary"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowBack />
                      </SvgIcon>
                    )}
                    className='btn btn-lg btn-light-primary me-3'
                    data-kt-stepper-action='previous'
                  >
                    {/* <KTSVG
                      path='/media/icons/duotune/arrows/arr063.svg'
                      className='svg-icon-4 me-1'
                    /> */}
                    Back
                  </Button>
                </div>

                <div>
                  <Button type='submit'
                    variant="contained"
                    size="small"
                    color="primary"
                    className='btn btn-lg btn-primary me-3'>
                    <span className='indicator-label'>
                      {stepper.current?.currentStepIndex !==
                        stepper.current?.totatStepsNumber - 1 && 'Continue'}
                      {stepper.current?.currentStepIndex ===
                        stepper.current?.totatStepsNumber - 1 && 'Submit'}

                      <SvgIcon fontSize="small">
                        <ArrowForward />
                      </SvgIcon>

                    </span>
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  )
}

export default CreateProjectFrom