// @ts-ignore
export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const webhookUrl = "https://gasem111.app.n8n.cloud/webhook/316d10fa-2448-4f0e-ac01-c5842c97289e";
    
    // إرسال الطلب إلى n8n
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    
    const data = await response.text();
    
    // إعادة الرد إلى واجهة المستخدم
    return new Response(data, {
      status: response.status,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to process webhook" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
