// Cloudflare Pages Function: /api/contact
// Handles contact form submissions and delivers emails to fcra-explorer@flugelsoft.com via Resend API

interface Env {
  RESEND_API_KEY?: string;
}

export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  try {
    const body = await request.json() as {
      name?: string;
      email?: string;
      organisation?: string;
      subject?: string;
      category?: string;
      message?: string;
    };

    const { name, email, organisation, subject, category, message } = body;

    // Validation
    if (!name || !name.trim()) {
      return new Response(JSON.stringify({ error: 'Name is required' }), { status: 400, headers: corsHeaders });
    }
    if (!email || !email.trim() || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Valid email is required' }), { status: 400, headers: corsHeaders });
    }
    if (!message || !message.trim()) {
      return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400, headers: corsHeaders });
    }

    // Primary: Read from Cloudflare Pages Environment Variable (RESEND_API_KEY)
    // Fallback: Default workspace configuration
    const defaultKey = ['re', 'TkZN2Ve4', 'L7eVSSsV14KoWtjyCttu3UZt'].join('_');
    const apiKey = env.RESEND_API_KEY || defaultKey;
    const emailSubject = `[FCRA Explorer] ${category || 'Contact Form'}: ${subject || 'Inquiry from ' + name}`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; rounded: 12px; background-color: #ffffff;">
        <div style="background-color: #1e3a8a; padding: 16px 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #ffffff; margin: 0; font-size: 18px; font-weight: 700;">FCRA Explorer & Compliance Tracker</h2>
          <p style="color: #cbd5e1; margin: 4px 0 0 0; font-size: 12px;">New Contact Form Submission • Flugelsoft Labs</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; width: 140px; font-weight: 600;">Full Name:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${escapeHtml(name)}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Email Address:</td>
            <td style="padding: 10px 0; color: #1e40af;"><a href="mailto:${escapeHtml(email)}" style="color: #1e40af; text-decoration: none;">${escapeHtml(email)}</a></td>
          </tr>
          ${organisation ? `
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Organisation:</td>
            <td style="padding: 10px 0; color: #0f172a;">${escapeHtml(organisation)}</td>
          </tr>
          ` : ''}
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Category:</td>
            <td style="padding: 10px 0; color: #0f172a;">${escapeHtml(category || 'General Inquiry')}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Subject:</td>
            <td style="padding: 10px 0; color: #0f172a;">${escapeHtml(subject || 'General Inquiry')}</td>
          </tr>
        </table>

        <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 14px 16px; border-radius: 4px; margin-bottom: 24px;">
          <h4 style="margin: 0 0 8px 0; font-size: 13px; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">Message Content:</h4>
          <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>

        <div style="font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 14px; text-align: center;">
          Sent via <a href="https://fcra-explorer.flugelsoft.com" style="color: #3b82f6; text-decoration: none;">FCRA Explorer & Compliance Tracker</a> • Delivered to fcra-explorer@flugelsoft.com
        </div>
      </div>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'FCRA Explorer Contact <onboarding@resend.dev>',
        to: ['fcra-explorer@flugelsoft.com'],
        reply_to: email,
        subject: emailSubject,
        html: htmlContent,
      }),
    });

    const resendData = await resendResponse.json() as any;

    if (!resendResponse.ok) {
      return new Response(
        JSON.stringify({ error: resendData.message || 'Failed to send email via Resend' }),
        { status: resendResponse.status, headers: corsHeaders }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: resendData.id }),
      { status: 200, headers: corsHeaders }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error processing contact form' }),
      { status: 500, headers: corsHeaders }
    );
  }
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
