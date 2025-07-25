'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

interface ContactFormProps {
  onSuccess: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    comments: '',
  });

  const [commentLength, setCommentLength] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'comments') {
      if (value.length <= 200) {
        setForm({ ...form, [name]: value });
        setCommentLength(value.length);
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setForm({
          name: '',
          surname: '',
          email: '',
          phone: '',
          comments: '',
        });
        setCommentLength(0);
        onSuccess(); // trigger popup
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <Label className='mb-2' htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your first name"
          required
        />
      </div>

      <div>
        <Label className='mb-2' htmlFor="surname">Surname</Label>
        <Input
          id="surname"
          name="surname"
          value={form.surname}
          onChange={handleChange}
          placeholder="Enter your surname"
          required
        />
      </div>

      <div>
        <Label className='mb-2' htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <Label className='mb-2' htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />
      </div>

      <div>
        <Label className='mb-2' htmlFor="comments">Comments</Label>
        <Textarea
          id="comments"
          name="comments"
          value={form.comments}
          onChange={handleChange}
          placeholder="Enter your comments or questions"
          rows={4}
        />
        <p
          className={`text-sm mt-1 ${
            commentLength >= 200 ? 'text-red-600 underline' : 'text-gray-500'
          }`}
        >
          {commentLength} / 200 characters
        </p>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </span>
        ) : (
          'Submit'
        )}
      </Button>
    </form>
  );
}
