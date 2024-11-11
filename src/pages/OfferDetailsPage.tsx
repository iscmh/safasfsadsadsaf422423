import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Download, Copy, Loader2, Eye, Play } from 'lucide-react';
import { offers } from '../data/offers';
import YouTube from 'react-youtube';
import EarningsButton from '../components/EarningsButton';
import ReactMarkdown from 'react-markdown';

export default function OfferDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const offer = offers.find(o => o.id === id);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  if (!offer) {
    return <div>Offer not found</div>;
  }

  const handleLandingPagePreview = () => {
    if (offer.id === 'skore-ai') {
      window.open('https://whop.com/skore-ai/', '_blank');
    } else {
      window.open('https://faceless-twitter.webflow.io/', '_blank');
    }
  };

  const handleWebflowDuplicate = () => {
    if (offer.id !== 'skore-ai') {
      window.open('https://webflow.com/made-in-webflow/website/faceless-twitter', '_blank');
    }
  };

  return (
    <div className="animate-fadeIn space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{offer.name}</h1>
          <p className="mt-2 text-lg text-gray-600">{offer.description}</p>
        </div>
        <EarningsButton offerId={offer.id} />
      </div>

      {/* Offer Guidelines */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Offer Guidelines</h2>
        <div className="space-y-2">
          {offer.guidelines.map((guideline, index) => (
            <div key={index} className="text-gray-600">
              <ReactMarkdown
                components={{
                  a: ({ node, ...props }) => (
                    <a
                      {...props}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  ),
                }}
              >
                {guideline}
              </ReactMarkdown>
            </div>
          ))}
        </div>
      </section>

      {/* Payout Box */}
      <section className="bg-blue-50 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Payout Details</h3>
            <p className="text-blue-600 font-semibold mt-1">
              ${offer.payout} Payout ({offer.commission}% Commission)
            </p>
          </div>
          {offer.isRecurring && (
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Recurring
            </span>
          )}
        </div>
      </section>

      {/* Landing Page Section */}
      <section className="space-y-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
        <h2 className="text-xl font-semibold text-gray-900">Landing Page</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {offer.id === 'skore-ai' ? (
              <>
                <p className="text-gray-600">
                  You can create your own landing page as long as it complies with these rules:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Avoid guaranteeing users any specific amount of income</li>
                  <li>Avoid using phrases that imply certainty of financial gain</li>
                </ul>
              </>
            ) : (
              <p className="text-gray-600">
                Use our high-converting landing page template to maximize your earnings.
                Watch the tutorial below to learn how to customize it for your needs.
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleLandingPagePreview}
                className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
              >
                <Eye className="mr-2 h-4 w-4 text-gray-600 group-hover:text-blue-600" />
                <span className="text-gray-700 group-hover:text-gray-900">Preview Landing Page</span>
              </button>
              
              {offer.id !== 'skore-ai' && (
                <button
                  onClick={handleWebflowDuplicate}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                >
                  <Copy className="mr-2 h-4 w-4" />
                  <span>Duplicate to Webflow</span>
                </button>
              )}
            </div>
          </div>

          {offer.id !== 'skore-ai' && (
            <div className="relative aspect-video rounded-lg overflow-hidden bg-white shadow-md">
              {isVideoLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                </div>
              )}
              <YouTube
                videoId="dQw4w9WgXcQ"
                className="w-full"
                onReady={() => setIsVideoLoading(false)}
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: {
                    autoplay: 0,
                    modestbranding: 1,
                    rel: 0,
                  },
                }}
              />
            </div>
          )}
        </div>
      </section>

      {/* Resources Section */}
      {offer.id === 'faceless-twitter' && (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Logos</h3>
              <div className="space-y-3">
                <a
                  href="https://iili.io/2o6MjyP.png"
                  download
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-sm text-gray-600">Logo (Dark)</span>
                  <Download className="w-4 h-4 text-gray-500" />
                </a>
                <a
                  href="https://iili.io/2o6Mh8B.png"
                  download
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-sm text-gray-600">Logo (Light)</span>
                  <Download className="w-4 h-4 text-gray-500" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Clips</h3>
              <div className="space-y-3">
                <a
                  href="https://drive.google.com/drive/u/0/folders/1BX1dl10n0SkyRZsacsepuYJLgWHpPIk5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-sm text-gray-600">Clips Pack 1</span>
                  <Download className="w-4 h-4 text-gray-500" />
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1-71ZUokhNCX7mljuEC2a5WlQyPgyQL8c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-sm text-gray-600">Clips Pack 2</span>
                  <Download className="w-4 h-4 text-gray-500" />
                </a>
                <a
                  href="https://drive.google.com/drive/folders/18k7hbfyWK6zBLV2EsDTND-5m26ZKW1nI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-sm text-gray-600">Clips Pack 3</span>
                  <Download className="w-4 h-4 text-gray-500" />
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1Po8w88Fb9E7P_MX3IWcGx-Gn_2GJexHA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-sm text-gray-600">Clips Pack 4</span>
                  <Download className="w-4 h-4 text-gray-500" />
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1q_2rejZCk1grISqXavCuuG2eGsxh11Fk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-sm text-gray-600">Clips Pack 5</span>
                  <Download className="w-4 h-4 text-gray-500" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}