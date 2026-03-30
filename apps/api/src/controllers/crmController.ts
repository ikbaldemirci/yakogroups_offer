import { Request, Response } from 'express';

export const sendOfferToCRM = async (req: Request, res: Response) => {
    try {
        const payloadFromFrontend = req.body;

        const crmEndpoint = process.env.CRM_ENDPOINT;
        const crmApiKey = process.env.CRM_API_KEY;

        if (!crmEndpoint || !crmApiKey) {
            console.warn("DIKKAT: CRM API Key veya Endpoint bulunamadı.");
            return res.status(500).json({ error: "Sunucu CRM ayarları eksik." });
        }

        console.log("CRM'e gönderilecek paket:", JSON.stringify(payloadFromFrontend, null, 2));

        const crmResponse = await fetch(crmEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${crmApiKey}` 
            },
            body: JSON.stringify(payloadFromFrontend)
        });

        if (!crmResponse.ok) {
            const errorData = await crmResponse.text();
            throw new Error(`CRM Sunucusu Hatası: ${errorData}`);
        }

        const responseData = await crmResponse.json();

        return res.status(200).json({ 
            success: true, 
            message: "Fırsat CRM sistemine başarıyla kaydedildi.",
            data: responseData
        });

    } catch (error: any) {
        console.error("CRM Entegrasyon Hatası:", error.message);
        return res.status(500).json({ 
            success: false, 
            error: "CRM ile iletişim kurulurken bir hata oluştu." 
        });
    }
};
