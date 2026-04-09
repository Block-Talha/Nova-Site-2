import { NextResponse } from "next/server";

type TeamApplicationPayload = {
  fullName: string;
  phoneNumber: string;
  email: string;
  linkedinProfile: string;
  role: string;
  yearsOfExperience: string;
  city: string;
  portfolioLink: string;
  message: string;
};

function normalizeText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid form data." }, { status: 400 });
  }

  const values = body as Record<string, unknown>;
  const payload: TeamApplicationPayload = {
    fullName: normalizeText(values.fullName),
    phoneNumber: normalizeText(values.phoneNumber),
    email: normalizeText(values.email),
    linkedinProfile: normalizeText(values.linkedinProfile),
    role: normalizeText(values.role),
    yearsOfExperience: normalizeText(values.yearsOfExperience),
    city: normalizeText(values.city),
    portfolioLink: normalizeText(values.portfolioLink),
    message: normalizeText(values.message),
  };

  if (!payload.fullName || !payload.phoneNumber || !payload.email || !payload.role) {
    return NextResponse.json(
      { message: "Please fill all required fields." },
      { status: 400 },
    );
  }

  const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!googleSheetsWebhookUrl) {
    return NextResponse.json(
      {
        message:
          "Form is not configured yet. Add GOOGLE_SHEETS_WEBHOOK_URL in environment variables.",
      },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(googleSheetsWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        ...payload,
        submittedAt: new Date().toISOString(),
        source: "team-join-form",
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          message:
            "Application could not be saved in Google Sheets. Please verify the webhook setup.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Application submitted successfully." });
  } catch {
    return NextResponse.json(
      {
        message:
          "Application could not be submitted right now. Please try again in a moment.",
      },
      { status: 500 },
    );
  }
}
