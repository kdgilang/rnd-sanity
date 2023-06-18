'use client'

import InquiryModel from "@sanity/models/InquiryModel";
import { createInquiryService } from "@services/createInquiryService";
import { useState } from "react";
import classNames from "src/app/helpers/classNames";
import { BasePropsType } from "src/app/types/BasePropsType";
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

type InquiryDataType = {
  code: string
}

export type InquiryPropsType = BasePropsType & {
  className?: string
  data: InquiryDataType
}

export default function Inquiry({ className }: InquiryPropsType) {
  const [submitted, setSubmitted] = useState(false)
  const [isBusy, setIsBusy] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data: any = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    try {
      if (isBusy) return

      setIsBusy(true)

      await createInquiryService(InquiryModel.create({
        email: data['email'],
        phone: data['phone'],
        name: data['name'],
        message: data['message'],
      }))
      setSubmitted(true)
    } catch(err) {
      console.error(err)
    } finally {
      setIsBusy(false)
    }
  };

  if (submitted) {
    return (
      <div className="text-center bg-white p-3 p-md-5 rounded shadow">
        <IoMdCheckmarkCircleOutline className="text-success h1 mb-4" />
        <h2>Thank you!</h2>
        <div>{`We'll be in touch soon.`}</div>
        <button
          className="btn alime-btn btn-2 mt-4"
          onClick={() => { setSubmitted(false) }}>
          Send more inquiry.
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className={classNames(
        "bg-white p-3 p-md-5 rounded shadow",
        className || ""
      )}
    >
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your name" className="form-control" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"  required />
        <small className="form-text text-muted">{`We'll never share your email with anyone else.`}</small>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone number</label>
        <input name="phone" type="tel" className="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Phone Number" />
        <small className="form-text text-muted">{`We'll never share your phone number with anyone else.`}</small>
      </div>
      <div className="form-group">
        <textarea placeholder="Your message" name="message" className="form-control" required />
      </div>
      <div className="text-center mt-4">
      { isBusy && <div className="loader mx-auto mb-4 wow fadeIn"></div> }
        <button className={classNames(
          isBusy ? "disabled" : "",
          "btn alime-btn btn-2"
        )} type="submit">Send inquiry</button>
      </div>
    </form>
  )
}