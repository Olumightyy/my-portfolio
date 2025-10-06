'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Using Formspree - Sign up at formspree.io and replace YOUR_FORM_ID
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-mono text-green-500 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-zinc-900 border border-gray-800 rounded focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 text-gray-300 transition"
          placeholder="Your Name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-mono text-green-500 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-zinc-900 border border-gray-800 rounded focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 text-gray-300 transition"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-mono text-green-500 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-zinc-900 border border-gray-800 rounded focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 text-gray-300 transition resize-none"
          placeholder="Your message..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-4 bg-green-500 text-black font-bold rounded hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {/* Status Messages */}
      {status === 'success' && (
        <p className="text-center text-green-500 font-mono text-sm">
          ✓ Message sent successfully!
        </p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-400 font-mono text-sm">
          ✗ Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}