'use client';

import { useState, FormEvent } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitState, setSubmitState] = useState<SubmitState>({
    status: 'idle',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState({ status: 'loading', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json() as { success?: boolean; message?: string; error?: string };

      if (response.ok && data.success) {
        setSubmitState({ status: 'success', message: data.message ?? 'Message sent successfully!' });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitState({ status: 'error', message: data.error ?? 'Something went wrong. Please try again.' });
      }
    } catch {
      setSubmitState({ status: 'error', message: 'Network error. Please check your connection and try again.' });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Success / Error Messages */}
      {submitState.status === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
          <span className="text-green-500 text-xl">✓</span>
          <p className="text-green-800 text-sm font-medium">{submitState.message}</p>
        </div>
      )}
      {submitState.status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <span className="text-red-500 text-xl">✕</span>
          <p className="text-red-800 text-sm font-medium">{submitState.message}</p>
        </div>
      )}

      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="label">Full Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="input-field"
            disabled={submitState.status === 'loading'}
          />
        </div>
        <div>
          <label htmlFor="email" className="label">Email Address <span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="input-field"
            disabled={submitState.status === 'loading'}
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="label">Subject <span className="text-red-500">*</span></label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="input-field"
          disabled={submitState.status === 'loading'}
        >
          <option value="" disabled>Select a subject...</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Project Quote">Project Quote</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Partnership">Partnership</option>
          <option value="Careers">Careers</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="label">Message <span className="text-red-500">*</span></label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Tell us about your project or inquiry..."
          className="input-field resize-none"
          disabled={submitState.status === 'loading'}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitState.status === 'loading'}
        className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitState.status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message →'
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        By submitting this form, you agree to our Privacy Policy. We&apos;ll respond within 1-2 business days.
      </p>
    </form>
  );
}
