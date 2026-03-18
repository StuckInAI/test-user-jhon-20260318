import { NextRequest, NextResponse } from 'next/server';
import { getDataSource } from '@/lib/database';
import { ContactSubmission } from '@/lib/entities/ContactSubmission';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as {
      name?: unknown;
      email?: unknown;
      subject?: unknown;
      message?: unknown;
    };

    const { name, email, subject, message } = body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }
    if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
      return NextResponse.json({ error: 'Subject is required' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const dataSource = await getDataSource();
    const repo = dataSource.getRepository(ContactSubmission);

    const submission = repo.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });

    await repo.save(submission);

    return NextResponse.json(
      { success: true, message: 'Your message has been received. We will get back to you soon!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const dataSource = await getDataSource();
    const repo = dataSource.getRepository(ContactSubmission);
    const submissions = await repo.find({ order: { createdAt: 'DESC' } });
    return NextResponse.json({ submissions });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
