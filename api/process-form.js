// api/process-form.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nama, email, telepon, subjek, pesan } = req.body; 

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `"${nama}" <${email}>`,
            to: 'm.farhan.hafiz.a@gmail.com',
            subject: `Pesan Baru dari Kontak: ${subjek}`,
            text: `
Nama: ${nama}
Email: ${email}
Telepon: ${telepon}
Subjek: ${subjek}
Pesan:
${pesan}
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ status: 'success', message: 'Pesan Anda telah terkirim. Terima kasih!' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ status: 'error', message: 'Gagal mengirim pesan. Silakan coba lagi.' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}