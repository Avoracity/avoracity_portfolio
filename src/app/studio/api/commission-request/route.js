// email handler

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const {
    name, email, commissionType, characterCount,
    description, styleNotes, deadline, refImages,
  } = body;

  if (!name || !email || !description) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,   // your Gmail address
      pass: process.env.GMAIL_PASS,   // Gmail app password (not your main password)
    },
  });

  const html = `
    <div style="font-family: monospace; background: #080808; color: #f0ece4; padding: 40px; max-width: 600px;">
      <p style="color: #c9a97a; font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase;">New Commission Request</p>
      <h2 style="font-size: 28px; font-weight: 300; margin: 8px 0 32px;">${commissionType}</h2>

      <table style="width: 100%; border-collapse: collapse;">
        ${row("Name", name)}
        ${row("Email", `<a href="mailto:${email}" style="color:#c9a97a">${email}</a>`)}
        ${row("Characters", characterCount)}
        ${row("Deadline", deadline || "No preference")}
        ${row("Description", description)}
        ${styleNotes ? row("Style Notes", styleNotes) : ""}
        ${refImages ? row("Reference Links", refImages) : ""}
      </table>
    </div>
  `;

  function row(label, value) {
    return `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #1e1e1e; color: #5a5a5a; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; width: 140px; vertical-align: top;">${label}</td>
        <td style="padding: 12px 0 12px 16px; border-bottom: 1px solid #1e1e1e; color: #f0ece4; font-size: 12px; line-height: 1.6;">${value}</td>
      </tr>
    `;
  }

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,       // sends to yourself
      replyTo: email,                    // so you can reply directly to the client
      subject: `Commission Request — ${commissionType} from ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}