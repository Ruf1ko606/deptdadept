import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | DEPT DADEPT',
  description: 'Privacy Policy for DEPT DADEPT educational platform',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 font-oswald uppercase">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-300">
          <p className="text-sm text-gray-500">Last Updated: December 14, 2025</p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to DEPT DADEPT. This Privacy Policy explains how we handle information on our website. 
              <strong>Please note: This website is created for educational and demonstration purposes only.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information Collection</h2>
            <p>
              As this is a demonstration project, we do not intentionally collect, store, or process real personal identification information (PII) for commercial purposes. Any forms or input fields on this site are for simulation only, unless explicitly stated otherwise for contact purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Cookies</h2>
            <p>
              We may use local storage or session cookies strictly for the functioning of the website's user interface (e.g., remembering theme preferences or animation states). We do not use third-party tracking cookies for advertising.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p>
              While this is an educational project, we follow best practices to ensure the security of the website. However, please do not submit any sensitive real-world personal or financial information on this platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this educational project, please reach out through the contact channels provided on the main page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

