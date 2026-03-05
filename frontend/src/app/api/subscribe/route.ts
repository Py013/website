import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body?.email;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "E-mail é obrigatório" },
        { status: 400 }
      );
    }

    // TODO: integrar com serviço de newsletter (Mailchimp, ConvertKit, etc.)
    // await axios.post(process.env.NEWSLETTER_WEBHOOK, { email });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro ao processar inscrição" },
      { status: 500 }
    );
  }
}
