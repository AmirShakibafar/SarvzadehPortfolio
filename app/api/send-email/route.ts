import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { evaluation, contact } = body;

    // Basic validation
    if (!contact?.phone) {
      return NextResponse.json(
        { error: "شماره تماس الزامی است." },
        { status: 400 },
      );
    }

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Construct the email payload
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "درخواست مشاوره جدید از سایت",
      html: `
        <div dir="rtl" style="font-family: Tahoma, Arial, sans-serif;">
          <h2>درخواست مشاوره جدید</h2>
          
          <h3>اطلاعات تماس:</h3>
          <p><strong>شماره تماس:</strong> ${contact.phone}</p>
          <p><strong>توضیحات:</strong> ${contact.description || "ندارد"}</p>
          
          <h3>نتایج ارزیابی:</h3>
          <ul>
            <li><strong>موضوع:</strong> ${evaluation.topic || "نامشخص"}</li>
            <li><strong>سابقه مراجعه:</strong> ${evaluation.history || "نامشخص"}</li>
            <li><strong>فوریت:</strong> ${evaluation.urgency || "نامشخص"}</li>
            <li><strong>زمان تماس:</strong> ${evaluation.time || "نامشخص"}</li>
          </ul>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email API Error:", error);
    return NextResponse.json({ error: "خطا در ارسال ایمیل." }, { status: 500 });
  }
}
