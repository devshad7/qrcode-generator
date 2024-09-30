'use client'

import { useState } from 'react'
import QRCode from 'qrcode'


const QrGenerator = () => {

    const [inputText, setInputText] = useState('');
    const [qrCodeUrl, setQrCodeUrl] = useState('');

    const generateQRCode = async (e) => {
        e.preventDefault();
        try {
            const url = await QRCode.toDataURL(inputText);
            setQrCodeUrl(url);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen w-full bg-gray-50">
                <div className="w-full max-w-lg p-6 sm:p-8 bg-white rounded-lg shadow-xl">
                    <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
                        QR Code Generator
                    </h1>

                    {/* Form to handle QR Code generation */}
                    <form onSubmit={generateQRCode} className="space-y-4">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter text to generate QR code"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-200 ease-in-out"
                        >
                            Generate QR Code
                        </button>
                    </form>

                    {/* Display QR code if generated */}
                    {qrCodeUrl && (
                        <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center space-y-4">
                            <img src={qrCodeUrl} alt="QR Code" className="rounded-lg shadow-lg max-w-full" />
                            <a
                                href={qrCodeUrl}
                                download="qrcode.png"
                                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 ease-in-out shadow-md"
                            >
                                Download QR Code
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default QrGenerator