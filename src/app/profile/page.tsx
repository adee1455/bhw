'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDisconnect } from 'wagmi'




type FormData = {
  name: string
  age: string
  bloodGroup: string
  height: string
  weight: string
  allergies: string
}

const initialFormData: FormData = {
  name: '',
  age: '',
  bloodGroup: '',
  height: '',
  weight: '',
  allergies: '',
}

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

export default function OnboardingWizard() {
  const { disconnect } = useDisconnect()
  const router = useRouter();
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 4) setStep((prev) => prev + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep((prev) => prev - 1)
  }


  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    alert('Onboarding complete! Check console for form data.')
    router.push('/home');
    disconnect()
  }

  
  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfoStep formData={formData} updateFormData={updateFormData} />
      case 2:
        return <PhysicalInfoStep formData={formData} updateFormData={updateFormData} />
      case 3:
        return <MedicalInfoStep formData={formData} updateFormData={updateFormData} />
      case 4:
        return <ReviewStep formData={formData} />
      default:
        return null
    }
  }

  return (
    <div>
      <Navbar/>
    <div className='profiles'>
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Profile Setup</h2>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(step / 4) * 100}%` }}></div>
        </div>
      </div>
      <div className="card-content">{renderStep()}</div>
      <div className="card-footer">
        {step > 1 && (
          <button className="button button-outline" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {step < 4 ? (
          <button className="button" onClick={handleNext}>
            Next
          </button>
        ) : (
          <button className="button" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
      </div>
      </div>
      <style jsx>{`
      .profiles{
          display: flex; // Added to enable flexbox
          flex-direction: column; // Added to stack children vertically
          align-items: center; // Added to center children horizontally
          justify-content: center; // Added to center children vertically
          height: 100vh; // Added to take full height of the viewport
          margin: 0; // Reset margin
      }
        .card {
          width: 400px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          background-color: white;
          
        }
        .card-header {
          padding: 16px;
          border-bottom: 1px solid #e0e0e0;
        }
        .card-title {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
        }
        .progress-bar {
          width: 100%;
          height: 8px;
          background-color: #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
          margin-top: 12px;
        }
        .progress {
          height: 100%;
          background-color: #3b82f6;
          transition: width 0.3s ease-in-out;
        }
        .card-content {
          padding: 16px;
        }
        .card-footer {
          padding: 16px;
          border-top: 1px solid #e0e0e0;
          display: flex;
          justify-content: space-between;
        }
        .button {
          padding: 8px 16px;
          background-color: #3b82f6;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.2s;
        }
        .button:hover {
          background-color: #2563eb;
        }
        .button-outline {
          background-color: transparent;
          color: #3b82f6;
          border: 1px solid #3b82f6;
        }
        .button-outline:hover {
          background-color: rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </div>
  )
}

function PersonalInfoStep({
  formData,
  updateFormData,
}: {
  formData: FormData
  updateFormData: (field: keyof FormData, value: string) => void
}) {
  return (
    <div className="step-content">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={formData.name}
          onChange={(e) => updateFormData('name', e.target.value)}
          placeholder="Enter your full name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={formData.age}
          onChange={(e) => updateFormData('age', e.target.value)}
          placeholder="Enter your age"
        />
      </div>
      <style jsx>{`
        .step-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        label {
          font-size: 14px;
          font-weight: 500;
        }
        input {
          padding: 8px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          font-size: 14px;
        }
        input:focus {
          outline: none;
          border-color: #3b82f6;
        }
      `}</style>
    </div>
  )
}

function PhysicalInfoStep({
  formData,
  updateFormData,
}: {
  formData: FormData
  updateFormData: (field: keyof FormData, value: string) => void
}) {
  return (
    <div className="step-content">
      <div className="form-group">
        <label htmlFor="height">Height (cm)</label>
        <input
          id="height"
          type="number"
          value={formData.height}
          onChange={(e) => updateFormData('height', e.target.value)}
          placeholder="Enter your height in cm"
        />
      </div>
      <div className="form-group">
        <label htmlFor="weight">Weight (kg)</label>
        <input
          id="weight"
          type="number"
          value={formData.weight}
          onChange={(e) => updateFormData('weight', e.target.value)}
          placeholder="Enter your weight in kg"
        />
      </div>
      <style jsx>{`
        .step-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        label {
          font-size: 14px;
          font-weight: 500;
        }
        input {
          padding: 8px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          font-size: 14px;
        }
        input:focus {
          outline: none;
          border-color: #3b82f6;
        }
      `}</style>
    </div>
  )
}

function MedicalInfoStep({
  formData,
  updateFormData,
}: {
  formData: FormData
  updateFormData: (field: keyof FormData, value: string) => void
}) {
  return (
    <div className="step-content">
      <div className="form-group">
        <label htmlFor="bloodGroup">Blood Group</label>
        <select
          id="bloodGroup"
          value={formData.bloodGroup}
          onChange={(e) => updateFormData('bloodGroup', e.target.value)}
        >
          <option value="">Select your blood group</option>
          {bloodGroups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="allergies">Allergies</label>
        <textarea
          id="allergies"
          value={formData.allergies}
          onChange={(e) => updateFormData('allergies', e.target.value)}
          placeholder="List any allergies (if none, type 'None')"
        />
      </div>
      <style jsx>{`
        .step-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        label {
          font-size: 14px;
          font-weight: 500;
        }
        select, textarea {
          padding: 8px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          font-size: 14px;
        }
        select:focus, textarea:focus {
          outline: none;
          border-color: #3b82f6;
        }
        textarea {
          min-height: 100px;
          resize: vertical;
        }
      `}</style>
    </div>
  )
}

function ReviewStep({ formData }: { formData: FormData }) {
  return (
    <div className="review-step">
      <h3 className="review-title">Review Your Information</h3>
      <div className="review-content">
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Age:</strong> {formData.age}
        </p>
        <p>
          <strong>Height:</strong> {formData.height} cm
        </p>
        <p>
          <strong>Weight:</strong> {formData.weight} kg
        </p>
        <p>
          <strong>Blood Group:</strong> {formData.bloodGroup}
        </p>
        <p>
          <strong>Allergies:</strong> {formData.allergies || 'None'}
        </p>
      </div>
      <style jsx>{`
        .review-step {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .review-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }
        .review-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        p {
          margin: 0;
          font-size: 14px;
        }
        strong {
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}