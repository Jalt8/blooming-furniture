// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import formData from 'form-data'
import Mailgun from 'mailgun.js'

const API_KEY = process.env.MAILGUN_API_KEY || ''
const DOMAIN = process.env.MAILGUN_DOMAIN || ''
const EMAIL_TO = process.env.EMAIL_TO || ''

const mailgun = new Mailgun(formData)
const client = mailgun.client({ username: 'api', key: API_KEY })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body

    const messageData = {
      from: `${name} <${email}>`,
      to: EMAIL_TO,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    }

    try {
      await client.messages.create(DOMAIN, messageData)
      res.status(200).json({ success: true })
    } catch (error) {
      console.error('Error sending email:', error)
      res.status(500).json({ success: false, error: 'Error sending email' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}