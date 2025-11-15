import { NextRequest, NextResponse } from 'next/server';

// @ts-ignore - nodemailer types will be available after server restart
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validasyon
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun.' },
        { status: 400 }
      );
    }

    // E-posta yapılandırması (SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // E-posta içeriği
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'info@mersa.tech',
      subject: `Yeni İletişim Formu: ${subject || 'Genel'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Yeni İletişim Formu Mesajı</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone || 'Belirtilmedi'}</p>
            <p><strong>Konu:</strong> ${subject || 'Genel'}</p>
            <hr style="border: 1px solid #ddd; margin: 20px 0;">
            <p><strong>Mesaj:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
            Bu mesaj MERSA Technology web sitesi iletişim formundan gönderilmiştir.
          </p>
        </div>
      `,
    };

    // E-posta gönder
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Mesajınız başarıyla gönderildi!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('E-posta gönderim hatası:', error);
    return NextResponse.json(
      { error: 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    );
  }
}

