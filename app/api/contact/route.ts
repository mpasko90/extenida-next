import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(30).optional().or(z.literal('')),
  subject: z.string().max(120).optional().or(z.literal('')),
  message: z.string().min(10).max(5000),
  company: z.string().optional(), // honeypot
  source: z.string().optional(),
  t: z.number().optional()
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid form data', issues: parsed.error.flatten() }, { status: 400 });
    }

    const data = parsed.data;

    // Honeypot spam check
    if (data.company && data.company.trim().length > 0) {
      return NextResponse.json({ success: true }); // Silently succeed
    }

    // Basic timing check (ignore if less than 500ms to submit)
    if (typeof data.t === 'number' && data.t < 500) {
      return NextResponse.json({ success: true });
    }

    // Here you could send email or push to CRM.
    // Placeholder logging (avoid logging PII in production without consent)
    console.log('Contact submission', {
      name: data.name,
      email: data.email,
      subject: data.subject,
      hasPhone: !!data.phone,
      source: data.source
    });

    return NextResponse.json({ success: true, message: 'Message received' });
  } catch (e) {
    console.error('Contact API error', e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
