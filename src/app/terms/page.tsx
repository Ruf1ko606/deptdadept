import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | DEPT DADEPT',
  description: 'Terms of Service for DEPT DADEPT educational platform',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 font-oswald uppercase">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-300">
          <p className="text-sm text-gray-500">Last Updated: December 14, 2025</p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Educational Purpose</h2>
            <p>
              <strong>IMPORTANT NOTICE:</strong> This website (DEPT DADEPT) is a portfolio project created solely for educational and demonstration purposes. It does not offer real money gambling services. Any references to betting, odds, or financial transactions are fictional and simulated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. No Real Money Gambling</h2>
            <p>
              You acknowledge that you cannot deposit, wager, or win real money on this website. All "credits," "wins," or "losses" displayed are purely virtual and hold no monetary value.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Age Restriction</h2>
            <p>
              Although this is a simulation, the content mimics a gambling environment. Therefore, this site is intended for audiences aged 18 and over. By accessing this site, you confirm that you are of legal age in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p>
              The design, code, and original assets of this website are the property of the developer. Any third-party trademarks, logos, or images (e.g., sports team logos) used are for demonstration purposes only and remain the property of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer of Warranties</h2>
            <p>
              This website is provided "as is" without any warranties. The developer accepts no liability for any reliance placed on the fictional content provided herein.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

